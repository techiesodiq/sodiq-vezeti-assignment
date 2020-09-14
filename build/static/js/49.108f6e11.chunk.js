(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[49],{2086:function(n,s,a){"use strict";a.r(s),a.d(s,"readingTime",(function(){return o})),a.d(s,"default",(function(){return c})),a.d(s,"tableOfContents",(function(){return u})),a.d(s,"frontMatter",(function(){return i}));var t=a(28),e=(a(0),a(338)),o={text:"2 min read",minutes:1.74,time:104400,words:348},p={};function c(n){var s=n.components,a=Object(t.a)(n,["components"]);return Object(e.b)("wrapper",Object.assign({},p,a,{components:s,mdxType:"MDXLayout"}),Object(e.b)("h1",{id:"api-calls"},"API Calls"),Object(e.b)("h2",{id:"how-can-i-make-an-ajax-call"},"How can I make an AJAX call?"),Object(e.b)("p",null,"You can use any library you like. We decided to use ",Object(e.b)("a",{target:"_blank",href:"https://github.com/axios/axios"},"Axios")," since it allows us to create instances. Another good alternative could be ",Object(e.b)("a",{target:"_blank",href:"https://github.com/andris9/fetch"},"Fetch"),"."),Object(e.b)("h2",{id:"example"},"Example"),Object(e.b)("p",null,"Since we keep up to date with the latest updates of React, our product uses functional components with React Hooks, but this can be applied to Class components."),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> <span class="token function-variable function">CustomerListView</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> classes <span class="token operator">=</span> <span class="token function">useStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> isMountedRef <span class="token operator">=</span> <span class="token function">useIsMountedRef</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>customers<span class="token punctuation">,</span> setCustomers<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> getCustomers <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'/api/customers\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>isMountedRef<span class="token punctuation">.</span>current<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">setCustomers</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>customers<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">//</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>isMountedRef<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">getCustomers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>getCustomers<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token comment">// Render data</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(e.b)("h2",{id:"important"},"Important"),Object(e.b)("p",null,"If you use ",Object(e.b)("inlineCode",{parentName:"p"},"axios")," from ",Object(e.b)("inlineCode",{parentName:"p"},"src/utils/axios.js")," (",Object(e.b)("inlineCode",{parentName:"p"},"src/utils/axios.ts")," for TS version), this instance is being intercepted by the MockAdapter. This means that all your requests made using it will be blocked the by adapter. If you use it, probably for your own server API requests, and you get a 404 in your console, it is probably because the adapter is not able to find the specified URL. If you have a server, please use a new instance of Axios."),Object(e.b)("h2",{id:"request-interceptors"},"Request interceptors"),Object(e.b)("p",null,"Using Axios we were able to integrate ",Object(e.b)("a",{target:"_blank",href:"https://github.com/ctimmerm/axios-mock-adapter"},"Axios Mock Adapter")," to simulate real server calls. To archive that, you have to create an Axios instante and use it whenever you make a request call. Now you can extend your instance and add Axios Mock Adapter to listen for requests and return custom data."),Object(e.b)("h2",{id:"removing-existing-request-interceptos"},"Removing existing request interceptos"),Object(e.b)("p",null,"There are two ways:"),Object(e.b)("ol",null,Object(e.b)("li",{parentName:"ol"},"Simply use a new instance of Axios."),Object(e.b)("li",{parentName:"ol"},"Remove the ",Object(e.b)("inlineCode",{parentName:"li"},"src/__mocks__")," folder and ",Object(e.b)("inlineCode",{parentName:"li"},"src/mock.js")," (",Object(e.b)("inlineCode",{parentName:"li"},"src/mock.ts")," for TS version).")),Object(e.b)("h3",{id:"adding-request-interceptors"},"Adding request interceptors"),Object(e.b)("p",null,"It takes ony a few seconds to add a new call listener. The interceptor has a similar format to Express JS, for example:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> mock <span class="token keyword">from</span> <span class="token string">\'./mock\'</span><span class="token punctuation">;</span>\n\nmock<span class="token punctuation">.</span><span class="token function">onGet</span><span class="token punctuation">(</span><span class="token string">\'/api/invoices\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  invoices<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> total<span class="token operator">:</span> <span class="token number">32.43</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> total<span class="token operator">:</span> <span class="token number">67.00</span> <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))))}c.isMDXComponent=!0;var u=function(){return[{id:"how-can-i-make-an-ajax-call",level:2,title:"How can I make an AJAX call?",children:[]},{id:"example",level:2,title:"Example",children:[]},{id:"important",level:2,title:"Important",children:[]},{id:"request-interceptors",level:2,title:"Request interceptors",children:[]},{id:"removing-existing-request-interceptos",level:2,title:"Removing existing request interceptos",children:[{id:"adding-request-interceptors",level:3,title:"Adding request interceptors",children:[]}]}]},i={}}}]);
//# sourceMappingURL=49.108f6e11.chunk.js.map