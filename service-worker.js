if(!self.define){let e,i={};const c=(c,r)=>(c=new URL(c+".js",r).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,a)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let s={};const n=e=>c(e,d),f={module:{uri:d},exports:s,require:n};i[d]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-bc77d2d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"cb8d6a1b63154b1852a32169e6ed5518"},{url:"about/index.html",revision:"68637e5e7d608062ffaa8c066dbc0e79"},{url:"archives/2021/08/index.html",revision:"9f9be82e3bbfb9d0e14c2860ded20787"},{url:"archives/2021/09/index.html",revision:"5c1e1c4cbfc42eda1f24697efd6eaae2"},{url:"archives/2021/10/index.html",revision:"747311f75e0152f94e4a1a9b072bb201"},{url:"archives/2021/index.html",revision:"6e7d8fb7cb8e069d843ee376f740a0de"},{url:"archives/index.html",revision:"0db72fd1355cfa435cdf0b1137c556a9"},{url:"categories/index.html",revision:"21472ae4b5c5aef562df3c205251e16a"},{url:"categories/学习记录/index.html",revision:"d89be60cfd06f13d698b4b8c2063a077"},{url:"categories/干货分享/index.html",revision:"3d2d2f6940d4aa59359739587daacdfa"},{url:"css/custom.css",revision:"65097da4d58a39431540907e281cdcbe"},{url:"css/index.css",revision:"ee35a5a6f08fa509f5bb91cbda093f9b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"envelope/index.html",revision:"02a8b2adc14b9c4802b7ffcfa0c4213b"},{url:"gallery/genshin/index.html",revision:"cea72be6906770b87ef08569a1892ce7"},{url:"gallery/index.html",revision:"fa850d1c3cd5009af7f853ab80b1bcca"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/alipay.png",revision:"70b9791c6d071c8087e77b92b22ef411"},{url:"img/Avatar.webp",revision:"0563d45b120d420e93ea9fa9257d3c4b"},{url:"img/cat.svg",revision:"0902fcb48297a90b015f9d196ba7abcb"},{url:"img/CDN-jsDelivr.svg",revision:"b40efd6c0e10a7caba084c711d76e310"},{url:"img/CDN-upyun.svg",revision:"952c4f1a40da39dc5926e66935e425f1"},{url:"img/CDN-Webify.svg",revision:"a9560a2963c3aed9e24764ed677b267b"},{url:"img/Copyright.svg",revision:"21bc4ace456f09ac922e8e0b30d0b181"},{url:"img/favicon.png",revision:"0f452e11dac750efb7bb9f4edccb6eaa"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/Hosted-Vercel.svg",revision:"1bd6a933dce43945d6433f771d9144ab"},{url:"img/Source-Github.svg",revision:"9c8f1e77335efac2ba2bee8c7916efba"},{url:"img/wechat.png",revision:"50de00565b58ac5a18c3330084bfce4a"},{url:"img/萌ICP备.svg",revision:"814d256685bb91a4010f6c2d6e225435"},{url:"img/赣ICP备.svg",revision:"ae097f35507c5ea06854b73b18e07033"},{url:"index.html",revision:"692c17f128615bb4d8d0ae6fe045a9fc"},{url:"js/kernel.js",revision:"17997c8c456815bf9ad9ecd8b8cf2ebe"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/zodiac.js",revision:"2fc5c520a8ee5fd98161edc3cdf2224c"},{url:"kernel.html",revision:"a59923348a04930c288357628e497b5e"},{url:"link/index.html",revision:"be6fa6d89e01e6bafab9bf05e4f75c0b"},{url:"posts/df45ex96/index.html",revision:"3edf7a2906211e85761c62619a0b70cf"},{url:"posts/e464ba8a/index.html",revision:"f27c01f00cebf443702d6e97fd023026"},{url:"posts/e7egqkx5/index.html",revision:"81c958c45a8f5e183caa7d5f6cf44072"},{url:"posts/ef9d5c6d/index.html",revision:"ffcb65c4b04915e00e7c0a8d6074a152"},{url:"posts/erp8skg8/index.html",revision:"11443ecb99c2f7d94abe646264f0c193"},{url:"posts/wk45fsw3/index.html",revision:"e5eb9a321c64ac4eacfeab04117d5c12"},{url:"tags/Docker/index.html",revision:"aff7adf5e46d1bb6fac345503171f19f"},{url:"tags/Github/index.html",revision:"b2b102318eb6c0ef82d3109e21a8e560"},{url:"tags/Hexo/index.html",revision:"703f314096857a99807d15dc7b62eff6"},{url:"tags/index.html",revision:"04a69492e43c312ef6e401bb9f01a69a"},{url:"tags/Markdown/index.html",revision:"783192b8ad9afbc0c210fd0cdd180c08"},{url:"tags/网易云音乐/index.html",revision:"ec8204c3d9ab81c884052933c8a427ad"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));