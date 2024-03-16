import{_ as t,c as e,o as s,a2 as i}from"./chunks/framework.Be7igsT0.js";const y=JSON.parse('{"title":"创建 Bot 实例","description":"","frontmatter":{},"headers":[],"relativePath":"Lagrange.Core/Start/CreateBot.md","filePath":"Lagrange.Core/Start/CreateBot.md","lastUpdated":1710607240000}'),a={name:"Lagrange.Core/Start/CreateBot.md"},n=i(`<h1 id="创建-bot-实例" tabindex="-1">创建 Bot 实例 <a class="header-anchor" href="#创建-bot-实例" aria-label="Permalink to &quot;创建 Bot 实例&quot;">​</a></h1><h2 id="botcontext-上下文类" tabindex="-1">BotContext 上下文类 <a class="header-anchor" href="#botcontext-上下文类" aria-label="Permalink to &quot;BotContext 上下文类&quot;">​</a></h2><p>BotContext 是 Lagrange.Core 的核心实例, Event, Logger, Send 等操作都需要由该实例完成</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>Invoker</code></td><td style="text-align:center;">EventInvoker</td><td style="text-align:center;">所有 Event 的集合,用于订阅并处理消息</td></tr><tr><td style="text-align:center;"><code>BotUin</code></td><td style="text-align:center;">uint</td><td style="text-align:center;">登陆的账号</td></tr><tr><td style="text-align:center;"><code>BotName</code></td><td style="text-align:center;">string</td><td style="text-align:center;">登陆账号的昵称</td></tr></tbody></table><p>BotContext 的构造需要由 BotFactory 工厂类创建, 其本身的构造函数私有化</p><p>BotFactory 需要 BotConfig, DeviceInfo, KeyStore 作为参数, 返回 BotContext 实例</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> BotFactory.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BotConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), _deviceInfo, _keyStore);</span></span></code></pre></div><h2 id="botconfig-配置类" tabindex="-1">BotConfig 配置类 <a class="header-anchor" href="#botconfig-配置类" aria-label="Permalink to &quot;BotConfig 配置类&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>Protocol</code></td><td style="text-align:center;">Protocols</td><td style="text-align:center;">协议平台,默认为 <code>Linux</code></td></tr><tr><td style="text-align:center;"><code>AutoReconnect</code></td><td style="text-align:center;">bool</td><td style="text-align:center;">自动重连,默认为 <code>true</code></td></tr><tr><td style="text-align:center;"><code>UseIPv6Network</code></td><td style="text-align:center;">bool</td><td style="text-align:center;">是否使用 IPv6, 默认为 <code>false</code></td></tr><tr><td style="text-align:center;"><code>GetOptimumServer</code></td><td style="text-align:center;">bool</td><td style="text-align:center;">自动使用链接状态最优的服务器, 默认为 <code>true</code></td></tr><tr><td style="text-align:center;"><code>CustomSignProvider</code></td><td style="text-align:center;">SignProvider?</td><td style="text-align:center;">自定义签名服务器, 无签名可能导致无法登陆</td></tr></tbody></table><h2 id="botdeviceinfo-设备信息类" tabindex="-1">BotDeviceInfo 设备信息类 <a class="header-anchor" href="#botdeviceinfo-设备信息类" aria-label="Permalink to &quot;BotDeviceInfo 设备信息类&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>Guid</code></td><td style="text-align:center;">Guid</td><td style="text-align:center;">全局唯一标识符, 可为任意</td></tr><tr><td style="text-align:center;"><code>MacAddress</code></td><td style="text-align:center;">byte[]</td><td style="text-align:center;">设备 MAC 地址, 6 位长 <code>byte[]</code></td></tr><tr><td style="text-align:center;"><code>DeviceName</code></td><td style="text-align:center;">string</td><td style="text-align:center;">设备名称, 可为任意</td></tr><tr><td style="text-align:center;"><code>SystemKernel</code></td><td style="text-align:center;">string</td><td style="text-align:center;">系统内核, 固定为 <code>Windows 10.0.19042</code>, 可能会随着默认构造方法修改</td></tr><tr><td style="text-align:center;"><code>KernelVersion</code></td><td style="text-align:center;">string</td><td style="text-align:center;">内核版本号, 同系统内核</td></tr></tbody></table><p>手动创建示例:</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">private</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BotDeviceInfo</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _deviceInfo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Guid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Guid.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NewGuid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    MacAddress </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GenRandomBytes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    DeviceName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> $&quot;Lagrange-52D02F&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    SystemKernel </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Windows 10.0.19042&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    KernelVersion </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;10.0.19042.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//手动创建设备信息</span></span></code></pre></div><h2 id="botkeystore-密钥存储类" tabindex="-1">BotKeyStore 密钥存储类 <a class="header-anchor" href="#botkeystore-密钥存储类" aria-label="Permalink to &quot;BotKeyStore 密钥存储类&quot;">​</a></h2><p>由序列化现有 KeyStore 创建, 或由初始构造方法自动创建, 登陆成功后可使用</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_keyStore </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bot.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UpdateKeystore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p>更新获取 KeyStore 序列化至本地存储,方便下次快速登陆</p>`,17),l=[n];function d(r,o,h,c,p,k){return s(),e("div",null,l)}const E=t(a,[["render",d]]);export{y as __pageData,E as default};
