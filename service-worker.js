if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let s={};const n=e=>c(e,a),f={module:{uri:a},exports:s,require:n};i[a]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-b77dd8d1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"438e24a22cea4f481d53eda12eae00d2"},{url:"about/index.html",revision:"faee3df2bb1d816724fa91243312c9e1"},{url:"archives/2021/08/index.html",revision:"c67cc1ccd4c10efa2fe115bfb1813b6a"},{url:"archives/2021/09/index.html",revision:"3ffa659c3d859fc72b0c96254b416d08"},{url:"archives/2021/10/index.html",revision:"ae89415263cbd7e063e914952f646e56"},{url:"archives/2021/index.html",revision:"6278a4631052250811a8a2a7db7b396d"},{url:"archives/2022/04/index.html",revision:"49675ef7e8f9189a7c86b0595845affa"},{url:"archives/2022/index.html",revision:"1cc241d77615701eac41c2c04afe9b0c"},{url:"archives/index.html",revision:"a24951a7d82f86995b2d21b9f3710461"},{url:"categories/index.html",revision:"96ac21af6ac6c0eb92b075121fec4552"},{url:"categories/学习记录/index.html",revision:"70118e69028738a9b56464e25841d440"},{url:"categories/干货分享/index.html",revision:"f55484ae40bed9a29afe4b6e18e1d0e0"},{url:"css/custom.css",revision:"65097da4d58a39431540907e281cdcbe"},{url:"css/index.css",revision:"8bc8646d88b23944171f0d48feadce3c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"envelope/index.html",revision:"416a8a653239cc71e407dd752b8cb4ba"},{url:"gallery/genshin/index.html",revision:"a01b06ab6f7543f77218ee84393e3838"},{url:"gallery/index.html",revision:"c88f0fe78290637127953b619cf7ddbb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.png",revision:"70b9791c6d071c8087e77b92b22ef411"},{url:"img/Avatar.webp",revision:"0563d45b120d420e93ea9fa9257d3c4b"},{url:"img/cat.svg",revision:"0902fcb48297a90b015f9d196ba7abcb"},{url:"img/CDN-jsDelivr.svg",revision:"b40efd6c0e10a7caba084c711d76e310"},{url:"img/CDN-upyun.svg",revision:"952c4f1a40da39dc5926e66935e425f1"},{url:"img/CDN-Webify.svg",revision:"a9560a2963c3aed9e24764ed677b267b"},{url:"img/Copyright.svg",revision:"21bc4ace456f09ac922e8e0b30d0b181"},{url:"img/favicon.png",revision:"0f452e11dac750efb7bb9f4edccb6eaa"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Hosted-Vercel.svg",revision:"1bd6a933dce43945d6433f771d9144ab"},{url:"img/Source-Github.svg",revision:"9c8f1e77335efac2ba2bee8c7916efba"},{url:"img/wechat.png",revision:"50de00565b58ac5a18c3330084bfce4a"},{url:"img/萌ICP备.svg",revision:"814d256685bb91a4010f6c2d6e225435"},{url:"img/赣ICP备.svg",revision:"ae097f35507c5ea06854b73b18e07033"},{url:"index.html",revision:"355016b6b2650ce0b5de5e35c7738cc7"},{url:"js/kernel.js",revision:"17997c8c456815bf9ad9ecd8b8cf2ebe"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/zodiac.js",revision:"2fc5c520a8ee5fd98161edc3cdf2224c"},{url:"kernel.html",revision:"a59923348a04930c288357628e497b5e"},{url:"link/index.html",revision:"de6f2a693b081a5de54edc9ec3ef7e0e"},{url:"posts/8uw7vea5/index.html",revision:"0f426ca40badb73dfc81645d6f459db1"},{url:"posts/df45ex96/index.html",revision:"52f18d17bb6ed7d1933484c2670a40e6"},{url:"posts/e464ba8a/index.html",revision:"1de53052c9d4b442c851fa5f6f437dfe"},{url:"posts/e7egqkx5/index.html",revision:"9f62383f448851a374da8ff41276aeb4"},{url:"posts/ef9d5c6d/index.html",revision:"c27f978ff5d2efd28c6439cddcecca3a"},{url:"posts/erp8skg8/index.html",revision:"afca22c380bc3228da24ffd023a54dcf"},{url:"posts/wk45fsw3/index.html",revision:"ddbe18c587a4c2bb7fa83baf82b51c89"},{url:"tags/Docker/index.html",revision:"42ccbafa39bc5bdf2f9031d3350ec9c4"},{url:"tags/Github/index.html",revision:"f2501eb591f33c68b59fcdb654f68d86"},{url:"tags/Hexo/index.html",revision:"8bb465de325b5304e9fea466dffc23ba"},{url:"tags/index.html",revision:"fe9581e836bf698d3bc49c712a7bcd5d"},{url:"tags/Markdown/index.html",revision:"12999a66cd6400490dfaab45f4292a51"},{url:"tags/消息推送/index.html",revision:"a5c0d7e0ed1069446ce3cc536ee567bd"},{url:"tags/私有化/index.html",revision:"e004c1802f72d7ba6b4404b3e46eff0e"},{url:"tags/网易云音乐/index.html",revision:"dfc9c9bbed59d60981598dadb19299fe"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));