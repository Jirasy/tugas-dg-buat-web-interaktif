const C=[
{k:'cpu',n:'CPU (prosesor)',s:'CPU',d:'CPU adalah “otak” komputer. Ia menjalankan program, menghitung, dan mengatur lalu lintas data antar komponen lain.',t:'Untuk gaming, pilih kecepatan per core yang tinggi. Untuk edit video dan rendering, pilih jumlah core yang banyak. Socket harus sama dengan motherboard.',g:[['Core dan thread','Jumlah “pekerja” yang bisa mengerjakan tugas bersamaan.'],['Socket','Bentuk dudukan CPU. Harus sama dengan motherboard.'],['TDP','Perkiraan daya dan panas CPU, dalam watt.']],
o:[['AMD Ryzen 5 5600','AM4, 6 core / 12 thread, 65 W',1650,{sk:'AM4',w:65,ig:0,r:4}],['Intel Core i5-12400F','LGA1700, 6 core / 12 thread, 65 W',2100,{sk:'LGA1700',w:65,ig:0,r:5}],['AMD Ryzen 5 7600','AM5, 6 core / 12 thread, 65 W, grafis bawaan',3300,{sk:'AM5',w:65,ig:1,r:6}],['AMD Ryzen 7 9700X','AM5, 8 core / 16 thread, 65 W, grafis bawaan',5600,{sk:'AM5',w:65,ig:1,r:8}],['AMD Ryzen 9 9950X','AM5, 16 core / 32 thread, 170 W, grafis bawaan',11500,{sk:'AM5',w:170,ig:1,r:10}]]},
{k:'mb',n:'Motherboard',s:'Motherboard',d:'Motherboard adalah papan utama yang menghubungkan semua komponen: CPU, RAM, GPU, SSD, dan power supply.',t:'Cocokkan socket CPU dan jenis RAM (DDR4 atau DDR5). Ukuran papan menentukan jumlah slot dan casing yang bisa dipakai.',g:[['Chipset','Penentu fitur papan seperti jumlah port dan dukungan overclock.'],['Form factor','Ukuran fisik papan: Mini-ITX lebih kecil dari mATX, lalu ATX.'],['PCIe','Jalur data untuk GPU dan SSD NVMe. Versi baru lebih cepat.']],
o:[['ASUS Prime A520M-K','AM4, mATX, DDR4',900,{sk:'AM4',rt:'DDR4',ff:2,r:3}],['MSI Pro B660M-A','LGA1700, mATX, DDR4',1800,{sk:'LGA1700',rt:'DDR4',ff:2,r:4}],['Gigabyte B650M Gaming','AM5, mATX, DDR5',2100,{sk:'AM5',rt:'DDR5',ff:2,r:6}],['ASUS TUF Gaming B650','AM5, ATX, DDR5, Wi-Fi',3600,{sk:'AM5',rt:'DDR5',ff:3,r:7}],['ASRock B650I Lightning','AM5, Mini-ITX, DDR5, Wi-Fi',3800,{sk:'AM5',rt:'DDR5',ff:1,r:7}],['MSI MAG X870 Tomahawk','AM5, ATX, DDR5, PCIe 5.0',5200,{sk:'AM5',rt:'DDR5',ff:3,r:9}]]},
{k:'ram',n:'RAM (memori)',s:'RAM',d:'RAM adalah memori kerja sementara. Semua program dan file yang sedang dibuka disimpan di sini agar cepat dijangkau CPU.',t:'16 GB cukup untuk kantor dan gaming ringan, 32 GB ideal untuk gaming modern dan editing, 64 GB untuk rendering berat. Pakai dua keping agar dual channel aktif.',g:[['DDR4 dan DDR5','Generasi RAM. Tidak bisa dipertukarkan antar motherboard.'],['MHz','Kecepatan transfer data. Makin tinggi makin cepat.'],['Dual channel','Dua keping bekerja paralel untuk bandwidth ganda.']],
o:[['Kingston Fury 16 GB (2x8)','DDR4-3200, 16 GB',650,{rt:'DDR4',r:3}],['Corsair Vengeance 32 GB (2x16)','DDR4-3600, 32 GB',1150,{rt:'DDR4',r:5}],['Kingston Fury Beast 16 GB (2x8)','DDR5-5600, 16 GB',1250,{rt:'DDR5',r:5}],['G.Skill Ripjaws 32 GB (2x16)','DDR5-6000 CL30, 32 GB',2300,{rt:'DDR5',r:7}],['Corsair Vengeance 64 GB (2x32)','DDR5-6000, 64 GB',4600,{rt:'DDR5',r:9}]]},
{k:'gpu',n:'GPU (kartu grafis)',s:'GPU',d:'GPU memproses gambar, video, dan efek 3D. Ia penentu utama kelancaran gim dan render visual. Pada PC kantor, grafis bawaan CPU sering sudah cukup.',t:'Tentukan resolusi monitor lebih dulu: 1080p cukup GPU menengah, 1440p dan 4K butuh kelas atas. Cek panjang kartu terhadap casing dan kebutuhan daya PSU.',g:[['VRAM','Memori khusus GPU. Penting untuk tekstur resolusi tinggi.'],['Ray tracing','Teknik pencahayaan realistis yang menuntut GPU kuat.'],['Panjang kartu','Harus muat di dalam casing.']],
o:[['NVIDIA GeForce RTX 3050 6 GB','6 GB GDDR6, 70 W, panjang 240 mm',2500,{w:70,l:240,r:3}],['AMD Radeon RX 9060 XT 16 GB','16 GB GDDR6, 160 W, panjang 270 mm',6200,{w:160,l:270,r:6}],['NVIDIA GeForce RTX 5070 12 GB','12 GB GDDR7, 250 W, panjang 300 mm',9800,{w:250,l:300,r:8}],['NVIDIA GeForce RTX 5080 16 GB','16 GB GDDR7, 360 W, panjang 330 mm',21000,{w:360,l:330,r:10}]]},
{k:'sto',n:'Storage (penyimpanan)',s:'Storage',d:'Storage menyimpan sistem operasi, aplikasi, dan file Anda secara permanen, bahkan saat komputer mati.',t:'Pakai SSD NVMe untuk sistem dan gim agar booting dan loading cepat. 1 TB adalah titik awal yang nyaman.',g:[['SATA dan NVMe','NVMe dipasang langsung ke motherboard dan jauh lebih cepat dari SATA.'],['Gen4 dan Gen5','Generasi antarmuka PCIe. Angka lebih tinggi lebih cepat.'],['TBW','Batas total data yang boleh ditulis sebelum SSD aus.']],
o:[['SSD SATA 480 GB','SATA III, sekitar 550 MB/s',450,{r:3}],['SSD NVMe Gen4 1 TB','PCIe 4.0, sekitar 5.000 MB/s',1100,{r:6}],['SSD NVMe Gen4 2 TB','PCIe 4.0, sekitar 7.000 MB/s',2200,{r:8}],['SSD NVMe Gen5 2 TB','PCIe 5.0, sekitar 12.000 MB/s',3900,{r:10}]]},
{k:'cool',n:'Pendingin CPU',s:'Pendingin',d:'Pendingin membuang panas dari prosesor agar suhunya stabil dan performanya tidak turun.',t:'Air cooler murah, awet, dan mudah dipasang. AIO lebih senyap untuk CPU bertenaga besar, tetapi butuh casing yang mendukung radiator.',g:[['AIO','Pendingin cair siap pakai: pompa, pipa, dan radiator jadi satu.'],['Thermal paste','Pasta penghantar panas antara CPU dan pendingin.'],['Throttling','CPU menurunkan kecepatan sendiri saat terlalu panas.']],
o:[['Air cooler tower tunggal','Heatsink udara, sanggup sampai 150 W',350,{rd:0,cap:150,r:4}],['Air cooler dual tower','Heatsink udara, sanggup sampai 220 W',850,{rd:0,cap:220,r:6}],['Liquid cooler AIO 240 mm','Radiator 240 mm, sanggup sampai 250 W',1600,{rd:240,cap:250,r:8}],['Liquid cooler AIO 360 mm','Radiator 360 mm, sanggup sampai 320 W',2500,{rd:360,cap:320,r:9}]]},
{k:'psu',n:'PSU (power supply)',s:'PSU',d:'PSU mengubah listrik rumah menjadi daya stabil untuk seluruh komponen.',t:'Pilih daya sesuai estimasi kebutuhan ditambah cadangan sekitar 30%. Jangan berhemat di PSU, kualitas buruk bisa merusak komponen lain.',g:[['80 Plus','Sertifikasi efisiensi. Gold lebih hemat listrik dan lebih dingin.'],['Modular','Kabel bisa dilepas sehingga rakitan lebih rapi.'],['Watt','Total daya maksimum yang bisa dialirkan.']],
o:[['Corsair CV450','450 W, 80 Plus Bronze',550,{w:450,r:3}],['Seasonic Focus 650','650 W, 80 Plus Gold',1250,{w:650,r:6}],['Corsair RM850e','850 W, 80 Plus Gold, ATX 3.1',1950,{w:850,r:8}],['Corsair RM1000x','1000 W, 80 Plus Gold, ATX 3.1',2700,{w:1000,r:9}]]},
{k:'cs',n:'Casing',s:'Casing',d:'Casing adalah rumah bagi semua komponen. Ia melindungi, mengalirkan udara, dan menentukan tampilan PC.',t:'Pastikan casing mendukung ukuran motherboard, panjang GPU, dan radiator. Panel mesh biasanya punya sirkulasi udara lebih baik.',g:[['Airflow','Aliran udara masuk dan keluar untuk menjaga suhu.'],['Mid tower','Ukuran umum yang muat motherboard ATX.'],['Cable management','Ruang untuk merapikan kabel di balik panel.']],
o:[['Casing Mini-ITX compact','Mini-ITX, GPU maks 290 mm, radiator 120 mm',1500,{ff:1,l:290,rd:120,r:6}],['Casing Micro-ATX airflow','mATX, GPU maks 320 mm, radiator 240 mm',700,{ff:2,l:320,rd:240,r:5}],['Casing ATX mesh mid tower','ATX, GPU maks 380 mm, radiator 360 mm',1100,{ff:3,l:380,rd:360,r:7}],['Casing ATX full tower kaca','ATX, GPU maks 420 mm, radiator 420 mm',2300,{ff:3,l:420,rd:420,r:9}]]}
];
C.forEach(c=>c.o=c.o.map(([n,sp,p,a],i)=>({id:c.k+i,k:c.k,n,sp,p,...a})));
const M=Object.fromEntries(C.map(c=>[c.k,c]));
const PF=[
{n:'Kantor dan belajar',d:'Dokumen, rapat online, browsing, dan streaming dengan listrik hemat.',b:'Rp 8–10 jt',mx:10000,set:{cpu:2,mb:2,ram:2,sto:1,cool:0,psu:0,cs:1}},
{n:'Gaming',d:'Gim modern di 1080p hingga 1440p dengan frame rate tinggi.',b:'Rp 15–20 jt',mx:20000,set:{cpu:2,mb:2,ram:3,gpu:1,sto:1,cool:0,psu:1,cs:2}},
{n:'Kreator konten',d:'Edit video, desain, dan streaming sekaligus tanpa tersendat.',b:'Rp 28–35 jt',mx:35000,set:{cpu:3,mb:3,ram:4,gpu:2,sto:2,cool:2,psu:2,cs:2}},
{n:'PC mini compact',d:'Ukuran ringkas untuk meja kecil, tetap bertenaga untuk gim dan kerja.',b:'Rp 18–22 jt',mx:22000,set:{cpu:2,mb:4,ram:3,gpu:1,sto:2,cool:0,psu:1,cs:0}},
{n:'Workstation ekstrem',d:'Rendering 3D, simulasi, dan multitasking berat tanpa kompromi.',b:'Rp 50–60 jt',mx:60000,set:{cpu:4,mb:5,ram:4,gpu:3,sto:3,cool:3,psu:3,cs:3}},
{n:'Mulai dari nol',d:'Pilih setiap komponen sendiri sambil belajar fungsi dan kecocokannya.',b:'Bebas',mx:30000,set:{}}
];
const $=s=>document.querySelector(s);
let B={},P=-1,cur='cpu';
const idr=n=>'Rp '+(n*1000).toLocaleString('id-ID');
const mk=s=>Object.fromEntries(Object.entries(s).map(([k,i])=>[k,M[k].o[i]]));
const W={cpu:[.3,.4,.3],gpu:[.45,.1,.3],ram:[.15,.3,.25],sto:[.1,.2,.15]};
const perf=b=>[0,1,2].map(i=>{let t=0;for(const k in W)t+=W[k][i]*(b[k]?b[k].r:(k=='gpu'&&b.cpu&&b.cpu.ig?1:0));return Math.round(t*10)});
const need=b=>Math.ceil(((b.cpu?b.cpu.w:0)+(b.gpu?b.gpu.w:0)+80)*1.3/50)*50;
const total=b=>Object.values(b).reduce((s,o)=>s+o.p,0);
function chk(b){const R=[],t=(c,y,n,k,l)=>R.push({s:c?'ok':(l||'err'),t:c?y:n,c:k}),{cpu,mb,ram,gpu,psu,cs,cool}=b;
if(cpu&&mb)t(cpu.sk==mb.sk,'Socket CPU dan motherboard cocok ('+cpu.sk+')','Socket CPU ('+cpu.sk+') tidak cocok dengan motherboard ('+mb.sk+')',['cpu','mb']);
if(ram&&mb)t(ram.rt==mb.rt,'Jenis RAM cocok ('+ram.rt+')','RAM '+ram.rt+' tidak cocok dengan slot motherboard ('+mb.rt+')',['ram','mb']);
if(mb&&cs)t(mb.ff<=cs.ff,'Motherboard muat di casing','Motherboard terlalu besar untuk casing ini',['mb','cs']);
if(gpu&&cs)t(gpu.l<=cs.l,'GPU muat di casing','GPU ('+gpu.l+' mm) melebihi batas casing ('+cs.l+' mm)',['gpu','cs']);
if(cool&&cs&&cool.rd)t(cool.rd<=cs.rd,'Radiator muat di casing','Casing tidak mendukung radiator '+cool.rd+' mm',['cool','cs']);
if(cool&&cpu)t(cool.cap>=cpu.w,'Pendingin cukup untuk CPU','Pendingin kurang kuat untuk CPU '+cpu.w+' W',['cool','cpu'],'warn');
if(cpu&&!gpu)t(cpu.ig,'CPU memakai grafis bawaan','CPU ini tanpa grafis bawaan, butuh GPU agar ada tampilan',['gpu','cpu'],'warn');
if(psu&&(cpu||gpu)){const n=need(b);t(psu.w>=n,'Daya PSU mencukupi','PSU '+psu.w+' W kurang dari saran '+n+' W',['psu','cpu','gpu'])}
return R}
const kc=(l,v,x)=>`<div class="kc"><u>${l}</u><span class="kl"><i class="${x||''}" style="width:${Math.min(100,v)}%"></i></span>${x==null?'':''}</div>`;
function rPf(){$('#pf').innerHTML=PF.map((p,i)=>{const f=Object.keys(p.set).length,v=perf(mk(p.set));return`<button class="pc${i==P?' on':''}" data-a="pf" data-v="${i}" aria-pressed="${i==P}"><span class="tk"></span><strong>${p.n}</strong><small>${p.d}</small><span class="bd">${p.b}</span>${f?['Gaming','Kerja','Kreasi'].map((l,j)=>kc(l,v[j])).join(''):''}</button>`}).join('')}
function rRig(){$('#bcs').classList.toggle('p',!!B.cs);PC3D.sync(B,cur,M);const n=C.filter(c=>B[c.k]).length;$('#pg').style.width=n/8*100+'%';$('#pgt').textContent=n+' dari 8'}
function rTabs(){const ch=chk(B);$('#tabs').innerHTML=C.map(c=>{const e=ch.some(x=>x.s=='err'&&x.c.includes(c.k));return`<button class="tb${c.k==cur?' on':''}" data-a="cat" data-v="${c.k}" role="tab"><span class="dt${e?' e':B[c.k]?' f':''}"></span>${c.s}</button>`}).join('');const el=$('.tb.on'),tb=$('#tabs');tb.scrollLeft=el.offsetLeft-(tb.clientWidth-el.offsetWidth)/2}
function rCat(){const c=M[cur];$('#cat').innerHTML=`<div class="info"><h3>${c.n}</h3><p class="lead">${c.d}</p><div class="tip"><b>Cara memilih</b>${c.t}</div><dl>${c.g.map(([a,d])=>`<div><dt>${a}</dt><dd>${d}</dd></div>`).join('')}</dl></div><div class="og">${c.o.map(o=>{const bad=chk({...B,[c.k]:o}).find(x=>x.s=='err'&&x.c.includes(c.k)),on=B[c.k]&&B[c.k].id==o.id;return`<button class="oc${on?' on':''}${bad?' bad':''}" data-a="opt" data-v="${o.id}" aria-pressed="${!!on}"><span class="tk"></span><strong>${o.n}</strong><small>${o.sp}</small>${kc('Kelas',o.r*10)}<span class="ft"><b>${idr(o.p)}</b>${bad?'<em>Tidak cocok</em>':''}</span>${bad?'<small class="rs">'+bad.t+'</small>':''}</button>`}).join('')}</div><p class="hint">Ketuk kartu yang sudah terpilih untuk membatalkannya.</p>`}
function rSum(){const b=B,ch=chk(b),er=ch.filter(x=>x.s=='err').length,wn=ch.filter(x=>x.s=='warn').length,miss=C.filter(c=>!b[c.k]&&!(c.k=='gpu'&&b.cpu&&b.cpu.ig)).length,tot=total(b),pf=perf(b),n=need(b),mx=P>=0?PF[P].mx:30000,
st=er?['Ada masalah','er']:miss?['Belum lengkap','wn']:wn?['Perlu perhatian','wn']:['Siap dirakit','ok'],psu=b.psu;
$('#sum').innerHTML=`<button class="bar" data-a="tog" aria-label="Buka ringkasan"><div><span>Total perkiraan</span><b>${idr(tot)}</b></div><div><span class="chip ${st[1]}">${st[0]}</span><i class="cv"></i></div></button><div class="bd2"><div class="hd"><h3>Rakitan Anda</h3><span class="chip ${st[1]}">${st[0]}</span></div>
<ul class="ls">${C.map(c=>`<li><button data-a="jump" data-v="${c.k}"><span class="l">${c.s}</span>${b[c.k]?`<span class="n">${b[c.k].n}</span><span class="p">${idr(b[c.k].p)}</span>`:'<span class="n e">Belum dipilih</span><span></span>'}</button></li>`).join('')}</ul>
<div class="tot"><span>Total perkiraan</span><b>${idr(tot)}</b></div>${kc('Anggaran',tot/mx*100,tot>mx?'er':'')}<p class="nt">${P>=0&&PF[P].set&&Object.keys(PF[P].set).length?'Anggaran profil '+PF[P].n+': '+PF[P].b:'Pilih profil untuk melihat saran anggaran.'}</p>
<h4>Estimasi performa</h4>${['Gaming','Produktivitas','Kreator'].map((l,i)=>kc(l,pf[i])).join('')}
<h4>Kebutuhan daya</h4>${kc('Saran PSU',psu?n/psu.w*100:(n?100:0),psu&&n>psu.w?'er':'')}<p class="nt">${n?'Saran minimal '+n+' W':'Belum ada CPU atau GPU.'}${psu?', PSU terpilih '+psu.w+' W':''}</p>
<h4>Pengecekan kecocokan</h4><ul class="ck">${ch.map(x=>`<li class="${x.s}"><i></i>${x.t}</li>`).join('')}${miss?`<li class="warn"><i></i>${miss} komponen belum dipilih</li>`:''}${!ch.length&&!miss?'':''}</ul>
<div class="act"><button class="btn p" data-a="copy">Salin ringkasan</button><button class="btn" data-a="reset">Reset</button></div></div>`}
function R(){rPf();rRig();rTabs();rCat();rSum()}
function go(s){document.querySelector(s).scrollIntoView({behavior:'smooth',block:'start'})}
function toast(m){const e=$('#ts');e.textContent=m;e.classList.add('show');setTimeout(()=>e.classList.remove('show'),1800)}
function copy(){const t='Rakitan PC ('+(P>=0?PF[P].n:'kustom')+')\n'+C.map(c=>c.s+': '+(B[c.k]?B[c.k].n+', '+idr(B[c.k].p):'-')).join('\n')+'\nTotal: '+idr(total(B));
(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>toast('Ringkasan disalin'),()=>toast('Salin otomatis tidak tersedia di sini'))}
document.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(!t)return;const a=t.dataset.a,v=t.dataset.v;let sc=null;
if(a=='theme'){const d=document.documentElement,dk=d.dataset.theme?d.dataset.theme=='dark':matchMedia('(prefers-color-scheme:dark)').matches;d.dataset.theme=dk?'light':'dark';return}
if(a=='ex'){PC3D.explode(t.classList.toggle('p'));return}
if(a=='rot'){PC3D.reset();return}
if(a=='go'){go(v);return}
if(a=='copy'){copy();return}
if(a=='tog'){$('#sum').classList.toggle('open');return}
if(a=='pf'){P=+v;B=mk(PF[P].set);sc='#s2'}
else if(a=='cat')cur=v;
else if(a=='jump'){cur=v;$('#sum').classList.remove('open');sc='#tabs'}
else if(a=='opt'){const o=M[cur].o.find(x=>x.id==v);if(B[cur]&&B[cur].id==v)delete B[cur];else B[cur]=o}
else if(a=='reset'){B={};P=-1}
R();if(sc)go(sc)});
const cp=()=>{$('#prof').hidden=true;$('.av').setAttribute('aria-expanded','false')};
document.addEventListener('click',e=>{if(!e.target.closest('.me'))cp()});
addEventListener('keydown',e=>{if(e.key=='Escape')cp()});
PC3D.onPick=k=>{cur=k;$('#sum').classList.remove('open');R();go('#tabs')};
R();
