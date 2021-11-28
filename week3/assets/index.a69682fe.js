import{o as p,c as h,a as r,w as m,v as w,b,d as S,t as u,n as y,F as C,r as T,e as k,f as x}from"./vendor.b1d52e22.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};M();const A="https://ptx.transportdata.tw/MOTC/v2",z="$format=JSON";class N{async call(e){const n=A+e+"?"+z,a=new Date().toUTCString(),t=await D("FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF","x-date: "+a);return await(await fetch(n,{headers:new Headers({Authorization:`hmac username="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF", algorithm="hmac-sha1", headers="x-date", signature="${t}"`,"x-date":a})})).json()}async bus(e){return await this.call("/Bus"+e)}}async function D(o,e){const n=new TextEncoder("utf-8"),a=await window.crypto.subtle.importKey("raw",n.encode(o),{name:"HMAC",hash:{name:"SHA-1"}},!1,["sign","verify"]),t=await window.crypto.subtle.sign("HMAC",a,n.encode(e));new TextDecoder("utf8");const i=new Uint8Array(t);return btoa(String.fromCharCode.apply(null,i))}var E="./assets/bus.7d9f06ba.svg";var O=(o,e)=>{const n=o.__vccOpts||o;for(const[a,t]of e)n[a]=t;return n};const g=new N("a","b"),f={};let l;const q={created(){},mounted(){l=L.map("map",{zoomControl:!1}).setView([25.033964,121.564468],16),L.control.zoom({position:"bottomright"}).addTo(l),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(l),new ResizeObserver(()=>{l.invalidateSize()}).observe(this.$refs.map),l.on("zoomend",()=>{document.querySelectorAll("#map .map-marker-icon-wrapper").forEach(e=>{e.style.fontSize=1/Math.pow(1.2,18-l.getZoom())+"em"})})},data(){return{city:"Hsinchu",route:"",qroute:"",stops:[[],[]],direction:0,layers:[{},{}]}},computed:{destinations(){return this.stops.map(o=>o.length==0?"":o[o.length-1].name)},showRouteBanner(){return this.stops[0].length>0&&this.stops[1].length>0&&this.qroute!=""}},watch:{direction(){l.removeLayer(this.layers[1-this.direction]),l.addLayer(this.layers[this.direction]);const o=this.stops[this.direction].length,e=this.stops[this.direction][Math.floor(o/2)].latlng;l.setView(e,14),document.querySelectorAll("#map .map-marker-icon-wrapper").forEach(n=>{n.style.fontSize=1/Math.pow(1.2,18-l.getZoom())+"em"})}},methods:{panTo(o){l.panTo(o)},async displayRoute(){this.layers.forEach(s=>l.removeLayer(s));const e="/EstimatedTimeOfArrival/Streaming/City/"+this.city+"/"+this.route,n=await g.bus(e),a={0:{},1:{}};for(let s of n){const c=a[s.Direction],d=s.StopName.Zh_tw;s.StopStatus;const v=s.EstimateTime;if(d in c){const F=c[d];(F.EstimateTime==""||v!=""&&v<F.EstimateTime)&&(c[d]=s)}else c[d]=s}this.qroute=this.route,this.stops=[await this.toStopList(a[0]),await this.toStopList(a[1])],this.layers=[_(this.stops[0]),_(this.stops[1])],l.addLayer(this.layers[0]);const t=this.stops[this.direction].length,i=this.stops[this.direction][Math.floor(t/2)].latlng;l.setView(i,14),document.querySelectorAll("#map .map-marker-icon-wrapper").forEach(s=>{s.style.fontSize=1/Math.pow(1.2,18-l.getZoom())+"em"})},selectDirection(o){this.direction=o},async getStopLocation(o,e){return(await this.getCityStopLocation(o))[e]},async getCityStopLocation(o){const e="/Stop/City/";if(o in f)return f[o];{const n=await g.bus(e+o),a={};for(let t of n)a[t.StopUID]=t.StopPosition;return f[o]=a,a}},async toStopList(o){const e=await this.getCityStopLocation(this.city);return Object.values(o).sort((n,a)=>parseInt(n.StopSequence)-parseInt(a.StopSequence)).map(n=>{const a=n.StopUID,t=e[a];return{id:a,name:n.StopName.Zh_tw,time:H(n.StopStatus,parseInt(n.EstimateTime)),latlng:[t.PositionLat,t.PositionLon]}})}}},U={0:"\u5373\u5C07\u9032\u7AD9",1:"\u5C1A\u672A\u767C\u8ECA",2:"\u4EA4\u7BA1\u4E0D\u505C\u9760",3:"\u672B\u73ED\u8ECA\u5DF2\u904E",4:"\u4ECA\u65E5\u672A\u71DF\u904B"};function H(o,e){if(isNaN(e))return U[o];const n=Math.floor(e/60),a=e%60;let t="";return n!=0&&(t+=n+"\u5206"),t+=a+"\u79D2",t}function _(o){let e=[];for(let n in o)e.push(L.marker(o[n].latlng,{icon:new L.DivIcon({className:"map-marker-icon-wrapper",html:`<div class="map-marker-icon">${parseInt(n)+1}</div>`})}).bindTooltip(o[n].name));return L.layerGroup(e)}const I={id:"container"},R=r("div",{id:"header"},[r("h1",{id:"title"},"\u966A\u4F60\u7B49\u516C\u8ECA"),r("img",{id:"header-bus",src:E})],-1),B={id:"main"},P={id:"content"},V={class:"relative"},Z={id:"searchbar"},j=k('<option value="Hsinchu">\u65B0\u7AF9\u5E02</option><option value="HsinchuCounty">\u65B0\u7AF9\u7E23</option><option value="MiaoliCounty">\u82D7\u6817\u7E23</option><option value="ChanghuaCounty">\u5F70\u5316\u7E23</option><option value="NantouCounty">\u5357\u6295\u7E23</option><option value="YunlinCounty">\u96F2\u6797\u7E23</option><option value="ChiayiCounty">\u5609\u7FA9\u7E23</option><option value="Chiayi">\u5609\u7FA9\u5E02</option><option value="PingtungCounty">\u5C4F\u6771\u7E23</option><option value="YilanCounty">\u5B9C\u862D\u7E23</option><option value="HualienCounty">\u82B1\u84EE\u7E23</option><option value="TaitungCounty">\u81FA\u6771\u7E23</option><option value="PenghuCounty">\u6F8E\u6E56\u7E23</option>',13),G=[j],K=r("div",{id:"search-triangle"},null,-1),Y={class:"relative"},J={id:"banner-container"},X={class:"banner"},Q={class:"font-larger",style:{flex:"0.2"}},W=r("div",{style:{flex:"0.1"}},"\u5F80",-1),$={id:"route-directions"},tt={id:"content-list"},et=["onClick"],ot={class:"serial-no"},nt={class:"name"},it={class:"time"},st={id:"map",ref:"map"};function at(o,e,n,a,t,i){return p(),h("div",I,[R,r("div",B,[r("div",P,[r("div",V,[r("div",Z,[m(r("select",{name:"city",class:"font-larger bg-yellow searchbar-input",style:{flex:"0.4"},"onUpdate:modelValue":e[0]||(e[0]=s=>t.city=s)},G,512),[[w,t.city]]),m(r("input",{class:"font-larger bg-yellow searchbar-input",style:{flex:"0.8","min-width":"7em"},type:"text",name:"route",placeholder:"\u516C\u8ECA\u8DEF\u7DDA","onUpdate:modelValue":e[1]||(e[1]=s=>t.route=s)},null,512),[[b,t.route]]),r("button",{class:"font-larger bg-orange searchbar-input",style:{cursor:"pointer"},name:"search",onClick:e[2]||(e[2]=(...s)=>i.displayRoute&&i.displayRoute(...s))}," Go! ")]),K]),r("div",Y,[r("div",J,[m(r("div",X,[r("div",Q,u(t.qroute),1),W,r("div",$,[r("div",{class:y(["destination",t.direction==1?"unselected":""]),onClick:e[3]||(e[3]=s=>i.selectDirection(0))},u(i.destinations[0]),3),r("div",{class:y(["destination",t.direction==0?"unselected":""]),onClick:e[4]||(e[4]=s=>i.selectDirection(1))},u(i.destinations[1]),3)])],512),[[S,i.showRouteBanner]])]),r("div",{id:"banner-triangle",class:y(i.showRouteBanner?"pink":"blue")},null,2)]),r("div",tt,[(p(!0),h(C,null,T(t.stops[t.direction],(s,c)=>(p(),h("div",{class:"item",key:c,onClick:d=>i.panTo(s.latlng)},[r("div",ot,u(c+1),1),r("div",nt,u(s.name),1),r("div",it,u(s.time),1)],8,et))),128))])]),r("div",st,null,512)])])}var rt=O(q,[["render",at]]);x(rt).mount("#app");
