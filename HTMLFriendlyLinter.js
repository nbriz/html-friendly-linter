(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*
    scrapped from: http://www.w3schools.com/tags/ref_attributes.asp
    and also: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#Attribute_list
*/
module.exports = {
    accept: {
        elements: ["<form>", "<input>"],
        supported: true,
        nfo: { w3c: "Specifies the types of files that the server accepts (only for type=\"file\").", mdn: "List of types the server accepts, typically a file type."}
    },
    "accept-charset": {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Specifies the character encodings that are to be used for the form submission.", mdn: "List of supported charsets."}
    },
    accesskey: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies a shortcut key to activate/focus an element.", mdn: "Defines a keyboard shortcut to activate or add focus to the element."}
    },
    action: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Specifies where to send the form-data when a form is submitted.", mdn: "The URI of a program that processes the information submitted via the form."}
    },
    align: {
        elements: ["<applet>", "<caption>", "<col>", "<colgroup>", "<hr>", "<iframe>", "<img>", "<table>", "<tbody>", "<td>", "<tfoot>", "<th>", "<thead>", "<tr>"],
        supported: false,
        nfo: { w3c: "Specifies the alignment according to surrounding elements. Use CSS instead.", mdn: "Specifies the horizontal alignment of the element."}
    },
    alt: {
        elements: ["<applet>", "<area>", "<img>", "<input>"],
        supported: true,
        nfo: { w3c: "Specifies an alternate text when the original element fails to display.", mdn: "Alternative text in case an image can't be displayed."}
    },
    async: {
        elements: ["<script>"],
        supported: true,
        nfo: { w3c: "Specifies that the script is executed asynchronously (only for external scripts).", mdn: "Indicates that the script should be executed asynchronously."}
    },
    autocomplete: {
        elements: ["<form>", "<input>"],
        supported: true,
        nfo: { w3c: "Specifies whether the <form> or the <input> element should have autocomplete enabled.", mdn: "Indicates whether controls in this form can by default have their values automatically completed by the browser."}
    },
    autofocus: {
        elements: ["<button>", "<input>", "<keygen>", "<select>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies that the element should automatically get focus when the page loads.", mdn: "The element should be automatically focused after the page loaded."}
    },
    autoplay: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies that the audio/video will start playing as soon as it is ready", mdn: "The audio or video should play as soon as possible."}
    },
    autosave: {
        elements: ["<input>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "Previous values should persist dropdowns of selectable values across page loads."}
    },
    bgcolor: {
        elements: ["<body>", "<col>", "<colgroup>", "<marquee>", "<table>", "<tbody>", "<tfoot>", "<td>", "<th>", "<tr>"],
        supported: false,
        nfo: { w3c: "Specifies the background color of an element. Use CSS instead.", mdn: "Background color of the element.  Note: This is a legacy attribute. Please use the CSS background-color property instead."}
    },
    border: {
        elements: ["<img>", "<object>", "<table>"],
        supported: false,
        nfo: { w3c: "Specifies the width of the border of an element. Use CSS instead.", mdn: "The border width.  Note: This is a legacy attribute. Please use the CSS border property instead."}
    },
    buffered: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "Contains the time range of already buffered media."}
    },
    challenge: {
        elements: ["<keygen>"],
        supported: true,
        nfo: { w3c: "Specifies that the value of the <keygen> element should be challenged when submitted.", mdn: "A challenge string that is submitted along with the public key."}
    },
    charset: {
        elements: ["<meta>", "<script>"],
        supported: true,
        nfo: { w3c: "Specifies the character encoding.", mdn: "Declares the character encoding of the page or script."}
    },
    checked: {
        elements: ["<command>", "<input>"],
        supported: true,
        nfo: { w3c: "Specifies that an <input> element should be pre-selected when the page loads (for type=\"checkbox\" or type=\"radio\").", mdn: "Indicates whether the element should be checked on page load."}
    },
    cite: {
        elements: ["<blockquote>", "<del>", "<ins>", "<q>"],
        supported: true,
        nfo: { w3c: "Specifies a URL which explains the quote/deleted/inserted text.", mdn: "Contains a URI which points to the source of the quote or change."}
    },
    class: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies one or more classnames for an element (refers to a class in a style sheet).", mdn: "Often used with CSS to style elements with common properties."}
    },
    code: {
        elements: ["<applet>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "Specifies the URL of the applet's class file to be loaded and executed."}
    },
    codebase: {
        elements: ["<applet>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "This attribute gives the absolute or relative URL of the directory where applets' .class files referenced by the code attribute are stored."}
    },
    color: {
        elements: ["<basefont>", "<font>", "<hr>"],
        supported: false,
        nfo: { w3c: "Specifies the text color of an element. Use CSS instead.", mdn: "This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format.  Note: This is a legacy attribute. Please use the CSS color property instead."}
    },
    cols: {
        elements: ["<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies the visible width of a text area.", mdn: "Defines the number of columns in a textarea."}
    },
    colspan: {
        elements: ["<td>", "<th>"],
        supported: true,
        nfo: { w3c: "Specifies the number of columns a table cell should span", mdn: "The colspan attribute defines the number of columns a cell should span."}
    },
    content: {
        elements: ["<meta>"],
        supported: true,
        nfo: { w3c: "Gives the value associated with the http-equiv or name attribute", mdn: "A value associated with http-equiv or name depending on the context."}
    },
    contenteditable: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies whether the content of an element is editable or not.", mdn: "Indicates whether the element's content is editable."}
    },
    contextmenu: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies a context menu for an element. The context menu appears when a user right-clicks on the element.", mdn: "Defines the ID of a <menu> element which will serve as the element's context menu."}
    },
    controls: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies that audio/video controls should be displayed (such as a play/pause button etc).", mdn: "Indicates whether the browser should show playback controls to the user."}
    },
    coords: {
        elements: ["<area>"],
        supported: true,
        nfo: { w3c: "Specifies the coordinates of the area.", mdn: "A set of values specifying the coordinates of the hot-spot region."}
    },
    data: {
        elements: ["<object>"],
        supported: true,
        nfo: { w3c: "Specifies the URL of the resource to be used by the object.", mdn: "Specifies the URL of the resource."}
    },
    "data-*": {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Used to store custom data private to the page or application.", mdn: "Lets you attach custom attributes to an HTML element."}
    },
    datetime: {
        elements: ["<del>", "<ins>", "<time>"],
        supported: true,
        nfo: { w3c: "Specifies the date and time.", mdn: "Indicates the date and time associated with the element."}
    },
    default: {
        elements: ["<track>"],
        supported: true,
        nfo: { w3c: "Specifies that the track is to be enabled if the user's preferences do not indicate that another track would be more appropriate.", mdn: "Indicates that the track should be enabled unless the user's preferences indicate something different."}
    },
    defer: {
        elements: ["<script>"],
        supported: true,
        nfo: { w3c: "Specifies that the script is executed when the page has finished parsing (only for external scripts).", mdn: "Indicates that the script should be executed after the page has been parsed."}
    },
    dir: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies the text direction for the content in an element.", mdn: "Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)"}
    },
    dirname: {
        elements: ["<input>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies that the text direction will be submitted.", mdn: " "}
    },
    disabled: {
        elements: ["<button>", "<command>", "<fieldset>", "<input>", "<keygen>", "<optgroup>", "<option>", "<select>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies that a the specified element/group of elements should be disabled.", mdn: "Indicates whether the user can interact with the element."}
    },
    download: {
        elements: ["<a>", "<area>"],
        supported: true,
        nfo: { w3c: "Specifies that the target will be downloaded when a user clicks on the hyperlink.", mdn: "Indicates that the hyperlink is to be used for downloading a resource."}
    },
    draggable: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies whether an element is draggable or not.", mdn: "Defines whether the element can be dragged."}
    },
    dropzone: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies whether the dragged data is copied, moved, or linked, when dropped.", mdn: "Indicates that the element accept the dropping of content on it."}
    },
    enctype: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Specifies how the form-data should be encoded when submitting it to the server (only for method=\"post\").", mdn: "Defines the content type of the form date when the method is POST."}
    },
    for: {
        elements: ["<label>", "<output>"],
        supported: true,
        nfo: { w3c: "Specifies which form element(s) a label/calculation is bound to.", mdn: "Describes elements which belongs to this one."}
    },
    form: {
        elements: ["<button>", "<fieldset>", "<input>", "<keygen>", "<label>", "<meter>", "<object>", "<output>", "<progress>", "<select>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies the name of the form the element belongs to", mdn: "Indicates the form that is the owner of the element."}
    },
    formaction: {
        elements: ["<input>", "<button>"],
        supported: true,
        nfo: { w3c: "Specifies where to send the form-data when a form is submitted. Only for type=\"submit\".", mdn: "Indicates the action of the element, overriding the action defined in the <form>."}
    },
    headers: {
        elements: ["<td>", "<th>"],
        supported: true,
        nfo: { w3c: "Specifies one or more headers cells a cell is related to.", mdn: "IDs of the <th> elements which applies to this element."}
    },
    height: {
        elements: ["<canvas>", "<embed>", "<iframe>", "<img>", "<input>", "<object>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies the height of the element.", mdn: "Specifies the height of elements listed here. For all other elements, use the CSS height property.  Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead."}
    },
    hidden: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies that an element is not yet, or is no longer, relevant.", mdn: "Prevents rendering of given element, while keeping child elements, e.g. script elements, active."}
    },
    high: {
        elements: ["<meter>"],
        supported: true,
        nfo: { w3c: "Specifies the range that is considered to be a high value.", mdn: "Indicates the lower bound of the upper range."}
    },
    href: {
        elements: ["<a>", "<area>", "<base>", "<link>"],
        supported: true,
        nfo: { w3c: "Specifies the URL of the page the link goes to.", mdn: " The URL of a linked resource."}
    },
    hreflang: {
        elements: ["<a>", "<area>", "<link>"],
        supported: true,
        nfo: { w3c: "Specifies the language of the linked document.", mdn: "Specifies the language of the linked resource."}
    },
    "http-equiv": {
        elements: ["<meta>"],
        supported: true,
        nfo: { w3c: "Provides an HTTP header for the information/value of the content attribute.", mdn: " "}
    },
    icon: {
        elements: ["<command>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "Specifies a picture which represents the command."}
    },
    id: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies a unique id for an element.", mdn: "Often used with CSS to style a specific element. The value of this attribute must be unique."}
    },
    ismap: {
        elements: ["<img>"],
        supported: true,
        nfo: { w3c: "Specifies an image as a server-side image-map.", mdn: "Indicates that the image is part of a server-side image map."}
    },
    itemprop: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    keytype: {
        elements: ["<keygen>"],
        supported: true,
        nfo: { w3c: "Specifies the security algorithm of the key.", mdn: "Specifies the type of key generated."}
    },
    kind: {
        elements: ["<track>"],
        supported: true,
        nfo: { w3c: "Specifies the kind of text track.", mdn: "Specifies the kind of text track."}
    },
    label: {
        elements: ["<track>"],
        supported: true,
        nfo: { w3c: "Specifies the title of the text track.", mdn: "Specifies a user-readable title of the text track."}
    },
    lang: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies the language of the element's content.", mdn: "Defines the language used in the element."}
    },
    language: {
        elements: ["<script>"],
        supported: true,
        nfo: { w3c: undefined, mdn: "Defines the script language used in the element."}
    },
    list: {
        elements: ["<input>"],
        supported: true,
        nfo: { w3c: "Refers to a <datalist> element that contains pre-defined options for an <input> element.", mdn: "Identifies a list of pre-defined options to suggest to the user."}
    },
    loop: {
        elements: ["<audio>", "<bgsound>", "<marquee>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies that the audio/video will start over again, every time it is finished.", mdn: "Indicates whether the media should start playing from the start when it's finished."}
    },
    low: {
        elements: ["<meter>"],
        supported: true,
        nfo: { w3c: "Specifies the range that is considered to be a low value.", mdn: "Indicates the upper bound of the lower range."}
    },
    manifest: {
        elements: ["<html>"],
        supported: true,
        nfo: { w3c: "Specifies the address of the document's cache manifest (for offline browsing).", mdn: "Specifies the URL of the document's cache manifest."}
    },
    max: {
        elements: ["<input>", "<meter>", "<progress>"],
        supported: true,
        nfo: { w3c: "Specifies the maximum value.", mdn: "Indicates the maximum value allowed."}
    },
    maxlength: {
        elements: ["<input>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies the maximum number of characters allowed in an element.", mdn: "Defines the maximum number of characters allowed in the element."}
    },
    media: {
        elements: ["<a>", "<area>", "<link>", "<source>", "<style>"],
        supported: true,
        nfo: { w3c: "Specifies what media/device the linked document is optimized for.", mdn: "Specifies a hint of the media for which the linked resource was designed."}
    },
    method: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Specifies the HTTP method to use when sending form-data.", mdn: "Defines which HTTP method to use when submitting the form. Can be GET (default) or POST."}
    },
    min: {
        elements: ["<input>", "<meter>"],
        supported: true,
        nfo: { w3c: "Specifies a minimum value.", mdn: "Indicates the minimum value allowed."}
    },
    multiple: {
        elements: ["<input>", "<select>"],
        supported: true,
        nfo: { w3c: "Specifies that a user can enter more than one value.", mdn: "Indicates whether multiple values can be entered in an input of the type email or file."}
    },
    muted: {
        elements: ["<video>"],
        supported: true,
        nfo: { w3c: "Specifies that the audio output of the video should be muted.", mdn: "Indicates whether the audio will be initially silenced on page load."}
    },
    name: {
        elements: ["<button>", "<form>", "<fieldset>", "<iframe>", "<input>", "<keygen>", "<object>", "<output>", "<select>", "<textarea>", "<map>", "<meta>", "<param>"],
        supported: true,
        nfo: { w3c: "Specifies the name of the element.", mdn: "Name of the element. For example used by the server to identify the fields in form submits."}
    },
    novalidate: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Specifies that the form should not be validated when submitted.", mdn: "This attribute indicates that the form shouldn't be validated when submitted."}
    },
    open: {
        elements: ["<details>"],
        supported: true,
        nfo: { w3c: "Specifies that the details should be visible (open) to the user", mdn: "Indicates whether the details will be shown on page load."}
    },
    optimum: {
        elements: ["<meter>"],
        supported: true,
        nfo: { w3c: "Specifies what value is the optimal value for the gauge.", mdn: "Indicates the optimal numeric value."}
    },
    pattern: {
        elements: ["<input>"],
        supported: true,
        nfo: { w3c: "Specifies a regular expression that an <input> element's value is checked against.", mdn: "Defines a regular expression which the element's value will be validated against."}
    },
    ping: {
        elements: ["<a>", "<area>"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    placeholder: {
        elements: ["<input>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies a short hint that describes the expected value of the element.", mdn: "Provides a hint to the user of what can be entered in the field."}
    },
    poster: {
        elements: ["<video>"],
        supported: true,
        nfo: { w3c: "Specifies an image to be shown while the video is downloading, or until the user hits the play button.", mdn: "A URL indicating a poster frame to show until the user plays or seeks."}
    },
    preload: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies if and how the author thinks the audio/video should be loaded when the page loads", mdn: "Indicates whether the whole resource, parts of it or nothing should be preloaded."}
    },
    radiogroup: {
        elements: ["<command>"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    readonly: {
        elements: ["<input>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies that the element is read-only", mdn: "Indicates whether the element can be edited."}
    },
    rel: {
        elements: ["<a>", "<area>", "<link>"],
        supported: true,
        nfo: { w3c: "Specifies the relationship between the current document and the linked document.", mdn: "Specifies the relationship of the target object to the link object."}
    },
    required: {
        elements: ["<input>", "<select>", "<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies that the element must be filled out before submitting the form.", mdn: "Indicates whether this element is required to fill out or not."}
    },
    reversed: {
        elements: ["<ol>"],
        supported: true,
        nfo: { w3c: "Specifies that the list order should be descending (9,8,7...).", mdn: "Indicates whether the list should be displayed in a descending order instead of a ascending."}
    },
    rows: {
        elements: ["<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies the visible number of lines in a text area.", mdn: "Defines the number of rows in a text area."}
    },
    rowspan: {
        elements: ["<td>", "<th>"],
        supported: true,
        nfo: { w3c: "Specifies the number of rows a table cell should span", mdn: "Defines the number of rows a table cell should span over."}
    },
    sandbox: {
        elements: ["<iframe>"],
        supported: true,
        nfo: { w3c: "Enables an extra set of restrictions for the content in an <iframe>", mdn: " "}
    },
    scope: {
        elements: ["<th>"],
        supported: true,
        nfo: { w3c: "Specifies whether a header cell is a header for a column, row, or group of columns or rows.", mdn: " "}
    },
    scoped: {
        elements: ["<style>"],
        supported: true,
        nfo: { w3c: "Specifies that the styles only apply to this element's parent element and that element's child elements", mdn: " "}
    },
    seamless: {
        elements: ["<iframe>"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    selected: {
        elements: ["<option>"],
        supported: true,
        nfo: { w3c: "Specifies that an option should be pre-selected when the page loads.", mdn: "Defines a value which will be selected on page load."}
    },
    shape: {
        elements: ["<a>", "<area>"],
        supported: true,
        nfo: { w3c: "Specifies the shape of the area.", mdn: " "}
    },
    size: {
        elements: ["<input>", "<select>"],
        supported: true,
        nfo: { w3c: "Specifies the width, in characters (for <input>) or specifies the number of visible options (for <select>)", mdn: "Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters."}
    },
    sizes: {
        elements: ["<link>", "<img>", "<source>"],
        supported: true,
        nfo: { w3c: "Specifies the size of the linked resource.", mdn: " "}
    },
    span: {
        elements: ["<col>", "<colgroup>"],
        supported: true,
        nfo: { w3c: "Specifies the number of columns to span.", mdn: " "}
    },
    spellcheck: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies whether the element is to have its spelling and grammar checked or not.", mdn: "Indicates whether spell checking is allowed for the element."}
    },
    src: {
        elements: ["<audio>", "<embed>", "<iframe>", "<img>", "<input>", "<script>", "<source>", "<track>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies the URL of the media file.", mdn: "The URL of the embeddable content."}
    },
    srcdoc: {
        elements: ["<iframe>"],
        supported: true,
        nfo: { w3c: "Specifies the HTML content of the page to show in the <iframe>.", mdn: " "}
    },
    srclang: {
        elements: ["<track>"],
        supported: true,
        nfo: { w3c: "Specifies the language of the track text data (required if kind=\"subtitles\").", mdn: " "}
    },
    srcset: {
        elements: ["<img>"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    start: {
        elements: ["<ol>"],
        supported: true,
        nfo: { w3c: "Specifies the start value of an ordered list.", mdn: "Defines the first number if other than 1."}
    },
    step: {
        elements: ["<input>"],
        supported: true,
        nfo: { w3c: "Specifies the legal number intervals for an input field.", mdn: " "}
    },
    style: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies an inline CSS style for an element.", mdn: "Defines CSS styles which will override styles previously set."}
    },
    summary: {
        elements: ["<table>"],
        supported: true,
        nfo: { w3c: undefined, mdn: " "}
    },
    tabindex: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies the tabbing order of an element.", mdn: "Overrides the browser's default tab order and follows the one specified instead."}
    },
    target: {
        elements: ["<a>", "<area>", "<base>", "<form>"],
        supported: true,
        nfo: { w3c: "Specifies the target for where to open the linked document or where to submit the form.", mdn: " "}
    },
    title: {
        elements: ["Global attribute"],
        supported: true,
        nfo: { w3c: "Specifies extra information about an element.", mdn: "Text to be displayed in a tooltip when hovering over the element."}
    },
    type: {
        elements: ["<button>", "<input>", "<command>", "<embed>", "<object>", "<script>", "<source>", "<style>", "<menu>","<link>"],
        supported: true,
        nfo: { w3c: "Specifies the type of element.", mdn: "Defines the type of the element."}
    },
    usemap: {
        elements: ["<img>", "<input>", "<object>"],
        supported: true,
        nfo: { w3c: "Specifies an image as a client-side image-map.", mdn: " "}
    },
    value: {
        elements: ["<button>", "<option>", "<input>", "<li>", "<meter>", "<progress>", "<param>"],
        supported: true,
        nfo: { w3c: "Specifies the value of the element.", mdn: "Defines a default value which will be displayed in the element on page load."}
    },
    width: {
        elements: ["<canvas>", "<embed>", "<iframe>", "<img>", "<input>", "<object>", "<video>"],
        supported: true,
        nfo: { w3c: "Specifies the width of the element.", mdn: "For the elements listed here, this establishes the element's width.  Note: For all other instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead."}
    },
    wrap: {
        elements: ["<textarea>"],
        supported: true,
        nfo: { w3c: "Specifies how the text in a text area is to be wrapped when submitted in a form.", mdn: "Indicates whether the text should be wrapped."}
    },
    onabort: {
        elements: ["<audio>", "<embed>", "<img>", "<object>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run on abort.", mdn: undefined}
    },
    onafterprint: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run after the document is printed.", mdn: undefined}
    },
    onbeforeprint: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run before the document is printed", mdn: undefined}
    },
    onbeforeunload: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when the document is about to be unloaded.", mdn: undefined}
    },
    onblur: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element loses focus.", mdn: undefined}
    },
    oncanplay: {
        elements: ["<audio>", "<embed>", "<object>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when a file is ready to start playing (when it has buffered enough to begin).", mdn: undefined}
    },
    oncanplaythrough: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when a file can be played all the way to the end without pausing for buffering.", mdn: undefined}
    },
    onchange: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the value of the element is changed.", mdn: undefined}
    },
    onclick: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element is being clicked.", mdn: undefined}
    },
    oncontextmenu: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a context menu is triggered", mdn: undefined}
    },
    oncopy: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the content of the element is being copied.", mdn: undefined}
    },
    oncuechange: {
        elements: ["<track>"],
        supported: true,
        nfo: { w3c: "Script to be run when the cue changes in a <track> element", mdn: undefined}
    },
    oncut: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the content of the element is being cut.", mdn: undefined}
    },
    ondblclick: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element is being double-clicked.", mdn: undefined}
    },
    ondrag: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run at the end of a drag operation.", mdn: undefined}
    },
    ondragend: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run at the end of a drag operation.", mdn: undefined}
    },
    ondragenter: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when an element has been dragged to a valid drop target.", mdn: undefined}
    },
    ondragleave: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when an element leaves a valid drop target", mdn: undefined}
    },
    ondragover: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when an element is being dragged over a valid drop target.", mdn: undefined}
    },
    ondragstart: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run at the start of a drag operation.", mdn: undefined}
    },
    ondrop: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when dragged element is being dropped.", mdn: undefined}
    },
    ondurationchange: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the length of the media changes", mdn: undefined}
    },
    onemptied: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when something bad happens and the file is suddenly unavailable (like unexpectedly disconnects).", mdn: undefined}
    },
    onended: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the media has reach the end (a useful event for messages like \"thanks for listening\")", mdn: undefined}
    },
    onerror: {
        elements: ["<audio>", "<body>", "<embed>", "<img>", "<object>", "<script>", "<style>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when an error occurs.", mdn: undefined}
    },
    onfocus: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element gets focus.", mdn: undefined}
    },
    onhashchange: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when there has been changes to the anchor part of the a URL.", mdn: undefined}
    },
    oninput: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element gets user input.", mdn: undefined}
    },
    oninvalid: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element is invalid.", mdn: undefined}
    },
    onkeydown: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a user is pressing a key.", mdn: undefined}
    },
    onkeypress: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a user presses a key.", mdn: undefined}
    },
    onkeyup: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a user releases a key.", mdn: undefined}
    },
    onload: {
        elements: ["<body>", "<iframe>", "<img>", "<input>", "<link>", "<script>", "<style>"],
        supported: true,
        nfo: { w3c: "Script to be run when the element is finished loading.", mdn: undefined}
    },
    onloadeddata: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when media data is loaded", mdn: undefined}
    },
    onloadedmetadata: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when meta data (like dimensions and duration) are loaded.", mdn: undefined}
    },
    onloadstart: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run just as the file begins to load before anything is actually loaded.", mdn: undefined}
    },
    onmousedown: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a mouse button is pressed down on an element.", mdn: undefined}
    },
    onmousemove: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run as long as the  mouse pointer is moving over an element.", mdn: undefined}
    },
    onmouseout: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a mouse pointer moves ot of an element.", mdn: undefined}
    },
    onmouseover: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a mouse pointer moves over an element.", mdn: undefined}
    },
    onmouseup: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a mouse button is released over an element.", mdn: undefined}
    },
    onmousewheel: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when a mouse wheel is being scrolled over an element.", mdn: undefined}
    },
    onoffline: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when the browser starts to work offline", mdn: undefined}
    },
    ononline: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when the browser starts to work online", mdn: undefined}
    },
    onpagehide: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when a user navigates away from a page.", mdn: undefined}
    },
    onpageshow: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when a user navigates to a page", mdn: undefined}
    },
    onpaste: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the user pastes som content in an elements", mdn: undefined}
    },
    onpause: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the media is paused either by the user or programmatically.", mdn: undefined}
    },
    onplay: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the media is ready to start playing.", mdn: undefined}
    },
    onplaying: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the media actually has started playing.", mdn: undefined}
    },
    onpopstate: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when the window's history changes.", mdn: undefined}
    },
    onprogress: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the browser is in the process of getting the media data", mdn: undefined}
    },
    onratechange: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run each time the playback rate changes (like when a user switches to a slow motion or fast forward mode).", mdn: undefined}
    },
    onreset: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Script to be run when a reset button in a form is clicked.", mdn: undefined}
    },
    onresize: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when the browser window is being resized.", mdn: undefined}
    },
    onscroll: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when an element's scrollbar is being scrolled.", mdn: undefined}
    },
    onsearch: {
        elements: ["<input>"],
        supported: true,
        nfo: { w3c: "Script to be run when the user writes something in a search field (for <input=\"search\">).", mdn: undefined}
    },
    onseeked: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the seeking attribute is set to false indicating that seeking has ended.", mdn: undefined}
    },
    onseeking: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the seeking attribute is set to true indicating that seeking is active", mdn: undefined}
    },
    onselect: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the element gets selected.", mdn: undefined}
    },
    onshow: {
        elements: ["<menu>"],
        supported: true,
        nfo: { w3c: "Script to be run when a <menu> element is shown as a context menu", mdn: undefined}
    },
    onstalled: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the browser is unable to fetch the media data for whatever reason.", mdn: undefined}
    },
    onstorage: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when a Web Storage area is updated.", mdn: undefined}
    },
    onsubmit: {
        elements: ["<form>"],
        supported: true,
        nfo: { w3c: "Script to be run when a for is submitted.", mdn: undefined}
    },
    onsuspend: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when fetching the media data is stopped before it is completely loaded for whatever reason.", mdn: undefined}
    },
    ontimeupdate: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the playing position has changed (like when the user fast forwards to a different point in the media)", mdn: undefined}
    },
    ontoggle: {
        elements: ["<details>"],
        supported: true,
        nfo: { w3c: "Script to be run when the user opens or closes the <details> element.", mdn: undefined}
    },
    onunload: {
        elements: ["<body>"],
        supported: true,
        nfo: { w3c: "Script to be run when a page has unloaded (or the browser window has been closed)", mdn: undefined}
    },
    onvolumechange: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run each time the volume is changed which (includes setting the volume to \"mute\").", mdn: undefined}
    },
    onwaiting: {
        elements: ["<audio>", "<video>"],
        supported: true,
        nfo: { w3c: "Script to be run when the media has paused but is expected to resume (like when the media pauses to buffer more data).", mdn: undefined}
    },
    onwheel: {
        elements: ["All visible elements."],
        supported: true,
        nfo: { w3c: "Script to be run when the mouse wheel rolls up or down over an element.", mdn: undefined}
    },
    translate: {
        elements: ["Global Attributes"],
        supported: true,
        nfo: { w3c: "Specifies whether the content of an element should be translated or not.", mdn: undefined}
    },
};

},{}],2:[function(require,module,exports){
/*
	scrapped from: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
*/
module.exports = {
	doctype:{ singleton:true, status:[], nfo:"The <!DOCTYPE> declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.", url:"http://www.w3schools.com/tags/tag_doctype.asp" },
	a:{ singleton:false, status:[], nfo:"The HTML Anchor Element (<a>) defines a hyperlink to a location on the same page or any other page on the Web. It can also be used (in an obsolete way) to create an anchor point—a destination for hyperlinks within the content of a page, so that links aren't limited to connecting simply to the top of a page.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"},
	abbr:{ singleton:false, status:[], nfo:"The HTML <abbr> element (or HTML Abbreviation Element) represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr"},
	acronym:{ singleton:false, status:["obsolete"], nfo:"The HTML Acronym Element (<acronym>) allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym"},
	address:{ singleton:false, status:[], nfo:"The HTML&nbsp;<address> element supplies contact information for its nearest <article> or <body> ancestor; in the latter case, it applies to the whole document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address"},
	applet:{ singleton:false, status:["obsolete"], nfo:"The HTML Applet Element (<applet>) identifies the inclusion of a Java applet.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet"},
	area:{ singleton:true, status:[], nfo:"The HTML <area> element defines a hot-spot region on an image, and optionally associates it with a hypertext link. This element is used only within a <map> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area"},
	article:{ singleton:false, status:[], nfo:"The HTML <article> element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). This could be a forum post, a magazine or newspaper article, a blog entry, an object,&nbsp;or any other independent item of content. Each <article> should be identified, typically by including a heading (<h1>-<h6> element) as a child of the <article> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"},
	aside:{ singleton:false, status:[], nfo:"The HTML <aside> element represents a section of the page with content connected tangentially to the rest, which could be considered separate from that content. These sections are often represented as sidebars or inserts. They often contain the definitions on the sidebars, such as definitions from the glossary; there may also be other types of information, such as related advertisements; the biography of the author; web applications; profile information or related links on the blog.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"},
	audio:{ singleton:false, status:[], nfo:"The HTML <audio> element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element; the browser will choose the most suitable one.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"},
	b:{ singleton:false, status:[], nfo:"The HTML <b> Element represents a span of text stylistically different from normal text, without conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b"},
	base:{ singleton:true, status:[], nfo:"The HTML <base> element specifies the base URL to use for all relative URLs contained within a document. There can be only one <base> element in a document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base"},
	basefont:{ singleton:false, status:["obsolete"], nfo:"The HTML basefont element (<basefont>) establishes a default font size for a document. Font size then can be varied relative to the base font size using the <font> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/basefont"},
	bdi:{ singleton:false, status:[], nfo:"The HTML <bdi> Element (or Bi-Directional Isolation Element) isolates a span of text that might be formatted in a different direction from other text outside it.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"},
	bdo:{ singleton:false, status:[], nfo:"The HTML <bdo> Element (or HTML bidirectional override element) is used to override the current directionality of text. It causes the directionality of the characters to be ignored in favor of the specified directionality.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo"},
	bgsound:{ singleton:false, status:[], nfo:"The HTML Background Sound Element () is an Internet Explorer element associating a background sound with a page.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bgsound"},
	big:{ singleton:false, status:["obsolete"], nfo:"The HTML Big Element (<big>)&nbsp;makes the text font size one size bigger (for example, from small to medium, or from large to x-large) up to the browser's maximum font size.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/big"},
	blink:{ singleton:false, status:["obsolete","deprecated"], nfo:"The HTML Blink Element (<blink>) is a non-standard element causing the enclosed text to flash slowly.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink"},
	blockquote:{ singleton:false, status:[], nfo:"The HTML <blockquote> Element (or HTML Block Quotation Element) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote"},
	body:{ singleton:false, status:[], nfo:"The HTML <body> Element represents the content of an HTML&nbsp;document. There can be only one <body> element in a document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body"},
	br:{ singleton:true, status:[], nfo:"The HTML element&nbsp;line break&nbsp;<br>&nbsp;produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br"},
	button:{ singleton:false, status:[], nfo:"The HTML <button> Element represents a clickable button.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button"},
	canvas:{ singleton:false, status:[], nfo:"The HTML <canvas> Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. You may (and should) provide alternate content inside the <canvas> block. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas"},
	caption:{ singleton:false, status:[], nfo:"The HTML <caption> Element (or HTML Table Caption Element) represents the title of a table. Though it is always the first descendant of a <table>, its styling, using CSS, may place it elsewhere, relative to the table.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption"},
	center:{ singleton:false, status:["deprecated"], nfo:"The HTML Center Element (<center>) is a block-level element that can contain paragraphs and other block-level and inline elements. The entire content of this element is centered horizontally within its containing element (typically, the <body>).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center"},
	cite:{ singleton:false, status:[], nfo:"The&nbsp;HTML Citation Element&nbsp;(<cite>) represents a reference to a creative work. It must include the title of a work or a URL reference,&nbsp;which may be in an abbreviated form according to the conventions used for the addition of citation metadata.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite"},
	code:{ singleton:false, status:[], nfo:"The HTML Code&nbsp;Element&nbsp;(<code>) represents a fragment of computer code. By default, it is displayed in the browser's default monospace font.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code"},
	col:{ singleton:true, status:[], nfo:"The HTML Table Column Element (<col>) defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col"},
	colgroup:{ singleton:false, status:[], nfo:"The&nbsp;HTML Table Column Group Element&nbsp;(<colgroup>) defines a group of columns within a table.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup"},
	command:{ singleton:true, status:["obsolete"], nfo:"The command element represents a command which the user can invoke.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/command"},
	content:{ singleton:false, status:["deprecated"], nfo:"The HTML <content> element is used inside of Shadow DOM as an insertion point. It is not intended to be used in ordinary HTML. It is used with Web Components. It has now been replaced by the <slot> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/content"},
	data:{ singleton:false, status:[], nfo:"The HTML <data> Element links a given content with a machine-readable translation. If the content is time- or date-related, the <time> must be used.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data"},
	datalist:{ singleton:false, status:[], nfo:"The HTML Datalist&nbsp;Element&nbsp;(<datalist>) contains a set of <option> elements that represent the values available for other controls.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist"},
	dd:{ singleton:false, status:[], nfo:"The&nbsp;HTML <dd> element&nbsp;(HTML Description Element) indicates the description of a term in a description list (<dl>) element. This element can occur only as a child element of a description list and it must follow a <dt> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd"},
	del:{ singleton:false, status:[], nfo:"The HTML Deleted Text Element&nbsp;(<del>) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del"},
	details:{ singleton:false, status:[], nfo:"The HTML Details Element (<details>) is used as a disclosure widget from which the user can retrieve additional information.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details"},
	dfn:{ singleton:false, status:[], nfo:"The&nbsp;HTML Definition Element&nbsp;(<dfn>) represents the defining instance of a term.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn"},
	dialog:{ singleton:false, status:[], nfo:"The HTML <dialog> element represents a dialog box or other interactive component, such as an inspector or window. <form> elements can be integrated within a dialog by specifying them with the attribute method=&quot;dialog&quot;. When such a form is submitted, the dialog is closed with a returnValue attribute set to the value of the submit button used.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog"},
	dir:{ singleton:false, status:["obsolete"], nfo:"The HTML directory element (<dir>) represents a directory, namely a collection of filenames.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir"},
	div:{ singleton:false, status:[], nfo:"The HTML <div> element (or HTML Document Division Element) is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as <article> or <nav>) is appropriate.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div"},
	dl:{ singleton:false, status:[], nfo:"The HTML <dl> element (or HTML Description List Element) encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl"},
	dt:{ singleton:false, status:[], nfo:"The HTML <dt> element (or HTML Definition Term Element) identifies a term in a definition list. This element can occur only as a child element of a <dl>. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt"},
	element:{ singleton:false, status:[], nfo:"The HTML <element> element is used to define new custom DOM elements.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/element"},
	em:{ singleton:false, status:[], nfo:"The&nbsp;HTML&nbsp;element&nbsp;emphasis &nbsp;<em>&nbsp;marks text that has stress emphasis. The <em> element can be nested, with each level of nesting indicating a greater degree of emphasis.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em"},
	embed:{ singleton:true, status:[], nfo:"The HTML <embed> Element represents an integration point for an external application or interactive content (in other words, a plug-in).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed"},
	fieldset:{ singleton:false, status:[], nfo:"The HTML <fieldset> element is used to group several controls as well as labels (<label>) within a web form.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset"},
	figcaption:{ singleton:false, status:[], nfo:"The HTML <figcaption> element represents a caption or a legend associated with a figure or an illustration described by the rest of the data of the <figure> element which is its immediate ancestor which means <figcaption> can be the first or last element inside a <figure> block.&nbsp;Also, the HTML Figcaption Element&nbsp;is optional; if not provided, then the parent figure element will have no caption.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption"},
	figure:{ singleton:false, status:[], nfo:"The HTML <figure> element represents self-contained content, frequently with a caption&nbsp;(<figcaption>), and is&nbsp;typically referenced as a single unit. While it is related to the main flow, its position is independent of the main flow. Usually this is an image, an illustration, a diagram, a code snippet, or a schema that is referenced in the main text, but that can be moved to another page or to an appendix without affecting the main flow.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure"},
	font:{ singleton:false, status:["obsolete"], nfo:"The HTML Font Element (<font>) defines the font size, color and face for its content.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font"},
	footer:{ singleton:false, status:[], nfo:"The HTML <footer> element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"},
	form:{ singleton:false, status:[], nfo:"The HTML <form> element represents a document section that contains interactive controls to submit information to a web server.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form"},
	frame:{ singleton:false, status:["deprecated"], nfo:"<frame> is an HTML element which defines a particular area in which another HTML document can be displayed. A frame should be used within a <frameset>.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame"},
	frameset:{ singleton:false, status:["deprecated"], nfo:"<frameset> is an HTML element which is used to contain <frame> elements.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset"},
	head:{ singleton:false, status:[], nfo:"The HTML <head> element provides general information (metadata) about the document, including its title and links to its&nbsp;scripts and style sheets.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head"},
	header:{ singleton:false, status:[], nfo:"The HTML <header> element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"},
	hgroup:{ singleton:false, status:[], nfo:"The HTML <hgroup> Element (HTML Headings Group Element) represents the heading of a section. It defines a single title that participates in the outline of the document as the heading of the implicit or explicit section that it belongs to.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup"},
	hr:{ singleton:true, status:[], nfo:"The HTML <hr> element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr"},
	html:{ singleton:false, status:[], nfo:"The HTML <html> element (or HTML root element) represents the root of an HTML document. All other elements must be descendants of this element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html"},
	i:{ singleton:false, status:[], nfo:"The HTML <i> Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i"},
	iframe:{ singleton:false, status:[], nfo:"The HTML Inline Frame Element (<iframe>) represents a nested browsing context, effectively embedding another HTML page into the current page. In HTML 4.01, a document may contain a head and a body or a head and a frameset, but not both a body and a frameset. However, an <iframe> can be used within a normal document body. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe"},
	image:{ singleton:false, status:[], nfo:"The HTML <image> element was an experimental element designed to display pictures. It never was implemented and the standard <img> element must be used.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/image"},
	img:{ singleton:true, status:[], nfo:"The HTML <img> element represents an image in the document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img"},
	input:{ singleton:true, status:[], nfo:"The HTML element <input> is used to create interactive controls for web-based forms in order to accept data from the user. How an <input> works varies considerably depending on the value of its type attribute.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input"},
	ins:{ singleton:false, status:[], nfo:"The HTML <ins> Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins"},
	isindex:{ singleton:false, status:["deprecated"], nfo:"<isindex> is an obsolete HTML element that puts a text field in a page for querying the document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex"},
	kbd:{ singleton:false, status:[], nfo:"The HTML Keyboard Input Element (<kbd>) represents user input and produces an inline element displayed in the browser's default monospace font.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd"},
	keygen:{ singleton:false, status:["deprecated"], nfo:"The HTML <keygen> element exists to facilitate generation of key material, and submission of the public key as part of an HTML form. This mechanism is designed for use with Web-based certificate management systems. It is expected that the <keygen> element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/keygen"},
	label:{ singleton:false, status:[], nfo:"The HTML Label Element (<label>) represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the <label> element, or by using the for attribute. Such a control is called the labeled control of the label element. One input can be associated with multiple&nbsp;labels.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label"},
	legend:{ singleton:false, status:[], nfo:"The HTML <legend> Element (or HTML Legend Field Element) represents a caption for the content of its parent <fieldset>.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend"},
	li:{ singleton:false, status:[], nfo:"The HTML <li> element (or HTML List Item Element) is used to represent an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li"},
	link:{ singleton:true, status:[], nfo:"The HTML <link> element specifies relationships between the current document and an external resource. Possible uses for this element include defining a relational framework for navigation. This Element is most used to link to style sheets.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link"},
	listing:{ singleton:false, status:["obsolete"], nfo:"The HTML Listing Element (<listing>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML 2 standard recommended that lines shouldn't be broken when not greater than 132 characters.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/listing"},
	main:{ singleton:false, status:[], nfo:"The HTML <main> element represents the main content of&nbsp; the <body> of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application. This content should be unique to the document, excluding any content that is repeated across a set of documents such as sidebars, navigation links, copyright information, site logos, and search forms (unless&nbsp;the document's main function is as a search form).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main"},
	map:{ singleton:false, status:[], nfo:"The HTML <map> element is used with <area> elements to define an image map (a clickable link area).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map"},
	mark:{ singleton:false, status:[], nfo:"The HTML Mark&nbsp;Element&nbsp;(<mark>) represents highlighted text, i.e., a run of text marked for reference purpose, due to its relevance in a particular context. For example it can be used in a page showing search results to highlight every instance of the searched-for word.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark"},
	marquee:{ singleton:false, status:["obsolete"], nfo:"The HTML <marquee> element is used to insert a scrolling area of text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee"},
	menu:{ singleton:false, status:[], nfo:"The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu"},
	menuitem:{ singleton:false, status:[], nfo:"The HTML <menuitem> element represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menuitem"},
	meta:{ singleton:true, status:[], nfo:"The HTML <meta> element represents any metadata information that cannot be represented by one of the other HTML meta-related elements (<base>, <link>, <script>, <style> or <title>).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta"},
	meter:{ singleton:false, status:[], nfo:"The HTML <meter> Element represents either a scalar value within a known range or a fractional value.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter"},
	multicol:{ singleton:false, status:["deprecated"], nfo:"The HTML <multicol> element was an experimental element designed to allow multi-column layouts. It never got any significant traction and is not implemented in any major browsers.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/multicol"},
	nav:{ singleton:false, status:[], nfo:"The HTML <nav> element (HTML Navigation Element) represents a section of a page that links to other pages or to parts within the page: a section with navigation links.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"},
	nobr:{ singleton:false, status:[], nfo:"The HTML <nobr> element prevents a text from breaking into a new line automatically, so it is displayed on one long line and scrolling might be necessary. This tag is not standard HTML and should not be used.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr"},
	noembed:{ singleton:false, status:["deprecated"], nfo:"The <noembed> element is a deprecated and non-standard way to provide alternative, or &quot;fallback&quot;, content for browsers that do not support the <embed> element or do not support embedded content an author wishes to use.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed"},
	noframes:{ singleton:false, status:[], nfo:"<noframes> is an HTML element which is used to supporting browsers which are not able to support <frame> elements or configured to do so.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes"},
	noscript:{ singleton:false, status:[], nfo:"The HTML <noscript> Element defines a section of html to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript"},
	object:{ singleton:false, status:[], nfo:"The&nbsp;HTML Embedded Object Element&nbsp;(<object>) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object"},
	ol:{ singleton:false, status:[], nfo:"The HTML <ol> Element (or HTML Ordered List Element) represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol"},
	optgroup:{ singleton:false, status:[], nfo:"In a Web form, the HTML <optgroup> element&nbsp; creates a grouping of options within a <select> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup"},
	option:{ singleton:false, status:[], nfo:"In a Web form, the HTML <option> element is used to create a control representing an item within a <select>, an <optgroup> or a <datalist> HTML5 element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option"},
	output:{ singleton:false, status:[], nfo:"The HTML <output> element represents the result of a calculation or user action.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output"},
	p:{ singleton:false, status:[], nfo:"The HTML <p> element (or HTML Paragraph Element) represents a paragraph of text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"},
	param:{ singleton:true, status:[], nfo:"The HTML <param> Element (or HTML Parameter Element) defines parameters for <object>.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param"},
	picture:{ singleton:false, status:[], nfo:"The HTML <picture> element is a container used to specify multiple <source> elements for a specific <img> contained in it. The browser will choose the most suitable source according to the current layout of the page (the constraints of the box the image will appear in) and the device it will be displayed on (e.g. a normal or hiDPI device.)", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"},
	plaintext:{ singleton:false, status:["obsolete"], nfo:"The HTML Plaintext Element (<plaintext>) renders everything following the start tag as raw text, without interpreting any HTML. There is no closing tag, since everything after it is considered raw text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext"},
	pre:{ singleton:false, status:[], nfo:"The HTML <pre> element (or HTML Preformatted Text) represents preformatted text. Text within this element is typically displayed in a non-proportional (&quot;monospace&quot;) font exactly as it is laid out in the file. Whitespace inside this element is displayed as typed.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre"},
	progress:{ singleton:false, status:[], nfo:"The HTML <progress> Element is used to view the completion progress of a task. While the specifics of how it's displayed is left up to the browser developer, it's typically displayed as a progress bar. Javascript can be used to manipulate the value of progress bar.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress"},
	q:{ singleton:false, status:[], nfo:"The HTML Quote Element (<q>) indicates that the enclosed text is a short inline quotation. This element is intended for short quotations that don't require paragraph breaks; for long quotations use <blockquote> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q"},
	rp:{ singleton:false, status:[], nfo:"The HTML <rp> element is used to provide fall-back parenthesis for browsers non-supporting ruby annotations. Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwainese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support its content has what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp"},
	rt:{ singleton:false, status:[], nfo:"The HTML <rt> Element embraces pronunciation of characters presented in a ruby annotations, which are used to describe the pronunciation of East Asian characters. This element is always used inside a <ruby> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt"},
	rtc:{ singleton:false, status:[], nfo:"The HTML <rtc> Element embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element. <rb> elements can have both pronunciation (<rt>) and semantic (<rtc>) annotations.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rtc"},
	ruby:{ singleton:false, status:[], nfo:"The HTML <ruby> Element represents a ruby annotation. Ruby annotations are for showing pronunciation of East Asian characters.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby"},
	s:{ singleton:false, status:[], nfo:"The HTML Strikethrough Element (<s>) renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the <del> and <ins> elements, as appropriate.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s"},
	samp:{ singleton:false, status:[], nfo:"The HTML <samp> element is an element intended to identify sample output from a computer program. It is usually displayed in the browser's default monotype font (such as Lucida Console).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp"},
	script:{ singleton:false, status:[], nfo:"The HTML Script Element (<script>) is used to embed or reference an executable script within an HTML or XHTML document.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script"},
	section:{ singleton:false, status:[], nfo:"The HTML <section> element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each <section> should be identified, typically by including a heading (<h1>-<h6> element) as a child of the <section> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"},
	select:{ singleton:false, status:[], nfo:"The HTML select (<select>) element represents a control that presents a menu of options. The options within the menu are represented by <option> elements, which can be grouped by <optgroup> elements. Options can be pre-selected for the user.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select"},
	shadow:{ singleton:false, status:[], nfo:"The HTML&nbsp;<shadow>&nbsp;element is used as a shadow DOM insertion point. You might use it if you have created multiple shadow roots under a shadow host. It is not useful in ordinary HTML. It is used with Web Components.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Shadow"},
	small:{ singleton:false, status:[], nfo:"The HTML Small Element (<small>) makes the text font size one size smaller (for example, from large to medium, or from small to x-small) down to the browser's minimum font size.&nbsp; In HTML5, this element is repurposed to represent side-comments and small print, including copyright and legal text, independent of its styled presentation.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small"},
	source:{ singleton:true, status:[], nfo:"The HTML <source> element specifies multiple media resources for either the <picture>, the <audio> or the <video> element. It is an empty element. It is commonly used to serve the same media content in multiple formats supported by different browsers.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"},
	spacer:{ singleton:false, status:["obsolete"], nfo:"<spacer> is an HTML element which is used for inserting white spaces to web pages. It was created by NetScape for achieving same effect as a single-pixel layout GIF image, which was something web designers used to use to add white spaces to web pages, without actually using a GIF. However <spacer> is not supported by any major browser and same effects can be created with various CSS rules. In Mozilla applications, support for this element was removed in Gecko&nbsp;2.0. Therefore usage of <spacer> is unnecessary.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/spacer"},
	span:{ singleton:false, status:[], nfo:"The HTML <span> element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span"},
	strike:{ singleton:false, status:["obsolete"], nfo:"The HTML Strikethrough Element (<strike>) renders text with a strikethrough, or a line through it.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strike"},
	strong:{ singleton:false, status:[], nfo:"The HTML Strong Element (<strong>) gives text strong importance, and is typically displayed in bold.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong"},
	style:{ singleton:false, status:[], nfo:"The HTML <style> element contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style"},
	sub:{ singleton:false, status:[], nfo:"The HTML Subscript Element (<sub>) defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub"},
	summary:{ singleton:false, status:[], nfo:"The HTML summary element (<summary>) is used as a summary, caption, or legend for the content of a <details> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary"},
	sup:{ singleton:false, status:[], nfo:"The HTML Superscript Element (<sup>) defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup"},
	table:{ singleton:false, status:[], nfo:"The HTML Table Element (<table>) represents tabular data: information expressed via two dimensions or more.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"},
	tbody:{ singleton:false, status:[], nfo:"The HTML Table Body Element (<tbody>) defines one or more <tr> element data-rows to be the body of its parent <table> element (as long as no <tr> elements are immediate children of that table element.)&nbsp; In conjunction with a preceding <thead> and/or <tfoot> element, <tbody> provides additional semantic information for devices such as printers and displays. Of the parent table's child elements, <tbody> represents the content which, when longer than a page, will most likely differ for each page printed; while the content of <thead> and <tfoot> will be the same or similar for each page printed. For displays, <tbody> will enable separate scrolling of the <thead>, <tfoot>, and <caption> elements of the same parent <table> element.&nbsp; Note that unlike the <thead>, <tfoot>, and <caption> elements however, multiple&nbsp;<tbody> elements are permitted (if consecutive), allowing the data-rows in long tables to be divided into different sections, each separately formatted as needed.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody"},
	td:{ singleton:false, status:[], nfo:"The Table cell HTML element (<td>) defines a cell of a table that contains data. It participates in the table model.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td"},
	template:{ singleton:false, status:[], nfo:"The HTML template element <template> is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.&nbsp;", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"},
	textarea:{ singleton:false, status:[], nfo:"The HTML <textarea> element represents a multi-line plain-text editing control.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},
	tfoot:{ singleton:false, status:[], nfo:"The HTML Table Foot Element (<tfoot>) defines a set of rows summarizing the columns of the table.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot"},
	th:{ singleton:false, status:[], nfo:"The HTML element table header cell <th> defines a cell as a header for a group of cells of a table. The group of cells that the header refers to is defined by the scope and headers attribute.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th"},
	thead:{ singleton:false, status:[], nfo:"The HTML Table Head Element (<thead>) defines a set of rows defining the head of the columns of the table.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead"},
	time:{ singleton:false, status:[], nfo:"The HTML <time> element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information).", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"},
	title:{ singleton:false, status:[], nfo:"The HTML <title> element defines the title of the document, shown in a browser's title bar or on the page's tab. It can only contain text, and any contained tags are ignored.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title"},
	tr:{ singleton:false, status:[], nfo:"The HTML element&nbsp;table row <tr>&nbsp;defines a row of cells in a table. Those can be a mix of <td> and <th> elements.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr"},
	track:{ singleton:false, status:[], nfo:"The HTML <track> element is used as a child of the media elements—<audio> and <video>. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files) — Web Video Text Tracks.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"},
	tt:{ singleton:false, status:["obsolete"], nfo:"The HTML Teletype Text Element (<tt>) produces an inline element displayed in the browser's default monotype font. This element was intended to style text as it would display on a fixed width display, such as a teletype. It probably is more common to display fixed width type using the <code> element.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt"},
	u:{ singleton:false, status:[], nfo:"The HTML Underline Element (<u>) renders text with an underline, a line under the baseline of its content.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u"},
	ul:{ singleton:false, status:[], nfo:"The HTML <ul> element (or HTML Unordered List Element) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul"},
	var:{ singleton:false, status:[], nfo:"The HTML Variable Element (<var>) represents a variable in a mathematical expression or a programming context.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var"},
	video:{ singleton:false, status:[], nfo:"Use the &nbsp;HTML <video> element&nbsp;to embed video content in a document. The video element contains one or more video sources. To specify a video source, use either the src attribute or the <source> element; the browser will choose the most suitable one.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"},
	wbr:{ singleton:false, status:[], nfo:"The HTML element word break opportunity <wbr> represents a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr"},
	xmp:{ singleton:false, status:["obsolete"], nfo:"The HTML Example Element (<xmp>) renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp"},
	h1:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	h2:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	h3:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	h4:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	h5:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	h6:{ singleton:false, status:[], nfo:"Heading elements implement six levels of document headings, <h1> is the most important and <h6> is the least. A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements"},
	nexid:{ singleton:false, status:["obsolete","deprecated"], nfo:"<nextid> is an obsolete HTML element that served to enable the NeXT web designing tool to generate automatic NAME labels for its anchors. It was generated by that web editing tool automatically and was not to be adjusted or entered by hand. This element has the distinction of being the first element to become one of the &quot;Lost Tags&quot; by being eliminated from the official public DTD's of the HTML versions. It is also probably one of the least understood of all of the early HTML elements.", url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nextid"},
};

},{}],3:[function(require,module,exports){
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
				if( attr[i].match(/=/g).length > 1 ){ 
					// if attribute has more than one equal sign
					this.err("<${1}> element's ${2} attribute might be missing closing quote, or there's too many equal signs",html,attr[0],a);
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
},{"./html-attributes-dictionary":1,"./html-elements-dictionary":2}]},{},[3]);
