(this["webpackJsonpsodiq-vezeti-assignment"]=this["webpackJsonpsodiq-vezeti-assignment"]||[]).push([[57],{2088:function(n,s,a){"use strict";a.r(s),a.d(s,"readingTime",(function(){return e})),a.d(s,"default",(function(){return c})),a.d(s,"tableOfContents",(function(){return l})),a.d(s,"frontMatter",(function(){return u}));var t=a(28),p=(a(0),a(334)),e={text:"2 min read",minutes:1.485,time:89100.00000000001,words:297},o={};function c(n){var s=n.components,a=Object(t.a)(n,["components"]);return Object(p.b)("wrapper",Object.assign({},o,a,{components:s,mdxType:"MDXLayout"}),Object(p.b)("h1",{id:"settings"},"Settings"),Object(p.b)("p",null,"Currently we only have implemented text direction and theme selection. We decided to use ",Object(p.b)("inlineCode",{parentName:"p"},"React Context API")," to make the settings available in the entire app by wrapping it into ",Object(p.b)("inlineCode",{parentName:"p"},"SettingsProvider"),". We could have used Redux, but we want to give you more options."),Object(p.b)("p",null,"Before the app is being loaded, we try to extract stored settings (from localStorage) and display the app using the restored settings."),Object(p.b)("h2",{id:"using-settings-data"},"Using settings data"),Object(p.b)("p",null,"This can done by using ",Object(p.b)("inlineCode",{parentName:"p"},"useSettings")," hook:"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> useSettings <span class="token keyword">from</span> <span class="token string">\'src/hooks/useSettings\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> settings <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token comment">// use settings</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("p",null,"Or by ",Object(p.b)("inlineCode",{parentName:"p"},"SettingsConsumer"),":"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token punctuation">{</span> SettingsConsumer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'src/settings/SettingsContext\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">SettingsConsumer</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>settings<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token comment">// use settings</span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">SettingsConsumer</span></span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("h2",{id:"updating-settings"},"Updating settings"),Object(p.b)("p",null,"It can be implemented in any component within seconds."),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> useSettings <span class="token keyword">from</span> <span class="token string">\'src/hooks/useSettings\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> saveSettings <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>values<span class="token punctuation">,</span> setValues<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function">handleSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> nextSettings <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// Get values from form</span>\n\n    <span class="token function">saveSettings</span><span class="token punctuation">(</span>nextSettings<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">onSubmit</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleSave<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token punctuation">{</span><span class="token comment">/* form fields */</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Save</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("h2",{id:"using-settings-to-control-component-rendering-or-any-business-logic"},"Using settings to control component rendering or any business logic"),Object(p.b)("p",null,"Lets say that you want to display or hide a component based on user settings. All you have to do is to make sure you update the ",Object(p.b)("inlineCode",{parentName:"p"},"src/contexts/SettingsContext.js")," file. It contains a default settings object that has to be updated with your new settings options, for example: ",Object(p.b)("inlineCode",{parentName:"p"},"displayPromo: true"),".\nAfter that it will be available in your entire app."),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> useSettings <span class="token keyword">from</span> <span class="token string">\'src/hooks/useSettings\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">MyComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> settings <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token punctuation">{</span>settings<span class="token punctuation">.</span>displayPromo <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Promo</span></span> <span class="token punctuation">/></span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))))}c.isMDXComponent=!0;var l=function(){return[{id:"using-settings-data",level:2,title:"Using settings data",children:[]},{id:"updating-settings",level:2,title:"Updating settings",children:[]},{id:"using-settings-to-control-component-rendering-or-any-business-logic",level:2,title:"Using settings to control component rendering or any business logic",children:[]}]},u={}}}]);
//# sourceMappingURL=57.564e7eff.chunk.js.map