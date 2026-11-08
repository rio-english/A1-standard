/* Rio English: lets the site be installed as an app; shows a friendly page when offline */
self.addEventListener('install',function(){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){if(e.request.mode!=='navigate')return;
 e.respondWith(fetch(e.request).catch(function(){return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="font:18px/1.6 system-ui,sans-serif;padding:40px 24px;background:#F4F2EA;color:#1C2541"><h2>📕 没有网络</h2><p>连上网络后再打开 Rio English。</p></body>',{headers:{'Content-Type':'text/html; charset=utf-8'}})}))});
