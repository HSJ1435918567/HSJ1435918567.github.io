import{_ as e,o as n,c as t,a}from"./app.d5a0be15.js";const d={},l=a(`<h1 id="\u4E00\u3001\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u4E00\u3001\u5E38\u89C1\u95EE\u9898</h1><h2 id="\u4E00\u3001-telnet-command-not-found" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001-telnet-command-not-found" aria-hidden="true">#</a> \u4E00\u3001 telnet: command not found</h2><p>Linux centos \u8FD0\u884Ctelnet \u547D\u4EE4\uFF0C \u51FA\u73B0\u4E0B\u9762\u9519\u8BEF\u63D0\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# telnet 127.0.0.1
-bash: telnet: command not found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u5B89\u88C5telnet\u670D\u52A1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list telnet*              \u5217\u51FAtelnet\u76F8\u5173\u7684\u5B89\u88C5\u5305
yum install telnet-server     \u5B89\u88C5telnet\u670D\u52A1
yum install telnet.*          \u5B89\u88C5telnet\u5BA2\u6237\u7AEF

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),i=[l];function s(c,r){return n(),t("div",null,i)}const u=e(d,[["render",s],["__file","index.html.vue"]]);export{u as default};