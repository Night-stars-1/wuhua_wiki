import{_ as G}from"./image-viewer-V4C40ytX.js";import{d as R,u as it,o as c,c as g,w as t,a as e,b as v,F as b,r as L,e as a,t as d,E as O,f as A,g as _t,_ as E,h as H,i as s,j as y,k as I,l as dt,m as S,n as W,p as $,q as ct,s as F,v as ut,x as J,y as K,z as rt,A as pt,T as z,B as ft,C as mt,D as ht,G as vt,H as gt,I as wt,J as kt,K as yt,L as bt,M as Ct}from"./index-DncnlxGv.js";/* empty css               *//* empty css            */const $t=["onClick"],It={class:"char-name"},Rt=R({__name:"CharList",props:{data:{}},emits:["exit"],setup(p,{emit:r}){const o=r,n=it();function h(l){o("exit"),n.push(`/char/${l}`)}return(l,i)=>{const u=O,f=A,k=_t,C=G;return c(),g(C,{class:"char-list-planel"},{default:t(()=>[e(k,null,{default:t(()=>[e(f,{wrap:"",style:{"justify-content":"space-between"}},{default:t(()=>[(c(!0),v(b,null,L(l.data,_=>(c(),v("div",{class:"char-card",onClick:w=>h(_.id)},[e(u,{class:"char-image",src:`/char/${_.id}/card.png`,lazy:""},null,8,["src"]),a("div",It,[a("span",null,d(_.name),1)])],8,$t))),256))]),_:1})]),_:1})]),_:1})}}}),jt=E(Rt,[["__scopeId","data-v-d345d54a"]]),Lt={class:"skill-buff-text"},Et=["innerHTML"],Mt=a("span",null,"：",-1),Tt=["innerHTML"],Ht={class:"skill-text"},St=["innerHTML"],Dt={class:"skill-text"},Gt=["innerHTML"],Ot=R({__name:"CharSkill",props:{id:{},dataList:{}},setup(p){const r=p,o=H(()=>r.dataList.filter(n=>n.buff&&n.buff.length>0).flatMap(n=>n.buff).reduce((n,h)=>(n.some(l=>l.name===h.name)||n.push(h),n),[]));return(n,h)=>{const l=G,i=O,u=dt,f=A,k=S,C=W;return c(),g(C,null,{default:t(()=>[e(f,{class:"skill-root",fill:"",direction:"vertical"},{default:t(()=>[(c(!0),v(b,null,L(s(o),_=>(c(),g(l,{class:"skill-panel"},{default:t(()=>[a("div",Lt,[a("span",{innerHTML:_.name},null,8,Et),Mt,a("span",{innerHTML:_.des},null,8,Tt)])]),_:2},1024))),256)),(c(!0),v(b,null,L(n.dataList,_=>(c(),g(l,{class:"skill-panel"},{default:t(()=>[e(k,{justify:"space-between",class:"skill-row"},{default:t(()=>[e(i,{style:{width:"64px",height:"64px"},src:`/char/${n.id}/skill/${_.icon}.png`},null,8,["src"]),e(f,{class:"skil-tag",alignment:"flex-start",direction:"vertical"},{default:t(()=>[y(d(_.name)+" ",1),e(f,null,{default:t(()=>[(c(!0),v(b,null,L(_.tag,(w,D)=>(c(),g(u,{type:`${D==0?"primary":"success"}`},{default:t(()=>[y(d(w),1)]),_:2},1032,["type"]))),256))]),_:2},1024)]),_:2},1024),_.type==1?(c(),g(i,{key:0,class:"skill-range",style:{width:"64px",height:"64px"},src:`${_.icon}.png`},null,8,["src"])):I("",!0)]),_:2},1024),a("div",Ht,[a("span",{innerHTML:_.des},null,8,St)]),_.special?(c(),g(l,{key:0,class:"special-card"},{default:t(()=>[a("div",Dt,[a("span",{innerHTML:_.special},null,8,Gt)])]),_:2},1024)):I("",!0)]),_:2},1024))),256))]),_:1})]),_:1})}}}),m=p=>(J("data-v-216176f5"),p=p(),K(),p),Wt=m(()=>a("div",null,"生命值",-1)),qt=m(()=>a("div",null,"攻击力",-1)),Bt=m(()=>a("div",null,"物理防御",-1)),Vt=m(()=>a("div",null,"构素防御",-1)),Pt=m(()=>a("div",null,"速度",-1)),Nt=m(()=>a("div",null,"移动力",-1)),zt=m(()=>a("div",null,"命中率",-1)),At=m(()=>a("div",null,"闪避率",-1)),Ft=m(()=>a("div",null,"暴击率",-1)),Jt=m(()=>a("div",null,"暴击伤害",-1)),Kt=m(()=>a("div",null,"暴击抗性",-1)),Ut=m(()=>a("div",null,"暴击伤害抗性",-1)),Qt=m(()=>a("div",null,"格挡穿透",-1)),Xt=m(()=>a("div",null,"能量上限",-1)),Yt=m(()=>a("p",{style:{"margin-right":"20px"}},"等级",-1)),Zt=R({__name:"CharInfo",props:{data:{}},setup(p){const r=$(1),o=H(()=>r.value-1);return(n,h)=>{const l=S,i=F,u=ut,f=W;return c(),g(f,null,{default:t(()=>[e(l,{gutter:20},{default:t(()=>[e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Wt,a("div",null,d(n.data.Hp+s(o)*n.data.Hp_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[qt,a("div",null,d(n.data.Atk+s(o)*n.data.Atk_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Bt,a("div",null,d(n.data.PhysicDef+s(o)*n.data.PhysicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Vt,a("div",null,d(n.data.MagicDef+s(o)*n.data.MagicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Pt,a("div",null,d(n.data.Speed+s(o)*n.data.Speed_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Nt,a("div",null,d(n.data.Mov),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[zt,a("div",null,d(n.data.HitRate+s(o)*n.data.HitRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[At,a("div",null,d(n.data.MissRate+s(o)*n.data.MissRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ft,a("div",null,d(n.data.Critical+s(o)*n.data.Critical_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Jt,a("div",null,d(n.data.CritDmg+s(o)*n.data.CritDmg_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Kt,a("div",null,d(n.data.CritRes+s(o)*n.data.CritRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ut,a("div",null,d(n.data.CritDmgRes+s(o)*n.data.CritDmgRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Qt,a("div",null,d(n.data.BlockPenetrate+s(o)*n.data.BlockPenetrate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Xt,a("div",null,d(n.data.EnergyLimit+s(o)*n.data.EnergyLimit_GROW),1)]),_:1})]),_:1})]),_:1}),e(l,{align:"middle"},{default:t(()=>[Yt,e(u,{style:{flex:"1"},modelValue:s(r),"onUpdate:modelValue":h[0]||(h[0]=k=>ct(r)?r.value=k:null),min:1,max:60},null,8,["modelValue"])]),_:1})]),_:1})}}}),xt=E(Zt,[["__scopeId","data-v-216176f5"]]),te={class:"char-name"},ee=R({__name:"CharName",props:{name:{},rareId:{},jobId:{},tag:{}},setup(p){const r=p,o={2:"新生",3:"优异",4:"特出"},n={1:"宿卫",2:"轻锐",3:"远击",4:"构术",5:"战略"},h=H(()=>o==null?void 0:o[r.rareId]),l=H(()=>n==null?void 0:n[r.jobId]);return(i,u)=>{const f=S;return c(),v("div",te,[e(f,{justify:"space-between"},{default:t(()=>[a("div",null,d(i.name)+" - "+d(s(h))+" - "+d(s(l))+" - "+d(i.tag),1)]),_:1})])}}}),ne=E(ee,[["__scopeId","data-v-adf1ea3a"]]),ae=p=>(J("data-v-75e995c7"),p=p(),K(),p),se=ae(()=>a("div",{class:"char-view-place"},null,-1)),le=R({__name:"CharView",props:{id:{},skinId:{}},setup(p){return(r,o)=>{const n=O;return c(),v(b,null,[e(n,{class:"char-image",fit:"cover",src:`/char/${r.id}/skin/${r.skinId}.png`},null,8,["src"]),se],64)}}}),oe=E(le,[["__scopeId","data-v-75e995c7"]]),ie={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},_e=a("path",{fill:"currentColor",d:"M10.116 18.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM5.327 19.327q-.547 0-.937-.39T4 18t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 12t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 6t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"},null,-1),de=[_e];function ce(p,r){return c(),v("svg",ie,[...de])}const ue={name:"material-symbols-light-format-list-bulleted-rounded",render:ce},re={key:0,class:"char-list-wrapper"},pe=R({__name:"Char",setup(p){var C;const{appContext:r}=ft(),o=r.config.globalProperties.$http,n=mt(),h=$([]),l=$((C=n.params.id)==null?void 0:C.toString()),i=$(0),u=$({}),f=$(!1);rt(async()=>{const _=await o.get("charinfo/allCharacter.json");h.value=_.data,l.value||(l.value=h.value[0].id),k()});async function k(){try{const _=await o.get(`charinfo/${l.value}.json`);u.value=_.data}catch(_){console.error("Error fetching the user data:",_)}}return pt(()=>n.params.id,(_,w)=>{l.value=_.toString(),k()}),(_,w)=>{const D=ue,q=vt,U=gt,Q=Ct,X=wt,Y=kt,Z=oe,B=F,x=ne,tt=xt,M=yt,et=Ot,V=W,nt=bt,at=G,st=S,lt=jt;return c(),v(b,null,[e(st,{class:"char-container"},{default:t(()=>{var T,P;return[e(B,{md:13},{default:t(()=>{var N;return[e(q,{class:"char-list-button",onClick:w[0]||(w[0]=j=>f.value=!0)},{icon:t(()=>[e(D)]),default:t(()=>[y(" 器者列表 ")]),_:1}),e(Y,null,{dropdown:t(()=>[e(X,null,{default:t(()=>[(c(!0),v(b,null,L(s(u).skin,(j,ot)=>(c(),g(Q,{onClick:fe=>i.value=ot},{default:t(()=>[y(d(j.name),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),default:t(()=>[e(q,{class:"skin-list-button"},{default:t(()=>{var j;return[y(d((j=s(u).skin)==null?void 0:j[s(i)].name),1),e(U,{class:"el-icon--right"},{default:t(()=>[e(s(ht))]),_:1})]}),_:1})]),_:1}),s(u).skin?(c(),g(Z,{key:0,id:s(l),skinId:(N=s(u).skin)==null?void 0:N[s(i)].id},null,8,["id","skinId"])):I("",!0)]}),_:1}),(T=s(u))!=null&&T.info&&((P=s(u))!=null&&P.skill)?(c(),g(B,{key:0,md:12,style:{flex:"1"}},{default:t(()=>[e(at,{class:"char"},{default:t(()=>[e(x,{name:s(u).info.name,rareId:s(u).info.rare,jobId:s(u).info.job,tag:s(u).info.tag},null,8,["name","rareId","jobId","tag"]),e(nt,{modelValue:"0",class:"char-tabs"},{default:t(()=>[e(M,{label:"信息"},{default:t(()=>[e(tt,{data:s(u).info},null,8,["data"])]),_:1}),e(M,{label:"技能"},{default:t(()=>[e(et,{id:s(l),dataList:s(u).skill},null,8,["id","dataList"])]),_:1}),e(M,{label:"致知"},{default:t(()=>[e(V,null,{default:t(()=>[y(" 致知 ")]),_:1})]),_:1}),e(M,{label:"档案"},{default:t(()=>[e(V,null,{default:t(()=>[y(" 档案 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):I("",!0)]}),_:1}),e(z,null,{default:t(()=>[s(f)?(c(),v("div",{key:0,class:"char-list-screen",onClick:w[1]||(w[1]=T=>f.value=!1)})):I("",!0)]),_:1}),e(z,{name:"char-list"},{default:t(()=>[s(f)?(c(),v("div",re,[e(lt,{class:"char-list",data:s(h),onExit:w[2]||(w[2]=T=>f.value=!1)},null,8,["data"])])):I("",!0)]),_:1})],64)}}}),we=E(pe,[["__scopeId","data-v-f572d739"]]);export{we as default};
