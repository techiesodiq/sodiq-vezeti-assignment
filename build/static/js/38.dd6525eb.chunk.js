(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[38],{1157:function(e,a,t){"use strict";var r=t(0);a.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1165:function(e,a,t){"use strict";a.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1168:function(e,a,t){"use strict";var r=t(56),n=t(28),c=t(0),l=t.n(c),o=t(3),i=t(607),s=t(15),m=Object(i.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(s.c)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(s.c)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(s.c)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(s.c)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(s.c)(e.palette.warning.main,.08)}}}));a.a=function(e){var a=e.className,t=void 0===a?"":a,c=e.color,i=void 0===c?"secondary":c,s=e.children,u=(e.style,Object(n.a)(e,["className","color","children","style"])),d=m();return l.a.createElement("span",Object.assign({className:Object(o.a)(d.root,Object(r.a)({},d[i],i),t)},u),s)}},1176:function(e,a,t){"use strict";var r=t(29),n=t(0),c=t.n(n),l=t(607),o=t(1121),i=t(1069),s=t(598),m=t(1120),u=t(1249),d=t(1123),p=t(1169),b=t.n(p),E=t(1202),f=t.n(E),g=t(1206),v=t.n(g),y=t(1237),h=t.n(y),j=t(1215),x=t.n(j),O=Object(l.a)((function(){return{menu:{width:256,maxWidth:"100%"}}}));a.a=Object(n.memo)((function(e){var a=O(),t=Object(n.useRef)(null),l=Object(n.useState)(!1),p=Object(r.a)(l,2),E=p[0],g=p[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{title:"More options"},c.a.createElement(i.a,Object.assign({onClick:function(){g(!0)},ref:t},e),c.a.createElement(b.a,{fontSize:"small"}))),c.a.createElement(s.a,{anchorEl:t.current,anchorOrigin:{vertical:"top",horizontal:"left"},onClose:function(){g(!1)},open:E,PaperProps:{className:a.menu},transformOrigin:{vertical:"top",horizontal:"left"}},c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(f.a,null)),c.a.createElement(d.a,{primary:"Import"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(v.a,null)),c.a.createElement(d.a,{primary:"Copy"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(h.a,null)),c.a.createElement(d.a,{primary:"Export"})),c.a.createElement(m.a,null,c.a.createElement(u.a,null,c.a.createElement(x.a,null)),c.a.createElement(d.a,{primary:"Archive"}))))}))},2147:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(607),l=t(1139),o=t(1140),i=t(336),s=t(8),m=t.n(s),u=t(13),d=t(29),p=t(28),b=t(21),E=t(3),f=t(4),g=t.n(f),v=t(1171),y=t(1210),h=t(1116),j=t(1076),x=t(126),O=t(1062),k=t(1061),N=t(1122),C=t(1150),S=t(1123),w=t(1095),P=t(19),W=t(1165),z=t(1157),A=t(1176),B=Object(c.a)((function(e){return{root:{},item:{padding:e.spacing(3),flexGrow:1,"&:first-of-type":{borderRight:"1px solid ".concat(e.palette.divider)}}}})),D=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=B(),l=Object(z.a)(),o=Object(r.useState)([]),i=Object(d.a)(o,2),s=i[0],f=i[1],D=Object(r.useCallback)(Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/reports/customer-activity");case 3:a=e.sent,l.current&&f(a.data.activities),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(r.useEffect)((function(){D()}),[D]),n.a.createElement(v.a,Object.assign({className:Object(E.a)(c.root,a)},t),n.a.createElement(y.a,{title:"Customer Activity",action:n.a.createElement(A.a,null)}),n.a.createElement(h.a,null),n.a.createElement(j.a,{display:"flex"},n.a.createElement("div",{className:c.item},n.a.createElement(x.a,{align:"center",variant:"h3",color:"textPrimary"},"15,245"),n.a.createElement(x.a,{align:"center",component:"h4",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Registered")),n.a.createElement(h.a,null),n.a.createElement("div",{className:c.item},n.a.createElement(x.a,{align:"center",variant:"h3",color:"textPrimary"},"357"),n.a.createElement(x.a,{align:"center",component:"h4",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Online"))),n.a.createElement(h.a,null),n.a.createElement(O.a,{disablePadding:!0},s.map((function(e,a){return n.a.createElement(k.a,{divider:a<s.length-1,key:e.id},n.a.createElement(N.a,null,n.a.createElement(C.a,{alt:"Customer",component:b.a,src:e.customer.avatar,to:"#"},Object(W.a)(e.customer.name))),n.a.createElement(S.a,{disableTypography:!0,primary:n.a.createElement(w.a,{color:"textPrimary",component:b.a,to:"#",underline:"none",variant:"h6"},e.customer.name),secondary:n.a.createElement(x.a,{variant:"body2",color:"textSecondary"},e.description)}),n.a.createElement(x.a,{color:"textSecondary",noWrap:!0,variant:"caption"},g()(e.createdAt).fromNow()))}))))},R=t(34),T=t(257),L=t(36),F=function(e){var a=e.data,t=Object(p.a)(e,["data"]),r=Object(L.a)(),c={datasets:a.datasets.map((function(e){return Object(R.a)(Object(R.a)({},e),{},{borderWidth:8,borderColor:r.palette.background.default,hoverBorderColor:r.palette.background.default})})),labels:a.labels},l={responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:80,legend:{display:!1},layout:{padding:0},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:r.palette.divider,backgroundColor:r.palette.background.dark,titleFontColor:r.palette.text.primary,bodyFontColor:r.palette.text.secondary,footerFontColor:r.palette.text.secondary,callbacks:{label:function(e,a){var t=a.labels[e.index],r=a.datasets[0].data[e.index];return"".concat(t,": ").concat(r,"%")}}}};return n.a.createElement(T.Doughnut,Object.assign({data:c,options:l},t))},M=Object(c.a)((function(e){return{root:{},item:{textAlign:"center",flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(3,2),"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}}})),I=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=M(),l=Object(z.a)(),o=Object(r.useState)(null),i=Object(d.a)(o,2),s=i[0],b=i[1],f=Object(r.useCallback)(Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/reports/earnings");case 3:a=e.sent,l.current&&b(a.data.earnings),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(r.useEffect)((function(){f()}),[f]),s?n.a.createElement(v.a,Object.assign({className:Object(E.a)(c.root,a)},t),n.a.createElement(y.a,{action:n.a.createElement(A.a,null),title:"Earnings Segmentation"}),n.a.createElement(h.a,null),n.a.createElement(j.a,{p:3,position:"relative",minHeight:320},n.a.createElement(F,{data:s})),n.a.createElement(h.a,null),n.a.createElement(j.a,{display:"flex"},s.labels.map((function(e,a){return n.a.createElement("div",{key:e,className:c.item},n.a.createElement(x.a,{variant:"h4",color:"textPrimary"},s.datasets[0].data[a],"%"),n.a.createElement(x.a,{variant:"overline",color:"textSecondary"},e))})))):null},Y=t(190),J=t.n(Y),G=t(15),$=Object(c.a)((function(){return{root:{position:"relative"}}})),_=function(e){var a=e.data,t=e.labels,r=e.className,c=Object(p.a)(e,["data","labels","className"]),l=$(),o=Object(L.a)(),i={datasets:[{label:"This year",backgroundColor:o.palette.secondary.main,data:a.thisYear,barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5},{label:"Last year",backgroundColor:Object(G.c)(o.palette.secondary.main,.25),data:a.lastYear,barThickness:12,maxBarThickness:10,barPercentage:.5,categoryPercentage:.5}],labels:t},s={responsive:!0,maintainAspectRatio:!1,animation:!1,cornerRadius:20,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{padding:20,fontColor:o.palette.text.secondary}}],yAxes:[{gridLines:{borderDash:[2],borderDashOffset:[2],color:o.palette.divider,drawBorder:!1,zeroLineBorderDash:[2],zeroLineBorderDashOffset:[2],zeroLineColor:o.palette.divider},ticks:{padding:20,fontColor:o.palette.text.secondary,beginAtZero:!0,min:0,maxTicksLimit:5,callback:function(e){return e>0?"".concat(e,"K"):e}}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:10,yPadding:20,xPadding:20,borderWidth:1,borderColor:o.palette.divider,backgroundColor:o.palette.background.dark,titleFontColor:o.palette.text.primary,bodyFontColor:o.palette.text.secondary,footerFontColor:o.palette.text.secondary,callbacks:{title:function(){},label:function(e){var a="Sales: ".concat(e.yLabel);return e.yLabel>0&&(a+="K"),a}}}};return n.a.createElement("div",Object.assign({className:Object(E.a)(l.root,r)},c),n.a.createElement(T.Bar,{data:i,options:s}))},q=Object(c.a)((function(){return{root:{},chart:{height:400}}})),H=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=q();return n.a.createElement(v.a,Object.assign({className:Object(E.a)(r.root,a)},t),n.a.createElement(y.a,{action:n.a.createElement(A.a,null),title:"Financial Stats"}),n.a.createElement(h.a,null),n.a.createElement(J.a,null,n.a.createElement(j.a,{minWidth:700,pt:4,pr:2,pl:2},n.a.createElement(_,{className:r.chart,data:{thisYear:[18,16,5,8,3,14,14,16,17,19,18,20],lastYear:[12,11,4,6,2,9,9,10,11,12,13,13]},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}))))},K=t(1183),U=t(1096),Z=t(112),Q=t(598),V=t(1120),X=t(1159),ee=t.n(X),ae=t(1107),te=[{value:"today",text:"Today"},{value:"yesterday",text:"Yesterday"},{value:"last_30_days",text:"Last 30 days"},{value:"last_year",text:"Last year"}],re=Object(c.a)((function(){return{root:{}}})),ne=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=re(),l=Object(r.useRef)(null),i=Object(r.useState)(!1),s=Object(d.a)(i,2),m=s[0],u=s[1],f=Object(r.useState)(te[2].text),g=Object(d.a)(f,2),v=g[0],y=g[1];return n.a.createElement(o.a,Object.assign({className:Object(E.a)(c.root,a),container:!0,justify:"space-between",spacing:3},t),n.a.createElement(o.a,{item:!0},n.a.createElement(K.a,{separator:n.a.createElement(ee.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(w.a,{variant:"body1",color:"inherit",to:"/app",component:b.a},"Dashboard"),n.a.createElement(x.a,{variant:"body1",color:"textPrimary"},"Reports")),n.a.createElement(x.a,{variant:"h3",color:"textPrimary"},"Finance Overview")),n.a.createElement(o.a,{item:!0},n.a.createElement(U.a,{ref:l,onClick:function(){return u(!0)},startIcon:n.a.createElement(Z.a,{fontSize:"small"},n.a.createElement(ae.a,null))},v),n.a.createElement(Q.a,{anchorEl:l.current,onClose:function(){return u(!1)},open:m,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},te.map((function(e){return n.a.createElement(V.a,{key:e.value,onClick:function(){return y(e.text)}},e.text)})))))};ne.defaultProps={};var ce=ne,le=t(1163),oe=t.n(le),ie=t(1499),se=t(1500),me=t(1501),ue=t(1502),de=t(1121),pe=t(2177),be=t(1503),Ee=t(1168),fe={complete:"success",pending:"warning",rejected:"error"},ge=Object(c.a)((function(){return{root:{}}})),ve=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=ge(),l=Object(z.a)(),o=Object(r.useState)([]),i=Object(d.a)(o,2),s=i[0],f=i[1],x=Object(r.useCallback)(Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/reports/latest-orders");case 3:a=e.sent,l.current&&f(a.data.orders),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(r.useEffect)((function(){x()}),[x]),n.a.createElement(v.a,Object.assign({className:Object(E.a)(c.root,a)},t),n.a.createElement(y.a,{action:n.a.createElement(A.a,null),title:"Latest Orders"}),n.a.createElement(h.a,null),n.a.createElement(J.a,null,n.a.createElement(j.a,{minWidth:700},n.a.createElement(ie.a,null,n.a.createElement(se.a,null,n.a.createElement(me.a,null,n.a.createElement(ue.a,{sortDirection:"desc"},n.a.createElement(de.a,{enterDelay:300,title:"Sort"},n.a.createElement(pe.a,{active:!0,direction:"desc"},"Number"))),n.a.createElement(ue.a,null,"Customer"),n.a.createElement(ue.a,null,"Items"),n.a.createElement(ue.a,null,"Total"),n.a.createElement(ue.a,null,"Status"),n.a.createElement(ue.a,{align:"right"},"Date"))),n.a.createElement(be.a,null,s.map((function(e){return n.a.createElement(me.a,{hover:!0,key:e.id},n.a.createElement(ue.a,null,e.number),n.a.createElement(ue.a,null,e.customer.name),n.a.createElement(ue.a,null,e.items),n.a.createElement(ue.a,null,oe()(e.totalAmount).format("".concat(e.currency,"0,0.00"))),n.a.createElement(ue.a,null,n.a.createElement(Ee.a,{color:fe[e.status]},e.status)),n.a.createElement(ue.a,{align:"right"},g()(e.createdAt).format("DD MMM, YYYY hh:mm:ss")))})))))),n.a.createElement(j.a,{p:2,display:"flex",justifyContent:"flex-end"},n.a.createElement(U.a,{component:b.a,size:"small",to:"/app/management/orders",endIcon:n.a.createElement(ee.a,null)},"See all")))},ye=t(11),he=Object(c.a)((function(e){return{root:{width:56,height:56},circle1:{stroke:"dark"===e.palette.type?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",fill:"none",strokeWidth:4},circle2:{stroke:e.palette.secondary.main,fill:"none",strokeWidth:4,animation:"$progress 1s ease-out forwards"},"@keyframes progress":{"0%":{strokeDasharray:"0 100"}}}})),je=function(e){var a=e.className,t=e.value,r=Object(p.a)(e,["className","value"]),c=he();return n.a.createElement("div",Object.assign({className:Object(E.a)(c.root,a)},r),n.a.createElement("svg",{viewBox:"0 0 36 36"},n.a.createElement("path",{className:c.circle1,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"100, 100"}),n.a.createElement("path",{className:c.circle2,d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",strokeDasharray:"".concat(t,", 100")})))},xe=Object(c.a)((function(e){return{root:{},image:{flexShrink:0,height:56,width:56},subscriptions:{fontWeight:e.typography.fontWeightMedium},value:{color:ye.a.green[600],fontWeight:e.typography.fontWeightMedium}}})),Oe=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=xe(),l=Object(z.a)(),o=Object(r.useState)([]),i=Object(d.a)(o,2),s=i[0],f=i[1],g=Object(r.useCallback)(Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/reports/profitable-products");case 3:a=e.sent,l.current&&f(a.data.products),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(r.useEffect)((function(){g()}),[g]),n.a.createElement(v.a,Object.assign({className:Object(E.a)(c.root,a)},t),n.a.createElement(y.a,{action:n.a.createElement(A.a,null),title:"Most Profitable Products"}),n.a.createElement(h.a,null),n.a.createElement(J.a,null,n.a.createElement(j.a,{minWidth:700},n.a.createElement(ie.a,null,n.a.createElement(be.a,null,s.map((function(e){return n.a.createElement(me.a,{hover:!0,key:e.id},n.a.createElement(ue.a,null,n.a.createElement(j.a,{display:"flex",alignItems:"center"},n.a.createElement("img",{alt:"Product",className:c.image,src:e.image}),n.a.createElement(j.a,{ml:2},n.a.createElement(x.a,{variant:"h6",color:"textPrimary"},e.name),n.a.createElement(x.a,{variant:"body2",color:"textSecondary"},n.a.createElement("span",{className:c.subscriptions},oe()(e.subscriptions).format("0,0"))," ","Active")))),n.a.createElement(ue.a,null,n.a.createElement(x.a,{variant:"h6",color:"textPrimary"},"Price"),n.a.createElement(x.a,{noWrap:!0,variant:"body2",color:"textSecondary"},n.a.createElement("span",{className:c.value},oe()(e.price).format("".concat(e.currency,"0,0.00")))," ","monthly")),n.a.createElement(ue.a,null,n.a.createElement(j.a,{display:"flex",alignItems:"center",justifyContent:"flex-end"},n.a.createElement(j.a,{mr:2},n.a.createElement(x.a,{align:"right",variant:"h6",color:"textPrimary"},e.conversionRate,"%"),n.a.createElement(x.a,{variant:"body2",color:"textSecondary"},"Conversion Rate")),n.a.createElement(je,{value:e.conversionRate}))))})))))),n.a.createElement(j.a,{p:2,display:"flex",justifyContent:"flex-end"},n.a.createElement(U.a,{component:b.a,size:"small",to:"#",endIcon:n.a.createElement(ee.a,null)},"See all")))},ke=t(56),Ne=Object(c.a)((function(e){var a;return{root:{},item:(a={padding:e.spacing(3),textAlign:"center"},Object(ke.a)(a,e.breakpoints.up("md"),{"&:not(:last-of-type)":{borderRight:"1px solid ".concat(e.palette.divider)}}),Object(ke.a)(a,e.breakpoints.down("sm"),{"&:not(:last-of-type)":{borderBottom:"1px solid ".concat(e.palette.divider)}}),a),valueContainer:{display:"flex",alignItems:"center",justifyContent:"center"},label:{marginLeft:e.spacing(1)}}})),Ce=function(e){var a=e.className,t=Object(p.a)(e,["className"]),r=Ne(),c="854,355.00",l="373,250.50",i="123,532.00",s="26,000";return n.a.createElement(v.a,Object.assign({className:Object(E.a)(r.root,a)},t),n.a.createElement(o.a,{alignItems:"center",container:!0,justify:"space-between"},n.a.createElement(o.a,{className:r.item,item:!0,md:3,sm:6,xs:12},n.a.createElement(x.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Total Income"),n.a.createElement("div",{className:r.valueContainer},n.a.createElement(x.a,{variant:"h3",color:"textPrimary"},"$",c),n.a.createElement(Ee.a,{className:r.label,color:"success"},"+25%"))),n.a.createElement(o.a,{className:r.item,item:!0,md:3,sm:6,xs:12},n.a.createElement(x.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Total Expanses"),n.a.createElement("div",{className:r.valueContainer},n.a.createElement(x.a,{variant:"h3",color:"textPrimary"},"$",l),n.a.createElement(Ee.a,{className:r.label,color:"success"},"+12%"))),n.a.createElement(o.a,{className:r.item,item:!0,md:3,sm:6,xs:12},n.a.createElement(x.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Net Profit"),n.a.createElement("div",{className:r.valueContainer},n.a.createElement(x.a,{variant:"h3",color:"textPrimary"},i),n.a.createElement(Ee.a,{className:r.label,color:"error"},"-20%"))),n.a.createElement(o.a,{className:r.item,item:!0,md:3,sm:6,xs:12},n.a.createElement(x.a,{component:"h2",gutterBottom:!0,variant:"overline",color:"textSecondary"},"Active Subscriptions"),n.a.createElement("div",{className:r.valueContainer},n.a.createElement(x.a,{variant:"h3",color:"textPrimary"},s)))))},Se=Object(c.a)((function(e){return{root:{display:"flex",flexDirection:"column"},avatar:{fontSize:14,fontWeight:e.typography.fontWeightBold,color:e.palette.common.white}}})),we=function(e){var a=e.className,t=Object(p.a)(e,["className"]),c=Se(),l=Object(z.a)(),o=Object(r.useState)([]),i=Object(d.a)(o,2),s=i[0],b=i[1],f=Object(r.useCallback)(Object(u.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get("/api/reports/top-referrals");case 3:a=e.sent,l.current&&b(a.data.referrals),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[l]);return Object(r.useEffect)((function(){f()}),[f]),n.a.createElement(v.a,Object.assign({className:Object(E.a)(c.root,a)},t),n.a.createElement(y.a,{action:n.a.createElement(A.a,null),title:"Top Referrals"}),n.a.createElement(h.a,null),n.a.createElement(O.a,{disablePadding:!0},s.map((function(e,a){return n.a.createElement(k.a,{divider:a<s.length-1,key:e.name},n.a.createElement(N.a,null,n.a.createElement(C.a,{className:c.avatar,style:{backgroundColor:e.color}},e.initials)),n.a.createElement(S.a,{primary:e.name,primaryTypographyProps:{variant:"h6"}}),n.a.createElement(x.a,{variant:"body2",color:"textSecondary"},oe()(e.value).format("0,0")))}))))},Pe=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));a.default=function(){var e=Pe();return n.a.createElement(i.a,{className:e.root,title:"Dashboard Alternative"},n.a.createElement(l.a,{maxWidth:!1},n.a.createElement(ce,null),n.a.createElement(o.a,{container:!0,spacing:3},n.a.createElement(o.a,{item:!0,xs:12},n.a.createElement(Ce,null)),n.a.createElement(o.a,{item:!0,lg:8,xl:9,xs:12},n.a.createElement(H,null)),n.a.createElement(o.a,{item:!0,lg:4,xl:3,xs:12},n.a.createElement(I,null)),n.a.createElement(o.a,{item:!0,lg:8,xs:12},n.a.createElement(ve,null)),n.a.createElement(o.a,{item:!0,lg:4,xs:12},n.a.createElement(D,null)),n.a.createElement(o.a,{item:!0,lg:8,xs:12},n.a.createElement(Oe,null)),n.a.createElement(o.a,{item:!0,lg:4,xs:12},n.a.createElement(we,null)))))}}}]);
//# sourceMappingURL=38.dd6525eb.chunk.js.map