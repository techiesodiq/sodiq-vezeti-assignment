(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[46],{1153:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1915:function(e,t){},2158:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a.n(n),r=a(12),c=a(29),o=a(0),m=a.n(o),i=a(600),s=a(1135),E=a(1072),u=a(1112),y=a(19),b=a(1153),g=a(332),d=a(28),h=a(21),f=a(3),p=a(1501),v=a(1136),w=a(1179),x=a(1091),C=a(125),D=a(1142),N=a(1092),j=a(1328),P=a(2065),k=a.n(P),O=a(1155),S=a.n(O),A=a(4),Y=a.n(A),R=a(1159),T=a.n(R),B=p.f.create({page:{backgroundColor:"#fff",padding:24},h1:{fontSize:24,fontWeight:500},h5:{fontSize:12,fontWeight:500},h6:{fontSize:10,fontWeight:500},body1:{fontSize:9,lineHeight:1.5},body2:{fontSize:8,lineHeight:1.5},mb1:{marginBottom:4},header:{flexDirection:"row",justifyContent:"space-between"},brand:{height:24,width:24},company:{marginTop:32,flexDirection:"row",justifyContent:"space-between"},references:{marginTop:32,flexDirection:"row",justifyContent:"space-between"},billing:{marginTop:32},items:{marginTop:32},notes:{marginTop:32},table:{display:"flex",width:"auto"},tableHeader:{},tableBody:{},tableRow:{flexDirection:"row",borderBottomWidth:1,borderColor:"#eeeeee",borderStyle:"solid"},tableCell1:{padding:6,width:"".concat(60,"%")},tableCellN:{padding:6,width:"".concat(20,"%")},alignRight:{textAlign:"right"}}),M=function(e){var t=e.invoice;return m.a.createElement(p.a,null,m.a.createElement(p.e,{size:"A4",style:B.page},m.a.createElement(p.h,{style:B.header},m.a.createElement(p.h,null,m.a.createElement(p.b,{source:"/static/logo.jpg",style:B.brand}),m.a.createElement(p.g,{style:B.h5},"www.devias.io")),m.a.createElement(p.h,null,m.a.createElement(p.g,{style:B.h1},t.status),m.a.createElement(p.g,{style:B.h5},"Invoice #",t.id))),m.a.createElement(p.h,{style:B.company},m.a.createElement(p.h,null,m.a.createElement(p.g,{style:B.body1},"Street King William, 123"),m.a.createElement(p.g,{style:B.body1},"Level 2, C, 442456"),m.a.createElement(p.g,{style:B.body1},"San Francisco, CA, USA")),m.a.createElement(p.h,null,m.a.createElement(p.g,{style:B.body1},"Company No. 4675933"),m.a.createElement(p.g,{style:B.body1},"EU VAT No. 949 67545 45")),m.a.createElement(p.h,null,m.a.createElement(p.g,{style:B.body1},"Email: accounts@devias.io"),m.a.createElement(p.g,{style:B.body1},"Tel: (+40) 652 3456 23"))),m.a.createElement(p.h,{style:B.references},m.a.createElement(p.h,null,m.a.createElement(p.g,{style:[B.h5,B.mb1]},"Due Date"),m.a.createElement(p.g,{style:B.body1},Y()(t.dueDate).format("DD MMM YYYY"))),m.a.createElement(p.h,null,m.a.createElement(p.g,{style:[B.h5,B.mb1]},"Date of issue"),m.a.createElement(p.g,{style:B.body1},Y()(t.issueDate).format("DD MMM YYYY"))),m.a.createElement(p.h,null,m.a.createElement(p.g,{style:[B.h5,B.mb1]},"Number"),m.a.createElement(p.g,{style:B.body1},t.number))),m.a.createElement(p.h,{style:B.billing},m.a.createElement(p.g,{style:[B.h5,B.mb1]},"Billed to"),m.a.createElement(p.g,{style:B.body1},"Tracey Herman"),m.a.createElement(p.g,{style:B.body1},"Countdown Grey Lynn"),m.a.createElement(p.g,{style:B.body1},"6934656584231"),m.a.createElement(p.g,{style:B.body1},"271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand")),m.a.createElement(p.h,{style:B.items},m.a.createElement(p.h,{style:B.table},m.a.createElement(p.h,{style:B.tableHeader},m.a.createElement(p.h,{style:B.tableRow},m.a.createElement(p.h,{style:B.tableCell1},m.a.createElement(p.g,{style:B.h6},"Description")),m.a.createElement(p.h,{style:B.tableCellN}),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:[B.h6,B.alignRight]},"Price")))),m.a.createElement(p.h,{style:B.tableBody},t.items.map((function(e){return m.a.createElement(p.h,{style:B.tableRow,key:e.id},m.a.createElement(p.h,{style:B.tableCell1},m.a.createElement(p.g,{style:B.body2},e.description)),m.a.createElement(p.h,{style:B.tableCellN}),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:[B.body2,B.alignRight]},T()(e.unitAmount).format("".concat(e.currency,"0,0.00")))))})),m.a.createElement(p.h,{style:B.tableRow},m.a.createElement(p.h,{style:B.tableCell1}),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:B.body2},"Subtotal")),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:[B.body2,B.alignRight]},T()(t.subtotalAmount).format("".concat(t.currency,"0,0.00"))))),m.a.createElement(p.h,{style:B.tableRow},m.a.createElement(p.h,{style:B.tableCell1}),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:B.body2},"Taxes")),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:[B.body2,B.alignRight]},T()(t.taxAmount).format("".concat(t.currency,"0,0.00"))))),m.a.createElement(p.h,{style:B.tableRow},m.a.createElement(p.h,{style:B.tableCell1}),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:B.body2},"Total")),m.a.createElement(p.h,{style:B.tableCellN},m.a.createElement(p.g,{style:[B.body2,B.alignRight]},T()(t.totalAmount).format("".concat(t.currency,"0,0.00")))))))),m.a.createElement(p.h,{style:B.notes},m.a.createElement(p.g,{style:[B.h5,B.mb1]},"Notes"),m.a.createElement(p.g,{style:B.body1},"Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses."))))},z=Object(i.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),I=function(e){var t=e.className,a=e.invoice,n=Object(d.a)(e,["className","invoice"]),l=z(),r=Object(o.useState)(!1),i=Object(c.a)(r,2),s=i[0],u=i[1];return m.a.createElement(v.a,Object.assign({container:!0,justify:"space-between",spacing:3,className:Object(f.a)(l.root,t)},n),m.a.createElement(v.a,{item:!0},m.a.createElement(w.a,{separator:m.a.createElement(S.a,{fontSize:"small"}),"aria-label":"breadcrumb"},m.a.createElement(x.a,{variant:"body1",color:"inherit",to:"/app",component:h.a},"Dashboard"),m.a.createElement(x.a,{variant:"body1",color:"inherit",to:"/app/management",component:h.a},"Management"),m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},"Invoices")),m.a.createElement(C.a,{variant:"h3",color:"textPrimary"},"Invoice Details")),m.a.createElement(v.a,{item:!0},m.a.createElement(D.a,{smDown:!0},m.a.createElement(N.a,{className:l.action,onClick:function(){return u(!0)}},"Preview PDF")),m.a.createElement(p.c,{document:m.a.createElement(M,{invoice:a}),fileName:"invoice",style:{textDecoration:"none"}},m.a.createElement(N.a,{color:"secondary",variant:"contained",className:l.action},"Download PDF")),m.a.createElement(j.a,{fullScreen:!0,open:s},m.a.createElement(E.a,{height:"100%",display:"flex",flexDirection:"column"},m.a.createElement(E.a,{bgcolor:"common.white",p:2},m.a.createElement(N.a,{variant:"contained",color:"secondary",onClick:function(){return u(!1)}},m.a.createElement(k.a,null),"Back")),m.a.createElement(E.a,{flexGrow:1},m.a.createElement(p.d,{width:"100%",height:"100%",style:{border:"none"}},m.a.createElement(M,{invoice:a})))))))},W=a(191),H=a.n(W),L=a(249),U=a(1496),F=a(1497),G=a(1498),q=a(1499),J=a(1500),K=a(91),V=Object(i.a)((function(){return{root:{}}})),Z=function(e){var t=e.className,a=e.invoice,n=Object(d.a)(e,["className","invoice"]),l=V();return m.a.createElement(L.a,Object.assign({className:Object(f.a)(l.root,t)},n),m.a.createElement(H.a,null,m.a.createElement(E.a,{minWidth:800,p:6},m.a.createElement(v.a,{container:!0,justify:"space-between"},m.a.createElement(v.a,{item:!0},m.a.createElement(K.a,null),m.a.createElement(C.a,{variant:"h5",color:"textPrimary"},"www.devias.io")),m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{align:"right",variant:"h1",color:"textPrimary"},a.status),m.a.createElement(C.a,{align:"right",variant:"h5",color:"textPrimary"},"Invoice #",a.id))),m.a.createElement(E.a,{my:4},m.a.createElement(v.a,{container:!0,justify:"space-between"},m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},"Street King William, 123"," ",m.a.createElement("br",null),"Level 2, C, 442456"," ",m.a.createElement("br",null),"San Francisco, CA, USA")),m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},"Company No. 4675933"," ",m.a.createElement("br",null),"EU VAT No. 949 67545 45"," ",m.a.createElement("br",null))),m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{align:"right",variant:"body1",color:"textPrimary"},"Email: accounts@devias.io"," ",m.a.createElement("br",null),"Tel: (+40) 652 3456 23")))),m.a.createElement(E.a,{my:4},m.a.createElement(v.a,{container:!0,justify:"space-between"},m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Due date"),m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},Y()(a.dueDate).format("DD MMM YYYY"))),m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Date of issue"),m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},Y()(a.issueDate).format("DD MMM YYYY"))),m.a.createElement(v.a,{item:!0},m.a.createElement(C.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Number"),m.a.createElement(C.a,{variant:"body1",color:"textPrimary"},a.number)))),m.a.createElement(E.a,{my:4},m.a.createElement(C.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Billed to"),m.a.createElement(C.a,null,a.customer.name," ",m.a.createElement("br",null),a.customer.company," ",m.a.createElement("br",null),a.customer.taxId," ",m.a.createElement("br",null),a.customer.address," ",m.a.createElement("br",null))),m.a.createElement(U.a,null,m.a.createElement(F.a,null,m.a.createElement(G.a,null,m.a.createElement(q.a,null,"Description"),m.a.createElement(q.a,null),m.a.createElement(q.a,{align:"right"},"Unit Price"))),m.a.createElement(J.a,null,a.items.map((function(e){return m.a.createElement(G.a,{key:e.id},m.a.createElement(q.a,null,e.description),m.a.createElement(q.a,null),m.a.createElement(q.a,{align:"right"},T()(e.unitAmount).format("".concat(e.currency,"0,0.00"))))})),m.a.createElement(G.a,null,m.a.createElement(q.a,null),m.a.createElement(q.a,null,"Subtotal"),m.a.createElement(q.a,{align:"right"},T()(a.subtotalAmount).format("".concat(a.currency,"0,0.00")))),m.a.createElement(G.a,null,m.a.createElement(q.a,null),m.a.createElement(q.a,null,"Taxes"),m.a.createElement(q.a,{align:"right"},T()(a.taxAmount).format("".concat(a.currency,"0,0.00")))),m.a.createElement(G.a,null,m.a.createElement(q.a,null),m.a.createElement(q.a,null,"Total"),m.a.createElement(q.a,{align:"right"},T()(a.totalAmount).format("".concat(a.currency,"0,0.00")))))),m.a.createElement(E.a,{mt:2},m.a.createElement(C.a,{gutterBottom:!0,variant:"h5",color:"textPrimary"},"Notes"),m.a.createElement(C.a,{variant:"body1",color:"textSecondary"},"Please make sure you have the right bank registration number as I had issues before and make sure you guys cover transfer expenses.")))))},Q=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=Q(),t=Object(b.a)(),a=Object(o.useState)(null),n=Object(c.a)(a,2),i=n[0],d=n[1],h=Object(o.useCallback)(Object(r.a)(l.a.mark((function e(){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/invoices/1");case 3:a=e.sent,t.current&&d(a.data.invoice),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(o.useEffect)((function(){h()}),[h]),i?m.a.createElement(g.a,{className:e.root,title:"Invoice Details"},m.a.createElement(s.a,{maxWidth:"lg"},m.a.createElement(I,{invoice:i}),m.a.createElement(E.a,{my:2},m.a.createElement(u.a,null)),m.a.createElement(Z,{invoice:i}))):null}}}]);
//# sourceMappingURL=46.0e7d54d8.chunk.js.map