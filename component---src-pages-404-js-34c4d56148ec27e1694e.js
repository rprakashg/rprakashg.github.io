"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[883],{1046:function(e,t,a){a.d(t,{w_:function(){return m}});var r=a(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=r.createContext&&r.createContext(l),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var l in t=arguments[a])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function m(e){return function(t){return r.createElement(o,c({attr:c({},e.attr)},t),i(e.child))}}function o(e){var t=function(t){var a,l=e.attr,n=e.size,i=e.title,m=s(e,["attr","size","title"]),o=n||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,m,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==n?r.createElement(n.Consumer,null,(function(e){return t(e)})):t(l)}},1219:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),l=a(5444),n=a(3201),c=function(e){var t=e.contacts;return r.createElement("div",{className:"bottom-bar py-1"},r.createElement("a",{className:"text-primary",href:t.twitter},r.createElement("span",{title:"Twitter"},r.createElement(n.fWC,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.facebook},r.createElement("span",{title:"Facebook"},r.createElement(n.Am9,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.instagram},r.createElement("span",{title:"Instagram"},r.createElement(n.Zf_,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(n.ltd,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-light",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(n.NML,{size:26,style:{color:"light"}}))),r.createElement("a",{className:"text-warning",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(n.Hjm,{size:26,style:{color:"warning"}}))))},s=function(){return r.createElement("div",{className:"mobile-pages-main"},r.createElement("div",{className:"text-center"},r.createElement("p",{className:"d-inline p-4"},r.createElement(l.rU,{to:"/"},r.createElement("span",{className:"text-dark"},"Home"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(l.rU,{to:"/about"},r.createElement("span",{className:"text-dark"},"About"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(l.rU,{to:"/archive"},r.createElement("span",{className:"text-dark"},"Archive")))))},i=function(e){var t=e.contacts;return r.createElement("div",{className:"social-links float-right mr-4"},r.createElement("a",{className:"text-primary ml-4",href:t.twitter},r.createElement("span",{title:"Twitter"},r.createElement(n.fWC,{size:40,style:{color:"#1DA1F2"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.facebook},r.createElement("span",{title:"Facebook"},r.createElement(n.Am9,{size:40,style:{color:"#4267B2"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.instagram},r.createElement("span",{title:"Instagram"},r.createElement(n.Zf_,{size:40,style:{color:"#C13584"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(n.ltd,{size:40,style:{color:"#0e76a8"}}))),r.createElement("a",{className:"text-light ml-4",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(n.NML,{size:40,style:{color:"#6e5494"}}))),r.createElement("a",{className:"text-warning ml-4",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(n.Hjm,{size:40,style:{color:"#EF8236"}}))))},m=a.p+"static/ram-d5142bd78adf420a12d8362bb1425b98.jpg",o=function(e){return r.createElement("div",{className:"mobile-bio-main"},r.createElement("img",{src:m,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),r.createElement("h4",{className:"mr-4 mt-4"},e.author))},u=function(e){var t=e.siteTitle,a=(e.tagline,e.author),n=e.contacts;return r.createElement("header",{className:"head-main",style:{background:"black"}},r.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},r.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},r.createElement(l.rU,{to:"/",style:{color:"#2A914E",textDecoration:"none"}},t)),r.createElement(i,{contacts:n})),r.createElement(c,{contacts:n}),r.createElement(s,null),r.createElement(o,{author:a}))};u.defaultProps={siteTitle:""};var E=u,p=function(e){var t=e.children;return r.createElement(l.i1,{query:"2366241629",render:function(e){return r.createElement(r.Fragment,null,r.createElement(E,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.allProfile.nodes[0].contact}),r.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.createElement("main",{className:"p-4"},t),r.createElement("footer",{className:"text-center"},r.createElement("hr",null),r.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",r.createElement("a",{className:"text-info",href:e.site.siteMetadata.url},e.site.siteMetadata.author),", All Rights Reserved."),r.createElement("p",{className:"mt-5 text-muted d-inline"},r.createElement("i",null,"Built with "," ",r.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby")," and "," ",r.createElement("a",{className:"text-info",href:"https://reactjs.org"},"React"))))))}})}},9616:function(e,t,a){a.r(t);var r=a(7294),l=a(1219);t.default=function(){return r.createElement(l.Z,null,r.createElement("h1",null,"Page Not Found"),r.createElement("p",null,r.createElement("i",null,"Just lightin' out for the territories, huh? Brother, I been there.")))}}}]);
//# sourceMappingURL=component---src-pages-404-js-34c4d56148ec27e1694e.js.map