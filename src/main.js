// module.exports = (function(){
window.HTMLFriendlyLinter = (function(){
    'use strict';

    /*
		// usage ...
		var html = new HTMLFriendlyLinter();
		var errObj = html.lint( htmlString );

		// if there's no errors errObj = false
		// if there are, then errObj looks like this:
		//
		// { message:..., html:...,  line:..., code:... }
		//
		// where 'message' is the plain text error message
		// and 'html' is an html formatted error message 
		// ( with nfo/lnks from the elements/attributes dictionary files )
		// and 'line' is where the line number error was found
		// and 'code' is the htmlString, starting at the part where it err'd out


		---- what it's DOING ------------------------
		checks for legit tags
		checks that tags are closed ( if they're meant to be )
		checks for renegade closing tags ( ie. no closing tags w/out openers )
		checks that singleton's don't have closing tags 
		checks for parsing errors caused by spaces in tags (ie. < h1> )
		checks for parsing errors caused by messing end-tags (ie. </p > or </p ... )
		checks for parsing errors caused by missing closing > in start-tags (ie <p ... )
		checks that existing attributes are formatted properly
		checks that attribute exists && is applicable to that tag
		checks that attribute isn't depreciated
		checks that doctype is right
		checks for consistency in usage of <br> vs <br/>
		checks for consistency <DIV> vs <div> 

		---- what i've got left TO-DO ------------------------
		at the moment i'm ignoring all script/style tags
		... maybe lint those differently? 


    */


    function HTMLFriendlyLinter(){

		// Regular Expressions for parsing tags and attributes by John Resig (ejohn.org)
		// startTag = [ entire-tag, tagname, attr, / ] ( or "" for attr && / if not present )
		// endTag = [ entire-tag, tagname ]
		// attributes = [ tagname, attr... ] ( sadly, attr will include everything after tag, not just attrs )
		this.startTag = /^<([-A-Za-z0-9_]+)((?:\s+\w+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
		this.endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
		this.attributes = /([-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

		this.ctStack = []; // stack of awaiting closing tags 

		this.elementsDict = require('./html-elements-dictionary');
		this.attributesDict = require('./html-attributes-dictionary');

		this.caseConsistency = null;
		this.closeConsistency = null;

		this.errorObj = null;
		this.red = '#F92672';
		this.green = '#a6da27';

		this.lineCount = 0;
    }
	
	HTMLFriendlyLinter.prototype.err = function(){ 
		var msg = arguments[0];
		var formatted = msg.replace(/</g,'&lt;');
			formatted = formatted.replace(/>/g,'&gt;');
		var plain = msg;
		var html = arguments[1];
		
		var arg, larg, lnk, url, nfo, match;

		// create html formatted message
		for (var i = 2; i < arguments.length; i++) { 
			arg = arguments[i].toString();
			larg = arg.toLowerCase();

			if( this.elementsDict.hasOwnProperty(larg) ){
				url = this.elementsDict[larg].url;
				nfo = this.elementsDict[larg].nfo;
				lnk = '<a style="color:'+this.red+';" href="'+url+'" title="'+nfo+'" target="_blank">&lt;'+arg+'&gt;</a>';
				formatted = formatted.replace('${'+(i-1)+'}', lnk );
			} else if( this.attributesDict.hasOwnProperty(larg) ){
				nfo = this.attributesDict[arg].nfo.w3c;
				lnk = '<a style="color:'+this.green+';" href="#" title="'+nfo+'">'+arg+'</a>';
				formatted = formatted.replace('${'+(i-1)+'}', lnk );
			} else {
				// edge cases
				if( formatted.indexOf('attribute in HTML')>=0 ) // if from "not a real attribute"
					lnk = '<a style="color:'+this.green+';" target="_blank">'+arg+'</a>';
				else if( arguments[i] instanceof Array ){ // if elements array list					
					var af = [];
					for (var idx = 0; idx < arguments[i].length; idx++) 
						af[idx]=arguments[i][idx].replace(/</g,'&lt;').replace(/>/g,'&gt;');
					lnk = '<a style="color:'+this.red+';" target="_blank">'+af+'</a>';
				}
				else // otherwise assume its a tag...
					lnk = '<a style="color:'+this.red+';" target="_blank">&lt;'+arg+'&gt;</a>';
				formatted = formatted.replace('${'+(i-1)+'}', lnk );
			}
		
		}
		formatted = formatted.replace(/&lt;<a/g,'<a');
		formatted = formatted.replace(/a>&gt;/g,'a>');		
		while( formatted.match('&lt;\/<a') ){
			formatted = formatted.replace('&lt;\/<a','<a');
			formatted = formatted.replace('target="_blank">&lt;','target="_blank">&lt;/');
		}

		// create console.warn plain txt message
		for (var j = 2; j < arguments.length; j++) { 
			arg = arguments[j];
			plain = plain.replace('${'+(j-1)+'}', arg );
		}		

		// find line of error
		var num, brs = html.match(/\n/g);
		if( !brs ) num = this.lineCount;
		else num = this.lineCount - brs.length;

		// return error object
		this.errorObj = { message:plain, html:formatted,  code:html, line:num }; 
		return false;
	};


	// ---------------------------------------------------------------------------------------
	// ------------------ checkOpenTag Helper Functions -------------------------------------
	// ---------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------

	HTMLFriendlyLinter.prototype.endConfirmed = function( tagname, html ){
		// // see if it needs a closing tag
		// if( this.elementsDict[tagname].singleton ) return true; // nope, all good

		// if it needs a closing tag, set the expectation
		// nextCloseTag = tagname;
		this.ctStack.push( tagname ); // closing tag stack
		
		// is next tag a closing tag?
		var post = html.substring(1+tagname.length); // strip "<tagname" from this tag
		if( post.indexOf("<")==post.indexOf("</") ) { 
			// if so, is it the right one?
			if( post.indexOf("</"+tagname)==post.indexOf("<") ) return true; // ok
			else this.err("either <${1}> is missing a closing tag, or there's a closing tag shortly after with no opening tag, make sure the subsequent tags are all spelled right and aren't missing any < or >",html,this.ctStack[this.ctStack.length-1]); // not ok
			// else this.err(tagname+" not the right closing tag / missing opening tag",html); // not ok 
			// ^ (TODO: this when missing<h1>but diff when missing <p>)
		} 
		// if not, is its closing tag further along
		else if(html.indexOf("</"+tagname+">")>=0) {
			return true; // it's further along, all good
		}
		else { // closing tag is nowhere to be found
			// this.err("<"+tagname+"> missing closing tag",html);
			this.err('<${1}> is missing closing tag',html,tagname);
			return false;
		}
	};

	HTMLFriendlyLinter.prototype.singletonCheck = function( match, html ){
		// see if it needs a closing tag
		if( this.elementsDict[match[1].toLowerCase()].singleton ){
			// if it's a singleton, make sure there isn't a rouge end-tag
			if( html.indexOf("</"+match[1])>=0 ) this.err("<${1}> is not supposed to have an end-tag",html,match[1]);
						
			// also check for consistency in trailing / 
			if( this.closeConsistency===null ) this.closeConsistency = match[3];
			else if( this.closeConsistency !== match[3] ){
				if( match[3]=="/")
					this.err("empty or 'singleton' elements like <${1}> don't require a trailing slash like <${2}/>, but if you choose to use it make sure you remain consistent, there's another singleton on this page that doesn't have a trailing slash" ,html,match[1],match[1]);
				else
					this.err("empty or 'singleton' elements like <${1}> don't require a trailing slash like <${2}/>, but if you choose to use it make sure you remain consistent, there's another singleton on this page that has a trailing slash" ,html,match[1],match[1]);
			}
			
			return true; // all good

		} else {
			return false;
		}

	};


	HTMLFriendlyLinter.prototype.caseCheck = function( match, html ){
		var c;
		if( match[1] == match[1].toLowerCase() ) c = "lower";
		else if( match[1] == match[1].toUpperCase() ) c = "upper";
		else c = null;
		
		if( this.caseConsistency===null ) this.caseConsistency = c;
		else if( this.caseConsistency !== c ){
			this.err("in html5 you can write elements in uppercase like <${1}> or lowercase like <${2}>, but it's important to remain consistent, your doc currently has mixed cases",html,match[1].toUpperCase(),match[1].toLowerCase());
		}
	};

	HTMLFriendlyLinter.prototype.checkAttributes = function( html ){ 	
		// if start-tag has no attr then disregard check
		if( html.match(this.startTag)[2]==="" ) return true;

		if( html.match(this.startTag)[2].indexOf('""')>=0 )
			this.err("<${1}> element has two consequtive quotes in it, did you forget to put the value inside quotes?",html,html.match(this.startTag)[1]);

		// use only the portion of html that is this tag (avoid reading other tags as attr)
		var tag = html.substring(0,html.indexOf('>'));

		// attr[0]=tagname, [1...]=attributes
		var attr = tag.match(this.attributes);

		for (var i = 1; i < attr.length; i++) {
			// if not a singleton attribute, make sure syntax is correct
			if( attr[i].indexOf('=') >= 0 ) {
				var a = attr[i].substring(0,attr[i].indexOf('='));
				if( attr[i].match(/="/g).length > 1 ){ 
					console.log( attr[i].match(/=/g) );
					// if attribute has more than one equal sign
					this.err("<${1}> element's ${2} attribute might be missing a closing quote, or there's too many equal signs",html,attr[0],a);
					return false;
				}
				else if( attr[i][attr[i].indexOf('=')+1]!=='"' ){
					// else if attribute has no quote after the = sign
					this.err("<${1}> element's ${2} attribute might be missing the first quote after the = sign",html,attr[0],a);
					return false;
				}
				else if( attr[i].match(/"/g).length < 2 ){
					// if attribute has quote after equal sign, but only has that one quote
					this.err("<${1}> element's ${2} attribute might be missing closing quote",html,attr[0],a);
					return false;
				}
				else if( attr[i].indexOf('""')>=0){
					// empty value...
					this.err("<${1}> element's ${2} attribute has two consequtive quotes, did you forget to put the value inside quotes?",html,attr[0],a);
					return false;
				} 
			}

			// check that the attribute exists && is applicable
			var name = (attr[i].indexOf('=')<0) ? attr[i] : attr[i].substring(0,attr[i].indexOf('='));
				name = name.toLowerCase();


			if( !(this.attributesDict.hasOwnProperty(name))  ){
				this.err("there is no ${1} attribute in HTML",html,name);			
			} else if( this.attributesDict[name].elements[0] !== "Global attribute" ){
				if( this.attributesDict[name].elements.indexOf("<"+attr[0].toLowerCase()+">")<0 )
					this.err("the <${1}> element can't use the ${2} attribute, that's only for ${3}",html,attr[0],name,this.attributesDict[name].elements);
			}
			// check that attribute isn't depreciated 
			if( this.attributesDict.hasOwnProperty(name) && !(this.attributesDict[name].supported) )
				this.err("the ${1} attribute is no longer supported, you should be using CSS for this instead",html,name);
			
		}

		// if it hasn't err'd yet...
		return true;
	};


	// ---------------------------------------------------------------------------------------
	// ------------------ open + close tag checker functions ---------------------------------
	// ---------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------


	HTMLFriendlyLinter.prototype.checkOpeningTag = function( match, html ){
		// make sure it can be linted 
		// ( match[0]=entire tag, [1]=tag name, [2]=attributes )
		if( !match ){
			// if not, make sure not missing closing >
			var nxtSpace = html.indexOf(" ");
			var nxtBr = html.indexOf("\n");
			var nxt = (nxtSpace<=nxtBr) ? nxtSpace : nxtBr;
			var tagname = html.substring(1,nxt);		
			this.err("the <${1}> might be missing a closing >, or maybe there's something in the tag that shouldn't be",html,tagname); 
			return false;
		}

		// make sure it's a legit tag 
		if( !(this.elementsDict.hasOwnProperty(match[1].toLowerCase())) ){
			this.err("<${1}> is not a real HTML element",html,match[1]);	
			return false;
		} 

		// check for consistency in case
		this.caseCheck( match, html );

		// check it's attributes
		if( !this.checkAttributes(html) ) return false;

		// check if it needs a closing tag
		if( !this.singletonCheck(match,html) ){
			// if not a singleton, check for end-tag
			return this.endConfirmed( match[1], html );				
		} else {
			return true;
		}
	};


	HTMLFriendlyLinter.prototype.checkClosingTag = function( match, html ){
		// check that closing tag is formatted properly ( not missing > or spaced </p > )
		if( match[0].length !== match[1].length+3 ){
			this.err("closing tag should look like this: </${1}>, make sure there aren't any spaces, extra characters, or missing characters",html,match[1]);
			return false;
		}

		if( this.ctStack.length > 0 ){
			// first spotted index of tagname in stack
			var i = this.ctStack.indexOf(match[1]); 

			if( this.ctStack[i] == this.ctStack[this.ctStack.length-1] ){ // is last tag on stack expected?
				// if so, remove closing tag from stack
				this.ctStack.splice( i, 1 );
				// all checked out! 
				return true;
			}
			else {
				this.err("either <'${1}> is misisng a closing tag, or the closing ${2} tag is missing its opening tag",html,this.ctStack[this.ctStack.length-1],match[0]); // not ok
			}

		} else {
			this.err('not expecting any closing tags, but found a </${1}>',html,match[0]);
		}
	};


	// ---------------------------------------------------------------------------------------
	// ------------------ main lint functions -----------------------------------------------
	// ---------------------------------------------------------------------------------------
	// ---------------------------------------------------------------------------------------


	HTMLFriendlyLinter.prototype.removeCSSandJS = function( html ) {
		// remove all JS
		while (html.indexOf("\<script") >= 0) {
			var jsStart = html.indexOf("\<script");
			var jsEnd = html.indexOf("\<\/script>");
			var jsBetween = html.substring(jsStart,jsEnd);
			var jsBrs = (jsBetween.match(/\n/g)) ? jsBetween.match(/\n/g).length : 0;
			var jsFiller = "";
			for (var j = 0; j < jsBrs; j++) jsFiller += "\n";			
			html = html.substring(0, jsStart) + jsFiller + html.substring(jsEnd+9, html.length);
		}
		// remove all CSS
		while (html.indexOf("\<style") >= 0) {
			var cssStart = html.indexOf("\<style");
			var cssEnd = html.indexOf("\<\/style>");
			var cssBetween = html.substring(cssStart,cssEnd);
			var cssBrs = (cssBetween.match(/\n/g)) ? cssBetween.match(/\n/g).length : 0;
			var cssFiller = "";
			for (var i = 0; i < cssBrs; i++) cssFiller += "\n";
			html = html.substring(0, cssStart) + cssFiller + html.substring(cssEnd+8, html.length);
		}
		return html;
	};

	HTMLFriendlyLinter.prototype.checkDoctype = function( html ){
		var code = html.toLowerCase();
		if(  code.indexOf('<!doctype html>')!==0 ){
			// check first part
			if( code.indexOf('<doctype')===0 ){
				this.err("it's odd, but you need a ! mark after the < like this: <!DOCTYPE html>",html);
				return false;
			} else if( code.indexOf('<!doctype html public')===0  ){
				var d = new Date();
				this.err("it's "+d.getFullYear()+" not 2000, you shold be using the html5 doctype: <!DOCTYPE html>",html);
				return false;
			} else if(code.indexOf('<!doctype')!==0){
				this.err("don't forget the <!DOCTYPE html>, this goes at the very top of your html doc, if it's there check your spelling",html);
				return false;
			}
			// if start looks good, check rest of it
			var sansMark = code.replace("!","");
			var tag = sansMark.match( this.startTag );
			if( !tag ) {
				this.err("something's wrong with your <!DOCTYPE html>, might be missing the closing >",html);
				return false;
			}
			else {
				// console.log(tag[0].length);
				if(tag[2]!=="html"){
					this.err("something's wrong with your <!DOCTYPE html>, might be missing the html part, or has extra spaces/characters",html);
					return false;
				}
				else if(tag[0].length!==14){
					this.err("something's wrong with your <!DOCTYPE html>, might have extra spaces or characters",html);
					return false;
				}
			}
		} else {
			// if it looks good
			return html.substring(15);
		}
	};


	HTMLFriendlyLinter.prototype.cathLintErrz = function( html ){
		if( html.indexOf('< ')>=0 || html.indexOf('<\t')>=0 || html.indexOf('<\n')>=0 ){
		
			var idx = html.indexOf('< ') || html.indexOf('<\n') || html.indexOf('<\t') || "?";
			this.err("you might have a space inside an opening < tag>, or you might be using the < symbol, in html you must use &lt; instead of < and &gt; instead of >",html.substring(idx));
		
		} else if( html.indexOf('</ ')>=0 || html.indexOf('</\t')>=0 || html.indexOf('</\n')>=0 ){

			var idx2 = html.indexOf('</ ') || html.indexOf('</\t') || html.indexOf('</\n') || "?";
			this.err("don't put spaces in a closing tag, keep it tight",html.substring(idx2));
		}
	};


	HTMLFriendlyLinter.prototype.checkAndRemove = function( html ){

		var type = (function(str){
				 if( str.indexOf("<!--")===0 ) return "comment";
			else if( str.indexOf("</")===0 ) return "end-tag";
			else if( str.indexOf("<")===0 ) return "start-tag";
			else return "plain-text";			
		})( html );


		if( type=="comment" ){
		
			var otherEnd = html.indexOf('-->');
			// remove it
			if(otherEnd>=0) return html.substring(otherEnd+3);
			else this.err("missing closing comment mark, two dashes and a greater-than sign, like this: -->",html); 
		
		} else if( type=="plain-text" ){

			// console.log(this.ctStack, html.indexOf('<')+" chars" ); 

			var otherEnd2 = html.indexOf('<');
			// remove it
			if(otherEnd2>=0)	return html.substring(otherEnd2);
			else 			return ""; // finished

		} else if( type=="start-tag" ){

			// console.log(this.ctStack, html.match( this.startTag )[0] ); 

			var m = html.match( this.startTag ); // [0]=entire tag, [1]=tag name
											// if opening tag checks out, remove it
			if( this.checkOpeningTag( m, html ) ) return html.substring( m[0].length );


		} else if( type=="end-tag" ){
			
			// console.log(this.ctStack, html.match( this.endTag )[0] ); 
			
			var m2 = html.match( this.endTag ); 	// [0]=entire tag, [1]=tag name
											// if closing tag checks out, remove it
			if( this.checkClosingTag(m2, html) ) return html.substring( m2[0].length );
		
		}

	};


	// ------------------ PUBLIC lint FUNCTION ----------------------------------------------
	// ---------------------------------------------------------------------------------------

	HTMLFriendlyLinter.prototype.lint = function( html ){
		// reset....
		this.ctStack = [];
		this.errorObj = null;
		this.caseConsistency = null; 
		this.closeConsistency = null;
		this.lineCount = (function(str){
			var br = 0;
			while( str.indexOf('\n')>=0 ){
				br++;
				str = str.substring( str.indexOf('\n')+1 );
			}
			return br;
		})(html);

		// remove all js && css b4 parsing
		html = this.removeCSSandJS(html);

		// check for doctype first && foremost
		html = this.checkDoctype(html); 
		if( this.errorObj ) return this.errorObj;

		// catch dangerous < > usage err
		this.cathLintErrz(html); 
		if( this.errorObj ) return this.errorObj;
		

		while( html ){
			// check for any errors from last check/remove
			if( this.errorObj ) return this.errorObj;
			// otherwise, check next piece && remove it
			html = this.checkAndRemove( html );
		}

		if( this.errorObj ){
			return this.errorObj;
		} else {
			return false;
		}
	};

	return HTMLFriendlyLinter;

}());