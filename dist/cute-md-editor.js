!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["cute-md-editor"]=t(require("react")):e["cute-md-editor"]=t(e.react)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=8)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(13)()},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),d=n(s),c=r(1),u=n(c),f=r(7),p=n(f),h=r(4),m=n(h),b=r(6),v=n(b),y=r(5),w=n(y),g=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={asHTML:r.props.asHTML,asMarkdown:r.props.asMarkdown,content:r.props.content,htmlContent:"",toolbarOptions:r.props.toolbarOptions||["preview-as-html","code","link","headers","italic","quote","unordered-list","ordered-list"]},r.toolbarButtons=[{id:"code",icon:"embed2",callback:r.appendCodeBlock.bind(r),tooltip:"Format as code block"},{id:"link",icon:"link",callback:r.handleLinkButton.bind(r),tooltip:"Format as link"},{id:"headers",icon:"headers",tooltip:"Choose header size",dropdownOptions:[{onClick:r.handleHeader.bind(r,"#"),className:"react-md-header-1",text:"Header"},{onClick:r.handleHeader.bind(r,"##"),className:"react-md-header-2",text:"Header"},{onClick:r.handleHeader.bind(r,"###"),className:"react-md-header-3",text:"Header"}]},{id:"bold",icon:"bold",callback:r.handleBoldButton.bind(r),tooltip:"Bold text"},{id:"italic",icon:"italic",callback:r.handleItalicButton.bind(r),tooltip:"Italicised text"},{id:"quote",icon:"quotes-left",callback:r.handleQuoteButton.bind(r),tooltip:"Format as quote"},{id:"unordered-list",icon:"list2",callback:r.handleUnorderedList.bind(r),tooltip:"Format as unordered list"},{id:"ordered-list",icon:"list-numbered",callback:r.handleOrderedList.bind(r),tooltip:"Format as ordered list"}],r}return i(t,e),l(t,[{key:"appendCodeBlock",value:function(){this.insertContent("\n```\n","\n```")}},{key:"insertContent",value:function(e){var t,r=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this.refs.textArea.selectionStart,i=this.refs.textArea.selectionEnd,l=this.state.content,s=l.substr(a,i-a),d=this.refs.textArea.scrollTop;t=o&&s.length>0&&(s.match(/\n/g)||[]).length>1?s.split("\n").map(function(t){return e+t+n}).join("\n"):e+s+n,this.setState({content:l.slice(0,a)+t+l.substr(i)},function(){r.refs.textArea.focus(),r.refs.textArea.scrollTop=d,0==s.length?r.refs.textArea.selectionEnd=a+e.length:(r.refs.textArea.selectionStart=a+e.length,r.refs.textArea.selectionEnd=i+e.length)})}},{key:"handleFileUpload",value:function(e,t,r){"image"==r.split("/")[0]?this.insertContent("!["+t+"]("+e+")"):this.insertContent("["+t+"]("+e+")")}},{key:"handleLinkButton",value:function(){this.insertContent("[","](url)")}},{key:"handleBoldButton",value:function(){this.insertContent("**","**")}},{key:"handleHeader",value:function(e){this.insertContent(e)}},{key:"handleItalicButton",value:function(){this.insertContent("*","*")}},{key:"handleQuoteButton",value:function(){this.insertContent("> ","",!0)}},{key:"handleUnorderedList",value:function(){this.insertContent("- ","",!0)}},{key:"handleOrderedList",value:function(){this.insertContent("1. ","",!0)}},{key:"render",value:function(){var e=this,t=this.state,r=t.asHTML,n=t.asMarkdown,o=t.content;return d.default.createElement("div",{className:"react-md-container"},d.default.createElement(v.default,null),d.default.createElement(p.default,{isPreview:!n,showMarkdown:function(t){return e.setState({asMarkdown:t})},handleCheck:function(){return e.setState({asHTML:!e.state.asHTML})},toolbarButtons:this.toolbarButtons,toolbarOptions:this.state.toolbarOptions,asHTML:r}),n&&d.default.createElement(w.default,{markdown:this.state.content,previewClass:this.props.previewClass,converter:this.props.converter,asHTML:r}),d.default.createElement(m.default,{hidden:n,markdownGuideUrl:this.props.markdownGuideUrl,showUploadedFiles:this.props.showUploadedFiles,onFileUpload:function(t){return e.props.onFileUpload(t)},onFileRemoved:function(t){return e.props.onFileRemoved(t)},onUploadComplete:function(t,r,n){return e.handleFileUpload(t,r,n)}},d.default.createElement("textarea",{hidden:n,ref:"textArea",className:"react-md-textarea",onChange:function(t){return e.setState({content:t.target.value})},value:o})),d.default.createElement("textarea",{readOnly:!0,id:this.props.elementId,name:this.props.elementName,hidden:!0,value:o}))}}]),t}(s.Component);t.default=g,g.defaultProps={content:"",elementId:"",elementName:"",asMarkdown:!1,asHTML:!1,previewClass:"",showUploadedFiles:!0,markdownGuideUrl:"https://daringfireball.net/projects/markdown/syntax"},g.propTypes={content:u.default.string,previewClass:u.default.string,markdownGuideUrl:u.default.string,asMarkdown:u.default.bool,showUploadedFiles:u.default.bool,elementId:u.default.string,elementName:u.default.string,toolbarOptions:u.default.arrayOf(u.default.string),onFileRemoved:u.default.func,onFileUpload:u.default.func.isRequired,converter:u.default.func.isRequired}},function(e,t,r){var n=r(9);"string"==typeof n&&(n=[[e.i,n,""]]);var o={};o.transform=void 0,r(15)(n,o),n.locals&&(e.exports=n.locals)},function(e,t,r){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),d=function(e){return e&&e.__esModule?e:{default:e}}(s),c=function(e){e.target.classList.remove("react-md-textarea-drag")},u=function(e){e.stopPropagation(),e.preventDefault()},f=function(e){u(e),e.target.classList.add("react-md-textarea-drag")},p=function(e){u(e),c(e)},h=function(e){u(e)},m=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={uploadedFiles:[]},r.addFile=r.addFile.bind(r),r.removeFile=r.removeFile.bind(r),r}return i(t,e),l(t,[{key:"addFile",value:function(e){this.state.uploadedFiles.find(function(t){return t===e})||this.setState({uploadedFiles:[].concat(n(this.state.uploadedFiles),[e])})}},{key:"removeFile",value:function(e){var t=this;this.props.onFileRemoved(e).then(function(r){if(200===r.status){var o=t.state.uploadedFiles.findIndex(function(t){return e===t});t.setState({uploadedFiles:[].concat(n(t.state.uploadedFiles.slice(0,o)),n(t.state.uploadedFiles.slice(o+1)))})}}).catch(function(e){return t.setError(e)})}},{key:"handleDrop",value:function(e,t){u(e);var r=e.dataTransfer.files;c(e),this.uploadFileList(r)}},{key:"uploadFileList",value:function(e){var t=this;this.props.onFileUpload(e).then(function(r){if(r.data){var n=r.data.replace(/"/g,"");t.addFile(n),t.props.onUploadComplete(n,e[0].name,e[0].type)}else{var o=r.replace(/"/g,"");t.addFile(o),t.props.onUploadComplete(o,e[0].name,e[0].type)}}).catch(function(e){return t.setError(e)})}},{key:"setError",value:function(e){var t=this;this.setState({error:e.toString().replace(/error: /i,"")}),setTimeout(function(){return t.setState({error:null})},15e3)}},{key:"onFileUploadedFromDialog",value:function(e){this.uploadFileList(e.target.files)}},{key:"showFileUploadDialog",value:function(){this.refs.fileInput.click()}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.hidden,o=r.children,a=r.showUploadedFiles,i=r.onFileRemoved,l=r.markdownGuideUrl;return e=a?this.state.uploadedFiles.map(function(e,r){return d.default.createElement("li",{key:r},e," ",i&&d.default.createElement("span",{className:"react-md-remove-btn",onClick:function(){return t.removeFile(e)}},"remove"))}):[],d.default.createElement("div",{className:"react-md-dropzone-wrap"},d.default.createElement("input",{type:"file",ref:"fileInput",onChange:this.onFileUploadedFromDialog.bind(this),style:{display:"none"}}),d.default.createElement("div",{onDragEnter:f,onDragLeave:p,onDragOver:h,onDrop:function(e){return t.handleDrop(e)}},o),d.default.createElement("div",{className:"react-md-dropzone-info",style:{display:n?"none":"inherit"}},d.default.createElement("div",{className:"react-md-info-text"},d.default.createElement("span",{className:"react-md-file-guide"},"Add files by dragging and dropping into the editor, or ",d.default.createElement("a",{href:"#",onClick:this.showFileUploadDialog.bind(this)},"click to upload a file")),d.default.createElement("a",{className:"react-md-markdown-guide",href:l,target:"_blank"},"markdown guide")),a&&this.state.uploadedFiles.length?d.default.createElement("ul",null,e):null,this.state.error&&d.default.createElement("div",{className:"react-md-error"},"Error: ",this.state.error)))}}]),t}(s.Component);t.default=m},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),d=n(s),c=r(1),u=n(c),f=function(e){function t(e){o(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={html:"",loaded:!1},r}return i(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.props.converter(this.props.markdown).then(function(t){return e.setState({html:t,loaded:!0})}).catch(function(t){return e.setState({html:"Error: "+t.toString()})})}},{key:"render",value:function(){return!1===this.state.loaded?d.default.createElement("div",{className:"react-md-preview-area "+this.props.previewClass},d.default.createElement("div",{className:"react-md-loader"},"Loading preview...")):this.props.asHTML?d.default.createElement("div",{className:"react-md-preview-area "+this.props.previewClass},this.state.html):d.default.createElement("div",{className:"react-md-preview-area "+this.props.previewClass,dangerouslySetInnerHTML:{__html:this.state.html}})}}]),t}(s.Component);t.default=f,f.defaultProps={markdown:"",asHTML:!1,previewClass:""},f.propTypes={markdown:u.default.string.isRequired,converter:u.default.func.isRequired,asHTML:u.default.bool.isRequired}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=function(e){return e&&e.__esModule?e:{default:e}}(n),a=function(){return o.default.createElement("svg",{style:{position:"absolute",width:0,height:0,overflow:"hidden"},version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o.default.createElement("defs",null,o.default.createElement("symbol",{id:"react-md-icon-quotes-left",viewBox:"0 0 32 32"},o.default.createElement("title",null,"quotes-left"),o.default.createElement("path",{d:"M7.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.357-0.056 0.724-0.086 1.097-0.086zM25.031 14c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7l-0.031-1c0-7.732 6.268-14 14-14v4c-2.671 0-5.182 1.040-7.071 2.929-0.364 0.364-0.695 0.751-0.995 1.157 0.358-0.056 0.724-0.086 1.097-0.086z"})),o.default.createElement("symbol",{id:"react-md-icon-list-numbered",viewBox:"0 0 32 32"},o.default.createElement("title",null,"list-numbered"),o.default.createElement("path",{d:"M12 26h20v4h-20zM12 14h20v4h-20zM12 2h20v4h-20zM6 0v8h-2v-6h-2v-2zM4 16.438v1.563h4v2h-6v-4.563l4-1.875v-1.563h-4v-2h6v4.563zM8 22v10h-6v-2h4v-2h-4v-2h4v-2h-4v-2z"})),o.default.createElement("symbol",{id:"react-md-icon-list2",viewBox:"0 0 32 32"},o.default.createElement("title",null,"list2"),o.default.createElement("path",{d:"M12 2h20v4h-20v-4zM12 14h20v4h-20v-4zM12 26h20v4h-20v-4zM0 4c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 16c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4zM0 28c0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4s-4-1.791-4-4z"})),o.default.createElement("symbol",{id:"react-md-icon-link",viewBox:"0 0 32 32"},o.default.createElement("title",null,"link"),o.default.createElement("path",{d:"M13.757 19.868c-0.416 0-0.832-0.159-1.149-0.476-2.973-2.973-2.973-7.81 0-10.783l6-6c1.44-1.44 3.355-2.233 5.392-2.233s3.951 0.793 5.392 2.233c2.973 2.973 2.973 7.81 0 10.783l-2.743 2.743c-0.635 0.635-1.663 0.635-2.298 0s-0.635-1.663 0-2.298l2.743-2.743c1.706-1.706 1.706-4.481 0-6.187-0.826-0.826-1.925-1.281-3.094-1.281s-2.267 0.455-3.094 1.281l-6 6c-1.706 1.706-1.706 4.481 0 6.187 0.635 0.635 0.635 1.663 0 2.298-0.317 0.317-0.733 0.476-1.149 0.476z"}),o.default.createElement("path",{d:"M8 31.625c-2.037 0-3.952-0.793-5.392-2.233-2.973-2.973-2.973-7.81 0-10.783l2.743-2.743c0.635-0.635 1.664-0.635 2.298 0s0.635 1.663 0 2.298l-2.743 2.743c-1.706 1.706-1.706 4.481 0 6.187 0.826 0.826 1.925 1.281 3.094 1.281s2.267-0.455 3.094-1.281l6-6c1.706-1.706 1.706-4.481 0-6.187-0.635-0.635-0.635-1.663 0-2.298s1.663-0.635 2.298 0c2.973 2.973 2.973 7.81 0 10.783l-6 6c-1.44 1.44-3.355 2.233-5.392 2.233z"})),o.default.createElement("symbol",{id:"react-md-icon-bold",viewBox:"0 0 32 32"},o.default.createElement("title",null,"bold"),o.default.createElement("path",{d:"M22.121 15.145c1.172-1.392 1.879-3.188 1.879-5.145 0-4.411-3.589-8-8-8h-10v28h12c4.411 0 8-3.589 8-8 0-2.905-1.556-5.453-3.879-6.855zM12 6h3.172c1.749 0 3.172 1.794 3.172 4s-1.423 4-3.172 4h-3.172v-8zM16.969 26h-4.969v-8h4.969c1.827 0 3.313 1.794 3.313 4s-1.486 4-3.313 4z"})),o.default.createElement("symbol",{id:"react-md-icon-italic",viewBox:"0 0 32 32"},o.default.createElement("title",null,"italic"),o.default.createElement("path",{d:"M28 2v2h-4l-10 24h4v2h-14v-2h4l10-24h-4v-2z"})),o.default.createElement("symbol",{id:"react-md-icon-embed2",viewBox:"0 0 40 32"},o.default.createElement("title",null,"embed2"),o.default.createElement("path",{d:"M26 23l3 3 10-10-10-10-3 3 7 7z"}),o.default.createElement("path",{d:"M14 9l-3-3-10 10 10 10 3-3-7-7z"}),o.default.createElement("path",{d:"M21.916 4.704l2.171 0.592-6 22.001-2.171-0.592 6-22.001z"})),o.default.createElement("symbol",{id:"react-md-icon-headers",viewBox:"0 0 18 16"},o.default.createElement("path",{fillRule:"evenodd",d:"M13.62 9.08L12.1 3.66h-.06l-1.5 5.42h3.08zM5.7 10.13S4.68 6.52 4.53 6.02h-.08l-1.13 4.11H5.7zM17.31 14h-2.25l-.95-3.25h-4.07L9.09 14H6.84l-.69-2.33H2.87L2.17 14H0l3.3-9.59h2.5l2.17 6.34L10.86 2h2.52l3.94 12h-.01z"}))))};t.default=a},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(0),d=n(s),c=r(1),u=n(c),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"handleDropdown",value:function(e,t){var r=this.refs["dropdown-"+t.id];if("block"!=r.style.display){r.style.display="block",r.style.left=e.offsetLeft+parseInt(e.offsetWidth/2)-parseInt(r.offsetWidth/2)+"px",r.style.top=e.offsetTop+e.offsetHeight+"px";var n=function e(t){r.style.display="none",document.removeEventListener("click",e)};document.addEventListener("click",n)}else r.style.display="none"}},{key:"render",value:function(){var e=this,t=this.props.toolbarButtons.filter(function(t){return e.props.toolbarOptions.includes(t.id)}).map(function(t,r){return d.default.createElement("button",{key:r,type:"button",title:t.tooltip,onClick:function(r){t.dropdownOptions?e.handleDropdown(r.currentTarget,t):t.callback()},className:"react-md-toolbar-button"+(t.dropdownOptions?" react-md-toolbar-dropdown-button":"")},d.default.createElement("svg",{className:"react-md-icon react-md-icon-"+t.icon},d.default.createElement("use",{xlinkHref:"#react-md-icon-"+t.icon})),t.dropdownOptions&&d.default.createElement("span",{className:"react-md-toolbar-caret"}))}),r=this.props.toolbarButtons.filter(function(e){return e.dropdownOptions}).map(function(e,t){var r=e.dropdownOptions.map(function(e,t){return d.default.createElement("li",{key:t,onClick:e.onClick,className:"react-md-dropdown-option "+e.className},e.text)});return d.default.createElement("div",{key:t,ref:"dropdown-"+e.id,className:"react-md-dropdown"},d.default.createElement("ul",null,r))});return d.default.createElement("nav",{className:"react-md-toolbar"},d.default.createElement("div",{className:"react-md-tab"},d.default.createElement("button",{type:"button",className:this.props.isPreview?"react-md-tablinks active":"react-md-tablinks",onClick:function(){return e.props.showMarkdown(!1)}},"Write"),d.default.createElement("button",{type:"button",className:this.props.isPreview?"react-md-tablinks":"react-md-tablinks active",onClick:function(){return e.props.showMarkdown(!0)}},"Preview")),this.props.toolbarOptions.includes("preview-as-html")&&d.default.createElement("span",null,d.default.createElement("input",{name:"Preview as HTML",type:"checkbox",checked:this.props.asHTML,onChange:this.props.handleCheck}),d.default.createElement("span",{className:"react-md-toolbar-item"},"Preview as HTML")),this.props.isPreview&&t,this.props.isPreview&&r)}}]),t}(d.default.Component);f.propTypes={showMarkdown:u.default.func.isRequired,handleCheck:u.default.func.isRequired,toolbarButtons:u.default.arrayOf(u.default.shape({icon:u.default.string.isRequired,tooltip:u.default.string})),asHTML:u.default.bool.isRequired,isPreview:u.default.bool.isRequired},t.default=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=function(e){return e&&e.__esModule?e:{default:e}}(n);r(3),t.default=o.default},function(e,t,r){t=e.exports=r(10)(!1),t.push([e.i,'.react-md-textarea{box-sizing:border-box;max-width:100%;resize:none;margin:0;padding:1em;width:100%;height:25em;border:1px solid #ddd;border-top:none;border-radius:2px}.react-md-textarea-drag{border:2px dashed #8ed091;background:#f0f8ff}.react-md-toolbar{font-size:9pt;height:29px;margin-bottom:0;border-bottom:1px solid #ddd}div.react-md-tab{background:#fff}div.react-md-tab button{margin:2px;margin-top:0;margin-bottom:0;border-top-left-radius:2px;border-top-right-radius:2px;border:none;border-bottom:1px solid #ddd;background:inherit;float:left;outline:none;cursor:pointer;height:30px;min-width:5em}.react-md-tab button.active{box-shadow:none}div.react-md-tab button:first-child{margin-left:0}div.react-md-tab button.active{border:1px solid #ddd;border-bottom:none;box-shadow:4px 0 8px -4px #ddd,-4px 0 8px -4px #ddd}.react-md-toolbar-item{line-height:30px}.react-md-toolbar-button{width:25px;border:none;background:inherit;cursor:pointer;padding:4px;margin-left:7px;border-radius:2px;margin-top:2px}.react-md-toolbar-button:hover{box-shadow:0 1px 10px #ddd}.react-md-preview-area{border:1px solid #ddd;border-top:none;min-height:15em;padding:1em;position:relative}.react-md-preview-area img{max-width:100%}.react-md-dropzone-wrap .react-md-remove-btn{cursor:pointer;color:#2196f3}.react-md-dropzone-wrap .react-md-dropzone-info{background:#f7f7f7;color:#92a1ad;font-size:12px;margin-top:-4px;padding:.5rem;border-bottom:1px solid #ddd;border-left:1px solid #ddd;border-right:1px solid #ddd}.react-md-dropzone-info a{text-decoration:underline;color:blue}.react-md-dropzone-info a:active,.react-md-dropzone-info a:hover,.react-md-dropzone-info a:visited{color:blue}.react-md-info-text{display:flex;flex-direction:row}.react-md-file-guide{order:0;flex-basis:100%}.react-md-markdown-guide{order:1;margin-left:10px;flex-basis:auto;flex-shrink:0}.react-md-icon{display:inline-block;width:1.3em;height:1.3em;stroke-width:0;stroke:#545454;fill:#545454}.react-md-toolbar-dropdown-button{padding:4px 0}.react-md-toolbar-caret{display:inline-block;width:0;height:0;vertical-align:middle;content:"";border:4px solid;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.react-md-dropdown{display:none;position:absolute;top:100%;left:0;z-index:100;padding:10px 16px;margin-top:2px;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(27,31,35,.15);border-radius:4px;box-shadow:0 3px 12px rgba(27,31,35,.15)}.react-md-dropdown ul{margin:0;padding:0;list-style-type:none}.react-md-dropdown-option{cursor:pointer}.react-md-dropdown-option:hover{color:#020298}.react-md-header-1{font-weight:700;font-size:22px}.react-md-header-2{font-weight:700;font-size:18px}.react-md-header-3{font-weight:700;font-size:15px}.react-md-error{color:red;font-weight:700}.react-md-loader,.react-md-loader:after{border-radius:50%;width:3em;height:3em}.react-md-loader{margin:30px auto;font-size:10px;position:relative;text-indent:-9999em;border-top:.8em solid rgba(0,17,22,.2);border-right:.8em solid rgba(0,17,22,.2);border-bottom:.8em solid rgba(0,17,22,.2);border-left:.8em solid #001116;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}',""])},function(e,t){function r(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var a=n(o);return[r].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[r].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=r(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(e,t,r){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";function n(e,t,r,n,a,i,l,s){if(o(t),!e){var d;if(void 0===t)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,a,i,l,s],u=0;d=new Error(t.replace(/%s/g,function(){return c[u++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}}var o=function(e){};e.exports=n},function(e,t,r){"use strict";var n=r(11),o=r(12),a=r(14);e.exports=function(){function e(e,t,r,n,i,l){l!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return r.checkPropTypes=n,r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=h[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(c(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(c(n.parts[a],t));h[n.id]={id:n.id,refs:1,parts:i}}}}function o(e,t){for(var r=[],n={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],l=a[1],s=a[2],d=a[3],c={css:l,media:s,sourceMap:d};n[i]?n[i].parts.push(c):r.push(n[i]={id:i,parts:[c]})}return r}function a(e,t){var r=b(e.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=w[w.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),w.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=w.indexOf(e);t>=0&&w.splice(t,1)}function l(e){var t=document.createElement("style");return e.attrs.type="text/css",d(t,e.attrs),a(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",d(t,e.attrs),a(e,t),t}function d(e,t){Object.keys(t).forEach(function(r){e.setAttribute(r,t[r])})}function c(e,t){var r,n,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var d=y++;r=v||(v=l(t)),n=u.bind(null,r,d,!1),o=u.bind(null,r,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(t),n=p.bind(null,r,t),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=l(t),n=f.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t,r){var n=r.css,o=r.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(n=g(n)),o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),b=function(e){var t={};return function(r){return void 0===t[r]&&(t[r]=e.call(this,r)),t[r]}}(function(e){return document.querySelector(e)}),v=null,y=0,w=[],g=r(16);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=o(e,t);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var l=r[i],s=h[l.id];s.refs--,a.push(s)}e&&n(o(e,t),t);for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete h[s.id]}}}};var x=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var r=t.protocol+"//"+t.host,n=r+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}])});