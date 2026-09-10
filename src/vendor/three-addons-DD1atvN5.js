import"./three-renderer-Dag5UA5Y.js";import{bC as pe,V as D,al as ie,am as fe,c6 as me,c7 as W,c8 as K,c9 as Yt,ca as Ht,g as w,cb as de,af as _e,cc as se,an as ge,bJ as be,cd as Kt,ak as V,bx as X,b as zt,H as Ft,ap as Y,ce as ye,C as oe,M as Vt,n as ve,j as Me,l as Te,a6 as Xt,cf as Ee,u as Wt,_ as Qt,K as Pe,Q as xe,bp as Se,cg as De,aE as we,aB as Ce,a1 as qt,ch as Re,d as Ae,aN as Ne,bY as Oe,bX as ke,bW as je,bV as Le,bU as Ue,bT as Ie,bS as ze}from"./three-core-D9AM9fiQ.js";const ut=new D;function j(a,t,e,i,o,s){const n=2*Math.PI*o/4,l=Math.max(s-2*o,0),f=Math.PI/4;ut.copy(t),ut[i]=0,ut.normalize();const r=.5*n/(n+l),h=1-ut.angleTo(a)/f;return Math.sign(ut[e])===1?h*r:l/(n+l)+r+r*(1-h)}class ae extends pe{constructor(t=1,e=1,i=1,o=2,s=.1){const n=o*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:o,radius:s},n===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const f=new D,r=new D,h=new D(t,e,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,c=this.attributes.uv.array,_=u.length/6,p=new D,C=.5/n;for(let b=0,m=0;b<u.length;b+=3,m+=2)switch(f.fromArray(u,b),r.copy(f),r.x-=Math.sign(r.x)*C,r.y-=Math.sign(r.y)*C,r.z-=Math.sign(r.z)*C,r.normalize(),u[b+0]=h.x*Math.sign(f.x)+r.x*s,u[b+1]=h.y*Math.sign(f.y)+r.y*s,u[b+2]=h.z*Math.sign(f.z)+r.z*s,d[b+0]=r.x,d[b+1]=r.y,d[b+2]=r.z,Math.floor(b/_)){case 0:p.set(1,0,0),c[m+0]=j(p,r,"z","y",s,i),c[m+1]=1-j(p,r,"y","z",s,e);break;case 1:p.set(-1,0,0),c[m+0]=1-j(p,r,"z","y",s,i),c[m+1]=1-j(p,r,"y","z",s,e);break;case 2:p.set(0,1,0),c[m+0]=1-j(p,r,"x","z",s,t),c[m+1]=j(p,r,"z","x",s,i);break;case 3:p.set(0,-1,0),c[m+0]=1-j(p,r,"x","z",s,t),c[m+1]=1-j(p,r,"z","x",s,i);break;case 4:p.set(0,0,1),c[m+0]=1-j(p,r,"x","y",s,t),c[m+1]=1-j(p,r,"y","x",s,e);break;case 5:p.set(0,0,-1),c[m+0]=j(p,r,"x","y",s,t),c[m+1]=1-j(p,r,"y","x",s,e);break}}static fromJSON(t){return new ae(t.width,t.height,t.depth,t.segments,t.radius)}}function ri(a,t=!1){const e=a[0].index!==null,i=new Set(Object.keys(a[0].attributes)),o=new Set(Object.keys(a[0].morphAttributes)),s={},n={},l=a[0].morphTargetsRelative,f=new ie;let r=0;for(let h=0;h<a.length;++h){const u=a[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const c in u.attributes){if(!i.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+c+'" attribute exists among all geometries, or in none of them.'),null;s[c]===void 0&&(s[c]=[]),s[c].push(u.attributes[c]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(l!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const c in u.morphAttributes){if(!o.has(c))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;n[c]===void 0&&(n[c]=[]),n[c].push(u.morphAttributes[c])}if(t){let c;if(e)c=u.index.count;else if(u.attributes.position!==void 0)c=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;f.addGroup(r,c,h),r+=c}}if(e){let h=0;const u=[];for(let d=0;d<a.length;++d){const c=a[d].index;for(let _=0;_<c.count;++_)u.push(c.getX(_)+h);h+=a[d].attributes.position.count}f.setIndex(u)}for(const h in s){const u=Jt(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;f.setAttribute(h,u)}for(const h in n){const u=n[h][0].length;if(u===0)break;f.morphAttributes=f.morphAttributes||{},f.morphAttributes[h]=[];for(let d=0;d<u;++d){const c=[];for(let p=0;p<n[h].length;++p)c.push(n[h][p][d]);const _=Jt(c);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;f.morphAttributes[h].push(_)}}return f}function Jt(a){let t,e,i,o=-1,s=0;for(let r=0;r<a.length;++r){const h=a[r];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(o===-1&&(o=h.gpuType),o!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const n=new t(s),l=new fe(n,e,i);let f=0;for(let r=0;r<a.length;++r){const h=a[r];if(h.isInterleavedBufferAttribute){const u=f/e;for(let d=0,c=h.count;d<c;d++)for(let _=0;_<e;_++){const p=h.getComponent(d,_);l.setComponent(d+u,_,p)}}else n.set(h.array,f);f+=h.count*e}return o!==void 0&&(l.gpuType=o),l}const $t={type:"change"},Zt={type:"start"},ne={type:"end"},_t=new de,te=new _e,Fe=Math.cos(70*se.DEG2RAD),P=new D,O=2*Math.PI,g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},It=1e-6;class li extends me{constructor(t,e=null){super(t,e),this.state=g.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:W.ROTATE,MIDDLE:W.DOLLY,RIGHT:W.PAN},this.touches={ONE:K.ROTATE,TWO:K.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Yt,this._lastTargetPosition=new D,this._quat=new Yt().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ht,this._sphericalDelta=new Ht,this._scale=1,this._panOffset=new D,this._rotateStart=new w,this._rotateEnd=new w,this._rotateDelta=new w,this._panStart=new w,this._panEnd=new w,this._panDelta=new w,this._dollyStart=new w,this._dollyEnd=new w,this._dollyDelta=new w,this._dollyDirection=new D,this._mouse=new w,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ge.bind(this),this._onPointerDown=Ze.bind(this),this._onPointerUp=Be.bind(this),this._onContextMenu=Qe.bind(this),this._onMouseWheel=Ke.bind(this),this._onKeyDown=Ve.bind(this),this._onTouchStart=Xe.bind(this),this._onTouchMove=We.bind(this),this._onMouseDown=Ye.bind(this),this._onMouseMove=He.bind(this),this._interceptControlDown=qe.bind(this),this._interceptControlUp=Je.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($t),this.update(),this.state=g.NONE}update(t=null){const e=this.object.position;P.copy(e).sub(this.target),P.applyQuaternion(this._quat),this._spherical.setFromVector3(P),this.autoRotate&&this.state===g.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(i)&&isFinite(o)&&(i<-Math.PI?i+=O:i>Math.PI&&(i-=O),o<-Math.PI?o+=O:o>Math.PI&&(o-=O),i<=o?this._spherical.theta=Math.max(i,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+o)/2?Math.max(i,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const n=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=n!=this._spherical.radius}if(P.setFromSpherical(this._spherical),P.applyQuaternion(this._quatInverse),e.copy(this.target).add(P),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let n=null;if(this.object.isPerspectiveCamera){const l=P.length();n=this._clampDistance(l*this._scale);const f=l-n;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),s=!!f}else if(this.object.isOrthographicCamera){const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=f!==this.object.zoom;const r=new D(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(l),this.object.updateMatrixWorld(),n=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;n!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(n).add(this.object.position):(_t.origin.copy(this.object.position),_t.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_t.direction))<Fe?this.object.lookAt(this.target):(te.setFromNormalAndCoplanarPoint(this.object.up,this.target),_t.intersectPlane(te,this.target))))}else if(this.object.isOrthographicCamera){const n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),n!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>It||8*(1-this._lastQuaternion.dot(this.object.quaternion))>It||this._lastTargetPosition.distanceToSquared(this.target)>It?(this.dispatchEvent($t),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?O/60*this.autoRotateSpeed*t:O/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){P.setFromMatrixColumn(e,0),P.multiplyScalar(-t),this._panOffset.add(P)}_panUp(t,e){this.screenSpacePanning===!0?P.setFromMatrixColumn(e,1):(P.setFromMatrixColumn(e,0),P.crossVectors(this.object.up,P)),P.multiplyScalar(t),this._panOffset.add(P)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;P.copy(o).sub(this.target);let s=P.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),o=t-i.left,s=e-i.top,n=i.width,l=i.height;this._mouse.x=o/n*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(O*this._rotateDelta.x/e.clientHeight),this._rotateUp(O*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(O*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-O*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(O*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-O*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._rotateStart.set(i,o)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panStart.set(i,o)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(i*i+o*o);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),o=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(o,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(O*this._rotateDelta.x/e.clientHeight),this._rotateUp(O*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),o=.5*(t.pageY+e.y);this._panEnd.set(i,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,o=t.pageY-e.y,s=Math.sqrt(i*i+o*o);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const n=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(n,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new w,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Ze(a){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(a.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(a)&&(this._addPointer(a),a.pointerType==="touch"?this._onTouchStart(a):this._onMouseDown(a)))}function Ge(a){this.enabled!==!1&&(a.pointerType==="touch"?this._onTouchMove(a):this._onMouseMove(a))}function Be(a){switch(this._removePointer(a),this._pointers.length){case 0:this.domElement.releasePointerCapture(a.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ne),this.state=g.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Ye(a){let t;switch(a.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case W.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(a),this.state=g.DOLLY;break;case W.ROTATE:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=g.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=g.ROTATE}break;case W.PAN:if(a.ctrlKey||a.metaKey||a.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(a),this.state=g.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(a),this.state=g.PAN}break;default:this.state=g.NONE}this.state!==g.NONE&&this.dispatchEvent(Zt)}function He(a){switch(this.state){case g.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(a);break;case g.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(a);break;case g.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(a);break}}function Ke(a){this.enabled===!1||this.enableZoom===!1||this.state!==g.NONE||(a.preventDefault(),this.dispatchEvent(Zt),this._handleMouseWheel(this._customWheelEvent(a)),this.dispatchEvent(ne))}function Ve(a){this.enabled!==!1&&this._handleKeyDown(a)}function Xe(a){switch(this._trackPointer(a),this._pointers.length){case 1:switch(this.touches.ONE){case K.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(a),this.state=g.TOUCH_ROTATE;break;case K.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(a),this.state=g.TOUCH_PAN;break;default:this.state=g.NONE}break;case 2:switch(this.touches.TWO){case K.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(a),this.state=g.TOUCH_DOLLY_PAN;break;case K.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(a),this.state=g.TOUCH_DOLLY_ROTATE;break;default:this.state=g.NONE}break;default:this.state=g.NONE}this.state!==g.NONE&&this.dispatchEvent(Zt)}function We(a){switch(this._trackPointer(a),this.state){case g.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(a),this.update();break;case g.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(a),this.update();break;case g.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(a),this.update();break;case g.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(a),this.update();break;default:this.state=g.NONE}}function Qe(a){this.enabled!==!1&&a.preventDefault()}function qe(a){a.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Je(a){a.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Mt={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Q{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $e=new be(-1,1,1,-1,0,1);class ti extends ie{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const ei=new ti;class Gt{constructor(t){this._mesh=new ge(ei,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$e)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ii extends Q{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof V?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=X.clone(t.uniforms),this.material=new V({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gt(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class ee extends Q{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const o=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let n,l;this.inverse?(n=0,l=1):(n=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(o.REPLACE,o.REPLACE,o.REPLACE),s.buffers.stencil.setFunc(o.ALWAYS,n,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(o.EQUAL,1,4294967295),s.buffers.stencil.setOp(o.KEEP,o.KEEP,o.KEEP),s.buffers.stencil.setLocked(!0)}}class si extends Q{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class hi{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new w);this._width=i.width,this._height=i.height,e=new zt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ii(Mt),this.copyPass.material.blending=Y,this.clock=new ye}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let o=0,s=this.passes.length;o<s;o++){const n=this.passes[o];if(n.enabled!==!1){if(n.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(o),n.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),n.needsSwap){if(i){const l=this.renderer.getContext(),f=this.renderer.state.buffers.stencil;f.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),f.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ee!==void 0&&(n instanceof ee?i=!0:n instanceof si&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new w);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,o=this._height*this._pixelRatio;this.renderTarget1.setSize(i,o),this.renderTarget2.setSize(i,o);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,o)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ci extends Q{constructor(t,e,i=null,o=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=o,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(t,e,i){const o=t.autoClear;t.autoClear=!1;let s,n;this.overrideMaterial!==null&&(n=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=n),t.autoClear=o}}class oi{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let i,o,s;const n=.5*(Math.sqrt(3)-1),l=(t+e)*n,f=Math.floor(t+l),r=Math.floor(e+l),h=(3-Math.sqrt(3))/6,u=(f+r)*h,d=f-u,c=r-u,_=t-d,p=e-c;let C,b;_>p?(C=1,b=0):(C=0,b=1);const m=_-C+h,x=p-b+h,E=_-1+2*h,R=p-1+2*h,A=f&255,N=r&255,k=this.perm[A+this.perm[N]]%12,y=this.perm[A+C+this.perm[N+b]]%12,v=this.perm[A+1+this.perm[N+1]]%12;let M=.5-_*_-p*p;M<0?i=0:(M*=M,i=M*M*this._dot(this.grad3[k],_,p));let T=.5-m*m-x*x;T<0?o=0:(T*=T,o=T*T*this._dot(this.grad3[y],m,x));let L=.5-E*E-R*R;return L<0?s=0:(L*=L,s=L*L*this._dot(this.grad3[v],E,R)),70*(i+o+s)}noise3d(t,e,i){let o,s,n,l;const r=(t+e+i)*.3333333333333333,h=Math.floor(t+r),u=Math.floor(e+r),d=Math.floor(i+r),c=1/6,_=(h+u+d)*c,p=h-_,C=u-_,b=d-_,m=t-p,x=e-C,E=i-b;let R,A,N,k,y,v;m>=x?x>=E?(R=1,A=0,N=0,k=1,y=1,v=0):m>=E?(R=1,A=0,N=0,k=1,y=0,v=1):(R=0,A=0,N=1,k=1,y=0,v=1):x<E?(R=0,A=0,N=1,k=0,y=1,v=1):m<E?(R=0,A=1,N=0,k=0,y=1,v=1):(R=0,A=1,N=0,k=1,y=1,v=0);const M=m-R+c,T=x-A+c,L=E-N+c,q=m-k+2*c,J=x-y+2*c,$=E-v+2*c,tt=m-1+3*c,et=x-1+3*c,S=E-1+3*c,Z=h&255,G=u&255,B=d&255,pt=this.perm[Z+this.perm[G+this.perm[B]]]%12,ft=this.perm[Z+R+this.perm[G+A+this.perm[B+N]]]%12,mt=this.perm[Z+k+this.perm[G+y+this.perm[B+v]]]%12,dt=this.perm[Z+1+this.perm[G+1+this.perm[B+1]]]%12;let U=.6-m*m-x*x-E*E;U<0?o=0:(U*=U,o=U*U*this._dot3(this.grad3[pt],m,x,E));let I=.6-M*M-T*T-L*L;I<0?s=0:(I*=I,s=I*I*this._dot3(this.grad3[ft],M,T,L));let z=.6-q*q-J*J-$*$;z<0?n=0:(z*=z,n=z*z*this._dot3(this.grad3[mt],q,J,$));let F=.6-tt*tt-et*et-S*S;return F<0?l=0:(F*=F,l=F*F*this._dot3(this.grad3[dt],tt,et,S)),32*(o+s+n+l)}noise4d(t,e,i,o){const s=this.grad4,n=this.simplex,l=this.perm,f=(Math.sqrt(5)-1)/4,r=(5-Math.sqrt(5))/20;let h,u,d,c,_;const p=(t+e+i+o)*f,C=Math.floor(t+p),b=Math.floor(e+p),m=Math.floor(i+p),x=Math.floor(o+p),E=(C+b+m+x)*r,R=C-E,A=b-E,N=m-E,k=x-E,y=t-R,v=e-A,M=i-N,T=o-k,L=y>v?32:0,q=y>M?16:0,J=v>M?8:0,$=y>T?4:0,tt=v>T?2:0,et=M>T?1:0,S=L+q+J+$+tt+et,Z=n[S][0]>=3?1:0,G=n[S][1]>=3?1:0,B=n[S][2]>=3?1:0,pt=n[S][3]>=3?1:0,ft=n[S][0]>=2?1:0,mt=n[S][1]>=2?1:0,dt=n[S][2]>=2?1:0,U=n[S][3]>=2?1:0,I=n[S][0]>=1?1:0,z=n[S][1]>=1?1:0,F=n[S][2]>=1?1:0,Bt=n[S][3]>=1?1:0,Tt=y-Z+r,Et=v-G+r,Pt=M-B+r,xt=T-pt+r,St=y-ft+2*r,Dt=v-mt+2*r,wt=M-dt+2*r,Ct=T-U+2*r,Rt=y-I+3*r,At=v-z+3*r,Nt=M-F+3*r,Ot=T-Bt+3*r,kt=y-1+4*r,jt=v-1+4*r,Lt=M-1+4*r,Ut=T-1+4*r,it=C&255,st=b&255,ot=m&255,at=x&255,re=l[it+l[st+l[ot+l[at]]]]%32,le=l[it+Z+l[st+G+l[ot+B+l[at+pt]]]]%32,he=l[it+ft+l[st+mt+l[ot+dt+l[at+U]]]]%32,ce=l[it+I+l[st+z+l[ot+F+l[at+Bt]]]]%32,ue=l[it+1+l[st+1+l[ot+1+l[at+1]]]]%32;let nt=.6-y*y-v*v-M*M-T*T;nt<0?h=0:(nt*=nt,h=nt*nt*this._dot4(s[re],y,v,M,T));let rt=.6-Tt*Tt-Et*Et-Pt*Pt-xt*xt;rt<0?u=0:(rt*=rt,u=rt*rt*this._dot4(s[le],Tt,Et,Pt,xt));let lt=.6-St*St-Dt*Dt-wt*wt-Ct*Ct;lt<0?d=0:(lt*=lt,d=lt*lt*this._dot4(s[he],St,Dt,wt,Ct));let ht=.6-Rt*Rt-At*At-Nt*Nt-Ot*Ot;ht<0?c=0:(ht*=ht,c=ht*ht*this._dot4(s[ce],Rt,At,Nt,Ot));let ct=.6-kt*kt-jt*jt-Lt*Lt-Ut*Ut;return ct<0?_=0:(ct*=ct,_=ct*ct*this._dot4(s[ue],kt,jt,Lt,Ut)),27*(h+u+d+c+_)}_dot(t,e,i){return t[0]*e+t[1]*i}_dot3(t,e,i,o){return t[0]*e+t[1]*i+t[2]*o}_dot4(t,e,i,o,s){return t[0]*e+t[1]*i+t[2]*o+t[3]*s}}const gt={defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new w},cameraProjectionMatrix:{value:new Vt},cameraInverseProjectionMatrix:{value:new Vt},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == 1.0 ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},bt={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},yt={uniforms:{tDiffuse:{value:null},resolution:{value:new w}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};class H extends Q{constructor(t,e,i=512,o=512,s=32){super(),this.width=i,this.height=o,this.clear=!0,this.needsSwap=!1,this.camera=e,this.scene=t,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(s),this._generateRandomKernelRotations();const n=new ve;n.format=Me,n.type=Te,this.normalRenderTarget=new zt(this.width,this.height,{minFilter:Xt,magFilter:Xt,type:Ft,depthTexture:n}),this.ssaoRenderTarget=new zt(this.width,this.height,{type:Ft}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new V({defines:Object.assign({},gt.defines),uniforms:X.clone(gt.uniforms),vertexShader:gt.vertexShader,fragmentShader:gt.fragmentShader,blending:Y}),this.ssaoMaterial.defines.KERNEL_SIZE=s,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Ee,this.normalMaterial.blending=Y,this.blurMaterial=new V({defines:Object.assign({},yt.defines),uniforms:X.clone(yt.uniforms),vertexShader:yt.vertexShader,fragmentShader:yt.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new V({defines:Object.assign({},bt.defines),uniforms:X.clone(bt.uniforms),vertexShader:bt.vertexShader,fragmentShader:bt.fragmentShader,blending:Y}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new V({uniforms:X.clone(Mt.uniforms),vertexShader:Mt.vertexShader,fragmentShader:Mt.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:xe,blendDst:Qt,blendEquation:Wt,blendSrcAlpha:Pe,blendDstAlpha:Qt,blendEquationAlpha:Wt}),this._fsQuad=new Gt(null),this._originalClearColor=new oe}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(t,e,i){switch(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(t,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(t,this.blurMaterial,this.blurRenderTarget),this.output){case H.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=Y,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case H.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Y,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case H.OUTPUT.Depth:this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:i);break;case H.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Y,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;case H.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=Se,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(t,e){this.width=t,this.height=e,this.ssaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.blurRenderTarget.setSize(t,e),this.ssaoMaterial.uniforms.resolution.value.set(t,e),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(t,e)}_renderPass(t,e,i,o,s){t.getClearColor(this._originalClearColor);const n=t.getClearAlpha(),l=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=l,t.setClearColor(this._originalClearColor),t.setClearAlpha(n)}_renderOverride(t,e,i,o,s){t.getClearColor(this._originalClearColor);const n=t.getClearAlpha(),l=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,o=e.clearColor||o,s=e.clearAlpha||s,o!=null&&(t.setClearColor(o),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=l,t.setClearColor(this._originalClearColor),t.setClearAlpha(n)}_generateSampleKernel(t){const e=this.kernel;for(let i=0;i<t;i++){const o=new D;o.x=Math.random()*2-1,o.y=Math.random()*2-1,o.z=Math.random(),o.normalize();let s=i/t;s=se.lerp(.1,1,s*s),o.multiplyScalar(s),e.push(o)}}_generateRandomKernelRotations(){const i=new oi,o=16,s=new Float32Array(o);for(let n=0;n<o;n++){const l=Math.random()*2-1,f=Math.random()*2-1,r=0;s[n]=i.noise3d(l,f,r)}this.noiseTexture=new De(s,4,4,we,Ce),this.noiseTexture.wrapS=qt,this.noiseTexture.wrapT=qt,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,e.push(i))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}}H.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4};const vt={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ui extends Q{constructor(){super(),this.uniforms=X.clone(vt.uniforms),this.material=new Re({name:vt.name,uniforms:this.uniforms,vertexShader:vt.vertexShader,fragmentShader:vt.fragmentShader}),this._fsQuad=new Gt(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ae.getTransfer(this._outputColorSpace)===Ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Oe?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ke?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===je?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Le?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ue?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ie?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ze&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}export{hi as E,li as O,ae as R,H as S,ci as a,ui as b,ri as m};
