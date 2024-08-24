import{_ as H,a as j}from"./input-dKFVxncl.js";import{d as E,u as J,a as ut,o as K,b as c,c as g,w as t,e,f as v,F as $,r as R,g as a,t as r,E as D,h as B,i as rt,j as G,p as V,k as q,l as P,m as s,n as C,q as M,s as U,v as O,x as I,y as pt,z as Q,A as ft,B as mt,T as ht,C as vt,D as gt,G as bt,H as yt,I as wt,J as kt,K as $t,L as Ct,M as It}from"./index-BaQgXlXv.js";/* empty css               *//* empty css            */const Rt=["id","onClick"],jt={class:"char-name"},Et=E({__name:"CharList",props:{data:{}},emits:["exit"],setup(u,{emit:f}){const o=f,n=J(),p=ut();K(()=>{var _;i((_=n.params.id)==null?void 0:_.toString())});function l(_){o("exit"),p.push(`/char/${_}`)}function i(_){const m=document.getElementById(_);m&&m.scrollIntoView({behavior:"smooth"})}return(_,m)=>{const y=D,w=B,d=rt,b=H;return c(),g(b,{class:"char-list-planel"},{default:t(()=>[e(d,null,{default:t(()=>[e(w,{wrap:"",style:{"justify-content":"space-between"}},{default:t(()=>[(c(!0),v($,null,R(_.data,k=>(c(),v("div",{id:k.id,class:"char-card",onClick:W=>l(k.id)},[e(y,{class:"char-image",src:`/char/${k.id}/card.png`,lazy:""},null,8,["src"]),a("div",jt,[a("span",null,r(k.name),1)])],8,Rt))),256))]),_:1})]),_:1})]),_:1})}}}),Lt=j(Et,[["__scopeId","data-v-43db7f57"]]),Mt={},St=u=>(V("data-v-479bfb27"),u=u(),q(),u),Tt=St(()=>a("span",null," 致知 ",-1));function Ht(u,f){const o=H,n=G;return c(),g(n,null,{default:t(()=>[e(o,null,{default:t(()=>[Tt]),_:1})]),_:1})}const Dt=j(Mt,[["render",Ht],["__scopeId","data-v-479bfb27"]]),Gt={class:"skill-buff-text"},Ot=["innerHTML"],Wt=a("span",null,"：",-1),Bt=["innerHTML"],Vt={class:"skill-text"},qt=["innerHTML"],Pt={class:"skill-text"},Nt=["innerHTML"],zt=E({__name:"CharSkill",props:{id:{},dataList:{}},setup(u){const f=u,o=P(()=>f.dataList.sort((n,p)=>n.type-p.type).filter(n=>n.buff&&n.buff.length>0).flatMap(n=>n.buff).reduce((n,p)=>(n.some(l=>l.name===p.name)||n.push(p),n),[]));return(n,p)=>{const l=H,i=D,_=U,m=B,y=O,w=G;return c(),g(w,null,{default:t(()=>[e(m,{class:"skill-root",fill:"",direction:"vertical"},{default:t(()=>[(c(!0),v($,null,R(s(o),d=>(c(),g(l,{class:"skill-panel"},{default:t(()=>[a("div",Gt,[a("span",{innerHTML:d.name},null,8,Ot),Wt,a("span",{innerHTML:d.des},null,8,Bt)])]),_:2},1024))),256)),(c(!0),v($,null,R(n.dataList,d=>(c(),g(l,{class:"skill-panel"},{default:t(()=>[e(y,{justify:"space-between",class:"skill-row",id:d.type},{default:t(()=>[e(i,{style:{width:"64px",height:"64px"},src:`/char/${n.id}/skill/${d.icon}.png`},null,8,["src"]),e(m,{class:"skil-tag",alignment:"flex-start",direction:"vertical"},{default:t(()=>[C(r(d.name)+" ",1),e(m,null,{default:t(()=>[(c(!0),v($,null,R(d.tag,(b,k)=>(c(),g(_,{type:`${k==0?"primary":"success"}`},{default:t(()=>[C(r(b),1)]),_:2},1032,["type"]))),256))]),_:2},1024)]),_:2},1024),d.type<=3?(c(),g(i,{key:0,class:"skill-range",style:{width:"64px",height:"64px"},src:`${d.icon}.png`},null,8,["src"])):M("",!0)]),_:2},1032,["id"]),a("div",Vt,[a("span",{innerHTML:d.des},null,8,qt)]),d.special?(c(),g(l,{key:0,class:"special-card"},{default:t(()=>[a("div",Pt,[a("span",{innerHTML:d.special},null,8,Nt)])]),_:2},1024)):M("",!0)]),_:2},1024))),256))]),_:1})]),_:1})}}}),h=u=>(V("data-v-216176f5"),u=u(),q(),u),At=h(()=>a("div",null,"生命值",-1)),Ft=h(()=>a("div",null,"攻击力",-1)),Jt=h(()=>a("div",null,"物理防御",-1)),Kt=h(()=>a("div",null,"构素防御",-1)),Ut=h(()=>a("div",null,"速度",-1)),Qt=h(()=>a("div",null,"移动力",-1)),Xt=h(()=>a("div",null,"命中率",-1)),Yt=h(()=>a("div",null,"闪避率",-1)),Zt=h(()=>a("div",null,"暴击率",-1)),xt=h(()=>a("div",null,"暴击伤害",-1)),te=h(()=>a("div",null,"暴击抗性",-1)),ee=h(()=>a("div",null,"暴击伤害抗性",-1)),ne=h(()=>a("div",null,"格挡穿透",-1)),ae=h(()=>a("div",null,"能量上限",-1)),se=h(()=>a("p",{style:{"margin-right":"20px"}},"等级",-1)),le=E({__name:"CharInfo",props:{data:{}},setup(u){const f=I(1),o=P(()=>f.value-1);return(n,p)=>{const l=O,i=Q,_=ft,m=G;return c(),g(m,null,{default:t(()=>[e(l,{gutter:20},{default:t(()=>[e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[At,a("div",null,r(n.data.Hp+s(o)*n.data.Hp_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ft,a("div",null,r(n.data.Atk+s(o)*n.data.Atk_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Jt,a("div",null,r(n.data.PhysicDef+s(o)*n.data.PhysicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Kt,a("div",null,r(n.data.MagicDef+s(o)*n.data.MagicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ut,a("div",null,r(n.data.Speed+s(o)*n.data.Speed_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Qt,a("div",null,r(n.data.Mov),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Xt,a("div",null,r(n.data.HitRate+s(o)*n.data.HitRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Yt,a("div",null,r(n.data.MissRate+s(o)*n.data.MissRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Zt,a("div",null,r(n.data.Critical+s(o)*n.data.Critical_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[xt,a("div",null,r(n.data.CritDmg+s(o)*n.data.CritDmg_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[te,a("div",null,r(n.data.CritRes+s(o)*n.data.CritRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[ee,a("div",null,r(n.data.CritDmgRes+s(o)*n.data.CritDmgRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[ne,a("div",null,r(n.data.BlockPenetrate+s(o)*n.data.BlockPenetrate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[ae,a("div",null,r(n.data.EnergyLimit+s(o)*n.data.EnergyLimit_GROW),1)]),_:1})]),_:1})]),_:1}),e(l,{align:"middle"},{default:t(()=>[se,e(_,{style:{flex:"1"},modelValue:s(f),"onUpdate:modelValue":p[0]||(p[0]=y=>pt(f)?f.value=y:null),min:1,max:60},null,8,["modelValue"])]),_:1})]),_:1})}}}),oe=j(le,[["__scopeId","data-v-216176f5"]]),_e={class:"char-name"},ie={class:"char-info"},ce=["id"],de=E({__name:"CharName",props:{name:{},rareId:{},jobId:{},tag:{}},setup(u){const f=u,o={2:"新生",3:"优异",4:"特出"},n=P(()=>o==null?void 0:o[f.rareId]);return(p,l)=>{const i=D,_=U,m=B,y=O;return c(),v("div",_e,[e(y,{justify:"space-between"},{default:t(()=>[a("div",ie,[e(i,{style:{width:"64px",height:"64px"},src:`yc/${p.rareId}_${p.jobId}.png`,fit:"cover"},null,8,["src"]),a("span",{id:s(n)},r(p.name),9,ce)]),e(m,null,{default:t(()=>[(c(!0),v($,null,R(p.tag.split(";"),w=>(c(),g(_,{type:"primary"},{default:t(()=>[C(r(w),1)]),_:2},1024))),256))]),_:1})]),_:1})])}}}),ue=j(de,[["__scopeId","data-v-41643a0d"]]),re=u=>(V("data-v-5e1e4c49"),u=u(),q(),u),pe=re(()=>a("div",{class:"char-view-place"},null,-1)),fe=E({__name:"CharView",props:{id:{},skinId:{}},setup(u){return(f,o)=>{const n=D;return c(),v($,null,[e(n,{class:"char-image",fit:"cover",src:`/char/${f.id}/skin/${f.skinId}.png`},null,8,["src"]),pe],64)}}}),me=j(fe,[["__scopeId","data-v-5e1e4c49"]]),he={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ve=a("path",{fill:"currentColor",d:"M10.116 18.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM5.327 19.327q-.547 0-.937-.39T4 18t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 12t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 6t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"},null,-1),ge=[ve];function be(u,f){return c(),v("svg",he,[...ge])}const ye={name:"material-symbols-light-format-list-bulleted-rounded",render:be},we={key:0,class:"char-list-wrapper"},ke=E({__name:"Char",setup(u){var w;const{appContext:f}=vt(),o=f.config.globalProperties.$http,n=J(),p=I([]),l=I((w=n.params.id)==null?void 0:w.toString()),i=I(0),_=I({}),m=I(!1);K(async()=>{const d=await o.get("charinfo/allCharacter.json");p.value=d.data,l.value||(l.value=p.value[0].id),y()});async function y(){try{const d=await o.get(`charinfo/${l.value}.json`);_.value=d.data,i.value=0}catch(d){console.error("Error fetching the user data:",d)}}return mt(()=>n.params.id,(d,b)=>{l.value=d.toString(),y()}),(d,b)=>{const k=ye,W=bt,X=yt,Y=It,Z=wt,x=kt,tt=me,N=Q,et=ue,nt=oe,S=$t,at=zt,st=Dt,lt=G,ot=Ct,_t=H,it=O,ct=Lt;return c(),v($,null,[e(it,{class:"char-container"},{default:t(()=>{var T,z;return[e(N,{md:13},{default:t(()=>{var A,F;return[e(W,{class:"char-list-button",onClick:b[0]||(b[0]=L=>m.value=!0)},{icon:t(()=>[e(k)]),default:t(()=>[C(" 器者列表 ")]),_:1}),e(x,null,{dropdown:t(()=>[e(Z,null,{default:t(()=>[(c(!0),v($,null,R(s(_).skin,(L,dt)=>(c(),g(Y,{onClick:$e=>i.value=dt},{default:t(()=>[C(r(L.name),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),default:t(()=>[e(W,{class:"skin-list-button"},{default:t(()=>{var L;return[C(r((L=s(_).skin)==null?void 0:L[s(i)].name),1),e(X,{class:"el-icon--right"},{default:t(()=>[e(s(gt))]),_:1})]}),_:1})]),_:1}),e(tt,{id:s(l),skinId:(F=(A=s(_).skin)==null?void 0:A[s(i)])==null?void 0:F.id},null,8,["id","skinId"])]}),_:1}),(T=s(_))!=null&&T.info&&((z=s(_))!=null&&z.skill)?(c(),g(N,{key:0,md:12,style:{flex:"1"}},{default:t(()=>[e(_t,{class:"char"},{default:t(()=>[e(et,{name:s(_).info.name,rareId:s(_).info.rare,jobId:s(_).info.job,tag:s(_).info.tag},null,8,["name","rareId","jobId","tag"]),e(ot,{modelValue:"0",class:"char-tabs"},{default:t(()=>[e(S,{label:"信息"},{default:t(()=>[e(nt,{data:s(_).info},null,8,["data"])]),_:1}),e(S,{label:"技能"},{default:t(()=>[e(at,{id:s(l),dataList:s(_).skill},null,8,["id","dataList"])]),_:1}),e(S,{label:"评估"},{default:t(()=>[e(st)]),_:1}),e(S,{label:"档案"},{default:t(()=>[e(lt,null,{default:t(()=>[C(" 档案 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):M("",!0)]}),_:1}),e(ht,{name:"char-list"},{default:t(()=>[s(m)?(c(),v("div",we,[s(m)?(c(),v("div",{key:0,class:"char-list-exit-screen",onClick:b[1]||(b[1]=T=>m.value=!1)})):M("",!0),e(ct,{class:"char-list",data:s(p),onExit:b[2]||(b[2]=T=>m.value=!1)},null,8,["data"])])):M("",!0)]),_:1})],64)}}}),Ee=j(ke,[["__scopeId","data-v-427d6b02"]]);export{Ee as default};
