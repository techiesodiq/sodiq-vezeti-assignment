(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[31],{1159:function(e,a,t){"use strict";var n=t(0);a.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1167:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1170:function(e,a,t){"use strict";var n=t(56),r=t(30),c=t(0),l=t.n(c),o=t(3),s=t(610),i=t(15),m=Object(s.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(i.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(i.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(i.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(i.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(i.c)(e.palette.warning.main,.08)}}}));a.a=function(e){var a=e.className,t=void 0===a?"":a,c=e.color,s=void 0===c?"secondary":c,i=e.children,u=(e.style,Object(r.a)(e,["className","color","children","style"])),d=m();return l.a.createElement("span",Object.assign({className:Object(o.a)(d.root,Object(n.a)({},d[s],s),t)},u),i)}},1178:function(e,a,t){"use strict";var n=t(28),r=t(0),c=t.n(r),l=t(610),o=t(1123),s=t(1071),i=t(601),m=t(1122),u=t(1251),d=t(1125),p=t(1172),f=t.n(p),g=t(1204),b=t.n(g),E=t(1208),h=t.n(E),v=t(1239),y=t.n(v),j=t(1217),O=t.n(j),x=Object(l.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(r.memo)((function(e){var a=x(),t=Object(r.useRef)(null),l=Object(r.useState)(!1),p=Object(n.a)(l,2),g=p[0],E=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(s.a,Object.assign({onClick:function(){E(!0)},ref:t},e),c.a.createElement(f.a,{fontSize:"small"}))),c.a.createElement(i.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){E(!1)},open:g,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(b.a,null)),c.a.createElement(d.a,{primary:"Import"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null)),c.a.createElement(d.a,{primary:"Copy"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(y.a,null)),c.a.createElement(d.a,{primary:"Export"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(O.a,null)),c.a.createElement(d.a,{primary:"Archive"}))))}))},1179:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(2),t(3)),o=t(8),s=c.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.component,i=void 0===s?"div":s,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(i,Object(n.a)({className:Object(l.a)(t.root,o),ref:a},m))}));a.a=Object(o.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},1238:function(e,a,t){"use strict";var n=t(189);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}),"AttachMoney");a.default=c},1420:function(e,a,t){"use strict";var n=t(1),r=t(5),c=t(0),l=(t(2),t(114),t(3)),o=t(8),s=t(1152),i={small:-16,medium:null},m=c.forwardRef((function(e,a){var t=e.children,o=e.classes,m=e.className,u=e.max,d=void 0===u?5:u,p=e.spacing,f=void 0===p?"medium":p,g=Object(r.a)(e,["children","classes","className","max","spacing"]),b=d<2?2:d,E=c.Children.toArray(t).filter((function(e){return c.isValidElement(e)})),h=E.length>b?E.length-b+1:0,v=f&&void 0!==i[f]?i[f]:-f;return c.createElement("div",Object(n.a)({className:Object(l.a)(o.root,m),ref:a},g),E.slice(0,E.length-h).map((function(e,a){return c.cloneElement(e,{className:Object(l.a)(e.props.className,o.avatar),style:Object(n.a)({zIndex:E.length-a,marginLeft:0===a?void 0:v},e.props.style)})})),h?c.createElement(s.a,{className:o.avatar,style:{zIndex:0,marginLeft:v}},"+",h):null)}));a.a=Object(o.a)((function(e){return{root:{display:"flex"},avatar:{border:"2px solid ".concat(e.palette.background.default),marginLeft:-8,"&:first-child":{marginLeft:0}}}}),{name:"MuiAvatarGroup"})(m)},2083:function(e,a,t){"use strict";var n=t(189);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}),"FolderOpenOutlined");a.default=c},2084:function(e,a,t){"use strict";var n=t(189);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(250)).default)(r.default.createElement("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}),"OpenInNew");a.default=c},2145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(610),l=t(1141),o=t(1142),s=t(337),i=t(28),m=t(30),u=t(18),d=t(3),p=t(1185),f=t(1097),g=t(127),b=t(1098),E=t(113),h=t(601),v=t(1122),y=t(1161),j=t.n(y),O=t(1109),x=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],k=Object(c.a)((function(){return{root:{}}})),N=function(e){var a=e.className,t=Object(m.a)(e,["className"]),c=k(),l=Object(n.useRef)(null),s=Object(n.useState)(!1),y=Object(i.a)(s,2),N=y[0],C=y[1],w=Object(n.useState)(x[2].text),S=Object(i.a)(w,2),L=S[0],z=S[1];return r.a.createElement(o.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(d.a)(c.root,a)},t),r.a.createElement(o.a,{item:!0},r.a.createElement(p.a,{separator:r.a.createElement(j.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(f.a,{variant:"body1",color:"inherit",to:"/app",component:u.a},"Dashboard"),r.a.createElement(g.a,{variant:"body1",color:"textPrimary"},"Reports")),r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},"Here's what's happening")),r.a.createElement(o.a,{item:!0},r.a.createElement(b.a,{ref:l,onClick:function(){return C(!0)},startIcon:r.a.createElement(E.a,{fontSize:"small"},r.a.createElement(O.a,null))},L),r.a.createElement(h.a,{anchorEl:l.current,onClose:function(){return C(!1)},open:N,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},x.map((function(e){return r.a.createElement(v.a,{key:e.value,onClick:function(){return z(e.text)}},e.text)})))))},C=t(7),w=t.n(C),S=t(12),L=t(4),z=t.n(L),P=t(1165),T=t.n(P),M=t(190),A=t.n(M),B=t(1173),I=t(1212),W=t(1118),R=t(1078),V=t(1501),D=t(1502),F=t(1503),_=t(1504),Y=t(1123),G=t(2178),H=t(1505),J=t(1152),q=t(20),K=t(1167),Z=t(1159),$=t(1178),U={"html-css":"/static/images/technologies/html.svg","react-js":"/static/images/technologies/react-js.svg","vue-js":"/static/images/technologies/vue-js.svg",angular:"/static/images/technologies/angular.svg",figma:"/static/images/technologies/figma.svg",sketch:"/static/images/technologies/sketch.svg"},Q=Object(c.a)((function(e){return{root:{},technology:{height:30,"& + &":{marginLeft:e.spacing(1)}}}})),X=function(e){var a=e.className,t=Object(m.a)(e,["className"]),c=Q(),l=Object(Z.a)(),o=Object(n.useState)([]),s=Object(i.a)(o,2),p=s[0],f=s[1],g=Object(n.useCallback)(Object(S.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("/api/reports/latest-projects");case 3:a=e.sent,l.current&&f(a.data.projects),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(B.a,Object.assign({className:Object(d.a)(c.root,a)},t),r.a.createElement(I.a,{action:r.a.createElement($.a,null),title:"Latest Projects"}),r.a.createElement(W.a,null),r.a.createElement(A.a,null,r.a.createElement(R.a,{minWidth:900},r.a.createElement(V.a,null,r.a.createElement(D.a,null,r.a.createElement(F.a,null,r.a.createElement(_.a,null,"Title"),r.a.createElement(_.a,null,"Author"),r.a.createElement(_.a,null,"Budget"),r.a.createElement(_.a,null,"Technology"),r.a.createElement(_.a,{align:"right",sortDirection:"desc"},r.a.createElement(Y.a,{enterDelay:300,title:"Sort"},r.a.createElement(G.a,{active:!0,direction:"desc"},"Created"))))),r.a.createElement(H.a,null,p.map((function(e){return r.a.createElement(F.a,{hover:!0,key:e.id},r.a.createElement(_.a,null,e.title),r.a.createElement(_.a,null,r.a.createElement(R.a,{display:"flex",alignItems:"center"},r.a.createElement(J.a,{alt:"Author",src:e.author.avatar},Object(K.a)(e.author.name)),r.a.createElement(R.a,{ml:1},e.author.name))),r.a.createElement(_.a,null,T()(e.budget).format("".concat(e.currency,"0,0.00"))),r.a.createElement(_.a,null,e.technologies.map((function(e){return r.a.createElement("img",{alt:"Tech",key:e,className:c.technology,src:U[e]})}))),r.a.createElement(_.a,{align:"right"},z()(e.createdAt).format("DD MMM, YYYY")))})))))),r.a.createElement(R.a,{p:2,display:"flex",justifyContent:"flex-end"},r.a.createElement(b.a,{component:u.a,size:"small",to:"/app/projects",endIcon:r.a.createElement(j.a,null)},"See all")))},ee=t(2083),ae=t.n(ee),te=t(1170),ne=Object(c.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),re=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=ne(),c=12,l=-10;return r.a.createElement(B.a,Object.assign({className:Object(d.a)(n.root,a)},t),r.a.createElement(R.a,{flexGrow:1},r.a.createElement(g.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"New projects"),r.a.createElement(R.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},c),r.a.createElement(te.a,{className:n.label,color:l>0?"success":"error"},l>0?"+":"",l,"%"))),r.a.createElement(J.a,{className:n.avatar},r.a.createElement(ae.a,null)))},ce=t(1179),le=t(258),oe=t(36),se=t(15),ie=Object(c.a)((function(){return{root:{position:"relative"}}})),me=function(e){var a=e.className,t=e.data,n=e.labels,c=Object(m.a)(e,["className","data","labels"]),l=ie(),o=Object(oe.a)(),s={responsive:!0,maintainAspectRatio:!1,animation:!1,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{padding:20,fontColor:o.palette.text.secondary}}],yAxes:[{gridLines:{borderDash:[2],borderDashOffset:[2],color:o.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:o.palette.divider},ticks:{padding:20,fontColor:o.palette.text.secondary,beginAtZero:!0,min:0,maxTicksLimit:7,callback:function(e){return e>0?"".concat(e,"K"):e}}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.default,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{title:function(){},label:function(e){var a="Income: ".concat(e.yLabel);return e.yLabel>0&&(a+="K"),a}}}};return r.a.createElement("div",Object.assign({className:Object(d.a)(l.root,a)},c),r.a.createElement(le.Line,{data:function(e){var a=e.getContext("2d").createLinearGradient(0,0,0,400);return a.addColorStop(0,Object(se.c)(o.palette.secondary.main,.2)),a.addColorStop(.9,"rgba(255,255,255,0)"),a.addColorStop(1,"rgba(255,255,255,0)"),{datasets:[{data:t,backgroundColor:a,borderColor:o.palette.secondary.main,pointBorderColor:o.palette.background.default,pointBorderWidth:3,pointRadius:6,pointBackgroundColor:o.palette.secondary.main}],labels:n}},options:s}))},ue=Object(c.a)((function(){return{root:{},chart:{height:"100%"}}})),de=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=ue(),c={thisWeek:{data:[],labels:[]},thisMonth:{data:[],labels:[]},thisYear:{data:[10,5,11,20,13,28,18,4,13,12,13,5],labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}};return r.a.createElement(B.a,Object.assign({className:Object(d.a)(n.root,a)},t),r.a.createElement(I.a,{action:r.a.createElement($.a,null),title:"Performance Over Time"}),r.a.createElement(W.a,null),r.a.createElement(ce.a,null,r.a.createElement(A.a,null,r.a.createElement(R.a,{height:375,minWidth:500},r.a.createElement(me,{className:n.chart,data:c.thisYear.data,labels:c.thisYear.labels})))))},pe=t(43),fe=t(1064),ge=t(1063),be=t(1125),Ee=Object(c.a)((function(){return{root:{position:"relative"}}})),he=function(e){var a=e.data,t=e.labels,n=e.className,c=Object(m.a)(e,["data","labels","className"]),l=Ee(),o=Object(oe.a)(),s={datasets:[{backgroundColor:o.palette.secondary.main,data:a,barThickness:12,maxBarThickness:10,barPercentage:.9,categoryPercentage:1}],labels:t},i={responsive:!0,maintainAspectRatio:!1,animation:!1,cornerRadius:20,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{stacked:!1,gridLines:{display:!1,drawBorder:!1},ticks:{display:!1}}],yAxes:[{stacked:!0,gridLines:{display:!1,drawBorder:!1},ticks:{beginAtZero:!0,display:!1}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.default,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{legend:function(){},title:function(){},label:function(e){var a="Views: ".concat(e.yLabel);return a}}}};return r.a.createElement("div",Object.assign({className:Object(d.a)(l.root,n)},c),r.a.createElement(le.Bar,{data:s,options:i}))},ve=Object(c.a)((function(e){return{root:{},current:{marginTop:e.spacing(.5),marginRight:e.spacing(.5)}}})),ye=function(e){var a=e.className,t=Object(m.a)(e,["className"]),c=ve(),l=Object(Z.a)(),o=Object(n.useState)([163,166,161,159,99,163,173,166,167,183,176,172]),s=Object(i.a)(o,2),p=s[0],f=s[1],E=Object(n.useCallback)((function(){l.current&&f((function(e){var a=Object(pe.a)(e);return a.shift(),a.push(0),a})),setTimeout((function(){l.current&&f((function(e){var a,t,n=Object(pe.a)(e),r=(a=100,t=200,a=Math.ceil(a),t=Math.floor(t),Math.floor(Math.random()*(t-a+1))+a);return n.pop(),n.push(r),n}))}),500)}),[l]);Object(n.useEffect)((function(){setInterval((function(){return E()}),2e3)}),[E]);var h=p.map((function(e,a){return a}));return r.a.createElement(B.a,Object.assign({className:Object(d.a)(c.root,a)},t),r.a.createElement(I.a,{action:r.a.createElement(g.a,{color:"inherit",variant:"h3"},0===p[p.length-1]?p[p.length-2]:p[p.length-1]),classes:{action:c.current},subheader:"Page views per second",subheaderTypographyProps:{color:"textSecondary",variant:"body2"},title:"Active users",titleTypographyProps:{color:"textPrimary"}}),r.a.createElement(he,{data:p,labels:h}),r.a.createElement(fe.a,null,[{pathname:"/app/projects",views:"24"},{pathname:"/app/chat",views:"21"},{pathname:"/cart",views:"15"},{pathname:"/cart/checkout",views:"8"}].map((function(e){return r.a.createElement(ge.a,{divider:!0,key:e.pathname},r.a.createElement(be.a,{primary:e.pathname,primaryTypographyProps:{color:"textSecondary",variant:"body2"}}),r.a.createElement(g.a,{color:"inherit"},e.views))}))),r.a.createElement(R.a,{p:2,display:"flex",justifyContent:"flex-end"},r.a.createElement(b.a,{component:u.a,size:"small",to:"#",endIcon:r.a.createElement(j.a,null)},"See all")))},je=t(1238),Oe=t.n(je),xe=Object(c.a)((function(e){return{root:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},avatar:{backgroundColor:e.palette.secondary.contrastText,color:e.palette.secondary.main,height:48,width:48}}})),ke=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=xe(),c="25.50",l="$";return r.a.createElement(B.a,Object.assign({className:Object(d.a)(n.root,a)},t),r.a.createElement(R.a,{flexGrow:1},r.a.createElement(g.a,{color:"inherit",component:"h3",gutterBottom:!0,variant:"overline"},"Roi per customer"),r.a.createElement(R.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(g.a,{color:"inherit",variant:"h3"},l,c))),r.a.createElement(J.a,{className:n.avatar,color:"inherit"},r.a.createElement(Oe.a,null)))},Ne=t(1061),Ce=Object(c.a)((function(e){return{root:{padding:e.spacing(3)},progress:{margin:e.spacing(0,1),flexGrow:1}}})),we=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=Ce(),c=97;return r.a.createElement(B.a,Object.assign({className:Object(d.a)(n.root,a)},t),r.a.createElement(g.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"System Health"),r.a.createElement(R.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},c,"%"),r.a.createElement(Ne.a,{className:n.progress,value:c,color:"secondary",variant:"determinate"})))},Se=t(1071),Le=t(1420),ze=t(2084),Pe=t.n(ze),Te=Object(c.a)((function(e){return{root:{},viewButton:{marginLeft:e.spacing(2)}}})),Me=function(e){var a=e.className,t=e.task,n=Object(m.a)(e,["className","task"]),c=Te(),l="N/A";if(t.deadline){var o=z()(),s=z()(t.deadline);s.isAfter(o)&&s.diff(o,"day")<3&&(l="".concat(s.diff(o,"day")," days remaining"))}return r.a.createElement(ge.a,Object.assign({className:Object(d.a)(c.root,a)},n),r.a.createElement(be.a,{primary:t.title,primaryTypographyProps:{variant:"h6",noWrap:!0},secondary:l}),r.a.createElement(Le.a,{max:3},t.members.map((function(e){return r.a.createElement(Y.a,{key:e.name,title:"View"},r.a.createElement(J.a,{src:e.avatar}))}))),r.a.createElement(Y.a,{title:"View task"},r.a.createElement(Se.a,{className:c.viewButton,edge:"end"},r.a.createElement(Pe.a,{fontSize:"small"}))))},Ae=Object(c.a)((function(){return{root:{}}})),Be=function(e){var a=e.className,t=Object(m.a)(e,["className"]),c=Ae(),l=Object(Z.a)(),o=Object(n.useState)([]),s=Object(i.a)(o,2),u=s[0],p=s[1],f=Object(n.useCallback)(Object(S.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.get("/api/reports/latest-tasks");case 3:a=e.sent,l.current&&p(a.data.tasks),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(n.useEffect)((function(){f()}),[f]),r.a.createElement(B.a,Object.assign({className:Object(d.a)(c.root,a)},t),r.a.createElement(I.a,{action:r.a.createElement($.a,null),title:"Team Tasks"}),r.a.createElement(W.a,null),r.a.createElement(A.a,null,r.a.createElement(R.a,{minWidth:400},r.a.createElement(fe.a,null,u.map((function(e,a){return r.a.createElement(Me,{divider:a<u.length-1,key:e.id,task:e})}))))))},Ie=Object(c.a)((function(e){return{root:{padding:e.spacing(3),display:"flex",alignItems:"center",justifyContent:"space-between"},label:{marginLeft:e.spacing(1)},avatar:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText,height:48,width:48}}})),We=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=Ie(),c="24,000",l="$",o=4;return r.a.createElement(B.a,Object.assign({className:Object(d.a)(n.root,a)},t),r.a.createElement(R.a,{flexGrow:1},r.a.createElement(g.a,{component:"h3",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Todays money"),r.a.createElement(R.a,{display:"flex",alignItems:"center",flexWrap:"wrap"},r.a.createElement(g.a,{variant:"h3",color:"textPrimary"},l,c),r.a.createElement(te.a,{className:n.label,color:o>0?"success":"error"},o>0?"+":"",o,"%"))),r.a.createElement(J.a,{className:n.avatar},r.a.createElement(Oe.a,null)))},Re=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=Re();return r.a.createElement(s.a,{className:e.root,title:"Dashboard"},r.a.createElement(l.a,{maxWidth:!1},r.a.createElement(N,null),r.a.createElement(o.a,{container:!0,spacing:3},r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(We,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(re,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(we,null)),r.a.createElement(o.a,{item:!0,lg:3,sm:6,xs:12},r.a.createElement(ke,null)),r.a.createElement(o.a,{item:!0,lg:3,xs:12},r.a.createElement(ye,null)),r.a.createElement(o.a,{item:!0,lg:9,xs:12},r.a.createElement(de,null)),r.a.createElement(o.a,{item:!0,lg:5,xl:4,xs:12},r.a.createElement(Be,null)),r.a.createElement(o.a,{item:!0,lg:7,xl:8,xs:12},r.a.createElement(X,null)))))}}}]);
//# sourceMappingURL=31.26fb9009.chunk.js.map