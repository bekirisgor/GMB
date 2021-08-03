(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[15],{354:function(e,a,s){"use strict";s.d(a,"a",(function(){return t}));const t=(e="")=>{if((e=e.replace(/[^0-9]/g,"")).length>2){const a=e.slice(0,2),s=e.slice(2,4);return parseInt(a)>=24?"23:59":parseInt(s)>=60?"".concat(a,":59"):"".concat(a,":").concat(s)}return e}},355:function(e,a,s){"use strict";s.d(a,"a",(function(){return c})),s.d(a,"b",(function(){return l}));var t=s(400);t.b().shape({email:t.d().required("Please enter registered email"),password:t.d().required("Please enter your password").min(6,"Password should be longer than 6 chars")}),t.b().shape({firstName:t.d().required("Required"),lastName:t.d().required("Required"),email:t.d().required("Required").email("Should be an e-mail"),password:t.d().required("Enter your password"),passwordConfirmation:t.d().required("Required").oneOf([t.c("password"),null],"Password must same")});const c=t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.d()}),l=t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.a().of(t.d())})},359:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(20),c=s(13),l=s(402),r=s(344),n=(s(1),s(633));const o=e=>{let a=e.errors,s=e.touched,o=e.text,j=e.name,m=Object(l.a)(e,["errors","touched","text","name"]);return Object(t.jsxs)(n.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:o}),Object(t.jsx)(r.a,Object(c.a)(Object(c.a)({name:j},m),{},{className:"form-control"})),a.name&&s.name&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:a.name})]})}},360:function(e,a,s){"use strict";s.d(a,"a",(function(){return i})),s.d(a,"b",(function(){return d}));var t=s(20),c=s(13),l=(s(1),s(663)),r=s(649),n=s(650),o=s(651),j=s(386);let m;const i=({children:e,btnprops:a,isOpen:s,toggle:i,setIsOpen:d})=>Object(t.jsxs)(l.a,{isOpen:s,toggle:i,children:[Object(t.jsx)(r.a,{children:"Are you sure?"}),Object(t.jsx)(n.a,{children:e}),Object(t.jsxs)(o.a,{children:[Object(t.jsx)(j.a,{size:"sm",onClick:()=>{d(!1),m(!1)},children:"Let me think..."}),Object(t.jsx)(j.a,Object(c.a)(Object(c.a)({size:"sm",onClick:()=>{d(!1),m(!0)}},a),{},{children:"Do it!"}))]})]}),d=()=>new Promise(((e,a)=>{m=e}))},399:function(e,a,s){"use strict";var t=s(20),c=(s(1),s(654)),l=s(661);a.a=({selectedItems:e,totalItems:a,handleCheckbox:s})=>Object(t.jsx)("div",{className:"btn btn-primary  pl-4 pr-0 check-button check-all",children:Object(t.jsx)(c.a,{children:Object(t.jsx)(l.a,{type:"checkbox",className:"custom-checkbox mb-0 d-inline-block",id:"selectAll",onClick:s,checked:e.length>=a.length,label:Object(t.jsx)("span",{className:"custom-control-label ".concat(e.length>0&&e.length<=a.length?"indeterminate":"")})})})})},628:function(e,a,s){"use strict";s.r(a);var t=s(20),c=s(338),l=s(1),r=s.n(l),n=s(78),o=s(335),j=s(653),m=s(389),i=s(386),d=s(12),b=s(159),h=s.n(b),x=s(413),O={children:h.a.node},p=function(e){return r.a.createElement(x.a,Object(d.a)({group:!0},e))};p.propTypes=O;var u=p,N=s(662),g=s(640),f=s(644),y=s(0),v=s.n(y),C=s(4),A=s(517),S=s(652),w=s(388),k=s(643),D=s(79),Y=s(344),H=s(663),R=s(649),_=s(650),E=s(633),T=s(354),I=s(355),U=s(337),L=s(359),q=s(360);var P=({isOpen:e,toggle:a,locationID:s})=>{const r=Object(n.c)(),o=(Object(n.d)((e=>e.locations.patch.error)),Object(n.d)((e=>e.locations.patch.loading)),Object(n.d)((e=>Object(D.f)(e.locations,s)))),j=Object(l.useState)(!1),d=Object(c.a)(j,2),b=d[0],h=d[1],x=function(){var e=Object(C.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,Object(q.b)();case 3:if(!e.sent){e.next=9;break}return e.next=7,r(Object(D.d)({data:t,locationID:s}));case 7:"fulfilled"===e.sent.meta.requestStatus&&a();case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),O={name:o.name||"",email:o.email||"",webSite:o.webSite||"",phoneNumber:[o.phoneNumber]||!1,coord:o.coord||{coordinates:["",""]},address:o.address||{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:"",formattedAddress:""},note:o.note||"",workingHours:o.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}};return Object(t.jsxs)(H.a,{isOpen:e,toggle:a,size:"lg",children:[b&&Object(t.jsxs)(q.a,{isOpen:b,setIsOpen:h,btnprops:{color:"primary"},children:[Object(t.jsxs)("p",{children:["You are trying to edit ",Object(t.jsx)("strong",{children:o.name})," ","location."]}),Object(t.jsx)("p",{children:Object(t.jsx)("strong",{children:"Are you sure to do changes."})})]}),Object(t.jsx)(R.a,{children:"Edit Location"}),Object(t.jsx)(_.a,{children:Object(t.jsx)(Y.c,{initialValues:O,onSubmit:x,children:({errors:e,touched:a,setFieldValue:s})=>Object(t.jsxs)(Y.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:e,touched:a})}),Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:e,touched:a})})]}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:e,touched:a})}),Object(t.jsx)(w.a,{children:Object(t.jsx)(L.a,{type:"phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:e,touched:a,text:"Phone"})})]}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[1]",placeholder:"Latitude",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Long"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[0]",placeholder:"Longitude",className:"form-control"})]})})]}),Object(t.jsx)(m.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Note"}),Object(t.jsx)(Y.a,{as:"textarea",type:"textarea",name:"note",placeholder:"Take notes about locations",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(Y.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(Y.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(m.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(Y.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(Y.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(w.a,{className:"d-flex",children:[Object(t.jsxs)(E.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Post Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.postalCode",placeholder:"Street No",className:"form-control"})]}),Object(t.jsxs)(E.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Street No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no",placeholder:"Street No",className:"form-control"})]})]})]}),Object(t.jsx)(m.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(Y.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsx)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})}),Object(t.jsx)(U.b,{className:"my-2"}),Object(t.jsx)(m.a,{className:"float-right",form:!0,children:Object(t.jsx)(i.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Done"})})]})})})]})};var z=({locationID:e,handleCheckbox:a,checkboxValue:s})=>{const r=Object(n.c)(),o=Object(n.d)((a=>Object(D.f)(a.locations,e))),d=Object(l.useState)(!1),b=Object(c.a)(d,2),h=b[0],x=b[1],O=Object(l.useState)(!1),p=Object(c.a)(O,2),u=p[0],N=p[1],g=()=>{x(!h)},f=function(){var a=Object(C.a)(v.a.mark((function a(){return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return N(!0),a.next=3,Object(q.b)();case 3:a.sent&&r(Object(D.e)({locationGroupID:o.parentId,locationID:e}));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return Object(t.jsxs)(A.a,{className:"my-2 col-12",children:[h&&Object(t.jsx)(P,{isOpen:h,toggle:g,locationID:e}),Object(t.jsx)(S.a,{children:Object(t.jsx)(j.a,{children:Object(t.jsxs)(m.a,{className:"align-items-center",children:[Object(t.jsx)(w.a,{xs:2,children:Object(t.jsx)(k.a,{id:e,type:"checkbox",checked:s,onChange:()=>a(e)})}),Object(t.jsx)(w.a,{children:null===o||void 0===o?void 0:o.name}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-end",children:[Object(t.jsx)(i.a,{className:"mx-1",onClick:g,children:"Edit"}),u&&Object(t.jsxs)(q.a,{isOpen:u,btnprops:{color:"danger"},setIsOpen:N,children:[Object(t.jsxs)("p",{children:["You are deleting ",Object(t.jsx)("strong",{children:o.name})," ","location"]}),Object(t.jsx)("p",{children:Object(t.jsx)("strong",{children:"Are you sure to delete."})})]}),Object(t.jsx)(i.a,{className:"mx-1",onClick:f,children:"Remove"})]})]})})})]})},M=s(399),F=(s(400),s(7)),W=s.n(F);const G="AIzaSyCcJ6zGEtDzFQjR51V_AlZnDQ70IQ_1FwA",V=function(){var e=Object(C.a)(v.a.mark((function e(a="39.899203,32.919619"){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(G),e.abrupt("return",W.a.request({method:"GET",baseURL:"https://maps.googleapis.com",url:"/maps/api/geocode/json",params:{latlng:a,key:G,location_type:"ROOFTOP"}}).then((e=>e.data)).catch((e=>{throw e})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();class J{constructor(e){this.address={},this.address_components=e.address_components,this.address.formattedAddress=e.formatted_address,this.parseAddress()}parseAddress(){if(!Array.isArray(this.address_components))throw Error("Address Components is not an array");if(!this.address_components.length)throw Error("Address Components is empty");for(let e=0;e<this.address_components.length;e++){const a=this.address_components[e];this.isStreetNumber(a)&&(this.address.street_number=a.long_name),this.isStreetName(a)&&(this.address.street_name=a.long_name),this.isCity(a)&&(this.address.city=a.long_name),this.isCountry(a)&&(this.address.country=a.long_name,this.address.region_code=a.short_name),this.isLocality(a)&&(this.address.locality=a.long_name),this.isSublocality(a)&&(this.address.sublocality=a.long_name),this.isPostalCode(a)&&(this.address.postal_code=a.long_name)}}isStreetNumber(e){return e.types.includes("street_number")}isStreetName(e){return e.types.includes("route")}isCity(e){return e.types.includes("administrative_area_level_1")}isSublocality(e){return e.types.includes("administrative_area_level_4")}isLocality(e){return e.types.includes("administrative_area_level_2")}isCountry(e){return e.types.includes("country")}isPostalCode(e){return e.types.includes("postal_code")}result(){return console.log(this.address),this.address}}var Q=s(33),Z=s(148),B=s(24),K=s(331),X=s.n(K),$=s(332),ee={tag:$.q,flush:h.a.bool,className:h.a.string,cssModule:h.a.object,horizontal:h.a.oneOfType([h.a.bool,h.a.string])},ae=function(e){var a=e.className,s=e.cssModule,t=e.tag,c=e.flush,l=e.horizontal,n=Object(B.a)(e,["className","cssModule","tag","flush","horizontal"]),o=Object($.m)(X()(a,"list-group",c?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),s);return r.a.createElement(t,Object(d.a)({},n,{className:o}))};ae.propTypes=ee,ae.defaultProps={tag:"ul",horizontal:!1};var se=ae,te={tag:$.q,active:h.a.bool,disabled:h.a.bool,color:h.a.string,action:h.a.bool,className:h.a.any,cssModule:h.a.object},ce=function(e){e.preventDefault()},le=function(e){var a=e.className,s=e.cssModule,t=e.tag,c=e.active,l=e.disabled,n=e.action,o=e.color,j=Object(B.a)(e,["className","cssModule","tag","active","disabled","action","color"]),m=Object($.m)(X()(a,!!c&&"active",!!l&&"disabled",!!n&&"list-group-item-action",!!o&&"list-group-item-"+o,"list-group-item"),s);return l&&(j.onClick=ce),r.a.createElement(t,Object(d.a)({},j,{className:m}))};le.propTypes=te,le.defaultProps={tag:"li"};var re=le;var ne=({onSelectAddress:e})=>{const a=Object(l.useState)(""),s=Object(c.a)(a,2),r=s[0],n=s[1],o=Object(l.useState)(!1),j=Object(c.a)(o,2),m=j[0],d=j[1],b=Object(l.useState)([]),h=Object(c.a)(b,2),x=h[0],O=h[1],p=()=>{d(!m)},u=function(){var e=Object(C.a)(v.a.mark((function e(a){var s,t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(a);case 2:s=e.sent,t=s.results.map((e=>new J(e).result())),O(t),d(!0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{children:[Object(t.jsxs)(E.a,{className:" mb-0 border form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat-Long"}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsx)(k.a,{type:"text",style:{border:"none"},name:"latlong",placeholder:"39.899203,32.919619",className:"form-control",value:r,onChange:e=>n(e.target.value)}),Object(t.jsx)(i.a,{className:"btn-in-form",size:"xs",onClick:()=>u(r),children:"Reverse Geocode"})]})]}),Object(t.jsx)(U.b,{}),Object(t.jsxs)(H.a,{isOpen:m,toggle:p,children:[Object(t.jsx)(R.a,{children:"Reverse Geocode"}),Object(t.jsx)(_.a,{children:Object(t.jsx)(se,{children:x.map((a=>Object(t.jsxs)(re,{children:[a.formattedAddress,Object(t.jsx)(i.a,{onClick:()=>{p(),e(a,r)},size:"xs",className:"btn-in-form float-right",children:"Select"})]},Object(Z.uniqueId)("id"))))})})]})]})};var oe=({isOpen:e,toggle:a,locationGroupID:s})=>{const c=Object(n.c)(),r=(Object(n.d)((e=>e.locations.create.error)),Object(n.d)((e=>e.locations.create.loading)),Object(l.useRef)()),o=Object(n.d)((e=>Object(Q.i)(e.locationGroups,s))),j=function(){var e=Object(C.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(D.a)({data:t,locationGroupID:s}));case 2:"fulfilled"===e.sent.meta.requestStatus&&a();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d={name:"",email:o.email||"",webSite:o.webSite||"",phoneNumber:[o.phoneNumber]||!1,coord:{coordinates:["",""]},address:{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:"",formattedAddress:""},workingHours:o.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}},note:""};return Object(t.jsxs)(H.a,{isOpen:e,toggle:a,size:"lg",children:[Object(t.jsx)(R.a,{children:"Create Location"}),Object(t.jsxs)(_.a,{children:[Object(t.jsx)(ne,{onSelectAddress:(e,a)=>{d.address.regionCode=e.region_code,d.address.postalCode=e.postal_code,d.address.province=e.city,d.address.street=e.street_name,d.address.locality=e.locality,d.address.sublocality=e.sublocality,d.address.no=e.street_number,d.address.formattedAddress=e.formattedAddress;const s=a.replace(/ /g,"").split(",",2),t=s[0],c=s[1];d.coord.coordinates[0]=c,d.coord.coordinates[1]=t,r.current.resetForm()}}),Object(t.jsx)(Y.c,{initialValues:d,onSubmit:j,validationSchema:I.b,enableReinitialize:!0,innerRef:e=>{r.current=e},children:({errors:e,touched:a,setFieldValue:s})=>Object(t.jsxs)(Y.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:e,touched:a})}),Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:e,touched:a})})]}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsx)(L.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:e,touched:a})}),Object(t.jsx)(w.a,{children:Object(t.jsx)(L.a,{type:"phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:e,touched:a,text:"Phone"})})]}),Object(t.jsxs)(m.a,{className:"",form:!0,children:[Object(t.jsx)(w.a,{className:"",children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[1]",placeholder:"Latitude",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Long"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[0]",placeholder:"Longitude",className:"form-control"})]})})]}),Object(t.jsx)(m.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Note"}),Object(t.jsx)(Y.a,{as:"textarea",type:"textarea",name:"note",placeholder:"Take notes about locations",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(Y.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(Y.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(m.a,{form:!0,children:[Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(Y.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(Y.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(w.a,{className:"d-flex",children:[Object(t.jsxs)(E.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Post Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.postalCode",placeholder:"Street No",className:"form-control"})]}),Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no",placeholder:"Street No",className:"form-control"})]})]})]}),Object(t.jsx)(m.a,{form:!0,children:Object(t.jsx)(w.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(Y.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(U.b,{className:"mb-3"}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]}),Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})]}),Object(t.jsx)(m.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(w.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(w.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(T.a)(e.target.value))})]})]})]})}),Object(t.jsx)(U.b,{className:"my-2"}),Object(t.jsx)(m.a,{className:"float-right",form:!0,children:Object(t.jsx)(i.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Create"})})]})})]})]})};a.default=()=>{const e=Object(o.h)(),a=Object(n.c)(),s=e.groupID,r=Object(l.useState)(!1),d=Object(c.a)(r,2),b=d[0],h=d[1],x=Object(l.useState)([]),O=Object(c.a)(x,2),p=O[0],y=O[1],v=Object(l.useState)(!1),C=Object(c.a)(v,2),A=C[0],S=C[1],w=Object(n.d)((e=>Object(Q.i)(e.locationGroups,s).locations));Object(l.useEffect)((()=>(a(Object(D.c)(s)),()=>{})),[a]);const k=e=>{const a=p;if(a.includes(e)){const s=a.indexOf(e);a.splice(s,1)}else a.push(e);y([...a])};return Object(t.jsxs)(j.a,{className:"my-0 d-block",children:[Object(t.jsx)(m.a,{className:"justify-content-end",children:Object(t.jsxs)("div",{className:"text-zero top-right-button-container",children:[Object(t.jsx)(i.a,{className:"mr-2 top-right-button",onClick:()=>{h(!0)},children:"Add"}),Object(t.jsxs)(u,{isOpen:A,toggle:()=>S(!A),children:[Object(t.jsx)(M.a,{selectedItems:p,totalItems:w,handleCheckbox:()=>{p.length>0?y([]):y(w)}}),Object(t.jsx)(N.a,{caret:!0,color:"primary",className:"dropdown-toggle-split "}),Object(t.jsxs)(g.a,{right:!0,children:[Object(t.jsx)(f.a,{children:"Delete"}),Object(t.jsx)(f.a,{children:"Edit"}),Object(t.jsx)(f.a,{children:"Move"})]})]}),b&&Object(t.jsx)(oe,{isOpen:b,toggle:()=>h(!b),locationGroupID:s})]})}),Object(t.jsx)(U.b,{className:"my-3"}),Object(t.jsx)(m.a,{children:w.map((e=>Object(t.jsx)(z,{handleCheckbox:k,checkboxValue:p.includes(e),locationID:e},e)))})]})}}}]);