import{_ as n,o as s,c as a,a as p}from"./app.b514c16a.js";const t={},e=p(`<h1 id="java\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#java\u57FA\u7840" aria-hidden="true">#</a> Java\u57FA\u7840</h1><h3 id="_1\u3001java-io-\u6D41\u8FD9\u5757\u6709\u56DB\u5927\u5BB6\u65CF" tabindex="-1"><a class="header-anchor" href="#_1\u3001java-io-\u6D41\u8FD9\u5757\u6709\u56DB\u5927\u5BB6\u65CF" aria-hidden="true">#</a> 1\u3001java IO \u6D41\u8FD9\u5757\u6709\u56DB\u5927\u5BB6\u65CF</h3><ul><li><p><code>java.io.InputStream</code>java \u5B57\u8282\u8F93\u5165\u6D41</p></li><li><p><code>java.io.OutputStream</code> \u5B57\u8282\u8F93\u51FA\u6D41</p></li><li><p><code>java.io.Reader</code> \u5B57\u7B26\u8F93\u5165\u6D41</p></li><li><p><code>java.io.Writer</code> \u5B57\u7B26\u8F93\u51FA\u6D41</p></li></ul><p><strong>\u6240\u6709\u7684 <em>\u8F93\u51FA\u6D41</em> \u90FD\u5E94\u8BE5\u5237\u65B0\u540E\u5173\u95ED <code>flush()\u3001close()</code> <em>\u6240\u6709\u7684\u6D41</em> \u4F7F\u7528\u5B8C\u90FD\u5E94\u8BE5\u5173\u95ED <code>close()</code></strong></p><h3 id="_2\u3001java-io-\u5305\u4E0B\u9700\u8981\u638C\u63E1\u7684\u6D41\u6709-16-\u4E2A" tabindex="-1"><a class="header-anchor" href="#_2\u3001java-io-\u5305\u4E0B\u9700\u8981\u638C\u63E1\u7684\u6D41\u6709-16-\u4E2A" aria-hidden="true">#</a> 2\u3001java.io \u5305\u4E0B\u9700\u8981\u638C\u63E1\u7684\u6D41\u6709 16 \u4E2A</h3><h4 id="_2-1\u3001\u6587\u4EF6\u4E13\u5C5E" tabindex="-1"><a class="header-anchor" href="#_2-1\u3001\u6587\u4EF6\u4E13\u5C5E" aria-hidden="true">#</a> 2.1\u3001\u6587\u4EF6\u4E13\u5C5E</h4><ul><li>java.io.FileInputStream</li><li>java.io.FileOutputStream</li><li>java.io.FileReader</li><li>java.io.FileWriter</li></ul><h4 id="_2-2\u3001\u8F6C\u6362\u6D41-\u5C06\u5B57\u8282\u6D41\u8F6C\u6362\u6210\u5B57\u7B26\u6D41" tabindex="-1"><a class="header-anchor" href="#_2-2\u3001\u8F6C\u6362\u6D41-\u5C06\u5B57\u8282\u6D41\u8F6C\u6362\u6210\u5B57\u7B26\u6D41" aria-hidden="true">#</a> 2.2\u3001\u8F6C\u6362\u6D41\uFF08\u5C06\u5B57\u8282\u6D41\u8F6C\u6362\u6210\u5B57\u7B26\u6D41\uFF09</h4><ul><li>java.io.InputStreamReader</li><li>java.io.OutputStreamWriter</li></ul><h4 id="_2-3\u3001\u7F13\u51B2\u6D41\u4E13\u5C5E" tabindex="-1"><a class="header-anchor" href="#_2-3\u3001\u7F13\u51B2\u6D41\u4E13\u5C5E" aria-hidden="true">#</a> 2.3\u3001\u7F13\u51B2\u6D41\u4E13\u5C5E</h4><ul><li>java.io.BufferedReader</li><li>java.io.BufferedWriter</li><li>java.io.BufferedInputStream</li><li>java.io.BufferedOutputStream</li></ul><h4 id="_2-4\u3001\u6807\u51C6\u8F93\u51FA\u6D41" tabindex="-1"><a class="header-anchor" href="#_2-4\u3001\u6807\u51C6\u8F93\u51FA\u6D41" aria-hidden="true">#</a> 2.4\u3001\u6807\u51C6\u8F93\u51FA\u6D41</h4><ul><li>java.io.PrintWriter</li><li>java.io.PrintStream</li></ul><h4 id="_2-5\u3001\u5BF9\u8C61\u4E13\u5C5E\u6D41" tabindex="-1"><a class="header-anchor" href="#_2-5\u3001\u5BF9\u8C61\u4E13\u5C5E\u6D41" aria-hidden="true">#</a> 2.5\u3001\u5BF9\u8C61\u4E13\u5C5E\u6D41</h4><ul><li>java.io.ObjectInputStream</li><li>java.io.ObjectOutputStream</li></ul><h3 id="_3\u3001\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u6848\u4F8B" aria-hidden="true">#</a> 3\u3001\u6848\u4F8B</h3><h4 id="_3-1\u3001fileinputstream-\u8BFB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-1\u3001fileinputstream-\u8BFB\u6587\u4EF6" aria-hidden="true">#</a> 3.1\u3001FileInputStream \u8BFB\u6587\u4EF6</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileInputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileInputStreamTest01</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">FileInputStream</span> files <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token comment">// D:\\\\1\u3001\u5468\u62A5.txt \u6587\u4EF6\u8DEF\u5F84</span>
            files <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\1\u3001\u5468\u62A5.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 1mb</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">=</span> files<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>bytes<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//  \u8F93\u51FA\u8BFB\u5230\u7684\u6587\u4EF6</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            <span class="token comment">// \u907F\u514D\u7A7A\u6307\u9488\u5F02\u5E38</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>files <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">// \u4E00\u5B9A\u8981\u5173\u95ED</span>
                    files<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2\u3001fileoutputstream-\u5199\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2\u3001fileoutputstream-\u5199\u6587\u4EF6" aria-hidden="true">#</a> 3.2\u3001FileOutputStream \u5199\u6587\u4EF6</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileOutputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileOutputStreamTest01</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

        <span class="token class-name">FileOutputStream</span> files <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span><span class="token punctuation">{</span>
            <span class="token comment">// \u4FDD\u5B58\u7684\u6587\u4EF6\u5730\u5740\uFF0C\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u4F1A\u65B0\u5EFA\uFF0C\u6709\u7684\u8BDD\u5C31\u4E0D\u65B0\u5EFA\u4E86\u3002</span>
            files <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\1\u3001\u5468\u62A5.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token string">&quot;\u4E2D\u56FD\u4EBA\uFF0C\u4E0D\u9A97\u4E2D\u56FD\u4EBA!&quot;</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5C06\u5B57\u7B26\u8F6C\u6362\u4E3A\u5B57\u8282</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            files<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u4E00\u5B9A\u8981\u8BB0\u5F97\u5237\u65B0\uFF0C\u9632\u6B62\u6709\u5269\u4F59\u7684\u6D41\u6CA1\u6709\u8F93\u51FA\uFF0C\u4FD7\u79F0\u6E05\u7A7A\u7BA1\u9053</span>
            files<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span><span class="token punctuation">{</span>
            <span class="token comment">// \u907F\u514D\u7A7A\u6307\u9488</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>files <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">try</span><span class="token punctuation">{</span>
                    <span class="token comment">// \u4E00\u5B9A\u8981\u8BB0\u5F97\u5173\u95ED</span>
                    files<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3\u3001filereader-\u8BFB\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3\u3001filereader-\u8BFB\u6587\u4EF6" aria-hidden="true">#</a> 3.3\u3001FileReader \u8BFB\u6587\u4EF6</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileReaderTest01</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileReader</span> files <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6587\u4EF6\u5730\u5740</span>
            files <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\1\u3001\u5468\u62A5.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5B57\u7B26\u6D41</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">1028</span> <span class="token operator">*</span> <span class="token number">1028</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 2mb</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">=</span> files<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                files<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4\u3001filewriter-\u5199\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-4\u3001filewriter-\u5199\u6587\u4EF6" aria-hidden="true">#</a> 3.4\u3001FileWriter \u5199\u6587\u4EF6</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">FileWriter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FileWriterTest01</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FileReader</span> fileR <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">FileWriter</span> fileW <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u8BFB\u7684\u5730\u5740</span>
            fileR <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token string">&quot;D:\\\\1\u3001\u5468\u62A5.txt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5199\u7684\u5730\u5740 true \u8868\u793A\u4E0D\u6E05\u7A7A\uFF0C\u53E0\u52A0</span>
            fileW <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileWriter</span><span class="token punctuation">(</span><span class="token string">&quot;text.txt&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u5B57\u7B26\u6D41</span>
            <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">=</span> fileR<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>chars<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                fileW<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chars<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u5237\u65B0\uFF0C\u9632\u6B62\u6709\u5269\u4F59\u7684\u6D41\u6CA1\u6709\u8F93\u51FA\uFF0C\u6E05\u7A7A\u7BA1\u9053</span>
            fileW<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>fileR <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    fileR<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>fileW <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    fileW<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4\u3001java-io-file" tabindex="-1"><a class="header-anchor" href="#_4\u3001java-io-file" aria-hidden="true">#</a> 4\u3001java.io.File</h3><ul><li>File \u7C7B\u548C\u56DB\u5927\u5BB6\u65CF\u6CA1\u6709\u4EC0\u4E48\u5173\u7CFB\uFF0C\u6240\u6709 File \u7C7B\u4E0D\u80FD\u5B8C\u6210\u6587\u4EF6\u7684\u8BFB\u548C\u5199\u3002</li><li>File \u5BF9\u8C61\u4EE3\u8868\u4EC0\u4E48\uFF1F <ol><li>\u6587\u4EF6\u548C\u76EE\u5F55\u8DEF\u5F84\u540D\u7684\u62BD\u8C61\u8868\u793A\u5F62\u5F0F</li><li>\u4E00\u4E2A File \u5BF9\u8C61\u6709\u53EF\u80FD\u5BF9\u5E94\u7684\u662F\u76EE\u5F55\uFF0C\u4E5F\u53EF\u80FD\u6587\u4EF6</li><li>File \u53EA\u662F\u4E00\u4E2A\u8DEF\u5F84\u540D\u7684\u62BD\u8C61\u8868\u793A\u5F62\u5F0F</li></ol></li><li>\u9700\u8981\u638C\u63E1 File \u7C7B\u4E2D\u5E38\u7528\u7684\u65B9\u6CD5</li></ul>`,26),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","index.html.vue"]]);export{k as default};