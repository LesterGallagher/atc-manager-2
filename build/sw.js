"use strict";var precacheConfig=[["assets/bg.jpg","53d73385d296b3c331bd311d4dfcb417"],["assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["assets/floppy.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/icon.png","dc7c6e5dac6587e04a7ad8e8844766a7"],["assets/images/meta-icons/android-chrome-192x192.png","974bf8bd36ee133c5379a9a8fa58be95"],["assets/images/meta-icons/android-chrome-512x512.png","7bb26e8f5212e4780d85e787baebd9c1"],["assets/images/meta-icons/apple-touch-icon.png","1b20ef3b3740cb64b60990aff8d687dc"],["assets/images/meta-icons/favicon-16x16.png","30d22cd47d27ca6e7f22db4c193ed214"],["assets/images/meta-icons/favicon-32x32.png","dd34dacc20bf1d9f19cb2c713d152c68"],["assets/images/meta-icons/favicon.ico","e28ed70b5e4e170513cb2acfa6e28a4a"],["assets/images/meta-icons/mstile-150x150.png","f537c1432a19c2b096bde64ff79d7bb0"],["assets/images/meta-icons/safari-pinned-tab.svg","fb0faba605c1f31a1f21a89bff7c721a"],["assets/maps/default.txt","32c25d9ef377c5fc588424aa37ca1d16"],["assets/maps/heatrow.txt","a2f24ff6943d0d714c5544c313f7a842"],["assets/maps/schiphol.txt","78a46e86d6c49c1e6ca7963a2a810e4f"],["bundle.f096f.js","d3c80c005629ecd781b75648d2f713eb"],["favicon.ico","53ac170e970ad034a55ee15ce198708c"],["index.html","f1f2251b41a40d7f4ee8ccad59fefbf2"],["manifest.json","a4bba17e74c222f9d910ad2a17139ca7"],["style.999ab.css","74fab350e15c954f09815a23751ee2be"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,!1);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});