(this["webpackJsonpgogo-react"]=this["webpackJsonpgogo-react"]||[]).push([[14],{337:function(e,a,s){"use strict";s.d(a,"a",(function(){return r})),s.d(a,"b",(function(){return n}));var t=s(13),c=s(20),o=(s(1),s(387));const r=e=>Object(c.jsx)(o.a,Object(t.a)(Object(t.a)({},e),{},{widths:["xxs","xs","sm","md","lg","xl","xxl"]})),n=({className:e})=>Object(c.jsx)("div",{className:"separator ".concat(e)})},385:function(e,a,s){"use strict";var t=s(12),c=s(24),o=s(336),r=s(334),n=s(1),l=s.n(n),i=s(159),d=s.n(i),b=s(331),u=s.n(b),m=s(332),j={active:d.a.bool,"aria-label":d.a.string,block:d.a.bool,color:d.a.string,disabled:d.a.bool,outline:d.a.bool,tag:m.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),onClick:d.a.func,size:d.a.string,children:d.a.node,className:d.a.string,cssModule:d.a.object,close:d.a.bool},p=function(e){function a(a){var s;return(s=e.call(this,a)||this).onClick=s.onClick.bind(Object(o.a)(s)),s}Object(r.a)(a,e);var s=a.prototype;return s.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},s.render=function(){var e=this.props,a=e.active,s=e["aria-label"],o=e.block,r=e.className,n=e.close,i=e.cssModule,d=e.color,b=e.outline,j=e.size,p=e.tag,f=e.innerRef,h=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);n&&"undefined"===typeof h.children&&(h.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var O="btn"+(b?"-outline":"")+"-"+d,g=Object(m.m)(u()(r,{close:n},n||"btn",n||O,!!j&&"btn-"+j,!!o&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===p&&(p="a");var x=n?"Close":null;return l.a.createElement(p,Object(t.a)({type:"button"===p&&h.onClick?"button":void 0},h,{className:g,ref:f,onClick:this.onClick,"aria-label":s||x}))},a}(l.a.Component);p.propTypes=j,p.defaultProps={color:"secondary",tag:"button"},a.a=p},387:function(e,a,s){"use strict";var t=s(12),c=s(24),o=s(1),r=s.n(o),n=s(159),l=s.n(n),i=s(331),d=s.n(i),b=s(332),u=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:u,offset:u})]),j={tag:b.q,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},h=function(e){var a=e.className,s=e.cssModule,o=e.widths,n=e.tag,l=Object(c.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,t){var c=e[a];if(delete l[a],c||""===c){var o=!t;if(Object(b.k)(c)){var r,n=o?"-":"-"+a+"-",u=f(o,a,c.size);i.push(Object(b.m)(d()(((r={})[u]=c.size||""===c.size,r["order"+n+c.order]=c.order||0===c.order,r["offset"+n+c.offset]=c.offset||0===c.offset,r)),s))}else{var m=f(o,a,c);i.push(m)}}})),i.length||i.push("col");var u=Object(b.m)(d()(a,i),s);return r.a.createElement(n,Object(t.a)({},l,{className:u}))};h.propTypes=j,h.defaultProps=p,a.a=h},388:function(e,a,s){"use strict";var t=s(12),c=s(24),o=s(1),r=s.n(o),n=s(159),l=s.n(n),i=s(331),d=s.n(i),b=s(332),u=l.a.oneOfType([l.a.number,l.a.string]),m={tag:b.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,s=e.cssModule,o=e.noGutters,n=e.tag,l=e.form,i=e.widths,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,s){var t=e[a];if(delete u[a],t){var c=!s;m.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var j=Object(b.m)(d()(a,o?"no-gutters":null,l?"form-row":"row",m),s);return r.a.createElement(n,Object(t.a)({},u,{className:j}))};p.propTypes=m,p.defaultProps=j,a.a=p},431:function(e,a,s){"use strict";var t=s(12),c=s(24),o=s(1),r=s.n(o),n=s(159),l=s.n(n),i=s(331),d=s.n(i),b=s(332),u={tag:b.q,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,o=e.tag,n=Object(c.a)(e,["className","cssModule","tag"]),l=Object(b.m)(d()(a,"card-title"),s);return r.a.createElement(o,Object(t.a)({},n,{className:l}))};m.propTypes=u,m.defaultProps={tag:"div"},a.a=m},516:function(e,a,s){"use strict";s.r(a);var t=s(20),c=s(0),o=s.n(c),r=s(4),n=s(1),l=s(388),i=s(515),d=s(431),b=s(627),u=s(628),m=s(385),j=s(344),p=s(78),f=s(335),h=s(338),O=s(6),g=s(337),x=s(80),v=s(139),N=s(26);a.default=()=>{const e=Object(p.c)(),a=Object(f.g)(),s=Object(p.d)((e=>e.user.loginStatus)),c=Object(p.d)((e=>e.user.user)),w=Object(p.d)((e=>e.credentials.token));Object(n.useEffect)((()=>((c.id||Object(N.a)(w))&&a.push("/app"),()=>{})),[]);const k=function(){var s=Object(r.a)(o.a.mark((function s(t){var c,r,n;return o.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e(Object(x.b)(t));case 2:r=s.sent,(null===(n=Object(O.e)(r))||void 0===n||null===(c=n.user)||void 0===c?void 0:c.token)&&(e(Object(v.b)(n.user.token.access_token)),a.push("/app"));case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return Object(t.jsx)("div",{className:"container",children:Object(t.jsx)(l.a,{className:"h-100",children:Object(t.jsx)(g.a,{xxs:"12",md:"10",className:"mx-auto my-auto",children:Object(t.jsxs)(i.a,{className:"auth-card",children:[Object(t.jsxs)("div",{className:"position-relative image-side",children:[Object(t.jsx)("p",{className:"text-white-h2",children:" header"}),Object(t.jsxs)("p",{className:"white mb-0",children:["Please use your credentials to login.",Object(t.jsx)("br",{}),"If you are not a member, please",Object(t.jsx)(h.c,{to:"/user/register",className:"white",children:"register"})]})]}),Object(t.jsxs)("div",{className:"form-side",children:[Object(t.jsx)(h.c,{to:"/",className:"white",children:Object(t.jsx)("span",{className:"logo-single"})}),Object(t.jsx)(d.a,{className:"mb-4",children:"LOGIN"}),Object(t.jsx)(j.c,{initialValues:{email:"",password:""},onSubmit:k,children:({errors:e,touched:a})=>Object(t.jsxs)(j.b,{className:"av-tooltip tooltip-label-bottom",children:[Object(t.jsxs)(b.a,{className:"form-group has-float-label",children:[Object(t.jsx)(u.a,{children:"Email"}),Object(t.jsx)(j.a,{className:"form-control",name:"email"}),e.email&&a.email&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:e.email})]}),Object(t.jsxs)(b.a,{className:"form -group has-float-label",children:[Object(t.jsx)(u.a,{children:"Password"}),Object(t.jsx)(j.a,{className:"form-control",type:"password",name:"password"}),e.password&&a.password&&Object(t.jsx)("div",{className:"invalid-feedback d-block",children:e.password})]}),Object(t.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[Object(t.jsx)(h.c,{to:"/user/forgot-password",children:"Forget Password"}),Object(t.jsx)(m.a,{type:"submit",disabled:s.isLoading,color:"primary",size:"lg",children:Object(t.jsx)("span",{className:"label",children:"Login"})})]})]})})]})]})})})})}}}]);