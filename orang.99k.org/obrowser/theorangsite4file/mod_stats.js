GAddMessages({});
__gjsload_maps2_api__('stats', 'if(window.gmapstiming){window.gmapstiming.Tv={};window.gmapstiming.HO=1;var bz=function(a,b,c){var d=a.t[b],f=a.t.start;if(d&&(f||c)){d=a.t[b][0];f=c!=undefined?c:f[0];return d-f}}; window.gmapstiming.getTick=bz;window.gmapstiming.getLabels=function(a){var b=[];for(var c in a.t)b.push(c);return b}; window.gmapstiming.setTimerName=function(a,b){a.name=b}; window.gmapstiming.report=function(a,b,c){var d="";if(window.gmapstiming.pt){d+="&srt="+window.gmapstiming.pt;delete window.gmapstiming.pt}try{if(window.external&&window.external.tran)d+="&tran="+window.external.tran;else if(window.gtbExternal&&window.gtbExternal.tran)d+="&tran="+window.gtbExternal.tran();else if(window.chrome&&window.chrome.csi)d+="&tran="+window.chrome.csi().tran}catch(f){}var g=document.getElementById("csi");if(g){var h;if(window.gmapstiming._bfr!=undefined)h=window.gmapstiming._bfr; else{h=g.value;window.gmapstiming._bfr=h;g.value=1}h&&(d+="&bfr=1")}if(a.Di)d+="&"+a.Di;g=a.t;h=g.start;var k=[],o=[];for(var p in g)if(p!="start")if(p.indexOf("_")!=0){var r=g[p][1];if(r)g[r]&&o.push(p+"."+bz(a,p,g[r][0]));else h&&k.push(p+"."+bz(a,p))}delete g.start;if(b)for(var u in b)d+="&"+u+"="+b[u];a=[c?c:"http://csi.gstatic.com/csi","?v=3","&s="+(window.gmapstiming.sn||"mfeundefined")+"&action=",a.name,o.length?"&it="+o.join(","):"","",d,"&rt=",k.join(",")].join("");b=new Image;var F=window.gmapstiming.HO++; window.gmapstiming.Tv[F]=b;b.onload=b.onerror=function(){delete window.gmapstiming.Tv[F]}; b.src=a;b=i;return a}};var cz="mfe",dz=i,ez=[];function fz(a,b,c){var d=ub||"http://gg."+_mDomain+"/csi",f={};if(dz)f.e=dz;Ae(c)||(f.cad=ji(c));var g=new window.gmapstiming.Timer(1);mc(b,function(h,k){k[0]!="start"&&g.tick(k[0],i,k[1]+1)}); window.gmapstiming.setTimerName(g,a);window.gmapstiming.sn=cz;window.gmapstiming.report(g,f,d)} function gz(a){var b=new Image,c=hz++;iz[c]=b;b.onload=b.onerror=function(){delete iz[c]}; b.src=a;b=i} var iz={},hz=0;function jz(a){if(a=="application"||a=="application_link"||a=="apiboot"||a=="details_page"||a=="embed"||a=="textview_results"||a=="placepage"||a=="print"){kz.apply(i,arguments);t(ez,function(b){kz.apply(i,b)}); ez=i}else ez?ez.push(Ie(arguments)):kz.apply(i,arguments)} function kz(a,b,c){fz(a,b,c);if(a=="application"||a=="vpage"||a=="vpage-history"||a=="msrender"||a=="msserver"||a=="mymaps")Xi(lz(a,b))} function lz(a,b){var c=_mUri+"/l",d=[],f={};t(b,function(g){d.push(g[0]+"."+g[1])}); f.stat_m=a+":"+d.join(",");return c+gg(f,e)} function mz(a,b){gz(nz(a,b))} function nz(a,b){var c={};if(!Ae(a)){ze(c,a);c.oi="jsaction";c.sa="T"}if(!Ae(b)){var d=[];mc(b,function(f,g){d.push([f,g].join(ea))}); if(s(d)>0){d.unshift("jsaction");c.imp=d.join(fa)}}return _mHost+"/maps/gen_204"+gg(c,e)} function oz(a,b,c,d){gz(pz(a,b,c,d))} function pz(a,b,c,d){var f=["/maps/dcrt"];f.push("?cookie="+a);f.push("&start="+b);f.push("&end="+c);f.push("&name=maps."+d);return f.join("")} function qz(a){dz=a} function rz(a){cz=a} ;U("stats",gb,jz);U("stats",hb,mz);U("stats",ib,qz);U("stats",jb,rz);U("stats",kb,oz);U("stats",6,gz);U("stats");');