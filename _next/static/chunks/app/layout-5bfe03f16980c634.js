(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{347:()=>{},1362:(e,t,a)=>{"use strict";a.d(t,{D:()=>c,N:()=>m});var s=a(2115),r=(e,t,a,s,r,n,l,o)=>{let i=document.documentElement,c=["light","dark"];function m(t){var a;(Array.isArray(e)?e:[e]).forEach(e=>{let a="class"===e,s=a&&n?r.map(e=>n[e]||e):r;a?(i.classList.remove(...s),i.classList.add(n&&n[t]?n[t]:t)):i.setAttribute(e,t)}),a=t,o&&c.includes(a)&&(i.style.colorScheme=a)}if(s)m(s);else try{let e=localStorage.getItem(t)||a,s=l&&"system"===e?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":e;m(s)}catch(e){}},n=["light","dark"],l="(prefers-color-scheme: dark)",o=s.createContext(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!=(e=s.useContext(o))?e:i},m=e=>s.useContext(o)?s.createElement(s.Fragment,null,e.children):s.createElement(u,{...e}),d=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:a=!1,enableSystem:r=!0,enableColorScheme:i=!0,storageKey:c="theme",themes:m=d,defaultTheme:u=r?"system":"light",attribute:v="data-theme",value:p,children:g,nonce:S,scriptProps:_}=e,[E,k]=s.useState(()=>y(c,u)),[w,C]=s.useState(()=>"system"===E?b():E),T=p?Object.values(p):m,N=s.useCallback(e=>{let t=e;if(!t)return;"system"===e&&r&&(t=b());let s=p?p[t]:t,l=a?f(S):null,o=document.documentElement,c=e=>{"class"===e?(o.classList.remove(...T),s&&o.classList.add(s)):e.startsWith("data-")&&(s?o.setAttribute(e,s):o.removeAttribute(e))};if(Array.isArray(v)?v.forEach(c):c(v),i){let e=n.includes(u)?u:null,a=n.includes(t)?t:e;o.style.colorScheme=a}null==l||l()},[S]),x=s.useCallback(e=>{let t="function"==typeof e?e(E):e;k(t);try{localStorage.setItem(c,t)}catch(e){}},[E]),L=s.useCallback(e=>{C(b(e)),"system"===E&&r&&!t&&N("system")},[E,t]);s.useEffect(()=>{let e=window.matchMedia(l);return e.addListener(L),L(e),()=>e.removeListener(L)},[L]),s.useEffect(()=>{let e=e=>{e.key===c&&(e.newValue?k(e.newValue):x(u))};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),s.useEffect(()=>{N(null!=t?t:E)},[t,E]);let A=s.useMemo(()=>({theme:E,setTheme:x,forcedTheme:t,resolvedTheme:"system"===E?w:E,themes:r?[...m,"system"]:m,systemTheme:r?w:void 0}),[E,x,t,w,r,m]);return s.createElement(o.Provider,{value:A},s.createElement(h,{forcedTheme:t,storageKey:c,attribute:v,enableSystem:r,enableColorScheme:i,defaultTheme:u,value:p,themes:m,nonce:S,scriptProps:_}),g)},h=s.memo(e=>{let{forcedTheme:t,storageKey:a,attribute:n,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,themes:m,nonce:d,scriptProps:u}=e,h=JSON.stringify([n,a,i,t,m,c,l,o]).slice(1,-1);return s.createElement("script",{...u,suppressHydrationWarning:!0,nonce:"",dangerouslySetInnerHTML:{__html:"(".concat(r.toString(),")(").concat(h,")")}})}),y=(e,t)=>{let a;try{a=localStorage.getItem(e)||void 0}catch(e){}return a||t},f=e=>{let t=document.createElement("style");return e&&t.setAttribute("nonce",e),t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},b=e=>(e||(e=window.matchMedia(l)),e.matches?"dark":"light")},3768:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(5155),r=a(2115),n=a(1362);function l(e){let{children:t,...a}=e;return(0,s.jsx)(n.N,{...a,children:t})}function o(e){let{children:t}=e;return(0,r.useEffect)(()=>{document.body.className="antialiased"},[]),(0,s.jsx)("body",{className:"antialiased",suppressHydrationWarning:!0,children:(0,s.jsx)(l,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:t})})}},4147:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},7367:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,4147,23)),Promise.resolve().then(a.t.bind(a,8489,23)),Promise.resolve().then(a.bind(a,3768)),Promise.resolve().then(a.t.bind(a,347,23))},8489:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[896,441,684,358],()=>t(7367)),_N_E=e.O()}]);