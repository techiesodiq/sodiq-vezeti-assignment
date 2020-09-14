(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[32],{1159:function(e,a,t){"use strict";var r=t(189);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(249)).default)(n.default.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");a.default=c},1169:function(e,a,t){"use strict";var r=t(189);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),c=(0,r(t(249)).default)(n.default.createElement("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert");a.default=c},1171:function(e,a,t){"use strict";var r=t(1),n=t(5),c=t(0),o=(t(2),t(3)),l=t(248),i=t(7),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=Object(n.a)(e,["classes","className","raised"]);return c.createElement(l.a,Object(r.a)({className:Object(o.a)(t.root,i),elevation:m?8:1,ref:a},d))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1183:function(e,a,t){"use strict";var r=t(1),n=t(85),c=t(5),o=t(0),l=(t(113),t(2),t(3)),i=t(7),s=t(126),m=t(15),d=t(127),u=Object(d.a)(o.createElement("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),p=t(334);var b=Object(i.a)((function(e){return{root:{display:"flex",marginLeft:e.spacing(.5),marginRight:e.spacing(.5),backgroundColor:e.palette.grey[100],color:e.palette.grey[700],borderRadius:2,cursor:"pointer","&:hover, &:focus":{backgroundColor:e.palette.grey[200]},"&:active":{boxShadow:e.shadows[0],backgroundColor:Object(m.b)(e.palette.grey[200],.12)}},icon:{width:24,height:16}}}),{name:"PrivateBreadcrumbCollapsed"})((function(e){var a=e.classes,t=Object(c.a)(e,["classes"]);return o.createElement(p.a,Object(r.a)({component:"li",className:a.root,focusRipple:!0},t),o.createElement(u,{className:a.icon}))}));var h=o.forwardRef((function(e,a){var t=e.children,i=e.classes,m=e.className,d=e.component,u=void 0===d?"nav":d,p=e.expandText,h=void 0===p?"Show path":p,v=e.itemsAfterCollapse,f=void 0===v?1:v,g=e.itemsBeforeCollapse,E=void 0===g?1:g,y=e.maxItems,k=void 0===y?8:y,x=e.separator,O=void 0===x?"/":x,j=Object(c.a)(e,["children","classes","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"]),C=o.useState(!1),S=C[0],P=C[1],N=o.Children.toArray(t).filter((function(e){return o.isValidElement(e)})).map((function(e,a){return o.createElement("li",{className:i.li,key:"child-".concat(a)},e)}));return o.createElement(s.a,Object(r.a)({ref:a,component:u,color:"textSecondary",className:Object(l.a)(i.root,m)},j),o.createElement("ol",{className:i.ol},function(e,a,t){return e.reduce((function(r,n,c){return c<e.length-1?r=r.concat(n,o.createElement("li",{"aria-hidden":!0,key:"separator-".concat(c),className:a},t)):r.push(n),r}),[])}(S||k&&N.length<=k?N:function(e){return E+f>=e.length?e:[].concat(Object(n.a)(e.slice(0,E)),[o.createElement(b,{"aria-label":h,key:"ellipsis",onClick:function(e){P(!0);var a=e.currentTarget.parentNode.querySelector("a[href],button,[tabindex]");a&&a.focus()}})],Object(n.a)(e.slice(e.length-f,e.length)))}(N),i.separator,O)))}));a.a=Object(i.a)({root:{},ol:{display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"},li:{},separator:{display:"flex",userSelect:"none",marginLeft:8,marginRight:8}},{name:"MuiBreadcrumbs"})(h)},1217:function(e,a,t){"use strict";var r=t(1),n=t(5),c=t(0),o=(t(2),t(3)),l=t(340),i=t(127),s=Object(i.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),d=t(15),u=Object(i.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(10),b=t(7),h=c.createElement(m,null),v=c.createElement(s,null),f=c.createElement(u,null),g=c.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?h:t,s=e.classes,m=e.color,d=void 0===m?"secondary":m,u=e.icon,b=void 0===u?v:u,g=e.indeterminate,E=void 0!==g&&g,y=e.indeterminateIcon,k=void 0===y?f:y,x=e.inputProps,O=e.size,j=void 0===O?"medium":O,C=Object(n.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),S=E?k:b,P=E?k:i;return c.createElement(l.a,Object(r.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(p.a)(d))],E&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:d,inputProps:Object(r.a)({"data-indeterminate":E},x),icon:c.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"small"===j?j:S.props.fontSize}),checkedIcon:c.cloneElement(P,{fontSize:void 0===P.props.fontSize&&"small"===j?j:P.props.fontSize}),ref:a},C))}));a.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(d.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},1223:function(e,a,t){"use strict";var r=t(28),n=t(0),c=t.n(n),o=t(3),l=t(1286),i=t.n(l),s=t(607),m=Object(s.a)((function(e){return{root:{"& .ql-toolbar":{borderLeft:"none",borderTop:"none",borderRight:"none",borderBottom:"1px solid ".concat(e.palette.divider),"& .ql-picker-label:hover":{color:e.palette.secondary.main},"& .ql-picker-label.ql-active":{color:e.palette.secondary.main},"& .ql-picker-item:hover":{color:e.palette.secondary.main},"& .ql-picker-item.ql-selected":{color:e.palette.secondary.main},"& button:hover":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button:focus":{color:e.palette.secondary.main,"& .ql-stroke":{stroke:e.palette.secondary.main}},"& button.ql-active":{"& .ql-stroke":{stroke:e.palette.secondary.main}},"& .ql-stroke":{stroke:e.palette.text.primary},"& .ql-picker":{color:e.palette.text.primary},"& .ql-picker-options":{padding:e.spacing(2),backgroundColor:e.palette.background.default,border:"none",boxShadow:e.shadows[10],borderRadius:e.shape.borderRadius}},"& .ql-container":{border:"none","& .ql-editor":{fontFamily:e.typography.fontFamily,fontSize:16,color:e.palette.text.primary,"&.ql-blank::before":{color:e.palette.text.secondary}}}}}}));a.a=function(e){var a=e.className,t=Object(r.a)(e,["className"]),n=m();return c.a.createElement(i.a,Object.assign({className:Object(o.a)(n.root,a)},t))}},1312:function(e,a,t){"use strict";a.a=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var t=1024,r=a<0?0:a,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(t));return"".concat(parseFloat((e/Math.pow(t,c)).toFixed(r))," ").concat(n[c])}},1396:function(e,a,t){"use strict";var r=t(56),n=t(43),c=t(29),o=t(28),l=t(0),i=t.n(l),s=t(3),m=t(1573),d=t(190),u=t.n(d),p=t(607),b=t(126),h=t(1076),v=t(1095),f=t(1062),g=t(1061),E=t(1249),y=t(1123),k=t(1121),x=t(1069),O=t(1096),j=t(1206),C=t.n(j),S=t(1169),P=t.n(S),N=t(1312),B=Object(p.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));a.a=function(e){var a,t=e.className,d=Object(o.a)(e,["className"]),p=B(),j=Object(l.useState)([]),S=Object(c.a)(j,2),z=S[0],w=S[1],q=Object(l.useCallback)((function(e){w((function(a){return Object(n.a)(a).concat(e)}))}),[]),T=Object(m.a)({onDrop:q}),M=T.getRootProps,I=T.getInputProps,R=T.isDragActive;return i.a.createElement("div",Object.assign({className:Object(s.a)(p.root,t)},d),i.a.createElement("div",Object.assign({className:Object(s.a)((a={},Object(r.a)(a,p.dropZone,!0),Object(r.a)(a,p.dragActive,R),a))},M()),i.a.createElement("input",I()),i.a.createElement("div",null,i.a.createElement("img",{alt:"Select file",className:p.image,src:"/static/images/undraw_add_file2_gvbb.svg"})),i.a.createElement("div",null,i.a.createElement(b.a,{gutterBottom:!0,variant:"h3"},"Select files"),i.a.createElement(h.a,{mt:2},i.a.createElement(b.a,{color:"textPrimary",variant:"body1"},"Drop files here or click"," ",i.a.createElement(v.a,{underline:"always"},"browse")," ","thorough your machine")))),z.length>0&&i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{options:{suppressScrollX:!0}},i.a.createElement(f.a,{className:p.list},z.map((function(e,a){return i.a.createElement(g.a,{divider:a<z.length-1,key:a},i.a.createElement(E.a,null,i.a.createElement(C.a,null)),i.a.createElement(y.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:Object(N.a)(e.size)}),i.a.createElement(k.a,{title:"More options"},i.a.createElement(x.a,{edge:"end"},i.a.createElement(P.a,null))))})))),i.a.createElement("div",{className:p.actions},i.a.createElement(O.a,{onClick:function(){w([])},size:"small"},"Remove all"),i.a.createElement(O.a,{color:"secondary",size:"small",variant:"contained"},"Upload files"))))}},2167:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(607),o=t(1139),l=t(336),i=t(28),s=t(21),m=t(3),d=t(1140),u=t(1183),p=t(1095),b=t(126),h=t(1096),v=t(1159),f=t.n(v),g=Object(c.a)((function(){return{root:{}}})),E=function(e){var a=e.className,t=Object(i.a)(e,["className"]),r=g();return n.a.createElement(d.a,Object.assign({className:Object(m.a)(r.root,a),container:!0,justify:"space-between",spacing:3},t),n.a.createElement(d.a,{item:!0},n.a.createElement(u.a,{separator:n.a.createElement(f.a,{fontSize:"small"}),"aria-label":"breadcrumb"},n.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/app",component:s.a},"Dashboard"),n.a.createElement(p.a,{variant:"body1",color:"inherit",to:"/app/management",component:s.a},"Management"),n.a.createElement(b.a,{variant:"body1",color:"textPrimary"},"Products")),n.a.createElement(b.a,{variant:"h3",color:"textPrimary"},"Create a new product")),n.a.createElement(d.a,{item:!0},n.a.createElement(h.a,{component:s.a,to:"/app/management/products"},"Cancel")))},y=t(8),k=t.n(y),x=t(13),O=t(42),j=t(1181),C=t(1192),S=t(132),P=t(1171),N=t(1177),B=t(1129),z=t(1076),w=t(248),q=t(1075),T=t(1210),M=t(1116),I=t(1134),R=t(1217),W=t(1223),H=t(1396),L=[{id:"shirts",name:"Shirts"},{id:"phones",name:"Phones"},{id:"cars",name:"Cars"}],V=Object(c.a)((function(){return{root:{},editor:{"& .ql-editor":{height:400}}}})),_=function(e){var a=e.className,t=Object(i.a)(e,["className"]),r=V(),c=Object(O.g)(),o=Object(S.b)().enqueueSnackbar;return n.a.createElement(C.a,{initialValues:{category:"",description:"",images:[],includesTaxes:!1,isTaxable:!1,name:"",price:"",productCode:"",productSku:"",salePrice:"",submit:null},validationSchema:j.f().shape({category:j.g().max(255),description:j.g().max(5e3),images:j.a(),includesTaxes:j.b().required(),isTaxable:j.b().required(),name:j.g().max(255).required(),price:j.e().min(0).required(),productCode:j.g().max(255),productSku:j.g().max(255),salePrice:j.e().min(0)}),onSubmit:function(){var e=Object(x.a)(k.a.mark((function e(a,t){var r,n,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.setErrors,n=t.setStatus,l=t.setSubmitting;try{n({success:!0}),l(!1),o("Product Created",{variant:"success"}),c.push("/app/products")}catch(a){console.error(a),n({success:!1}),r({submit:a.message}),l(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){var c=e.errors,o=e.handleBlur,l=e.handleChange,i=e.handleSubmit,s=e.isSubmitting,u=e.setFieldValue,p=e.touched,v=e.values;return n.a.createElement("form",Object.assign({onSubmit:i,className:Object(m.a)(r.root,a)},t),n.a.createElement(d.a,{container:!0,spacing:3},n.a.createElement(d.a,{item:!0,xs:12,lg:8},n.a.createElement(P.a,null,n.a.createElement(N.a,null,n.a.createElement(B.a,{error:Boolean(p.name&&c.name),fullWidth:!0,helperText:p.name&&c.name,label:"Product Name",name:"name",onBlur:o,onChange:l,value:v.name,variant:"outlined"}),n.a.createElement(z.a,{mt:3,mb:1},n.a.createElement(b.a,{variant:"subtitle2",color:"textSecondary"},"Description")),n.a.createElement(w.a,{variant:"outlined"},n.a.createElement(W.a,{className:r.editor,value:v.description,onChange:function(e){return u("description",e)}})),p.description&&c.description&&n.a.createElement(z.a,{mt:2},n.a.createElement(q.a,{error:!0},c.description)))),n.a.createElement(z.a,{mt:3},n.a.createElement(P.a,null,n.a.createElement(T.a,{title:"Upload Images"}),n.a.createElement(M.a,null),n.a.createElement(N.a,null,n.a.createElement(H.a,null)))),n.a.createElement(z.a,{mt:3},n.a.createElement(P.a,null,n.a.createElement(T.a,{title:"Prices"}),n.a.createElement(M.a,null),n.a.createElement(N.a,null,n.a.createElement(d.a,{container:!0,spacing:3},n.a.createElement(d.a,{item:!0,xs:12,md:6},n.a.createElement(B.a,{error:Boolean(p.price&&c.price),fullWidth:!0,helperText:p.price&&c.price?c.price:"If you have a sale price this will be shown as old price",label:"Price",name:"price",type:"number",onBlur:o,onChange:l,value:v.price,variant:"outlined"})),n.a.createElement(d.a,{item:!0,xs:12,md:6},n.a.createElement(B.a,{error:Boolean(p.salePrice&&c.salePrice),fullWidth:!0,helperText:p.salePrice&&c.salePrice,label:"Sale price",name:"salePrice",type:"number",onBlur:o,onChange:l,value:v.salePrice,variant:"outlined"}))),n.a.createElement(z.a,{mt:2},n.a.createElement(I.a,{control:n.a.createElement(R.a,{checked:v.isTaxable,onChange:l,value:v.isTaxable,name:"isTaxable"}),label:"Product is taxable"})),n.a.createElement(z.a,{mt:2},n.a.createElement(I.a,{control:n.a.createElement(R.a,{checked:v.includesTaxes,onChange:l,value:v.includesTaxes,name:"includesTaxes"}),label:"Price includes taxes"})))))),n.a.createElement(d.a,{item:!0,xs:12,lg:4},n.a.createElement(P.a,null,n.a.createElement(T.a,{title:"Organize"}),n.a.createElement(M.a,null),n.a.createElement(N.a,null,n.a.createElement(B.a,{fullWidth:!0,label:"Category",name:"category",onChange:l,select:!0,SelectProps:{native:!0},value:v.category,variant:"outlined"},L.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)}))),n.a.createElement(z.a,{mt:2},n.a.createElement(B.a,{error:Boolean(p.productCode&&c.productCode),fullWidth:!0,helperText:p.productCode&&c.productCode,label:"Product Code",name:"productCode",onBlur:o,onChange:l,value:v.productCode,variant:"outlined"})),n.a.createElement(z.a,{mt:2},n.a.createElement(B.a,{error:Boolean(p.productSku&&c.productSku),fullWidth:!0,helperText:p.productSku&&c.productSku,label:"Product Sku",name:"productSku",onBlur:o,onChange:l,value:v.productSku,variant:"outlined"})))))),c.submit&&n.a.createElement(z.a,{mt:3},n.a.createElement(q.a,{error:!0},c.submit)),n.a.createElement(z.a,{mt:2},n.a.createElement(h.a,{color:"secondary",variant:"contained",type:"submit",disabled:s},"Create product")))}))},A=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:100}}}));a.default=function(){var e=A();return n.a.createElement(l.a,{className:e.root,title:"Product Create"},n.a.createElement(o.a,{maxWidth:"lg"},n.a.createElement(E,null),n.a.createElement(_,null)))}}}]);
//# sourceMappingURL=32.8bc1b720.chunk.js.map