/*! For license information please see 5.cf4081da.chunk.js.LICENSE.txt */
(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[5],{1163:function(e,r,t){var n,o;void 0===(o="function"===typeof(n=function(){var e,r,t={},n={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},i={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function a(e,r){this._input=e,this._value=r}return(e=function(n){var o,l,c,u;if(e.isNumeral(n))o=n.value();else if(0===n||"undefined"===typeof n)o=0;else if(null===n||r.isNaN(n))o=null;else if("string"===typeof n)if(i.zeroFormat&&n===i.zeroFormat)o=0;else if(i.nullFormat&&n===i.nullFormat||!n.replace(/[^0-9]+/g,"").length)o=null;else{for(l in t)if((u="function"===typeof t[l].regexps.unformat?t[l].regexps.unformat():t[l].regexps.unformat)&&n.match(u)){c=t[l].unformat;break}o=(c=c||e._.stringToNumber)(n)}else o=Number(n)||null;return new a(n,o)}).version="2.0.6",e.isNumeral=function(e){return e instanceof a},e._=r={numberToFormat:function(r,t,o){var i,a,l,c,u,s,f,m,p=n[e.options.currentLocale],d=!1,h=!1,b="",v="",g=!1;if(r=r||0,l=Math.abs(r),e._.includes(t,"(")?(d=!0,t=t.replace(/[\(|\)]/g,"")):(e._.includes(t,"+")||e._.includes(t,"-"))&&(s=e._.includes(t,"+")?t.indexOf("+"):r<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),e._.includes(t,"a")&&(a=!!(a=t.match(/a(k|m|b|t)?/))&&a[1],e._.includes(t," a")&&(b=" "),t=t.replace(new RegExp(b+"a[kmbt]?"),""),l>=1e12&&!a||"t"===a?(b+=p.abbreviations.trillion,r/=1e12):l<1e12&&l>=1e9&&!a||"b"===a?(b+=p.abbreviations.billion,r/=1e9):l<1e9&&l>=1e6&&!a||"m"===a?(b+=p.abbreviations.million,r/=1e6):(l<1e6&&l>=1e3&&!a||"k"===a)&&(b+=p.abbreviations.thousand,r/=1e3)),e._.includes(t,"[.]")&&(h=!0,t=t.replace("[.]",".")),c=r.toString().split(".")[0],u=t.split(".")[1],f=t.indexOf(","),i=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(e._.includes(u,"[")?(u=(u=u.replace("]","")).split("["),v=e._.toFixed(r,u[0].length+u[1].length,o,u[1].length)):v=e._.toFixed(r,u.length,o),c=v.split(".")[0],v=e._.includes(v,".")?p.delimiters.decimal+v.split(".")[1]:"",h&&0===Number(v.slice(1))&&(v="")):c=e._.toFixed(r,0,o),b&&!a&&Number(c)>=1e3&&b!==p.abbreviations.trillion)switch(c=String(Number(c)/1e3),b){case p.abbreviations.thousand:b=p.abbreviations.million;break;case p.abbreviations.million:b=p.abbreviations.billion;break;case p.abbreviations.billion:b=p.abbreviations.trillion}if(e._.includes(c,"-")&&(c=c.slice(1),g=!0),c.length<i)for(var y=i-c.length;y>0;y--)c="0"+c;return f>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+p.delimiters.thousands)),0===t.indexOf(".")&&(c=""),m=c+v+(b||""),d?m=(d&&g?"(":"")+m+(d&&g?")":""):s>=0?m=0===s?(g?"-":"+")+m:m+(g?"-":"+"):g&&(m="-"+m),m},stringToNumber:function(e){var r,t,o,a=n[i.currentLocale],l=e,c={thousand:3,million:6,billion:9,trillion:12};if(i.zeroFormat&&e===i.zeroFormat)t=0;else if(i.nullFormat&&e===i.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{for(r in t=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),c)if(o=new RegExp("[^a-zA-Z]"+a.abbreviations[r]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),l.match(o)){t*=Math.pow(10,c[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)t=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=r(t,n[i],i,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){var e=Array.prototype.slice.call(arguments);return e.reduce((function(e,t){var n=r.multiplier(t);return e>n?e:n}),1)},toFixed:function(e,r,t,n){var o,i,a,l,c=e.toString().split("."),u=r-(n||0);return o=2===c.length?Math.min(Math.max(c[1].length,u),r):u,a=Math.pow(10,o),l=(t(e+"e+"+o)/a).toFixed(o),n>r-o&&(i=new RegExp("\\.?0{1,"+(n-(r-o))+"}$"),l=l.replace(i,"")),l}},e.options=i,e.formats=t,e.locales=n,e.locale=function(e){return e&&(i.currentLocale=e.toLowerCase()),i.currentLocale},e.localeData=function(e){if(!e)return n[i.currentLocale];if(e=e.toLowerCase(),!n[e])throw new Error("Unknown locale : "+e);return n[e]},e.reset=function(){for(var e in o)i[e]=o[e]},e.zeroFormat=function(e){i.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){i.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){i.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},e.validate=function(r,t){var n,o,i,a,l,c,u,s;if("string"!==typeof r&&(r+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",r)),(r=r.trim()).match(/^\d+$/))return!0;if(""===r)return!1;try{u=e.localeData(t)}catch(f){u=e.localeData(e.locale())}return i=u.currency.symbol,l=u.abbreviations,n=u.delimiters.decimal,o="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(s=r.match(/^[^\d]+/))||(r=r.substr(1),s[0]===i))&&(null===(s=r.match(/[^\d]+$/))||(r=r.slice(0,-1),s[0]===l.thousand||s[0]===l.million||s[0]===l.billion||s[0]===l.trillion))&&(c=new RegExp(o+"{2}"),!r.match(/[^\d.,]/g)&&!((a=r.split(n)).length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(c):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(c)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(c)&&!!a[1].match(/^\d+$/)))},e.fn=a.prototype={clone:function(){return e(this)},format:function(r,n){var o,a,l,c=this._value,u=r||i.defaultFormat;if(n=n||Math.round,0===c&&null!==i.zeroFormat)a=i.zeroFormat;else if(null===c&&null!==i.nullFormat)a=i.nullFormat;else{for(o in t)if(u.match(t[o].regexps.format)){l=t[o].format;break}a=(l=l||e._.numberToFormat)(c,u,n)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([this._value,e],(function(e,r,n,o){return e+Math.round(t*r)}),0)/t,this},subtract:function(e){var t=r.correctionFactor.call(null,this._value,e);return this._value=r.reduce([e],(function(e,r,n,o){return e-Math.round(t*r)}),Math.round(this._value*t))/t,this},multiply:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)*Math.round(t*i)/Math.round(i*i)}),1),this},divide:function(e){return this._value=r.reduce([this._value,e],(function(e,t,n,o){var i=r.correctionFactor(e,t);return Math.round(e*i)/Math.round(t*i)})),this},difference:function(r){return Math.abs(e(this._value).subtract(r).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1===~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(r,t,n){var o,i=e._.includes(t," BPS")?" ":"";return r*=1e4,t=t.replace(/\s?BPS/,""),o=e._.numberToFormat(r,t,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(r){return+(1e-4*e._.stringToNumber(r)).toFixed(15)}}),function(){var r={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=r.suffixes.concat(t.suffixes.filter((function(e){return r.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,o,i){var a,l,c,u=e._.includes(o,"ib")?t:r,s=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=u.suffixes.length;a++)if(l=Math.pow(u.base,a),c=Math.pow(u.base,a+1),null===n||0===n||n>=l&&n<c){s+=u.suffixes[a],l>0&&(n/=l);break}return e._.numberToFormat(n,o,i)+s},unformat:function(n){var o,i,a=e._.stringToNumber(n);if(a){for(o=r.suffixes.length-1;o>=0;o--){if(e._.includes(n,r.suffixes[o])){i=Math.pow(r.base,o);break}if(e._.includes(n,t.suffixes[o])){i=Math.pow(t.base,o);break}}a*=i||1}return a}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(r,t,n){var o,i,a=e.locales[e.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),o=e._.numberToFormat(r,t,n),r>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):r<0&&!e._.includes(l.before,"-")&&!e._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":o=e._.insert(o,a.currency.symbol,i);break;case" ":o=e._.insert(o," ",i+a.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":o=i===l.after.length-1?o+a.currency.symbol:e._.insert(o,a.currency.symbol,-(l.after.length-(1+i)));break;case" ":o=i===l.after.length-1?o+" ":e._.insert(o," ",-(l.after.length-(1+i)+a.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(r,t,n){var o=("number"!==typeof r||e._.isNaN(r)?"0e+0":r.toExponential()).split("e");return t=t.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),t,n)+"e"+o[1]},unformat:function(r){var t=e._.includes(r,"e+")?r.split("e+"):r.split("e-"),n=Number(t[0]),o=Number(t[1]);return o=e._.includes(r,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],(function(r,t,n,o){var i=e._.correctionFactor(r,t);return r*i*(t*i)/(i*i)}),1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(r,t,n){var o=e.locales[e.options.currentLocale],i=e._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),i+=o.ordinal(r),e._.numberToFormat(r,t,n)+i}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(r,t,n){var o,i=e._.includes(t," %")?" ":"";return e.options.scalePercentBy100&&(r*=100),t=t.replace(/\s?\%/,""),o=e._.numberToFormat(r,t,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(r){var t=e._.stringToNumber(r);return e.options.scalePercentBy100?.01*t:t}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}}),e})?n.call(r,t,r,e):n)||(e.exports=o)},1217:function(e,r,t){"use strict";var n=t(1),o=t(5),i=t(0),a=(t(2),t(3)),l=t(340),c=t(127),u=Object(c.a)(i.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),s=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),f=t(15),m=Object(c.a)(i.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(10),d=t(7),h=i.createElement(s,null),b=i.createElement(u,null),v=i.createElement(m,null),g=i.forwardRef((function(e,r){var t=e.checkedIcon,c=void 0===t?h:t,u=e.classes,s=e.color,f=void 0===s?"secondary":s,m=e.icon,d=void 0===m?b:m,g=e.indeterminate,y=void 0!==g&&g,w=e.indeterminateIcon,x=void 0===w?v:w,O=e.inputProps,_=e.size,k=void 0===_?"medium":_,j=Object(o.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),F=y?x:d,E=y?x:c;return i.createElement(l.a,Object(n.a)({type:"checkbox",classes:{root:Object(a.a)(u.root,u["color".concat(Object(p.a)(f))],y&&u.indeterminate),checked:u.checked,disabled:u.disabled},color:f,inputProps:Object(n.a)({"data-indeterminate":y},O),icon:i.cloneElement(F,{fontSize:void 0===F.props.fontSize&&"small"===k?k:F.props.fontSize}),checkedIcon:i.cloneElement(E,{fontSize:void 0===E.props.fontSize&&"small"===k?k:E.props.fontSize}),ref:r},j))}));r.a=Object(d.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(f.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(g)},1417:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(2),a=t.n(i);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,u=c(e,["color","size"]);return o.a.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),o.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));u.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},u.displayName="PlusCircle",r.a=u},1469:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(2),a=t.n(i);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,u=c(e,["color","size"]);return o.a.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),o.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));u.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},u.displayName="ArrowRight",r.a=u},2116:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(2),a=t.n(i);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,u=c(e,["color","size"]);return o.a.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.a.createElement("polyline",{points:"17 8 12 3 7 8"}),o.a.createElement("line",{x1:"12",y1:"3",x2:"12",y2:"15"}))}));u.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},u.displayName="Upload",r.a=u},2117:function(e,r,t){"use strict";var n=t(0),o=t.n(n),i=t(2),a=t.n(i);function l(){return(l=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=Object(n.forwardRef)((function(e,r){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,a=void 0===i?24:i,u=c(e,["color","size"]);return o.a.createElement("svg",l({ref:r,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),o.a.createElement("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),o.a.createElement("polyline",{points:"7 10 12 15 17 10"}),o.a.createElement("line",{x1:"12",y1:"15",x2:"12",y2:"3"}))}));u.propTypes={color:a.a.string,size:a.a.oneOfType([a.a.string,a.a.number])},u.displayName="Download",r.a=u}}]);
//# sourceMappingURL=5.cf4081da.chunk.js.map