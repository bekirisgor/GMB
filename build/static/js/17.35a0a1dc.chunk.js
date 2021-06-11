(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[17],{354:function(e,a,s){"use strict";s.d(a,"a",(function(){return t}));const t=(e="")=>{if((e=e.replace(/[^0-9]/g,"")).length>2){const a=e.slice(0,2),s=e.slice(2,4);return parseInt(a)>=24?"23:59":parseInt(s)>=60?"".concat(a,":59"):"".concat(a,":").concat(s)}return e}},355:function(e,a,s){"use strict";s.d(a,"a",(function(){return o}));var t=s(20),c=s(13),l=s(401),r=s(344),n=(s(1),s(628));const o=e=>{let a=e.errors,s=e.touched,o=e.text,m=e.name,j=Object(l.a)(e,["errors","touched","text","name"]);return console.log(j),Object(t.jsxs)(n.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:o}),Object(t.jsx)(r.a,Object(c.a)(Object(c.a)({name:m},j),{},{className:"form-control"})),a.name&&s.name&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:a.name})]})}},373:function(e,a,s){"use strict";s.d(a,"a",(function(){return c})),s.d(a,"b",(function(){return l}));var t=s(399);t.b().shape({email:t.d().required("Please enter registered email"),password:t.d().required("Please enter your password").min(6,"Password should be longer than 6 chars")}),t.b().shape({firstName:t.d().required("Required"),lastName:t.d().required("Required"),email:t.d().required("Required").email("Should be an e-mail"),password:t.d().required("Enter your password"),passwordConfirmation:t.d().required("Required").oneOf([t.c("password"),null],"Password must same")});const c=t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.a().of(t.d())}),l=t.b().shape({name:t.d().max(30,"Name cannot be longer than 30 char").required("Required"),email:t.d().email("This should be an e-mail"),webSite:t.d(),phoneNumber:t.a().of(t.d())})},390:function(e,a,s){"use strict";var t=s(20),c=(s(1),s(647)),l=s(654);a.a=({selectedItems:e,totalItems:a,handleCheckbox:s})=>Object(t.jsx)("div",{className:"px-2  pr-0 check-button check-all ",children:Object(t.jsx)(c.a,{children:Object(t.jsx)(l.a,{type:"checkbox",className:" mb-0 d-inline-block",id:"selectAll",onClick:s,checked:e.length>=a.length,label:Object(t.jsx)("span",{className:"custom-control-label ".concat(e.length>0&&e.length<=a.length?"indeterminate":""),children:e.length>0&&e.length<=a.length?"Clear Selections":"Select All"})})})})},623:function(e,a,s){"use strict";s.r(a);var t=s(20),c=s(339),l=s(1),r=s.n(l),n=s(78),o=s(335),m=s(646),j=s(388),i=s(385),d=s(515),b=s(645),h=s(387),x=s(637),O=s(12),p=s(24),u=s(159),N=s.n(u),g=s(331),f=s.n(g),y=s(332),v={tag:y.q,className:N.a.string,cssModule:N.a.object},C=function(e){var a=e.className,s=e.cssModule,t=e.tag,c=Object(p.a)(e,["className","cssModule","tag"]),l=Object(y.m)(f()(a,"card-footer"),s);return r.a.createElement(t,Object(O.a)({},c,{className:l}))};C.propTypes=v,C.defaultProps={tag:"div"};var A=C,S=s(79),w=s(0),D=s.n(w),k=s(4),Y=s(344),H=s(657),R=s(643),_=s(644),E=s(628),I=s(354),T=s(337),U=s(355);var L=({isOpen:e,toggle:a,locationID:s})=>{const c=Object(n.c)(),l=(Object(n.d)((e=>e.locations.patch.error)),Object(n.d)((e=>e.locations.patch.loading)),Object(n.d)((e=>Object(S.f)(e.locations,s)))),r=function(){var e=Object(k.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(S.d)({data:t,locationID:s}));case 2:"fulfilled"===e.sent.meta.requestStatus&&a();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),o={name:l.name||"",email:l.email||"",webSite:l.webSite||"",phoneNumber:l.phoneNumber||[""],coord:l.coord||{coordinates:["",""]},address:l.address||{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:{interior:"",exterior:""},formattedAddress:""},workingHours:l.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}};return Object(t.jsxs)(H.a,{isOpen:e,toggle:a,size:"lg",children:[Object(t.jsx)(R.a,{children:"Edit Location"}),Object(t.jsx)(_.a,{children:Object(t.jsx)(Y.c,{initialValues:o,onSubmit:r,children:({errors:e,touched:a,setFieldValue:s})=>Object(t.jsxs)(Y.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:e,touched:a})}),Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:e,touched:a})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:e,touched:a})}),Object(t.jsx)(h.a,{children:Object(t.jsx)(U.a,{type:"phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:e,touched:a,text:"Phone"})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[1]",placeholder:"Latitude",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Long"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[0]",placeholder:"Longitude",className:"form-control"})]})})]}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(Y.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(Y.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(Y.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(Y.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(h.a,{className:"d-flex",children:[Object(t.jsxs)(E.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Indoor No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no.interior",placeholder:"Interior No",className:"form-control"})]}),Object(t.jsxs)(E.a,{className:" form-group has-float-label ml-1",children:[Object(t.jsx)("span",{className:"",children:"Extdoor No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no.exterior",placeholder:"Exterior No",className:"form-control"})]})]})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(Y.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsx)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})}),Object(t.jsx)(T.b,{className:"my-2"}),Object(t.jsx)(j.a,{className:"float-right",form:!0,children:Object(t.jsx)(i.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Done"})})]})})})]})};var q=({locationID:e,handleCheckbox:a,checkboxValue:s})=>{const r=Object(n.c)(),o=Object(l.useState)(!1),O=Object(c.a)(o,2),p=O[0],u=O[1],N=Object(n.d)((a=>Object(S.f)(a.locations,e))),g=()=>{u(!p)};return Object(t.jsxs)(d.a,{className:"my-2",children:[p&&Object(t.jsx)(L,{isOpen:p,toggle:g,locationID:e}),Object(t.jsx)(b.a,{children:Object(t.jsx)(m.a,{children:Object(t.jsxs)(j.a,{className:"align-items-center",children:[Object(t.jsx)(h.a,{xs:2,children:Object(t.jsx)(x.a,{id:e,type:"checkbox",checked:s,onChange:()=>a(e)})}),Object(t.jsx)(h.a,{children:null===N||void 0===N?void 0:N.name}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-end",children:[Object(t.jsx)(i.a,{className:"mx-1",onClick:g,children:"Edit"}),Object(t.jsx)(i.a,{className:"mx-1",onClick:()=>{r(Object(S.e)({locationGroupID:N.parentId,locationID:e}))},children:"Remove"})]})]})})}),Object(t.jsx)(A,{children:Object(t.jsxs)(j.a,{className:"container",children:[Object(t.jsx)(h.a,{xs:2,children:null===N||void 0===N?void 0:N.webSite}),Object(t.jsxs)(h.a,{xs:2,children:["phone",null===N||void 0===N?void 0:N.phoneNumber]}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-end",children:[Object(t.jsx)("span",{children:"G"}),Object(t.jsx)("span",{children:"F"}),Object(t.jsx)("span",{children:"A"}),Object(t.jsx)("span",{children:"Y"})]})]})})]})},M=s(390),P=(s(399),s(8)),F=s.n(P);const z="AIzaSyCcJ6zGEtDzFQjR51V_AlZnDQ70IQ_1FwA",W=function(){var e=Object(k.a)(D.a.mark((function e(a="39.899203,32.919619"){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(z),e.abrupt("return",F.a.request({method:"GET",baseURL:"https://maps.googleapis.com",url:"/maps/api/geocode/json",params:{latlng:a,key:z,location_type:"ROOFTOP"}}).then((e=>e.data)).catch((e=>{throw e})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();class G{constructor(e){this.address={},this.address_components=e.address_components,this.address.formattedAddress=e.formatted_address,this.parseAddress()}parseAddress(){if(!Array.isArray(this.address_components))throw Error("Address Components is not an array");if(!this.address_components.length)throw Error("Address Components is empty");for(let e=0;e<this.address_components.length;e++){const a=this.address_components[e];this.isStreetNumber(a)&&(this.address.street_number=a.long_name),this.isStreetName(a)&&(this.address.street_name=a.long_name),this.isCity(a)&&(this.address.city=a.long_name),this.isCountry(a)&&(this.address.country=a.long_name,this.address.region_code=a.short_name),this.isLocality(a)&&(this.address.locality=a.long_name),this.isSublocality(a)&&(this.address.sublocality=a.long_name),this.isPostalCode(a)&&(this.address.postal_code=a.long_name)}}isStreetNumber(e){return e.types.includes("street_number")}isStreetName(e){return e.types.includes("route")}isCity(e){return e.types.includes("administrative_area_level_1")}isSublocality(e){return e.types.includes("administrative_area_level_4")}isLocality(e){return e.types.includes("administrative_area_level_2")}isCountry(e){return e.types.includes("country")}isPostalCode(e){return e.types.includes("postal_code")}result(){return console.log(this.address),this.address}}var V=s(33),J=s(148),Q={tag:y.q,flush:N.a.bool,className:N.a.string,cssModule:N.a.object,horizontal:N.a.oneOfType([N.a.bool,N.a.string])},Z=function(e){var a=e.className,s=e.cssModule,t=e.tag,c=e.flush,l=e.horizontal,n=Object(p.a)(e,["className","cssModule","tag","flush","horizontal"]),o=Object(y.m)(f()(a,"list-group",c?"list-group-flush":function(e){return!1!==e&&(!0===e||"xs"===e?"list-group-horizontal":"list-group-horizontal-"+e)}(l)),s);return r.a.createElement(t,Object(O.a)({},n,{className:o}))};Z.propTypes=Q,Z.defaultProps={tag:"ul",horizontal:!1};var B=Z,K={tag:y.q,active:N.a.bool,disabled:N.a.bool,color:N.a.string,action:N.a.bool,className:N.a.any,cssModule:N.a.object},X=function(e){e.preventDefault()},$=function(e){var a=e.className,s=e.cssModule,t=e.tag,c=e.active,l=e.disabled,n=e.action,o=e.color,m=Object(p.a)(e,["className","cssModule","tag","active","disabled","action","color"]),j=Object(y.m)(f()(a,!!c&&"active",!!l&&"disabled",!!n&&"list-group-item-action",!!o&&"list-group-item-"+o,"list-group-item"),s);return l&&(m.onClick=X),r.a.createElement(t,Object(O.a)({},m,{className:j}))};$.propTypes=K,$.defaultProps={tag:"li"};var ee=$;var ae=({onSelectAddress:e})=>{const a=Object(l.useState)(""),s=Object(c.a)(a,2),r=s[0],n=s[1],o=Object(l.useState)(!1),m=Object(c.a)(o,2),j=m[0],d=m[1],b=Object(l.useState)([]),h=Object(c.a)(b,2),O=h[0],p=h[1],u=()=>{d(!j)},N=function(){var e=Object(k.a)(D.a.mark((function e(a){var s,t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(a);case 2:s=e.sent,t=s.results.map((e=>new G(e).result())),p(t),d(!0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(t.jsxs)("div",{children:[Object(t.jsxs)(E.a,{className:" mb-0 border form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat-Long"}),Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsx)(x.a,{type:"text",style:{border:"none"},name:"latlong",placeholder:"39.899203,32.919619",className:"form-control",value:r,onChange:e=>n(e.target.value)}),Object(t.jsx)(i.a,{className:"btn-in-form",size:"xs",onClick:()=>N(r),children:"Reverse Geocode"})]})]}),Object(t.jsx)(T.b,{}),Object(t.jsxs)(H.a,{isOpen:j,toggle:u,children:[Object(t.jsx)(R.a,{children:"Reverse Geocode"}),Object(t.jsx)(_.a,{children:Object(t.jsx)(B,{children:O.map((a=>Object(t.jsxs)(ee,{children:[a.formattedAddress,Object(t.jsx)(i.a,{onClick:()=>{u(),e(a,r)},size:"xs",className:"btn-in-form float-right",children:"Select"})]},Object(J.uniqueId)("id"))))})})]})]})},se=s(373);var te=({isOpen:e,toggle:a,locationGroupID:s})=>{const c=Object(n.c)(),r=(Object(n.d)((e=>e.locations.create.error)),Object(n.d)((e=>e.locations.create.loading)),Object(l.useRef)()),o=Object(n.d)((e=>Object(V.i)(e.locationGroups,s))),m=function(){var e=Object(k.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(Object(S.a)({data:t,locationGroupID:s}));case 2:"fulfilled"===e.sent.meta.requestStatus&&a();case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),d={name:"",email:o.email||"",webSite:o.webSite||"",phoneNumber:o.phoneNumber[0]||[""],coord:{coordinates:["",""]},address:{regionCode:"",postalCode:"",province:"",locality:"",sublocality:"",street:"",no:{interior:"",exterior:""},formattedAddress:""},workingHours:o.workingHours||{MONDAY:{open:"",close:""},TUESDAY:{open:"",close:""},WEDNESDAY:{open:"",close:""},THURSDAY:{open:"",close:""},FRIDAY:{open:"",close:""},SATURDAY:{open:"",close:""},SUNDAY:{open:"",close:""}}};return Object(t.jsxs)(H.a,{isOpen:e,toggle:a,size:"lg",children:[Object(t.jsx)(R.a,{children:"CrSeate Location"}),Object(t.jsxs)(_.a,{children:[Object(t.jsx)(ae,{onSelectAddress:(e,a)=>{d.address.regionCode=e.region_code,d.address.postalCode=e.postal_code,d.address.province=e.city,d.address.street=e.street_name,d.address.locality=e.locality,d.address.sublocality=e.sublocality,d.address.no.interior=e.street_number,d.address.formattedAddress=e.formattedAddress;const s=a.replace(/ /g,"").split(",",2),t=s[0],c=s[1];d.coord.coordinates[0]=c,d.coord.coordinates[1]=t,r.current.resetForm()}}),Object(t.jsx)(Y.c,{initialValues:d,onSubmit:m,validationSchema:se.b,enableReinitialize:!0,innerRef:e=>{r.current=e},children:({errors:e,touched:a,setFieldValue:s})=>Object(t.jsxs)(Y.b,{children:[Object(t.jsx)("h6",{className:"mt-3",children:"Location Details"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"text",name:"name",placeholder:"Name",text:"Name",errors:e,touched:a})}),Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"email",name:"email",text:"Email",placeholder:"example@mail.com",errors:e,touched:a})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsx)(U.a,{type:"text",name:"webSite",text:"Website",placeholder:"www.example.com",errors:e,touched:a})}),Object(t.jsx)(h.a,{children:Object(t.jsx)(U.a,{type:"phone",name:"phoneNumber[0]",placeholder:"0 123 45 67",errors:e,touched:a,text:"Phone"})})]}),Object(t.jsxs)(j.a,{className:"",form:!0,children:[Object(t.jsx)(h.a,{className:"",children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Lat"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[1]",placeholder:"Latitude",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Long"}),Object(t.jsx)(Y.a,{type:"text",name:"coord.coordinates[0]",placeholder:"Longitude",className:"form-control"})]})})]}),Object(t.jsx)("h6",{className:"mt-3",children:"Address"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Region Code"}),Object(t.jsx)(Y.a,{type:"text",name:"address.regionCode",placeholder:"Country Code",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Province"}),Object(t.jsx)(Y.a,{type:"text",name:"address.province",placeholder:"Province",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Locality"}),Object(t.jsx)(Y.a,{type:"text",name:"address.locality",placeholder:"Locality",className:"form-control"})]})})]}),Object(t.jsxs)(j.a,{form:!0,children:[Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Neighborhood"}),Object(t.jsx)(Y.a,{type:"text",name:"address.sublocality",placeholder:"neighbor",className:"form-control"})]})}),Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Street"}),Object(t.jsx)(Y.a,{type:"text",name:"address.street",placeholder:"Street Name",className:"form-control"})]})}),Object(t.jsxs)(h.a,{className:"d-flex",children:[Object(t.jsxs)(E.a,{className:" form-group has-float-label mr-1",children:[Object(t.jsx)("span",{className:"",children:"Indoor No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no.interior",placeholder:"Interior No",className:"form-control"})]}),Object(t.jsxs)(E.a,{className:" form-group has-float-label ml-1",children:[Object(t.jsx)("span",{className:"",children:"Extdoor No"}),Object(t.jsx)(Y.a,{type:"text",name:"address.no.exterior",placeholder:"Exterior No",className:"form-control"})]})]})]}),Object(t.jsx)(j.a,{form:!0,children:Object(t.jsx)(h.a,{children:Object(t.jsxs)(E.a,{className:" form-group has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Address"}),Object(t.jsx)(Y.a,{type:"text",name:"address.formattedAddress",placeholder:"Address",className:"form-control"})]})})}),Object(t.jsx)("h6",{className:"mt-3",children:"Working Hours"}),Object(t.jsx)(T.b,{className:"mb-3"}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Monday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.MONDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Tuesday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.TUESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Wednesday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.WEDNESDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"THURSDAY"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.THURSDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsxs)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:[Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Friday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.FRIDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]}),Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Saturday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SATURDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})]}),Object(t.jsx)(j.a,{className:"align-items-center form-group mb-5",form:!0,children:Object(t.jsxs)(h.a,{className:"d-grid",children:[Object(t.jsx)("p",{className:"mb-3 h6 text-center",children:"Sunday"}),Object(t.jsxs)(h.a,{className:"d-flex justify-content-center p-0",children:[Object(t.jsxs)(E.a,{className:"mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Open"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.open",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]}),Object(t.jsx)("span",{className:"mx-2",children:" - "}),Object(t.jsxs)(E.a,{className:" mb-0 has-float-label",children:[Object(t.jsx)("span",{className:"",children:"Close"}),Object(t.jsx)(Y.a,{type:"text",name:"workingHours.SUNDAY.close",placeholder:"hh:mm",className:"form-control",onChange:e=>s(e.target.name,Object(I.a)(e.target.value))})]})]})]})}),Object(t.jsx)(T.b,{className:"my-2"}),Object(t.jsx)(j.a,{className:"float-right",form:!0,children:Object(t.jsx)(i.a,{color:"primary",className:"btn-shadow py-1 float-right md",type:"submit",children:"Create"})})]})})]})]})};a.default=()=>{const e=Object(o.h)(),a=Object(n.c)(),s=Object(l.useState)(!1),r=Object(c.a)(s,2),d=r[0],b=r[1],h=Object(l.useState)([]),x=Object(c.a)(h,2),O=x[0],p=x[1],u=e.groupID,N=Object(n.d)((e=>Object(V.i)(e.locationGroups,u).locations));Object(l.useEffect)((()=>(a(Object(S.c)(u)),()=>{})),[a]);const g=e=>{const a=O;if(a.includes(e)){const s=a.indexOf(e);a.splice(s,1)}else a.push(e);p([...a])};return Object(t.jsxs)(m.a,{className:"my-0",children:[Object(t.jsx)(j.a,{className:"d-flex",children:Object(t.jsx)(M.a,{selectedItems:O,totalItems:N,handleCheckbox:()=>{O.length>0?p([]):p(N)}})}),Object(t.jsx)(te,{isOpen:d,toggle:()=>b(!d),locationGroupID:u}),Object(t.jsx)(j.a,{children:Object(t.jsx)(i.a,{onClick:()=>{b(!0)},children:"Add"})}),N.map((e=>Object(t.jsx)(q,{handleCheckbox:g,checkboxValue:O.includes(e),locationID:e},e))),Object(t.jsx)(j.a,{children:"LocationList"})]})}}}]);