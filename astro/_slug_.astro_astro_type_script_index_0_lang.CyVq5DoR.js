const h="modulepreload",p=function(o){return"https://sharfeedback.github.io/intern/"+o},f={},w=function(l,a,u){let c=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),t=n?.nonce||n?.getAttribute("nonce");c=Promise.allSettled(a.map(r=>{if(r=p(r),r in f)return;f[r]=!0;const i=r.endsWith(".css"),d=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${d}`))return;const e=document.createElement("link");if(e.rel=i?"stylesheet":h,i||(e.as="script"),e.crossOrigin="",e.href=r,t&&e.setAttribute("nonce",t),document.head.appendChild(e),i)return new Promise((m,g)=>{e.addEventListener("load",m),e.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${r}`)))})}))}function s(n){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=n,window.dispatchEvent(t),!t.defaultPrevented)throw n}return c.then(n=>{for(const t of n||[])t.status==="rejected"&&s(t.reason);return l().catch(s)})};function v(o={}){const{immediate:l=!1,onNeedRefresh:a,onOfflineReady:u,onRegistered:c,onRegisteredSW:s,onRegisterError:n}=o;let t,r;const i=async(e=!0)=>{await r};async function d(){if("serviceWorker"in navigator){if(t=await w(async()=>{const{Workbox:e}=await import("./workbox-window.prod.es5.NU22iWMg.js");return{Workbox:e}},[]).then(({Workbox:e})=>new e("https://sharfeedback.github.io/intern/sw.js",{scope:"/",type:"classic"})).catch(e=>{n?.(e)}),!t)return;t.addEventListener("activated",e=>{(e.isUpdate||e.isExternal)&&window.location.reload()}),t.addEventListener("installed",e=>{e.isUpdate||u?.()}),t.register({immediate:l}).then(e=>{s?s("https://sharfeedback.github.io/intern/sw.js",e):c?.(e)}).catch(e=>{n?.(e)})}}return r=d(),i}v({immediate:!0,onRegisteredSW(o){console.log("SW registered: ",o)},onOfflineReady(){console.log("PWA application ready to work offline")}});
