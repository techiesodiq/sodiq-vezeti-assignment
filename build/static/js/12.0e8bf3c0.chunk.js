(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[12],{1153:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1167:function(e,a,t){"use strict";var n=t(1),r=t(5),o=t(0),c=(t(2),t(3)),i=t(249),l=t(7),s=o.forwardRef((function(e,a){var t=e.classes,l=e.className,s=e.raised,m=void 0!==s&&s,u=Object(r.a)(e,["classes","className","raised"]);return o.createElement(i.a,Object(n.a)({className:Object(c.a)(t.root,l),elevation:m?8:1,ref:a},u))}));a.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1172:function(e,a,t){"use strict";var n=t(1),r=t(5),o=t(0),c=(t(2),t(3)),i=t(7),l=o.forwardRef((function(e,a){var t=e.classes,i=e.className,l=e.component,s=void 0===l?"div":l,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({className:Object(c.a)(t.root,i),ref:a},m))}));a.a=Object(i.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},1181:function(e,a,t){"use strict";var n=t(0),r=t(126);a.a=Object(r.a)(n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},1204:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(33),r=t(29),o=(t(0),t(1205));function c(e){var a=e.uri,t=e.method,c=e.onSuccess,i=e.onError,l=Object(o.a)({loading:!1,error:null,success:null}),s=Object(r.a)(l,2),m=s[0],u=s[1];return Object(n.a)({runFetch:function(e){u({loading:!0,error:null,success:null});var r="";"GET"===t&&e&&Object.keys(e).map((function(a,t){return r="".concat(a,"=").concat(e[a]),Object.key(e).length-1!==t&&(r="".concat(r,"&")),a})),"POST"===t&&(e=Object(n.a)(Object(n.a)({},e||{}),{},{orgId:"728934"}));var o={method:t,headers:{"Content-Type":"application/json",Authorization:"Basic "+btoa("sodiq.akanmu001@gmail.com:FrewQ12Sdcv33aqEz!")}};"POST"===t&&Object.assign(o,{body:JSON.stringify(e)}),fetch("https://secure.vezeti.net/test-api/v3".concat(a).concat("GET"===t&&r?"?".concat(r):""),o).then((function(e){return e.json()})).then((function(e){"00"===e.responseCode?(u({loading:!1,success:e.responseMessage,error:null}),c&&c(e)):(u({error:e.responseMessage,loading:!1,success:null}),i&&i(e))})).catch((function(e){u({error:"Network Connectivity Error",loading:!1,success:null}),i&&i(e)}))}},m)}},1205:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(33),r=t(29),o=t(0),c=t.n(o);function i(e){var a=c.a.useState({}),t=Object(r.a)(a,2),o=t[0],i=t[1];return[o,function(e){return i((function(a){return Object(n.a)(Object(n.a)({},a),e)}))}]}},1265:function(e,a,t){"use strict";var n=t(5),r=t(1),o=t(0),c=(t(2),t(3)),i=t(14),l=t(7),s=t(249),m=t(126),u=Object(m.a)(o.createElement("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),d=Object(m.a)(o.createElement("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),p=Object(m.a)(o.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),g=Object(m.a)(o.createElement("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),f=t(1181),h=t(1065),b=t(10),v={success:o.createElement(u,{fontSize:"inherit"}),warning:o.createElement(d,{fontSize:"inherit"}),error:o.createElement(p,{fontSize:"inherit"}),info:o.createElement(g,{fontSize:"inherit"})},E=o.createElement(f.a,{fontSize:"small"}),O=o.forwardRef((function(e,a){var t=e.action,i=e.children,l=e.classes,m=e.className,u=e.closeText,d=void 0===u?"Close":u,p=e.color,g=e.icon,f=e.iconMapping,O=void 0===f?v:f,y=e.onClose,j=e.role,w=void 0===j?"alert":j,x=e.severity,C=void 0===x?"success":x,S=e.variant,N=void 0===S?"standard":S,k=Object(n.a)(e,["action","children","classes","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]);return o.createElement(s.a,Object(r.a)({role:w,square:!0,elevation:0,className:Object(c.a)(l.root,l["".concat(N).concat(Object(b.a)(p||C))],m),ref:a},k),!1!==g?o.createElement("div",{className:l.icon},g||O[C]||v[C]):null,o.createElement("div",{className:l.message},i),null!=t?o.createElement("div",{className:l.action},t):null,null==t&&y?o.createElement("div",{className:l.action},o.createElement(h.a,{size:"small","aria-label":d,title:d,color:"inherit",onClick:y},E)):null)}));a.a=Object(l.a)((function(e){var a="light"===e.palette.type?i.a:i.e,t="light"===e.palette.type?i.e:i.a;return{root:Object(r.a)({},e.typography.body2,{borderRadius:e.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"}),standardSuccess:{color:a(e.palette.success.main,.6),backgroundColor:t(e.palette.success.main,.9),"& $icon":{color:e.palette.success.main}},standardInfo:{color:a(e.palette.info.main,.6),backgroundColor:t(e.palette.info.main,.9),"& $icon":{color:e.palette.info.main}},standardWarning:{color:a(e.palette.warning.main,.6),backgroundColor:t(e.palette.warning.main,.9),"& $icon":{color:e.palette.warning.main}},standardError:{color:a(e.palette.error.main,.6),backgroundColor:t(e.palette.error.main,.9),"& $icon":{color:e.palette.error.main}},outlinedSuccess:{color:a(e.palette.success.main,.6),border:"1px solid ".concat(e.palette.success.main),"& $icon":{color:e.palette.success.main}},outlinedInfo:{color:a(e.palette.info.main,.6),border:"1px solid ".concat(e.palette.info.main),"& $icon":{color:e.palette.info.main}},outlinedWarning:{color:a(e.palette.warning.main,.6),border:"1px solid ".concat(e.palette.warning.main),"& $icon":{color:e.palette.warning.main}},outlinedError:{color:a(e.palette.error.main,.6),border:"1px solid ".concat(e.palette.error.main),"& $icon":{color:e.palette.error.main}},filledSuccess:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.success.main},filledInfo:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.info.main},filledWarning:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.warning.main},filledError:{color:"#fff",fontWeight:e.typography.fontWeightMedium,backgroundColor:e.palette.error.main},icon:{marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9},message:{padding:"8px 0"},action:{display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}}}),{name:"MuiAlert"})(O)},2155:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(21),c=t(600),i=t(1135),l=t(1072),s=t(1145),m=t(125),u=t(1091),d=t(1117),p=t(1167),g=t(1172),f=t(1112),h=t(332),b=t(91),v=t(101),E=t(8),O=t.n(E),y=t(12),j=t(29),w=t(28),x=t(3),C=t(1071),S=t(1092),N=t(1153),k=Object(c.a)((function(){return{root:{}}})),W=function(e){var a=e.className,t=Object(w.a)(e,["className"]),o=k(),c=Object(v.a)().loginWithPopup,i=Object(n.useState)(null),s=Object(j.a)(i,2),m=s[0],u=s[1],d=Object(N.a)(),p=function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0),d.current&&u(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",Object.assign({className:Object(x.a)(o.root,a)},t),m&&r.a.createElement(l.a,{my:3},r.a.createElement(C.a,{error:!0},m)),r.a.createElement(l.a,{display:"flex",justifyContent:"center"},r.a.createElement(S.a,{onClick:p,variant:"contained",color:"secondary"},"Log in with Auth0")))},z=t(1177),M=t(1188),A=t(1125),I=Object(c.a)((function(e){return{root:{},googleButton:{backgroundColor:e.palette.common.white},providerIcon:{marginRight:e.spacing(2)},divider:{flexGrow:1},dividerText:{margin:e.spacing(2)}}})),T=function(e){var a=e.className,t=Object(w.a)(e,["className"]),n=I(),o=Object(v.a)(),c=o.signInWithEmailAndPassword,i=o.signInWithGoogle,s=Object(N.a)(),u=function(){var e=Object(y.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{className:n.googleButton,fullWidth:!0,onClick:u,size:"large",variant:"contained"},r.a.createElement("img",{alt:"Google",className:n.providerIcon,src:"/static/images/google.svg"}),"Sign in with Google"),r.a.createElement(l.a,{alignItems:"center",display:"flex",mt:2},r.a.createElement(f.a,{className:n.divider,orientation:"horizontal"}),r.a.createElement(m.a,{color:"textSecondary",variant:"body1",className:n.dividerText},"OR"),r.a.createElement(f.a,{className:n.divider,orientation:"horizontal"})),r.a.createElement(M.a,{initialValues:{email:"",password:"",submit:null},validationSchema:z.f().shape({email:z.g().email("Must be a valid email").max(255).required("Email is required"),password:z.g().max(255).required("Password is required")}),onSubmit:function(){var e=Object(y.a)(O.a.mark((function e(a,t){var n,r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,o=t.setSubmitting,e.prev=1,e.next=4,c(a.email,a.password);case 4:s.current&&(r({success:!0}),o(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),s.current&&(r({success:!1}),n({submit:e.t0.message}),o(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var o=e.errors,c=e.handleBlur,i=e.handleChange,s=e.handleSubmit,m=e.isSubmitting,u=e.touched,d=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:s,className:Object(x.a)(n.root,a)},t),r.a.createElement(A.a,{error:Boolean(u.email&&o.email),fullWidth:!0,helperText:u.email&&o.email,label:"Email Address",margin:"normal",name:"email",onBlur:c,onChange:i,type:"email",value:d.email,variant:"outlined"}),r.a.createElement(A.a,{error:Boolean(u.password&&o.password),fullWidth:!0,helperText:u.password&&o.password,label:"Password",margin:"normal",name:"password",onBlur:c,onChange:i,type:"password",value:d.password,variant:"outlined"}),o.submit&&r.a.createElement(l.a,{mt:3},r.a.createElement(C.a,{error:!0},o.submit)),r.a.createElement(l.a,{mt:2},r.a.createElement(S.a,{color:"secondary",disabled:m,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In")))})))},L=t(33),B=t(1056),q=t(1265),P=t(1204),R=Object(c.a)((function(){return{root:{}}})),F=function(e){var a=e.className,t=Object(w.a)(e,["className"]),n=Object(P.a)({uri:"/login/",method:"POST",onSuccess:function(){var e=Object(y.a)(O.a.mark((function e(a){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a.responseData);case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}),c=n.runFetch,i=n.error,s=n.success,m=n.loading,d=R(),p=Object(v.a)().login,g=Object(N.a)();return r.a.createElement(M.a,{initialValues:{email:"demos@email.com",password:"password1#",submit:null},validationSchema:z.f().shape({email:z.g().email("Must be a valid email").max(255).required("Email is required"),password:z.g().max(255).required("Password is required")}),onSubmit:function(){var e=Object(y.a)(O.a.mark((function e(a,t){var n,r,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.setErrors,r=t.setStatus,o=t.setSubmitting;try{c(Object(L.a)(Object(L.a)({},a),{},{typeEmailOrPhone:"email"})),g.current&&(r({success:!0}),o(!1))}catch(i){console.error(i),g.current&&(r({success:!1}),n({submit:i.message}),o(!1))}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var n=e.errors,c=e.handleBlur,p=e.handleChange,g=e.handleSubmit,f=e.isSubmitting,h=e.touched,b=e.values;return r.a.createElement("form",Object.assign({noValidate:!0,onSubmit:g,className:Object(x.a)(d.root,a)},t),m&&r.a.createElement(B.a,null),i&&r.a.createElement(q.a,{severity:"error"},i),s&&r.a.createElement(q.a,{severity:"success"},"Login successful"),r.a.createElement(A.a,{error:Boolean(h.email&&n.email),fullWidth:!0,autoFocus:!0,helperText:h.email&&n.email,label:"Email Address",margin:"normal",name:"email",onBlur:c,onChange:p,type:"email",value:b.email,variant:"outlined"}),r.a.createElement(A.a,{error:Boolean(h.password&&n.password),fullWidth:!0,helperText:h.password&&n.password,label:"Password",margin:"normal",name:"password",onBlur:c,onChange:p,type:"password",value:b.password,variant:"outlined"}),n.submit&&r.a.createElement(l.a,{mt:3},r.a.createElement(C.a,{error:!0},n.submit)),r.a.createElement(l.a,{mt:2},r.a.createElement(l.a,{mt:2,mb:2,style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement(u.a,{component:o.a,to:"/forget-password",variant:"body2",color:"textSecondary"},"Forget password")),r.a.createElement(S.a,{color:"secondary",disabled:f,fullWidth:!0,size:"large",type:"submit",variant:"contained"},"Log In")))}))},H={Auth0:"/static/images/auth0.svg",FirebaseAuth:"/static/images/firebase.svg",JWT:"/static/images/jwt.svg"},J=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,display:"flex",flexDirection:"column",minHeight:"100vh"},banner:{backgroundColor:e.palette.background.paper,paddingBottom:e.spacing(2),paddingTop:e.spacing(2),borderBottom:"1px solid ".concat(e.palette.divider)},bannerChip:{marginRight:e.spacing(2)},methodIcon:{height:30,marginLeft:e.spacing(2),marginRight:e.spacing(2)},cardContainer:{paddingBottom:80,paddingTop:80},cardContent:{padding:e.spacing(4),display:"flex",flexDirection:"column",minHeight:400},currentMethodIcon:{height:40,"& > img":{width:"auto",maxHeight:"100%"}}}}));a.default=function(){var e=J(),a=Object(v.a)().method;return r.a.createElement(h.a,{className:e.root,title:"Login"},r.a.createElement("div",{className:e.banner},r.a.createElement(i.a,{maxWidth:"md"},r.a.createElement(l.a,{alignItems:"center",display:"flex",justifyContent:"center"},r.a.createElement(s.a,{color:"secondary",label:"NEW",size:"small",className:e.bannerChip}),r.a.createElement(l.a,{alignItems:"center",display:"flex"},r.a.createElement(m.a,{color:"textPrimary",variant:"h6"},"Visit our"," ",r.a.createElement(u.a,{component:o.a,to:"/docs"},"docs")," ","and find out how to switch between"),r.a.createElement(d.a,{title:"Auth0"},r.a.createElement("img",{alt:"Auth0",className:e.methodIcon,src:H.Auth0})),r.a.createElement(d.a,{title:"Firebase"},r.a.createElement("img",{alt:"Firebase",className:e.methodIcon,src:H.FirebaseAuth})),r.a.createElement(d.a,{title:"JSON Web Token"},r.a.createElement("img",{alt:"JWT",className:e.methodIcon,src:H.JWT})))))),r.a.createElement(i.a,{className:e.cardContainer,maxWidth:"sm"},r.a.createElement(l.a,{mb:8,display:"flex",justifyContent:"center"},r.a.createElement(o.a,{to:"/"},r.a.createElement(b.a,null))),r.a.createElement(p.a,null,r.a.createElement(g.a,{className:e.cardContent},r.a.createElement(l.a,{alignItems:"center",display:"flex",justifyContent:"space-between",mb:3},r.a.createElement("div",null,r.a.createElement(m.a,{color:"textPrimary",gutterBottom:!0,variant:"h2"},"Sign in"),r.a.createElement(m.a,{variant:"body2",color:"textSecondary"},"Sign in on the internal platform")),r.a.createElement("div",{className:e.currentMethodIcon},r.a.createElement("img",{alt:"Auth method",src:H[a]}))),r.a.createElement(l.a,{flexGrow:1,mt:3},"Auth0"===a&&r.a.createElement(W,null),"FirebaseAuth"===a&&r.a.createElement(T,null),"JWT"===a&&r.a.createElement(F,null)),r.a.createElement(l.a,{my:3},r.a.createElement(f.a,null)),r.a.createElement(u.a,{component:o.a,to:"/register",variant:"body2",color:"textSecondary"},"Create new account")))))}}}]);
//# sourceMappingURL=12.0e8bf3c0.chunk.js.map