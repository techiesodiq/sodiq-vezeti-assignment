(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[21],{1153:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1161:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1198:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"GetApp");a.default=c},1211:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"}),"ArchiveOutlined");a.default=c},1229:function(e,a,t){"use strict";var n=t(0),r=t(126);a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1230:function(e,a,t){"use strict";var n=t(0),r=t(126);a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1233:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");a.default=c},1309:function(e,a,t){"use strict";a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,n=a<0?0:a,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(t));return"".concat(parseFloat((e/Math.pow(t,c)).toFixed(n))," ").concat(r[c])}},1328:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(20),l=t(0),o=(t(2),t(3)),i=t(7),s=t(10),m=t(603),u=t(1060),p=t(1061),d=t(51),v=t(249),f={enter:d.b.enteringScreen,exit:d.b.leavingScreen},b=l.forwardRef((function(e,a){var t=e.BackdropProps,c=e.children,i=e.classes,d=e.className,b=e.disableBackdropClick,g=void 0!==b&&b,h=e.disableEscapeKeyDown,E=void 0!==h&&h,y=e.fullScreen,j=void 0!==y&&y,O=e.fullWidth,x=void 0!==O&&O,w=e.maxWidth,N=void 0===w?"sm":w,k=e.onBackdropClick,P=e.onClose,S=e.onEnter,C=e.onEntered,M=e.onEntering,z=e.onEscapeKeyDown,B=e.onExit,W=e.onExited,A=e.onExiting,T=e.open,I=e.PaperComponent,D=void 0===I?v.a:I,L=e.PaperProps,H=void 0===L?{}:L,_=e.scroll,R=void 0===_?"paper":_,F=e.TransitionComponent,V=void 0===F?p.a:F,Y=e.transitionDuration,G=void 0===Y?f:Y,K=e.TransitionProps,$=e["aria-describedby"],q=e["aria-labelledby"],U=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),X=l.useRef();return l.createElement(m.a,Object(n.a)({className:Object(o.a)(i.root,d),BackdropComponent:u.a,BackdropProps:Object(n.a)({transitionDuration:G},t),closeAfterTransition:!0,disableBackdropClick:g,disableEscapeKeyDown:E,onEscapeKeyDown:z,onClose:P,open:T,ref:a},U),l.createElement(V,Object(n.a)({appear:!0,in:T,timeout:G,onEnter:S,onEntering:M,onEntered:C,onExit:B,onExiting:A,onExited:W,role:"none presentation"},K),l.createElement("div",{className:Object(o.a)(i.container,i["scroll".concat(Object(s.a)(R))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===X.current&&(X.current=null,k&&k(e),!g&&P&&P(e,"backdropClick"))},onMouseDown:function(e){X.current=e.target}},l.createElement(D,Object(n.a)({elevation:24,role:"dialog","aria-describedby":$,"aria-labelledby":q},H,{className:Object(o.a)(i.paper,i["paperScroll".concat(Object(s.a)(R))],i["paperWidth".concat(Object(s.a)(String(N)))],H.className,j&&i.paperFullScreen,x&&i.paperFullWidth)}),c))))}));a.a=Object(i.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(c.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(c.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(c.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(c.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(c.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(b)},1393:function(e,a,t){"use strict";var n=t(55),r=t(42),c=t(29),l=t(28),o=t(0),i=t.n(o),s=t(3),m=t(1571),u=t(191),p=t.n(u),d=t(600),v=t(125),f=t(1072),b=t(1091),g=t(1058),h=t(1057),E=t(1246),y=t(1119),j=t(1117),O=t(1065),x=t(1092),w=t(1202),N=t.n(w),k=t(1165),P=t.n(k),S=t(1309),C=Object(d.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));a.a=function(e){var a,t=e.className,u=Object(l.a)(e,["className"]),d=C(),w=Object(o.useState)([]),k=Object(c.a)(w,2),M=k[0],z=k[1],B=Object(o.useCallback)((function(e){z((function(a){return Object(r.a)(a).concat(e)}))}),[]),W=Object(m.a)({onDrop:B}),A=W.getRootProps,T=W.getInputProps,I=W.isDragActive;return i.a.createElement("div",Object.assign({className:Object(s.a)(d.root,t)},u),i.a.createElement("div",Object.assign({className:Object(s.a)((a={},Object(n.a)(a,d.dropZone,!0),Object(n.a)(a,d.dragActive,I),a))},A()),i.a.createElement("input",T()),i.a.createElement("div",null,i.a.createElement("img",{alt:"Select file",className:d.image,src:"/static/images/undraw_add_file2_gvbb.svg"})),i.a.createElement("div",null,i.a.createElement(v.a,{gutterBottom:!0,variant:"h3"},"Select files"),i.a.createElement(f.a,{mt:2},i.a.createElement(v.a,{color:"textPrimary",variant:"body1"},"Drop files here or click"," ",i.a.createElement(b.a,{underline:"always"},"browse")," ","thorough your machine")))),M.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{options:{suppressScrollX:!0}},i.a.createElement(g.a,{className:d.list},M.map((function(e,a){return i.a.createElement(h.a,{divider:a<M.length-1,key:a},i.a.createElement(E.a,null,i.a.createElement(N.a,null)),i.a.createElement(y.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:Object(S.a)(e.size)}),i.a.createElement(j.a,{title:"More options"},i.a.createElement(O.a,{edge:"end"},i.a.createElement(P.a,null))))})))),i.a.createElement("div",{className:d.actions},i.a.createElement(x.a,{onClick:function(){z([])},size:"small"},"Remove all"),i.a.createElement(x.a,{color:"secondary",size:"small",variant:"contained"},"Upload files"))))}},1413:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(2),t(3)),o=t(7),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(l.a)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(i)},1490:function(e,a){},1589:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t.n(c);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,c=e.size,l=void 0===c?24:c,s=i(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),r.a.createElement("polygon",{points:"22 2 15 22 11 13 2 9 22 2"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Send",a.a=s},2066:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(2),l=t.n(c);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,c=e.size,l=void 0===c?24:c,s=i(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))}));s.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},s.displayName="Check",a.a=s},2074:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"}),"PersonAddOutlined");a.default=c},2075:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"}),"DashboardOutlined");a.default=c},2076:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"}),"InsertDriveFileOutlined");a.default=c},2077:function(e,a,t){"use strict";var n=t(190);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=c},2137:function(e,a,t){"use strict";t.r(a);var n=t(8),r=t.n(n),c=t(12),l=t(29),o=t(0),i=t.n(o),s=t(600),m=t(1135),u=t(1072),p=t(2154),d=t(2100),v=t(1112),f=t(19),b=t(1153),g=t(332),h=t(233);var E=t(28),y=t(4),j=t.n(y),O=t(3),x=t(125),w=t(21),N=t(11),k=t(1146),P=t(1167),S=t(1091),C=t(1198),M=t.n(C),z=t(2074),B=t.n(z),W=t(1233),A=t.n(W),T=t(2075),I=t.n(T),D={upload_file:{icon:M.a,className:"avatarBlue"},join_team:{icon:B.a,className:"avatarOrange"},price_change:{icon:A.a,className:"avatarGreen"},contest_created:{icon:I.a,className:"avatarIndigo"}},L=Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center"},card:{marginLeft:e.spacing(2),flexGrow:1,display:"flex",padding:e.spacing(2),alignItems:"center"},date:{marginLeft:"auto",flexShrink:0},avatar:{color:N.a.common.white},avatarBlue:{backgroundColor:N.a.blue[500]},avatarGreen:{backgroundColor:N.a.green[500]},avatarOrange:{backgroundColor:N.a.orange[500]},avatarIndigo:{backgroundColor:N.a.indigo[500]}}})),H=function(e){var a=e.activity,t=e.className,n=Object(E.a)(e,["activity","className"]),r=L(),c=D[a.type];return i.a.createElement("div",Object.assign({className:Object(O.a)(r.root,t)},n),i.a.createElement(k.a,{className:Object(O.a)(r.avatar,r[c.className])},i.a.createElement(c.icon,null)),i.a.createElement(P.a,{className:r.card},i.a.createElement(x.a,{variant:"body1",color:"textPrimary"},i.a.createElement(S.a,{color:"textPrimary",component:w.a,to:"#",variant:"h6"},a.subject)," ",a.description),i.a.createElement(x.a,{className:r.date,variant:"caption"},j()(a.createdAt).fromNow())))},_=Object(s.a)((function(e){return{root:{},title:{marginBottom:e.spacing(3)},group:{"& + &":{marginTop:e.spacing(4)}},activity:{position:"relative","& + &":{marginTop:e.spacing(3),"&:before":{position:"absolute",content:'" "',height:20,width:1,top:-20,left:20,backgroundColor:e.palette.divider}}}}})),R=function(e){var a,t=e.activities,n=e.className,r=Object(E.a)(e,["activities","className"]),c=_(),l=[],o=[],s=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(h.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,r=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}(t);try{for(s.s();!(a=s.n()).done;){var m=a.value;j()(m.createdAt).isSame(j()(),"day")?l.push(m):o.push(m)}}catch(u){s.e(u)}finally{s.f()}return i.a.createElement("div",Object.assign({className:Object(O.a)(c.root,n)},r),i.a.createElement(x.a,{className:c.title,variant:"h3",color:"textPrimary"},"Today"),i.a.createElement("div",{className:c.group},l.map((function(e){return i.a.createElement(H,{activity:e,className:c.activity,key:e.id})}))),i.a.createElement("div",{className:c.group},i.a.createElement(x.a,{className:c.title,variant:"h3",color:"textPrimary"},"Last week"),o.map((function(e){return i.a.createElement(H,{activity:e,className:c.activity,key:e.id})}))))},F=t(1136),V=t(1467),Y=t(1172),G=t(1145),K=Object(s.a)((function(e){return{root:{},media:{height:125},content:{paddingTop:0},avatar:{height:64,width:64},chip:{margin:e.spacing(.5)}}})),$=function(e){var a=e.className,t=e.applicant,n=Object(E.a)(e,["className","applicant"]),r=K();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(V.a,{className:r.media,image:t.cover}),i.a.createElement(Y.a,{className:r.content},i.a.createElement(u.a,{mt:-4,mb:2,display:"flex",justifyContent:"center"},i.a.createElement(k.a,{alt:"Applicant",className:r.avatar,component:w.a,src:t.avatar,to:"#"})),i.a.createElement(S.a,{align:"center",color:"textPrimary",component:w.a,display:"block",to:"#",underline:"none",variant:"h6"},t.name),i.a.createElement(x.a,{align:"center",variant:"body2",color:"textSecondary"},t.commonConnections," ","contacts in common"),i.a.createElement(u.a,{my:2},i.a.createElement(v.a,null)),t.labels.map((function(e){return i.a.createElement(G.a,{key:e,className:r.chip,label:e,variant:"outlined"})}))))},q=Object(s.a)((function(){return{root:{}}})),U=function(e){var a=e.className,t=e.applicants,n=Object(E.a)(e,["className","applicants"]),r=q();return i.a.createElement(F.a,Object.assign({className:Object(O.a)(r.root,a),container:!0,spacing:3},n),t.map((function(e){return i.a.createElement(F.a,{item:!0,key:e.id,lg:4,xs:12},i.a.createElement($,{applicant:e}))})))},X=t(113),Z=t(1092),J=t(2066),Q=t(2),ee=t.n(Q);function ae(){return(ae=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function te(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var ne=Object(o.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,c=void 0===r?24:r,l=te(e,["color","size"]);return i.a.createElement("svg",ae({ref:a,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.a.createElement("path",{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}),i.a.createElement("line",{x1:"12",y1:"9",x2:"12",y2:"13"}),i.a.createElement("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"}))}));ne.propTypes={color:ee.a.string,size:ee.a.oneOfType([ee.a.string,ee.a.number])},ne.displayName="AlertTriangle";var re=ne,ce=t(1103),le=t(1099),oe=t(1589),ie=t(131),se=t(1328),me=t(1125),ue=t(1161),pe=Object(s.a)((function(e){return{root:{padding:e.spacing(3)},helperText:{textAlign:"right",marginRight:0}}})),de=function(e){var a=e.author,t=e.className,n=e.onApply,r=e.onClose,c=e.open,s=Object(E.a)(e,["author","className","onApply","onClose","open"]),m=pe(),p=Object(o.useState)(""),d=Object(l.a)(p,2),v=d[0],f=d[1],b=Object(ie.b)().enqueueSnackbar;return i.a.createElement(se.a,{maxWidth:"lg",onClose:r,open:c},i.a.createElement("div",Object.assign({className:Object(O.a)(m.root,t)},s),i.a.createElement(x.a,{align:"center",gutterBottom:!0,variant:"h3",color:"textPrimary"},"The project requires an introduction"),i.a.createElement(x.a,{align:"center",variant:"subtitle2",color:"textSecondary"},"Write down a short note with your application regarding why you think you'd be a good fit for this position."),i.a.createElement(u.a,{mt:3},i.a.createElement(me.a,{autoFocus:!0,FormHelperTextProps:{classes:{root:m.helperText}},fullWidth:!0,helperText:"".concat(200-v.length," characters left"),label:"Short Note",multiline:!0,onChange:function(e){e.persist(),f(e.target.value)},placeholder:"What excites you about this project?",rows:5,value:v,variant:"outlined"}),i.a.createElement(u.a,{mt:6,display:"flex",alignItems:"center"},i.a.createElement(k.a,{alt:"Author",src:a.avatar},Object(ue.a)(a.name)),i.a.createElement(u.a,{ml:2},i.a.createElement(x.a,{variant:"h3",color:"textPrimary"},a.name),i.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"})))),i.a.createElement(u.a,{mt:3,p:3},i.a.createElement(Z.a,{onClick:function(){b("Request sent",{variant:"success"}),n()},variant:"contained",fullWidth:!0,color:"primary"},"Apply for a role"))))};de.defaultProps={onApply:function(){},onClose:function(){}};var ve=de,fe=Object(s.a)((function(e){return{root:{},badge:{display:"flex",alignItems:"center",margin:e.spacing(2)},badgeIcon:{marginRight:e.spacing(1)},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),be=function(e){var a=e.className,t=e.project,n=Object(E.a)(e,["className","project"]),r=fe(),c=Object(o.useState)(!1),s=Object(l.a)(c,2),m=s[0],p=s[1],d=function(){p(!1)};return i.a.createElement(F.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(O.a)(r.root,a)},n),i.a.createElement(F.a,{item:!0},i.a.createElement(x.a,{variant:"h3",color:"textPrimary"},t.title),i.a.createElement(u.a,{mx:-2,display:"flex",color:"text.secondary",alignItems:"center",flexWrap:"wrap"},i.a.createElement("div",{className:r.badge},i.a.createElement(X.a,{fontSize:"small",className:r.badgeIcon},t.isActive?i.a.createElement(J.a,null):i.a.createElement(re,null)),i.a.createElement(x.a,{variant:"body2",color:"inherit",component:"span"},t.isActive?"Active":"Inactive")),i.a.createElement("div",{className:r.badge},i.a.createElement(X.a,{fontSize:"small",className:r.badgeIcon},i.a.createElement(ce.a,null)),i.a.createElement(x.a,{variant:"body2",color:"inherit",component:"span"},"Deadline ".concat(j()(t.endDate).fromNow()))))),i.a.createElement(F.a,{item:!0},i.a.createElement(Z.a,{className:r.action,startIcon:i.a.createElement(X.a,{fontSize:"small"},i.a.createElement(le.a,null))},"Share"),i.a.createElement(Z.a,{className:r.action,onClick:function(){p(!0)},variant:"contained",color:"secondary",startIcon:i.a.createElement(X.a,{fontSize:"small"},i.a.createElement(oe.a,null))},"Apply for a role"),i.a.createElement(ve,{author:t.author,onApply:d,onClose:d,open:m})))},ge=t(1159),he=t.n(ge),Ee=t(1206),ye=t(1058),je=t(1057),Oe=Object(s.a)((function(e){return{root:{},header:{paddingBottom:0},content:{paddingTop:0},listItem:{padding:e.spacing(2,0),justifyContent:"space-between"}}})),xe=function(e){var a=e.className,t=e.project,n=Object(E.a)(e,["className","project"]),r=Oe();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(Ee.a,{avatar:i.a.createElement(k.a,{alt:"Author",component:w.a,src:t.author.avatar,to:"#"},Object(ue.a)(t.author.name)),className:r.header,disableTypography:!0,subheader:i.a.createElement(S.a,{color:"textPrimary",component:w.a,to:"#",underline:"none",variant:"h6"},t.author.name),title:i.a.createElement(x.a,{display:"block",variant:"overline",color:"textSecondary"},"Contest holder")}),i.a.createElement(Y.a,{className:r.content},i.a.createElement(ye.a,null,i.a.createElement(je.a,{className:r.listItem,disableGutters:!0,divider:!0},i.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"},"Deadline"),i.a.createElement(x.a,{variant:"h6",color:"textSecondary"},j()(t.endDate).format("DD MMM YYYY"))),i.a.createElement(je.a,{className:r.listItem,disableGutters:!0,divider:!0},i.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"},"Budget"),i.a.createElement(x.a,{variant:"h6",color:"textSecondary"},he()(t.budget).format("".concat(t.currency,"0,0.00")))),i.a.createElement(je.a,{className:r.listItem,disableGutters:!0,divider:!0},i.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"},"Last Update"),i.a.createElement(x.a,{variant:"h6",color:"textSecondary"},j()(t.updatedAt).format("DD MMM YYYY"))))))},we=t(1471),Ne=t.n(we),ke=Object(s.a)((function(e){return{root:{},markdown:{fontFamily:e.typography.fontFamily,"& p":{marginBottom:e.spacing(2)}}}})),Pe=function(e){var a=e.className,t=e.project,n=Object(E.a)(e,["className","project"]),r=ke();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(Y.a,null,i.a.createElement(F.a,{container:!0,spacing:3},i.a.createElement(F.a,{item:!0,xs:12,md:6},i.a.createElement(x.a,{variant:"subtitle2",color:"textSecondary"},"Project Name"),i.a.createElement(x.a,{variant:"h6",color:"textPrimary"},t.title),i.a.createElement(u.a,{mt:3},i.a.createElement(x.a,{variant:"subtitle2",color:"textSecondary"},"Tags"),i.a.createElement(u.a,{mt:1},t.tags.map((function(e){return i.a.createElement(G.a,{key:e,variant:"outlined",label:e})})))))),i.a.createElement(u.a,{mt:3},i.a.createElement(x.a,{variant:"subtitle2",color:"textSecondary"},"Description"),i.a.createElement(Ne.a,{source:t.description,className:r.markdown}))))},Se=t(1118),Ce=t(1119),Me=t(1413),ze=Object(s.a)((function(){return{root:{},header:{paddingBottom:0},content:{paddingTop:0}}})),Be=function(e){var a=e.className,t=e.members,n=Object(E.a)(e,["className","members"]),r=ze();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(Ee.a,{className:r.header,title:"Project members",titleTypographyProps:{variant:"overline"}}),i.a.createElement(Y.a,{className:r.content},i.a.createElement(ye.a,null,t.map((function(e){return i.a.createElement(je.a,{disableGutters:!0,key:e.id},i.a.createElement(Se.a,null,i.a.createElement(k.a,{alt:"Author",src:e.avatar},Object(ue.a)(e.name))),i.a.createElement(Ce.a,{primary:e.name,primaryTypographyProps:{variant:"h6"},secondary:e.bio}))})))),i.a.createElement(v.a,null),i.a.createElement(Me.a,null,i.a.createElement(Z.a,{fullWidth:!0},"Manage members")))},We=t(1393),Ae=t(1117),Te=t(1065),Ie=t(591),De=t(1116),Le=t(1246),He=t(2076),_e=t.n(He),Re=t(1165),Fe=t.n(Re),Ve=t(1495),Ye=t.n(Ve),Ge=t(1211),Ke=t.n(Ge),$e=t(2077),qe=t.n($e),Ue=t(1309),Xe=Object(s.a)((function(e){return{root:{},media:{height:140},placeholder:{height:140,backgroundColor:N.a.blueGrey[50],display:"flex",alignItems:"center",justifyContent:"center"},insertDriveFileIcon:{height:e.spacing(6),width:e.spacing(6),fontSize:e.spacing(6)},content:{display:"flex",justifyContent:"space-between"},getAppIcon:{marignRight:e.spacing(1)},menu:{width:250,maxWidth:"100%"}}})),Ze=function(e){var a=e.className,t=e.file,n=Object(E.a)(e,["className","file"]),r=Xe(),c=Object(o.useRef)(null),s=Object(o.useState)(!1),m=Object(l.a)(s,2),u=m[0],p=m[1];return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),t.mimeType.includes("image/")?i.a.createElement(V.a,{className:r.media,image:t.url}):i.a.createElement("div",{className:r.placeholder},i.a.createElement(_e.a,{className:r.insertDriveFileIcon})),i.a.createElement(Y.a,{className:r.content},i.a.createElement("div",null,i.a.createElement(x.a,{variant:"h5",color:"textPrimary"},t.name),i.a.createElement(x.a,{variant:"subtitle2",color:"textPrimary"},Object(Ue.a)(t.size))),i.a.createElement("div",null,i.a.createElement(Ae.a,{title:"More options"},i.a.createElement(Te.a,{edge:"end",onClick:function(){p(!0)},ref:c,size:"small"},i.a.createElement(Fe.a,null))))),i.a.createElement(v.a,null),i.a.createElement(Me.a,null,i.a.createElement(Z.a,{fullWidth:!0},i.a.createElement(M.a,{className:r.getAppIcon}),"Download")),i.a.createElement(Ie.a,{anchorEl:c.current,anchorOrigin:{vertical:"top",horizontal:"left"},classes:{paper:r.menu},onClose:function(){p(!1)},elevation:1,open:u,transformOrigin:{vertical:"top",horizontal:"left"}},i.a.createElement(De.a,{divider:!0},i.a.createElement(Le.a,null,i.a.createElement(qe.a,null)),i.a.createElement(Ce.a,{primary:"Rename"})),i.a.createElement(De.a,{divider:!0},i.a.createElement(Le.a,null,i.a.createElement(Ye.a,null)),i.a.createElement(Ce.a,{primary:"Delete"})),i.a.createElement(De.a,null,i.a.createElement(Le.a,null,i.a.createElement(Ke.a,null)),i.a.createElement(Ce.a,{primary:"Archive"}))))},Je=Object(s.a)((function(){return{root:{}}})),Qe=function(e){var a=e.className,t=e.files,n=Object(E.a)(e,["className","files"]),r=Je();return i.a.createElement("div",Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(P.a,null,i.a.createElement(Y.a,null,i.a.createElement(We.a,null))),i.a.createElement(u.a,{mt:3},i.a.createElement(F.a,{container:!0,spacing:3},t.map((function(e){return i.a.createElement(F.a,{item:!0,key:e.id,lg:4,md:4,sm:6,xs:12},i.a.createElement(Ze,{file:e}))})))))},ea=Object(s.a)((function(){return{root:{}}})),aa=function(e){var a=e.className,t=e.project,n=Object(E.a)(e,["className","project"]),r=ea();return i.a.createElement(F.a,Object.assign({className:Object(O.a)(r.root,a),container:!0,spacing:3},n),i.a.createElement(F.a,{item:!0,lg:8,xl:9,xs:12},i.a.createElement(Pe,{project:t}),i.a.createElement(u.a,{mt:3},i.a.createElement(Qe,{files:t.files}))),i.a.createElement(F.a,{item:!0,lg:4,xl:3,xs:12},i.a.createElement(u.a,{mb:3},i.a.createElement(xe,{project:t})),i.a.createElement(Be,{members:t.members})))},ta=t(2175),na=Object(s.a)((function(e){return{root:{},rating:{marginLeft:e.spacing(2),fontWeight:e.typography.fontWeightBold}}})),ra=function(e){var a=e.className,t=e.rating,n=e.reviewsCount,r=Object(E.a)(e,["className","rating","reviewsCount"]),c=na();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(c.root,a)},r),i.a.createElement(Y.a,null,i.a.createElement(F.a,{alignItems:"center",container:!0,spacing:3},i.a.createElement(F.a,{item:!0},i.a.createElement(x.a,{variant:"h5",color:"textPrimary"},"Overall Reviews")),i.a.createElement(F.a,{item:!0},i.a.createElement(u.a,{display:"flex",alignItems:"center"},i.a.createElement(ta.a,{value:t}),i.a.createElement(x.a,{className:c.rating,variant:"h6",color:"textPrimary"},t.toFixed(1)))),i.a.createElement(F.a,{item:!0},i.a.createElement(x.a,{color:"textSecondary",variant:"body2"},n," ","reviews in total")))))},ca=Object(s.a)((function(e){return{root:{},value:{marginLeft:e.spacing(1),fontWeight:e.typography.fontWeightBold}}})),la=function(e){var a=e.className,t=e.review,n=Object(E.a)(e,["className","review"]),r=ca();return i.a.createElement(P.a,Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(Ee.a,{avatar:i.a.createElement(k.a,{alt:"Reviewer",src:t.author.avatar},Object(ue.a)(t.author.name)),disableTypography:!0,subheader:i.a.createElement(u.a,{flexWrap:"wrap",display:"flex",alignItems:"center"},i.a.createElement(u.a,{display:"flex",alignItems:"center",mr:1},i.a.createElement(ta.a,{readOnly:!0,value:t.value}),i.a.createElement(x.a,{className:r.value,variant:"h6"},t.value)),i.a.createElement(x.a,{variant:"body2",color:"textSecondary"},"| For"," ",i.a.createElement(S.a,{color:"textPrimary",variant:"h6"},"Low Budget")," ","|"," ",j()(t.createdAt).fromNow())),title:i.a.createElement(S.a,{color:"textPrimary",component:w.a,to:"#",variant:"h5"},t.author.name)}),i.a.createElement(u.a,{pb:2,px:3},i.a.createElement(x.a,{variant:"body2",color:"textSecondary"},t.comment)))},oa=Object(s.a)((function(e){return{root:{},review:{marginTop:e.spacing(2)}}})),ia=function(e){var a=e.className,t=e.reviews,n=Object(E.a)(e,["className","reviews"]),r=oa(),c=t.reduce((function(e,a){return e+a.value}),0)/t.length;return i.a.createElement("div",Object.assign({className:Object(O.a)(r.root,a)},n),i.a.createElement(ra,{rating:c,reviewsCount:t.length}),t.map((function(e){return i.a.createElement(la,{className:r.review,key:e.id,review:e})})))},sa=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=sa(),a=Object(b.a)(),t=Object(o.useState)("overview"),n=Object(l.a)(t,2),s=n[0],h=n[1],E=Object(o.useState)(null),y=Object(l.a)(E,2),j=y[0],O=y[1],x=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("/api/projects/projects/1");case 3:t=e.sent,a.current&&O(t.data.project),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);return Object(o.useEffect)((function(){x()}),[x]),j?i.a.createElement(g.a,{className:e.root,title:"Project Details"},i.a.createElement(m.a,{maxWidth:"lg"},i.a.createElement(be,{project:j}),i.a.createElement(u.a,{mt:3},i.a.createElement(p.a,{onChange:function(e,a){h(a)},scrollButtons:"auto",textColor:"secondary",value:s,variant:"scrollable"},[{value:"overview",label:"Overview"},{value:"reviews",label:"Reviews"},{value:"activity",label:"Activity"},{value:"applicants",label:"Applicants"}].map((function(e){return i.a.createElement(d.a,{key:e.value,label:e.label,value:e.value})})))),i.a.createElement(v.a,null),i.a.createElement(u.a,{mt:3},"overview"===s&&i.a.createElement(aa,{project:j}),"reviews"===s&&i.a.createElement(ia,{reviews:j.reviews}),"activity"===s&&i.a.createElement(R,{activities:j.activities}),"applicants"===s&&i.a.createElement(U,{applicants:j.applicants})))):null}}}]);
//# sourceMappingURL=21.164dbf1b.chunk.js.map