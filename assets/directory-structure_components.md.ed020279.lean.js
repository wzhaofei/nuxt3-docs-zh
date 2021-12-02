import{_ as n,c as t,o as a,d as s}from"./app.b94706c5.js";const m='{"title":"components","description":"","frontmatter":{"icon":"IconDirectory","title":"components","head.title":"Components directory"},"headers":[{"level":2,"title":"\u7EC4\u4EF6\u547D\u540D","slug":"\u7EC4\u4EF6\u547D\u540D"},{"level":2,"title":"\u52A8\u6001\u5BFC\u5165","slug":"\u52A8\u6001\u5BFC\u5165"},{"level":2,"title":"<ClientOnly> \u7EC4\u4EF6","slug":"clientonly-\u7EC4\u4EF6"},{"level":2,"title":"\u5E93\u4F5C\u8005","slug":"\u5E93\u4F5C\u8005"}],"relativePath":"directory-structure/components.md","lastUpdated":1638487608158}',e={},o=s(`__VP_STATIC_START__<h1 id="\u7EC4\u4EF6\u76EE\u5F55" tabindex="-1">\u7EC4\u4EF6\u76EE\u5F55 <a class="header-anchor" href="#\u7EC4\u4EF6\u76EE\u5F55" aria-hidden="true">#</a></h1><p><code>components/</code> \u76EE\u5F55\u662F\u5B58\u653E\u53EF\u5BFC\u5165\u5230\u4F60\u7684\u9875\u9762\u4E2D\u7684 Vue \u7EC4\u4EF6\u6216\u5176\u4ED6\u7EC4\u4EF6 (<a href="https://v3.cn.vuejs.org/guide/component-basics.html" target="_blank" rel="noopener noreferrer">\u4E86\u89E3\u66F4\u591A</a>)\u3002</p><p>Nuxt \u4F1A\u81EA\u52A8\u5BFC\u5165 <code>components/</code> \u76EE\u5F55\u4E0B\u4EFB\u4F55\u7EC4\u4EF6 (\u4EE5\u53CA\u4F60\u53EF\u80FD\u6B63\u5728\u4F7F\u7528\u7684\u4EFB\u4F55\u6A21\u5757\u6CE8\u518C\u7684\u7EC4\u4EF6)\u3002</p><div class="language-bash"><pre><code><span class="token operator">|</span> components/
--<span class="token operator">|</span> TheHeader.vue
--<span class="token operator">|</span> TheFooter.vue
</code></pre></div><div class="language-html{}[layouts/default.vue]"><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;TheHeader /&gt;
    &lt;slot /&gt;
    &lt;TheFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><h2 id="\u7EC4\u4EF6\u547D\u540D" tabindex="-1">\u7EC4\u4EF6\u547D\u540D <a class="header-anchor" href="#\u7EC4\u4EF6\u547D\u540D" aria-hidden="true">#</a></h2><p>\u5982\u4F60\u7684\u5D4C\u5957\u76EE\u5F55\u4E2D\u6709\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-bash"><pre><code><span class="token operator">|</span> components/
--<span class="token operator">|</span> base/
----<span class="token operator">|</span> foo/
------<span class="token operator">|</span> Button.vue
</code></pre></div><p>... \u7136\u540E\u7EC4\u4EF6\u7684\u540D\u79F0\u5C06\u57FA\u4E8E\u81EA\u5DF1\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF0C\u5E76\u5220\u9664\u91CD\u590D\u7684\u6BB5 (\u6BD4\u5982\uFF1A an/an/Button.vue \u6CE8\u518C\u540D\u5C06\u4F1A\u662F AnButton)\u3002\u56E0\u6B64\u7EC4\u4EF6\u540D\u4F1A\u662F\uFF1A</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BaseFooButton</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">\u63D0\u793A\uFF1A</p><p>\u4E3A\u6E05\u695A\u8D77\u89C1\uFF0C\u5EFA\u8BAE\u7EC4\u4EF6\u7684\u6587\u4EF6\u540D\u4E0E\u5176\u540D\u79F0\u5339\u914D\u3002 (\u6240\u4EE5\uFF0C\u5728\u4E0A\u9762\u7684\u4F8B\u5B50\u4E2D, \u4F60\u53EF\u4EE5\u5C06 <code>Button.vue</code> \u91CD\u547D\u540D\u4E3A <code>BaseFooButton.vue</code>.)</p></div><h2 id="\u52A8\u6001\u5BFC\u5165" tabindex="-1">\u52A8\u6001\u5BFC\u5165 <a class="header-anchor" href="#\u52A8\u6001\u5BFC\u5165" aria-hidden="true">#</a></h2><p>\u8981\u52A8\u6001\u5BFC\u5165\u4E00\u4E2A\u7EC4\u4EF6 (\u4E5F\u79F0\u4E3A\u61D2\u52A0\u8F7D\u4E00\u4E2A\u7EC4\u4EF6) \u53EA\u9700\u8981\u5728\u539F\u7EC4\u4EF6\u540D\u524D\u52A0\u4E0A <code>Lazy</code> \u524D\u7F00.</p><div class="language-html{}[layouts/default.vue]"><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;TheHeader /&gt;
    &lt;slot /&gt;
    &lt;LazyTheFooter /&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><p>\u5F53\u8BE5\u7EC4\u4EF6\u4E0D\u662F\u603B\u88AB\u9700\u8981\uFF0C\u8FD9\u4E00\u70B9\u7279\u522B\u91CD\u8981\u3002\u901A\u8FC7\u4F7F\u7528 <code>Lazy</code> \u524D\u7F00\uFF0C\u4F60\u53EF\u4EE5\u5728\u5408\u9002\u7684\u65F6\u673A\uFF0C\u5EF6\u8FDF\u52A0\u8F7D\u7EC4\u4EF6\u4EE3\u7801\uFF0C\u8FD9\u6709\u52A9\u4E8E\u4F18\u5316\u4F60\u7684 JavaScript \u5305\u5927\u5C0F\u3002</p><div class="language-html{}[pages/index.vue]"><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h1&gt;Mountains&lt;/h1&gt;
    &lt;LazyMountainsList v-if=&quot;show&quot; /&gt;
    &lt;button v-if=&quot;!show&quot; @click=&quot;show = true&quot;&gt;Show List&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      show: false
    }
  }
}
&lt;/script&gt;
</code></pre></div><h2 id="clientonly-\u7EC4\u4EF6" tabindex="-1"><code>&lt;ClientOnly&gt;</code> \u7EC4\u4EF6 <a class="header-anchor" href="#clientonly-\u7EC4\u4EF6" aria-hidden="true">#</a></h2><p>Nuxt \u63D0\u4F9B\u4E86 <code>&lt;ClientOnly&gt;</code> \u7EC4\u4EF6\uFF0C\u662F\u4E13\u95E8\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3\u7EC4\u4EF6\u7684\u7EC4\u4EF6\u3002\u53EA\u5728\u5BA2\u6237\u7AEF\u5BFC\u5165\u7EC4\u4EF6\u6216\u5728\u5BA2\u6237\u7AEF\u63D2\u4EF6\u4E2D\u6CE8\u518C\u8BE5\u7EC4\u4EF6\u3002</p><div class="language-html{}[pages/example.vue]"><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Sidebar /&gt;
    &lt;ClientOnly&gt;

      &lt;!-- \u8BE5\u7EC4\u4EF6\u53EA\u4F1A\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3 --&gt;
      &lt;Comments /&gt;
    &lt;/ClientOnly&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><p>\u4F7F\u7528\u4E00\u4E2A\u63D2\u69FD\uFF0C\u5982\uFF1A fallback \uFF0C\u76F4\u5230 <code>&lt;ClientOnly&gt;</code> \u7EC4\u4EF6\u5728\u5BA2\u6237\u7AEF\u6302\u8F7D\u3002</p><div class="language-html{}[pages/example.vue]"><pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;Sidebar /&gt;
    &lt;ClientOnly&gt;
      &lt;!-- \u8BE5\u7EC4\u4EF6\u53EA\u4F1A\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3 --&gt;
      &lt;Comments /&gt;
      &lt;template #fallback&gt;
        &lt;!-- \u8FD9\u5C06\u5728\u670D\u52A1\u5668\u7AEF\u6E32\u67D3 --&gt;
        &lt;p&gt;Loading comments...&lt;/p&gt;
      &lt;/template&gt;
    &lt;/ClientOnly&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></div><h2 id="\u5E93\u4F5C\u8005" tabindex="-1">\u5E93\u4F5C\u8005 <a class="header-anchor" href="#\u5E93\u4F5C\u8005" aria-hidden="true">#</a></h2><p>\u5236\u4F5C\u5177\u6709\u81EA\u52A8\u6447\u6811\u4F18\u5316\u548C\u7EC4\u4EF6\u6CE8\u518C\u529F\u80FD\u7684 Vue \u7EC4\u4EF6\u5E93\u975E\u5E38\u7B80\u5355 \u2728</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>components:dirs</code> \u94A9\u5B50\uFF0C\u8F7B\u677E\u6269\u5C55\u76EE\u5F55\u5217\u8868\uFF0C\u800C\u65E0\u9700\u7528\u6237\u5728 Nuxt \u6A21\u5757\u4E2D\u8FDB\u884C\u914D\u7F6E\u3002</p><p>\u60F3\u8C61\u4E00\u4E2A\u50CF\u8FD9\u6837\u7684\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-bash"><pre><code><span class="token operator">|</span> node_modules/
---<span class="token operator">|</span> awesome-ui/
------<span class="token operator">|</span> components/
---------<span class="token operator">|</span> Alert.vue
---------<span class="token operator">|</span> Button.vue
------<span class="token operator">|</span> nuxt.js
<span class="token operator">|</span> pages/
---<span class="token operator">|</span> index.vue
<span class="token operator">|</span> nuxt.config.js
</code></pre></div><p>\u7136\u540E\u5728 <code>awesome-ui/nuxt.js</code> \u4E2D\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528 <code>components:dirs</code> \u94A9\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> join <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;pathe&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@nuxt/kit&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtModule</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  hooks<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;components:dirs&quot;</span><span class="token punctuation">(</span>dirs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Add ./components dir to the list</span>
      dirs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;components&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        prefix<span class="token operator">:</span> <span class="token string">&quot;awesome&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5C31\u662F\u8FD9\u6837\uFF01 \u73B0\u5728\u5728\u4F60\u7684\u9879\u76EE\u4E2D, \u4F60\u53EF\u4EE5\u5C06\u4F60\u7684 ui \u5E93\u4F5C\u4E3A Nuxt \u6A21\u5757\u5BFC\u5165\u5230\u4F60\u7684 <code>nuxt.config</code> \u6587\u4EF6\u4E2D:</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  buildModules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;awesome-ui/nuxt&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p>... \u5C31\u53EF\u4EE5\u76F4\u63A5\u5728\u6211\u4EEC\u7684 <code>pages/index.vue</code>\u4E2D\uFF0C\u4F7F\u7528\u6A21\u5757\u7EC4\u4EF6 (\u5E26 <code>awesome-</code> \u524D\u7F00):</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    My <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AwesomeButton</span><span class="token punctuation">&gt;</span></span>UI button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>AwesomeButton</span><span class="token punctuation">&gt;</span></span>!
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>awesome-alert</span><span class="token punctuation">&gt;</span></span>Here&#39;s an alert!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>awesome-alert</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5B83\u4EC5\u5728\u4F7F\u7528\u65F6\u81EA\u52A8\u5BFC\u5165\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u5728\u66F4\u65B0\u4F60\u5728 <code>node_modules/awesome-ui/components/</code> \u7684\u7EC4\u4EF6\u65F6\u652F\u6301\u70ED\u66F4\u65B0\u3002</p>__VP_STATIC_END__`,33),p=[o];function c(l,u,i,d,r,k){return a(),t("div",null,p)}var h=n(e,[["render",c]]);export{m as __pageData,h as default};
