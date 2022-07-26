"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[501],{1046:function(e,t,a){a.d(t,{w_:function(){return i}});var r=a(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(n),c=function(){return(c=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function m(e){return e&&e.map((function(e,t){return r.createElement(e.tag,c({key:t},e.attr),m(e.child))}))}function i(e){return function(t){return r.createElement(o,c({attr:c({},e.attr)},t),m(e.child))}}function o(e){var t=function(t){var a,n=e.attr,l=e.size,m=e.title,i=s(e,["attr","size","title"]),o=l||t.size||"1em";return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),r.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,i,{className:a,style:c(c({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),m&&r.createElement("title",null,m),e.children)};return void 0!==l?r.createElement(l.Consumer,null,(function(e){return t(e)})):t(n)}},1219:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),n=a(5444),l=a(3201),c=function(e){var t=e.contacts;return r.createElement("div",{className:"bottom-bar py-1"},r.createElement("a",{className:"text-primary",href:t.twitter},r.createElement("span",{title:"Twitter"},r.createElement(l.fWC,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.facebook},r.createElement("span",{title:"Facebook"},r.createElement(l.Am9,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.instagram},r.createElement("span",{title:"Instagram"},r.createElement(l.Zf_,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-primary",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(l.ltd,{size:26,style:{color:"primary"}}))),r.createElement("a",{className:"text-light",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(l.NML,{size:26,style:{color:"light"}}))),r.createElement("a",{className:"text-warning",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(l.Hjm,{size:26,style:{color:"warning"}}))))},s=function(){return r.createElement("div",{className:"mobile-pages-main"},r.createElement("div",{className:"text-center"},r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/"},r.createElement("span",{className:"text-dark"},"Home"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/about"},r.createElement("span",{className:"text-dark"},"About"))),r.createElement("p",{className:"d-inline p-4"},r.createElement(n.rU,{to:"/archive"},r.createElement("span",{className:"text-dark"},"Archive")))))},m=function(e){var t=e.contacts;return r.createElement("div",{className:"social-links float-right mr-4"},r.createElement("a",{className:"text-primary ml-4",href:t.twitter},r.createElement("span",{title:"Twitter"},r.createElement(l.fWC,{size:40,style:{color:"#1DA1F2"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.facebook},r.createElement("span",{title:"Facebook"},r.createElement(l.Am9,{size:40,style:{color:"#4267B2"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.instagram},r.createElement("span",{title:"Instagram"},r.createElement(l.Zf_,{size:40,style:{color:"#C13584"}}))),r.createElement("a",{className:"text-primary ml-4",href:t.linkedin},r.createElement("span",{title:"Linked In"},r.createElement(l.ltd,{size:40,style:{color:"#0e76a8"}}))),r.createElement("a",{className:"text-light ml-4",href:t.github},r.createElement("span",{title:"GitHub"},r.createElement(l.NML,{size:40,style:{color:"#6e5494"}}))),r.createElement("a",{className:"text-warning ml-4",href:t.stackoverflow},r.createElement("span",{title:"Stack Overflow"},r.createElement(l.Hjm,{size:40,style:{color:"#EF8236"}}))))},i=a.p+"static/ram-d5142bd78adf420a12d8362bb1425b98.jpg",o=function(e){return r.createElement("div",{className:"mobile-bio-main"},r.createElement("img",{src:i,className:"ml-4 mt-2",style:{maxWidth:"75px",maxHeight:"75px",borderRadius:"50%",boxShadow:"1px 1px 3px"},alt:"author-pic"}),r.createElement("h4",{className:"mr-4 mt-4"},e.author))},d=function(e){var t=e.siteTitle,a=(e.tagline,e.author),l=e.contacts;return r.createElement("header",{className:"head-main",style:{background:"black"}},r.createElement("div",{className:"head-elements",style:{margin:"0",padding:".75rem"}},r.createElement("h1",{className:"head-logo ml-4",style:{margin:0}},r.createElement(n.rU,{to:"/",style:{color:"#2A914E",textDecoration:"none"}},t)),r.createElement(m,{contacts:l})),r.createElement(c,{contacts:l}),r.createElement(s,null),r.createElement(o,{author:a}))};d.defaultProps={siteTitle:""};var u=d,p=function(e){var t=e.children;return r.createElement(n.i1,{query:"2366241629",render:function(e){return r.createElement(r.Fragment,null,r.createElement(u,{siteTitle:e.site.siteMetadata.title,tagline:e.site.siteMetadata.tagline,author:e.site.siteMetadata.author,contacts:e.allProfile.nodes[0].contact}),r.createElement("div",{style:{margin:"0 auto",padding:"0px 1.0875rem 1.45rem",paddingTop:0}},r.createElement("main",{className:"p-4"},t),r.createElement("footer",{className:"text-center"},r.createElement("hr",null),r.createElement("p",{className:"d-inline"},"© ",(new Date).getFullYear()," ",r.createElement("a",{className:"text-info",href:e.site.siteMetadata.url},e.site.siteMetadata.author),", All Rights Reserved."),r.createElement("p",{className:"mt-5 text-muted d-inline"},r.createElement("i",null,"Built with "," ",r.createElement("a",{className:"text-info",href:"https://www.gatsbyjs.org"},"Gatsby")," and "," ",r.createElement("a",{className:"text-info",href:"https://reactjs.org"},"React"))))))}})}},2309:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(5444),l=a(2407),c=function(e){var t=e.author,n=e.tagline;return r.createElement("div",{className:"bio-main w-75"},r.createElement(l.S,{src:"../../images/profile.jpeg",className:"profile-img",alt:"",__imageData:a(895)}),r.createElement("h3",{className:"mt-2 author-bio"},t),r.createElement("small",{className:"text-muted"},n))},s=function(){return r.createElement(n.i1,{query:"1611934721",render:function(e){return r.createElement(r.Fragment,null,r.createElement("div",{className:"sidebar-main border-right"},r.createElement(c,{author:e.site.siteMetadata.author,tagline:e.site.siteMetadata.tagline}),r.createElement("div",{className:"page-links"},e.site.siteMetadata.links.map((function(e){return r.createElement(n.rU,{to:e.to},r.createElement("span",{className:e.css},e.text))})))))}})}},262:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=a(3942),n=a(7294),l=a(1219),c=a(2309),s=a(3201),m=function(e){function t(t){var a,r=t.data;return(a=e.call(this,r)||this).state={name:"",email:"",subject:"",message:""},a.handleSubmit=function(e){e.preventDefault()},a.handleInputChange=function(e){var t,r=e.target,n=r.value,l=r.name;a.setState(((t={})[l]=n,t))},a.data=r,a}return(0,r.Z)(t,e),t.prototype.render=function(){return n.createElement(l.Z,null,n.createElement("div",{className:"post-page-main"},n.createElement("div",{className:"sidebar px-4 py-2"},n.createElement(c.Z,null)),n.createElement("div",{className:"post-main"},n.createElement("div",{className:"mt-3"},n.createElement("h2",{className:"heading"},"Contact"),n.createElement("div",{className:"container"},n.createElement("div",{className:"row animated animated-done","data-animate":"fadeIn","data-animate-delay":"0.1"},n.createElement("div",{className:"col-md-6"},n.createElement("form",{id:"contact-form",onSubmit:this.handleSubmit},n.createElement("div",{className:"form-group form-group-sm"},n.createElement("label",{className:"sr-only",for:"contact-name"},"Name"),n.createElement("input",{type:"text",className:"form-control input-sm",id:"contact-name",placeholder:"Name",name:"name",value:this.state.name,onChange:this.handleInputChange})),n.createElement("div",{className:"form-group form-group-sm"},n.createElement("label",{className:"sr-only",for:"contact-email"},"Email"),n.createElement("input",{type:"email",className:"form-control input-sm",id:"contact-email",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleInputChange})),n.createElement("div",{className:"form-group form-group-sm"},n.createElement("label",{className:"sr-only",for:"subject"},"Subject"),n.createElement("input",{type:"text",className:"form-control input-sm",id:"subject",placeholder:"Subject",name:"subject",value:this.state.subject,onChange:this.handleInputChange})),n.createElement("div",{className:"form-group form-group-sm"},n.createElement("label",{className:"sr-only",for:"contact-message"},"Message"),n.createElement("textarea",{rows:"10",className:"form-control input-sm",id:"contact-message",placeholder:"Message",name:"message",onChange:this.handleInputChange},this.state.message)),n.createElement("input",{type:"submit",className:"btn btn-outline-primary btn-sm btn-block border-w-2",value:"Send Message"}))),n.createElement("div",{className:"col-md-5 offset-md-1 mt-4 mt-md-0 animated animated-done"},n.createElement("p",{className:"mb-1"},n.createElement("abbr",{title:"Address"},n.createElement(s.xng,null)," "," ",this.data.allProfile.nodes[0].contact.address.line1," "," ",this.data.allProfile.nodes[0].contact.address.line2,n.createElement("br",null),this.data.allProfile.nodes[0].contact.address.city,", ",this.data.allProfile.nodes[0].contact.address.state," ",this.data.allProfile.nodes[0].contact.address.zip," ",n.createElement("br",null),this.data.allProfile.nodes[0].contact.address.country)),n.createElement("p",{className:"mb-1"},n.createElement("abbr",{title:"email"},n.createElement(s.SRX,null)," "," ",this.data.allProfile.nodes[0].contact.email)),n.createElement("p",{className:"mb-1"},n.createElement("abbr",{title:"email"},n.createElement(s.I7T,null)," "," ",this.data.allProfile.nodes[0].contact.phone)))))))))},t}(n.Component)},895:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/b95b3/profile.jpg","srcSet":"/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/fa657/profile.jpg 281w,\\n/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/135b9/profile.jpg 563w,\\n/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/b95b3/profile.jpg 1125w","sizes":"(min-width: 1125px) 1125px, 100vw"},"sources":[{"srcSet":"/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/a37a7/profile.webp 281w,\\n/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/0fbb3/profile.webp 563w,\\n/static/85ee1dc6a9b5914e5b2d25efcdab0b5d/94e11/profile.webp 1125w","type":"image/webp","sizes":"(min-width: 1125px) 1125px, 100vw"}]},"width":1125,"height":1125}')}}]);
//# sourceMappingURL=component---src-pages-contact-js-6021e72dfe37749c4b98.js.map