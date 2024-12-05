import{_ as n,c as p,j as i,a as l,G as e,a4 as t,o as h,C as d}from"./chunks/framework.DBf_wRcB.js";const k="/nodejs/nodejs.png",o="/nodejs/linux/linux-01.png",c="/nodejs/linux/linux-02.png",r="/nodejs/linux/linux-03.png",g="/nodejs/linux/linux-04.png",F="/nodejs/linux/linux-05.png",y="/nodejs/linux/linux-06.png",m="/nodejs/linux/linux-07.png",u="/nodejs/linux/linux-08.png",b="/nodejs/linux/linux-09.png",C="/nodejs/linux/linux-10.png",v="/nodejs/linux/linux-11.png",B="/nodejs/linux/linux-12.png",E="/nodejs/win/win-01.png",_="/nodejs/win/win-02.png",x="/nodejs/win/win-03.png",A="/nodejs/win/win-04.png",D="/nodejs/win/win-05.png",j="/nodejs/win/win-06.png",f="/nodejs/win/win-07.png",w="/nodejs/win/win-08.png",z="/nodejs/win/win-09.png",P="/nodejs/win/win-10.png",q="/nodejs/win/win-11.png",S="/nodejs/win/win-12.png",T="/nodejs/win/win-13.png",L="/nodejs/win/win-14.png",N="/nodejs/win/win-15.png",G="/nodejs/win/win-16.png",I="/nodejs/and/and-01.png",O="/nodejs/and/and-02.png",M="/nodejs/and/and-03.png",R="/nodejs/ios/ios-01.png",V="/nodejs/ios/ios-02.png",Z=JSON.parse('{"title":"node.js的安装及使用","description":"","frontmatter":{},"headers":[],"relativePath":"website/nodejs.md","filePath":"website/nodejs.md","lastUpdated":null}'),X={name:"website/nodejs.md"};function U(H,s,K,Y,$,J){const a=d("ArticleMetadata");return h(),p("div",null,[s[0]||(s[0]=i("h1",{id:"node-js的安装及使用",tabindex:"-1"},[l("node.js的安装及使用 "),i("a",{class:"header-anchor",href:"#node-js的安装及使用","aria-label":'Permalink to "node.js的安装及使用"'},"​")],-1)),e(a),s[1]||(s[1]=t('<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>基于Chrome V8引擎的JavaScript脚本语言的运行环境</p><p>npm是其包管理工具</p><p>官网：<a href="https://nodejs.org/zh-cn" target="_blank" rel="noreferrer">https://nodejs.org/zh-cn</a></p><p>仓库：<a href="https://github.com/nodejs/node" target="_blank" rel="noreferrer">https://github.com/nodejs/node</a></p><p><img src="'+k+`" alt="" loading="lazy"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><blockquote><p>如果你安装了宝塔，可直接在软件商店搜 <code>node</code> 安装</p></blockquote><details class="details custom-block"><summary>CentOS安装</summary><p>安装前，使用 <a href="./shell/">shell</a> 工具 连接服务器，查看centos版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看centos版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> centos</span></span></code></pre></div><p><img src="`+o+'" alt="" loading="lazy"></p><p>进入下载页面，选择 <a href="https://nodejs.org/zh-cn/download/prebuilt-binaries" target="_blank" rel="noreferrer">预构建二进制文件</a></p><p>我的系统是CentOS 7，只能选择 <code>v17.9.1</code></p><details class="details custom-block"><summary>为什么不用最新版</summary><p>node.js 18 已不支持 Centos 7 了</p><ul><li><p>centos 7：使用 node.js 18 以下（glibc版本低）</p></li><li><p>CentOS 8：使用 node.js 18 及以上版本</p></li></ul><p>其他版本查找：<a href="https://nodejs.org/dist/" target="_blank" rel="noreferrer">https://nodejs.org/dist/</a></p></details><p><img src="'+c+'" alt="" loading="lazy"></p><p>鼠标右键，将下载链接复制出来，如下</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-x64.tar.xz</span></span></code></pre></div><p><img src="'+r+`" alt="" loading="lazy"></p><p><a href="./shell/">shell</a> 输入命令，进入根目录</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>鼠标右键粘贴！<code>ctrl+v</code> 是不可用的</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> su</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #切换到root帐号</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #进入根目录</span></span></code></pre></div><p><img src="`+g+'" alt="" loading="lazy"></p><p>使用wget命令安装，粘贴刚才的下载链接</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-x64.tar.xz</span></span></code></pre></div><details class="details custom-block"><summary>命令无反应？</summary><p>用 yum 安装一下 wget 就好</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div></details><p><img src="'+F+`" alt="" loading="lazy"></p><p>然后解压，改名那里回车一下就好了</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里的版本号，改成自己下载的，否则无法解压</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-v17.9.1-linux-x64.tar.xz</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#改名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-v17.9.1-linux-x64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-v17.9.1</span></span></code></pre></div><p><img src="`+y+'" alt="" loading="lazy"></p><p>进目录查看，有就代表安装好了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /node-v17.9.1/bin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span></code></pre></div><p><img src="'+m+`" alt="" loading="lazy"></p><p>建立软连接</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /node-v17.9.1/bin/node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /node-v17.9.1/bin/npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/npm</span></span></code></pre></div><p><img src="`+u+`" alt="" loading="lazy"></p><p>重启Xshell，关掉重新打开才生效</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看node版本号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看npm版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><details class="details custom-block"><summary>报错了？</summary><p>让你下对应版本吧，你不听，好了吧，要么换nodejs版本，要么 <a href="https://blog.csdn.net/nilm61/article/details/134266633" target="_blank" rel="noreferrer">参考教程安装GLIBC</a></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libm.so.6:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLIBC_2.27&#39; not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node: /lib64/libstdc++.so.6: version \`GLIBCXX_3.4.20&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libstdc++.so.6: version \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">CXXABI_1.3.9</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39; not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node: /lib64/libstdc++.so.6: version \`GLIBCXX_3.4.21&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> found</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (required </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /lib64/libc.so.6:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GLIBC_2.28&#39; not found (required by node)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node: /lib64/libc.so.6: version \`GLIBC_2.25&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not found (required by node)</span></span></code></pre></div></details><p><img src="`+b+'" alt="" loading="lazy"></p><p>查看目录列表，清理下安装包，就是标红的 <code>node***.tar.xz</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span></code></pre></div><p><img src="'+C+'" alt="" loading="lazy"></p><p>删除node安装包，复制下列命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node-v17.9.1-linux-x64.tar.xz</span></span></code></pre></div><p>删完后，我们再进目录看一下，完美</p><p><img src="'+v+`" alt="" loading="lazy"></p><p>最后建议更换一下国内源 <a href="https://www.npmmirror.com/" target="_blank" rel="noreferrer">阿里云源</a> ，下载文件速度会快很多</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更换阿里云源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#换回默认源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org/</span></span></code></pre></div><p><img src="`+B+'" alt="" loading="lazy"></p></details><details class="details custom-block"><summary>Windows安装</summary><p>安装前，鼠标右键 - 我的电脑 - 属性，查看电脑系统类型</p><p>以我的 <code>64位</code> 操作系统为例</p><p><img src="'+E+'" alt="" loading="lazy"></p><p>进入下载页面 选择 <a href="https://nodejs.org/zh-cn/download/prebuilt-installer" target="_blank" rel="noreferrer">预构建安装程序</a></p><p>选择<code>window</code> <code>x64</code>(自己的电脑系统类型)， <code>LTS</code>（Long-term support，长期维护版）</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>点击下载即可</p><p><img src="'+x+'" alt="" loading="lazy"></p><p>双击打开 <code>.msi</code> 文件安装，别安装在C盘即可</p><p><img src="'+A+'" alt="" loading="lazy"></p><p>直接下一步，什么都不要勾选，直到完成</p><p><img src="'+D+'" alt="" loading="lazy"></p><p>安装好后，我们运行 <code>window键+R</code> 进入 <code>cmd</code> 终端</p><p><img src="'+j+`" alt="" loading="lazy"></p><p>查看一下版本号，有就说明成功了</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p><img src="`+f+`" alt="" loading="lazy"></p><p>最后建议更换一下国内源 <a href="https://www.npmmirror.com/" target="_blank" rel="noreferrer">阿里云源</a> ，下载文件速度会快很多</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更换阿里云源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmmirror.com/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#换回默认源</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://registry.npmjs.org/</span></span></code></pre></div><p><img src="`+w+'" alt="" loading="lazy"></p><p>为方便后续使用，建议更改下全局模块</p><p>在安装目录下创建两个文件夹 <code>node_global</code> 和 <code>node_cache</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>我的安装目录是 <code>D:\\Program Files\\nodejs</code></p><p>请根据自己的来</p></div><p><img src="'+z+`" alt="" loading="lazy"></p><p>打开 <code>cmd</code> 输入下列指令</p><div class="warning custom-block"><p class="custom-block-title">说明</p><p>全程请参照自己的安装目录来修改！！！</p><p>prefix：创建的node_global文件夹所在路径</p><p>cache：创建的node_cache文件夹所在路径</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D:\\Program Files\\nodejs\\node_global&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;D:\\Program Files\\nodejs\\node_cache&quot;</span></span></code></pre></div><p><img src="`+P+'" alt="" loading="lazy"></p><p>此电脑 - 右键 - 属性 - 高级系统设置</p><p><img src="'+q+'" alt="" loading="lazy"></p><p>环境变量 - <code>用户变量</code> - Path - 编辑</p><p><img src="'+S+'" alt="" loading="lazy"></p><p>点 npm 路径 - 编辑，修改为 <code>node_global</code> 的路径后确定</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Program Files\\nodejs\\node_global</span></span></code></pre></div><p><img src="'+T+'" alt="" loading="lazy"></p><p>环境变量 - <code>系统变量</code> - 新建</p><p>变量名为 <code>NODE_PATH</code> ，值如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Program Files\\nodejs\\node_global\\node_modules</span></span></code></pre></div><p><img src="'+L+'" alt="" loading="lazy"></p><p>环境变量 - <code>系统变量</code> - Path - 编辑</p><p>新建，添加node全局文件夹，确定</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>D:\\Program Files\\nodejs\\node_global</span></span></code></pre></div><p><img src="'+N+'" alt="" loading="lazy"></p><p>鼠标右键 - Nodejs文件夹 - 属性</p><p>安全 - 编辑，将所有权限都✔上</p><p><img src="'+G+`" alt="" loading="lazy"></p><p>关掉cmd重新打开，看是否能查询版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div></details><details class="details custom-block"><summary>Android安装</summary><div class="warning custom-block"><p class="custom-block-title">建议</p><p>手机端并不适合开发，不是特别建议使用，除非临时调试</p></div><p>下载 <a href="https://termux.com/cn/" target="_blank" rel="noreferrer">Termux</a> 安装并打开，它是一款安卓终端仿真器和Linux环境应用程序</p><p><img src="`+I+'" alt="" loading="lazy"></p><p>用自带apt管理器，升级系统软件包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">说明</p><ul><li><p>有 [Y/N] 的，都 <code>y</code></p></li><li><p>有 [Y/I/N/O/D/Z] 的，默认 <code>回车</code></p></li></ul></div><p><img src="'+O+`" alt="" loading="lazy"></p><p>用 apt 来安装 nodejs，完成后查看版本</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p><img src="`+M+'" alt="" loading="lazy"></p><p>手机已root的也可以直接使用 <a href="https://mt2.cn/" target="_blank" rel="noreferrer">MT管理器</a>，路径：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/data/data/com.termux/</span></span></code></pre></div></details><details class="details custom-block"><summary>iOS安装</summary><p>在 AppStore 下载并安装 <a href="https://ish.app/" target="_blank" rel="noreferrer">iSH shell</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>它是一款iOS端终端 <a href="https://alpinelinux.org/" target="_blank" rel="noreferrer">Alpine Linux</a> x86系统，采用 musl libc 和 busybox 构建 ，自带apk管理软件包</p><p>注意：由于IOS系统特殊性，只能使用npm，无法升级成yarn/pnpm</p></div><p><img src="'+R+`" alt="" loading="lazy"></p><p>安装前，请更新镜像源和软件包</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更新源索引</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#更新软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span></span></code></pre></div><p>node 和 npm 要分开安装</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>由于系统默认是v3.14，最新的 <a href="https://pkgs.alpinelinux.org/packages?name=nodejs&amp;branch=v3.14" target="_blank" rel="noreferrer">Alpinelinux 中的 nodejs</a> 是 <code>14.21.3</code></p><p>无法使用 <code>yarn</code> 或者 <code>pnpm</code> 命令，只能使用npm</p></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查询版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p><img src="`+V+`" alt="" loading="lazy"></p><p>其他命令，通过 <code>apk –help</code> 命令查看其他包管理命令</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装包名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 包名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#删除包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> del</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 包名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#搜索包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看包信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apk</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span></span></code></pre></div></details><h2 id="pnpm" tabindex="-1">PNPM <a class="header-anchor" href="#pnpm" aria-label="Permalink to &quot;PNPM&quot;">​</a></h2><p>可以利用npm来安装常用的 <code>yarn</code> / <code>pnpm</code> 等</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-PzGyj" id="tab-NMKYPnf" checked><label data-title="pnpm" for="tab-NMKYPnf">pnpm</label><input type="radio" name="group-PzGyj" id="tab-SmuDukn"><label data-title="yarn" for="tab-SmuDukn">yarn</label><input type="radio" name="group-PzGyj" id="tab-CAGf-Tq"><label data-title="bun" for="tab-CAGf-Tq">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装pnpm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看版本号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看版本号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#安装bun</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bun</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看版本号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div></div></div><details class="details custom-block"><summary>windows安装注意事项</summary><p><code>win键</code> + <code>R键</code>，输入 <code>cmd</code> 回车，进入命令命令终端后，再输入命令安装</p><hr><p>win11 如果报错，是因为power shell的安全策略，不允许执行不安全脚本</p><p><code>nrm : 无法加载文件 C:\\Users\\用户\\AppData\\Roaming\\npm\\nrm.ps1，因为在此系统上禁止运行脚本</code></p><p>解决：搜索 <code>power shell</code> 或者 <code>power shell ISE</code> ，管理员方式打开，改成 <code>RemoteSigned</code> 策略组，然后全选A</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#修改策略组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RemoteSigned</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#改回默认策略组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">set-ExecutionPolicy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Default</span></span></code></pre></div><details class="details custom-block"><summary>PowerShell 策略组类型</summary><ul><li><p>Restricted：可以执行单个的命令，但是不能执行脚本</p></li><li><p>AllSigned：允许执行所有具有数字签名的脚本</p></li><li><p>RemoteSigned：当执行从网络上下载的脚本时，需要脚本具有数字签名，否则不会运行这个脚本。如果是在本地创建的脚本则可以直接执行，不要求脚本具有数字签名</p></li><li><p>Unrestricted：允许运行未签名的脚本，会有安全性提示</p></li><li><p>BypassBypass：任何脚本都可以执行，并且不会有安全性提示</p></li><li><p>UndefinedUndefined：没有设置脚本策略，会继承或使用默认的脚本策略</p></li></ul></details></details><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><details class="details custom-block"><summary>输入版本号没反应</summary><p>关掉重新打开，再次查询，没有及时没装好</p></details><details class="details custom-block"><summary>如何卸载</summary><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-uHTKh" id="tab-ci4qdzA" checked><label data-title="pnpm" for="tab-ci4qdzA">pnpm</label><input type="radio" name="group-uHTKh" id="tab-6aVFS-T"><label data-title="yarn" for="tab-6aVFS-T">yarn</label><input type="radio" name="group-uHTKh" id="tab-TLBBDn0"><label data-title="npm" for="tab-TLBBDn0">npm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#pnpm卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#yarn卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> yarn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#npm卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#卸载node</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodejs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div></div></div></details><details class="details custom-block"><summary>三者的关系</summary><p>pnpm &gt; yarn &gt; npm</p></details><details class="details custom-block"><summary>Linux镜像源</summary><p>更换后可以让文件下载快一点</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>* 阿里云源：https://npmmirror.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 华为云源：https://mirrors.huaweicloud.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 兰州大学源：https://mirror.lzu.edu.cn/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 清华大学源：https://mirrors.tuna.tsinghua.edu.cn/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 上海交大源：https://mirror.sjtu.edu.cn/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 腾讯源：https://mirrors.cloud.tencent.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 网易源：https://mirrors.163.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* 中科大USTC：https://mirrors.ustc.edu.cn/</span></span></code></pre></div></details>`,21))])}const Q=n(X,[["render",U]]);export{Z as __pageData,Q as default};
