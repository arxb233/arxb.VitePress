import{_ as p,c as s,j as e,a as o,G as r,a4 as i,o as d,C as l}from"./chunks/framework.DBf_wRcB.js";const n="/jd/jd-01.png",c="/jd/jd-02.png",m="/jd/jd-03.png",h="/jd/jd-04.png",u="/jd/jd-05.png",g="/jd/jd-06.png",b="/jd/jd-07.png",_="/jd/jd-08.png",k="/jd/jd-09.png",C=JSON.parse('{"title":"京东商品强制加购","description":"","frontmatter":{},"headers":[],"relativePath":"daily/jd.md","filePath":"daily/jd.md","lastUpdated":null}'),f={name:"daily/jd.md"};function j(y,a,v,x,w,P){const t=l("ArticleMetadata");return d(),s("div",null,[a[0]||(a[0]=e("h1",{id:"京东商品强制加购",tabindex:"-1"},[o("京东商品强制加购 "),e("a",{class:"header-anchor",href:"#京东商品强制加购","aria-label":'Permalink to "京东商品强制加购"'},"​")],-1)),r(t),a[1]||(a[1]=i('<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>适用于无货商品、秒杀商品，当别人都在挤时，你已经进去提交了，也就是常见的BP链接</p><h2 id="登录" tabindex="-1">登录 <a class="header-anchor" href="#登录" aria-label="Permalink to &quot;登录&quot;">​</a></h2><p>我们全程在 <code>微信端</code> 演示，毕竟微信有内置的浏览器</p><p>登陆账号：<a href="https://cart.jd.com" target="_blank" rel="noreferrer">https://cart.jd.com</a></p><p><img src="'+n+'" alt="" loading="lazy"></p><p>我截图了用京东APP扫码登录，成功后会跳转到购物车</p><p><img src="'+c+'" alt="" loading="lazy"></p><p>如果你不想动手，可以看一下实现的基本逻辑</p><p>最后直接使用 <a href="#快捷指令">快捷指令</a> 快速达成</p><h2 id="商品id" tabindex="-1">商品ID <a class="header-anchor" href="#商品id" aria-label="Permalink to &quot;商品ID&quot;">​</a></h2><p>随便找个商品，复制链接，比如：<a href="https://item.m.jd.com/product/100054487281.html?utm_term=CopyURL&amp;utm_user=plusmember&amp;utm_source=iosapp&amp;utm_campaign=t_335139774&amp;utm_medium=appshare&amp;ad_od=share&amp;gx=RnAox25ZYDHey5gSwNk7DC5U&amp;gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc" target="_blank" rel="noreferrer">西门子</a></p><p><img src="'+m+'" alt="" loading="lazy"></p><p>发到微信端，我们需要提取链接中的商品ID，即 <code>product</code> 后面的数字</p><p>比如：<code>100054487281</code></p><p><img src="'+h+'" alt="" loading="lazy"></p><h2 id="技巧" tabindex="-1">技巧 <a class="header-anchor" href="#技巧" aria-label="Permalink to &quot;技巧&quot;">​</a></h2><h3 id="强制加购" tabindex="-1">强制加购 <a class="header-anchor" href="#强制加购" aria-label="Permalink to &quot;强制加购&quot;">​</a></h3><p>提取出商品id后，按如下格式填入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://cart.jd.com/gate.action?ptype=1&amp;pcount=1&amp;pid={商品ID}</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>其中 <code>pcount</code> 是加购的数量，可以自己改</p><p>注：如果限购2件，你改成100件，也只能加购2件</p></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://cart.jd.com/gate.action?ptype=1&amp;pcount=1&amp;pid=100054487281</span></span></code></pre></div><p><img src="'+u+'" alt="" loading="lazy"></p><p>微信点开链接，加自动加购了，在APP端也可以看到</p><p><img src="'+g+'" alt="" loading="lazy"></p><h3 id="闪结bp" tabindex="-1">闪结BP <a class="header-anchor" href="#闪结bp" aria-label="Permalink to &quot;闪结BP&quot;">​</a></h3><p>预售的商品，不能加购，比如：<a href="https://item.m.jd.com/product/10104923384837.html?utm_term=CopyURL&amp;utm_user=plusmember&amp;utm_source=iosapp&amp;utm_campaign=t_335139774&amp;utm_medium=appshare&amp;ad_od=share&amp;gx=RnAox25ZYDHey5gSwNk7DC5U&amp;gxd=RnAokDYLb2CMzJ1BrIEmXRWPmw_ivjT6XjFpOunSC_H8ewWZJI3wZ18Z7RwZ1Oc" target="_blank" rel="noreferrer">BANDAI：SHF假面骑士空我</a></p><p><img src="'+b+'" alt="" loading="lazy"></p><p>用同样的方法，提取链接中的商品ID，却无法加购</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>我们可以通过跳转付款页面，直接提交，将商品ID按如下格式组合：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://trade.m.jd.com/pay?booking=1&amp;type=0&amp;commlist={商品ID},,{商品数量},{商品ID},{商品数量},0,0</span></span></code></pre></div><p>改好后，我的链接是这样的</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://trade.m.jd.com/pay?booking=1&amp;type=0&amp;commlist=10104923384837,,1,10104923384837,1,0,0</span></span></code></pre></div><p><img src="'+k+'" alt="" loading="lazy"></p><h2 id="快捷指令" tabindex="-1">快捷指令 <a class="header-anchor" href="#快捷指令" aria-label="Permalink to &quot;快捷指令&quot;">​</a></h2><ul><li><p><a href="https://www.icloud.com/shortcuts/89c1f19612284b23ad4b668e56468039" target="_blank" rel="noreferrer">快捷指令：JD加购BP二合一</a></p></li><li><p><a href="https://www.icloud.com/shortcuts/3d1e706b4deb40c5a21a5f787f672320" target="_blank" rel="noreferrer">JD商品ID 反查商品</a></p></li><li><p><a href="https://www.icloud.com/shortcuts/8efeb9d31c4d4f64948dd0fef9b568d2" target="_blank" rel="noreferrer">某东cookie提取</a></p></li></ul>',37))])}const q=p(f,[["render",j]]);export{C as __pageData,q as default};
