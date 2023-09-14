import{_ as d,r as s,o as a,c as l,b as r,w as t,d as e,e as n,a as c}from"./app.d309d5d1.js";const o={},v=e("h1",{id:"\u521B\u5EFA\u5E94\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u521B\u5EFA\u5E94\u7528","aria-hidden":"true"},"#"),n(" \u521B\u5EFA\u5E94\u7528")],-1),u=e("h2",{id:"\u4E0B\u8F7D\u4F9D\u8D56",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4E0B\u8F7D\u4F9D\u8D56","aria-hidden":"true"},"#"),n(" \u4E0B\u8F7D\u4F9D\u8D56")],-1),m=e("div",{class:"language-text ext-text line-numbers-mode"},[e("pre",{class:"language-text"},[e("code",null,`    yarn init && yarn add electron --dev

`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=c(`<h2 id="\u5165\u53E3\u6587\u4EF6\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6\u8BF4\u660E" aria-hidden="true">#</a> \u5165\u53E3\u6587\u4EF6\u8BF4\u660E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// app \u63A7\u5236\u5E94\u7528\u4E8B\u4EF6\u7684\u751F\u547D\u5468\u671F
// BrowserWindow \u8D1F\u8D23\u521B\u5EFA\u548C\u7BA1\u7406\u5E94\u7528\u7684\u7A97\u53E3\u3002
const { app, BrowserWindow } = require(&quot;electron&quot;);

const createWindow = () =&gt; {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile(&quot;index.html&quot;);
};

app.whenReady().then(() =&gt; {
  createWindow();
});


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(_,x){const i=s("Copy");return a(),l("div",null,[v,u,r(i,null,{default:t(()=>[m]),_:1}),h])}const w=d(o,[["render",b],["__file","index.html.vue"]]);export{w as default};
