var Re=Object.defineProperty,Ae=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var me=Object.getOwnPropertySymbols;var Oe=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable;var ge=(a,t,e)=>t in a?Re(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,Y=(a,t)=>{for(var e in t||(t={}))Oe.call(t,e)&&ge(a,e,t[e]);if(me)for(var e of me(t))ze.call(t,e)&&ge(a,e,t[e]);return a},J=(a,t)=>Ae(a,He(t));import{r as P,o as s,c,b as $,g as C,j as N,k as v,l as $e,i as n,F as D,m as R,a as h,t as S,n as x,p as q,q as Q,s as w,w as I,v as be,x as L,d as W,y as X,z as Fe,A as Ge,B as je,C as Z,D as ee,E as A,G as U,H as ye,I as Le,u as xe,h as M,T as we,f as O,J as We,K as V,L as K,M as Ue,N as Ve,O as te,P as Ce,Q as Se,e as Te,R as Ie,S as Ke,U as F,V as ne,W as qe,X as Xe,Y as Ye,Z as Je,_ as ae,$ as se,a0 as Qe}from"./app.88135d9f.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";const Ze={},et={class:"theme-default-content custom"};function tt(a,t){const e=P("Content");return s(),c("div",et,[$(e)])}var nt=z(Ze,[["render",tt]]);const at={key:0,class:"features"},st=C({setup(a){const t=N(),e=v(()=>$e(t.value.features)?t.value.features:[]);return(i,o)=>n(e).length?(s(),c("div",at,[(s(!0),c(D,null,R(n(e),f=>(s(),c("div",{key:f.title,class:"feature"},[h("h2",null,S(f.title),1),h("p",null,S(f.details),1)]))),128))])):x("",!0)}}),ot=["innerHTML"],rt=["textContent"],lt=C({setup(a){const t=N(),e=v(()=>t.value.footer),i=v(()=>t.value.footerHtml);return(o,f)=>n(e)?(s(),c(D,{key:0},[n(i)?(s(),c("div",{key:0,class:"footer",innerHTML:n(e)},null,8,ot)):(s(),c("div",{key:1,class:"footer",textContent:S(n(e))},null,8,rt))],64)):x("",!0)}}),it=["href","rel","target","aria-label"],ut=C({inheritAttrs:!1}),E=C(J(Y({},ut),{props:{item:{type:Object,required:!0}},setup(a){const t=a,e=q(),i=je(),{item:o}=Q(t),f=v(()=>X(o.value.link)),m=v(()=>Fe(o.value.link)||Ge(o.value.link)),p=v(()=>{if(!m.value){if(o.value.target)return o.value.target;if(f.value)return"_blank"}}),r=v(()=>p.value==="_blank"),l=v(()=>!f.value&&!m.value&&!r.value),u=v(()=>{if(!m.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),d=v(()=>o.value.ariaLabel||o.value.text),_=v(()=>{const y=Object.keys(i.value.locales);return y.length?!y.some(g=>g===o.value.link):o.value.link!=="/"}),b=v(()=>_.value?e.path.startsWith(o.value.link):!1),k=v(()=>l.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(e.path):b.value:!1);return(y,g)=>{const T=P("RouterLink"),B=P("ExternalLinkIcon");return n(l)?(s(),w(T,be({key:0,class:{"router-link-active":n(k)},to:n(o).link,"aria-label":n(d)},y.$attrs),{default:I(()=>[L(y.$slots,"before"),W(" "+S(n(o).text)+" ",1),L(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(s(),c("a",be({key:1,class:"external-link",href:n(o).link,rel:n(u),target:n(p),"aria-label":n(d)},y.$attrs),[L(y.$slots,"before"),W(" "+S(n(o).text)+" ",1),n(r)?(s(),w(B,{key:0})):x("",!0),L(y.$slots,"after")],16,it))}}})),ct={class:"hero"},dt={key:0,id:"main-title"},_t={key:1,class:"description"},vt={key:2,class:"actions"},pt=C({setup(a){const t=N(),e=Z(),i=ee(),o=v(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),f=v(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=v(()=>t.value.heroAlt||f.value||"hero"),p=v(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),r=v(()=>$e(t.value.actions)?t.value.actions.map(({text:u,link:d,type:_="primary"})=>({text:u,link:d,type:_})):[]),l=()=>{if(!o.value)return null;const u=U("img",{src:ye(o.value),alt:m.value});return t.value.heroImageDark===void 0?u:U(Le,u)};return(u,d)=>(s(),c("header",ct,[$(l),n(f)?(s(),c("h1",dt,S(n(f)),1)):x("",!0),n(p)?(s(),c("p",_t,S(n(p)),1)):x("",!0),n(r).length?(s(),c("p",vt,[(s(!0),c(D,null,R(n(r),_=>(s(),w(E,{key:_.text,class:A(["action-button",[_.type]]),item:_},null,8,["class","item"]))),128))])):x("",!0)]))}}),ht={class:"home"},ft=C({setup(a){return(t,e)=>(s(),c("main",ht,[$(pt),$(st),$(nt),$(lt)]))}}),mt=C({setup(a){const t=xe(),e=Z(),i=M(),o=ee(),f=v(()=>i.value.home||t.value),m=v(()=>e.value.title),p=v(()=>o.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),r=()=>{if(!p.value)return null;const l=U("img",{class:"logo",src:ye(p.value),alt:m.value});return i.value.logoDark===void 0?l:U(Le,l)};return(l,u)=>{const d=P("RouterLink");return s(),w(d,{to:n(f)},{default:I(()=>[$(r),n(m)?(s(),c("span",{key:0,class:A(["site-name",{"can-hide":n(p)}])},S(n(m)),3)):x("",!0)]),_:1},8,["to"])}}}),De=C({setup(a){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,o)=>(s(),w(we,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:I(()=>[L(i.$slots,"default")]),_:3}))}}),gt=["aria-label"],bt={class:"title"},kt=h("span",{class:"arrow down"},null,-1),$t=["aria-label"],yt={class:"title"},Lt={class:"navbar-dropdown"},xt={class:"navbar-dropdown-subtitle"},wt={key:1},Ct={class:"navbar-dropdown-subitem-wrapper"},St=C({props:{item:{type:Object,required:!0}},setup(a){const t=a,{item:e}=Q(t),i=v(()=>e.value.ariaLabel||e.value.text),o=O(!1),f=q();We(()=>f.path,()=>{o.value=!1});const m=r=>{r.detail===0?o.value=!o.value:o.value=!1},p=(r,l)=>l[l.length-1]===r;return(r,l)=>(s(),c("div",{class:A(["navbar-dropdown-wrapper",{open:o.value}])},[h("button",{class:"navbar-dropdown-title",type:"button","aria-label":n(i),onClick:m},[h("span",bt,S(n(e).text),1),kt],8,gt),h("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":n(i),onClick:l[0]||(l[0]=u=>o.value=!o.value)},[h("span",yt,S(n(e).text),1),h("span",{class:A(["arrow",o.value?"down":"right"])},null,2)],8,$t),$(De,null,{default:I(()=>[V(h("ul",Lt,[(s(!0),c(D,null,R(n(e).children,u=>(s(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(s(),c(D,{key:0},[h("h4",xt,[u.link?(s(),w(E,{key:0,item:u,onFocusout:d=>p(u,n(e).children)&&u.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(s(),c("span",wt,S(u.text),1))]),h("ul",Ct,[(s(!0),c(D,null,R(u.children,d=>(s(),c("li",{key:d.link,class:"navbar-dropdown-subitem"},[$(E,{item:d,onFocusout:_=>p(d,u.children)&&p(u,n(e).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(s(),w(E,{key:1,item:u,onFocusout:d=>p(u,n(e).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[K,o.value]])]),_:1})],2))}}),ke=a=>decodeURI(a).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Tt=(a,t)=>{if(t.hash===a)return!0;const e=ke(t.path),i=ke(a);return e===i},Me=(a,t)=>a.link&&Tt(a.link,t)?!0:a.children?a.children.some(e=>Me(e,t)):!1,Be=a=>!X(a)||/github\.com/.test(a)?"GitHub":/bitbucket\.org/.test(a)?"Bitbucket":/gitlab\.com/.test(a)?"GitLab":/gitee\.com/.test(a)?"Gitee":null,It={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Dt=({docsRepo:a,editLinkPattern:t})=>{if(t)return t;const e=Be(a);return e!==null?It[e]:null},Mt=({docsRepo:a,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:o})=>{if(!i)return null;const f=Dt({docsRepo:a,editLinkPattern:o});return f?f.replace(/:repo/,X(a)?a:`https://github.com/${a}`).replace(/:branch/,t).replace(/:path/,Ue(`${Ve(e)}/${i}`)):null},Bt={key:0,class:"navbar-items"},Ne=C({setup(a){const t=()=>{const l=te(),u=xe(),d=Z(),_=M();return v(()=>{var T,B;const b=Object.keys(d.value.locales);if(b.length<2)return[];const k=l.currentRoute.value.path,y=l.currentRoute.value.fullPath;return[{text:(T=_.value.selectLanguageText)!=null?T:"unknown language",ariaLabel:(B=_.value.selectLanguageAriaLabel)!=null?B:"unkown language",children:b.map(H=>{var ce,de,_e,ve,pe,he;const G=(de=(ce=d.value.locales)==null?void 0:ce[H])!=null?de:{},ie=(ve=(_e=_.value.locales)==null?void 0:_e[H])!=null?ve:{},ue=`${G.lang}`,Ee=(pe=ie.selectLanguageName)!=null?pe:ue;let j;if(ue===d.value.lang)j=y;else{const fe=k.replace(u.value,H);l.getRoutes().some(Pe=>Pe.path===fe)?j=fe:j=(he=ie.home)!=null?he:H}return{text:Ee,link:j}})}]})},e=()=>{const l=M(),u=v(()=>l.value.repo),d=v(()=>u.value?Be(u.value):null),_=v(()=>u.value&&!X(u.value)?`https://github.com/${u.value}`:u.value),b=v(()=>_.value?l.value.repoLabel?l.value.repoLabel:d.value===null?"Source":d.value:null);return v(()=>!_.value||!b.value?[]:[{text:b.value,link:_.value}])},i=l=>Ce(l)?Se(l):l.children?J(Y({},l),{children:l.children.map(i)}):l,f=(()=>{const l=M();return v(()=>(l.value.navbar||[]).map(i))})(),m=t(),p=e(),r=v(()=>[...f.value,...m.value,...p.value]);return(l,u)=>n(r).length?(s(),c("nav",Bt,[(s(!0),c(D,null,R(n(r),d=>(s(),c("div",{key:d.text,class:"navbar-item"},[d.children?(s(),w(St,{key:0,item:d},null,8,["item"])):(s(),w(E,{key:1,item:d},null,8,["item"]))]))),128))])):x("",!0)}}),Nt=["title"],Et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Pt=Te('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Rt=[Pt],At={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ht=h("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Ot=[Ht],zt=C({setup(a){const t=M(),e=ee(),i=()=>{e.value=!e.value};return(o,f)=>(s(),c("button",{class:"toggle-dark-button",title:n(t).toggleDarkMode,onClick:i},[V((s(),c("svg",Et,Rt,512)),[[K,!n(e)]]),V((s(),c("svg",At,Ot,512)),[[K,n(e)]])],8,Nt))}}),Ft=["title"],Gt=h("div",{class:"icon","aria-hidden":"true"},[h("span"),h("span"),h("span")],-1),jt=[Gt],Wt=C({emits:["toggle"],setup(a){const t=M();return(e,i)=>(s(),c("div",{class:"toggle-sidebar-button",title:n(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=o=>e.$emit("toggle"))},jt,8,Ft))}}),Ut=C({emits:["toggle-sidebar"],setup(a){const t=M(),e=O(null),i=O(null),o=O(0),f=v(()=>o.value?{maxWidth:o.value+"px"}:{}),m=v(()=>t.value.darkMode);Ie(()=>{const l=p(e.value,"paddingLeft")+p(e.value,"paddingRight"),u=()=>{var d;window.innerWidth<=719?o.value=0:o.value=e.value.offsetWidth-l-(((d=i.value)==null?void 0:d.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function p(r,l){var _,b,k;const u=(k=(b=(_=r==null?void 0:r.ownerDocument)==null?void 0:_.defaultView)==null?void 0:b.getComputedStyle(r,null))==null?void 0:k[l],d=Number.parseInt(u,10);return Number.isNaN(d)?0:d}return(r,l)=>{const u=P("NavbarSearch");return s(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[$(Wt,{onToggle:l[0]||(l[0]=d=>r.$emit("toggle-sidebar"))}),h("span",{ref_key:"navbarBrand",ref:i},[$(mt)],512),h("div",{class:"navbar-items-wrapper",style:Ke(n(f))},[L(r.$slots,"before"),$(Ne,{class:"can-hide"}),L(r.$slots,"after"),n(m)?(s(),w(zt,{key:0})):x("",!0),$(u)],4)],512)}}}),Vt={class:"page-meta"},Kt={key:0,class:"meta-item edit-link"},qt={key:1,class:"meta-item last-updated"},Xt={class:"meta-item-label"},Yt={class:"meta-item-info"},Jt={key:2,class:"meta-item contributors"},Qt={class:"meta-item-label"},Zt={class:"meta-item-info"},en=["title"],tn=W(", "),nn=C({setup(a){const t=()=>{const r=M(),l=F(),u=N();return v(()=>{var B,H,G;if(!((H=(B=u.value.editLink)!=null?B:r.value.editLink)!=null?H:!0))return null;const{repo:_,docsRepo:b=_,docsBranch:k="main",docsDir:y="",editLinkText:g}=r.value;if(!b)return null;const T=Mt({docsRepo:b,docsBranch:k,docsDir:y,filePathRelative:l.value.filePathRelative,editLinkPattern:(G=u.value.editLinkPattern)!=null?G:r.value.editLinkPattern});return T?{text:g!=null?g:"Edit this page",link:T}:null})},e=()=>{const r=M(),l=F(),u=N();return v(()=>{var b,k,y,g;return!((k=(b=u.value.lastUpdated)!=null?b:r.value.lastUpdated)!=null?k:!0)||!((y=l.value.git)==null?void 0:y.updatedTime)?null:new Date((g=l.value.git)==null?void 0:g.updatedTime).toLocaleString()})},i=()=>{const r=M(),l=F(),u=N();return v(()=>{var _,b,k,y;return((b=(_=u.value.contributors)!=null?_:r.value.contributors)!=null?b:!0)&&(y=(k=l.value.git)==null?void 0:k.contributors)!=null?y:null})},o=M(),f=t(),m=e(),p=i();return(r,l)=>{const u=P("ClientOnly");return s(),c("footer",Vt,[n(f)?(s(),c("div",Kt,[$(E,{class:"meta-item-label",item:n(f)},null,8,["item"])])):x("",!0),n(m)?(s(),c("div",qt,[h("span",Xt,S(n(o).lastUpdatedText)+": ",1),$(u,null,{default:I(()=>[h("span",Yt,S(n(m)),1)]),_:1})])):x("",!0),n(p)&&n(p).length?(s(),c("div",Jt,[h("span",Qt,S(n(o).contributorsText)+": ",1),h("span",Zt,[(s(!0),c(D,null,R(n(p),(d,_)=>(s(),c(D,{key:_},[h("span",{class:"contributor",title:`email: ${d.email}`},S(d.name),9,en),_!==n(p).length-1?(s(),c(D,{key:0},[tn],64)):x("",!0)],64))),128))])])):x("",!0)])}}}),an={key:0,class:"page-nav"},sn={class:"inner"},on={key:0,class:"prev"},rn={key:1,class:"next"},ln=C({setup(a){const t=r=>r===!1?null:Ce(r)?Se(r):qe(r)?r:!1,e=(r,l,u)=>{const d=r.findIndex(_=>_.link===l);if(d!==-1){const _=r[d+u];return(_==null?void 0:_.link)?_:null}for(const _ of r)if(_.children){const b=e(_.children,l,u);if(b)return b}return null},i=N(),o=ne(),f=q(),m=v(()=>{const r=t(i.value.prev);return r!==!1?r:e(o.value,f.path,-1)}),p=v(()=>{const r=t(i.value.next);return r!==!1?r:e(o.value,f.path,1)});return(r,l)=>n(m)||n(p)?(s(),c("nav",an,[h("p",sn,[n(m)?(s(),c("span",on,[$(E,{item:n(m)},null,8,["item"])])):x("",!0),n(p)?(s(),c("span",rn,[$(E,{item:n(p)},null,8,["item"])])):x("",!0)])])):x("",!0)}}),un={class:"page"},cn={class:"theme-default-content"},dn=C({setup(a){return(t,e)=>{const i=P("Content");return s(),c("main",un,[L(t.$slots,"top"),h("div",cn,[$(i)]),$(nn),$(ln),L(t.$slots,"bottom")])}}}),_n={class:"sidebar-item-children"},vn=C({props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(a){const t=a,{item:e,depth:i}=Q(t),o=q(),f=te(),m=v(()=>Me(e.value,o)),p=v(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:m.value,collapsible:e.value.collapsible})),r=O(!0),l=O(void 0);return e.value.collapsible&&(r.value=m.value,l.value=()=>{r.value=!r.value},f.afterEach(()=>{r.value=m.value})),(u,d)=>{var b;const _=P("SidebarItem",!0);return s(),c("li",null,[n(e).link?(s(),w(E,{key:0,class:A(n(p)),item:n(e)},null,8,["class","item"])):(s(),c("p",{key:1,tabindex:"0",class:A(n(p)),onClick:d[0]||(d[0]=(...k)=>l.value&&l.value(...k)),onKeydown:d[1]||(d[1]=Xe((...k)=>l.value&&l.value(...k),["enter"]))},[W(S(n(e).text)+" ",1),n(e).collapsible?(s(),c("span",{key:0,class:A(["arrow",r.value?"down":"right"])},null,2)):x("",!0)],34)),((b=n(e).children)==null?void 0:b.length)?(s(),w(De,{key:2},{default:I(()=>[V(h("ul",_n,[(s(!0),c(D,null,R(n(e).children,k=>(s(),w(_,{key:`${n(i)}${k.text}${k.link}`,item:k,depth:n(i)+1},null,8,["item","depth"]))),128))],512),[[K,r.value]])]),_:1})):x("",!0)])}}}),pn={key:0,class:"sidebar-items"},hn=C({setup(a){const t=ne();return(e,i)=>n(t).length?(s(),c("ul",pn,[(s(!0),c(D,null,R(n(t),o=>(s(),w(vn,{key:o.link||o.text,item:o},null,8,["item"]))),128))])):x("",!0)}}),fn={class:"sidebar"},mn=C({setup(a){return(t,e)=>(s(),c("aside",fn,[$(Ne),L(t.$slots,"top"),$(hn),L(t.$slots,"bottom")]))}}),gn=C({setup(a){const t=F(),e=N(),i=M(),o=v(()=>e.value.navbar!==!1&&i.value.navbar!==!1),f=ne(),m=O(!1),p=g=>{m.value=typeof g=="boolean"?g:!m.value},r={x:0,y:0},l=g=>{r.x=g.changedTouches[0].clientX,r.y=g.changedTouches[0].clientY},u=g=>{const T=g.changedTouches[0].clientX-r.x,B=g.changedTouches[0].clientY-r.y;Math.abs(T)>Math.abs(B)&&Math.abs(T)>40&&(T>0&&r.x<=80?p(!0):p(!1))},d=v(()=>[{"no-navbar":!o.value,"no-sidebar":!f.value.length,"sidebar-open":m.value},e.value.pageClass]);let _;Ie(()=>{_=te().afterEach(()=>{p(!1)})}),Ye(()=>{_()});const b=Je(),k=b.resolve,y=b.pending;return(g,T)=>(s(),c("div",{class:A(["theme-container",n(d)]),onTouchstart:l,onTouchend:u},[L(g.$slots,"navbar",{},()=>[n(o)?(s(),w(Ut,{key:0,onToggleSidebar:p},{before:I(()=>[L(g.$slots,"navbar-before")]),after:I(()=>[L(g.$slots,"navbar-after")]),_:3})):x("",!0)]),h("div",{class:"sidebar-mask",onClick:T[0]||(T[0]=B=>p(!1))}),L(g.$slots,"sidebar",{},()=>[$(mn,null,{top:I(()=>[L(g.$slots,"sidebar-top")]),bottom:I(()=>[L(g.$slots,"sidebar-bottom")]),_:3})]),L(g.$slots,"page",{},()=>[n(e).home?(s(),w(ft,{key:0})):(s(),w(we,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:n(k),onBeforeLeave:n(y)},{default:I(()=>[(s(),w(dn,{key:n(t).path},{top:I(()=>[L(g.$slots,"page-top")]),bottom:I(()=>[L(g.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var bn="/Goodideas-studio-blog/assets/G100.bc3bb348.jpg";const kn={},$n={class:"g100"},yn=Te('<section class="g100_avatar" data-v-79400e0f><img src="'+bn+'" alt="g100 \u81EA\u756B\u50CF" data-v-79400e0f></section><h2 class="g100_name" data-v-79400e0f>G100 (Lo)</h2><section class="g100_description" data-v-79400e0f><p data-v-79400e0f><span data-v-79400e0f>blog: </span><a href="https://g100my.github.io/" data-v-79400e0f>https://g100my.github.io/</a></p><p data-v-79400e0f>front-end developer</p></section>',3),Ln=[yn];function xn(a,t){return s(),c("address",$n,Ln)}var wn=z(kn,[["render",xn],["__scopeId","data-v-79400e0f"]]),Cn="/Goodideas-studio-blog/assets/Chris.9415d435.jpg";const Sn={},oe=a=>(ae("data-v-49034bf8"),a=a(),se(),a),Tn={class:"container"},In=oe(()=>h("img",{src:Cn,style:{width:"200px"},alt:""},null,-1)),Dn=oe(()=>h("p",null,"\u9019\u662F\u53E6\u4E00\u500B\u4F5C\u8005\u540D\u7247~?",-1)),Mn=oe(()=>h("p",null,'\u56E0\u70BA\u53EF\u4EE5\u5F9E build-in \u7684 git plugins \u62FF\u5230 git commit \u76F8\u95DC\u8A0A\u606F\uFF0C \u53EF\u4EE5\u7701\u6389\u4E0D\u5C11\u529F\u592B\u4F86\u514B\u5236\u6BCF\u500B\u4EBA\u7684"\u540D\u7247" component \u585E\u5728\u6BCF\u9801\u6700\u4E0B\u9762\u9032\u53BB\u3002 \u4E5F\u53EF\u4EE5\u505A\u500B\u516C\u7248\uFF0C\u7528 .md \u64B0\u5BEB\u6BCF\u500B\u4EBA\u7684\u4ECB\u7D39\uFF0C \u53EA\u662F\u53EF\u80FD\u8981\u627E\u51FA\u628A .md \u8B8A\u6210 vue SFC \u7684 loader\u3002',-1)),Bn=[In,Dn,Mn];function Nn(a,t){return s(),c("div",Tn,Bn)}var En=z(Sn,[["render",Nn],["__scopeId","data-v-49034bf8"]]),Pn="/Goodideas-studio-blog/assets/Titangene.5b96f68f.jpg";const Rn={},re=a=>(ae("data-v-d1ca41ac"),a=a(),se(),a),An={class:"container"},Hn=re(()=>h("img",{src:Pn,style:{width:"200px"},alt:""},null,-1)),On=re(()=>h("p",null,"titangene",-1)),zn=re(()=>h("p",null,'\u56E0\u70BA\u53EF\u4EE5\u5F9E build-in \u7684 git plugins \u62FF\u5230 git commit \u76F8\u95DC\u8A0A\u606F\uFF0C \u53EF\u4EE5\u7701\u6389\u4E0D\u5C11\u529F\u592B\u4F86\u514B\u5236\u6BCF\u500B\u4EBA\u7684"\u540D\u7247" component \u585E\u5728\u6BCF\u9801\u6700\u4E0B\u9762\u9032\u53BB\u3002 \u4E5F\u53EF\u4EE5\u505A\u500B\u516C\u7248\uFF0C\u7528 .md \u64B0\u5BEB\u6BCF\u500B\u4EBA\u7684\u4ECB\u7D39\uFF0C \u53EA\u662F\u53EF\u80FD\u8981\u627E\u51FA\u628A .md \u8B8A\u6210 vue SFC \u7684 loader\u3002',-1)),Fn=[Hn,On,zn];function Gn(a,t){return s(),c("div",An,Fn)}var jn=z(Rn,[["render",Gn],["__scopeId","data-v-d1ca41ac"]]),Wn="/Goodideas-studio-blog/assets/mangoSu.23e425a6.png";const Un={},le=a=>(ae("data-v-08dd8816"),a=a(),se(),a),Vn={class:"container"},Kn=le(()=>h("img",{src:Wn,style:{width:"200px"},alt:""},null,-1)),qn=le(()=>h("p",null,"mangoSu",-1)),Xn=le(()=>h("p",null,'\u56E0\u70BA\u53EF\u4EE5\u5F9E build-in \u7684 git plugins \u62FF\u5230 git commit \u76F8\u95DC\u8A0A\u606F\uFF0C \u53EF\u4EE5\u7701\u6389\u4E0D\u5C11\u529F\u592B\u4F86\u514B\u5236\u6BCF\u500B\u4EBA\u7684"\u540D\u7247" component \u585E\u5728\u6BCF\u9801\u6700\u4E0B\u9762\u9032\u53BB\u3002 \u4E5F\u53EF\u4EE5\u505A\u500B\u516C\u7248\uFF0C\u7528 .md \u64B0\u5BEB\u6BCF\u500B\u4EBA\u7684\u4ECB\u7D39\uFF0C \u53EA\u662F\u53EF\u80FD\u8981\u627E\u51FA\u628A .md \u8B8A\u6210 vue SFC \u7684 loader\u3002',-1)),Yn=[Kn,qn,Xn];function Jn(a,t){return s(),c("div",Vn,Yn)}var Qn=z(Un,[["render",Jn],["__scopeId","data-v-08dd8816"]]),Zn=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",G100:wn,chris:En,titangene:jn,mangoSu:Qn});const ea={components:{Layout:gn},setup(){N();const a=F();return{authers:Zn,pageData:a}}},ta={class:"authers-container"};function na(a,t,e,i,o,f){const m=P("Layout",!0);return s(),w(m,null,{"page-bottom":I(()=>[h("div",ta,[(s(!0),c(D,null,R(i.pageData.git.contributors,p=>(s(),w(Qe(i.authers[p.name]),{key:p.name}))),128))])]),_:1})}var ra=z(ea,[["render",na],["__scopeId","data-v-0f2cd3d0"]]);export{ra as default};
