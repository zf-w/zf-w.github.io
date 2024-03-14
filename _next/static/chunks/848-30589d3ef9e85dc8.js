"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{2848:function(e,t,n){n.d(t,{z:function(){return m}});var o=n(8217);let a={type:"change"},i={type:"start"},r={type:"end"},s=new o.zHn,c=new o.JOQ,l=Math.cos(70*o.M8C.DEG2RAD);class m extends o.pBf{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new o.Pa4,this.cursor=new o.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:o.RsA.ROTATE,MIDDLE:o.RsA.DOLLY,RIGHT:o.RsA.PAN},this.touches={ONE:o.QmN.ROTATE,TWO:o.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",en),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",en),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(a),n.update(),p=m.NONE},this.update=function(){let t=new o.Pa4,i=new o._fP().setFromUnitVectors(e.up,new o.Pa4(0,1,0)),r=i.clone().invert(),f=new o.Pa4,E=new o._fP,y=new o.Pa4,P=2*Math.PI;return function(O=null){let j=n.object.position;t.copy(j).sub(n.target),t.applyQuaternion(i),d.setFromVector3(t),n.autoRotate&&p===m.NONE&&Y(null!==O?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(d.theta+=h.theta*n.dampingFactor,d.phi+=h.phi*n.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let T=n.minAzimuthAngle,v=n.maxAzimuthAngle;isFinite(T)&&isFinite(v)&&(T<-Math.PI?T+=P:T>Math.PI&&(T-=P),v<-Math.PI?v+=P:v>Math.PI&&(v-=P),T<=v?d.theta=Math.max(T,Math.min(v,d.theta)):d.theta=d.theta>(T+v)/2?Math.max(T,d.theta):Math.min(v,d.theta)),d.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,d.phi)),d.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(g,n.dampingFactor):n.target.add(g),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let w=!1;if(n.zoomToCursor&&M||n.object.isOrthographicCamera)d.radius=H(d.radius);else{let e=d.radius;d.radius=H(d.radius*b),w=e!=d.radius}if(t.setFromSpherical(d),t.applyQuaternion(r),j.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,g.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),n.zoomToCursor&&M){let a=null;if(n.object.isPerspectiveCamera){let e=t.length();a=H(e*b);let o=e-a;n.object.position.addScaledVector(A,o),n.object.updateMatrixWorld(),w=!!o}else if(n.object.isOrthographicCamera){let e=new o.Pa4(N.x,N.y,0);e.unproject(n.object);let i=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),n.object.updateProjectionMatrix(),w=i!==n.object.zoom;let r=new o.Pa4(N.x,N.y,0);r.unproject(n.object),n.object.position.sub(r).add(e),n.object.updateMatrixWorld(),a=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==a&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(a).add(n.object.position):(s.origin.copy(n.object.position),s.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(s.direction))<l?e.lookAt(n.target):(c.setFromNormalAndCoplanarPoint(n.object.up,n.target),s.intersectPlane(c,n.target))))}else if(n.object.isOrthographicCamera){let e=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/b)),e!==n.object.zoom&&(n.object.updateProjectionMatrix(),w=!0)}return b=1,M=!1,!!(w||f.distanceToSquared(n.object.position)>u||8*(1-E.dot(n.object.quaternion))>u||y.distanceToSquared(n.target)>u)&&(n.dispatchEvent(a),f.copy(n.object.position),E.copy(n.object.quaternion),y.copy(n.target),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ea),n.domElement.removeEventListener("pointerdown",B),n.domElement.removeEventListener("pointercancel",$),n.domElement.removeEventListener("wheel",J),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",$),n.domElement.getRootNode().removeEventListener("keydown",ee,{capture:!0}),null!==n._domElementKeyEvents&&(n._domElementKeyEvents.removeEventListener("keydown",en),n._domElementKeyEvents=null)};let n=this,m={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},p=m.NONE,u=1e-6,d=new o.$V,h=new o.$V,b=1,g=new o.Pa4,f=new o.FM8,E=new o.FM8,y=new o.FM8,P=new o.FM8,O=new o.FM8,j=new o.FM8,T=new o.FM8,v=new o.FM8,w=new o.FM8,A=new o.Pa4,N=new o.FM8,M=!1,L=[],R={},k=!1;function x(e){return Math.pow(.95,n.zoomSpeed*Math.abs(.01*e))}function Y(e){h.theta-=e}function C(e){h.phi-=e}let S=function(){let e=new o.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),g.add(e)}}(),I=function(){let e=new o.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),g.add(e)}}(),z=function(){let e=new o.Pa4;return function(t,o){let a=n.domElement;if(n.object.isPerspectiveCamera){let i=n.object.position;e.copy(i).sub(n.target);let r=e.length();S(2*t*(r*=Math.tan(n.object.fov/2*Math.PI/180))/a.clientHeight,n.object.matrix),I(2*o*r/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(S(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),I(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?b/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function _(e){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?b*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(e,t){if(!n.zoomToCursor)return;M=!0;let o=n.domElement.getBoundingClientRect(),a=e-o.left,i=t-o.top,r=o.width,s=o.height;N.x=a/r*2-1,N.y=-(i/s*2)+1,A.set(N.x,N.y,1).unproject(n.object).sub(n.object.position).normalize()}function H(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function K(e){f.set(e.clientX,e.clientY)}function X(e){P.set(e.clientX,e.clientY)}function Z(e){if(1===L.length)f.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}}function U(e){if(1===L.length)P.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);P.set(n,o)}}function V(e){let t=er(e),n=e.pageX-t.x,o=e.pageY-t.y;T.set(0,Math.sqrt(n*n+o*o))}function G(e){if(1==L.length)E.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}y.subVectors(E,f).multiplyScalar(n.rotateSpeed);let t=n.domElement;Y(2*Math.PI*y.x/t.clientHeight),C(2*Math.PI*y.y/t.clientHeight),f.copy(E)}function Q(e){if(1===L.length)O.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);O.set(n,o)}j.subVectors(O,P).multiplyScalar(n.panSpeed),z(j.x,j.y),P.copy(O)}function W(e){let t=er(e),o=e.pageX-t.x,a=e.pageY-t.y;v.set(0,Math.sqrt(o*o+a*a)),w.set(0,Math.pow(v.y/T.y,n.zoomSpeed)),D(w.y),T.copy(v),F((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function B(e){if(!1!==n.enabled)0===L.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",q),n.domElement.addEventListener("pointerup",$)),!function(e){for(let t=0;t<L.length;t++)if(L[t]==e.pointerId)return!0;return!1}(e)&&(L.push(e.pointerId),"touch"===e.pointerType?eo(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case o.RsA.DOLLY:if(!1===n.enableZoom)return;F(e.clientX,e.clientX),T.set(e.clientX,e.clientY),p=m.DOLLY;break;case o.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;X(e),p=m.PAN}else{if(!1===n.enableRotate)return;K(e),p=m.ROTATE}break;case o.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;K(e),p=m.ROTATE}else{if(!1===n.enablePan)return;X(e),p=m.PAN}break;default:p=m.NONE}p!==m.NONE&&n.dispatchEvent(i)}(e))}function q(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(ei(e),p){case m.TOUCH_ROTATE:if(!1===n.enableRotate)return;G(e),n.update();break;case m.TOUCH_PAN:if(!1===n.enablePan)return;Q(e),n.update();break;case m.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&W(e),n.enablePan&&Q(e),n.update();break;case m.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&W(e),n.enableRotate&&G(e),n.update();break;default:p=m.NONE}}(e):function(e){switch(p){case m.ROTATE:if(!1===n.enableRotate)return;!function(e){E.set(e.clientX,e.clientY),y.subVectors(E,f).multiplyScalar(n.rotateSpeed);let t=n.domElement;Y(2*Math.PI*y.x/t.clientHeight),C(2*Math.PI*y.y/t.clientHeight),f.copy(E),n.update()}(e);break;case m.DOLLY:if(!1===n.enableZoom)return;v.set(e.clientX,e.clientY),w.subVectors(v,T),w.y>0?D(x(w.y)):w.y<0&&_(x(w.y)),T.copy(v),n.update();break;case m.PAN:if(!1===n.enablePan)return;O.set(e.clientX,e.clientY),j.subVectors(O,P).multiplyScalar(n.panSpeed),z(j.x,j.y),P.copy(O),n.update()}}(e))}function $(e){switch(function(e){delete R[e.pointerId];for(let t=0;t<L.length;t++)if(L[t]==e.pointerId){L.splice(t,1);return}}(e),L.length){case 0:n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",q),n.domElement.removeEventListener("pointerup",$),n.dispatchEvent(r),p=m.NONE;break;case 1:let t=L[0],o=R[t];eo({pointerId:t,pageX:o.x,pageY:o.y})}}function J(e){if(!1!==n.enabled&&!1!==n.enableZoom&&p===m.NONE){var t;e.preventDefault(),n.dispatchEvent(i),F((t=function(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!k&&(n.deltaY*=10),n}(e)).clientX,t.clientY),t.deltaY<0?_(x(t.deltaY)):t.deltaY>0&&D(x(t.deltaY)),n.update(),n.dispatchEvent(r)}}function ee(e){"Control"===e.key&&(k=!0,n.domElement.getRootNode().addEventListener("keyup",et,{passive:!0,capture:!0}))}function et(e){"Control"===e.key&&(k=!1,n.domElement.getRootNode().removeEventListener("keyup",et,{passive:!0,capture:!0}))}function en(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?Y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?Y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):z(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function eo(e){switch(ei(e),L.length){case 1:switch(n.touches.ONE){case o.QmN.ROTATE:if(!1===n.enableRotate)return;Z(e),p=m.TOUCH_ROTATE;break;case o.QmN.PAN:if(!1===n.enablePan)return;U(e),p=m.TOUCH_PAN;break;default:p=m.NONE}break;case 2:switch(n.touches.TWO){case o.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&V(e),n.enablePan&&U(e),p=m.TOUCH_DOLLY_PAN;break;case o.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&V(e),n.enableRotate&&Z(e),p=m.TOUCH_DOLLY_ROTATE;break;default:p=m.NONE}break;default:p=m.NONE}p!==m.NONE&&n.dispatchEvent(i)}function ea(e){!1!==n.enabled&&e.preventDefault()}function ei(e){let t=R[e.pointerId];void 0===t&&(t=new o.FM8,R[e.pointerId]=t),t.set(e.pageX,e.pageY)}function er(e){return R[e.pointerId===L[0]?L[1]:L[0]]}n.domElement.addEventListener("contextmenu",ea),n.domElement.addEventListener("pointerdown",B),n.domElement.addEventListener("pointercancel",$),n.domElement.addEventListener("wheel",J,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}}}]);