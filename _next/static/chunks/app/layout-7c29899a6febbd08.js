(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{9573:function(e,n,t){Promise.resolve().then(t.t.bind(t,6440,23)),Promise.resolve().then(t.t.bind(t,846,23)),Promise.resolve().then(t.t.bind(t,4474,23)),Promise.resolve().then(t.t.bind(t,4691,23)),Promise.resolve().then(t.t.bind(t,2384,23)),Promise.resolve().then(t.t.bind(t,5052,23)),Promise.resolve().then(t.bind(t,9373)),Promise.resolve().then(t.bind(t,4661)),Promise.resolve().then(t.bind(t,5753)),Promise.resolve().then(t.bind(t,2718))},9373:function(e,n,t){"use strict";t.r(n),t.d(n,{MenuIcon:function(){return r}});var s=t(8903);function r(){return(0,s.jsxs)("div",{className:"icon menu-icon",onClick:()=>{let e=document.getElementById("$root");e&&e.classList.toggle("sidebar-on")},children:[(0,s.jsx)("div",{className:"menu-bar1"}),(0,s.jsx)("div",{className:"menu-bar2"}),(0,s.jsx)("div",{className:"menu-bar3"})]})}},4661:function(e,n,t){"use strict";t.r(n),t.d(n,{ThemeIcon:function(){return c}});var s=t(8903),r=t(617);let i=["rust-navy","zf-honey"];/**
 * @source https://github.com/microsoft/vscode-codicons/
 * @copyright Creative Commons Attribution 4.0 International
 */function o(){return(0,s.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 1.003a7 7 0 0 0-7 7v.43c.09 1.51 1.91 1.79 3 .7a1.87 1.87 0 0 1 2.64 2.64c-1.1 1.16-.79 3.07.8 3.2h.6a7 7 0 1 0 0-14l-.04.03zm0 13h-.52a.58.58 0 0 1-.36-.14.56.56 0 0 1-.15-.3 1.24 1.24 0 0 1 .35-1.08 2.87 2.87 0 0 0 0-4 2.87 2.87 0 0 0-4.06 0 1 1 0 0 1-.9.34.41.41 0 0 1-.22-.12.42.42 0 0 1-.1-.29v-.37a6 6 0 1 1 6 6l-.04-.04zM9 3.997a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 7.007a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-7-5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm7-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"})})}function c(){let[e,n]=r.useState(1);return r.useEffect(()=>{let e=document.getElementById("$root");for(let t=0;t<i.length;++t)if(null==e?void 0:e.classList.contains(i[t])){n(t);break}},[]),(0,s.jsx)("div",{className:"icon",onClick:()=>{let t=(e+1)%i.length,s=document.getElementById("$root");null==s||s.classList.replace(i[e],i[t]),n(t)},children:(0,s.jsx)(o,{})})}},5753:function(e,n,t){"use strict";t.r(n),t.d(n,{Graph:function(){return l}});var s=t(8903),r=t(617);t(7507);var i=t(8217),o=t(2848),c=t(2718);function l(e){let{graph:n}=e,t=r.useContext(c.SanContext),l=r.useRef(null),a=new i.xsS,u=new i.cPb(75,1,.01,10);u.position.z=2;let d=n.position.data,h=n.indices,f=0;for(let e=0;e<h.length;++e)h[e]>f&&(f=h[e]);f+=1;let v=d.length/f,m=d.length/v,p=new Float32Array(3*m);if(2==v)for(let e=0;e<m;++e){let n=2*e,t=3*e;p[t]=d[n],p[t+1]=d[n+1]}else for(let e=0;e<m;++e){let n=e*v,t=3*e;p[t]=d[n],p[t+1]=d[n+1],p[t+2]=d[n+2]}let w=new i.TlE(p,3),b=new i.u9r;b.setAttribute("position",w),b.setIndex(n.indices);let g=new i.nls({color:14362487}),x=new i.ejS(b,g);return a.add(x),r.useEffect(()=>{let e=new o.z(u,l.current);e.enableZoom=!1,e.enablePan=!1,e.autoRotate=!0,e.autoRotateSpeed=1;let s=Date.now(),r=new c.SceneInfo(l.current,a,u,()=>{let n=Date.now();e.update((n-s)/1e3),s=n});return t.add(r),()=>{console.log("Removing ".concat(n.slug," Three Elem")),e.dispose(),b.dispose(),g.dispose(),r.keep=!1}}),(0,s.jsx)("canvas",{className:"graph",ref:l})}},2718:function(e,n,t){"use strict";t.r(n),t.d(n,{SanContext:function(){return u},SanElem:function(){return l},SceneElem:function(){return a},SceneInfo:function(){return o}});var s=t(8903),r=t(8217),i=t(617);class o{update(){this.update_fn&&this.update_fn()}constructor(e,n,t,s){this.scene=new r.xsS,this.camera=new r.cPb,this.keep=!0,this.html=e,this.scene=n,this.camera=t,this.update_fn=s}}class c{renderSceneInfo(e){var n,t,s;let{left:r,right:i,top:o,bottom:c,width:l,height:a}=e.html.getBoundingClientRect(),u=this.canvas.getBoundingClientRect(),d=u.height,h=u.width;if(c<0||o>d||i<0||r>h)return;let f=d-c,v=e.camera;v.aspect=l/a,v.updateProjectionMatrix(),e.update&&e.update(),null===(n=this.renderer)||void 0===n||n.setScissor(r,f,l+1,a+1),null===(t=this.renderer)||void 0===t||t.setViewport(r,f,l+1,a+1),null===(s=this.renderer)||void 0===s||s.render(e.scene,e.camera)}render(){for(let e=0;e<this.sceneInfoList.length;++e){let n=this.sceneInfoList[e];n.keep?(this.renderSceneInfo(n),this.dirty=!0):(n.scene=this.black_scene,this.renderSceneInfo(n),this.sceneInfoList.splice(e,1))}}handleResize(){let e=this.renderer,n=window.innerWidth,t=window.innerHeight;void 0!=e&&e.setSize(n,t,!1)}init(e){if(window.addEventListener("resize",()=>{this.handleResize()}),void 0!=this.renderer)return;this.canvas=e,this.renderer=new r.CP7({canvas:e,alpha:!0,antialias:!0}),this.renderer.autoClear=!0,this.handleResize(),this.renderer.setScissorTest(!0);let n=()=>{this.render(),window.requestAnimationFrame(n)};n()}add(e){this.sceneInfoList.push(e)}asyncAdd(){return e=>{this.add(e)}}dispose(){this.renderer.dispose(),this.renderer=void 0,this.canvas=void 0}constructor(){this.sceneInfoList=[],this.renderer=void 0,this.dirty=!1,this.black_scene=new r.xsS,this.black_scene.background=new r.Ilk(0)}}function l(){let e=i.useContext(u),n=i.useRef(null);return i.useEffect(()=>{e.init(n.current)}),(0,s.jsx)("canvas",{id:"$root-canvas",ref:n})}function a(e){let{className:n,style:t,scene:r,camera:c,update:l,effect:a}=e,d=i.useRef(null),h=i.useContext(u);return i.useEffect(()=>{let e;a&&(e=a(d.current,c));let n=new o(d.current,r,c,l);return h.add(n),()=>{e&&e(),n.keep=!1}}),(0,s.jsx)("canvas",{ref:d,className:n,style:t})}let u=i.createContext(new c)},2384:function(){},846:function(){},5052:function(){},4474:function(){},6440:function(){},4691:function(){},7507:function(){}},function(e){e.O(0,[654,848,306,89,744],function(){return e(e.s=9573)}),_N_E=e.O()}]);