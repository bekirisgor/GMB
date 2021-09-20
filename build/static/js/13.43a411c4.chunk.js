(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[13],{363:function(e,a,s){"use strict";s.d(a,"a",(function(){return t}));var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if((e=e.replace(/[^0-9]/g,"")).length>2){var a=e.slice(0,2),s=e.slice(2,4);return parseInt(a)>=24?"23:59":parseInt(s)>=60?"".concat(a,":59"):"".concat(a,":").concat(s)}return e}},364:function(e,a,s){"use strict";s.d(a,"a",(function(){return c}));var t=s(409),c=(t.b().shape({email:t.d().required("Please enter registered email"),password:t.d().required("Please enter your password").min(6,"Password should be longer than 6 chars")}),t.b().shape({firstName:t.d().required("Required"),lastName:t.d().required("Required"),email:t.d().required("Required").email("Should be an e-mail"),password:t.d().required("Enter your password"),passwordConfirmation:t.d().required("Required").oneOf([t.c("password"),null],"Password must same")}),t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.d()}));t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.a().of(t.d())})},368:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(22),c=s(14),n=s(411),r=s(353),l=(s(2),s(640)),o=function(e){var a=e.errors,s=e.touched,o=e.text,i=e.name,j=Object(n.a)(e,["errors","touched","text","name"]);return Object(t.jsxs)(l.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:o}),Object(t.jsx)(r.a,Object(c.a)(Object(c.a)({name:i},j),{},{className:"form-control"})),a.name&&s.name&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:a.name})]})}},369:function(e,a,s){"use strict";s.d(a,"a",(function(){return d})),s.d(a,"b",(function(){return m}));var t,c=s(22),n=s(14),r=(s(2),s(679)),l=s(663),o=s(664),i=s(665),j=s(488),d=function(e){var a=e.children,s=e.btnprops,d=e.isOpen,m=e.toggle,b=e.setIsOpen;return Object(c.jsxs)(r.a,{isOpen:d,toggle:m,children:[Object(c.jsx)(l.a,{children:"Are you sure?"}),Object(c.jsx)(o.a,{children:a}),Object(c.jsxs)(i.a,{children:[Object(c.jsx)(j.a,{size:"sm",onClick:function(){b(!1),t(!1)},children:"Let me think..."}),Object(c.jsx)(j.a,Object(n.a)(Object(n.a)({size:"sm",onClick:function(){b(!1),t(!0)}},s),{},{children:"Do it!"}))]})]})},m=function(){return new Promise((function(e){t=e}))}},637:function(e,a,s){"use strict";s.r(a);var t=s(22),c=s(370),n=s(345),r=s(2),l=s(54),o=s(343),i=s(667),j=s(641),d=s(488),m=s(672),b=s(680),h=s(650),u=s(654),x=s(671),O=s(83),p=s.n(O),f=s(0),N=s.n(f),g=s(5),y=s(532),v=s.n(y),C=s(643),k=s(666),w=s(642),A=s(653),S=s(82),D=s(353),Y=s(679),H=s(663),R=s(664),_=s(640),I=s(363),E=(s(364),s(349)),T=s(368),U=s(369),q=function(e){var a=e.isOpen,s=e.toggle,c=e.locationID,o=Object(l.c)(),i=(Object(l.d)((function(e){return e.locations.patch.error})),Object(l.d)((function(e){return e.locations.patch.loading})),Object(l.d)((function(e){return Object(S.g)(e.locations,c)}))),m=Object(r.useState)(!1),b=Object(n.a)(m,2),h=b[0],u=b[1],x=function(){var e=Object(g.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,Object(U.b)();case 3:if(!e.sent){e.next=9;break}return e.next=7,o(Object(S.d)({data:a,locationID:c}));case 7:"fulfilled"===e.sent.meta.requestStatus&&s();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O={name:i.name||"",email:i.email||"",webSite:i.webSite||"",phoneNumber:[i.phoneNumber]||!1,coord:i.coord||{coordinates:["",""]},address:i.address||{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:"",formattedAddress:""},note:i.note||"",workingHours:i.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}};return Object(t.jsxs)(Y.a,{isOpen:a,toggle:s,size:"lg",children:[h&&Object(t.jsxs)(U.a,{isOpen:h,setIsOpen:u,btnprops:{color:"primary"},children:[Object(t.jsxs)("p",{children:["You are trying to edit ",Object(t.jsx)("strong",{children:i.name})," ","location."]}),Object(t.jsx)("p",{children:Object(t.jsx)("strong",{children:"Are you sure to do changes."})})]}),Object(t.jsx)(H.a,{children:"Edit Location"}),Object(t.jsx)(R.a,{children:Object(t.jsx)(D.c,{initialValues:O,onSubmit:x,children:function(e){var a=e.errors,s=e.touched,c=e.setFieldValue;return Object(t.jsxs)(D.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:a,touched:s})}),Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:a,touched:s})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:a,touched:s})}),Object(t.jsx)(w.a,{children:Object(t.jsx)(T.a,{type:"phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:a,touched:s,text:"Phone"})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat"}),Object(t.jsx)(D.a,{type:"text",name:"coord.coordinates[1]",placeholder:"Latitude",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Long"}),Object(t.jsx)(D.a,{type:"text",name:"coord.coordinates[0]",placeholder:"Longitude",className:"form-control"})]})})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Note"}),Object(t.jsx)(D.a,{as:"textarea",type:"textarea",name:"note",placeholder:"Take notes about locations",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(D.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(D.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(D.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(D.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(D.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(w.a,{className:"d-flex",children:[Object(t.jsxs)(_.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Post Code"}),Object(t.jsx)(D.a,{type:"text",name:"address.postalCode",placeholder:"Street No",className:"form-control"})]}),Object(t.jsxs)(_.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Street No"}),Object(t.jsx)(D.a,{type:"text",name:"address.no",placeholder:"Street No",className:"form-control"})]})]})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(D.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsx)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})}),Object(t.jsx)(E.b,{className:"my-2"}),Object(t.jsx)(j.a,{className:"float-right",form:!0,children:Object(t.jsx)(d.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Done"})})]})}})})]})},L=function(e){var a,s,c=e.locationID,o=e.handleCheckbox,m=e.checkboxValue,b=Object(l.c)(),h=Object(l.d)((function(e){return Object(S.g)(e.locations,c)})),u=Object(r.useState)(!1),x=Object(n.a)(u,2),O=x[0],p=x[1],f=Object(r.useState)(!1),y=Object(n.a)(f,2),D=y[0],Y=y[1],H=function(){p(!O)},R=function(){var e=Object(g.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,Object(U.b)();case 3:e.sent&&b(Object(S.e)({locationGroupID:h.parentId,locationID:c}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.jsxs)(C.a,{className:"my-2 col-12",children:[O&&Object(t.jsx)(q,{isOpen:O,toggle:H,locationID:c}),Object(t.jsx)(k.a,{children:Object(t.jsx)(i.a,{children:Object(t.jsxs)(j.a,{className:"align-items-center",children:[Object(t.jsx)(w.a,{xs:2,children:Object(t.jsx)(A.a,{id:c,type:"checkbox",checked:m,onChange:function(){return o(c)}})}),Object(t.jsx)(w.a,{children:null===h||void 0===h?void 0:h.name}),Object(t.jsxs)(w.a,{children:[null===h||void 0===h||null===(a=h.address)||void 0===a?void 0:a.locality,"/",null===h||void 0===h||null===(s=h.address)||void 0===s?void 0:s.province]}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-end",children:[Object(t.jsx)(d.a,{className:"mx-1",onClick:H,children:"Edit"}),D&&Object(t.jsxs)(U.a,{isOpen:D,btnprops:{color:"danger"},setIsOpen:Y,children:[Object(t.jsxs)("p",{children:["You are deleting ",Object(t.jsx)("strong",{children:h.name})," ","location"]}),Object(t.jsx)("p",{children:Object(t.jsx)("strong",{children:"Are you sure to delete."})})]}),Object(t.jsx)(d.a,{className:"mx-1",onClick:R,children:"Remove"})]})]})})}),Object(t.jsx)(E.b,{}),Object(t.jsx)("div",{className:"my-2",children:Object(t.jsxs)(j.a,{className:"container mr-0 pr-0",children:[Object(t.jsx)(w.a,{xs:2,children:null===h||void 0===h?void 0:h.webSite}),Object(t.jsxs)(w.a,{xs:2,children:["phone",null===h||void 0===h?void 0:h.phoneNumber]}),Object(t.jsx)(w.a,{className:"d-flex justify-content-end",children:(null===h||void 0===h?void 0:h.coord)?Object(t.jsx)("a",{href:"https://www.google.com/maps?q=".concat(h.coord.coordinates[1],",").concat(h.coord.coordinates[0]),target:"blank",children:"Google"}):null}),Object(t.jsx)(w.a,{className:"float-right",xs:1,children:Object(t.jsx)("i",{className:"text-capitalize text-muted",children:v()(null===h||void 0===h?void 0:h.updatedAt).fromNow()})})]})})]})},F=s(668),P=s(678),z=function(e){var a=e.selectedItems,s=e.totalItems,c=e.handleCheckbox;return Object(t.jsx)("div",{className:"btn btn-primary  pl-4 pr-0 check-button check-all",children:Object(t.jsx)(F.a,{children:Object(t.jsx)(P.a,{type:"checkbox",className:"custom-checkbox mb-0 d-inline-block",id:"selectAll",onClick:c,checked:(null===a||void 0===a?void 0:a.length)>=(null===s||void 0===s?void 0:s.length),label:Object(t.jsx)("span",{className:"custom-control-label ".concat((null===a||void 0===a?void 0:a.length)>0&&(null===a||void 0===a?void 0:a.length)<=(null===s||void 0===s?void 0:s.length)?"indeterminate":"")})})})})},W=(s(409),s(8)),G=s.n(W),M="AIzaSyCcJ6zGEtDzFQjR51V_AlZnDQ70IQ_1FwA",V=function(){var e=Object(g.a)(N.a.mark((function e(){var a,s=arguments;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>0&&void 0!==s[0]?s[0]:"39.899203,32.919619",e.abrupt("return",G.a.request({method:"GET",baseURL:"https://maps.googleapis.com",url:"/maps/api/geocode/json",withCredentials:!1,params:{latlng:a,key:M,location_type:"ROOFTOP"}}).then((function(e){return e.data})).catch((function(e){throw e})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=s(340),Q=s(341),Z=function(){function e(a){Object(J.a)(this,e),this.address={},this.address_components=a.address_components,this.address.formattedAddress=a.formatted_address,this.parseAddress()}return Object(Q.a)(e,[{key:"parseAddress",value:function(){if(!Array.isArray(this.address_components))throw Error("Address Components is not an array");if(!this.address_components.length)throw Error("Address Components is empty");for(var e=0;e<this.address_components.length;e++){var a=this.address_components[e];this.isStreetNumber(a)&&(this.address.street_number=a.long_name),this.isStreetName(a)&&(this.address.street_name=a.long_name),this.isCity(a)&&(this.address.city=a.long_name),this.isCountry(a)&&(this.address.country=a.long_name,this.address.region_code=a.short_name),this.isLocality(a)&&(this.address.locality=a.long_name),this.isSublocality(a)&&(this.address.sublocality=a.long_name),this.isPostalCode(a)&&(this.address.postal_code=a.long_name)}}},{key:"isStreetNumber",value:function(e){return e.types.includes("street_number")}},{key:"isStreetName",value:function(e){return e.types.includes("route")}},{key:"isCity",value:function(e){return e.types.includes("administrative_area_level_1")}},{key:"isSublocality",value:function(e){return e.types.includes("administrative_area_level_4")}},{key:"isLocality",value:function(e){return e.types.includes("administrative_area_level_2")}},{key:"isCountry",value:function(e){return e.types.includes("country")}},{key:"isPostalCode",value:function(e){return e.types.includes("postal_code")}},{key:"result",value:function(){return this.address}}]),e}(),B=s(35),K=s(669),X=s(670),$=function(e){var a=e.onSelectAddress,s=Object(r.useState)(""),c=Object(n.a)(s,2),l=c[0],o=c[1],i=Object(r.useState)(!1),j=Object(n.a)(i,2),m=j[0],b=j[1],h=Object(r.useState)([]),u=Object(n.a)(h,2),x=u[0],p=u[1],f=function(){b(!m)},y=function(){var e=Object(g.a)(N.a.mark((function e(a){var s,t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(a);case 2:s=e.sent,t=s.results.map((function(e){return new Z(e).result()})),p(t),b(!0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{children:[Object(t.jsxs)(_.a,{className:" mb-0 border form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat-Long"}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsx)(A.a,{type:"text",style:{border:"none"},name:"latlong",placeholder:"39.899203,32.919619",className:"form-control",value:l,onChange:function(e){return o(e.target.value)}}),Object(t.jsx)(d.a,{className:"btn-in-form",size:"xs",onClick:function(){return y(l)},children:"Reverse Geocode"})]})]}),Object(t.jsx)(E.b,{}),Object(t.jsxs)(Y.a,{isOpen:m,toggle:f,children:[Object(t.jsx)(H.a,{children:"Reverse Geocode"}),Object(t.jsx)(R.a,{children:Object(t.jsx)(K.a,{children:x.map((function(e){return Object(t.jsxs)(X.a,{children:[e.formattedAddress,Object(t.jsx)(d.a,{onClick:function(){f(),a(e,l)},size:"xs",className:"btn-in-form float-right",children:"Select"})]},Object(O.uniqueId)("id"))}))})})]})]})},ee=function(e){var a=e.isOpen,s=e.toggle,c=e.locationGroupID,n=Object(l.c)(),o=(Object(l.d)((function(e){return e.locations.create.error})),Object(l.d)((function(e){return e.locations.create.loading})),Object(r.useRef)()),i=Object(l.d)((function(e){return Object(B.i)(e.locationGroups,c)})),m=function(){var e=Object(g.a)(N.a.mark((function e(a){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"coordinates"in a&&delete a.coordinates,e.next=3,n(Object(S.a)({data:a,locationGroupID:c}));case 3:"fulfilled"===e.sent.meta.requestStatus&&s();case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),b={name:"",email:i.email||"",webSite:i.webSite||"",phoneNumber:[i.phoneNumber]||!1,coord:{coordinates:["",""]},coordinates:"",phoneString:"",address:{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:"",formattedAddress:""},workingHours:i.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}},note:""};return Object(t.jsxs)(Y.a,{isOpen:a,toggle:s,size:"lg",children:[Object(t.jsx)(H.a,{children:"Create Location"}),Object(t.jsxs)(R.a,{children:[Object(t.jsx)($,{onSelectAddress:function(e,a){b.address.regionCode=e.region_code,b.address.postalCode=e.postal_code,b.address.province=e.city,b.address.street=e.street_name,b.address.locality=e.locality,b.address.sublocality=e.sublocality,b.address.no=e.street_number,b.address.formattedAddress=e.formattedAddress;var s=a.replace(/ /g,"");o.current.resetForm();var t=s.split(",",2),c=t[0],n=t[1];o.current.setFieldValue("coord.coordinates[0]",n),o.current.setFieldValue("coord.coordinates[1]",c),o.current.setFieldValue("coordinates",a)}}),Object(t.jsx)(D.c,{initialValues:b,onSubmit:m,enableReinitialize:!0,innerRef:function(e){o.current=e},children:function(e){var a=e.errors,s=e.touched,c=e.setFieldValue;e.values;return Object(t.jsxs)(D.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:a,touched:s})}),Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:a,touched:s})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:a,touched:s})}),Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(T.a,{className:"form-control",type:"phone",text:"Phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:a,touched:s})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat-Long"}),Object(t.jsx)(D.a,{type:"text",name:"coordinates",placeholder:"12.34678,12.34567",className:"form-control",onChange:function(e){if(e.target.value.match(/[,]/)){var a=e.target.value.replace(/ /g,"").split(",",2),s=a[0],t=a[1];c("coord.coordinates[0]",t),c("coord.coordinates[1]",s),c("coordinates",e.target.value)}}})]})}),Object(t.jsx)(w.a,{children:Object(t.jsx)(T.a,{className:"form-control",type:"phone",text:"Additional Phone",name:"phoneNumber[1]",placeholder:"0 123 45 67",errors:a,touched:s})})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Note"}),Object(t.jsx)(D.a,{as:"textarea",type:"textarea",name:"note",placeholder:"Take notes about locations",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(D.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(D.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(D.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(D.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(D.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(w.a,{className:"d-flex",children:[Object(t.jsxs)(_.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Post Code"}),Object(t.jsx)(D.a,{type:"text",name:"address.postalCode",placeholder:"Street No",className:"form-control"})]}),Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street No"}),Object(t.jsx)(D.a,{type:"text",name:"address.no",placeholder:"Street No",className:"form-control"})]})]})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(_.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(D.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(E.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})]}),Object(t.jsx)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(_.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(_.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(D.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:function(e){return c(e.target.name,Object(I.a)(e.target.value))}})]})]})]})}),Object(t.jsx)(E.b,{className:"my-2"}),Object(t.jsx)(j.a,{className:"float-right",form:!0,children:Object(t.jsx)(d.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Create"})})]})}})]})]})};a.default=function(){var e=Object(o.i)(),a=Object(l.c)(),s=Object(x.a)(),O=e.groupID;console.log({groupID:O});var f=Object(r.useState)(!1),N=Object(n.a)(f,2),g=N[0],y=N[1],v=Object(r.useState)([]),C=Object(n.a)(v,2),k=C[0],w=C[1],A=Object(r.useState)(!1),D=Object(n.a)(A,2),Y=D[0],H=D[1],R=Object(r.useState)([]),_=Object(n.a)(R,2),I=_[0],T=_[1];Object(r.useEffect)((function(){a(Object(S.c)(O))}),[a]);var U=Object(l.d)((function(e){var a;return null===(a=Object(B.i)(e.locationGroups,O))||void 0===a?void 0:a.locations}));Object(r.useEffect)((function(){T(U)}),[U]);var q=function(e){var a=k;if(a.includes(e)){var s=a.indexOf(e);a.splice(s,1)}else a.push(e);w(Object(c.a)(a))},F=function(e){T(Object(S.f)(O,e.target.value,s.locale))},P=Object(r.useMemo)((function(){return p.a.debounce(F,400)}),[]);return Object(t.jsxs)(i.a,{className:"my-0 d-block",children:[Object(t.jsxs)(j.a,{className:"justify-content-end",children:[Object(t.jsx)("div",{className:"search-sm d-inline-block float-md-left mr-1 mb-1 align-top",children:Object(t.jsx)("input",{type:"text",name:"keyword",id:"search",placeholder:"Search",onChange:function(e){return P(e)}})}),Object(t.jsxs)("div",{className:"text-zero top-right-button-container",children:[Object(t.jsx)(d.a,{className:"mr-2 top-right-button",onClick:function(){y(!0)},children:"Add"}),Object(t.jsxs)(m.a,{isOpen:Y,toggle:function(){return H(!Y)},children:[Object(t.jsx)(z,{selectedItems:k,totalItems:I,handleCheckbox:function(){k.length>0?w([]):w(I)}}),Object(t.jsx)(b.a,{caret:!0,color:"primary",className:"dropdown-toggle-split "}),Object(t.jsxs)(h.a,{right:!0,children:[Object(t.jsx)(u.a,{children:"Delete"}),Object(t.jsx)(u.a,{children:"Edit"}),Object(t.jsx)(u.a,{children:"Move"})]})]}),g&&Object(t.jsx)(ee,{isOpen:g,toggle:function(){return y(!g)},locationGroupID:O})]})]}),Object(t.jsx)(E.b,{className:"my-3"}),Object(t.jsx)(j.a,{children:null===I||void 0===I?void 0:I.map((function(e){return Object(t.jsx)(L,{handleCheckbox:q,checkboxValue:k.includes(e),locationID:e},e)}))})]})}}}]);