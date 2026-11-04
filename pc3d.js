/* PC 3D (Three.js r128). Satuan scene = cm. Sisi kaca casing menghadap +z. */
(function(){
const el=document.getElementById('stg'),NO={sync(){},explode(){},reset(){},onPick(){}};
let R;try{R=new THREE.WebGLRenderer({antialias:true,alpha:true})}catch(e){}
if(!R){el.innerHTML='<p style="padding:20px;font-size:13px">Tampilan 3D tidak tersedia di perangkat atau koneksi ini.</p>';window.PC3D=NO;return}
const T=THREE,V=(x,y,z)=>new T.Vector3(x,y,z),ZB=-9.3,K=['cs','mb','cpu','cool','ram','gpu','sto','psu'],cl=(v,a,b)=>Math.max(a,Math.min(b,v));
R.setPixelRatio(Math.min(devicePixelRatio||1,2));R.outputEncoding=T.sRGBEncoding;el.appendChild(R.domElement);
const S=new T.Scene(),Cam=new T.PerspectiveCamera(32,1,1,600);
S.add(new T.HemisphereLight(0xffffff,0x44505a,.9));
const dl=new T.DirectionalLight(0xffffff,.9);dl.position.set(30,60,50);S.add(dl);
[[0x4fd1c5,-25,-12],[0xffa94d,25,18]].forEach(([c,x,y])=>{const l=new T.PointLight(c,.7,90);l.position.set(x,y,14);S.add(l)});
const MT=(c,m,r,e,ei)=>new T.MeshStandardMaterial({color:c,metalness:m==null?.3:m,roughness:r==null?.5:r,emissive:e||0,emissiveIntensity:ei||1});
const bx=(g,w,h,d,m,x,y,z)=>{const o=new T.Mesh(new T.BoxGeometry(w,h,d),m);o.position.set(x||0,y||0,z||0);g.add(o);return o};
const cyl=(g,r,h,m,x,y,z,rx)=>{const o=new T.Mesh(new T.CylinderGeometry(r,r,h,24),m);o.position.set(x,y,z);o.rotation.x=rx||0;g.add(o);return o};
const tube=(g,pts,r,m)=>g.add(new T.Mesh(new T.TubeGeometry(new T.CatmullRomCurve3(pts.map(p=>V(...p))),28,r,8),m||MT(0x0f1114,.1,.8)));
const GH=new T.MeshBasicMaterial({color:0x7f9a8e,transparent:true,opacity:.13,depthWrite:false}),GA=new T.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.3,depthWrite:false});
function fan(g,s,col,x,y,z,ry,rx){const q=new T.Group(),r=new T.Group(),f=MT(0x14171b,.2,.6),b=MT(0x2a3038,.2,.5);q.userData.rot=r;q.add(r);
[[s,.5,0,s/2-.25],[s,.5,0,.25-s/2],[.5,s,s/2-.25,0],[.5,s,.25-s/2,0]].forEach(([w,h,a,c])=>bx(q,w,h,2,f,a,c,0));
cyl(r,s*.17,1.2,b,0,0,0,Math.PI/2);
for(let i=0;i<9;i++){const p=new T.Group();p.rotation.z=i*.698;bx(p,s*.3,s*.16,.1,b,s*.27,0,0).rotation.x=.6;r.add(p)}
q.add(new T.Mesh(new T.TorusGeometry(s*.45,.1,6,36),MT(0,0,.5,col,2.4)));q.position.set(x,y,z);q.rotation.set(rx||0,ry||0,0);g.add(q)}
function pcb(){const c=document.createElement('canvas');c.width=c.height=256;const x=c.getContext('2d');x.fillStyle='#14181d';x.fillRect(0,0,256,256);x.strokeStyle='#26303a';x.lineWidth=2;
for(let i=0;i<46;i++){x.beginPath();let a=Math.random()*256,b=Math.random()*256;x.moveTo(a,b);for(let k=0;k<4;k++){if(k%2)b+=(Math.random()-.5)*90;else a+=(Math.random()-.5)*90;x.lineTo(a,b)}x.stroke()}
x.fillStyle='#3a4856';for(let i=0;i<60;i++)x.fillRect(Math.random()*256,Math.random()*256,3,3);const t=new T.CanvasTexture(c);t.wrapS=t.wrapT=T.RepeatWrapping;t.repeat.set(3,3);return t}
const BD={
cs(it,ix){const g=new T.Group(),m=MT([0xcfd3d8,0x1b1f24,0x262b32,0x14171b][ix],.5,.45);
bx(g,44,.7,21,m,0,-23.3,0);bx(g,44,.7,21,m,0,23.3,0);bx(g,44,46.6,.6,MT(0x101317,.4,.6),0,0,-10.5);bx(g,.8,46.6,21,m,21.9,0,0);bx(g,.8,46.6,21,m,-21.9,0,0);
[[-21.5,-10],[21.5,-10],[-21.5,10],[21.5,10]].forEach(([x,z])=>bx(g,.9,46.6,.9,m,x,0,z));
bx(g,.3,40,.3,MT(0,0,.5,ix>1?0x6ad1ff:0xffffff,ix>1?2:.3),22.4,0,9.4);
bx(g,44,46.6,.3,new T.MeshStandardMaterial({color:0x9db4c2,metalness:.1,roughness:.05,transparent:true,opacity:.1,depthWrite:false}),0,0,10.7).renderOrder=3;return g},
mb(it,ix){const g=new T.Group(),W=it.ff==1?18:24.4,H=it.ff==1?18:it.ff==2?24.4:30.5,pm=MT(0x1a1e24,.1,.7),tm=MT(0xffffff,.1,.7),hs=MT(0x3a424b,.6,.4),sl=MT(0x0f1114,.2,.6);tm.map=pcb();
const o=new T.Mesh(new T.BoxGeometry(W,H,.3),[pm,pm,pm,pm,tm,pm]);o.position.set(-20.5+W/2,21-H/2,ZB-.15);g.add(o);
bx(g,1.8,12,1.6,hs,-19.3,11,ZB+.8);bx(g,10,1.8,1.6,hs,-12.5,19.5,ZB+.8);bx(g,7.5,7.5,.5,MT(0xbfc5cb,.8,.35),-12.5,11,ZB+.25);
for(let i=0;i<4;i++)bx(g,.7,13.3,1.1,sl,-6+i*.9,11,ZB+.55);
bx(g,8.9,.9,1.1,sl,-14.7,it.ff==1?3.4:-2,ZB+.55);
if(it.ff==3)bx(g,4.5,4.5,.9,hs,-4,-7,ZB+.45);
if(it.ff>1)bx(g,1.2,5,1.2,sl,-20.5+W-1.2,3,ZB+.6);return g},
cpu(){const g=new T.Group();bx(g,4.2,4.2,.35,MT(0xc2c8ce,.85,.3),-12.5,11,ZB+.68);bx(g,2.6,2.6,.05,MT(0x8c939a,.9,.25),-12.5,11,ZB+.88);return g},
cool(it,ix){const g=new T.Group(),al=MT(0xb9c0c7,.8,.35),cu=MT(0xb87333,.9,.3),cx=-12.5,cy=11,zc=ZB+8.15,cap=MT(0x2a2f36,.5,.4);
const st=x=>{for(let i=0;i<22;i++)bx(g,4.4,.12,14.5,al,x,cy-5.2+i*.5,zc);bx(g,4.6,11,.4,cap,x,cy,zc+7.3)};
if(ix<2){bx(g,5,5,1.2,cu,cx,cy,ZB+1.3);
 if(!ix){st(cx);fan(g,12,0x9be7ff,cx+3.5,cy,zc-.5,Math.PI/2)}else{st(cx-2.9);st(cx+3.9);fan(g,12,0x9be7ff,cx+.4,cy,zc-.5,Math.PI/2)}}
else{const len=ix==2?27.5:39.5,n=ix==2?2:3,rb=MT(0x0f1114,.1,.8);
 cyl(g,3.1,3.6,MT(0x20252b,.6,.4),cx,cy,ZB+2.5,Math.PI/2);cyl(g,2.3,.15,MT(0,0,.5,0x6ad1ff,2),cx,cy,ZB+4.4,Math.PI/2);
 bx(g,2.7,len,12,MT(0x23282e,.6,.5),18.5,0,-3.5);
 for(let i=0;i<n;i++)fan(g,12,0x9be7ff,15.7,(i-(n-1)/2)*12.1,-3.5,Math.PI/2);
 [1,-1].forEach(s=>tube(g,[[cx,cy+s*1.5,ZB+3.5],[cx+6,cy*.6+s*6,ZB+7],[12,s*len/2,-1],[18.5,s*(len/2-.6),-3.5]],.45,rb))}
return g},
ram(it,ix){const g=new T.Group(),sp=MT([0x2a2d34,0xc9ccd1,0x2a2d34,0xe8eaee,0x16181c][ix],.6,.4),rgb=[0x00d4ff,0xff3b6b,0x7cff6b,0xff9d2e,0xffffff][ix];
[1,3].forEach(i=>{const x=-6+i*.9;bx(g,.8,13.3,3.2,sp,x,11,ZB+2.2);bx(g,.5,11.6,.2,MT(0,0,.5,rgb,2.2),x,11,ZB+3.9)});return g},
gpu(it,ix){const g=new T.Group(),L=[24,27,30,33][ix],Tk=[3.8,4.5,5.2,6.2][ix],D=12.5,x0=-19.2,zc=ZB+1.4+D/2,n=ix>1?3:2;
bx(g,L,Tk,D,MT(0x1c2026,.4,.5),x0+L/2,0,zc);bx(g,L-1,.15,D-1,MT(0x8b939b,.8,.35),x0+L/2,Tk/2+.05,zc);
bx(g,L*.55,.12,.5,MT(0,0,.5,[0x76ff7a,0xff4d4d,0x6ad1ff,0xe6c35c][ix],2),x0+L/2,Tk/2+.15,zc+D/2-.4);
for(let i=0;i<n;i++)fan(g,9,0x6ad1ff,x0+L*(i+.5)/n,-Tk/2-.1,zc,0,Math.PI/2);
bx(g,.3,Tk+.6,D,MT(0xc0c6cc,.8,.4),x0-.1,0,zc);return g},
sto(it,ix){const g=new T.Group();
if(!ix){bx(g,10,7,.8,MT(0x2f3a45,.5,.5),10,-15,-8.5);bx(g,6,2,.05,MT(0xe0e4e8,.1,.8),10,-15,-8.05)}
else{const y=3.3,x=-12.5,z=ZB+.7,hm=MT(0x3f4750,.7,.4);bx(g,8,2.2,.15,MT(0x1b3a30,.2,.6),x,y,z);bx(g,1.5,1.5,.25,MT(0x111111,.2,.6),x-1,y,z+.2);bx(g,1.5,1.5,.25,MT(0x111111,.2,.6),x+1.5,y,z+.2);
 bx(g,3,1.9,.05,MT(0xd9803a,.1,.7),x-2.8,y,z+.12);
 if(ix>1)bx(g,8,2.4,ix==3?1.4:.5,hm,x,y,z+(ix==3?1:.4));
 if(ix==3)for(let i=0;i<7;i++)bx(g,.2,2.4,.8,hm,x-3.2+i*1.07,y,z+1.9)}
return g},
psu(it,ix){const g=new T.Group(),x=-13.4,y=-18.4,z=-2.9;bx(g,16,8.6,14,MT(0x25292f,.5,.5),x,y,z);
fan(g,10.5,[0x777777,0xd6b35b,0xd6b35b,0xd6b35b][ix],x,y,z+7.1,0,0);
tube(g,[[-8,-14.5,4],[-2,-12,6],[3,-6,-3],[3,2.5,ZB+1]],.6);tube(g,[[-17,-14,4],[-20.2,0,3],[-20.2,15,-3],[-14,19.7,ZB+1]],.35);return g}
};
const EX={mb:[0,0,-6],cpu:[0,0,8],cool:[0,0,16],ram:[0,0,10],gpu:[0,-3,18],sto:[0,0,6],psu:[0,0,12],cs:[0,0,0]},P3={},tmp=V(0,0,0);
let hl=null,ex=false,run=true,yaw=.5,pitch=.22,dist=105,td=105,hit=0,t0=performance.now();const pts=new Map();
function sync(B,cur,Mx){const ac=(getComputedStyle(document.documentElement).getPropertyValue('--ac')||'#0f6a4e').trim(),ff=B.mb?B.mb.ff:3;
K.forEach(k=>{const it=B[k],rp=it||Mx[k].o[k=='cs'?2:1],key=it?it.id:'g',ix=Mx[k].o.indexOf(rp),p=P3[k]||(P3[k]={});
 if(p.key!=key){if(p.g)S.remove(p.g);p.g=BD[k](rp,ix);p.key=key;p.fans=[];S.add(p.g);p.g.traverse(o=>{if(o.isMesh)o.userData.m=o.material;if(o.userData.rot)p.fans.push(o.userData.rot)});if(!p.pos)p.pos=p.g.position.clone()}
 p.on=!!it;p.base=V(0,k=='gpu'?(ff==1?3.4:-2):0,k=='sto'&&ix>0&&ff==1?-2.2:0);
 p.g.traverse(o=>{if(o.isMesh)o.material=p.on?o.userData.m:(k==cur?GA:GH)});p.g.visible=k!='cs'||!ex});
if(!hl){hl=new T.BoxHelper(P3[cur].g,0xffffff);S.add(hl)}else hl.setFromObject(P3[cur].g);hl.material.color.set(ac)}
function pick(e){if(!el.contains(e.target))return;const r=el.getBoundingClientRect(),ray=new T.Raycaster();ray.setFromCamera({x:(e.clientX-r.left)/r.width*2-1,y:-((e.clientY-r.top)/r.height)*2+1},Cam);
const h=ray.intersectObjects(K.filter(k=>k!='cs'&&P3[k]).map(k=>P3[k].g),true)[0];if(!h)return;let o=h.object;while(o&&!K.some(k=>P3[k]&&P3[k].g===o))o=o.parent;
const k=K.find(k=>P3[k]&&P3[k].g===o);if(k)PC3D.onPick(k)}
el.addEventListener('pointerdown',e=>{pts.set(e.pointerId,[e.clientX,e.clientY]);hit=0});
addEventListener('pointermove',e=>{const p=pts.get(e.pointerId);if(!p)return;const dx=e.clientX-p[0],dy=e.clientY-p[1];
 if(pts.size==2){const o=[...pts.entries()].find(([i])=>i!=e.pointerId)[1];td=cl(td*Math.hypot(p[0]-o[0],p[1]-o[1])/Math.hypot(e.clientX-o[0],e.clientY-o[1]),55,180)}
 else{yaw-=dx*.008;if(e.pointerType=='mouse')pitch=cl(pitch+dy*.006,-.5,1.2)}
 hit+=Math.abs(dx)+Math.abs(dy);pts.set(e.pointerId,[e.clientX,e.clientY])});
['pointerup','pointercancel'].forEach(n=>addEventListener(n,e=>{if(!pts.has(e.pointerId))return;pts.delete(e.pointerId);if(n=='pointerup'&&hit<6&&!pts.size)pick(e)}));
el.addEventListener('wheel',e=>{e.preventDefault();td=cl(td*(1+e.deltaY*.001),55,180)},{passive:false});
new ResizeObserver(()=>{const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;R.setSize(w,h,false);Cam.aspect=w/h;Cam.updateProjectionMatrix();td=dist=105*Math.max(1,1.25/(w/h))}).observe(el);
new IntersectionObserver(([e])=>run=e.isIntersecting).observe(el);
function tick(){requestAnimationFrame(tick);if(!run||document.hidden)return;const dt=Math.min(.05,(performance.now()-t0)/1000);t0=performance.now();
dist+=(td-dist)*.15;Cam.position.set(dist*Math.cos(pitch)*Math.sin(yaw),dist*Math.sin(pitch),dist*Math.cos(pitch)*Math.cos(yaw));Cam.lookAt(0,0,0);
K.forEach(k=>{const p=P3[k];if(!p||!p.g)return;const e=ex?EX[k]:EX.cs;p.g.position.lerp(tmp.set(p.base.x+e[0],p.base.y+e[1],p.base.z+e[2]),.12);if(p.on)p.fans.forEach(f=>f.rotation.z-=dt*9)});
if(hl)hl.update();R.render(S,Cam)}
tick();
window.PC3D={sync,onPick(){},explode(v){ex=v;if(P3.cs&&P3.cs.g)P3.cs.g.visible=!ex},reset(){yaw=.5;pitch=.22;td=105}};
})();
