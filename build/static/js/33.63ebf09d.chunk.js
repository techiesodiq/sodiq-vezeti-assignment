(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[33],{1153:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1165:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.default=c},1229:function(e,a,t){"use strict";var n=t(0),r=t(126);a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1230:function(e,a,t){"use strict";var n=t(0),r=t(126);a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1395:function(e,a,t){"use strict";var n=t(29),r=t(28),c=t(0),l=t.n(c),o=t(3),i=t(600),s=t(1167),m=t(1172),u=t(1072),d=t(249),p=t(601),f=t(1117),b=t(1065),E=t(1112),v=t(1208),g=t.n(v),y=t(1196),O=t.n(y),h=t(1200),j=t.n(h),x=t(101),k=Object(i.a)((function(e){return{root:{},inputContainer:{flexGrow:1,paddingBottom:e.spacing(.5),paddingLeft:e.spacing(2),paddingRight:e.spacing(2),paddingTop:e.spacing(.5)},divider:{height:24,width:1},fileInput:{display:"none"}}}));a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),i=k(),v=Object(c.useRef)(null),y=Object(c.useState)(""),h=Object(n.a)(y,2),w=h[0],N=h[1],C=Object(x.a)().user,S=function(){v.current.click()};return l.a.createElement(s.a,Object.assign({className:Object(o.a)(i.root,a)},t),l.a.createElement(m.a,null,l.a.createElement(u.a,{display:"flex",alignItems:"center"},l.a.createElement(d.a,{className:i.inputContainer,variant:"outlined"},l.a.createElement(p.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),N(e.target.value)},placeholder:"What's on your mind, ".concat(C.name)})),l.a.createElement(f.a,{title:"Send"},l.a.createElement(b.a,{color:w.length>0?"primary":"default"},l.a.createElement(g.a,null))),l.a.createElement(E.a,{className:i.divider}),l.a.createElement(f.a,{title:"Attach image"},l.a.createElement(b.a,{edge:"end",onClick:S},l.a.createElement(O.a,null))),l.a.createElement(f.a,{title:"Attach file"},l.a.createElement(b.a,{edge:"end",onClick:S},l.a.createElement(j.a,null))),l.a.createElement("input",{className:i.fileInput,ref:v,type:"file"}))))}},1400:function(e,a,t){"use strict";var n=t(29),r=t(28),c=t(0),l=t.n(c),o=t(21),i=t(3),s=t(4),m=t.n(s),u=t(1311),d=t(600),p=t(1167),f=t(1206),b=t(1146),E=t(1072),v=t(125),g=t(1091),y=t(2122),O=t(1467),h=t(1112),j=t(1569),x=t.n(j),k=t(11),w=t(1117),N=t(1065),C=t(1239),S=t.n(C),P=t(1240),z=t.n(P),L=t(1568),I=t.n(L),A=Object(d.a)((function(){return{root:{display:"flex",alignItems:"center"},likedButton:{color:k.a.red[600]}}})),T=function(e){var a=e.className,t=e.post,o=Object(r.a)(e,["className","post"]),s=A(),m=Object(c.useState)(t.isLiked),u=Object(n.a)(m,2),d=u[0],p=u[1],f=Object(c.useState)(t.likes),b=Object(n.a)(f,2),g=b[0],y=b[1];return l.a.createElement("div",Object.assign({className:Object(i.a)(s.root,a)},o),d?l.a.createElement(w.a,{title:"Unlike"},l.a.createElement(N.a,{className:s.likedButton,onClick:function(){p(!1),y((function(e){return e-1}))}},l.a.createElement(S.a,{fontSize:"small"}))):l.a.createElement(w.a,{title:"Like"},l.a.createElement(N.a,{onClick:function(){p(!0),y((function(e){return e+1}))}},l.a.createElement(z.a,{fontSize:"small"}))),l.a.createElement(v.a,{color:"textSecondary",variant:"h6"},g),l.a.createElement(E.a,{flexGrow:1}),l.a.createElement(N.a,null,l.a.createElement(I.a,{fontSize:"small"})))},B=Object(d.a)((function(e){return{root:{display:"flex",marginBottom:e.spacing(2)},bubble:{borderRadius:e.shape.borderRadius}}})),G=function(e){var a=e.className,t=e.comment,n=Object(r.a)(e,["className","comment"]),c=B();return l.a.createElement("div",Object.assign({className:Object(i.a)(c.root,a)},n),l.a.createElement(b.a,{alt:"Person",component:o.a,src:t.author.avatar,to:"#"}),l.a.createElement(E.a,{flexGrow:1,p:2,ml:2,bgcolor:"background.dark",className:c.bubble},l.a.createElement(E.a,{display:"flex",alignItems:"center",mb:1},l.a.createElement(g.a,{color:"textPrimary",component:o.a,to:"#",variant:"h6"},t.author.name),l.a.createElement(E.a,{flexGrow:1}),l.a.createElement(v.a,{color:"textSecondary",variant:"caption"},m()(t.createdAt).fromNow())),l.a.createElement(v.a,{variant:"body1",color:"textPrimary"},t.message)))},R=t(249),M=t(601),W=t(1208),_=t.n(W),J=t(1196),q=t.n(J),U=t(1200),H=t.n(U),K=t(101),V=Object(d.a)((function(e){return{root:{alignItems:"center",display:"flex"},inputContainer:{flexGrow:1,marginLeft:e.spacing(2),paddingBottom:e.spacing(.5),paddingLeft:e.spacing(.5),paddingRight:e.spacing(.5),paddingTop:e.spacing(.5)},divider:{height:24,width:1},fileInput:{display:"none"}}})),D=function(e){var a=e.className,t=Object(r.a)(e,["className"]),o=V(),s=Object(K.a)().user,m=Object(c.useRef)(null),u=Object(c.useState)(""),d=Object(n.a)(u,2),p=d[0],f=d[1],E=function(){m.current.click()};return l.a.createElement("div",Object.assign({className:Object(i.a)(o.root,a)},t),l.a.createElement(b.a,{alt:"Person",src:s.avatar}),l.a.createElement(R.a,{className:o.inputContainer,variant:"outlined"},l.a.createElement(M.a,{disableUnderline:!0,fullWidth:!0,onChange:function(e){e.persist(),f(e.target.value)},placeholder:"Leave a message"})),l.a.createElement(w.a,{title:"Send"},l.a.createElement(N.a,{color:p.length>0?"primary":"default"},l.a.createElement(_.a,null))),l.a.createElement(h.a,{className:o.divider}),l.a.createElement(w.a,{title:"Attach image"},l.a.createElement(N.a,{edge:"end",onClick:E},l.a.createElement(q.a,null))),l.a.createElement(w.a,{title:"Attach file"},l.a.createElement(N.a,{edge:"end",onClick:E},l.a.createElement(H.a,null))),l.a.createElement("input",{className:o.fileInput,ref:m,type:"file"}))},F=Object(d.a)((function(){return{root:{},date:{marginLeft:6},media:{height:500,backgroundPosition:"top"}}}));a.a=function(e){var a=e.className,t=e.post,s=Object(r.a)(e,["className","post"]),d=F(),j=Object(c.useState)(null),k=Object(n.a)(j,2),w=k[0],N=k[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,Object.assign({className:Object(i.a)(d.root,a)},s),l.a.createElement(f.a,{avatar:l.a.createElement(b.a,{alt:"Person",component:o.a,src:t.author.avatar,to:"#"}),disableTypography:!0,subheader:l.a.createElement(E.a,{display:"flex",alignItems:"center"},l.a.createElement(x.a,{fontSize:"small"}),l.a.createElement(v.a,{variant:"caption",color:"textSecondary",className:d.date},m()(t.createdAt).fromNow())),title:l.a.createElement(g.a,{color:"textPrimary",component:o.a,to:"#",variant:"h6"},t.author.name)}),l.a.createElement(E.a,{px:3,pb:2},l.a.createElement(v.a,{variant:"body1",color:"textPrimary"},t.message),t.media&&l.a.createElement(E.a,{mt:2},l.a.createElement(y.a,{onClick:function(){return N(t.media)}},l.a.createElement(O.a,{className:d.media,image:t.media}))),l.a.createElement(E.a,{mt:2},l.a.createElement(T,{post:t})),l.a.createElement(E.a,{my:2},l.a.createElement(h.a,null)),t.comments.map((function(e){return l.a.createElement(G,{comment:e,key:e.id})})),l.a.createElement(E.a,{my:2},l.a.createElement(h.a,null)),l.a.createElement(D,null))),w&&l.a.createElement(u.a,{large:w,onClose:function(){return N(null)}}))}},1416:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t.n(c);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,c=e.size,l=void 0===c?24:c,s=i(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("circle",{cx:"12",cy:"12",r:"1"}),r.a.createElement("circle",{cx:"12",cy:"5",r:"1"}),r.a.createElement("circle",{cx:"12",cy:"19",r:"1"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="MoreVertical",a.a=s},2073:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t.n(c);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,c=e.size,l=void 0===c?24:c,s=i(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Plus",a.a=s},2150:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),c=t(12),l=t(29),o=t(0),i=t.n(o),s=t(600),m=t(1135),u=t(1072),d=t(2154),p=t(2100),f=t(1112),b=t(19),E=t(1153),v=t(332),g=t(28),y=t(55),O=t(21),h=t(3),j=t(11),x=t(1092),k=t(1146),w=t(125),N=t(1142),C=t(1117),S=t(1065),P=t(1196),z=t.n(P),L=t(1165),I=t.n(L),A=Object(s.a)((function(e){var a;return{root:{},cover:{position:"relative",height:460,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center","&:before":{position:"absolute",content:'" "',top:0,left:0,height:"100%",width:"100%",backgroundImage:"linear-gradient(-180deg, rgba(0,0,0,0.00) 58%, rgba(0,0,0,0.32) 100%)"},"&:hover":{"& $changeButton":{visibility:"visible"}}},changeButton:(a={visibility:"hidden",position:"absolute",bottom:e.spacing(3),right:e.spacing(3),backgroundColor:j.a.blueGrey[900],color:e.palette.common.white},Object(y.a)(a,e.breakpoints.down("md"),{top:e.spacing(3),bottom:"auto"}),Object(y.a)(a,"&:hover",{backgroundColor:j.a.blueGrey[900]}),a),avatar:{border:"2px solid ".concat(e.palette.common.white),height:120,width:120,top:-60,left:e.spacing(3),position:"absolute"},action:{marginLeft:e.spacing(1)}}})),T=function(e){var a=e.className,t=e.profile,n=Object(g.a)(e,["className","profile"]),r=A(),c=Object(o.useState)(t.connectedStatus),s=Object(l.a)(c,2),d=s[0],p=s[1],f=function(){p((function(e){return"not_connected"===e?"pending":"not_connected"}))};return i.a.createElement("div",Object.assign({className:Object(h.a)(r.root,a)},n),i.a.createElement("div",{className:r.cover,style:{backgroundImage:"url(".concat(t.cover,")")}},i.a.createElement(x.a,{className:r.changeButton,variant:"contained",startIcon:i.a.createElement(z.a,null)},"Change Cover")),i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(u.a,{position:"relative",mt:1,display:"flex",alignItems:"center"},i.a.createElement(k.a,{alt:"Person",className:r.avatar,src:t.avatar}),i.a.createElement(u.a,{marginLeft:"160px"},i.a.createElement(w.a,{variant:"overline",color:"textSecondary"},t.bio),i.a.createElement(w.a,{variant:"h4",color:"textPrimary"},t.name)),i.a.createElement(u.a,{flexGrow:1}),i.a.createElement(N.a,{smDown:!0},"not_connected"===d&&i.a.createElement(x.a,{onClick:f,size:"small",variant:"outlined",className:r.action},"Connect"),"pending"===d&&i.a.createElement(x.a,{onClick:f,size:"small",variant:"outlined",className:r.action},"Pending"),i.a.createElement(x.a,{color:"secondary",component:O.a,size:"small",to:"/app/chat",variant:"contained",className:r.action},"Send message")),i.a.createElement(C.a,{title:"More options"},i.a.createElement(S.a,{className:r.action},i.a.createElement(I.a,null))))))},B=t(1136),G=t(1395),R=t(1400),M=t(1167),W=t(1206),_=t(1172),J=t(1056),q=t(1058),U=t(1057),H=t(1118),K=t(1119),V=t(1091),D=t(1098),F=t(2073),$=t(2),Q=t.n($);function X(){return(X=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function Y(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var Z=Object(o.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,c=void 0===r?24:r,l=Y(e,["color","size"]);return i.a.createElement("svg",X({ref:a,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),i.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"}))}));Z.propTypes={color:Q.a.string,size:Q.a.oneOfType([Q.a.string,Q.a.number])},Z.displayName="Home";var ee=Z,ae=t(1101),te=Object(s.a)((function(e){return{root:{},jobAvatar:{backgroundColor:e.palette.secondary.main},cityAvatar:{backgroundColor:j.a.red[600]}}})),ne=function(e){var a=e.className,t=e.profile,n=Object(g.a)(e,["className","profile"]),r=te();return i.a.createElement("div",Object.assign({className:Object(h.a)(r.root,a)},n),i.a.createElement(M.a,null,i.a.createElement(W.a,{title:"Profile Progress"}),i.a.createElement(f.a,null),i.a.createElement(_.a,null,i.a.createElement(J.a,{variant:"determinate",value:t.profileProgress}),i.a.createElement(u.a,{mt:2},i.a.createElement(w.a,{variant:"subtitle2",color:"textSecondary"},"50% Set Up Complete")))),i.a.createElement(u.a,{mt:3},i.a.createElement(M.a,null,i.a.createElement(W.a,{title:"About"}),i.a.createElement(f.a,null),i.a.createElement(_.a,null,i.a.createElement(w.a,{variant:"subtitle2",color:"textSecondary"},'"',t.quote,'"'),i.a.createElement(q.a,null,i.a.createElement(U.a,{disableGutters:!0,divider:!0},i.a.createElement(H.a,null,i.a.createElement(k.a,{className:r.jobAvatar},i.a.createElement(D.a,{size:"22"}))),i.a.createElement(K.a,{disableTypography:!0,primary:i.a.createElement(w.a,{variant:"body2",color:"textPrimary"},t.currentJob.title," ","at"," ",i.a.createElement(V.a,{variant:"subtitle2",color:"textPrimary",href:"#"},t.currentJob.company)),secondary:i.a.createElement(w.a,{variant:"caption",color:"textSecondary"},"Past:",t.previousJob.title," ",i.a.createElement(V.a,{variant:"caption",color:"textSecondary",href:"#"},t.previousJob.company))})),i.a.createElement(U.a,{disableGutters:!0,divider:!0},i.a.createElement(H.a,null,i.a.createElement(k.a,{className:r.cityAvatar},i.a.createElement(F.a,{size:"22"}))),i.a.createElement(K.a,{primary:"Add school or collage",primaryTypographyProps:{variant:"body2",color:"textSecondary"}})),i.a.createElement(U.a,{disableGutters:!0,divider:!0},i.a.createElement(H.a,null,i.a.createElement(k.a,{className:r.cityAvatar},i.a.createElement(ee,{size:"22"}))),i.a.createElement(K.a,{disableTypography:!0,primary:i.a.createElement(w.a,{variant:"body2",color:"textPrimary"},"Lives in"," ",i.a.createElement(V.a,{variant:"subtitle2",color:"textPrimary",href:"#"},t.currentCity)),secondary:i.a.createElement(w.a,{variant:"caption",color:"textSecondary"},"Originally from"," ",i.a.createElement(V.a,{variant:"caption",color:"textSecondary",href:"#"},t.originCity))})),i.a.createElement(U.a,{disableGutters:!0,divider:!0},i.a.createElement(H.a,null,i.a.createElement(k.a,{className:r.cityAvatar},i.a.createElement(ae.a,{size:"22"}))),i.a.createElement(K.a,{primary:t.email,primaryTypographyProps:{variant:"body2",color:"textPrimary"}})))))))},re=Object(s.a)((function(){return{root:{}}})),ce=function(e){var a=e.className,t=e.profile,n=Object(g.a)(e,["className","profile"]),s=re(),m=Object(E.a)(),d=Object(o.useState)([]),p=Object(l.a)(d,2),f=p[0],v=p[1],y=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/social/posts");case 3:a=e.sent,m.current&&v(a.data.posts),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[m]);return Object(o.useEffect)((function(){y()}),[y]),i.a.createElement("div",Object.assign({className:Object(h.a)(s.root,a)},n),i.a.createElement(B.a,{container:!0,spacing:3},i.a.createElement(B.a,{item:!0,xs:12,md:6,lg:4},i.a.createElement(ne,{profile:t})),i.a.createElement(B.a,{item:!0,xs:12,md:6,lg:8},i.a.createElement(G.a,null),f.map((function(e){return i.a.createElement(u.a,{mt:3,key:e.id},i.a.createElement(R.a,{post:e}))})))))},le=t(33),oe=t(9),ie=t.n(oe),se=t(131),me=t(113),ue=t(601),de=t(249),pe=t(1123),fe=t(1416),be={connected:"Connected",not_connected:"Connect",pending:"Pending"},Ee=Object(s.a)((function(e){return{root:{},searchInput:{marginLeft:e.spacing(2)},avatar:{height:60,width:60}}})),ve=function(e){var a=e.className,t=Object(g.a)(e,["className"]),n=Ee(),s=Object(E.a)(),m=Object(se.b)().enqueueSnackbar,d=Object(o.useState)([]),p=Object(l.a)(d,2),v=p[0],y=p[1],j=Object(o.useState)(""),N=Object(l.a)(j,2),C=N[0],P=N[1],z=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("/api/social/connections");case 2:a=e.sent,s.current&&y(a.data.connections);case 4:case"end":return e.stop()}}),e)}))),[s]);return Object(o.useEffect)((function(){z()}),[z]),i.a.createElement(M.a,Object.assign({className:Object(h.a)(n.root,a)},t),i.a.createElement(W.a,{title:"Connections"}),i.a.createElement(f.a,null),i.a.createElement(u.a,{py:2,px:3,display:"flex",alignItems:"center"},i.a.createElement(me.a,{fontSize:"small",color:"action"},i.a.createElement(pe.a,null)),i.a.createElement(ue.a,{className:n.searchInput,disableUnderline:!0,value:C,onChange:function(e){return P(e.target.value)},placeholder:"Search connections"})),i.a.createElement(f.a,null),i.a.createElement(u.a,{p:3},i.a.createElement(B.a,{container:!0,spacing:3},v.filter((function(e){return e.name.toLowerCase().includes(C)})).map((function(e){return i.a.createElement(B.a,{item:!0,key:e.id,xs:12,md:6},i.a.createElement(de.a,{variant:"outlined"},i.a.createElement(u.a,{p:2,display:"flex",alignItems:"center"},i.a.createElement(k.a,{alt:"Profile image",className:n.avatar,component:O.a,src:e.avatar,to:"#"}),i.a.createElement(u.a,{flexGrow:1,mx:2},i.a.createElement(V.a,{variant:"h5",color:"textPrimary",component:O.a,to:"#"},e.name),i.a.createElement(w.a,{variant:"body2",color:"textSecondary",gutterBottom:!0},e.commonConnections," ","connections in common"),"rejected"!==e.status&&i.a.createElement(x.a,{variant:"outlined",size:"small",onClick:function(){return a=e.id,void y((function(e){return ie.a.map(e,ie.a.clone).map((function(e){if(e.id===a){var t=Object(le.a)({},e);return t.status="connected"===e.status||"pending"===e.status?"not_connected":"pending","pending"===t.status&&m("Connection request sent",{variant:"success"}),t}return e}))}));var a}},be[e.status])),i.a.createElement(S.a,null,i.a.createElement(me.a,{fontSize:"small"},i.a.createElement(fe.a,null))))))})))))},ge=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%"}}}));a.default=function(){var e=ge(),a=Object(E.a)(),t=Object(o.useState)("timeline"),n=Object(l.a)(t,2),s=n[0],g=n[1],y=Object(o.useState)(null),O=Object(l.a)(y,2),h=O[0],j=O[1],x=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/social/profile");case 3:t=e.sent,a.current&&j(t.data.profile),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);return Object(o.useEffect)((function(){x()}),[x]),h?i.a.createElement(v.a,{className:e.root,title:"Profile"},i.a.createElement(T,{profile:h}),i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(u.a,{mt:3},i.a.createElement(d.a,{onChange:function(e,a){g(a)},scrollButtons:"auto",value:s,textColor:"secondary",variant:"scrollable"},[{value:"timeline",label:"Timeline"},{value:"connections",label:"Connections"}].map((function(e){return i.a.createElement(p.a,{key:e.value,label:e.label,value:e.value})})))),i.a.createElement(f.a,null),i.a.createElement(u.a,{py:3,pb:6},"timeline"===s&&i.a.createElement(ce,{profile:h}),"connections"===s&&i.a.createElement(ve,null)))):null}}}]);
//# sourceMappingURL=33.63ebf09d.chunk.js.map