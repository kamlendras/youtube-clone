if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),l={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>l[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/00.svg",revision:"661c2de7ce368c5922f92d3e580291f2"},{url:"/11.jpeg",revision:"0a1dfb4d520dbd842de1764aae2b3aff"},{url:"/111.webp",revision:"8962fdc40bb29958a556df5915b7020f"},{url:"/12.jpeg",revision:"e9ef319a511ee874be8d384a130337e9"},{url:"/120.png",revision:"b7ebf8d7e63d2cbe582a9b7f97c98093"},{url:"/123.webp",revision:"62b37062ec7cb262c05348984881294c"},{url:"/13.jpeg",revision:"c6705df468ee2b52125382b8979d3b87"},{url:"/14.jpeg",revision:"d03b57d3c7c2b893ebe021328350aaf2"},{url:"/15.png",revision:"5226330f55b83baf351d3f5227045cd2"},{url:"/16.jpeg",revision:"af70140936a9ada2304918f7d3416b77"},{url:"/456.webp",revision:"e6507af809568b069f80d7807b383548"},{url:"/60.png",revision:"35f13bc4acb08adb84d0a4bb44899790"},{url:"/Figma.svg",revision:"e8d8017556c4365951ffcb05a36099f8"},{url:"/Mask Group.svg",revision:"4b5eca72cc626b5f51a3bd72af5d6d4d"},{url:"/Mask.png",revision:"c4b77b159eaa4296c57df3c32039d3d1"},{url:"/Mask.svg",revision:"497e17cc4b326e7c9be477a807bfcaab"},{url:"/_next/server/pages/_middleware.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/_lKet5HhMJPh58RL_ql_Q/_buildManifest.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/_lKet5HhMJPh58RL_ql_Q/_middlewareManifest.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/_lKet5HhMJPh58RL_ql_Q/_ssgManifest.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/1354-99576924b4a5daa0.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/1618-5e3a74ea0d10e8df.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/2089-16dd73a88585cb06.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/2132-3abe9bf9e0c24849.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/2662-755087bea206327b.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/2837-e431bd01d53b0643.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/313-f9f082018a261034.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3153-9a9e383ac7e4141b.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3174-7f32e60f202b077d.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3215-bf0583c1ec4d9a42.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3289-5b79cf6f9f5466e9.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3429-cfb1b1576836afda.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/3984-d7fc5ba39be5b2a0.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/4048-85e7c10cdaf359a9.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/4652-db67e2c50768e535.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/5361-81a91184e8e4a953.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/5416-d80f588830c5f291.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/5754-d9b5f64a974eeab7.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/6028-b87c3204a9416b08.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/6377-e38a3e7f8132532c.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/7112840a-6f06f3b5a704d931.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/7788-aadee056160637e4.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/8193-81a6e56e911b6bda.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/8377-c8750a47ee04388a.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/8533-96bc9b6bddd1f3de.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/8549-b2f03ff892f10111.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/93296cb7-c9af8b236d85e8d5.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/9443-6b3c1f50255662ba.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/9703-5037c7bfa49f4af1.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/framework-47503b8bb4de6bb8.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/main-1841194ef0e8db17.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/404-7605ab010002794f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Ask-ccc33ce5d1900a82.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Bookmarks-daa4eece830cc87a.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Code-6a2d8f96fd15323a.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses-73120f13547b1e64.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Android-Development-43923e4548e6d07a.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Basic-Python-Programs-f478d96238e18c6f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/C++-Tutorials-c793b00253984362.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/C-Language-fef429d09f307977.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/CSS-571cf5c15b02320d.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Complete-Git-32e5c9cd45487f6d.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Data-Structures-and-Algorithms-Course-e42dbd7879304eaf.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Figma-34c43bd0a6ea872c.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/HTML-0e5500cfb358a580.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Java-ec430c5a55673cad.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/JavaScript-8eac56722dd36624.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Machine-Learning-80be240ba1d666d3.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/PHP-Tutorials-a1d6454db3f19376.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Python-7caddaa5c13caced.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Python-Django-480c5354936906cd.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Python-GUI-Tkinter-88880a78b26602ab.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Python-Game-Development-f0db2d17fcb51563.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/React-Js-8b08bba0aed4f571.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/React-Native-2b7c27650bcd0edc.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Web-Development-7d36572cb569cf24.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Courses/Web-Development-Using-Flask-and-Python-c89a8b0d484418a3.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Explore-52c737225f568010.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/Favorites-8cfb3c03e85db57f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/_app-df279bd5cedaf1ed.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/_error-785557186902809b.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/about-39766699effdcb20.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/account-355d6b757240b4ff.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/community-9d763f8ace1337f8.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/index-81d5bee2be3b8eac.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news-d7edcb2d7a02a26f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/NSAT-e2e9168977057cd2.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/Right-to-Code-8577172876af8643.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/Unemployment-5d523af002b08ff3.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/We-hire-without-degree-73e30177f5549113.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/carbon-neutral-213da251e4897be3.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/learning-d8d7fcccc0784b33.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/news/no-meat-policy-922fc37f80324e82.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/post-0b0e8ba62895b42f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/signin-4f1259426ecb8c5f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/pages/signin/Recover-b5841d07e0b05667.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/webpack-2fb9ef688ed2915b.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/chunks/webpack-middleware-2fb9ef688ed2915b.js",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/0128e6a79be6d1c9.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/7a3ccf44e7b00cec.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/8c5100767bc01a9a.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/a8b0f3a028055b3f.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/cf0cd9b124de69fa.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/dfd4fdb497fb3c0e.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/e0d5132ac0b06210.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/_next/static/css/f3752d368d45e37d.css",revision:"_lKet5HhMJPh58RL_ql_Q"},{url:"/a1.webp",revision:"c243ae8a98cad3356da79e2b6dfcb923"},{url:"/answer.png",revision:"2caa51ed8e9400085962ff1580d429b8"},{url:"/awards (1).png",revision:"60bf972321d7fba7535249bee9daa74b"},{url:"/book.svg",revision:"008bc06f670f1e861763b84108890ac8"},{url:"/bookmark.svg",revision:"9d6b15e542c65807d232affeadc53670"},{url:"/brush-teeth.png",revision:"1d00a4a7ded5dee9ac4b11d40f58254b"},{url:"/bulb.png",revision:"523fbfcb94b095459824395163d6cd24"},{url:"/businessman.png",revision:"7b1a81dbfc9b2a6b80a0efec06f4404c"},{url:"/cat.jpg",revision:"0a117281e2b34d843d7572d9cec9f601"},{url:"/cat.webp",revision:"39cdeaa4f737a1be86a8ce650b09854d"},{url:"/certification.png",revision:"554507e34b27814dff2ca17d2426f90a"},{url:"/cf.svg",revision:"81d37bd67518e5019307a14c95698c85"},{url:"/chat.png",revision:"291f7776f74283e35f3796b4b873059a"},{url:"/coding-language.png",revision:"674759167b1c9e957d90bc29e36b3c45"},{url:"/courses (1).png",revision:"93ad1744e51485f251d887d386cb2814"},{url:"/courses.png",revision:"bb019ec93bca0b2b76700da67b395f29"},{url:"/courseslogo.jpeg",revision:"f83161642fcb42dc52724e1a83f35d8e"},{url:"/face.ico",revision:"8cddca427dae9b925e73432f8733e05a"},{url:"/facebook.svg",revision:"008bc06f670f1e861763b84108890ac8"},{url:"/favicon.ico",revision:"25995b9f4f6be42a16ca17669e4c1694"},{url:"/google.svg",revision:"10da34f83d25850ac68bbed5665868f8"},{url:"/heart.svg",revision:"47156b482ac045da83ba0fbc0b026fa6"},{url:"/icon-192x192.png",revision:"8df437472b22af6ef3e1dcc6bf52e23e"},{url:"/icon-256x256.png",revision:"cbfe534e4fd6132be2a7fb43dbf2161d"},{url:"/icon-384x384.png",revision:"1360eb14a3812234db85e741672ccb93"},{url:"/icon-512x512.png",revision:"dd78c4c6a528a65ec6e1596f00cd689f"},{url:"/ideas.png",revision:"6bf3ffa223e0364329a6e661c43988a0"},{url:"/index.html",revision:"aa177ade85d80c82ffe1c55b98cfc673"},{url:"/internet-explorer.png",revision:"7a5091b5719fd1a75750c40ad12153c3"},{url:"/learn1k.png",revision:"589a03e6e8261ae3bf796142a952a1e2"},{url:"/learning.png",revision:"d414b38ad11713eebab0284a8e168a47"},{url:"/logo.png",revision:"246ec82a988f747269c5c98ab10d9523"},{url:"/logo.svg",revision:"74c3d6fd1460935876824ec675ef33fa"},{url:"/logo2.jpeg",revision:"cd7117ed25b2780ef4d0f9d5ea60b79b"},{url:"/logo3.jpeg",revision:"029aabc2a0558e502d5b8bb15980af89"},{url:"/logoxl.jpeg",revision:"d0fb208f9b3a364bcf2c79312c23b40d"},{url:"/manifest.json",revision:"20a637baf74609c7d44c444d346d894e"},{url:"/mess.svg",revision:"1ca4f7ec5b9156427b5e7d8287e7d57d"},{url:"/messages.png",revision:"70ceefa84e91eda78e3ef4e4a97f923c"},{url:"/police.png",revision:"7bffca5ef9a8b6fec0c578d4d256bf00"},{url:"/profile.png",revision:"055a91979264664a1ee12b9453610d82"},{url:"/quiz.png",revision:"91d2c9c256b1b89d174a5e93a329a59a"},{url:"/r.gif",revision:"259ac15be64136a17f14ab97ae0be939"},{url:"/robot.gif",revision:"c612b4a83d724f8320228f4b588e4264"},{url:"/robot.png",revision:"e072736566ecb183dd77dd64edee7c76"},{url:"/rr.gif",revision:"86922e942855f5fd669a8f23146e2222"},{url:"/rrr.gif",revision:"489586f5319305066e61279402c51216"},{url:"/storytelling.png",revision:"79e278d8f4165c5595accf31eb321d60"},{url:"/teach.png",revision:"8ca242f5a4668f3109d6dd3d88b16491"},{url:"/trending.png",revision:"49119f88d7777c1017b4cadba732ce90"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
