import{_ as a,c as s,o as n,d as t}from"./app.b94706c5.js";const v='{"title":"\u5E03\u5C40\u76EE\u5F55 Layouts directory","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u5E03\u5C40","slug":"\u81EA\u5B9A\u4E49\u5E03\u5C40"},{"level":2,"title":"\u4E0E <slot /> \u4E00\u8D77\u4F7F\u7528","slug":"\u4E0E-slot-\u4E00\u8D77\u4F7F\u7528"},{"level":2,"title":"\u4E0E <script setup> \u4E00\u8D77\u4F7F\u7528","slug":"\u4E0E-script-setup-\u4E00\u8D77\u4F7F\u7528"}],"relativePath":"directory-structure/layouts.md","lastUpdated":1638487608158}',p={},e=t(`__VP_STATIC_START__<h1 id="\u5E03\u5C40\u76EE\u5F55-layouts-directory" tabindex="-1">\u5E03\u5C40\u76EE\u5F55 <a href="https://v3.nuxtjs.org/docs/directory-structure/layouts" target="_blank" rel="noopener noreferrer">Layouts directory</a> <a class="header-anchor" href="#\u5E03\u5C40\u76EE\u5F55-layouts-directory" aria-hidden="true">#</a></h1><p>Nuxt \u63D0\u4F9B\u4E86\u4E00\u4E2A\u53EF\u5B9A\u5236\u7684\u5E03\u5C40\u67B6\u6784\uFF0C\u60A8\u53EF\u4EE5\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u5B83\uFF0C\u975E\u5E38\u9002\u5408\u5C06\u5E38\u89C1\u7684 UI \u6216\u4EE3\u7801\u6A21\u5F0F\u63D0\u53D6\u5230\u53EF\u91CD\u7528\u7684\u5E03\u5C40\u7EC4\u4EF6\u4E2D\u3002</p><p>\u9875\u9762\u5E03\u5C40\u653E\u7F6E\u5728 <code>layouts/</code> \u76EE\u5F55\u4E2D\uFF0C\u4F7F\u7528\u65F6\u4F1A\u901A\u8FC7\u5F02\u6B65\u5BFC\u5165\u81EA\u52A8\u52A0\u8F7D\u3002 \u5982\u679C\u4F60\u521B\u5EFA\u4E86\u4E00\u4E2A <code>layouts/default.vue</code> \u8FD9\u5C06\u7528\u4E8E\u4F60\u5E94\u7528\u4E2D\u7684\u6240\u6709\u9875\u9762\u3002 \u901A\u8FC7\u5C06 <code>layout</code> \u5C5E\u6027\u8BBE\u7F6E\u4E3A\u7EC4\u4EF6\u9009\u9879\u7684\u4E00\u90E8\u5206\u6765\u4F7F\u7528\u5176\u4ED6\u5E03\u5C40\u3002</p><p>\u5982\u679C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53EA\u6709\u4E00\u4E2A\u5E03\u5C40\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u4F7F\u7528 <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener noreferrer">app.vue</a>\u3002</p><h2 id="\u81EA\u5B9A\u4E49\u5E03\u5C40" tabindex="-1">\u81EA\u5B9A\u4E49\u5E03\u5C40 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5E03\u5C40" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>-<span class="token operator">|</span> layouts/
---<span class="token operator">|</span> custom.vue
</code></pre></div><p>\u5728\u4F60\u7684\u5E03\u5C40\u6587\u4EF6\u4E2D\uFF0C\u4F60\u9700\u8981\u4F7F\u7528 <code>&lt;slot /&gt;</code> \u6765\u5B9A\u4E49\u4F60\u7684\u5E03\u5C40\u9875\u9762\u5185\u5BB9\u7684\u52A0\u8F7D\u4F4D\u7F6E\u3002 \u4F8B\u5982\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    \u4E00\u4E9B\u5171\u4EAB\u7684\u5E03\u5C40\u5185\u5BB9\uFF1A
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6839\u636E\u4E0A\u9762\u7684\u793A\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528\u8FD9\u6837\u7684\u81EA\u5B9A\u4E49\u5E03\u5C40\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  layout<span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4E0E-slot-\u4E00\u8D77\u4F7F\u7528" tabindex="-1">\u4E0E <code>&lt;slot /&gt;</code> \u4E00\u8D77\u4F7F\u7528 <a class="header-anchor" href="#\u4E0E-slot-\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u60A8\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 <code>&lt;NuxtLayout&gt;</code> \u7EC4\u4EF6(\u8BE5\u7EC4\u4EF6\u5728\u6574\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4E2D\u90FD\u53EF\u7528)\u548C\u5728\u7EC4\u4EF6\u9009\u9879\u4E2D\u8BBE\u7F6E <code>layout: false</code> \u6765\u83B7\u5F97\u5B8C\u5168\u7684\u63A7\u5236\u6743(\u4F8B\u5982\uFF0C\u4F7F\u7528 slots)\u3002</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NuxtLayout</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>custom<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">&gt;</span></span> \u4E00\u4E9B\u6807\u9898\u6A21\u677F\u5185\u5BB9\u3002 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

    \u9875\u9762\u7684\u5176\u4F59\u90E8\u5206
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NuxtLayout</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  layout<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u4E0E-script-setup-\u4E00\u8D77\u4F7F\u7528" tabindex="-1">\u4E0E <code>&lt;script setup&gt;</code> \u4E00\u8D77\u4F7F\u7528 <a class="header-anchor" href="#\u4E0E-script-setup-\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Vue <code>&lt;script setup&gt;</code> <a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html" target="_blank" rel="noopener noreferrer">\u7F16\u8BD1\u65F6\u8BED\u6CD5\u7CD6</a>\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u8F85\u52A9\u7684 <code>&lt;script&gt;</code> \u6807\u8BB0\u6839\u636E\u9700\u8981\u8BBE\u7F6E <code>layout</code> \u9009\u9879\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u{1F4A1} \u63D0\u793A\uFF1A</p><p>\u5728 Vue \u6587\u6863\u4E2D\u4E86\u89E3\u66F4\u591A\u5173\u4E8E <a href="https://v3.cn.vuejs.org/api/sfc-script-setup.html#%E4%B8%8E%E6%99%AE%E9%80%9A%E7%9A%84-script-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer"><code>&lt;script setup&gt;</code> \u548C <code>&lt;script&gt;</code> \u6807\u7B7E\u5171\u5B58</a> \u7684\u5185\u5BB9\u3002</p></div><p>\u5047\u8BBE\u8FD9\u4E2A\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash"><pre><code>-<span class="token operator">|</span> layouts/
---<span class="token operator">|</span> custom.vue
-<span class="token operator">|</span> pages/
---<span class="token operator">|</span> my-page.vue
</code></pre></div><p>\u548C\u8FD9\u4E2A <code>custom.vue</code> \u5E03\u5C40\uFF1A</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    \u4E00\u4E9B\u5171\u4EAB\u7684\u5E03\u5C40\u5185\u5BB9\uFF1A
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u5728 <code>my-page.vue</code> \u4E2D\u5730<code>&lt;script setup&gt;</code> \u6807\u7B7E\u65C1\u8FB9\u4F7F\u7528\u8F85\u52A9\u5730 <code>&lt;script&gt;</code> \u8BBE\u7F6E\u4E00\u4E2A\u9875\u9762\u5E03\u5C40\uFF0C\u50CF\u4E0B\u9762\u8FD9\u6837:</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  layout<span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u4F60\u7684 setup \u5185\u5BB9</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>__VP_STATIC_END__`,22),o=[e];function c(l,u,r,i,k,d){return n(),s("div",null,o)}var h=a(p,[["render",c]]);export{v as __pageData,h as default};
