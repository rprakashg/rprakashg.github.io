"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[969],{1046:function(e,t,a){a.d(t,{w_:function(){return m}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function i(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),i(e.child))}))}function m(e){return function(t){return r.createElement(o,c({attr:c({},e.attr)},t),i(e.child))}}function o(e){var t=function(t){var a,n=e.attr,l=e.size,i=e.title,m=s(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,m,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},1219:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(5444),l=a(3201),c=function(e){var t=e.contacts;return r.createElement("div",{className:"bottom-bar py-1"},r.createElement("a",{className:" text-primary",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(l.ltd,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-light",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(l.NML,{size:26,style:{color:"light"}}))),r.createElement("a",{className:"text-warning",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(l.Hjm,{size:26,style:{color:"warning"}}))))},s=function(){return r.createElement("div",{className:"mobile-pages-main"},r.createElement("div",{className:"text-center"},r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/"},r.createElement("span",{className:"text-dark"},"Home"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/about"},r.createElement("span",{className:"text-dark"},"About"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/archive"},r.createElement("span",{className:"text-dark"},"Archive")))))},i=function(e){var t=e.contacts;return r.createElement("div",{className:"social-links float-right mr-4"},r.createElement("a",{className:"text-primary ml-4",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(l.ltd,{size:40,style:{color:"primary"}}))),r.createElement("a",{className:"text-light ml-4",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(l.NML,{size:40,style:{color:"light"}}))),r.createElement("a",{className:"text-warning ml-4",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(l.Hjm,{size:40,style:{color:"warning"}}))))},m=a.p+"static/ram-d5142bd78adf420a12d8362bb1425b98.jpg",o=function(e){return r.createElement("div",{className:"mobile-bio-main"},r.createElement("img",{src:m,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),r.createElement("h4",{className:"mr-4 mt-4"},e.author))},d=function(e){var t=e.siteTitle,a=(e.tagline,e.author),l=e.contacts;return r.createElement("header",{className:"head-main",style:{background:"black"}},r.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},r.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},r.createElement(n.rU,{to:"/",style:{color:"white",textDecoration:"none"}},t)),r.createElement(i,{contacts:l})),r.createElement(c,{contacts:l}),r.createElement(s,null),r.createElement(o,{author:a}))};d.defaultProps={siteTitle:""};var u=d,p=function(e){var t=e.children;return r.createElement(n.i1,{query:"997518341",render:function(e){return r.createElement(r.Fragment,null,r.createElement(u,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.site.siteMetadata.contacts}),r.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.createElement("main",{className:"p-4"},t),r.createElement("footer",{className:"text-center"},r.createElement("hr",null),r.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",r.createElement("a",{className:"text-info",href:e.site.siteMetadata.url},e.site.siteMetadata.author),", All Rights Reserved."),r.createElement("p",{className:"mt-5 text-muted d-inline"},r.createElement("i",null,"Built with "," ",r.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby"))))))}})}},2309:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444),l=a(2407),c=function(e){var t=e.author,n=e.tagline;return r.createElement("div",{className:"bio-main w-75"},r.createElement(l.S,{src:"../../images/ram.jpg",className:"profile-img",alt:"",__imageData:a(7089)}),r.createElement("h3",{className:"mt-2 author-bio"},t),r.createElement("small",{className:"text-muted"},n))},s=function(){return r.createElement(n.i1,{query:"2355166421",render:function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"sidebar-main border-right"},r.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),r.createElement("div",{className:"page-links"},r.createElement(n.rU,{to:"/"},r.createElement("span",{className:"text-dark d-block py-1"},"Home")),r.createElement(n.rU,{to:"/about"},r.createElement("span",{className:"text-dark d-block py-1"},"About")),r.createElement(n.rU,{to:"/archive"},r.createElement("span",{className:"text-dark d-block py-1"},"Archive")))))}})}},5847:function(e,t,a){a.r(t);var r=a(7294),n=a(5444),l=a(1219),c=a(2309);t.default=function(e){var t=e.pageContext,a=e.data,s=a.allMarkdownRemark.edges;console.log(t.tag);var i=t.tag,m=a.allMarkdownRemark.totalCount,o=m+" post"+(1===m?"":"s")+' tagged with "'+i+'"';return r.createElement(l.Z,null,r.createElement("div",{className:"index-main"},r.createElement("div",{className:"sidebar px-4 py-2"},r.createElement(c.Z,null)),r.createElement("div",{className:"post-list-main"},r.createElement("i",null,r.createElement("h2",{className:"heading"},o)),s.map((function(e){e.node.frontmatter.tags;return r.createElement("div",{key:e.node.id,className:"container mt-5"},r.createElement(n.rU,{to:e.node.fields.slug,className:"text-dark"},r.createElement("h2",{className:"heading"},e.node.frontmatter.title)),r.createElement("small",{className:"d-block text-info"},"Posted on ",e.node.frontmatter.date),r.createElement("p",{className:"mt-3 d-inline"},e.node.excerpt),r.createElement(n.rU,{to:e.node.fields.slug,className:"text-primary"},r.createElement("small",{className:"d-inline-block ml-3"}," Read full post")),r.createElement("div",{className:"d-block"}))})))))}},7089:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/82d6629490efab218d59faa56dbf272c/81049/ram.jpg","srcSet":"/static/82d6629490efab218d59faa56dbf272c/b9c9b/ram.jpg 270w,\\n/static/82d6629490efab218d59faa56dbf272c/249b7/ram.jpg 540w,\\n/static/82d6629490efab218d59faa56dbf272c/81049/ram.jpg 1080w","sizes":"(min-width: 1080px) 1080px, 100vw"},"sources":[{"srcSet":"/static/82d6629490efab218d59faa56dbf272c/c43d5/ram.webp 270w,\\n/static/82d6629490efab218d59faa56dbf272c/81ee9/ram.webp 540w,\\n/static/82d6629490efab218d59faa56dbf272c/dbe61/ram.webp 1080w","type":"image/webp","sizes":"(min-width: 1080px) 1080px, 100vw"}]},"width":1080,"height":1084}')}}]);
//# sourceMappingURL=component---src-templates-tag-js-80bb5eaa1dc2d3eb6527.js.map