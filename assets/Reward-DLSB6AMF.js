import{_ as w,a as v}from"./input-dKFVxncl.js";import{d as y,x as s,c as b,w as o,b as C,g as V,e,n as c,m as d,y as E,aa as h,a3 as k,ab as B,G as R,j as N}from"./index-BaQgXlXv.js";import{r as I,_ as T}from"./wuhua-_pgSio9V.js";const j={class:"login-card"},G=y({__name:"Reward",setup(L){const a=s(""),t=s(!1),n=s({code:"",uid:""});async function _(){t.value=!0;const l=await I(n.value.code,n.value.uid,a.value);t.value=!1,h({message:l,type:"success"})}return(l,r)=>{const u=T,p=k,i=B,m=R,f=N,g=w;return C(),b(g,{class:"charinfo-panel"},{default:o(()=>[V("div",j,[e(u,{ref_key:"login",ref:n,"card-style":"border-radius: 10px;","button-text":"保存"},null,512)]),e(f,null,{default:o(()=>[e(p,null,{default:o(()=>[c(" 请输入兑换码： ")]),_:1}),e(i,{modelValue:d(a),"onUpdate:modelValue":r[0]||(r[0]=x=>E(a)?a.value=x:null),placeholder:"请输入兑换码：",style:{"padding-top":"10px"}},null,8,["modelValue"]),e(m,{loading:d(t),style:{"margin-top":"10px","margin-bottom":"20px",float:"right"},onClick:_},{default:o(()=>[c("兑换")]),_:1},8,["loading"])]),_:1})]),_:1})}}}),$=v(G,[["__scopeId","data-v-d7368ed5"]]);export{$ as default};
