"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[616],{2125:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),n=a(1262);function r(e){return l.createElement(n.Z,null,(()=>{const{default:t}=a(5171);return l.createElement(t,e)}))}function u(e){let{src:t,collapseDepth:a}=e;return l.createElement(r,{src:t,style:{marginTop:"10px",padding:"10px",borderRadius:"4px",backgroundColor:"#292a2b"},name:null,theme:"paraiso",shouldCollapse:e=>null!==e.name&&Object.keys(e.src).length>50,collapsed:a,groupArraysAfterLength:5,enableClipboard:!1,displayDataTypes:!1})}},4684:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7294),n=a(5742),r=a(9960);const u="container_sXH2",c="nav_G2kM",s="navlink_qztC";function o(e){let{to:t,children:a}=e;return l.createElement(r.Z,{className:s,isNavLink:!0,to:t,exact:!0,activeStyle:{backgroundColor:"#363739"}},a)}function m(e){let{children:t}=e;return l.createElement(l.Fragment,null,l.createElement(n.Z,null,l.createElement("html",{lang:"en"}),l.createElement("title",null,"Docusaurus debug panel"),l.createElement("meta",{name:"robots",content:"noindex"})),l.createElement("div",null,l.createElement("nav",{className:c},l.createElement(o,{to:"/__docusaurus/debug"},"Config"),l.createElement(o,{to:"/__docusaurus/debug/metadata"},"Metadata"),l.createElement(o,{to:"/__docusaurus/debug/registry"},"Registry"),l.createElement(o,{to:"/__docusaurus/debug/routes"},"Routes"),l.createElement(o,{to:"/__docusaurus/debug/content"},"Content"),l.createElement(o,{to:"/__docusaurus/debug/globalData"},"Global data")),l.createElement("main",{className:u},t)))}},4060:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),n=a(7303),r=a(4684),u=a(2125);const c="listItem_q8fI",s="route_LWtt",o="routeName_JO2N";function m(){return l.createElement(r.Z,null,l.createElement("h2",null,"Routes"),l.createElement("ul",{className:"clean-list"},n.Z.map((e=>{let{path:t,exact:a,routes:n}=e;return l.createElement("li",{key:t,className:c},l.createElement("div",{className:s},l.createElement("code",{className:o},t)),l.createElement("div",null,"Is exact: ",l.createElement("code",null,String(Boolean(a)))),n&&l.createElement("div",null,"Child Routes:",l.createElement(u.Z,{src:n})))}))))}}}]);