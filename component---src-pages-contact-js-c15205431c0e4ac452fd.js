"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[501],{1046:function(e,t,a){a.d(t,{w_:function(){return i}});var n=a(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(r),c=function(){return(c=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function m(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),m(e.child))}))}function i(e){return function(t){return n.createElement(o,c({attr:c({},e.attr)},t),m(e.child))}}function o(e){var t=function(t){var a,r=e.attr,l=e.size,m=e.title,i=s(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),m&&n.createElement("title",null,m),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},1219:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7294),r=a(5444),l=a(3201),c=function(e){var t=e.contacts;return n.createElement("div",{className:"bottom-bar py-1"},n.createElement("a",{className:" text-primary",href:t.linkedin},n.createElement("span",{title:"Linked In"},n.createElement(l.ltd,{size:26,style:{color:"primary"}}))),n.createElement("a",{className:"text-light",href:t.github},n.createElement("span",{title:"GitHub"},n.createElement(l.NML,{size:26,style:{color:"light"}}))),n.createElement("a",{className:"text-warning",href:t.stackoverflow},n.createElement("span",{title:"Stack Overflow"},n.createElement(l.Hjm,{size:26,style:{color:"warning"}}))))},s=function(){return n.createElement("div",{className:"mobile-pages-main"},n.createElement("div",{className:"text-center"},n.createElement("p",{className:"d-inline p-4"},n.createElement(r.rU,{to:"/"},n.createElement("span",{className:"text-dark"},"Home"))),n.createElement("p",{className:"d-inline p-4"},n.createElement(r.rU,{to:"/about"},n.createElement("span",{className:"text-dark"},"About"))),n.createElement("p",{className:"d-inline p-4"},n.createElement(r.rU,{to:"/archive"},n.createElement("span",{className:"text-dark"},"Archive")))))},m=function(e){var t=e.contacts;return n.createElement("div",{className:"social-links float-right mr-4"},n.createElement("a",{className:"text-primary ml-4",href:t.linkedin},n.createElement("span",{title:"Linked In"},n.createElement(l.ltd,{size:40,style:{color:"primary"}}))),n.createElement("a",{className:"text-light ml-4",href:t.github},n.createElement("span",{title:"GitHub"},n.createElement(l.NML,{size:40,style:{color:"light"}}))),n.createElement("a",{className:"text-warning ml-4",href:t.stackoverflow},n.createElement("span",{title:"Stack Overflow"},n.createElement(l.Hjm,{size:40,style:{color:"warning"}}))))},i=a.p+"static/ram-d5142bd78adf420a12d8362bb1425b98.jpg",o=function(e){return n.createElement("div",{className:"mobile-bio-main"},n.createElement("img",{src:i,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),n.createElement("h4",{className:"mr-4 mt-4"},e.author))},d=function(e){var t=e.siteTitle,a=(e.tagline,e.author),l=e.contacts;return n.createElement("header",{className:"head-main",style:{background:"black"}},n.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},n.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},n.createElement(r.rU,{to:"/",style:{color:"white",textDecoration:"none"}},t)),n.createElement(m,{contacts:l})),n.createElement(c,{contacts:l}),n.createElement(s,null),n.createElement(o,{author:a}))};d.defaultProps={siteTitle:""};var u=d,p=function(e){var t=e.children;return n.createElement(r.i1,{query:"1468229134",render:function(e){return n.createElement(n.Fragment,null,n.createElement(u,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.allProfile.nodes[0].contact}),n.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.createElement("main",{className:"p-4"},t),n.createElement("footer",{className:"text-center"},n.createElement("hr",null),n.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",n.createElement("a",{className:"text-info",href:e.site.siteMetadata.url},e.site.siteMetadata.author),", All Rights Reserved."),n.createElement("p",{className:"mt-5 text-muted d-inline"},n.createElement("i",null,"Built with "," ",n.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby")," and "," ",n.createElement("a",{className:"text-info",href:"https://reactjs.org"},"React"))))))}})}},2309:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5444),l=a(2407),c=function(e){var t=e.author,r=e.tagline;return n.createElement("div",{className:"bio-main w-75"},n.createElement(l.S,{src:"../../images/ram.jpg",className:"profile-img",alt:"",__imageData:a(7089)}),n.createElement("h3",{className:"mt-2 author-bio"},t),n.createElement("small",{className:"text-muted"},r))},s=function(){return n.createElement(r.i1,{query:"1611934721",render:function(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"sidebar-main border-right"},n.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),n.createElement("div",{className:"page-links"},e.site.siteMetadata.links.map((function(e){return n.createElement(r.rU,{to:e.to},n.createElement("span",{className:e.css},e.text))})))))}})}},262:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(3942),r=a(7294),l=a(1219),c=a(2309),s=a(3201),m=function(e){function t(t){var a,n=t.data;return(a=e.call(this,n)||this).state={name:"",email:"",subject:"",message:""},a.handleSubmit=function(e){e.preventDefault(),alert(a.state.subject)},a.handleInputChange=function(e){var t,n=e.target,r=n.value,l=n.name;a.setState(((t={})[l]=r,t))},a.data=n,a}return(0,n.Z)(t,e),t.prototype.render=function(){return r.createElement(l.Z,null,r.createElement("div",{className:"post-page-main"},r.createElement("div",{className:"sidebar px-4 py-2"},r.createElement(c.Z,null)),r.createElement("div",{className:"post-main"},r.createElement("div",{className:"mt-3"},r.createElement("h2",{className:"heading"},"Contact"),r.createElement("div",{className:"container"},r.createElement("div",{className:"row animated animated-done","data-animate":"fadeIn","data-animate-delay":"0.1"},r.createElement("div",{className:"col-md-6"},r.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit},r.createElement("div",{className:"form-group form-group-sm"},r.createElement("label",{className:"sr-only",for:"contact-name"},"Name"),r.createElement("input",{type:"text",className:"form-control input-sm",id:"contact-name",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleInputChange})),r.createElement("div",{className:"form-group form-group-sm"},r.createElement("label",{className:"sr-only",for:"contact-email"},"Email"),r.createElement("input",{type:"email",className:"form-control input-sm",id:"contact-email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChange})),r.createElement("div",{className:"form-group form-group-sm"},r.createElement("label",{className:"sr-only",for:"subject"},"Subject"),r.createElement("input",{type:"text",className:"form-control input-sm",id:"subject",placeholder:"Subject",name:"subject",value:this.state.subject,onChange:this.handleInputChange})),r.createElement("div",{className:"form-group form-group-sm"},r.createElement("label",{className:"sr-only",for:"contact-message"},"Message"),r.createElement("textarea",{rows:"10",className:"form-control input-sm",id:"contact-message",placeholder:"Message",name:"message",onChange:this.handleInputChange},this.state.message)),r.createElement("input",{type:"submit",className:"btn btn-outline-primary btn-sm btn-block border-w-2",value:"Send Message"}))),r.createElement("div",{className:"col-md-5 offset-md-1 mt-4 mt-md-0 animated animated-done"},r.createElement("p",{className:"mb-1"},r.createElement("abbr",{title:"Address"},r.createElement(s.xng,null)," "," ",this.data.allProfile.nodes[0].contact.address.line1," "," ",this.data.allProfile.nodes[0].contact.address.line2,r.createElement("br",null),this.data.allProfile.nodes[0].contact.address.city,", ",this.data.allProfile.nodes[0].contact.address.state," ",this.data.allProfile.nodes[0].contact.address.zip," ",r.createElement("br",null),this.data.allProfile.nodes[0].contact.address.country)),r.createElement("p",{className:"mb-1"},r.createElement("abbr",{title:"email"},r.createElement(s.SRX,null)," "," ",this.data.allProfile.nodes[0].contact.email)),r.createElement("p",{className:"mb-1"},r.createElement("abbr",{title:"email"},r.createElement(s.I7T,null)," "," ",this.data.allProfile.nodes[0].contact.phone)))))))))},t}(r.Component)},7089:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/82d6629490efab218d59faa56dbf272c/81049/ram.jpg","srcSet":"/static/82d6629490efab218d59faa56dbf272c/b9c9b/ram.jpg 270w,\\n/static/82d6629490efab218d59faa56dbf272c/249b7/ram.jpg 540w,\\n/static/82d6629490efab218d59faa56dbf272c/81049/ram.jpg 1080w","sizes":"(min-width: 1080px) 1080px, 100vw"},"sources":[{"srcSet":"/static/82d6629490efab218d59faa56dbf272c/c43d5/ram.webp 270w,\\n/static/82d6629490efab218d59faa56dbf272c/81ee9/ram.webp 540w,\\n/static/82d6629490efab218d59faa56dbf272c/dbe61/ram.webp 1080w","type":"image/webp","sizes":"(min-width: 1080px) 1080px, 100vw"}]},"width":1080,"height":1084}')}}]);
//# sourceMappingURL=component---src-pages-contact-js-c15205431c0e4ac452fd.js.map