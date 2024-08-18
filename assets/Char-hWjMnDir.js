import{_ as O}from"./image-viewer-COUBEuQb.js";import{d as j,u as A,a as dt,o as F,b as d,c as y,w as t,e,f as v,F as $,r as R,g as a,t as u,E as H,h as W,i as ct,_ as M,j as B,k as s,l as C,m as L,n as J,p as D,q as V,s as I,v as ut,x as K,y as rt,z as U,A as Q,B as pt,T as ft,C as mt,D as ht,G as vt,H as gt,I as yt,J as wt,K as bt,L as kt,M as Ct}from"./index-yWpFPNlM.js";/* empty css               *//* empty css            */const $t=["id","onClick"],It={class:"char-name"},Rt=j({__name:"CharList",props:{data:{}},emits:["exit"],setup(f,{emit:m}){const _=m,n=A(),r=dt();F(()=>{var o;i((o=n.params.id)==null?void 0:o.toString())});function l(o){_("exit"),r.push(`/char/${o}`)}function i(o){const p=document.getElementById(o);p&&p.scrollIntoView({behavior:"smooth"})}return(o,p)=>{const w=H,b=W,c=ct,g=O;return d(),y(g,{class:"char-list-planel"},{default:t(()=>[e(c,null,{default:t(()=>[e(b,{wrap:"",style:{"justify-content":"space-between"}},{default:t(()=>[(d(!0),v($,null,R(o.data,k=>(d(),v("div",{id:k.id,class:"char-card",onClick:G=>l(k.id)},[e(w,{class:"char-image",src:`/char/${k.id}/card.png`,lazy:""},null,8,["src"]),a("div",It,[a("span",null,u(k.name),1)])],8,$t))),256))]),_:1})]),_:1})]),_:1})}}}),jt=M(Rt,[["__scopeId","data-v-43db7f57"]]),Et={class:"skill-buff-text"},Lt=["innerHTML"],Mt=a("span",null,"：",-1),St=["innerHTML"],Tt={class:"skill-text"},Ht=["innerHTML"],Dt={class:"skill-text"},Gt=["innerHTML"],Ot=j({__name:"CharSkill",props:{id:{},dataList:{}},setup(f){const m=f,_=B(()=>m.dataList.sort((n,r)=>n.type-r.type).filter(n=>n.buff&&n.buff.length>0).flatMap(n=>n.buff).reduce((n,r)=>(n.some(l=>l.name===r.name)||n.push(r),n),[]));return(n,r)=>{const l=O,i=H,o=J,p=W,w=D,b=V;return d(),y(b,null,{default:t(()=>[e(p,{class:"skill-root",fill:"",direction:"vertical"},{default:t(()=>[(d(!0),v($,null,R(s(_),c=>(d(),y(l,{class:"skill-panel"},{default:t(()=>[a("div",Et,[a("span",{innerHTML:c.name},null,8,Lt),Mt,a("span",{innerHTML:c.des},null,8,St)])]),_:2},1024))),256)),(d(!0),v($,null,R(n.dataList,c=>(d(),y(l,{class:"skill-panel"},{default:t(()=>[e(w,{justify:"space-between",class:"skill-row",id:c.type},{default:t(()=>[e(i,{style:{width:"64px",height:"64px"},src:`/char/${n.id}/skill/${c.icon}.png`},null,8,["src"]),e(p,{class:"skil-tag",alignment:"flex-start",direction:"vertical"},{default:t(()=>[C(u(c.name)+" ",1),e(p,null,{default:t(()=>[(d(!0),v($,null,R(c.tag,(g,k)=>(d(),y(o,{type:`${k==0?"primary":"success"}`},{default:t(()=>[C(u(g),1)]),_:2},1032,["type"]))),256))]),_:2},1024)]),_:2},1024),c.type<=3?(d(),y(i,{key:0,class:"skill-range",style:{width:"64px",height:"64px"},src:`${c.icon}.png`},null,8,["src"])):L("",!0)]),_:2},1032,["id"]),a("div",Tt,[a("span",{innerHTML:c.des},null,8,Ht)]),c.special?(d(),y(l,{key:0,class:"special-card"},{default:t(()=>[a("div",Dt,[a("span",{innerHTML:c.special},null,8,Gt)])]),_:2},1024)):L("",!0)]),_:2},1024))),256))]),_:1})]),_:1})}}}),h=f=>(U("data-v-216176f5"),f=f(),Q(),f),Wt=h(()=>a("div",null,"生命值",-1)),Bt=h(()=>a("div",null,"攻击力",-1)),Vt=h(()=>a("div",null,"物理防御",-1)),qt=h(()=>a("div",null,"构素防御",-1)),Pt=h(()=>a("div",null,"速度",-1)),Nt=h(()=>a("div",null,"移动力",-1)),zt=h(()=>a("div",null,"命中率",-1)),At=h(()=>a("div",null,"闪避率",-1)),Ft=h(()=>a("div",null,"暴击率",-1)),Jt=h(()=>a("div",null,"暴击伤害",-1)),Kt=h(()=>a("div",null,"暴击抗性",-1)),Ut=h(()=>a("div",null,"暴击伤害抗性",-1)),Qt=h(()=>a("div",null,"格挡穿透",-1)),Xt=h(()=>a("div",null,"能量上限",-1)),Yt=h(()=>a("p",{style:{"margin-right":"20px"}},"等级",-1)),Zt=j({__name:"CharInfo",props:{data:{}},setup(f){const m=I(1),_=B(()=>m.value-1);return(n,r)=>{const l=D,i=K,o=rt,p=V;return d(),y(p,null,{default:t(()=>[e(l,{gutter:20},{default:t(()=>[e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Wt,a("div",null,u(n.data.Hp+s(_)*n.data.Hp_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Bt,a("div",null,u(n.data.Atk+s(_)*n.data.Atk_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Vt,a("div",null,u(n.data.PhysicDef+s(_)*n.data.PhysicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[qt,a("div",null,u(n.data.MagicDef+s(_)*n.data.MagicDef_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Pt,a("div",null,u(n.data.Speed+s(_)*n.data.Speed_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Nt,a("div",null,u(n.data.Mov),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[zt,a("div",null,u(n.data.HitRate+s(_)*n.data.HitRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[At,a("div",null,u(n.data.MissRate+s(_)*n.data.MissRate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ft,a("div",null,u(n.data.Critical+s(_)*n.data.Critical_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Jt,a("div",null,u(n.data.CritDmg+s(_)*n.data.CritDmg_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Kt,a("div",null,u(n.data.CritRes+s(_)*n.data.CritRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Ut,a("div",null,u(n.data.CritDmgRes+s(_)*n.data.CritDmgRes_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Qt,a("div",null,u(n.data.BlockPenetrate+s(_)*n.data.BlockPenetrate_GROW),1)]),_:1})]),_:1}),e(i,{span:6},{default:t(()=>[e(l,{justify:"space-between"},{default:t(()=>[Xt,a("div",null,u(n.data.EnergyLimit+s(_)*n.data.EnergyLimit_GROW),1)]),_:1})]),_:1})]),_:1}),e(l,{align:"middle"},{default:t(()=>[Yt,e(o,{style:{flex:"1"},modelValue:s(m),"onUpdate:modelValue":r[0]||(r[0]=w=>ut(m)?m.value=w:null),min:1,max:60},null,8,["modelValue"])]),_:1})]),_:1})}}}),xt=M(Zt,[["__scopeId","data-v-216176f5"]]),te={class:"char-name"},ee={class:"char-info"},ne=["id"],ae=j({__name:"CharName",props:{name:{},rareId:{},jobId:{},tag:{}},setup(f){const m=f,_={2:"新生",3:"优异",4:"特出"},n=B(()=>_==null?void 0:_[m.rareId]);return(r,l)=>{const i=H,o=J,p=W,w=D;return d(),v("div",te,[e(w,{justify:"space-between"},{default:t(()=>[a("div",ee,[e(i,{style:{width:"64px",height:"64px"},src:`yc/${r.rareId}_${r.jobId}.png`,fit:"cover"},null,8,["src"]),a("span",{id:s(n)},u(r.name),9,ne)]),e(p,null,{default:t(()=>[(d(!0),v($,null,R(r.tag.split(";"),b=>(d(),y(o,{type:"primary"},{default:t(()=>[C(u(b),1)]),_:2},1024))),256))]),_:1})]),_:1})])}}}),se=M(ae,[["__scopeId","data-v-41643a0d"]]),le=f=>(U("data-v-5e1e4c49"),f=f(),Q(),f),oe=le(()=>a("div",{class:"char-view-place"},null,-1)),ie=j({__name:"CharView",props:{id:{},skinId:{}},setup(f){return(m,_)=>{const n=H;return d(),v($,null,[e(n,{class:"char-image",fit:"cover",src:`/char/${m.id}/skin/${m.skinId}.png`},null,8,["src"]),oe],64)}}}),_e=M(ie,[["__scopeId","data-v-5e1e4c49"]]),de={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},ce=a("path",{fill:"currentColor",d:"M10.116 18.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-6q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H19.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zM5.327 19.327q-.547 0-.937-.39T4 18t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 12t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39m0-6q-.547 0-.937-.39T4 6t.39-.937t.937-.39t.937.39t.39.937t-.39.937t-.937.39"},null,-1),ue=[ce];function re(f,m){return d(),v("svg",de,[...ue])}const pe={name:"material-symbols-light-format-list-bulleted-rounded",render:re},fe={key:0,class:"char-list-wrapper"},me=j({__name:"Char",setup(f){var b;const{appContext:m}=mt(),_=m.config.globalProperties.$http,n=A(),r=I([]),l=I((b=n.params.id)==null?void 0:b.toString()),i=I(0),o=I({}),p=I(!1);F(async()=>{const c=await _.get("charinfo/allCharacter.json");r.value=c.data,l.value||(l.value=r.value[0].id),w()});async function w(){try{const c=await _.get(`charinfo/${l.value}.json`);o.value=c.data,i.value=0}catch(c){console.error("Error fetching the user data:",c)}}return pt(()=>n.params.id,(c,g)=>{l.value=c.toString(),w()}),(c,g)=>{const k=pe,G=vt,X=gt,Y=Ct,Z=yt,x=wt,tt=_e,q=K,et=se,nt=xt,S=bt,at=Ot,P=V,st=kt,lt=O,ot=D,it=jt;return d(),v($,null,[e(ot,{class:"char-container"},{default:t(()=>{var T,N;return[e(q,{md:13},{default:t(()=>{var z;return[e(G,{class:"char-list-button",onClick:g[0]||(g[0]=E=>p.value=!0)},{icon:t(()=>[e(k)]),default:t(()=>[C(" 器者列表 ")]),_:1}),e(x,null,{dropdown:t(()=>[e(Z,null,{default:t(()=>[(d(!0),v($,null,R(s(o).skin,(E,_t)=>(d(),y(Y,{onClick:he=>i.value=_t},{default:t(()=>[C(u(E.name),1)]),_:2},1032,["onClick"]))),256))]),_:1})]),default:t(()=>[e(G,{class:"skin-list-button"},{default:t(()=>{var E;return[C(u((E=s(o).skin)==null?void 0:E[s(i)].name),1),e(X,{class:"el-icon--right"},{default:t(()=>[e(s(ht))]),_:1})]}),_:1})]),_:1}),e(tt,{id:s(l),skinId:(z=s(o).skin)==null?void 0:z[s(i)].id},null,8,["id","skinId"])]}),_:1}),(T=s(o))!=null&&T.info&&((N=s(o))!=null&&N.skill)?(d(),y(q,{key:0,md:12,style:{flex:"1"}},{default:t(()=>[e(lt,{class:"char"},{default:t(()=>[e(et,{name:s(o).info.name,rareId:s(o).info.rare,jobId:s(o).info.job,tag:s(o).info.tag},null,8,["name","rareId","jobId","tag"]),e(st,{modelValue:"0",class:"char-tabs"},{default:t(()=>[e(S,{label:"信息"},{default:t(()=>[e(nt,{data:s(o).info},null,8,["data"])]),_:1}),e(S,{label:"技能"},{default:t(()=>[e(at,{id:s(l),dataList:s(o).skill},null,8,["id","dataList"])]),_:1}),e(S,{label:"致知"},{default:t(()=>[e(P,null,{default:t(()=>[C(" 致知 ")]),_:1})]),_:1}),e(S,{label:"档案"},{default:t(()=>[e(P,null,{default:t(()=>[C(" 档案 ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})):L("",!0)]}),_:1}),e(ft,{name:"char-list"},{default:t(()=>[s(p)?(d(),v("div",fe,[s(p)?(d(),v("div",{key:0,class:"char-list-exit-screen",onClick:g[1]||(g[1]=T=>p.value=!1)})):L("",!0),e(it,{class:"char-list",data:s(r),onExit:g[2]||(g[2]=T=>p.value=!1)},null,8,["data"])])):L("",!0)]),_:1})],64)}}}),be=M(me,[["__scopeId","data-v-96badb0f"]]);export{be as default};
