"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[206],{8791:function(n,e,r){r.d(e,{Z:function(){return J}});r(2791);var t,o,i,a,c,s,l,d,u,p,x,m,f,h,g=r(5705),b=r(6727),Z=r(168),v=r(5867),j=(0,v.ZP)(g.l0)(t||(t=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column; \n  align-items: center; \n  max-width: 400px;\n  margin: 0 auto;\n"]))),k=v.ZP.label(o||(o=(0,Z.Z)(["\n  margin-bottom: 15px;\n  text-align: center;\n"]))),P=(0,v.ZP)(g.gN)(i||(i=(0,Z.Z)(["\n  width: 250px;\n  height: 40px;\n  padding: 10px;\n  font-size: 16px;\n  border: 1.5px solid #2ecc71;\n  border-radius: 8px;\n  outline: none;\n  transition: border-color 0.3s ease-in-out;\n\n  &:focus {\n    border-color: #e74c3c;\n  }\n"]))),w=v.ZP.button(a||(a=(0,Z.Z)(["\n  margin-left: 10px;\n  height: 40px;\n  background-color: #3498db;\n  color: #ecf0f1;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;\n\n  &:hover {\n    color: #f39c12;\n    background-color: #2c3e50;\n  }\n"]))),y=(0,v.ZP)(g.Bc)(c||(c=(0,Z.Z)(["\n  color: #e74c3c;\n  font-size: 14px;\n  margin-top: 5px;\n  display: block;\n  text-align: center;\n"]))),T=r(184),S=b.Ry().shape({title:b.Z_().required("Required")}),z=function(n){var e=n.submitClick;return(0,T.jsx)("div",{children:(0,T.jsx)(g.J9,{initialValues:{title:""},validationSchema:S,onSubmit:function(n,r){r.resetForm(),e(n)},children:(0,T.jsxs)(j,{children:[(0,T.jsxs)(k,{children:[(0,T.jsx)(P,{name:"title",placeholder:"your movie"}),(0,T.jsx)(y,{component:"span",name:"title"})]}),(0,T.jsx)(w,{type:"submit",children:"Search"})]})})})},_=r(1087),C=v.ZP.div(s||(s=(0,Z.Z)(["\n  margin: 0 auto;\n  background-color: #3498db;\n  padding: 20px;\n  border-radius: 12px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  margin-top: 30px;\n  width: 450px;\n"]))),F=v.ZP.p(l||(l=(0,Z.Z)(["\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 12px;\n  color: #e74c3c;\n"]))),q=v.ZP.ul(d||(d=(0,Z.Z)(["\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),N=v.ZP.li(u||(u=(0,Z.Z)(["\n  font-size: 16px;\n  margin-bottom: 10px;\n  color: #2ecc71;\n"]))),R=(0,v.ZP)(_.rU)(p||(p=(0,Z.Z)(["\n  text-decoration: none;\n  color: #2c3e50;\n  transition: color 0.3s ease-in-out;\n\n  &:hover {\n    color: #e74c3c;\n  }\n  \n  \n"]))),U=v.ZP.div(x||(x=(0,Z.Z)(["\n  margin: 0 auto;\n  background-color: #ecf0f1;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-top: 20px;\n  width: 400px;\n"]))),B=v.ZP.ul(m||(m=(0,Z.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 20px;\n"]))),E=v.ZP.li(f||(f=(0,Z.Z)(["\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #34495e;\n"]))),H=(0,v.ZP)(_.rU)(h||(h=(0,Z.Z)(["\n  text-decoration: none;\n  color: #34495e;\n  transition: color 0.3s ease-in-out;\n\n  &:hover {\n    color: #f1c40f;\n  }\n"]))),J=function(n){var e=n.title,r=n.movies,t=n.location,o=n.onSubmit;return(0,T.jsx)(T.Fragment,{children:"Trending Today"===e?(0,T.jsxs)(C,{children:[(0,T.jsx)(F,{children:e}),(0,T.jsx)(q,{children:r.map((function(n){return(0,T.jsx)(N,{children:(0,T.jsx)(R,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})]}):(0,T.jsxs)(U,{children:[(0,T.jsx)(z,{submitClick:o}),(0,T.jsx)(B,{children:r.map((function(n){return(0,T.jsx)(E,{children:(0,T.jsx)(H,{to:"/movies/".concat(n.id),state:{from:t},children:n.title||n.name})},n.id)}))})]})})}},9587:function(n,e,r){r.d(e,{T:function(){return l}});var t=r(5861),o=r(9439),i=r(7757),a=r.n(i),c=r(2791),s=r(5218),l=function(n,e){var r=(0,c.useState)([]),i=(0,o.Z)(r,2),l=i[0],d=i[1],u=(0,c.useState)(!1),p=(0,o.Z)(u,2),x=p[0],m=p[1],f=(0,c.useState)(!1),h=(0,o.Z)(f,2),g=h[0],b=h[1];return(0,c.useEffect)((function(){function r(){return(r=(0,t.Z)(a().mark((function r(){var t,o,i;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,b(!0),m(!1),!e){r.next=10;break}return t=e.split("/").pop(),r.next=7,n(t);case 7:return 0===(o=r.sent).length?s.ZP.error("No movie available"):d(o),r.abrupt("return");case 10:return r.next=12,n(e);case 12:i=r.sent,d(i),r.next=19;break;case 16:r.prev=16,r.t0=r.catch(0),m(!0);case 19:return r.prev=19,b(!1),r.finish(19);case 22:case"end":return r.stop()}}),r,null,[[0,16,19,22]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[n,e]),{data:l,error:x,loading:g}}},1206:function(n,e,r){r.r(e),r.d(e,{default:function(){return l}});var t=r(8791),o=r(8512),i=r(9587),a=r(7689),c=r(9075),s=r(184);function l(){var n=(0,a.TH)(),e=(0,i.T)(c.wr,""),r=e.data,l=e.error,d=e.loading;return(0,s.jsxs)(s.Fragment,{children:[l?(0,s.jsx)("p",{style:{color:" #bdc3c7"},children:"Try to reload page"}):(0,s.jsx)(t.Z,{title:"Trending Today",movies:r,location:n}),d&&(0,s.jsx)(o.a,{})]})}}}]);
//# sourceMappingURL=206.ee31e9e4.chunk.js.map