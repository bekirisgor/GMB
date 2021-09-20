(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[12],{363:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if((e=e.replace(/[^0-9]/g,"")).length>2){var a=e.slice(0,2),t=e.slice(2,4);return parseInt(a)>=24?"23:59":parseInt(t)>=60?"".concat(a,":59"):"".concat(a,":").concat(t)}return e}},364:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var s=t(409),c=(s.b().shape({email:s.d().required("Please enter registered email"),password:s.d().required("Please enter your password").min(6,"Password should be longer than 6 chars")}),s.b().shape({firstName:s.d().required("Required"),lastName:s.d().required("Required"),email:s.d().required("Required").email("Should be an e-mail"),password:s.d().required("Enter your password"),passwordConfirmation:s.d().required("Required").oneOf([s.c("password"),null],"Password must same")}),s.b().shape({name:s.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:s.d().email("This should be an e-mail"),webSite:s.d(),phoneNumber:s.d()}));s.b().shape({name:s.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:s.d().email("This should be an e-mail"),webSite:s.d(),phoneNumber:s.a().of(s.d())})},368:function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t(22),c=t(14),n=t(411),r=t(353),l=(t(2),t(640)),o=function(e){var a=e.errors,t=e.touched,o=e.text,i=e.name,m=Object(n.a)(e,["errors","touched","text","name"]);return Object(s.jsxs)(l.a,{className:" form-group has-float-label",children:[Object(s.jsx)("span",{className:"",children:o}),Object(s.jsx)(r.a,Object(c.a)(Object(c.a)({name:i},m),{},{className:"form-control"})),a.name&&t.name&&Object(s.jsx)("div",{className:"invalid-feedback d-block",children:a.name})]})}},369:function(e,a,t){"use strict";t.d(a,"a",(function(){return j})),t.d(a,"b",(function(){return b}));var s,c=t(22),n=t(14),r=(t(2),t(679)),l=t(663),o=t(664),i=t(665),m=t(488),j=function(e){var a=e.children,t=e.btnprops,j=e.isOpen,b=e.toggle,h=e.setIsOpen;return Object(c.jsxs)(r.a,{isOpen:j,toggle:b,children:[Object(c.jsx)(l.a,{children:"Are you sure?"}),Object(c.jsx)(o.a,{children:a}),Object(c.jsxs)(i.a,{children:[Object(c.jsx)(m.a,{size:"sm",onClick:function(){h(!1),s(!1)},children:"Let me think..."}),Object(c.jsx)(m.a,Object(n.a)(Object(n.a)({size:"sm",onClick:function(){h(!1),s(!0)}},t),{},{children:"Do it!"}))]})]})},b=function(){return new Promise((function(e){s=e}))}},636:function(e,a,t){"use strict";t.r(a);var s=t(22),c=t(0),n=t.n(c),r=t(5),l=t(345),o=t(2),i=t.n(o),m=t(54),j=t(667),b=t(488),h=t(641),u=t(642),d=t(8),O=t.n(d),x=t(343),p=t(342),f=t(643),g=t(666),N=t(13),v=t(26),y=t(162),w=t.n(y),k=t(336),A=t.n(k),C=t(337),S={tag:C.q,className:w.a.string,cssModule:w.a.object},D=function(e){var a=e.className,t=e.cssModule,s=e.tag,c=Object(v.a)(e,["className","cssModule","tag"]),n=Object(C.m)(A()(a,"card-text"),t);return i.a.createElement(s,Object(N.a)({},c,{className:n}))};D.propTypes=S,D.defaultProps={tag:"p"};var Y=D,H=t(35),T=t(369),E=t(353),R=t(679),U=t(663),q=t(664),I=t(640),W=t(363),M=t(364),P=t(349),F=t(368),G=function(e){var a=e.isOpen,t=e.toggle,c=e.groupID,i=Object(m.c)(),j=(Object(m.d)((function(e){return e.locationGroups.patch.error})),Object(m.d)((function(e){return e.locationGroups.patch.loading})),Object(m.d)((function(e){return Object(H.i)(e.locationGroups,c)}))),d=Object(o.useState)(!1),O=Object(l.a)(d,2),x=O[0],p=O[1],f=function(){var e=Object(r.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,Object(T.b)();case 3:if(!e.sent){e.next=9;break}return e.next=7,i(Object(H.e)(a));case 7:"fulfilled"===e.sent.meta.requestStatus&&t();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g={_id:c,name:j.name||"",phoneNumber:j.phoneNumber||"",webSite:j.webSite||"",email:j.email||"",workingHours:j.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}};return Object(s.jsxs)(R.a,{isOpen:a,toggle:t,children:[Object(s.jsxs)(T.a,{isOpen:x,btnprops:{color:"primary"},setIsOpen:p,children:[Object(s.jsxs)("p",{children:["You are editing ",Object(s.jsx)("strong",{children:j.name})," location group."]}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Are you sure to change."})})]}),Object(s.jsx)(U.a,{children:"Edit Location Group"}),Object(s.jsx)(q.a,{children:Object(s.jsx)(E.c,{initialValues:g,onSubmit:f,validationSchema:M.a,children:function(e){var a=e.errors,t=e.touched,c=e.setFieldValue;return Object(s.jsxs)(E.b,{children:[Object(s.jsx)(h.a,{form:!0,children:Object(s.jsx)(u.a,{className:"",children:Object(s.jsx)(F.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:a,touched:t})})}),Object(s.jsx)(h.a,{form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"phone",name:"phoneNumber",text:"Phone",placeholder:"0 123 45 67",errors:a,touched:t})})}),Object(s.jsx)(h.a,{className:"",form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:a,touched:t})})}),Object(s.jsx)(h.a,{className:"",form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"email",name:"email",text:"Email",errors:a,touched:t})})}),Object(s.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(s.jsx)(P.b,{className:"mb-3"}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Monday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Tuesday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Wednesday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Thursday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Friday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Saturday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Sunday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(P.b,{className:"my-2"}),Object(s.jsx)(b.a,{color:"primary",type:"submit",className:"btn-shadow py-1 float-right",size:"md",children:"Edit"})]})}})})]})},_=function(e){var a=e.data,t=Object(m.c)(),c=null===a||void 0===a?void 0:a.name,i=null===a||void 0===a?void 0:a.locations.length,d=Object(o.useState)(!1),O=Object(l.a)(d,2),x=O[0],N=O[1],v=Object(o.useState)(!1),y=Object(l.a)(v,2),w=y[0],k=y[1],A=function(){N(!x)},C=function(){var e=Object(r.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,Object(T.b)();case 3:e.sent&&t(Object(H.f)(a));case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(s.jsxs)(f.a,{className:"my-2",children:[x&&Object(s.jsx)(G,{isOpen:x,toggle:A,groupID:a._id}),Object(s.jsx)(g.a,{className:"d-flex",children:Object(s.jsx)(j.a,{children:Object(s.jsxs)(h.a,{className:"align-items-center",children:[Object(s.jsxs)(u.a,{className:"align-items-center justify-contents-center",children:[Object(s.jsx)("strong",{className:"",children:"Name"}),Object(s.jsxs)(Y,{children:[c," "]})]}),Object(s.jsx)(u.a,{children:Object(s.jsxs)(Y,{children:["Total ",i]})}),Object(s.jsxs)(u.a,{children:[Object(s.jsx)("strong",{children:"Notifications"}),Object(s.jsx)(Y,{children:"0 "})]}),Object(s.jsx)(p.b,{className:"btn btn-sm btn-primary",to:"/app/locations/".concat(a._id),children:"Show Locations"}),Object(s.jsx)(b.a,{onClick:A,children:"Edit"}),w&&Object(s.jsxs)(T.a,{isOpen:w,btnprops:{color:"danger"},setIsOpen:k,children:[Object(s.jsxs)("p",{children:["You are deleting ",Object(s.jsx)("strong",{children:a.name})," location group with ",Object(s.jsxs)("strong",{children:[i," locations. "]})]}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Are you sure to delete."})})]}),Object(s.jsx)(b.a,{onClick:function(){return C(a._id)},children:"Remove"})]})})})]})},z=function(e){var a=e.isOpen,t=e.toggle,c=Object(m.c)(),l=(Object(m.d)((function(e){return e.locationGroups.create.error})),Object(m.d)((function(e){return e.locationGroups.create.loading}))),o=function(){var e=Object(r.a)(n.a.mark((function e(a){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(H.b)(a));case 2:"fulfilled"===e.sent.meta.requestStatus&&t();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{children:Object(s.jsxs)(R.a,{isOpen:a,toggle:t,children:[Object(s.jsx)(U.a,{children:"Create Location Group"}),Object(s.jsx)(q.a,{children:Object(s.jsx)(E.c,{initialValues:{name:"",phoneNumber:"",webSite:"",email:"",workingHours:{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}},onSubmit:o,validationSchema:M.a,children:function(e){var a=e.errors,t=e.touched,c=e.setFieldValue;return Object(s.jsxs)(E.b,{children:[Object(s.jsx)(h.a,{form:!0,children:Object(s.jsx)(u.a,{className:"",children:Object(s.jsx)(F.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:a,touched:t})})}),Object(s.jsx)(h.a,{form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"phone",name:"phoneNumber",text:"Phone",placeholder:"0 123 45 67",errors:a,touched:t})})}),Object(s.jsx)(h.a,{className:"",form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:a,touched:t})})}),Object(s.jsx)(h.a,{className:"",form:!0,children:Object(s.jsx)(u.a,{children:Object(s.jsx)(F.a,{type:"email",name:"email",text:"Email",errors:a,touched:t})})}),Object(s.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(s.jsx)(P.b,{className:"mb-3"}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Monday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Tuesday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Wednesday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Thursday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Friday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Saturday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(h.a,{className:"align-items-center form-group mb-5",children:Object(s.jsxs)(u.a,{className:"d-flex",children:[Object(s.jsx)("div",{className:"h6  mr-auto mb-0 p-0 align-self-center",children:"Sunday"}),Object(s.jsxs)(I.a,{className:"mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Open"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]}),Object(s.jsx)("span",{className:"mx-2",children:" - "}),Object(s.jsxs)(I.a,{className:" mb-0 has-float-label",children:[Object(s.jsx)("span",{className:"",children:"Close"}),Object(s.jsx)(E.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(W.a)(e.target.value))}})]})]})}),Object(s.jsx)(P.b,{className:"my-2"}),Object(s.jsx)(b.a,{color:"primary",type:"submit",className:"btn-shadow py-1 float-right",size:"md",disabled:l,children:"Create"})]})}})})]})})},L=(t(25),t(164),t(56),t(15)),V=(t(85),function(){var e=Object(r.a)(n.a.mark((function e(){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=L.store.getState().google.token)||!a.access_token){e.next=4;break}return console.log(a.expiry_date,new Date(a.expiry_date),new Date),e.abrupt("return",a.access_token);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),J=O.a.create({timeout:1e4,headers:{"Content-Type":"application/json","Access-Control-Allow-Credentials":!0}});J.interceptors.request.use(function(){var e=Object(r.a)(n.a.mark((function e(a){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V();case 2:if(t=e.sent,console.log({googletoken:t}),!t){e.next=6;break}return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),(function(e){return Promise.reject(e)})),J.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}));var B=J,K=function(){var e=Object(r.a)(n.a.mark((function e(){var a,t,s=arguments;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:"LOCATION_GROUP",e.next=3,V();case 3:return t=e.sent,console.log({token:t}),e.next=7,B.request({method:"GET",url:"https://mybusinessaccountmanagement.googleapis.com/v1/accounts",headers:{Authorization:"Bearer ".concat(t)},params:{pageSize:20,filter:a}}).then((function(e){return console.log(e.data),e.data})).catch((function(e){throw e}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a.default=function(e){var a=e.match,t=Object(m.c)(),c=Object(x.j)(),n=c.url,r=c.path;console.log(n,r);var i=Object(m.d)((function(e){return Object(H.h)(e.locationGroups)})),d=Object(o.useState)(!1),O=Object(l.a)(d,2),p=O[0],f=O[1];Object(o.useEffect)((function(){return t(Object(H.d)()),function(){}}),[t]);var g=function(){f(!p)};return console.log({match:a}),Object(s.jsxs)(j.a,{className:"my-0",children:[Object(s.jsx)(b.a,{onClick:function(){return K()},children:" Request "}),Object(s.jsx)(h.a,{className:"d-flex",children:Object(s.jsxs)(u.a,{className:"col-1  d-flex justify-content-end",children:[Object(s.jsx)(b.a,{size:"sm",className:"mx-1",onClick:g,children:"New"}),p&&Object(s.jsx)(z,{isOpen:p,toggle:g})]})}),Object(s.jsx)(P.b,{className:"my-3"}),i.map((function(e){return Object(s.jsx)(_,{data:e},e._id)}))]})}}}]);