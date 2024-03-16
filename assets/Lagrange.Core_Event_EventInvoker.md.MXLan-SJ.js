import{_ as t,c as e,o as n,a2 as r}from"./chunks/framework.Be7igsT0.js";const E=JSON.parse('{"title":"事件委托","description":"","frontmatter":{},"headers":[],"relativePath":"Lagrange.Core/Event/EventInvoker.md","filePath":"Lagrange.Core/Event/EventInvoker.md","lastUpdated":1710607240000}'),d={name:"Lagrange.Core/Event/EventInvoker.md"},a=r('<h1 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-label="Permalink to &quot;事件委托&quot;">​</a></h1><p>本节将列举所有的可订阅的事件委托</p><table><thead><tr><th style="text-align:center;">字段</th><th style="text-align:center;">类型</th><th style="text-align:center;">描述</th></tr></thead><tbody><tr><td style="text-align:center;"><code>OnBotOnlineEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;BotOnlineEvent&gt;?</td><td style="text-align:center;">Bot 上线时触发,可用于监控是否登录成功</td></tr><tr><td style="text-align:center;"><code>OnBotOfflineEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;BotOfflineEvent&gt;?</td><td style="text-align:center;">Bot 下线时触发,可用于监控 Bot 是否掉线</td></tr><tr><td style="text-align:center;"><code>OnBotLogEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;BotLogEvent&gt;?</td><td style="text-align:center;">日志产生时触发</td></tr><tr><td style="text-align:center;"><code>OnBotCaptchaEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;BotCaptchaEvent&gt;?</td><td style="text-align:center;">Bot 需要验证码时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupInvitationReceived</code></td><td style="text-align:center;">LagrangeEvent&lt;GroupInvitationEvent&gt;?</td><td style="text-align:center;">Bot 被邀请入群时触发</td></tr><tr><td style="text-align:center;"><code>OnFriendMessageReceived</code></td><td style="text-align:center;">LagrangeEvent&lt;FriendMessageEvent&gt;?</td><td style="text-align:center;">收到私聊消息时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupMessageReceived</code></td><td style="text-align:center;">LagrangeEvent&lt;GroupMessageEvent&gt;?</td><td style="text-align:center;">收到群聊消息时触发</td></tr><tr><td style="text-align:center;"><code>OnTempMessageReceived</code></td><td style="text-align:center;">LagrangeEvent&lt;TempMessageEvent&gt;?</td><td style="text-align:center;">收到群临时消息时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupAdminChangedEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;GroupAdminChangedEvent&gt;?</td><td style="text-align:center;">群管变更时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupMemberIncreaseEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;GroupMemberIncreaseEvent&gt;?</td><td style="text-align:center;">有人入群时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupMemberDecreaseEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;GroupMemberDecreaseEvent&gt;?</td><td style="text-align:center;">有人退群时触发</td></tr><tr><td style="text-align:center;"><code>OnGroupMemberDecreaseEvent</code></td><td style="text-align:center;">LagrangeEvent&lt;FriendRequestEvent&gt;?</td><td style="text-align:center;">有好友申请时触发</td></tr></tbody></table>',3),l=[a];function c(g,o,s,i,v,x){return n(),e("div",null,l)}const p=t(d,[["render",c]]);export{E as __pageData,p as default};
