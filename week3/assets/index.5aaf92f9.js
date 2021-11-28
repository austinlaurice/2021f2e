import{o as p,c as h,a,w as m,v as w,b,d as S,t as d,n as y,F as C,r as T,e as k,f as x}from"./vendor.b1d52e22.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};M();const A="https://ptx.transportdata.tw/MOTC/v2",N="$format=JSON";class z{async call(e){const n=A+e+"?"+N,s=new Date().toUTCString(),t=await D("FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF","x-date: "+s);return await(await fetch(n,{headers:new Headers({Authorization:`hmac username="FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF", algorithm="hmac-sha1", headers="x-date", signature="${t}"`,"x-date":s})})).json()}async bus(e){return await this.call("/Bus"+e)}}async function D(o,e){const n=new TextEncoder("utf-8"),s=await window.crypto.subtle.importKey("raw",n.encode(o),{name:"HMAC",hash:{name:"SHA-1"}},!1,["sign","verify"]),t=await window.crypto.subtle.sign("HMAC",s,n.encode(e));new TextDecoder("utf8");const i=new Uint8Array(t);return btoa(String.fromCharCode.apply(null,i))}var O="./assets/bus.7d9f06ba.svg";var E=(o,e)=>{const n=o.__vccOpts||o;for(const[s,t]of e)n[s]=t;return n};const g=new z("a","b"),f={};let l;const U={created(){},mounted(){l=L.map("map",{zoomControl:!1}).setView([25.033964,121.564468],16),L.control.zoom({position:"bottomright"}).addTo(l),L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(l),new ResizeObserver(()=>{l.invalidateSize()}).observe(this.$refs.map),l.on("zoomend",()=>{document.querySelectorAll("#map .map-marker-icon-wrapper").forEach(e=>{e.style.fontSize=1/Math.pow(1.2,18-l.getZoom())+"em"})})},data(){return{city:"Hsinchu",route:"",stops:[[],[]],direction:0,layers:[{},{}]}},computed:{destinations(){return this.stops.map(o=>o.length==0?"":o[o.length-1].name)},showRouteBanner(){return this.stops[0].length>0&&this.stops[1].length>0&&this.route!=""}},watch:{direction(){l.removeLayer(this.layers[1-this.direction]),l.addLayer(this.layers[this.direction]);const o=this.stops[this.direction].length,e=this.stops[this.direction][Math.floor(o/2)].latlng;l.setView(e,14),document.querySelectorAll("#map .map-marker-icon-wrapper").forEach(n=>{n.style.fontSize=1/Math.pow(1.2,18-l.getZoom())+"em"})}},methods:{panTo(o){l.panTo(o)},async displayRoute(){const e="/EstimatedTimeOfArrival/Streaming/City/"+this.city+"/"+this.route,n=await g.bus(e),s={0:{},1:{}};for(let r of n){const c=s[r.Direction],u=r.StopName.Zh_tw;r.StopStatus;const v=r.EstimateTime;if(u in c){const F=c[u];(F.EstimateTime==""||v!=""&&v<F.EstimateTime)&&(c[u]=r)}else c[u]=r}this.stops=[await this.toStopList(s[0]),await this.toStopList(s[1])],this.layers=[_(this.stops[0]),_(this.stops[1])],l.addLayer(this.layers[0]);const t=this.stops[this.direction].length,i=this.stops[this.direction][Math.floor(t/2)].latlng;l.setView(i,14)},selectDirection(o){this.direction=o},async getStopLocation(o,e){return(await this.getCityStopLocation(o))[e]},async getCityStopLocation(o){const e="/Stop/City/";if(o in f)return f[o];{const n=await g.bus(e+o),s={};for(let t of n)s[t.StopUID]=t.StopPosition;return f[o]=s,s}},async toStopList(o){const e=await this.getCityStopLocation(this.city);return Object.values(o).sort((n,s)=>parseInt(n.StopSequence)-parseInt(s.StopSequence)).map(n=>{const s=n.StopUID,t=e[s];return{id:s,name:n.StopName.Zh_tw,time:I(n.StopStatus,parseInt(n.EstimateTime)),latlng:[t.PositionLat,t.PositionLon]}})}}},H={0:"\u5373\u5C07\u9032\u7AD9",1:"\u5C1A\u672A\u767C\u8ECA",2:"\u4EA4\u7BA1\u4E0D\u505C\u9760",3:"\u672B\u73ED\u8ECA\u5DF2\u904E",4:"\u4ECA\u65E5\u672A\u71DF\u904B"};function I(o,e){if(isNaN(e))return H[o];const n=Math.floor(e/60),s=e%60;let t="";return n!=0&&(t+=n+"\u5206"),t+=s+"\u79D2",t}function _(o){let e=[];for(let n in o)e.push(L.marker(o[n].latlng,{icon:new L.DivIcon({className:"map-marker-icon-wrapper",html:`<div class="map-marker-icon">${parseInt(n)+1}</div>`})}).bindTooltip(o[n].name));return L.layerGroup(e)}const R={id:"container"},B=a("div",{id:"header"},[a("h1",{id:"title"},"\u966A\u4F60\u7B49\u516C\u8ECA"),a("img",{id:"header-bus",src:O})],-1),P={id:"main"},V={id:"content"},q={class:"relative"},Z={id:"searchbar"},j=k('<option value="Hsinchu">\u65B0\u7AF9\u5E02</option><option value="HsinchuCounty">\u65B0\u7AF9\u7E23</option><option value="MiaoliCounty">\u82D7\u6817\u7E23</option><option value="ChanghuaCounty">\u5F70\u5316\u7E23</option><option value="NantouCounty">\u5357\u6295\u7E23</option><option value="YunlinCounty">\u96F2\u6797\u7E23</option><option value="ChiayiCounty">\u5609\u7FA9\u7E23</option><option value="Chiayi">\u5609\u7FA9\u5E02</option><option value="PingtungCounty">\u5C4F\u6771\u7E23</option><option value="YilanCounty">\u5B9C\u862D\u7E23</option><option value="HualienCounty">\u82B1\u84EE\u7E23</option><option value="TaitungCounty">\u81FA\u6771\u7E23</option><option value="PenghuCounty">\u6F8E\u6E56\u7E23</option>',13),G=[j],K=a("div",{id:"search-triangle"},null,-1),Y={class:"relative"},J={id:"banner-container"},X={class:"banner"},Q={class:"font-larger",style:{flex:"0.2"}},W=a("div",{style:{flex:"0.1"}},"\u5F80",-1),$={id:"route-directions"},tt={id:"content-list"},et=["onClick"],ot={class:"serial-no"},nt={class:"name"},it={class:"time"},st={id:"map",ref:"map"};function at(o,e,n,s,t,i){return p(),h("div",R,[B,a("div",P,[a("div",V,[a("div",q,[a("div",Z,[m(a("select",{name:"city",class:"font-larger bg-yellow searchbar-input",style:{flex:"0.4"},"onUpdate:modelValue":e[0]||(e[0]=r=>t.city=r)},G,512),[[w,t.city]]),m(a("input",{class:"font-larger bg-yellow searchbar-input",style:{flex:"0.8","min-width":"7em"},type:"text",name:"route",placeholder:"\u516C\u8ECA\u8DEF\u7DDA","onUpdate:modelValue":e[1]||(e[1]=r=>t.route=r)},null,512),[[b,t.route]]),a("button",{class:"font-larger bg-orange searchbar-input",style:{cursor:"pointer"},name:"search",onClick:e[2]||(e[2]=(...r)=>i.displayRoute&&i.displayRoute(...r))}," Go! ")]),K]),a("div",Y,[a("div",J,[m(a("div",X,[a("div",Q,d(t.route),1),W,a("div",$,[a("div",{class:y(["destination",t.direction==1?"unselected":""]),onClick:e[3]||(e[3]=r=>i.selectDirection(0))},d(i.destinations[0]),3),a("div",{class:y(["destination",t.direction==0?"unselected":""]),onClick:e[4]||(e[4]=r=>i.selectDirection(1))},d(i.destinations[1]),3)])],512),[[S,i.showRouteBanner]])]),a("div",{id:"banner-triangle",class:y(i.showRouteBanner?"pink":"blue")},null,2)]),a("div",tt,[(p(!0),h(C,null,T(t.stops[t.direction],(r,c)=>(p(),h("div",{class:"item",key:c,onClick:u=>i.panTo(r.latlng)},[a("div",ot,d(c+1),1),a("div",nt,d(r.name),1),a("div",it,d(r.time),1)],8,et))),128))])]),a("div",st,null,512)])])}var rt=E(U,[["render",at]]);x(rt).mount("#app");