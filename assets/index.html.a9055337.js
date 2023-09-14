import{_ as e,o as n,c as i,a}from"./app.d309d5d1.js";const s={},l=a(`<h1 id="mysql-\u5B66\u4E60\u7B14\u8BB0\u4E00" tabindex="-1"><a class="header-anchor" href="#mysql-\u5B66\u4E60\u7B14\u8BB0\u4E00" aria-hidden="true">#</a> MySQL \u5B66\u4E60\u7B14\u8BB0\u4E00</h1><h2 id="\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> \u5B50\u67E5\u8BE2</h2><p>\u4EC0\u4E48\u662F\u5B50\u67E5\u8BE2</p><blockquote><p>select \u8BED\u53E5\u4E2D\u5D4C\u5957 select \u8BED\u53E5\uFF0C\u88AB\u5D4C\u5957\u7684 select \u8BED\u53E5\u79F0\u4E3A\u5B50\u67E5\u8BE2</p></blockquote><p>\u5B50\u67E5\u8BE2\u53EF\u4EE5\u51FA\u73B0\u5728\u54EA\u91CC\u5462\uFF1F</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select
    ...(select)
from
    ...(select)
where
    ...(select)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-\u4E2D\u7684\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#where-\u4E2D\u7684\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> where \u4E2D\u7684\u5B50\u67E5\u8BE2</h3><h4 id="\u6848\u4F8B\u4E00" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E00" aria-hidden="true">#</a> \u6848\u4F8B\u4E00</h4><blockquote><p>\u627E\u51FA\u6BD4\u6700\u4F4E\u5DE5\u8D44\u9AD8\u7684\u5458\u5DE5\u548C\u59D3\u540D</p></blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select
    sal,name
from
    emp
where
    sal&gt;(select min(sal) from emp);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="from-\u5B50\u8BED\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#from-\u5B50\u8BED\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2" aria-hidden="true">#</a> from \u5B50\u8BED\u53E5\u4E2D\u7684\u5B50\u67E5\u8BE2</h3><p>\u6CE8\u610F\uFF1Afrom \u540E\u9762\u7684\u5B50\u67E5\u8BE2\uFF0C\u53EF\u4EE5\u5C06\u5B50\u67E5\u8BE2\u7684\u67E5\u8BE2\u7ED3\u679C\u5F53\u6210\u4E00\u5F20\u4E34\u65F6\u8868\u3002</p><h4 id="\u6848\u4F8B\u4E00-1" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E00-1" aria-hidden="true">#</a> \u6848\u4F8B\u4E00</h4><blockquote><p>\u627E\u51FA\u6BCF\u4E2A\u5C97\u4F4D\u7684\u5E73\u5747\u5DE5\u8D44\u7684\u85AA\u8D44\u7B49\u7EA7\u3002</p></blockquote><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>    select
        t.job,s.grade
    from
        (select job,avg(sal) as avgsal from emp group by job) as t
    join
        salgrade s
    on
        t.avgsal between s.losal and s.hisal;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5408\u5E76\u67E5\u8BE2\u7ED3\u679C\u96C6-union" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u67E5\u8BE2\u7ED3\u679C\u96C6-union" aria-hidden="true">#</a> \u5408\u5E76\u67E5\u8BE2\u7ED3\u679C\u96C6 union</h2><h3 id="\u6848\u4F8B\u4E00-2" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B\u4E00-2" aria-hidden="true">#</a> \u6848\u4F8B\u4E00</h3><p>\u67E5\u8BE2\u5DE5\u4F5C\u5C97\u4F4D\u662F MANAGER \u548C SALESMAN \u7684\u5458\u5DE5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> select name,job from emp where job = &#39;MANAGER&#39;
 union
 select name,job from emp where job = &#39;SALESMAN&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>union \u7684\u6548\u7387\u8981\u9AD8\u4E00\u4E9B\u3002\u5BF9\u4E8E\u8868\u8FDE\u63A5\u6765\u8BF4\uFF0C\u6BCF\u8FDE\u63A5\u4E00\u6B21\u65B0\u8868\uFF0C\u5219\u5339\u914D\u7684\u6B21\u6570\u6EE1\u8DB3\u7B1B\u5361\u5C14\u79EF\uFF0C\u6210\u500D\u7684\u7FFB\u3002\u3002\u3002 \u4F46\u662F union \u53EF\u4EE5\u51CF\u5C11\u5339\u914D\u7684\u6B21\u6570\uFF0C\u5728\u51CF\u5C11\u5339\u914D\u6B21\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u8FD8\u53EF\u4EE5\u5B8C\u6210\u4E24\u4E2A\u7ED3\u679C\u96C6\u7684\u62FC\u63A5</p></blockquote><p>\u6CE8\u610F\u4E8B\u9879</p><ol><li>union \u5728\u8FDB\u884C\u7ED3\u679C\u96C6\u5408\u5408\u5E76\u7684\u65F6\u5019\uFF0C\u8981\u6C42\u4E24\u4E2A\u7ED3\u679C\u96C6\u5408\u7684\u5217\u6570\u76F8\u540C</li></ol><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>
\u9519\u8BEF\u793A\u8303

select name,job from emp where jon = &#39;MANAGER&#39;
union
select name from emp where jon = &#39;SALESMAN&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u8981\u6C42\u96C6\u5408\u5408\u5E76\u65F6\u5217\u548C\u5217\u7684\u6570\u636E\u7C7B\u578B\u4E5F\u5FC5\u987B\u76F8\u540C</li></ol><h2 id="\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316" aria-hidden="true">#</a> \u683C\u5F0F\u5316</h2><h3 id="\u6570\u5B57\u683C\u5F0F\u5316-format" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u683C\u5F0F\u5316-format" aria-hidden="true">#</a> \u6570\u5B57\u683C\u5F0F\u5316 format</h3><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>
    select format(sal,&#39;$999,999&#39;) as sal from emp

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>$999,999 \u56FA\u5B9A\u683C\u5F0F \u5343\u5206\u4F4D 1,200</p></blockquote>`,28),d=[l];function r(c,o){return n(),i("div",null,d)}const u=e(s,[["render",r],["__file","index.html.vue"]]);export{u as default};
