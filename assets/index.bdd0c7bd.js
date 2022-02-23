var at=Object.defineProperty,tt=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var Se=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable;var qe=(t,a,l)=>a in t?at(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,c=(t,a)=>{for(var l in a||(a={}))Be.call(a,l)&&qe(t,l,a[l]);if(Se)for(var l of Se(a))Re.call(a,l)&&qe(t,l,a[l]);return t},N=(t,a)=>tt(t,lt(a));var x=(t,a)=>{var l={};for(var r in t)Be.call(t,r)&&a.indexOf(r)<0&&(l[r]=t[r]);if(t!=null&&Se)for(var r of Se(t))a.indexOf(r)<0&&Re.call(t,r)&&(l[r]=t[r]);return l};import{R as n,r as h,b as de,a as p,i as nt,p as rt,s as it,c as e,I as st,d as ot,e as te,f as pt,g as ct,h as dt,t as mt,j as ut,F as ht,m as $,k as w,u as Ye,l as Ge,n as Te,o as Fe,q as L,v as oe,w as U,x as Ee,H as ft,y as bt,z as gt,A as xt,M as Nt,B as yt,S as vt,C as j}from"./vendor.e927c456.js";const Tt=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}};Tt();function fe(r){var i=r,{children:t,as:a="div"}=i,l=x(i,["children","as"]);return n.createElement(a,N(c({},l),{className:h(de.box,{[de.bleed]:l.bleed,[de.clickable]:l.clickable,"bg-aqua-50":l.info,"hover:bg-aqua-100 active:bg-aqua-200":l.info&&l.clickable,"bg-bluegray-100":l.neutral,"hover:bg-bluegray-200 active:bg-bluegray-300":l.neutral&&l.clickable,"border-2 border-bluegray-300":l.bordered},l.className)}),t)}const me=typeof window!="undefined"?p.exports.useLayoutEffect:p.exports.useEffect;function Ct(t){let[a,l]=p.exports.useState({width:0,height:0});const r=p.exports.useCallback(i=>{l({width:i[0].contentRect.width,height:i[0].contentRect.height})},[]);return me(()=>{if(!t.current)return;const{width:i,height:s}=t.current.getBoundingClientRect();l({width:i,height:s});const o=new nt(r);return o.observe(t.current),()=>{o.disconnect()}},[t,r]),a}let Pe=!1;const kt=Date.now().toString(36)+Math.random().toString(36).slice(2,5);let Ie=0;const je=()=>(Ie=Ie+1,kt+Ie),ie=t=>{const a=t||(Pe?je():null),[l,r]=p.exports.useState(a);return me(()=>{l===null&&r(je())},[]),p.exports.useEffect(()=>{Pe===!1&&(Pe=!0)},[]),l};function He(k){var C=k,{controlled:t,option:a,children:l,label:r,invalid:i,value:s,helpId:o,checked:d,defaultChecked:m,labelClassName:f}=C,y=x(C,["controlled","option","children","label","invalid","value","helpId","checked","defaultChecked","labelClassName"]);const v=ie();return n.createElement(n.Fragment,null,n.createElement("input",N(c({id:v,checked:t?d:void 0,defaultChecked:m,"aria-invalid":i,"aria-errormessage":i?o:void 0,value:r?void 0:s},y),{onChange:H=>y.onChange(r?H.target.checked:a?{label:a==null?void 0:a.label,value:a==null?void 0:a.value}:!1)})),n.createElement("label",{htmlFor:v,className:f},l||r||(a==null?void 0:a.label)))}function ne(s){var o=s,{children:t,radio:a,checkbox:l,value:r}=o,i=x(o,["children","radio","checkbox","value"]);const d=ie(),m=a?"radio":"checkbox";return a||l?n.createElement(He,{labelClassName:i.labelClassName,className:"absolute inset-0 h-full w-full appearance-none cursor-pointer focus-ring",type:m,controlled:!1,onChange:()=>{},value:r,name:`${d}:toggle`},t):n.createElement(i.href?"a":"button",N(c({},i),{className:h(i.className,"focus-ring"),type:i.href?void 0:i.type||"button"}),n.createElement(n.Fragment,null,n.createElement("span",{className:"inset-0 absolute","aria-hidden":"true"}),t))}function Ce(t){const a=t.radio?"radio":"checkbox";return n.createElement("div",{className:h(t.className,{"input-toggle h-20 w-20 pointer-events-none":!0}),"aria-hidden":"true"},n.createElement(He,{type:a,className:"hidden",labelClassName:t.labelClassName,name:"test",controlled:!0,onChange:()=>{},value:t.value,checked:t.checked}))}function pe(t){const a=t.prefix?rt:it;return n.createElement(t.label?"div":"button",{"aria-label":t.label?void 0:t["aria-label"],type:t.search?"submit":t.clear?"reset":void 0,onClick:t.onClick,className:h({[a.wrapper]:!0,[a.wrapperWithLabel]:t.label,[a.wrapperWithIcon]:!t.label})},n.createElement(n.Fragment,null,t.clear&&n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},n.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z",clipRule:"evenodd"})),t.search&&n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},n.createElement("g",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",clipPath:"url(#nra-cclip0)"},n.createElement("path",{d:"M8.796 11.803A5.684 5.684 0 104.349 1.341a5.684 5.684 0 004.447 10.462zM11 11l4 4"})),n.createElement("defs",null,n.createElement("clipPath",{id:"nra-cclip0"},n.createElement("path",{fill:"currentColor",d:"M0 0h16v16H0z"})))),t.label&&n.createElement("span",{className:a.label},t.label)))}const wt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},_e=wt("PropTable"),St={},Et="wrapper";function Ke(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Et,N(c(c({},St),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"box"},e("a",{parentName:"h1",href:"#box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Box"),e("p",null,"Box is a layout component used for separating content areas on a page."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Box } from '@fabric-ds/react';
`)),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual Options"),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box>
  <h1>Default example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{mdxType:"Box"},e("h1",null,"Default example"),e("p",null,"Box contents go here."))),e("h3",{id:"info"},e("a",{parentName:"h3",href:"#info","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Info"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info>
  <h1>Info example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{info:!0,mdxType:"Box"},e("h1",null,"Info example"),e("p",null,"Box contents go here."))),e("h3",{id:"bordered"},e("a",{parentName:"h3",href:"#bordered","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Bordered"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box bordered>
  <h1>Bordered example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{bordered:!0,mdxType:"Box"},e("h1",null,"Bordered example"),e("p",null,"Box contents go here."))),e("h3",{id:"clickable-using-button"},e("a",{parentName:"h3",href:"#clickable-using-button","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable (using button)"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info clickable>
  <h1>
    <Clickable className="font-bold" onClick={() => alert('hey')}>
      Clickable example
    </Clickable>
  </h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{info:!0,clickable:!0,mdxType:"Box"},e("h1",null,e(ne,{className:"font-bold",onClick:()=>alert("hey"),mdxType:"Clickable"},"Clickable example")),e("p",null,"Box contents go here."))),e("h3",{id:"clickable-using-anchor"},e("a",{parentName:"h3",href:"#clickable-using-anchor","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable (using anchor)"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box info clickable>
  <h1>
    <Clickable
      className="font-bold text-gray-700 hover:no-underline"
      href="https://finn.no"
      target="_blank"
    >
      Clickable example
    </Clickable>
  </h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{info:!0,clickable:!0,mdxType:"Box"},e("h1",null,e(ne,{className:"font-bold text-gray-700 hover:no-underline",href:"https://finn.no",target:"_blank",mdxType:"Clickable"},"Clickable example")),e("p",null,"Box contents go here."))),e("h3",{id:"neutral"},e("a",{parentName:"h3",href:"#neutral","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Neutral"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Box neutral>
  <h1>Neutral example</h1>
  <p>Box contents go here.</p>
</Box>
`)),e("div",{className:"example"},e(fe,{neutral:!0,mdxType:"Box"},e("h1",null,"Neutral example"),e("p",null,"Box contents go here."))),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(_e,{props:{children:{defaultValue:null,description:"Expand element children",name:"children",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>Expand element children</p>"},className:{defaultValue:null,description:"Additional classes to include",name:"className",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"any"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"(e: any) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"},as:{defaultValue:{value:"div"},description:"Allows customization of the underlying HTML element",name:"as",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"string | Component"},descriptionHtml:"<p>Allows customization of the underlying HTML element</p>"},bleed:{defaultValue:{value:"false"},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Toggles bleed, makes a box full-width on mobile</p>"},clickable:{defaultValue:{value:"false"},description:"Applies focus and pointer helpers, should be used with other styling to indicate clickability",name:"clickable",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Applies focus and pointer helpers, should be used with other styling to indicate clickability</p>"},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"}},info:{defaultValue:{value:"false"},description:"Styles the box with light blue color",name:"info",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Styles the box with light blue color</p>"},neutral:{defaultValue:{value:"false"},description:"Style the box with light gray color",name:"neutral",parent:{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"},declarations:[{fileName:"react/react/packages/box/src/props.tsx",name:"BoxProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Style the box with light gray color</p>"}},mdxType:"PropTable"}),e("h2",{id:"clickable-props"},e("a",{parentName:"h2",href:"#clickable-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clickable props"),e(_e,{props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes radio type to the underlying toggle</p>"},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes checkbox type to the underlying toggle</p>"},value:{defaultValue:null,description:`Value of the dead toggle
Sets or retrieves the default or selected value of the control.`,name:"value",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/typescript/lib/lib.dom.d.ts",name:"HTMLButtonElement"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Value of the dead toggle
Sets or retrieves the default or selected value of the control.</p>`},children:{defaultValue:null,description:"Clickable element children",name:"children",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!0,type:{name:"string | Element | Element[]"},descriptionHtml:"<p>Clickable element children</p>"},href:{defaultValue:null,description:`Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.`,name:"href",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/typescript/lib/lib.dom.d.ts",name:"HTMLHyperlinkElementUtils"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Redirect to url on click
If passed, clickable renders as an anchor tag allowing you to pass properties such as target, rel, etc.</p>`},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle label</p>"},onClick:{defaultValue:null,description:`Click handler
If passed, clickable renders as a button with a click event`,name:"onClick",declarations:[{fileName:"react/react/packages/_helpers/clickable.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:`<p>Click handler
If passed, clickable renders as a button with a click event</p>`}},mdxType:"PropTable"}))}Ke.isMDXComponent=!0;const Ht=t=>{const s=t,{children:a,className:l}=s,r=x(s,["children","className"]),i=t["aria-label"]||"Her er du";return p.exports.createElement("nav",c({className:h("flex space-x-8 space-x-reverse",t.className),"aria-label":i},r),p.exports.createElement("h2",{className:"sr-only"},i),a==null?void 0:a.map((o,d)=>[o,d!==a.length-1&&p.exports.createElement("span",{key:d,"aria-hidden":!0,className:"select-none"},"/")]))},Lt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},At=Lt("PropTable"),Pt={},It="wrapper";function Je(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(It,N(c(c({},Pt),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"breadcrumbs"},e("a",{parentName:"h1",href:"#breadcrumbs","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Breadcrumbs"),e("p",null,"Breadcrumbs show the navigation structure for the current location."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Breadcrumbs } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Breadcrumbs>
  <a href="#/url/1">Eiendom</a>
  <a href="#/url/2">Bolig til salgs</a>
  <a href="#/url/3" aria-current="page">
    Oslo
  </a>
</Breadcrumbs>
`)),e("div",{className:"example"},e(Ht,{mdxType:"Breadcrumbs"},e("a",{href:"#/url/1"},"Eiendom"),e("a",{href:"#/url/2"},"Bolig til salgs"),e("a",{href:"#/url/3","aria-current":"page"},"Oslo"))),e("h2",{id:"content"},e("a",{parentName:"h2",href:"#content","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Content"),e("p",null,`Breadcrumbs expect their component children to be the link "crumbs" that make up
the navigation structure. The component will interject a separator between the
crumbs.`),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,`Breadcrumbs should have a label that identifies the structure as a breadcrumb
trail to screen readers. By default, `,e("inlineCode",{parentName:"p"},"aria-label")," is set to ",e("em",null,`"Her er
du"`),"."),e("p",null,`It is recommended that the crumb for the current page has the
`,e("inlineCode",{parentName:"p"},'aria-current="page"'),` attribute set. Usually this is the last crumb in the
trail.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(At,{props:{"aria-label":{defaultValue:{value:"Her er du"},description:"Defines a string value that labels the current element.",name:"aria-label",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element.</p>"},className:{defaultValue:null,description:"",name:"className",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",declarations:[{fileName:"react/react/packages/breadcrumbs/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"}}},mdxType:"PropTable"}))}Je.isMDXComponent=!0;const q=p.exports.forwardRef((t,a)=>{const v=t,{primary:l,secondary:r,negative:i,utility:s,quiet:o,small:d,link:m,pill:f,loading:y}=v,k=x(v,["primary","secondary","negative","utility","quiet","small","link","pill","loading"]),C=h(t.className,{button:!0,"button--primary":l,"button--destructive":i,"button--flat":r&&o,"button--destructive-flat":i&&o,"button--utility-flat":s&&o,"button--small":d,"button--utility":s&&!o,"button--link":m,"button--pill":f,"button--in-progress":y});return n.createElement(n.Fragment,null,t.href?n.createElement("a",{href:t.href,target:t.target,rel:t.target==="_blank"?t.rel||"noopener":void 0,ref:a,className:C},t.children):n.createElement("button",N(c({},k),{type:t.type||"button",ref:a,className:C}),t.children),t.loading?n.createElement("span",{className:"sr-only",role:"progressbar","aria-valuenow":0,"aria-valuetext":"Laster..."}):null)}),Mt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Vt=Mt("PropTable"),Dt={},qt="wrapper";function Qe(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(qt,N(c(c({},Dt),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"button"},e("a",{parentName:"h1",href:"#button","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Button"),e("p",null,"Buttons are used to perform actions, with different visuals for different needs."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button>Save</Button>
`)),e("div",{className:"example"},e(q,{mdxType:"Button"},"Save")),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika button CSS."),e("li",{parentName:"ul"},`The variants are no longer different named exports. Use component properties
instead.`),e("li",{parentName:"ul"},"There is now a single button component for all cases. As a quick guide:",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<CallToAction>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button primary>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<DestructiveButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button negative>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<DestructiveFlatButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button negative>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<FlatButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},"<Button>"),"."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"<LinkButton>")," should be migrated to ",e("inlineCode",{parentName:"li"},'<Button href="...">'),"."))),e("li",{parentName:"ul"},"The ",e("inlineCode",{parentName:"li"},"inProgress")," property should be changed to ",e("inlineCode",{parentName:"li"},"loading"),"."),e("li",{parentName:"ul"},"The ",e("inlineCode",{parentName:"li"},"disabled")," has been removed as it is an anti-pattern (see below).")),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,`If the button doesn't have visible text content, such as when used with only an
icon, an `,e("inlineCode",{parentName:"p"},"aria-label")," prop must be provided for accessibility."),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"primary"},e("a",{parentName:"h3",href:"#primary","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Primary"),e("p",null,`The primary button is a call to action. As a general rule, there should only be
one of them on the screen. This guides the user towards the happy path.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button primary>Save</Button>
`)),e("div",{className:"example"},e(q,{primary:!0,mdxType:"Button"},"Save")),e("h3",{id:"negative"},e("a",{parentName:"h3",href:"#negative","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Negative"),e("p",null,`Used for destructive actions, like deletion. Shouldn't be used on the same
screen as a primary button.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button negative>Delete</Button>
`)),e("div",{className:"example"},e(q,{negative:!0,mdxType:"Button"},"Delete")),e("h3",{id:"secondary"},e("a",{parentName:"h3",href:"#secondary","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Secondary"),e("p",null,`Secondary buttons are without an outline, and are often used for secondary or
tertiary actions. This is the default so you may simply omit the secondary
property`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-32">
  <Button secondary>Save</Button>
  <Button>Save</Button>
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-32"},e(q,{secondary:!0,mdxType:"Button"},"Save"),e(q,{mdxType:"Button"},"Save"))),e("h3",{id:"loadingin-progress"},e("a",{parentName:"h3",href:"#loadingin-progress","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Loading/In progress"),e("p",null,"Used for visual feedback that the action the user triggered is loading."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button loading>Save</Button>
`)),e("div",{className:"example"},e(q,{loading:!0,mdxType:"Button"},"Save")),e("h3",{id:"small"},e("a",{parentName:"h3",href:"#small","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Small"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button small>Small</Button>
`)),e("div",{className:"example"},e(q,{small:!0,mdxType:"Button"},"Small")),e("h3",{id:"pill"},e("a",{parentName:"h3",href:"#pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Pill"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button pill>Pill</Button>
`)),e("div",{className:"example"},e(q,{pill:!0,mdxType:"Button"},"Pill")),e("h3",{id:"link"},e("a",{parentName:"h3",href:"#link","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Link"),e("p",null,"Buttons will be rendered as an anchor (a tag) if they use an ",e("inlineCode",{parentName:"p"},"href")," attribute."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button href="https://google.no">Link</Button>
`)),e("div",{className:"example"},e(q,{href:"https://google.no",mdxType:"Button"},"Link")),e("p",null,"But if you need a button to look like a link, use the ",e("inlineCode",{parentName:"p"},"link")," property."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Button link>Link</Button>
`)),e("div",{className:"example"},e(q,{link:!0,mdxType:"Button"},"Link")),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Disabled is an anti-pattern and is not supported. There will ALWAYS be users who
don't understand why an element is disabled, or users who can't even see that it
is disabled because of poor lighting conditions or other reasons.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Vt,{props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: MouseEvent<HTMLButtonElement, MouseEvent>) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},type:{defaultValue:{value:"button"},description:"Button type, only applied when href is not set.",name:"type",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"ButtonHTMLAttributes"}],required:!1,type:{name:'"button" | "submit" | "reset"'},descriptionHtml:"<p>Button type, only applied when href is not set.</p>"},primary:{defaultValue:{value:"false"},description:"Set the button to be a primary, call to action button. Can be combined with `small`.",name:"primary",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a primary, call to action button. Can be combined with <code>small</code>.</p>"},secondary:{defaultValue:{value:"true"},description:"Set the button to be a secondary, flat style button. Can be combined with `quiet` and `small`.",name:"secondary",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a secondary, flat style button. Can be combined with <code>quiet</code> and <code>small</code>.</p>"},negative:{defaultValue:{value:"false"},description:"Set the button to be a negative, destructive style button. Can be combined with `quiet` and `small`.",name:"negative",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a negative, destructive style button. Can be combined with <code>quiet</code> and <code>small</code>.</p>"},utility:{defaultValue:{value:"false"},description:"Set the button to be a utility style button. Can be combined with `small`.",name:"utility",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a utility style button. Can be combined with <code>small</code>.</p>"},quiet:{defaultValue:{value:"false"},description:"Quieten down the button, can be combined with other button types",name:"quiet",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Quieten down the button, can be combined with other button types</p>"},small:{defaultValue:{value:"false"},description:"Set the button to be a small size, can be combined with other button types",name:"small",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to be a small size, can be combined with other button types</p>"},link:{defaultValue:{value:"false"},description:"Set the button to look like a link. Can be combined with `small`.",name:"link",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like a link. Can be combined with <code>small</code>.</p>"},pill:{defaultValue:{value:"false"},description:"Set the button to look like a pill style button",name:"pill",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like a pill style button</p>"},loading:{defaultValue:{value:"false"},description:"Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.",name:"loading",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the button to look like it is in progress, can be combined with other button types. Can be combined with any button type.</p>"},href:{defaultValue:null,description:"Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation",name:"href",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Set the href for the location where clicking the button will take you to. Uses an a tag instead of a button tag for the underlying implementation</p>"},target:{defaultValue:null,description:"Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",name:"target",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Anchor target, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a</p>"},rel:{defaultValue:null,description:"The relationship of the linked URL",name:"rel",declarations:[{fileName:"react/react/packages/button/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The relationship of the linked URL</p>"}},mdxType:"PropTable"}))}Qe.isMDXComponent=!0;const Q={pill:"inline-flex items-center py-8 focus-ring text-12 transition-all",pillSuggestion:"bg-gray-200 hover:bg-gray-300 active:bg-gray-400 text-gray-700 font-bold",pillFilter:"bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white",label:"pl-12 rounded-l-full",labelSuggestion:"",labelFilter:"",labelWithoutClose:"pr-12 rounded-r-full",labelWithClose:"pr-2",close:"pr-12 pl-4 py-10 rounded-r-full"};function ee(t){return n.createElement("div",{className:"flex items-center"},n.createElement("button",{type:"button",onClick:t.onClick,className:h(t.canClose?"":t.className,{[Q.pill]:!0,[t.suggestion?Q.pillSuggestion:Q.pillFilter]:!0,[Q.label]:!0,[t.canClose?Q.labelWithClose:Q.labelWithoutClose]:!0})},n.createElement("span",{className:"sr-only"},t.openSRLabel||"\xC5pne filter"),t.icon||n.createElement("span",null,t.label)),t.canClose&&n.createElement("button",{type:"button",className:h(t.className,{[Q.pill]:!0,[t.suggestion?Q.pillSuggestion:Q.pillFilter]:!0,[Q.close]:!0}),onClick:t.onClose},n.createElement("span",{className:"sr-only"},t.closeSRLabel||`Fjern filter ${t.label}`),n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"none",viewBox:"0 0 16 16","aria-hidden":"true"},n.createElement("path",{fill:"currentColor",d:"M4.03 2.97a.75.75 0 00-1.06 1.06L6.94 8l-3.97 3.97a.75.75 0 101.06 1.06L8 9.06l3.97 3.97a.75.75 0 101.06-1.06L9.06 8l3.97-3.97a.75.75 0 00-1.06-1.06L8 6.94 4.03 2.97z"}))))}const Bt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Rt=Bt("PropTable"),Ft={},jt="wrapper";function ea(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(jt,N(c(c({},Ft),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"pill"},e("a",{parentName:"h1",href:"#pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Pill"),e("p",null,`Pill is a type of button that is often used as a filter, but can also be used as
a rounded button for overlays, etc.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Pill } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill label="Example" />
  <Pill label="Example" canClose onClose={() => alert('onClose event')} />
  <Pill label="Example" suggestion />
  <Pill
    label="Example"
    suggestion
    canClose
    onClose={() => alert('onClose event')}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(ee,{label:"Example",mdxType:"Pill"}),e(ee,{label:"Example",canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}),e(ee,{label:"Example",suggestion:!0,mdxType:"Pill"}),e(ee,{label:"Example",suggestion:!0,canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}))),e("p",null,"You can also make the Pill clickable like so"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill label="Example" onClick={() => alert('onClick event')} />
  <Pill label="Example" onClick={() => alert('onClick event')} suggestion />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(ee,{label:"Example",onClick:()=>alert("onClick event"),mdxType:"Pill"}),e(ee,{label:"Example",onClick:()=>alert("onClick event"),suggestion:!0,mdxType:"Pill"}))),e("p",null,"or have both the label and close button clickable if you wish"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill
    label="Example"
    onClick={() => alert('onClick event')}
    canClose
    onClose={() => alert('onClose event')}
  />
  <Pill
    label="Example"
    onClick={() => alert('onClick event')}
    suggestion
    canClose
    onClose={() => alert('onClose event')}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(ee,{label:"Example",onClick:()=>alert("onClick event"),canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}),e(ee,{label:"Example",onClick:()=>alert("onClick event"),suggestion:!0,canClose:!0,onClose:()=>alert("onClose event"),mdxType:"Pill"}))),e("h2",{id:"icons-in-pill"},e("a",{parentName:"h2",href:"#icons-in-pill","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Icons in Pill"),e("p",null,`You can pass any valid HTML as the icon prop, but in this example we will use
icons from `,e("inlineCode",{parentName:"p"},"@fabric-ds/icons")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { IconSearch16, IconPlus16 } from '@fabric-ds/icons/react';
`)),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex space-x-8">
  <Pill
    icon={<IconSearch16 />}
    onClick={() => alert('onClick event')}
    className="py-12"
  />
  <Pill
    icon={<IconPlus16 />}
    onClick={() => alert('onClick event')}
    suggestion
    className="py-12"
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex space-x-8"},e(ee,{icon:e(st,{mdxType:"IconSearch16"}),onClick:()=>alert("onClick event"),className:"py-12",mdxType:"Pill"}),e(ee,{icon:e(ot,{mdxType:"IconPlus16"}),onClick:()=>alert("onClick event"),suggestion:!0,className:"py-12",mdxType:"Pill"}))),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Rt,{props:{label:{defaultValue:null,description:"Render text inside of Pill",name:"label",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Render text inside of Pill</p>"},openSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting a pill",name:"openSRLabel",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label read by screen readers when targetting a pill</p>"},closeSRLabel:{defaultValue:null,description:"Label read by screen readers when targetting the pill close button",name:"closeSRLabel",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label read by screen readers when targetting the pill close button</p>"},icon:{defaultValue:null,description:"Render icon inside of Pill",name:"icon",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>Render icon inside of Pill</p>"},canClose:{defaultValue:{value:"false"},description:"Whether Pill should render a closing button, use onClick",name:"canClose",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether Pill should render a closing button, use onClick</p>"},suggestion:{defaultValue:{value:"false"},description:"Whether Pill should be rendered as a suggestion",name:"suggestion",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether Pill should be rendered as a suggestion</p>"},onClick:{defaultValue:null,description:"Action to be called when the Pill is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Action to be called when the Pill is clicked</p>"},onClose:{defaultValue:null,description:"Action to be called when the close button is clicked",name:"onClose",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Action to be called when the close button is clicked</p>"},className:{defaultValue:null,description:"Additional styles applied to the Pill",name:"className",declarations:[{fileName:"react/react/packages/pill/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional styles applied to the Pill</p>"}},mdxType:"PropTable"}))}ea.isMDXComponent=!0;function _t({id:t,isInvalid:a,title:l,optional:r}){return n.createElement("legend",{id:`${t}__title`,className:h("field-label",{"text-danger":a})},l,r&&n.createElement("span",{className:"pl-2 font-normal text-14 text-gray-500"}," ","(valgfritt)"))}function $t({isInvalid:t,helpId:a,helpText:l}){return n.createElement("div",{id:a,className:h("field-hint",{"text-danger":t})},l)}function ue(t){const a=ie(),l=t.helpText?`${a}__hint`:void 0,r=t.invalid,i=t.type==="radio"||t.type==="radio-button",s=!!t.selected||!!t.checked;return n.createElement("fieldset",{role:i?"radiogroup":void 0,"aria-invalid":i?r:void 0,"aria-errormessage":i&&r?l:void 0,"aria-describedby":l,className:"field"},t.title&&n.createElement(_t,{id:a,title:t.title,isInvalid:r,optional:t.optional}),n.createElement("div",{className:h(t.className,{"segment-control":t.type==="radio-button","segment-control--justified":t.equalWidth,"segment-control--small":t.small,"input-toggle":t.type==="radio"||t.type==="checkbox"})},!t.options&&t.label?n.createElement(He,{controlled:s,label:t.label,checked:t.checked,defaultChecked:t.defaultChecked,onChange:o=>t.onChange(o),name:`${a}:toggle`,key:`${a+t.type}`,invalid:r,helpId:l,type:i?"radio":"checkbox"}):t.options&&t.options.map((o,d)=>{var m,f;return n.createElement(He,{controlled:s,checked:(m=t.selected)==null?void 0:m.some(y=>y.value===o.value),defaultChecked:(f=t.defaultSelected)==null?void 0:f.some(y=>y.value===o.value),option:o,onChange:y=>t.onChange(y),name:`${a}:toggle`,key:`${a+d+t.type}`,invalid:r,helpId:l,type:i?"radio":"checkbox"})})),t.helpText&&n.createElement($t,{helpId:l,helpText:t.helpText,isInvalid:r}))}function K(t){const s=t,{as:a="article",children:l,flat:r}=s,i=x(s,["as","children","flat"]);return n.createElement(a,N(c({},i),{className:h(t.className,{[te.card]:!0,[te.cardShadow]:!t.flat,[te.cardSelected]:t.selected,[te.cardFlat]:t.flat,[t.selected?te.cardFlatSelected:te.cardFlatUnselected]:t.flat}),tabIndex:0,onKeyDown:t.onClick?o=>{if(typeof t.onClick=="function"&&(o.key==="Enter"||o.key===" ")){o.preventDefault(),t.onClick();return}}:void 0}),n.createElement(n.Fragment,null,t.onClick&&n.createElement("button",{className:"sr-only","aria-pressed":t.selected,tabIndex:-1},"Velg"),!t.onClick&&t.selected&&n.createElement("span",{role:"checkbox","aria-checked":"true","aria-disabled":"true"}),n.createElement("div",{className:h({[te.cardOutline]:!t.flat,[t.selected?te.cardOutlineSelected:te.cardOutlineUnselected]:!t.flat})}),l))}const aa=function(){const[a,l]=n.useState(!1);return e("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32"},e(K,{onClick:()=>l(!a),selected:a,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(K,{onClick:()=>l(!a),selected:a,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/403x403",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(K,{onClick:()=>l(!a),selected:a,mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))))},ta=function(){const[a,l]=n.useState(!1),[r,i]=n.useState("");return e("div",null,e(K,{selected:a,onClick:()=>l(!a),className:"mt-32 w-max",mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(Ce,{checkbox:!0,checked:a,className:"-mt-8",mdxType:"DeadToggle"}),e(ne,{checkbox:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Checkbox in a card"))),e("div",{className:"flex gap-32 mt-32"},e(K,{selected:r==="a",onClick:()=>i("a"),mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(Ce,{radio:!0,checked:r==="a",className:"-mt-8",mdxType:"DeadToggle"}),e(ne,{radio:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Radio in a card - A"))),e(K,{selected:r==="b",onClick:()=>i("b"),mdxType:"Card"},e("div",{className:"p-24 flex items-center"},e(Ce,{radio:!0,checked:r==="b",className:"-mt-8",mdxType:"DeadToggle"}),e(ne,{radio:!0,labelClassName:"ml-12",mdxType:"Clickable"},"Radio in a card - B")))))},la=function(){const[a,l]=n.useState("");return e("div",{className:"flex"},e(K,{flat:!0,className:"py-12 px-16 w-max",selected:a==="a",onClick:()=>l("a"),mdxType:"Card"},e("div",{className:"flex items-center"},e(Ce,{radio:!0,checked:a==="a",className:"-mt-6",mdxType:"DeadToggle"}),e("div",{className:"ml-16"},e("h4",{className:"mb-0"},e(ne,{radio:!0,mdxType:"Clickable"},"Purchase foo")),e("p",{className:"mb-0 text-14"},"520 kr/mnd")))),e(K,{flat:!0,className:"py-12 px-16 w-max ml-20",selected:a==="b",onClick:()=>l("b"),mdxType:"Card"},e("div",{className:"flex items-center"},e(Ce,{radio:!0,checked:a==="b",className:"-mt-6",mdxType:"DeadToggle"}),e("div",{className:"ml-16"},e("h4",{className:"mb-0"},e(ne,{radio:!0,mdxType:"Clickable"},"Purchase bar")),e("p",{className:"mb-0 text-14"},"124 kr/mnd")))))},Wt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},$e=Wt("PropTable"),Ot={Example0:aa,Example1:ta,Example2:la},zt="wrapper";function na(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(zt,N(c(c({},Ot),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"card"},e("a",{parentName:"h1",href:"#card","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Card"),e("p",null,`The Card component wraps any JSX and adds a bit of pseudo state styling, as well
as letting you set the card as selected. See examples below.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Card } from '@fabric-ds/react';
`)),e("h3",{id:"examples"},e("a",{parentName:"h3",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("div",{className:"space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32 my-20"},e(K,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(K,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/402x402",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom"))),e(K,{mdxType:"Card"},e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/404x404",alt:"Description"}),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("p",null,"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom")))),e("h3",{id:"code"},e("a",{parentName:"h3",href:"#code","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Code"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"<Card>")," component takes any set of JSX elements as its children."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Card>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <p>
      Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
      vv/fyring.
    </p>
    <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
      <span className="text-gray-200">\u2022</span> 2 soverom
    </p>
  </div>
</Card>
`)),e("h3",{id:"selecting"},e("a",{parentName:"h3",href:"#selecting","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Selecting"),e("p",null,"You can mark a Card as selected by pasing the ",e("inlineCode",{parentName:"p"},"selected"),` property. This will add
an outline to indicate the selected state.`),e("p",null,"Try clicking one of the cards below and watch them all get selected at once."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState(false);

  return (
    <div className="space-y-32 md:space-y-0 md:grid grid-cols-3 gap-32">
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/400x400"
          alt="Description"
        />
        <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
          Ukens bolig
        </p>
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/403x403"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
      <Card onClick={() => setSelected(!selected)} selected={selected}>
        <img
          className="h-128 w-full object-cover"
          src="https://source.unsplash.com/random/404x404"
          alt="Description"
        />
        <div className="p-16">
          <p className="text-12 text-gray-300">DNB Eiendom</p>
          <p>
            Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl.
            bl.a. vv/fyring.
          </p>
          <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
          <p className="font-bold my-8">
            52 m
            <span
              style={{
                fontSize: 10,
                verticalAlign: 'super',
                marginRight: 5,
              }}
            >
              2
            </span>
            Totalpris: 4 869 039 kr
          </p>
          <p className="text-14 text-gray-400 mb-0">
            Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
            <span className="text-gray-200">\u2022</span> 2 soverom
          </p>
        </div>
      </Card>
    </div>
  );
}
`)),e("div",{className:"example"},e(aa,{mdxType:"Example0"})),e("h3",{id:"anchor-cards"},e("a",{parentName:"h3",href:"#anchor-cards","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Anchor Cards"),e("p",null,`Keep in mind that if you wish to make the Card a clickable anchor card, you must
add a div as the very first element with the attribute aria-owns set to the id
of the title element. In this example we set it to the id of title and assign
the h3 this id.`),e("p",null,"You should follow these semantics, but styling is up to you."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx"},`<Card>
  <div aria-owns="title"></div>
  ...
  <h3 id="title">
    <Clickable href="..." title="content">
      content
    </Clickable>
  </h3>
  ...
</Card>
`)),e("p",null,"Here's the full code example:"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Card>
  <div aria-owns="title_id"></div>
  <img
    className="h-128 w-full object-cover"
    src="https://source.unsplash.com/random/400x400"
    alt="Description"
  />
  <p className="absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12">
    Ukens bolig
  </p>
  <div className="p-16">
    <p className="text-12 text-gray-300">DNB Eiendom</p>
    <h3 className="text-16 font-normal text-gray-800" id="title_id">
      <Clickable
        href="//finn.no"
        target="_blank"
        title="Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring."
        className="text-current hover:no-underline focus:no-underline"
      >
        Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a.
        vv/fyring.
      </Clickable>
    </h3>
    <p className="text-14 text-gray-400 mb-4">B\xF8gata 25C, 0655 Oslo</p>
    <p className="font-bold my-8">
      52 m
      <span
        style={{
          fontSize: 10,
          verticalAlign: 'super',
          marginRight: 5,
        }}
      >
        2
      </span>
      Totalpris: 4 869 039 kr
    </p>
    <p className="text-14 text-gray-400 mb-0">
      Eier (Selveier) <span className="text-gray-200">\u2022</span> Leilighet
      <span className="text-gray-200">\u2022</span> 2 soverom
    </p>
  </div>
</Card>
`)),e("div",{className:"example"},e(K,{mdxType:"Card"},e("div",{"aria-owns":"title_id"}),e("img",{className:"h-128 w-full object-cover",src:"https://source.unsplash.com/random/400x400",alt:"Description"}),e("p",{className:"absolute top-12 left-12 bg-aqua-200 text-aqua-900 p-4 rounded-4 text-12"},"Ukens bolig"),e("div",{className:"p-16"},e("p",{className:"text-12 text-gray-300"},"DNB Eiendom"),e("h3",{className:"text-16 font-normal text-gray-800",id:"title_id"},e(ne,{href:"//finn.no",target:"_blank",title:"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.",className:"text-current hover:no-underline focus:no-underline",mdxType:"Clickable"},"Stilfull og gjennomg\xE5ende 3-roms m/balkong. Oppusset i 2019. Inkl. bl.a. vv/fyring.")),e("p",{className:"text-14 text-gray-400 mb-4"},"B\xF8gata 25C, 0655 Oslo"),e("p",{className:"font-bold my-8"},"52 m",e("span",{style:{fontSize:10,verticalAlign:"super",marginRight:5}},"2"),"Totalpris: 4 869 039 kr"),e("p",{className:"text-14 text-gray-400 mb-0"},"Eier (Selveier) ",e("span",{className:"text-gray-200"},"\u2022")," Leilighet",e("span",{className:"text-gray-200"},"\u2022")," 2 soverom")))),e("h3",{id:"toggles-inside-of-cards"},e("a",{parentName:"h3",href:"#toggles-inside-of-cards","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggles inside of Cards"),e("p",null,"Using ",e("a",{parentName:"p",href:"/fabric-react/#/toggle"},"Toggles"),` inside of cards has the limitation of
only being able to pass forward a label. If you wish to further enhance the look
and feel of these you must use the DeadToggle helper component, which we cover a
bit further down.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [checked, setChecked] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div>
      <Card
        selected={checked}
        onClick={() => setChecked(!checked)}
        className="mt-32 w-max"
      >
        <div className="p-24 flex items-center">
          <DeadToggle checkbox checked={checked} className="-mt-8" />
          <Clickable checkbox labelClassName="ml-12">
            Checkbox in a card
          </Clickable>
        </div>
      </Card>

      <div className="flex gap-32 mt-32">
        <Card selected={selected === 'a'} onClick={() => setSelected('a')}>
          <div className="p-24 flex items-center">
            <DeadToggle radio checked={selected === 'a'} className="-mt-8" />
            <Clickable radio labelClassName="ml-12">
              Radio in a card - A
            </Clickable>
          </div>
        </Card>
        <Card selected={selected === 'b'} onClick={() => setSelected('b')}>
          <div className="p-24 flex items-center">
            <DeadToggle radio checked={selected === 'b'} className="-mt-8" />
            <Clickable radio labelClassName="ml-12">
              Radio in a card - B
            </Clickable>
          </div>
        </Card>
      </div>
    </div>
  );
}
`)),e("div",{className:"example"},e(ta,{mdxType:"Example1"})),e("h2",{id:"using-the-deadtoggle-and-clickable-helper-component"},e("a",{parentName:"h2",href:"#using-the-deadtoggle-and-clickable-helper-component","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Using the DeadToggle and Clickable helper component"),e("p",null,"First we must import the necessary helper components:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Clickable, DeadToggle } from '@fabric-ds/react';
`)),e("p",null,`By using the DeadToggle and Clickable helper components, we can utilize the UI
of the Toggle, whilst being able to style the card however we want.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState('');

  return (
    <div className="flex">
      <Card
        flat
        className="py-12 px-16 w-max"
        selected={selected === 'a'}
        onClick={() => setSelected('a')}
      >
        <div className="flex items-center">
          <DeadToggle radio checked={selected === 'a'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio>Purchase foo</Clickable>
            </h4>
            <p className="mb-0 text-14">520 kr/mnd</p>
          </div>
        </div>
      </Card>
      <Card
        flat
        className="py-12 px-16 w-max ml-20"
        selected={selected === 'b'}
        onClick={() => setSelected('b')}
      >
        <div className="flex items-center">
          <DeadToggle radio checked={selected === 'b'} className="-mt-6" />
          <div className="ml-16">
            <h4 className="mb-0">
              <Clickable radio>Purchase bar</Clickable>
            </h4>
            <p className="mb-0 text-14">124 kr/mnd</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
`)),e("div",{className:"example"},e(la,{mdxType:"Example2"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},'className="-mb-4"'),` on the Toggle component. This removes the
`,e("inlineCode",{parentName:"p"},"margin-bottom")," that follows the component."),e("h1",{id:"props"},e("a",{parentName:"h1",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e($e,{props:{flat:{defaultValue:null,description:"Removes box shadow around card",name:"flat",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Removes box shadow around card</p>"},children:{defaultValue:null,description:"The contents of the Card",name:"children",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>The contents of the Card</p>"},selected:{defaultValue:null,description:"If the card is selected",name:"selected",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>If the card is selected</p>"},as:{defaultValue:{value:"div"},description:"The wrapping container element",name:"as",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"string | Component"},descriptionHtml:"<p>The wrapping container element</p>"},className:{defaultValue:null,description:"Add your own custom styles to the container element",name:"className",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Add your own custom styles to the container element</p>"},onClick:{defaultValue:null,description:"When the card is clicked",name:"onClick",parent:{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"},declarations:[{fileName:"react/react/packages/card/src/props.tsx",name:"CardProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>When the card is clicked</p>"}},mdxType:"PropTable"}),e("h2",{id:"deadtoggle-props"},e("a",{parentName:"h2",href:"#deadtoggle-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"DeadToggle props"),e($e,{props:{radio:{defaultValue:null,description:"Passes radio type to the underlying toggle",name:"radio",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes radio type to the underlying toggle</p>"},checkbox:{defaultValue:null,description:"Passes checkbox type to the underlying toggle",name:"checkbox",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Passes checkbox type to the underlying toggle</p>"},value:{defaultValue:null,description:"Value for the input",name:"value",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Value for the input</p>"},checked:{defaultValue:null,description:"Whether the toggle is checked",name:"checked",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the toggle is checked</p>"},className:{defaultValue:null,description:"Additional classnames to the toggle wrapper",name:"className",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle wrapper</p>"},labelClassName:{defaultValue:null,description:"Additional classnames to the toggle label",name:"labelClassName",parent:{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"},declarations:[{fileName:"react/react/packages/_helpers/dead-toggle.tsx",name:"DeadToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classnames to the toggle label</p>"}},mdxType:"PropTable"}))}na.isMDXComponent=!0;const _=p.exports.forwardRef((t,a)=>{const b=t,{disabled:l,id:r,children:i,invalid:s,error:o,helpText:d,label:m,readOnly:f,type:y="text",style:k}=b,C=x(b,["disabled","id","children","invalid","error","helpText","label","readOnly","type","style"]),v=ie(r),H=d?`${v}__hint`:void 0,M=s||o,P=n.Children.toArray(i).some(T=>n.isValidElement(T)&&T.props.suffix),B=n.Children.toArray(i).some(T=>n.isValidElement(T)&&T.props.prefix);return n.createElement("div",{className:h({"has-suffix":P,"has-prefix":B})},n.createElement("div",{className:h({"input mb-0":!0,"input--is-invalid":M,"input--is-disabled":l,"input--is-read-only":f})},m&&n.createElement("label",{htmlFor:v},m),n.createElement("div",{className:"relative"},n.createElement("input",N(c({},C),{"aria-describedby":H,"aria-errormessage":M&&H?H:void 0,"aria-invalid":M,disabled:l,id:v,readOnly:f,ref:a,type:y})),i),d&&n.createElement("div",{className:"input__sub-text",id:H},d)))}),We="bluegray-100",Xt="f-react-combobox-option",Ut="f-react-combobox-match",Ne=p.exports.forwardRef((t,a)=>{var Z;const F=t,{id:l,options:r,value:i,onSelect:s,onChange:o,label:d,invalid:m,helpText:f,placeholder:y,openOnFocus:k,className:C,listClassName:v,matchTextSegments:H,children:M}=F,P=x(F,["id","options","value","onSelect","onChange","label","invalid","helpText","placeholder","openOnFocus","className","listClassName","matchTextSegments","children"]),B=ie(l),b=p.exports.useRef(null),T=p.exports.useRef(null),[V,A]=p.exports.useState(!0),[g,S]=p.exports.useState(null),[R,z]=p.exports.useState(!1),[W,he]=p.exports.useState(r.map(u=>N(c({},u),{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5)}))),E=W&&W.filter(u=>u.value.toLocaleLowerCase().includes(i.toLowerCase())).length?W.filter(u=>u.value.toLocaleLowerCase().includes(i.toLowerCase())):W,J=u=>{s&&s(u.value),S(null)},le=u=>{if(!R&&["ArrowDown","ArrowUp","PageUp","PageDown"].includes(u.key))return z(!0);if(!R||!(g==null?void 0:g.id)&&["Home","End"].includes(u.key))return;const O=E.findIndex(se=>se.id===(g==null?void 0:g.id)),X=O+1,Y=O-1;switch(u.key){case"ArrowDown":u.preventDefault(),S(X>E.length?null:E[X]);break;case"ArrowUp":u.preventDefault(),S(Y===-2?E[E.length-1]:Y<0?null:E[Y]);break;case"PageUp":u.preventDefault(),S(O-10<0?E[0]:E[O-10]);break;case"PageDown":u.preventDefault(),S(O+10>E.length?E[E.length-1]:E[O+10]);break;case"Home":u.preventDefault(),S(E[0]);break;case"End":u.preventDefault(),S(E[E.length-1]);break;case"Escape":R?z(!1):o(""),S(null);break;case"Enter":g&&(u.preventDefault(),J(g)),z(!1);break;case"Backspace":o((g==null?void 0:g.value)||i),S(null);break;default:u.key.length===1&&(o((g==null?void 0:g.value)||i),S(null));break}},ye=()=>{!T.current||!b.current||A(b.current.getBoundingClientRect().bottom+T.current.clientHeight<=(window.innerHeight||document.documentElement.clientHeight))};p.exports.useEffect(()=>{if(!b.current)return;const u=b.current;return u.addEventListener("keydown",le),window.addEventListener("scroll",ye),()=>{u.removeEventListener("keydown",le),window.removeEventListener("scroll",ye)}}),p.exports.useEffect(()=>{i.trim().length||z(!1),i.length&&z(!0)},[i]),p.exports.useEffect(()=>{he(r.map(u=>N(c({},u),{id:Date.now().toString(36)+Math.random().toString(36).slice(2,5)})))},[r]);const D=c({id:B,ref:a||b,value:(g==null?void 0:g.value)||i,onChange:u=>o&&o(i.length?u.target.value:u.target.value.trim()),label:d,invalid:m,helpText:f,placeholder:y,role:"combobox","aria-label":t["aria-label"],"aria-labelledby":t["aria-labelledby"],"aria-autocomplete":"list","aria-expanded":!!(g==null?void 0:g.id)||!1,"aria-activedescendant":R?g==null?void 0:g.id:void 0,"aria-controls":`${B}-listbox`,onFocus:()=>{!k||z(!0)}},P);return n.createElement("div",{className:h(C,{relative:!0}),onBlur:u=>{u.currentTarget.contains(u.relatedTarget)||z(!1)}},M?n.createElement(_,c({},D),M):n.createElement(_,c({},D)),R?n.createElement("div",{ref:T,className:h(v,{"absolute left-0 right-0 pb-8 rounded-8 bg-white shadow":!0,"sr-only":!W.length}),style:{zIndex:2,top:V?"unset":T.current?-((Z=T.current)==null?void 0:Z.clientHeight)+(d?22:0):"unset"}},n.createElement("span",{className:"sr-only",role:"status"},W&&W.filter(u=>u.value.toLocaleLowerCase().toLocaleLowerCase().includes(i.toLowerCase())).length?`${E.length} treff`:`Ingen treff, viser ${E.length>1||E.length===0?"alle":""} ${E.length} alternativ${E.length>1||E.length===0?"er":""}`),n.createElement("ul",{id:`${B}-listbox`,role:"listbox",className:h("m-0 p-0 select-none list-none",{[Ut]:H})},E.map(u=>{const O=u.label||u.value;let X=[];return H&&(X=[...O].map((Y,se)=>[...i.toLowerCase()].includes(Y.toLowerCase())?n.createElement("span",{"data-combobox-text-match":!0,key:`${u.id}-bold-letter-${Y}-${se}`,className:"font-bold"},Y):n.createElement("span",{key:`${u.id}-letter-${Y}-${se}`},Y))),n.createElement("li",{key:u.id,id:u.id,"aria-selected":(g==null?void 0:g.id)===u.id||!1,role:"option",tabIndex:-1,onClick:()=>{S(u),setTimeout(()=>{J(u),z(!1)},1)},className:h({[`block cursor-pointer p-8 hover:bg-${We} ${Xt}`]:!0,[`bg-${We}`]:(g==null?void 0:g.id)===u.id})},H?X:O)}))):"")}),ra=function(){const[a,l]=p.exports.useState("");return e(Ne,{label:"Choose a fruit",value:a,onChange:r=>l(r),onSelect:r=>l(r),options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},ia=function(){const[a,l]=p.exports.useState("");return e(Ne,{label:"Choose a fruit",value:a,onChange:r=>l(r),onSelect:r=>l(r),matchTextSegments:!0,options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},sa=function(){const[a,l]=p.exports.useState("");return e(Ne,{label:"Choose a fruit",placeholder:"Custom Option Rendering",value:a,onChange:r=>l(r),onSelect:r=>l(r),matchTextSegments:!0,options:[{value:"Apple",label:"\u{1F34E} Apple"},{value:"Banana",label:"\u{1F34C} Banana"},{value:"Orange",label:"\u{1F34A} Orange"},{value:"Pineapple",label:"\u{1F34D} Pineapple"}],mdxType:"Combobox"})},oa=function(){const[a,l]=p.exports.useState(""),r=Zt(a);return e(Ne,{label:"Star Wars character",matchTextSegments:!0,value:a,onChange:i=>l(i),onSelect:i=>{l(i),alert(i)},options:r,mdxType:"Combobox"})};function Zt(t){const[a,l]=p.exports.useState([]);return n.useEffect(()=>{if(!t.trim())return;let r=!0;return fetch("https://swapi.dev/api/people/?search="+t.trim()).then(i=>i.json()).then(i=>{!r||l(i.results.map(s=>({value:s.name})))}),()=>r=!1},[t]),a}const pa=function(){const[a,l]=p.exports.useState("");return e(Ne,{label:"Choose a fruit",placeholder:"Your favorite fruit",value:a,onChange:r=>l(r),onSelect:r=>l(r),matchTextSegments:!0,options:[{value:"Apple",label:"\u{1F34E} Apple"},{value:"Banana",label:"\u{1F34C} Banana"},{value:"Orange",label:"\u{1F34A} Orange"},{value:"Pineapple",label:"\u{1F34D} Pineapple"}],mdxType:"Combobox"},e(pe,{suffix:!0,clear:!0,"aria-label":"Clear text",onClick:()=>l(""),mdxType:"Affix"}))},ca=function(){const[a,l]=p.exports.useState("");return e(Ne,{label:"Choose a fruit",value:a,onChange:r=>l(r),onSelect:r=>{alert(r),l("")},options:[{value:"Apple"},{value:"Banana"},{value:"Orange"},{value:"Pineapple"}],mdxType:"Combobox"})},Yt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Oe=Yt("PropTable"),Gt={Example0:ra,Example1:ia,Example2:sa,Example3:oa,Example4:pa,Example5:ca},Kt="wrapper";function da(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Kt,N(c(c({},Gt),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"combobox"},e("a",{parentName:"h1",href:"#combobox","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Combobox"),e("p",null,"A combobox (also known as an autocomplete or autosuggest) component."),e("p",null,"A combobox is the combination of an ",e("inlineCode",{parentName:"p"},'<input type="text"/>'),` and a list. The list
is designed to help the user arrive at a value, but the value does not
necessarily have to come from that list. Don't think of it like a `,e("inlineCode",{parentName:"p"},"<select/>"),`,
but more of an input with some suggestions. You can, however, validate that the
value comes from the list, that's up to your app.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Combobox } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ra,{mdxType:"Example0"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika React's combobox CSS.")),e("h3",{id:"highlight-matched-text-segments"},e("a",{parentName:"h3",href:"#highlight-matched-text-segments","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Highlight matched text segments"),e("p",null,"If you want to highlight the matched text you can set the ",e("inlineCode",{parentName:"p"},"matchTextSegments"),`
prop.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ia,{mdxType:"Example1"})),e("p",null,`Note that this prop only enables the component's default styling for text
matches. You can style text matches however you'd like by overriding styles on
`,e("inlineCode",{parentName:"p"},"[data-combobox-text-match]"),". For example:"),e("pre",null,e("code",{parentName:"pre",className:"language-css",metastring:"example",example:!0},`[data-combobox-text-match] {
  background: yellow;
}
`)),e("h2",{id:"custom-rendering-in-comboboxoption"},e("a",{parentName:"h2",href:"#custom-rendering-in-comboboxoption","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Custom rendering in ComboboxOption"),e("p",null,`Sometimes you need to render something other than the value as the visible
option, in these cases you can pass a `,e("inlineCode",{parentName:"p"},"label"),`. The label is only for display.
The `,e("inlineCode",{parentName:"p"},"value")," is what gets sent back when selected."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Custom Option Rendering"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '\u{1F34E} Apple' },
        { value: 'Banana', label: '\u{1F34C} Banana' },
        { value: 'Orange', label: '\u{1F34A} Orange' },
        { value: 'Pineapple', label: '\u{1F34D} Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(sa,{mdxType:"Example2"})),e("h2",{id:"client-side-search"},e("a",{parentName:"h2",href:"#client-side-search","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Client side search"),e("p",null,`This example searches an API of Star Wars characters. Combobox does not
implement any matching on your list (aside from highlighting the matched phrases
in an option). Instead, you render an option for each result you want in the
list. So your job is to:`),e("ul",null,e("li",{parentName:"ul"},"Establish the search term state"),e("li",{parentName:"ul"},"Match the search to your list"),e("li",{parentName:"ul"},"Render an option for each match")),e("p",null,`There is nothing special about managing state for a combobox, it's like managing
state for any other list in your app. As the input changes, you figure out what
state you need, then render as many options as you want.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');
  const characters = useSWMatch(value);

  return (
    <Combobox
      label="Star Wars character"
      matchTextSegments
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        setValue(val);
        alert(val);
      }}
      options={characters}
    />
  );
}

// Note that this is a simplified example querying an API on every change to the input field
// Normally you would have some sort of throttling/debouncing and request cancellation
// to reduce the load on both the client and the server.
function useSWMatch(term) {
  const [characters, setCharacters] = useState([]);

  React.useEffect(() => {
    if (!term.trim()) return;
    let isFresh = true;

    fetch('https://swapi.dev/api/people/?search=' + term.trim())
      .then((res) => res.json())
      .then((res) => {
        if (!isFresh) return;
        setCharacters(res.results.map((c) => ({ value: c.name })));
      });

    return () => (isFresh = false);
  }, [term]);

  return characters;
}
`)),e("div",{className:"example"},e(oa,{mdxType:"Example3"})),e("h3",{id:"affix"},e("a",{parentName:"h3",href:"#affix","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix"),e("p",null,"If you wish to use an affix you must first import the Affix component."),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Affix } from '@fabric-ds/react';
`)),e("p",null,`Then you include it as a child of Combobox component and pass the appropiate
props (see bottom of this page for types)`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      placeholder="Your favorite fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => setValue(val)}
      matchTextSegments
      options={[
        { value: 'Apple', label: '\u{1F34E} Apple' },
        { value: 'Banana', label: '\u{1F34C} Banana' },
        { value: 'Orange', label: '\u{1F34A} Orange' },
        { value: 'Pineapple', label: '\u{1F34D} Pineapple' },
      ]}
    >
      <Affix
        suffix
        clear
        aria-label="Clear text"
        onClick={() => setValue('')}
      />
    </Combobox>
  );
}
`)),e("div",{className:"example"},e(pa,{mdxType:"Example4"})),e("p",null,e("strong",{parentName:"p"},"Note")," that when using the Affix component without a ",e("inlineCode",{parentName:"p"},"label"),` you should
specify an `,e("inlineCode",{parentName:"p"},"aria-label"),`. See props at the bottom of this page. See
`,e("a",{parentName:"p",href:"/textfield#affix"},"TextField")," for more details on Affix."),e("h3",{id:"clearing-input-on-select"},e("a",{parentName:"h3",href:"#clearing-input-on-select","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Clearing input on select"),e("p",null,`If you want, you can have the input field cleared after a value has been
selected`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState('');

  return (
    <Combobox
      label="Choose a fruit"
      value={value}
      onChange={(val) => setValue(val)}
      onSelect={(val) => {
        alert(val);
        setValue('');
      }}
      options={[
        { value: 'Apple' },
        { value: 'Banana' },
        { value: 'Orange' },
        { value: 'Pineapple' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(ca,{mdxType:"Example5"})),e("h2",{id:"combobox-props"},e("a",{parentName:"h2",href:"#combobox-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Combobox Props"),e(Oe,{props:{id:{defaultValue:null,description:"Unique identifier for the input field",name:"id",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Unique identifier for the input field</p>"},options:{defaultValue:null,description:"The available options to select from",name:"options",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"ComboboxOption[]"},descriptionHtml:"<p>The available options to select from</p>"},label:{defaultValue:null,description:"Label above input",name:"label",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Label above input</p>"},placeholder:{defaultValue:null,description:"Input placeholder",name:"placeholder",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Input placeholder</p>"},value:{defaultValue:null,description:"The TextField input value",name:"value",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"string"},descriptionHtml:"<p>The TextField input value</p>"},openOnFocus:{defaultValue:{value:"false"},description:"Whether the popover opens when focus is on the text field.",name:"openOnFocus",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the popover opens when focus is on the text field.</p>"},matchTextSegments:{defaultValue:{value:"false"},description:"Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override `[data-combobox-text-match]`.",name:"matchTextSegments",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the matching text segments in the options should be highlighted. Customise the styling by using CSS selectors to override <code>[data-combobox-text-match]</code>.</p>"},onSelect:{defaultValue:null,description:"Called when the user selects an option",name:"onSelect",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"((value: string) => void) & ReactEventHandler<HTMLInputElement>"},descriptionHtml:"<p>Called when the user selects an option</p>"},onChange:{defaultValue:null,description:"Called when the value of the input changes",name:"onChange",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"(value: string) => void"},descriptionHtml:"<p>Called when the value of the input changes</p>"},invalid:{defaultValue:null,description:"Renders the input field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the input field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},className:{defaultValue:null,description:"Additional container styling",name:"className",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional container styling</p>"},listClassName:{defaultValue:null,description:"Additional list styling",name:"listClassName",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional list styling</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,\nDefines a string value that labels the current element.\n@see aria-labelledby.",name:"aria-label",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"AriaAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Defines a string value that labels the current element. Must be set if <code>aria-labelledby</code> is not defined,
Defines a string value that labels the current element.
@see aria-labelledby.</p>`},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.\nIdentifies the element (or elements) that labels the current element.\n@see aria-describedby.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"AriaAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Identifies the element (or elements) that labels the current element. Must be set if <code>aria-label</code> is not defined.
Identifies the element (or elements) that labels the current element.
@see aria-describedby.</p>`},children:{defaultValue:null,description:"For affix use",name:"children",declarations:[{fileName:"react/react/packages/combobox/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>For affix use</p>"}},mdxType:"PropTable"}),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`export type ComboboxOption = {
  value: string;
  label?: string;
};
`)),e("h2",{id:"affix-props"},e("a",{parentName:"h2",href:"#affix-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix Props"),e(Oe,{props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the affix element.",name:"aria-label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the affix element.</p>"},prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the beginning of input</p>"},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the end of input</p>"},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a clear icon</p>"},search:{defaultValue:null,description:"Displays a search icon",name:"search",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a search icon</p>"},label:{defaultValue:null,description:"Displays a string",name:"label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Displays a string</p>"},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Click handler paired with clear or search</p>"}},mdxType:"PropTable"}))}da.isMDXComponent=!0;const Jt=f=>{var y=f,{title:t="",info:a=!1,box:l=!1,bleed:r=!1,buttonClass:i="",contentClass:s="",expanded:o=!1,className:d}=y,m=x(y,["title","info","box","bleed","buttonClass","contentClass","expanded","className"]);return N(c({},m),{wrapperClasses:h(d,{"bg-aqua-50":a,["py-0 px-0 "+de.box]:l,[de.bleed]:r}),buttonClasses:h({[i||""]:!0,[pt+" hover:underline focus:underline"]:!0,["w-full text-left relative "+de.box]:l,"hover:text-aqua-700 active:text-aqua-800":a}),chevronClasses:h({"inline-block align-middle transform transition-transform":!0,"-rotate-180":o,"relative left-8":!l,"box-chevron absolute right-16":l}),contentClasses:h({[s||""]:!0,[de.box+(t?" pt-0":"")]:l}),title:t})};function ce(t){const a=p.exports.useRef(null),P=t,{children:l,expanded:r=!1,onChange:i}=P,s=x(P,["children","expanded","onChange"]),[o,d]=n.useState(r),B=Jt(c({expanded:o},s)),{wrapperClasses:m,buttonClasses:f,contentClasses:y,chevronClasses:k,title:C,chevron:v=!0}=B,H=x(B,["wrapperClasses","buttonClasses","contentClasses","chevronClasses","title","chevron"]),M=b=>{d(!b),i&&i(!b),!(!a.current||!t.animated)&&(b?dt(a.current):ct(a.current))};return n.createElement("div",N(c({},H),{className:m}),n.createElement("button",{"aria-expanded":o,className:f,onClick:()=>M(o)},C&&n.createElement("span",{className:"h4"},C),v&&n.createElement("div",{className:k},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",viewBox:"0 0 16 16"},n.createElement("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5",d:"M2.5 5.5L8 11l5.5-5.5"})))),n.createElement("div",{ref:a,className:h({"overflow-hidden":!0,"h-0 invisible":!o}),"aria-hidden":!o},n.createElement("div",{className:y},l)))}const ma=function(){const[a,l]=n.useState(!0);return e(ce,{title:"Expandable box",box:!0,info:!0,expanded:a,onChange:l,mdxType:"Expandable"},e("p",null,"I am expanded"))},Qt=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},el=Qt("PropTable"),al={Example0:ma},tl="wrapper";function ua(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(tl,N(c(c({},al),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"expandable"},e("a",{parentName:"h1",href:"#expandable","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable"),e("p",null,`Expandable is a layout component used for creating expandable content areas on a
page.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Expandable } from '@fabric-ds/react';
`)),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual Options"),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable">
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am expandable",mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-box"},e("a",{parentName:"h3",href:"#expandable-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" box>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am expandable",box:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-info-box"},e("a",{parentName:"h3",href:"#expandable-info-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable info box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" info box>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am expandable",info:!0,box:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"expandable-animated-box"},e("a",{parentName:"h3",href:"#expandable-animated-box","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Expandable animated box"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" info box animated>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am expandable",info:!0,box:!0,animated:!0,mdxType:"Expandable"},e("p",null,"Expandable contents go here."))),e("h3",{id:"onchange-event"},e("a",{parentName:"h3",href:"#onchange-event","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"onChange event"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am expandable" onChange={(state) => console.log(state)}>
  <h1>onChange example</h1>
  <p>Expandable contents go here.</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am expandable",onChange:i=>console.log(i),mdxType:"Expandable"},e("h1",null,"onChange example"),e("p",null,"Expandable contents go here."))),e("h3",{id:"the-expanded-prop"},e("a",{parentName:"h3",href:"#the-expanded-prop","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"The expanded prop"),e("p",null,"You can set whether the component is open or collapsed using the ",e("inlineCode",{parentName:"p"},"expanded"),`
prop.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Expandable title="I am initially..." expanded>
  <p>...expanded</p>
</Expandable>
`)),e("div",{className:"example"},e(ce,{title:"I am initially...",expanded:!0,mdxType:"Expandable"},e("p",null,"...expanded"))),e("h3",{id:"controlling-the-component"},e("a",{parentName:"h3",href:"#controlling-the-component","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Controlling the component"),e("p",null,"If you need to take control of expansion, use the ",e("inlineCode",{parentName:"p"},"onChange"),` event in
combination with the `,e("inlineCode",{parentName:"p"},"expanded")," prop"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(true);
  return (
    <Expandable
      title="Expandable box"
      box
      info
      expanded={open}
      onChange={setOpen}
    >
      <p>I am expanded</p>
    </Expandable>
  );
}
`)),e("div",{className:"example"},e(ma,{mdxType:"Example0"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(el,{props:{className:{defaultValue:null,description:"Additional classes to include",name:"className",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes to include</p>"},style:{defaultValue:null,description:"CSS styles to inline on the component",name:"style",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>CSS styles to inline on the component</p>"},bleed:{defaultValue:{value:!1},description:"Toggles bleed, makes a box full-width on mobile",name:"bleed",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Toggles bleed, makes a box full-width on mobile</p>"},info:{defaultValue:{value:!1},description:"Styles the box with light blue color",name:"info",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Styles the box with light blue color</p>"},expanded:{defaultValue:{value:!1},description:"The state of the component, either true for expanded or false for closed.",name:"expanded",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>The state of the component, either true for expanded or false for closed.</p>"},onChange:{defaultValue:null,description:"Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.",name:"onChange",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(state: boolean) => void"},descriptionHtml:"<p>Event function to be called any time the component is expanded or closed. Function will be passed a boolean with a value of true if the component is now expanded or false if it is now closed.</p>"},title:{defaultValue:{value:""},description:"Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.",name:"title",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>Component title. Can be a string or component. Used to display the title value which is always present regardless of whether the component is open or closed.</p>"},box:{defaultValue:{value:!1},description:"Whether to display the component as a padded box or not.",name:"box",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to display the component as a padded box or not.</p>"},buttonClass:{defaultValue:{value:""},description:"Additional CSS classes to include on the button part of the component",name:"buttonClass",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS classes to include on the button part of the component</p>"},contentClass:{defaultValue:{value:""},description:"Additional CSS classes to include on the content part of the component",name:"contentClass",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS classes to include on the content part of the component</p>"},chevron:{defaultValue:{value:"true"},description:"Whether to display the chevron on the button part of the component",name:"chevron",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to display the chevron on the button part of the component</p>"},animated:{defaultValue:{value:"false"},description:"Animate open and close",name:"animated",declarations:[{fileName:"react/react/packages/expandable/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Animate open and close</p>"}},mdxType:"PropTable"}))}ua.isMDXComponent=!0;const Me=r=>{var i=r,{"aria-label":t,"aria-labelledby":a}=i,l=x(i,["aria-label","aria-labelledby"]);const s=p.exports.useRef(null),o=ie(l.id);return p.exports.useEffect(()=>{mt(),!!s.current&&l.open&&ut(s.current)},[l.open,s]),p.exports.useEffect(()=>{var d;!l.initialFocusRef||(d=l.initialFocusRef.current)==null||d.focus()},[l.open,l.initialFocusRef]),l.open?n.createElement(ht,null,n.createElement("div",{onClick:l.onDismiss,className:h(l.className,$.backdrop),style:c({},l.style)},n.createElement("div",{role:"dialog","aria-modal":"true",id:o,onClick:d=>{d.stopPropagation()},"aria-label":t,"aria-labelledby":a!=null?a:l.title&&!t?`${o}__title`:void 0,onKeyDown:d=>{!l.onDismiss||d.key==="Escape"&&l.onDismiss()},className:$.modal,tabIndex:-1},n.createElement("div",{className:$.title},typeof l.left=="boolean"&&l.left?n.createElement("button",{type:"button","aria-label":"Tilbake",className:h([$.transitionTitle,$.titleButton,$.titleButtonLeft,"justify-self-start"]),onClick:l.onDismiss},n.createElement("svg",{className:h([$.titleButtonIcon,"transform rotate-90"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},n.createElement("path",{fill:"currentColor",fillRule:"nonzero",d:"M8 2.25a.75.75 0 01.743.648L8.75 3v8.189l3.72-3.72a.75.75 0 011.133.977l-.073.084-5 5a.747.747 0 01-.374.204l-.104.014h-.104a.747.747 0 01-.478-.218l-5-5a.75.75 0 01.976-1.133l.084.073 3.72 3.719V3A.75.75 0 018 2.25z"}))):l.left,n.createElement("div",{id:`${o}__title`,className:h({[$.transitionTitle]:!0,"justify-self-center":!!l.left,"col-span-2":!l.left})},typeof l.title=="string"?n.createElement("p",{className:$.titleText},l.title):l.title),typeof l.right=="boolean"&&l.right?n.createElement("button",{type:"button","aria-label":"Lukk",onClick:l.onDismiss,className:h([$.transitionTitle,$.titleButton,$.titleButtonRight,"justify-self-end"])},n.createElement("svg",{className:$.titleButtonIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2.5",d:"M12 12l6 6-6-6-6 6 6-6zm0 0L6 6l6 6 6-6-6 6z"}))):l.right),n.createElement("div",{ref:s,className:$.content},l.children),!!l.footer&&n.createElement("div",{className:$.footer},l.footer)))):n.createElement(n.Fragment,null)},ha=function(){const[a,l]=n.useState(!1),[r,i]=n.useState(!0),[s,o]=n.useState("68%"),d=()=>l(!a);return e(n.Fragment,null,e(q,{utility:!0,onClick:d,mdxType:"Button"},"Open modal"),e(Me,{left:r,right:!0,open:a,onDismiss:d,title:"Hello title",footer:e(q,{primary:!0,onClick:d,mdxType:"Button"},"Confirm"),style:{"--f-modal-max-height":s,"--f-modal-height":"100%"},mdxType:"Modal"},e("div",{className:"space-x-8"},e("button",{onClick:()=>o(s==="68%"?"100%":"68%"),className:"button button--utility button--small mb-32"},"Modify height"),e("button",{onClick:()=>i(!r),className:"button button--utility button--small mb-32"},"Toggle the back-button")),e("div",null,e("h1",{className:"h4 mb-16"},"This is a title for the content area"),e("p",null,"Life as a shorty shouldn't be so rough. Behold the bold soldier control the globe slowly, proceeds to blow, swinging swords like Shinobi. The game of chess, is like a swordfight, you must think first before you move. My beats travel like a vortex through your spine, to the top of your cerebral cortex. I smoke on the mic like smoking Joe Frazier, the hell raiser, raising hell with the flavor."),e("p",null,"I breaks it down to the bone gristle, Ill speaking Scud missile heat seeking, Johnny Blazing. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial. Shackling the masses with drastic rap tactics, graphic displays melt the steel like blacksmiths. Perpendicular to the square we stay in gold like Flair, escape from your dragon's lair in particular. Shame on you when you stepped through to The Ol Dirty Bastard straight from the Brooklyn Zoo. Protect Ya Neck, my sword still remain imperial before I blast the mic, RZA scratch off the serial."),e("p",null,"Life as a shorty shouldn't be so rough. Handcuffed in the back of a bus, forty of us. Rae got it going on pal, call me the rap assassinator, rhymes rugged and built like Schwarzenegger. My beats travel like a vortex through your spine, to the top of your cerebral cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I set the microphone on fire, rap styles vary and carry like Mariah."))))},fa=function(){const[a,l]=n.useState(!1),[r,i]=n.useState(!1),s=()=>l(!a);return e(n.Fragment,null,e(q,{utility:!0,onClick:s,mdxType:"Button"},"Open modal"),e(Me,{open:a,onDismiss:r?s:void 0,title:"Non dismissable",footer:e(q,{primary:!0,disabled:!r,onClick:s,mdxType:"Button"},"Save"),mdxType:"Modal"},e("p",null,"To go further, you need to agree to these bogus terms"),e(ue,{type:"checkbox",label:"I agree",checked:r,onChange:o=>i(o),mdxType:"Toggle"})))},ba=function(){const[a,l]=n.useState(!1),r=n.useRef(),i=()=>l(!a);return e(n.Fragment,null,e(q,{utility:!0,onClick:i,mdxType:"Button"},"Open modal"),e(Me,{open:a,initialFocusRef:r,title:"Customized focus behavior",footer:e(n.Fragment,null,e(q,{onClick:i,className:"mr-12",mdxType:"Button"},"Cancel"),e(q,{primary:!0,ref:r,onClick:i,mdxType:"Button"},"Accept")),mdxType:"Modal"},e("p",null,"The call to action button has inital focus.")))},ll=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},nl=ll("PropTable"),rl={Example0:ha,Example1:fa,Example2:ba},il="wrapper";function ga(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(il,N(c(c({},rl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"modal"},e("a",{parentName:"h1",href:"#modal","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Modal"),e("p",null,`Modals are dialogs for contextual information, tasks, or workflows that appear
over the user interface.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Modal } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const [left, setLeft] = React.useState(true);
  const [height, setHeight] = React.useState('68%');

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        left={left}
        right
        open={open}
        onDismiss={toggleModal}
        title="Hello title"
        footer={
          <Button primary onClick={toggleModal}>
            Confirm
          </Button>
        }
        style={{
          '--f-modal-max-height': height,
          '--f-modal-height': '100%',
        }}
      >
        <div className="space-x-8">
          <button
            onClick={() => setHeight(height === '68%' ? '100%' : '68%')}
            className="button button--utility button--small mb-32"
          >
            Modify height
          </button>
          <button
            onClick={() => setLeft(!left)}
            className="button button--utility button--small mb-32"
          >
            Toggle the back-button
          </button>
        </div>
        <div>
          <h1 className="h4 mb-16">This is a title for the content area</h1>
          <p>
            Life as a shorty shouldn't be so rough. Behold the bold soldier
            control the globe slowly, proceeds to blow, swinging swords like
            Shinobi. The game of chess, is like a swordfight, you must think
            first before you move. My beats travel like a vortex through your
            spine, to the top of your cerebral cortex. I smoke on the mic like
            smoking Joe Frazier, the hell raiser, raising hell with the flavor.
          </p>
          <p>
            I breaks it down to the bone gristle, Ill speaking Scud missile heat
            seeking, Johnny Blazing. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
            Shackling the masses with drastic rap tactics, graphic displays melt
            the steel like blacksmiths. Perpendicular to the square we stay in
            gold like Flair, escape from your dragon's lair in particular. Shame
            on you when you stepped through to The Ol Dirty Bastard straight
            from the Brooklyn Zoo. Protect Ya Neck, my sword still remain
            imperial before I blast the mic, RZA scratch off the serial.
          </p>
          <p>
            Life as a shorty shouldn't be so rough. Handcuffed in the back of a
            bus, forty of us. Rae got it going on pal, call me the rap
            assassinator, rhymes rugged and built like Schwarzenegger. My beats
            travel like a vortex through your spine, to the top of your cerebral
            cortex. Life as a shorty shouldn't be so rough. Well I'm a sire, I
            set the microphone on fire, rap styles vary and carry like Mariah.
          </p>
        </div>
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(ha,{mdxType:"Example0"})),e("h2",{id:"content"},e("a",{parentName:"h2",href:"#content","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Content"),e("p",null,"Fabric guidelines state the following:"),e("ul",null,e("li",{parentName:"ul"},`The cancel action should always be on the left, while the main action is to
the right.`)),e("h2",{id:"non-dismissable-modals"},e("a",{parentName:"h2",href:"#non-dismissable-modals","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Non dismissable modals"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"onDismiss"),` prop is optional. It can be dropped to create a modal that won't
respond to `,e("inlineCode",{parentName:"p"},"esc")," keypresses and/or clicking outside the modal."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const [hasAgreed, setHasAgreed] = React.useState(false);

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>

      <Modal
        open={open}
        onDismiss={hasAgreed ? toggleModal : undefined}
        title="Non dismissable"
        footer={
          <Button primary disabled={!hasAgreed} onClick={toggleModal}>
            Save
          </Button>
        }
      >
        <p>To go further, you need to agree to these bogus terms</p>
        <Toggle
          type="checkbox"
          label="I agree"
          checked={hasAgreed}
          onChange={(state) => setHasAgreed(state)}
        />
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(fa,{mdxType:"Example1"})),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"Modal needs either ",e("inlineCode",{parentName:"p"},"aria-label")," or ",e("inlineCode",{parentName:"p"},"aria-labelledby"),` to be accessible to screen
readers.`),e("p",null,`All dialogs must have a title. Titles appear in bold at the top of the dialog
and use a few words to convey the outcome of what will happen if a user
continues with an action. Use the property `,e("inlineCode",{parentName:"p"},"title")," for this."),e("h3",{id:"customizing-focus-behavior"},e("a",{parentName:"h3",href:"#customizing-focus-behavior","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Customizing focus behavior"),e("p",null,`By default the first interactive element in the modal will be focused when the
modal opens. Use `,e("inlineCode",{parentName:"p"},"initialFocusRef"),` to customize this behavior. For instance,
this can be used to focus a call to action button.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [open, setOpen] = React.useState(false);
  const focusRef = React.useRef();

  const toggleModal = () => setOpen(!open);

  return (
    <>
      <Button utility onClick={toggleModal}>
        Open modal
      </Button>
      <Modal
        open={open}
        initialFocusRef={focusRef}
        title="Customized focus behavior"
        footer={
          <>
            <Button onClick={toggleModal} className="mr-12">
              Cancel
            </Button>
            <Button primary ref={focusRef} onClick={toggleModal}>
              Accept
            </Button>
          </>
        }
      >
        <p>The call to action button has inital focus.</p>
      </Modal>
    </>
  );
}
`)),e("div",{className:"example"},e(ba,{mdxType:"Example2"})),e("h2",{id:"modal-props"},e("a",{parentName:"h2",href:"#modal-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Modal Props"),e(nl,{props:{title:{defaultValue:null,description:"A string or your own custom elements",name:"title",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string | Element | Element[]"},descriptionHtml:"<p>A string or your own custom elements</p>"},open:{defaultValue:null,description:"Whether the modal is open or not",name:"open",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"boolean"},descriptionHtml:"<p>Whether the modal is open or not</p>"},left:{defaultValue:null,description:"A default back button or your own custom elements",name:"left",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean | Element | Element[]"},descriptionHtml:"<p>A default back button or your own custom elements</p>"},right:{defaultValue:null,description:"A default close button or your own custom elements",name:"right",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean | Element | Element[]"},descriptionHtml:"<p>A default close button or your own custom elements</p>"},footer:{defaultValue:null,description:"Buttons passed to the footer",name:"footer",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Element | Element[]"},descriptionHtml:"<p>Buttons passed to the footer</p>"},className:{defaultValue:null,description:"Additional classes added to the container",name:"className",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional classes added to the container</p>"},id:{defaultValue:null,description:"An id for the container and ARIA attributes. A random id is generated if none is provided.",name:"id",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>An id for the container and ARIA attributes. A random id is generated if none is provided.</p>"},style:{defaultValue:null,description:"Additional styles to the contianer",name:"style",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional styles to the contianer</p>"},children:{defaultValue:null,description:"The modal contents",name:"children",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>The modal contents</p>"},onDismiss:{defaultValue:null,description:"Handler that is called when the user presses *esc* or clicks outside the modal",name:"onDismiss",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Handler that is called when the user presses <em>esc</em> or clicks outside the modal</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if neither `aria-labelledby` or `<ModalHeading>` is defined,",name:"aria-label",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element. Must be set if neither <code>aria-labelledby</code> or <code>&#x3C;ModalHeading></code> is defined,</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if neither `aria-label` or `<ModalHeading>` is defined.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element (or elements) that labels the current element. Must be set if neither <code>aria-label</code> or <code>&#x3C;ModalHeading></code> is defined.</p>"},initialFocusRef:{defaultValue:null,description:"A reference to the element that should be focused. By default it'll be the first interactive element.",name:"initialFocusRef",declarations:[{fileName:"react/react/packages/modal/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"RefObject<any>"},descriptionHtml:"<p>A reference to the element that should be focused. By default it'll be the first interactive element.</p>"}},mdxType:"PropTable"}))}ga.isMDXComponent=!0;const sl=t=>{const y=t,{className:a,invalid:l,id:r,hint:i,always:s,label:o,style:d}=y,m=x(y,["className","invalid","id","hint","always","label","style"]),f=i?`${r}__hint`:void 0;return{attrs:{div:{style:d},label:{htmlFor:r,children:o},select:N(c({},m),{"aria-describedby":f,"aria-errormessage":l&&f?f:void 0,"aria-invalid":l,id:r}),help:s||l?{children:i,id:f}:null},classes:h("input mb-0",{"input--is-invalid":l},a)}};function ol(t,a){const l=ie(t.id),{attrs:r,classes:i}=sl(N(c({},t),{id:l})),{div:s,label:o,select:d,help:m}=r;return p.exports.createElement("div",c({className:i},s),o.children&&p.exports.createElement("label",c({},o)),p.exports.createElement("div",{className:"input--select__wrap"},p.exports.createElement("select",c({ref:a},d))),m&&p.exports.createElement("div",c({className:"input__sub-text"},m)))}const ke=p.exports.forwardRef(ol),xa=function(){let[a,l]=n.useState("c");return e("div",{className:"flex flex-col space-y-32"},e(ke,{label:"Berries (uncontrolled)",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries")),e(ke,{label:"Berries (controlled)",value:a,onChange:r=>l(r.target.value),mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries")))},pl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},cl=pl("PropTable"),dl={Example0:xa},ml="wrapper";function Na(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(ml,N(c(c({},dl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"select"},e("a",{parentName:"h1",href:"#select","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Select"),e("p",null,"A dropdown component for selecting a single value."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Select } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(ke,{label:"Berries",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,"An initial, uncontrolled, value can be provided using the ",e("inlineCode",{parentName:"p"},"defaultValue"),` prop.
Alternatively, a controlled value can be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('c');

  return (
    <div className="flex flex-col space-y-32">
      <Select label="Berries (uncontrolled)">
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>

      <Select
        label="Berries (controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      >
        <option value="s">Strawberries</option>
        <option value="r">Raspberries</option>
        <option value="c">Cloudberries</option>
      </Select>
    </div>
  );
}
`)),e("div",{className:"example"},e(xa,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the Select using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` should be provided to the
Select for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop should be provided using the id of the labeling element
instead.`),e("h2",{id:"hint-text"},e("a",{parentName:"h2",href:"#hint-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Hint text"),e("p",null,"Selects can provide additional context with ",e("inlineCode",{parentName:"p"},"hint"),` if the label and placeholder
aren't enough. You can force the hint text to always display by setting the
`,e("inlineCode",{parentName:"p"},"always")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries" hint="We'll make jam of your selection" always>
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(ke,{label:"Berries",hint:"We'll make jam of your selection",always:!0,mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`Selects can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"invalid"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"invalid")," is often paired with ",e("inlineCode",{parentName:"p"},"hint"),` to provide feedback to the user about the
error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Select label="Berries" invalid hint="The wrong selection gets you berried">
  <option value="s">Strawberries</option>
  <option value="r">Raspberries</option>
  <option value="c">Cloudberries</option>
</Select>
`)),e("div",{className:"example"},e(ke,{label:"Berries",invalid:!0,hint:"The wrong selection gets you berried",mdxType:"Select"},e("option",{value:"s"},"Strawberries"),e("option",{value:"r"},"Raspberries"),e("option",{value:"c"},"Cloudberries"))),e("h2",{id:"disabled"},e("a",{parentName:"h2",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Using disabled is considered an anti-pattern and is therefore not supported.
There will ALWAYS be users who don't understand why an element is disabled, or
users who can't even see that it is disabled because of poor lighting conditions
or other reasons. Please consider more informative alternatives.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(cl,{props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},children:{defaultValue:null,description:"The `option` elements to populate the select with.",name:"children",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The <code>option</code> elements to populate the select with.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `hint` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>hint</code> to provide feedback about the error.</p>"},hint:{defaultValue:null,description:"The content to display as the help text.",name:"hint",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},always:{defaultValue:null,description:"Whether to always show hint",name:"always",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether to always show hint</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the label.</p>"},name:{defaultValue:null,description:"The name of the select element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the select element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLSelectElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLSelectElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLSelectElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},required:{defaultValue:null,description:"Whether user input is required on the select before form submission.",name:"required",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"SelectHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the select before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/select/src/props.tsx",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}))}Na.isMDXComponent=!0;function ya(t,a){const{width:l}=Ct(t),[r,i]=p.exports.useState(l);return me(()=>{var s,o;i(l-((o=(s=a.current)==null?void 0:s.offsetWidth)!=null?o:0))},[l,a]),r}function ae(t,a,l){return Math.min(Math.max(t,a),l)}function be(t,a,l,r){if(r){const i=(l-a)/2;return r.invertExtent(t)[t>i?1:0]}return ae((t-a)/(l-a),0,1)}function va(t,a,l,r,i){if(i)return i(t);let s=(l-a)*t;return s=Math.round(s/r)*r+a,ae(a,s,l)}function Ta(t,a,l){if(!l)return t+a;const r=l.range(),i=r.indexOf(t),s=Math.min(r.length-1,i+a);return r[s]}function Ca(t,a,l){if(!l)return t-a;const r=l.range(),i=r.indexOf(t),s=Math.max(0,i-a);return r[s]}function Le(t,a,l,r,i){return i?a*Math.max(2,Math.min(20,Math.ceil(i.range().length/10/a))):a*Math.max(2,Math.min(20,Math.ceil((r-l)/10/a)))}const ul=y=>{var k=y,{className:t,disabled:a=!1,onInput:l=()=>{},onChange:r=()=>{},max:i=100,min:s=0,scale:o,step:d=1,value:m}=k,f=x(k,["className","disabled","onInput","onChange","max","min","scale","step","value"]);const C=n.useRef(null),v=n.useRef(null),H=ya(C,v),M=n.useRef(m),[P,B]=n.useState(!1),b=S=>{S!==m&&r(S)},T=S=>{if(a)return;let R;switch(S.key){case"ArrowLeft":case"ArrowDown":case"PageDown":R=Ca(m,S.key==="PageDown"?Le(m,d,s,i,o):d,o);break;case"ArrowUp":case"ArrowRight":case"PageUp":R=Ta(m,S.key==="PageUp"?Le(m,d,s,i,o):d,o);break;case"Home":R=s;break;case"End":R=i;break}R!=null&&(R=ae(R,s,i),l(R),b(R),S.preventDefault(),S.stopPropagation())},[V,A]=Ye(()=>({ratio:be(m,s,i,o),immediate:!0}));n.useEffect(()=>{M.current!==m&&(M.current=m,A({ratio:be(m,s,i,o)}))},[m,A,s,i,o]);const g=Ge(({xy:S,first:R,last:z,memo:W={rect:(he=>(he=C.current)==null?void 0:he.getBoundingClientRect())()}})=>{var le;const E=ae((S[0]-W.rect.left)/W.rect.width,0,1);let J=va(E,s,i,d,o);return J!==M.current&&(P||r(J),l(J)),A({ratio:E}),R?B(!0):z&&(B(!1),b(J),(le=v.current)==null||le.focus()),W},{axis:"x",enabled:!a});return n.createElement("div",N(c({},g()),{"data-body-scroll-lock-ignore":!0,className:h(w.wrapper,t),style:{cursor:P?"grabbing":"pointer"},ref:C}),n.createElement("div",{className:h({"pointer-events-none":a,[w.track]:!0})}),n.createElement(Te.div,{className:h({[w.activeTrackDisabled]:a,[w.activeTrack]:!0}),style:{left:0,right:V.ratio.interpolate(S=>`${(1-S)*100}%`)}}),n.createElement(Te.div,{"aria-disabled":a,"aria-label":f["aria-label"],"aria-labelledby":f["aria-labelledby"],"aria-valuemax":i,"aria-valuemin":s,"aria-valuenow":m,"aria-valuetext":f["aria-valuetext"],className:h({[w.thumbDisabled]:a,[w.thumbEnabled]:!a,[w.thumb]:!0,"shadow-sm":!0}),onKeyDown:T,role:"slider",ref:v,style:{transform:V.ratio.interpolate(S=>`translate3d(${S*H}px,0,0)`),cursor:"inherit"},tabIndex:a?void 0:0},n.createElement("div",{className:h({[w.thumbCenter]:!0,[w.thumbCenterEnabled]:!a,[w.thumbCenterDisabled]:a})})))},Ve=t=>{const[a,l]=n.useState(!1);return me(()=>{l(!0)},[]),a?n.createElement(ul,c({},t)):n.createElement("div",{className:h(w.wrapper,t.className)},n.createElement("div",{className:h(w.track)}))},hl=y=>{var k=y,{className:t,disabled:a=!1,value:l,onInput:r=()=>{},onChange:i=()=>{},max:s=100,min:o=0,scale:d,step:m=1}=k,f=x(k,["className","disabled","value","onInput","onChange","max","min","scale","step"]);var R,z,W,he,E,J,le,ye;const C=n.useRef(null),v=n.useRef(null),H=n.useRef(null),M=ya(C,v),P=n.useRef([...l]),[B,b]=n.useState(!1),T=(D,F)=>{if(l[F]!==D){const Z=l.concat();Z[F]=D,i(Z)}},V=(D,F=0)=>{if(a)return;const Z=l[F];let u;switch(D.key){case"ArrowLeft":case"ArrowDown":case"PageDown":u=Ca(Z,D.key==="PageDown"?Le(Z,m,o,s,d):m,d);break;case"ArrowUp":case"ArrowRight":case"PageUp":u=Ta(Z,D.key==="PageUp"?Le(Z,m,o,s,d):m,d);break;case"Home":u=o;break;case"End":u=s;break}if(u!=null){u=ae(u,F===0?o:l[0],F===1?s:l[1]);const O=l.concat();O[F]=u,r(O),T(u,F),D.preventDefault(),D.stopPropagation()}},[A,g]=Ye(()=>({ratioLower:be(l[0],o,s,d),ratioUpper:be(l[1],o,s,d),immediate:!0}));n.useEffect(()=>{P.current[0]!==l[0]&&(P.current[0]=l[0],g({ratioLower:be(l[0],o,s,d)})),P.current[1]!==l[1]&&(P.current[1]=l[1],g({ratioUpper:be(l[1],o,s,d)}))},[l,g,s,o,d]);const S=Ge(({xy:D,first:F,last:Z,memo:u={rect:(O=>(O=C.current)==null?void 0:O.getBoundingClientRect())(),handle:0}})=>{var De;let X=ae((D[0]-u.rect.left)/u.rect.width,0,1);const Y=A.ratioLower.getValue(),se=A.ratioUpper.getValue();if(F){let ve;l[0]===s?ve=0:l[1]===o?ve=1:ve=Math.abs(Y-X)<Math.abs(se+1e-4-X)?0:1,u.handle=ve,b(!0)}X=u.handle===0?ae(X,0,se):ae(X,Y,1);const Ae=va(X,o,s,m,d);return Ae!==P.current[u.handle]&&(P.current[u.handle]=Ae,B||i(P.current.concat()),r(P.current.concat())),Z&&(b(!1),T(Ae,u.handle),(De=(u.handle===0?v:H).current)==null||De.focus()),g({[u.handle===0?"ratioLower":"ratioUpper"]:X}),u},{axis:"x",enabled:!a});return n.createElement("div",N(c({},S()),{"data-body-scroll-lock-ignore":!0,className:h(w.wrapper,{disabled:a},t),style:{cursor:B?"grabbing":"pointer"},ref:C}),n.createElement("div",{className:h({"pointer-events-none":a,[w.track]:!0})}),n.createElement(Te.div,{className:h({[w.activeTrackDisabled]:a,[w.activeTrack]:!0}),style:{left:A.ratioLower.interpolate(D=>`${D*100}%`),right:A.ratioUpper.interpolate(D=>`${(1-D)*100}%`)}}),n.createElement(Te.div,{"aria-disabled":a,"aria-label":(z=(R=f["aria-label"])==null?void 0:R[0])!=null?z:f["aria-labelledby"]?void 0:"Fra","aria-labelledby":(W=f["aria-labelledby"])==null?void 0:W[0],"aria-valuemax":l[1],"aria-valuemin":o,"aria-valuenow":l[0],"aria-valuetext":(he=f["aria-valuetext"])==null?void 0:he[0],className:h({[w.thumbDisabled]:a,[w.thumbEnabled]:!a,[w.thumb]:!0,"shadow-sm":!0}),onKeyDown:V,role:"slider",ref:v,style:{transform:Fe([A.ratioLower,A.ratioUpper],(D,F)=>`translate3d(${ae(D,0,F)*M}px, 0px, 0px)`),cursor:"inherit"},tabIndex:a?void 0:0},n.createElement("div",{className:h({[w.thumbCenter]:!0,[w.thumbCenterEnabled]:!a,[w.thumbCenterDisabled]:a})})),n.createElement(Te.div,{"aria-disabled":a,"aria-label":(J=(E=f["aria-label"])==null?void 0:E[1])!=null?J:f["aria-labelledby"]?void 0:"Til","aria-labelledby":(le=f["aria-labelledby"])==null?void 0:le[1],"aria-valuemax":s,"aria-valuemin":l[0],"aria-valuenow":l[1],"aria-valuetext":(ye=f["aria-valuetext"])==null?void 0:ye[1],className:h({[w.thumbDisabled]:a,[w.thumbEnabled]:!a,[w.thumb]:!0,"shadow-sm":!0}),onKeyDown:D=>V(D,1),role:"slider",ref:H,style:{transform:Fe([A.ratioLower,A.ratioUpper],(D,F)=>`translate3d(${ae(F,D,1)*M}px, 0px, 0px)`),cursor:"inherit"},tabIndex:a?void 0:0},n.createElement("div",{className:h({[w.thumbCenter]:!0,[w.thumbCenterEnabled]:!a,[w.thumbCenterDisabled]:a})})))},ka=t=>{const[a,l]=n.useState(!1);return me(()=>{l(!0)},[]),a?n.createElement(hl,c({},t)):n.createElement("div",{className:h(w.wrapper,t.className)},n.createElement("div",{className:h(w.track)}))},wa=function(){const[a,l]=n.useState(50),[r,i]=n.useState([25,75]);return e("div",{className:"space-y-32"},e(Ve,{"aria-label":"Slider example",onChange:l,value:a,step:10,mdxType:"RegularSlider"}),e(ka,{"aria-label":["Range example: lower","Range example: upper"],onChange:i,value:r,mdxType:"RangeSlider"}))},Sa=function(){const[a,l]=n.useState(50),[r,i]=n.useState(a);return e(n.Fragment,null,e("p",null,"Drag the slider to see the difference between onChange and onInput"),e(Ve,{"aria-label":"onInput example",value:a,onChange:l,onInput:i,mdxType:"RegularSlider"}),e("div",null,"onChange: ",a),e("div",null,"onInput: ",r))},fl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},ze=fl("PropTable"),bl={Example0:wa,Example1:Sa},gl="wrapper";function Ea(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(gl,N(c(c({},bl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"slider"},e("a",{parentName:"h1",href:"#slider","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Slider"),e("p",null,`A slider is an input where the user selects a value from within a given range.
The precise value, however, is not necessarily considered important. It can have
single or dual drag handles.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { RegularSlider, RangeSlider } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [singleValue, setSingleValue] = React.useState(50);
  const [rangeValue, setRangeValue] = React.useState([25, 75]);

  return (
    <div className="space-y-32">
      <RegularSlider
        aria-label="Slider example"
        onChange={setSingleValue}
        value={singleValue}
        step={10}
      />

      <RangeSlider
        aria-label={['Range example: lower', 'Range example: upper']}
        onChange={setRangeValue}
        value={rangeValue}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(wa,{mdxType:"Example0"})),e("h2",{id:"accessiblity"},e("a",{parentName:"h2",href:"#accessiblity","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessiblity"),e("p",null,"To be accessible, an ",e("inlineCode",{parentName:"p"},"aria-label"),` prop should be provided to the slider. If the
slider is labeled by a separate element, use an `,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop with the
id of the labeling element instead.`),e("h2",{id:"events"},e("a",{parentName:"h2",href:"#events","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Events"),e("p",null,"The slider accepts an ",e("inlineCode",{parentName:"p"},"onChange"),` prop which is triggered whenever the value is
changed by the user. Note that this is only called when the value has settled.
In other words, when the user has stopped dragging the slider's handle.`),e("p",null,`If you need the value while the slider is being interacted it, before the value
has settled, you can use the `,e("inlineCode",{parentName:"p"},"onInput"),` prop. This is always triggered before an
`,e("inlineCode",{parentName:"p"},"onChange"),"."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = React.useState(50);
  const [inputValue, setInputValue] = React.useState(value);

  return (
    <>
      <p>Drag the slider to see the difference between onChange and onInput</p>
      <RegularSlider
        aria-label="onInput example"
        value={value}
        onChange={setValue}
        onInput={setInputValue}
      />
      <div>onChange: {value}</div>
      <div>onInput: {inputValue}</div>
    </>
  );
}
`)),e("div",{className:"example"},e(Sa,{mdxType:"Example1"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="space-y-32">
  <RegularSlider aria-label="Disabled slider" disabled value={50} />
  <RangeSlider
    aria-label={['Disabled slider: lower', 'Disabled slider: upper']}
    disabled
    value={[25, 75]}
  />
</div>
`)),e("div",{className:"example"},e("div",{className:"space-y-32"},e(Ve,{"aria-label":"Disabled slider",disabled:!0,value:50,mdxType:"RegularSlider"}),e(ka,{"aria-label":["Disabled slider: lower","Disabled slider: upper"],disabled:!0,value:[25,75],mdxType:"RangeSlider"}))),e("h2",{id:"additional-props"},e("a",{parentName:"h2",href:"#additional-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Additional props"),e("h3",{id:"max"},e("a",{parentName:"h3",href:"#max","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Max"),e("p",null,"The maximum value of the slider."),e("h3",{id:"min"},e("a",{parentName:"h3",href:"#min","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Min"),e("p",null,"The minimum value of the slider."),e("h3",{id:"step"},e("a",{parentName:"h3",href:"#step","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Step"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"step"),` prop is a number that specifies the granularity that the value must
adhere to as it changes. Step sets minimum intervals of change.`),e("h2",{id:"regularslider-props"},e("a",{parentName:"h2",href:"#regularslider-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"RegularSlider Props"),e(ze,{props:{"aria-label":{defaultValue:null,description:"String value that labels the slider.",name:"aria-label",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>String value that labels the slider.</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element that labels the slider.</p>"},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value.",name:"aria-valuetext",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Human readable text alternative for the value.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},disabled:{defaultValue:{value:!1},description:"Whether the slider is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the slider is disabled.</p>"},onInput:{defaultValue:{value:"() => {}"},description:"Handler that is called every time the value of the slider changes.",name:"onInput",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: number) => void"},descriptionHtml:"<p>Handler that is called every time the value of the slider changes.</p>"},onChange:{defaultValue:{value:"() => {}"},description:"Handler that is called when the value of the slider has settled.",name:"onChange",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: number) => void"},descriptionHtml:"<p>Handler that is called when the value of the slider has settled.</p>"},max:{defaultValue:{value:100},description:"The greatest value in the range of permitted values.",name:"max",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The greatest value in the range of permitted values.</p>"},min:{defaultValue:{value:0},description:"The lowest value in the range of permitted values.",name:"min",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The lowest value in the range of permitted values.</p>"},scale:{defaultValue:null,description:`A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale`,name:"scale",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Scale"},descriptionHtml:`<p>A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale</p>`},step:{defaultValue:{value:1},description:"Specifies the value granularity.",name:"step",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Specifies the value granularity.</p>"},value:{defaultValue:null,description:"The current value.",name:"value",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"number"},descriptionHtml:"<p>The current value.</p>"}},mdxType:"PropTable"}),e("h2",{id:"rangeslider-props"},e("a",{parentName:"h2",href:"#rangeslider-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"RangeSlider Props"),e(ze,{props:{"aria-label":{defaultValue:null,description:"String value that labels the slider.",name:"aria-label",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>String value that labels the slider.</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element that labels the slider.",name:"aria-labelledby",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>Identifies the element that labels the slider.</p>"},"aria-valuetext":{defaultValue:null,description:"Human readable text alternative for the value.",name:"aria-valuetext",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"[string, string]"},descriptionHtml:"<p>Human readable text alternative for the value.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},disabled:{defaultValue:{value:!1},description:"Whether the slider is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the slider is disabled.</p>"},onInput:{defaultValue:{value:"() => {}"},description:"Handler that is called every time the value of the slider changes.",name:"onInput",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: [number, number]) => void"},descriptionHtml:"<p>Handler that is called every time the value of the slider changes.</p>"},onChange:{defaultValue:{value:"() => {}"},description:"Handler that is called when the value of the slider has settled.",name:"onChange",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(value: [number, number]) => void"},descriptionHtml:"<p>Handler that is called when the value of the slider has settled.</p>"},max:{defaultValue:{value:100},description:"The greatest value in the range of permitted values.",name:"max",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The greatest value in the range of permitted values.</p>"},min:{defaultValue:{value:0},description:"The lowest value in the range of permitted values.",name:"min",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>The lowest value in the range of permitted values.</p>"},scale:{defaultValue:null,description:`A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale`,name:"scale",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"Scale"},descriptionHtml:`<p>A d3-scale object for non linear slider scales.
@see d3-scale repository https://github.com/d3/d3-scale</p>`},step:{defaultValue:{value:1},description:"Specifies the value granularity.",name:"step",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Specifies the value granularity.</p>"},value:{defaultValue:null,description:"The current value",name:"value",declarations:[{fileName:"react/react/packages/slider/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"[number, number]"},descriptionHtml:"<p>The current value</p>"}},mdxType:"PropTable"}))}Ea.isMDXComponent=!0;const Ha=p.exports.createContext({horizontal:void 0,right:void 0});function La(t){return n.createElement(Ha.Provider,{value:{horizontal:t.horizontal,right:t.right}},n.createElement("div",{className:h(t.className,{"w-full":!0,flex:t.horizontal})},t.children))}function ge({active:t,completed:a,children:l}){const r=p.exports.useContext(Ha),i=!r.horizontal,s=!r.right;return n.createElement("div",{className:h({"f-step":!0,[L.stepVertical]:i,[L.stepVerticalLeft]:i&&s,[L.stepVerticalRight]:i&&!s,[L.stepHorizontal]:!i})},!i&&n.createElement("div",{className:h({"step-line-h-l":!0,[L.stepLine]:!0,[L.stepLineHorizontal]:!i,[L.stepLineIncomplete]:!t&&!a,[L.stepLineComplete]:t||a})}),n.createElement("div",{className:h({[L.stepDot]:!0,[L.stepDotVertical]:i,[L.stepDotVerticalLeft]:i&&s,[L.stepDotVerticalRight]:i&&!s,[L.stepDotHorizontal]:!i,[L.stepDotIncomplete]:!(t||a),[L.stepDotActive]:t,[L.stepDotComplete]:a})},n.createElement("svg",{role:"img","aria-label":a?"\u2713":"\u237B","aria-current":t?"step":void 0,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},n.createElement("path",{fill:"white",fillRule:"evenodd",d:"M13.007 4.447a.75.75 0 01.046 1.06l-5.5 6a.75.75 0 01-1.083.023l-3-3a.75.75 0 011.06-1.06l2.446 2.446 4.971-5.423a.75.75 0 011.06-.046z",clipRule:"evenodd"}))),n.createElement("div",{className:h({"step-line-h-r":!0,[L.stepLine]:!0,[L.stepLineVertical]:i,[L.stepLineVerticalLeft]:i&&s,[L.stepLineVerticalRight]:i&&!s,[L.stepLineHorizontal]:!i,[L.stepLineIncomplete]:!a,[L.stepLineComplete]:a})}),n.createElement("div",{className:h({[L.content]:!0,[L.contentVertical]:i,[L.contentHorizontal]:!i})},l))}const Aa=function(){return e(La,{mdxType:"Steps"},e(ge,{completed:!0,mdxType:"Step"},e("h4",null,"Step one"),e("p",null,"Content")),e(ge,{active:!0,mdxType:"Step"},e("h4",null,"Step two"),e("p",null,"Content")),e(ge,{mdxType:"Step"},e("h4",null,"Step three"),e("p",null,"Content")))},Pa=function(){const[a,l]=p.exports.useState(0),[r,i]=p.exports.useState(!1),[s,o]=p.exports.useState(!1),d=()=>l(a===3?0:m=>m+1);return e(n.Fragment,null,e(q,{onClick:d,small:!0,mdxType:"Button"},"Complete a step"),e(q,{className:"ml-8",onClick:()=>i(!r),small:!0,mdxType:"Button"},r?"Vertical":"Horizontal"),!r&&e(q,{className:"ml-8",onClick:()=>o(!s),small:!0,mdxType:"Button"},s?"Left":"Right"),e(La,{className:"mt-20",horizontal:r,right:s,mdxType:"Steps"},e(ge,{active:a===0,completed:a>0,mdxType:"Step"},e("h4",{className:"mt-0"},"Step one"),e("p",null,"Some content")),e(ge,{active:a===1,completed:a>1,mdxType:"Step"},e("h4",{className:"mt-0"},"Step two"),e("p",null,"Some content")),e(ge,{active:a===2,completed:a>2,mdxType:"Step"},e("h4",{className:"mt-0"},"Step three"),e("p",null,"Some content"))))},xl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Xe=xl("PropTable"),Nl={Example0:Aa,Example1:Pa},yl="wrapper";function Ia(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(yl,N(c(c({},Nl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"steps"},e("a",{parentName:"h1",href:"#steps","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Steps"),e("p",null,`The steps component is built to handle user journeys, making it clear to the end
user where they are in the process.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Steps, Step } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  return (
    <Steps>
      <Step completed>
        <h4>Step one</h4>
        <p>Content</p>
      </Step>
      <Step active>
        <h4>Step two</h4>
        <p>Content</p>
      </Step>
      <Step>
        <h4>Step three</h4>
        <p>Content</p>
      </Step>
    </Steps>
  );
}
`)),e("div",{className:"example"},e(Aa,{mdxType:"Example0"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"active")," and ",e("inlineCode",{parentName:"p"},"completed")," properties on the ",e("inlineCode",{parentName:"p"},"<Step>"),` component. You
have to conditionally set the truthiness of these properties depending on where
in the process the user is. See interactive example below.`),e("h3",{id:"interactive-example"},e("a",{parentName:"h3",href:"#interactive-example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Interactive example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [state, setState] = useState(0);
  const [horizontal, setHorizontal] = useState(false);
  const [right, setRight] = useState(false);

  const handleIncrease = () => {
    if (state === 3) {
      return setState(0);
    }

    return setState((state) => state + 1);
  };

  return (
    <>
      <Button onClick={handleIncrease} small>
        Complete a step
      </Button>
      <Button className="ml-8" onClick={() => setHorizontal(!horizontal)} small>
        {horizontal ? 'Vertical' : 'Horizontal'}
      </Button>
      {!horizontal && (
        <Button className="ml-8" onClick={() => setRight(!right)} small>
          {right ? 'Left' : 'Right'}
        </Button>
      )}

      <Steps className="mt-20" horizontal={horizontal} right={right}>
        <Step active={state === 0} completed={state > 0}>
          <h4 className="mt-0">Step one</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 1} completed={state > 1}>
          <h4 className="mt-0">Step two</h4>
          <p>Some content</p>
        </Step>
        <Step active={state === 2} completed={state > 2}>
          <h4 className="mt-0">Step three</h4>
          <p>Some content</p>
        </Step>
      </Steps>
    </>
  );
}
`)),e("div",{className:"example"},e(Pa,{mdxType:"Example1"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"horizontal")," and ",e("inlineCode",{parentName:"p"},"right")," properties on the ",e("inlineCode",{parentName:"p"},"<Steps>"),` component.
These choose the direction and alignment of the steps.`),e("h2",{id:"steps-props"},e("a",{parentName:"h2",href:"#steps-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Steps Props"),e(Xe,{props:{horizontal:{defaultValue:{value:"false"},description:"Direction of steps",name:"horizontal",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Direction of steps</p>"},right:{defaultValue:{value:"false"},description:"Align steps to the right",name:"right",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Align steps to the right</p>"},children:{defaultValue:null,description:"Two or more `Step` components",name:"children",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!0,type:{name:"Element[]"},descriptionHtml:"<p>Two or more <code>Step</code> components</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",parent:{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"},declarations:[{fileName:"react/react/packages/steps/src/props.tsx",name:"StepsProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"}},mdxType:"PropTable"}),e("h2",{id:"step-props"},e("a",{parentName:"h2",href:"#step-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Step Props"),e(Xe,{props:{active:{defaultValue:{value:"false"},description:"Step is active",name:"active",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Step is active</p>"},completed:{defaultValue:{value:"false"},description:"Step is completed",name:"completed",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Step is completed</p>"},children:{defaultValue:null,description:"Contents of Step",name:"children",parent:{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"},declarations:[{fileName:"react/react/packages/steps/src/step.tsx",name:"StepProps"}],required:!0,type:{name:"Element | Element[]"},descriptionHtml:"<p>Contents of Step</p>"}},mdxType:"PropTable"}))}Ia.isMDXComponent=!0;function Ma(o){var d=o,{id:t,value:a,onClick:l,"aria-label":r,"aria-labelledby":i}=d,s=x(d,["id","value","onClick","aria-label","aria-labelledby"]);const m="focus:outline-none focus:ring ring-offset-1 ring-blue-200 rounded-full";return n.createElement("div",{className:"tap-highlight-transparent"},n.createElement("button",c({id:t,role:"switch","aria-label":r,"aria-labelledby":i,"aria-checked":a,onClick:l,className:h([oe.label,m])},s),n.createElement("span",{className:h([oe.switchTrack,"top-0","left-0"],{[oe.switchTrackSelected]:a,[oe.switchTrackUnselected]:!a})}),n.createElement("span",{className:h([oe.switchThumb,oe.switchThumbNotDisabled],{[oe.switchThumbSelected]:a})})))}const Va=function(){const[a,l]=p.exports.useState(!1);return e(Ma,{value:a,onClick:()=>l(!a),"aria-label":"Toggle switch",mdxType:"Switch"})},Da=function(){const[a,l]=p.exports.useState(!1);return e(Ma,{value:a,onClick:()=>{l(!a),alert("Your own custom action when toggled")},"aria-label":"Toggle switch",mdxType:"Switch"})},vl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Tl=vl("PropTable"),Cl={Example0:Va,Example1:Da},kl="wrapper";function qa(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(kl,N(c(c({},Cl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"switch"},e("a",{parentName:"h1",href:"#switch","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Switch"),e("p",null,"This component allows users to toggle between validity for a condition."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Switch } from '@fabric-ds/react';
`)),e("h2",{id:"examples"},e("a",{parentName:"h2",href:"#examples","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Examples"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      value={value}
      onClick={() => setValue(!value)}
      aria-label="Toggle switch"
    />
  );
}
`)),e("div",{className:"example"},e(Va,{mdxType:"Example0"})),e("h4",{id:"writing-your-own-custom-click-handler"},e("a",{parentName:"h4",href:"#writing-your-own-custom-click-handler","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Writing your own custom click handler"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      value={value}
      onClick={() => {
        setValue(!value);
        alert('Your own custom action when toggled');
      }}
      aria-label="Toggle switch"
    />
  );
}
`)),e("div",{className:"example"},e(Da,{mdxType:"Example1"})),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"The Switch needs either ",e("inlineCode",{parentName:"p"},"aria-label")," or ",e("inlineCode",{parentName:"p"},"aria-labelledby"),` to be accessible to
screen readers.`),e("h3",{id:""}),e("h4",{id:"disabled-property"},e("a",{parentName:"h4",href:"#disabled-property","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled property"),e("p",null,`There is no visual styling to a disabled button. It is recommended to display a
message to the user, for example a modal or toast, stating why the user cannot
toggle the switch.`),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Tl,{props:{id:{defaultValue:null,description:"The unique identifier",name:"id",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The unique identifier</p>"},value:{defaultValue:null,description:"The value of the Switch",name:"value",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!0,type:{name:"boolean"},descriptionHtml:"<p>The value of the Switch</p>"},onClick:{defaultValue:null,description:"Handler for when the Switch is clicked",name:"onClick",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!0,type:{name:"() => void"},descriptionHtml:"<p>Handler for when the Switch is clicked</p>"},"aria-label":{defaultValue:null,description:"Defines a string value that labels the current element. Must be set if `aria-labelledby` is not defined,",name:"aria-label",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the current element. Must be set if <code>aria-labelledby</code> is not defined,</p>"},"aria-labelledby":{defaultValue:null,description:"Identifies the element (or elements) that labels the current element. Must be set if `aria-label` is not defined.",name:"aria-labelledby",parent:{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"},declarations:[{fileName:"react/react/packages/switch/src/props.tsx",name:"SwitchProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Identifies the element (or elements) that labels the current element. Must be set if <code>aria-label</code> is not defined.</p>"}},mdxType:"PropTable"}))}qa.isMDXComponent=!0;const wl=s=>{var o=s,{className:t,isActive:a,setActive:l,contained:r}=o,i=x(o,["className","isActive","setActive","contained"]);return{tab:h({[t]:!!t,[U.tab]:!0,[U.tabActive]:a,[U.tabContained]:r,[U.tabContainedActive]:r&&a}),icon:h({[U.icon]:!0,[U.iconUnderlined]:!r,[a?U.iconUnderlinedActive:U.iconUnderlinedInactive]:!r}),content:h({[U.contentUnderlined]:!r,[a?U.contentUnderlinedActive:U.contentUnderlinedInactive]:!r,[U.contentContainedActive]:r&&a}),attrs:c({},i)}};function I(t){const{children:a,label:l,setActive:r=()=>{},name:i,onClick:s,isActive:o}=t,{tab:d,icon:m,content:f,attrs:y}=wl(t),H=y,{over:k}=H,C=x(H,["over"]),v=M=>{r(i),s&&s(M)};return n.createElement("button",N(c({type:"button"},C),{role:"tab","aria-selected":o?"true":"false","aria-controls":o?`fabric-tabpanel-${i}`:void 0,id:`fabric-tab-${i}`,tabIndex:o?0:-1,className:d,onClick:v}),!a&&n.createElement("span",{className:f},l),a&&k&&n.createElement(n.Fragment,null,n.createElement("span",{className:m},a),n.createElement("span",{className:f},l)),a&&!k&&n.createElement("div",{className:"flex items-center justify-center gap-8"},a,l))}function xe(t){var o,d;const s=t,{children:a,name:l,hidden:r}=s,i=x(s,["children","name","hidden"]);return n.createElement("div",N(c({tabIndex:-1},i),{role:"tabpanel","aria-labelledby":`fabric-tab-${l}`,id:`fabric-tabpanel-${l}`,hidden:r===void 0&&typeof document=="object"?!((d=(o=document==null?void 0:document.getElementById(`fabric-tab-${l}`))==null?void 0:o.classList)==null?void 0:d.contains(U.tabActive)):r}),a)}function Sl(t,a=200,l=!1){let r;return function(){var i=()=>{r=null,l||t.apply(this,arguments)};let s=l&&!r;clearTimeout(r),r=setTimeout(i,a),s&&t.apply(this,arguments)}}const El=(m,o,d)=>{var f=m,{className:t,contained:a,children:l,onClick:r,active:i}=f,s=x(f,["className","contained","children","onClick","active"]);return{nav:h({[t]:!!t,[a?Ee.wrapperContained:Ee.wrapperUnderlined]:!0}),div:h({[Ee.tabContainer]:!0,[`grid-cols-${l.length}`]:!0}),wunderbar:h(Ee.wunderbar),attrs:s,updateWunderbar:()=>{a||window.requestAnimationFrame(()=>{try{const y=o.current.querySelector('button[role="tab"][aria-selected="true"]'),{left:k}=o.current.getBoundingClientRect(),{left:C,width:v}=y.getBoundingClientRect();d.current.style.left=`${C-k}px`,d.current.style.width=`${v}px`}catch(y){console.warn("Problem updating tabs",y)}})}}};function re(t){const a=Boolean(typeof document=="object"&&(document==null?void 0:document.createElement)),l=p.exports.useRef(null),r=p.exports.useRef(null),{children:i,contained:s,onChange:o}=t,{nav:d,div:m,wunderbar:f,attrs:y,updateWunderbar:k}=El(t,l,r),C=()=>{var b;if(t.active)return String(t.active);if(p.exports.Children.count(i)>0){const T=p.exports.Children.toArray(i),V=(T==null?void 0:T.find(A=>{var g;return(g=A==null?void 0:A.props)==null?void 0:g.isActive}))||T[0];return String(((b=V==null?void 0:V.props)==null?void 0:b.name)||"")}return""},[v,H]=p.exports.useState(C()),M=()=>{p.exports.Children.forEach(i,b=>{var T,V;if(typeof b=="object"){const A=document.getElementById(`fabric-tabpanel-${(T=b==null?void 0:b.props)==null?void 0:T.name}`);A&&(A.hidden=((V=b==null?void 0:b.props)==null?void 0:V.name)!==v)}})},P=b=>{H(b),k(),o&&o(b)},B=b=>{if(!b.altKey&&!b.ctrlKey&&!b.shiftKey&&["ArrowLeft","ArrowRight","Home","End"].includes(b.key))try{const T=[...l.current.querySelectorAll('button[role="tab"]')],V=T.findIndex(g=>g.name===v),A=(()=>{switch(b.key){case"Home":return 0;case"End":return T.length-1;case"ArrowLeft":return Math.max(0,V-1);case"ArrowRight":return Math.min(T.length-1,V+1);default:return V}})();V!==A&&(b.preventDefault(),P(T[A].name),T[A].focus())}catch(T){console.warn("Problem handling keydown",T)}};return p.exports.useEffect(()=>{a&&M(),k();const b=Sl(k,100);return window.addEventListener("resize",b),()=>window.removeEventListener("resize",b)}),n.createElement("div",N(c({},y),{className:d}),n.createElement("div",{role:"tablist",className:m,ref:l,onKeyDown:B},p.exports.Children.map(i,b=>p.exports.cloneElement(b,{contained:s,setActive:P,isActive:b.props.name===v})),!s&&n.createElement("span",{className:f,ref:r})))}const Ba=function(){return e("div",null,e(re,{active:"four",mdxType:"Tabs"},e(I,{label:"Tab 1",name:"four",mdxType:"Tab"}),e(I,{label:"Tab 2",name:"five",mdxType:"Tab"}),e(I,{label:"Tab 3",name:"six",mdxType:"Tab"})),e("div",{className:"mb-16"},e(xe,{name:"four",mdxType:"TabPanel"},"Panel 1 content"),e(xe,{name:"five",mdxType:"TabPanel"},"Panel 2 content"),e(xe,{name:"six",mdxType:"TabPanel"},"Panel 3 content")))},Ra=function(){const a=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(re,{mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"},a),e(I,{label:"Tab 2",name:"two",mdxType:"Tab"},a),e(I,{label:"Tab 3",name:"three",mdxType:"Tab"},a))},Fa=function(){const a=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(re,{mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",over:!0,isActive:!0,mdxType:"Tab"},a),e(I,{label:"Tab 2",name:"two",over:!0,mdxType:"Tab"},a),e(I,{label:"Tab 3",name:"three",over:!0,mdxType:"Tab"},a))},ja=function(){const a=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(re,{contained:!0,mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"},a),e(I,{label:"Tab 2",name:"two",mdxType:"Tab"},a),e(I,{label:"Tab 3",name:"three",mdxType:"Tab"},a))},_a=function(){const a=e("svg",{width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z",fill:"#474445"}));return e(re,{contained:!0,mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",over:!0,isActive:!0,mdxType:"Tab"},a),e(I,{label:"Tab 2",name:"two",over:!0,mdxType:"Tab"},a),e(I,{label:"Tab 3",name:"three",over:!0,mdxType:"Tab"},a))},Hl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Ue=Hl("PropTable"),Ll={Example0:Ba,Example1:Ra,Example2:Fa,Example3:ja,Example4:_a},Al="wrapper";function $a(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Al,N(c(c({},Ll),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"tabs"},e("a",{parentName:"h1",href:"#tabs","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tabs"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs onChange={(e) => console.log(e)}>
    <Tab label="Tab 1" name="one" isActive />
    <Tab label="Tab 2" name="two" />
    <Tab label="Tab 3" name="three" />
</Tabs>
<TabPanel name="one">Panel 1 content</TabPanel>
<TabPanel name="two">Panel 2 content</TabPanel>
<TabPanel name="three">Panel 3 content</TabPanel>
`)),e("div",{className:"example"},e(re,{onChange:i=>console.log(i),mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(I,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(I,{label:"Tab 3",name:"three",mdxType:"Tab"})),e(xe,{name:"one",mdxType:"TabPanel"},"Panel 1 content"),e(xe,{name:"two",mdxType:"TabPanel"},"Panel 2 content"),e(xe,{name:"three",mdxType:"TabPanel"},"Panel 3 content")),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Tab, Tabs, TabPanel } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("p",null,`The following example demonstrates how the Tab, Tabs, and TabPanel components
can be used to switch between panels.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  return (
    <div>
      <Tabs active="four">
        <Tab label="Tab 1" name="four" />
        <Tab label="Tab 2" name="five" />
        <Tab label="Tab 3" name="six" />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="four">Panel 1 content</TabPanel>
        <TabPanel name="five">Panel 2 content</TabPanel>
        <TabPanel name="six">Panel 3 content</TabPanel>
      </div>
    </div>
  );
}
`)),e("div",{className:"example"},e(Ba,{mdxType:"Example0"})),e("h2",{id:"technical-details"},e("a",{parentName:"h2",href:"#technical-details","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Technical details"),e("p",null,"You can set the active tab in one of two ways:"),e("ol",null,e("li",{parentName:"ol"},`By passing the name of the active Tab to the Tabs component using the active
attribute.`),e("li",{parentName:"ol"},"By setting isActive on the active Tab.")),e("p",null,"The first Tab is active by default if you don't specify an active Tab."),e("p",null,"It is important that all children of Tabs are Tab components."),e("p",null,`Note that name attributes will be used to generate id attributes (prefixed with
fabric-tab- and fabric-tabpanel-), and therefore they must be unique throughout
the entire DOM. This is because aria-controls and aria-labelledby rely on id
attributes, and they are required for the tabs to be ARIA compliant.`),e("h2",{id:"accessibility"},e("a",{parentName:"h2",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"Focus management and ARIA attributes are handled automatically."),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("p",null,`There are two visual variations, default and contained. In either case, an icon
can be provided for each tab by passing it in as a child to the component. By
default, provided icons will be placed to the left of the label. You may move
the icons to above by using the `,e("inlineCode",{parentName:"p"},"over")," prop."),e("h3",{id:"default"},e("a",{parentName:"h3",href:"#default","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
`)),e("div",{className:"example"},e(re,{mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(I,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(I,{label:"Tab 3",name:"three",mdxType:"Tab"}))),e("h3",{id:"default-with-left-icons"},e("a",{parentName:"h3",href:"#default-with-left-icons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default with left icons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(Ra,{mdxType:"Example1"})),e("h3",{id:"default-with-icons-over-the-label"},e("a",{parentName:"h3",href:"#default-with-icons-over-the-label","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"default with icons over the label"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(Fa,{mdxType:"Example2"})),e("h3",{id:"contained"},e("a",{parentName:"h3",href:"#contained","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<Tabs contained>
  <Tab label="Tab 1" name="one" isActive />
  <Tab label="Tab 2" name="two" />
  <Tab label="Tab 3" name="three" />
</Tabs>
`)),e("div",{className:"example"},e(re,{contained:!0,mdxType:"Tabs"},e(I,{label:"Tab 1",name:"one",isActive:!0,mdxType:"Tab"}),e(I,{label:"Tab 2",name:"two",mdxType:"Tab"}),e(I,{label:"Tab 3",name:"three",mdxType:"Tab"}))),e("h3",{id:"contained-with-left-icons"},e("a",{parentName:"h3",href:"#contained-with-left-icons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained with left icons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(ja,{mdxType:"Example3"})),e("h3",{id:"contained-with-icons-over-the-label"},e("a",{parentName:"h3",href:"#contained-with-icons-over-the-label","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"contained with icons over the label"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <Tabs contained>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
  );
}
`)),e("div",{className:"example"},e(_a,{mdxType:"Example4"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e("h3",{id:"tabs-1"},e("a",{parentName:"h3",href:"#tabs-1","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tabs"),e(Ue,{props:{contained:{defaultValue:{value:"false"},description:"Whether the tabs should use the contained look and feel or not.",name:"contained",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the tabs should use the contained look and feel or not.</p>"},children:{defaultValue:null,description:"The Tabs within the container.",name:"children",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"any"},descriptionHtml:"<p>The Tabs within the container.</p>"},active:{defaultValue:null,description:`Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.`,name:"active",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:`<p>Used to set the name of the Tab that should be active on mount.
Defaults to the first tab if not present and isActive is not set on any Tab.</p>`},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},onChange:{defaultValue:null,description:"Handler that is called when the tab changes.",name:"onChange",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(name: string) => void"},descriptionHtml:"<p>Handler that is called when the tab changes.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"}},mdxType:"PropTable"}),e("h3",{id:"tab"},e("a",{parentName:"h3",href:"#tab","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Tab"),e(Ue,{props:{setActive:{defaultValue:null,description:"",name:"setActive",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(name: string) => void"}},className:{defaultValue:null,description:"Additional CSS class for the tab.",name:"className",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the tab.</p>"},over:{defaultValue:{value:"false"},description:"Set the over prop to true if you need to move icons to above the tab label",name:"over",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Set the over prop to true if you need to move icons to above the tab label</p>"},children:{defaultValue:null,description:"Additional content to be included in the tab (eg. icons). Content is placed above the label.",name:"children",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional content to be included in the tab (eg. icons). Content is placed above the label.</p>"},name:{defaultValue:null,description:"Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.",name:"name",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"string"},descriptionHtml:"<p>Tab name identifier. This value will be omitted as the argument to the Tabs onChange handler.</p>"},label:{defaultValue:null,description:"The label of the tab item.",name:"label",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!0,type:{name:"any"},descriptionHtml:"<p>The label of the tab item.</p>"},isActive:{defaultValue:null,description:"Used to set which tab should be active on mount. Defaults to the first tab if not present.",name:"isActive",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Used to set which tab should be active on mount. Defaults to the first tab if not present.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the tab.",name:"style",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"any"},descriptionHtml:"<p>Additional CSS styles for the tab.</p>"},onClick:{defaultValue:null,description:"Action to be called when the component is clicked",name:"onClick",declarations:[{fileName:"react/react/packages/tabs/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: any) => void"},descriptionHtml:"<p>Action to be called when the component is clicked</p>"}},mdxType:"PropTable"}))}$a.isMDXComponent=!0;function Pl({ref:t,value:a,minimumRows:l,maximumRows:r}){const i=p.exports.useRef(-1/0),s=p.exports.useRef(1/0),o=a!==void 0;function d(m){m.style.setProperty("height","auto");let f=Math.max(i.current,m.scrollHeight);f=Math.min(s.current,f),m.style.setProperty("height",f+"px")}me(()=>{if(t.current&&(l||r)){const m=getComputedStyle(t.current),f=parseFloat(m.getPropertyValue("line-height")),y=parseFloat(m.getPropertyValue("padding-top")),k=parseFloat(m.getPropertyValue("padding-bottom")),C=parseFloat(m.getPropertyValue("border-bottom-width")),v=y+k+C;l&&(i.current=f*l+v),r&&(s.current=f*r+v)}},[t,r,l]),me(()=>{t.current&&d(t.current)},[t,a]),p.exports.useEffect(()=>{if(!t.current&&o)return;const m=t.current,f=()=>{d(m)};return m.addEventListener("input",f),()=>m.removeEventListener("input",f)},[t,o])}const G=p.exports.forwardRef((t,a)=>{const T=t,{className:l,disabled:r,error:i,helpText:s,id:o,invalid:d,label:m,maximumRows:f,minimumRows:y,readOnly:k,style:C,value:v}=T,H=x(T,["className","disabled","error","helpText","id","invalid","label","maximumRows","minimumRows","readOnly","style","value"]),M=ie(o),P=p.exports.useRef(null),B=s?`${M}__hint`:void 0,b=d!=null?d:i;return Pl({ref:P,value:v,maximumRows:f,minimumRows:y}),n.createElement("div",{className:h(l,{"input mb-0":!0,"input--is-invalid":b,"input--is-disabled":r,"input--is-read-only":k}),style:C},m&&n.createElement("label",{htmlFor:M},m),n.createElement("textarea",N(c({},H),{"aria-describedby":B,"aria-errormessage":b&&B?B:void 0,"aria-invalid":b,disabled:r,id:M,ref:V=>{P.current=V,a&&(typeof a=="function"?a(V):a.current=V)},readOnly:k,value:v})),s&&n.createElement("div",{className:"input__sub-text"},s))}),Wa=function(){let[a,l]=n.useState("Lorem ipsum");return e("div",{className:"flex space-x-32"},e(G,{label:"Description (Uncontrolled)",defaultValue:"Lorem ipsum",mdxType:"TextArea"}),e(G,{label:"Description (Controlled)",onChange:r=>l(r.target.value),value:a,mdxType:"TextArea"}))},Il=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Ml=Il("PropTable"),Vl={Example0:Wa},Dl="wrapper";function Oa(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Dl,N(c(c({},Vl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"textarea"},e("a",{parentName:"h1",href:"#textarea","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextArea"),e("p",null,"A multiline text input component."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { TextArea } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" />
`)),e("div",{className:"example"},e(G,{label:"Description",mdxType:"TextArea"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika input CSS."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"error")," has been deprecated. Use ",e("inlineCode",{parentName:"li"},"invalid")," instead.")),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,`A TextArea's value is empty by default, but an initial, uncontrolled, value can
be provided using the `,e("inlineCode",{parentName:"p"},"defaultValue"),` prop. Alternatively, a controlled value can
be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('Lorem ipsum');

  return (
    <div className="flex space-x-32">
      <TextArea label="Description (Uncontrolled)" defaultValue="Lorem ipsum" />

      <TextArea
        label="Description (Controlled)"
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(Wa,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the TextArea using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` must be provided to the
TextArea for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop must be provided using the id of the labeling element
instead.`),e("h2",{id:"help-text"},e("a",{parentName:"h2",href:"#help-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Help text"),e("p",null,"TextAreas can provide additional context with ",e("inlineCode",{parentName:"p"},"helpText"),` if the label and
placeholder aren't enough.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" helpText="Maximum 200 characters" />
`)),e("div",{className:"example"},e(G,{label:"Description",helpText:"Maximum 200 characters",mdxType:"TextArea"})),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`TextAreas can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"invalid"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"invalid")," is often paired with ",e("inlineCode",{parentName:"p"},"helpText"),` to provide feedback to the user about
the error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" invalid helpText="Maximum 200 characters" />
`)),e("div",{className:"example"},e(G,{label:"Description",invalid:!0,helpText:"Maximum 200 characters",mdxType:"TextArea"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"placeholder"},e("a",{parentName:"h3",href:"#placeholder","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Placeholder"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" placeholder="Lorem ipsum dolor sit amet" />
`)),e("div",{className:"example"},e(G,{label:"Description",placeholder:"Lorem ipsum dolor sit amet",mdxType:"TextArea"})),e("p",null,`Placeholder text can be used to describe the expected value or formatting for
the TextArea. Placeholder text will only appear when the TextArea is empty, and
should not be used as a substitute for labeling the component with a visible
label.`),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Keep in mind that using disabled in its current form is an anti-pattern. There
will ALWAYS be users who don't understand why an element is disabled, or users
who can't even see that it is disabled because of poor lighting conditions or
other reasons. Please consider more informative alternatives before choosing to
use disabled on an element.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col y-space-32">
  <TextArea label="Description" disabled value="Lorem ipsum dolor sit amet" />
  <TextArea label="Description" disabled />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col y-space-32"},e(G,{label:"Description",disabled:!0,value:"Lorem ipsum dolor sit amet",mdxType:"TextArea"}),e(G,{label:"Description",disabled:!0,mdxType:"TextArea"}))),e("h3",{id:"read-only"},e("a",{parentName:"h3",href:"#read-only","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Read only"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"readOnly"),` boolean prop makes the TextArea's text content immutable. Unlike
`,e("inlineCode",{parentName:"p"},"disabled"),` the TextArea remains focusable and the contents can still be copied.
See
`,e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly"},"the MDN docs"),`
for more information.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col y-space-32">
  <TextArea
    label="Description"
    readOnly
    defaultValue="Lorem ipsum dolor sit amet"
  />
  <TextArea label="Description" readOnly />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col y-space-32"},e(G,{label:"Description",readOnly:!0,defaultValue:"Lorem ipsum dolor sit amet",mdxType:"TextArea"}),e(G,{label:"Description",readOnly:!0,mdxType:"TextArea"}))),e("h3",{id:"height-text-rows"},e("a",{parentName:"h3",href:"#height-text-rows","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Height (text rows)"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"minimumRows"),` prop sets the minimum number of text rows the TextArea should
show.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea label="Description" minimumRows={3} />
`)),e("div",{className:"example"},e(G,{label:"Description",minimumRows:3,mdxType:"TextArea"})),e("p",null,"The ",e("inlineCode",{parentName:"p"},"maximumRows"),` prop sets the maximum number of text rows the TextArea should
show.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextArea
  label="Description"
  maximumRows={3}
  defaultValue={'Lorem\\nipsum\\ndolor\\nsit\\namet'}
/>
`)),e("div",{className:"example"},e(G,{label:"Description",maximumRows:3,defaultValue:`Lorem
ipsum
dolor
sit
amet`,mdxType:"TextArea"})),e("h2",{id:"props"},e("a",{parentName:"h2",href:"#props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Props"),e(Ml,{props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container",name:"className",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input is disabled.</p>"},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.
@deprecated use <code>invalid</code> instead.</p>`},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The content to display as the label.</p>"},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLTextAreaElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLTextAreaElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLTextAreaElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},maximumRows:{defaultValue:null,description:"Maximum number of text rows upto which the input can grow.",name:"maximumRows",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Maximum number of text rows upto which the input can grow.</p>"},minimumRows:{defaultValue:null,description:"Minimum number of text rows to show for the input.",name:"minimumRows",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"number"},descriptionHtml:"<p>Minimum number of text rows to show for the input.</p>"},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the input element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Text hint that occupies the text input when it is empty.</p>"},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input can be selected but not changed by the user.</p>"},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"TextareaHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the input before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/textarea/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}))}Oa.isMDXComponent=!0;const za=function(){let[a,l]=n.useState("me@email.com");return e("div",{className:"flex space-x-32"},e(_,{label:"Email (Uncontrolled)",defaultValue:"me@email.com",mdxType:"TextField"}),e(_,{label:"Email (Controlled)",value:a,onChange:r=>l(r.target.value),mdxType:"TextField"}))},ql=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},Ze=ql("PropTable"),Bl={Example0:za},Rl="wrapper";function Xa(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Rl,N(c(c({},Bl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"textfield"},e("a",{parentName:"h1",href:"#textfield","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextField"),e("p",null,"A single-line text input component."),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { TextField } from '@fabric-ds/react';
`)),e("h2",{id:"example"},e("a",{parentName:"h2",href:"#example","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Example"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Name" />
`)),e("div",{className:"example"},e(_,{label:"Name",mdxType:"TextField"})),e("h2",{id:"migrating-from-troika"},e("a",{parentName:"h2",href:"#migrating-from-troika","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Migrating from Troika"),e("ul",null,e("li",{parentName:"ul"},"You should no longer include or import any Troika input CSS."),e("li",{parentName:"ul"},e("inlineCode",{parentName:"li"},"error")," has been deprecated. Use ",e("inlineCode",{parentName:"li"},"invalid")," instead."),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"BREAKING"),": ",e("inlineCode",{parentName:"li"},"appendAddon")," from Troika is currently unsupported.")),e("h2",{id:"value"},e("a",{parentName:"h2",href:"#value","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Value"),e("p",null,`A TextField's value is empty by default, but an initial, uncontrolled, value can
be provided using the `,e("inlineCode",{parentName:"p"},"defaultValue"),` prop. Alternatively, a controlled value can
be provided using the `,e("inlineCode",{parentName:"p"},"value")," prop."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  let [value, setValue] = React.useState('me@email.com');

  return (
    <div className="flex space-x-32">
      <TextField label="Email (Uncontrolled)" defaultValue="me@email.com" />

      <TextField
        label="Email (Controlled)"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}
`)),e("div",{className:"example"},e(za,{mdxType:"Example0"})),e("h2",{id:"labeling"},e("a",{parentName:"h2",href:"#labeling","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Labeling"),e("p",null,"A visual label should be provided for the TextField using the ",e("inlineCode",{parentName:"p"},"label")," prop."),e("h3",{id:"accessibility"},e("a",{parentName:"h3",href:"#accessibility","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Accessibility"),e("p",null,"If a visible label isn't specified, an ",e("inlineCode",{parentName:"p"},"aria-label"),` must be provided to the
TextField for accessibility. If the field is labeled by a separate element, an
`,e("inlineCode",{parentName:"p"},"aria-labelledby"),` prop must be provided using the id of the labeling element
instead.`),e("h2",{id:"help-text"},e("a",{parentName:"h2",href:"#help-text","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Help text"),e("p",null,"TextFields can provide additional context with ",e("inlineCode",{parentName:"p"},"helpText"),` if the label and
placeholder aren't enough.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField
  label="Telefonnummer"
  helpText="Vil kun brukes til brukerverifisering"
/>
`)),e("div",{className:"example"},e(_,{label:"Telefonnummer",helpText:"Vil kun brukes til brukerverifisering",mdxType:"TextField"})),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,`TextFields can communicate to the user whether the current value is invalid.
Implement your own validation logic in your app and set the `,e("inlineCode",{parentName:"p"},"error"),` prop to
display it as invalid.`),e("p",null,e("inlineCode",{parentName:"p"},"error")," is often paired with ",e("inlineCode",{parentName:"p"},"helpText"),` to provide feedback to the user about
the error.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Email" invalid helpText="Ugyldig e-post" />
`)),e("div",{className:"example"},e(_,{label:"Email",invalid:!0,helpText:"Ugyldig e-post",mdxType:"TextField"})),e("h2",{id:"visual-options"},e("a",{parentName:"h2",href:"#visual-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Visual options"),e("h3",{id:"placeholder"},e("a",{parentName:"h3",href:"#placeholder","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Placeholder"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="E-post" placeholder="puse@finn.no" />
`)),e("div",{className:"example"},e(_,{label:"E-post",placeholder:"puse@finn.no",mdxType:"TextField"})),e("p",null,`Placeholder text can be used to describe the expected value or formatting for
the TextField. Placeholder text will only appear when the TextField is empty,
and should not be used as a substitute for labeling the component with a visible
label.`),e("h3",{id:"disabled"},e("a",{parentName:"h3",href:"#disabled","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Disabled"),e("p",null,`Keep in mind that using disabled in its current form is an anti-pattern. There
will ALWAYS be users who don't understand why an element is disabled, or users
who can't even see that it is disabled because of poor lighting conditions or
other reasons. Please consider more informative alternatives before choosing to
use disabled on an element.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col space-y-32">
  <TextField label="E-post" disabled value="puse@finn.no" />
  <TextField label="E-post" disabled />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col space-y-32"},e(_,{label:"E-post",disabled:!0,value:"puse@finn.no",mdxType:"TextField"}),e(_,{label:"E-post",disabled:!0,mdxType:"TextField"}))),e("h3",{id:"affix"},e("a",{parentName:"h3",href:"#affix","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix"),e("p",null,"If you wish to use an affix you must first import the Affix component."),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Affix } from '@fabric-ds/react';
`)),e("p",null,`Then you include it as a child of TextField component and pass the appropiate
props (see bottom of this page for types)`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Price" placeholder="1 000 000">
  <Affix suffix label="kr" />
</TextField>
`)),e("div",{className:"example"},e(_,{label:"Price",placeholder:"1 000 000",mdxType:"TextField"},e(pe,{suffix:!0,label:"kr",mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField label="Price" placeholder="1 000 000">
  <Affix prefix label="kr" />
</TextField>
`)),e("div",{className:"example"},e(_,{label:"Price",placeholder:"1 000 000",mdxType:"TextField"},e(pe,{prefix:!0,label:"kr",mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField>
  <Affix suffix clear onClick={() => alert('clear')} />
</TextField>
`)),e("div",{className:"example"},e(_,{mdxType:"TextField"},e(pe,{suffix:!0,clear:!0,onClick:()=>alert("clear"),mdxType:"Affix"}))),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField>
  <Affix suffix search onClick={() => alert('search')} />
</TextField>
`)),e("div",{className:"example"},e(_,{mdxType:"TextField"},e(pe,{suffix:!0,search:!0,onClick:()=>alert("search"),mdxType:"Affix"}))),e("h2",{id:"you-can-also-use-both-a-prefix-and-suffix"},e("a",{parentName:"h2",href:"#you-can-also-use-both-a-prefix-and-suffix","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"You can also use both a prefix and suffix"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<TextField>
  <Affix prefix label="kr" />
  <Affix suffix search onClick={() => alert('search')} />
</TextField>
`)),e("div",{className:"example"},e(_,{mdxType:"TextField"},e(pe,{prefix:!0,label:"kr",mdxType:"Affix"}),e(pe,{suffix:!0,search:!0,onClick:()=>alert("search"),mdxType:"Affix"}))),e("h3",{id:"read-only"},e("a",{parentName:"h3",href:"#read-only","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Read only"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"readOnly"),` boolean prop makes the TextField's text content immutable. Unlike
`,e("inlineCode",{parentName:"p"},"disabled"),` the TextField remains focusable and the contents can still be copied.
See
`,e("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly"},"the MDN docs"),`
for more information.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`<div className="flex flex-col space-y-32">
  <TextField label="E-post" readOnly value="puse@finn.no" />
  <TextField label="E-post" readOnly />
</div>
`)),e("div",{className:"example"},e("div",{className:"flex flex-col space-y-32"},e(_,{label:"E-post",readOnly:!0,value:"puse@finn.no",mdxType:"TextField"}),e(_,{label:"E-post",readOnly:!0,mdxType:"TextField"}))),e("h2",{id:"textfield-props"},e("a",{parentName:"h2",href:"#textfield-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TextField Props"),e(Ze,{props:{autoFocus:{defaultValue:null,description:"Whether the element should receive focus on render.",name:"autoFocus",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the element should receive focus on render.</p>"},className:{defaultValue:null,description:"Additional CSS class for the container.",name:"className",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Additional CSS class for the container.</p>"},defaultValue:{defaultValue:null,description:"The default value (uncontrolled).",name:"defaultValue",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string & (string | number | readonly string[])"},descriptionHtml:"<p>The default value (uncontrolled).</p>"},disabled:{defaultValue:null,description:"Whether the input is disabled.",name:"disabled",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input is disabled.</p>"},error:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.\n@deprecated use `invalid` instead.",name:"error",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.
@deprecated use <code>invalid</code> instead.</p>`},invalid:{defaultValue:null,description:"Renders the field in an invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders the field in an invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"The content to display as the help text.",name:"helpText",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the help text.</p>"},id:{defaultValue:null,description:"The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).",name:"id",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:`<p>The element's unique identifier. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id">MDN</a>.</p>`},label:{defaultValue:null,description:"The content to display as the label.",name:"label",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>The content to display as the label.</p>"},max:{defaultValue:null,description:'Standard `input` max attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax).',name:"max",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string | number"},descriptionHtml:'<p>Standard <code>input</code> max attribute, to be used with <code>type="number".</code> See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmax">MDN</a>.</p>'},min:{defaultValue:null,description:'Standard `input` min attribute, to be used with `type="number".` See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin).',name:"min",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string | number"},descriptionHtml:'<p>Standard <code>input</code> min attribute, to be used with <code>type="number".</code> See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmin">MDN</a>.</p>'},maxLength:{defaultValue:null,description:"The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"maxLength",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"number"},descriptionHtml:'<p>The maximum number of characters supported by the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength">MDN</a>.</p>'},minLength:{defaultValue:null,description:"The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).",name:"minLength",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"number"},descriptionHtml:'<p>The minimum number of characters required by the input. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength">MDN</a>.</p>'},name:{defaultValue:null,description:"The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).",name:"name",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>The name of the input element, used when submitting an HTML form. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname">MDN</a>.</p>'},onBlur:{defaultValue:null,description:"Handler that is called when the element loses focus.",name:"onBlur",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element loses focus.</p>"},onChange:{defaultValue:null,description:"Handler that is called when the value changes.",name:"onChange",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: ChangeEvent<HTMLInputElement>) => void"},descriptionHtml:"<p>Handler that is called when the value changes.</p>"},onFocus:{defaultValue:null,description:"Handler that is called when the element receives focus.",name:"onFocus",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"(e: FocusEvent<HTMLInputElement, Element>) => void"},descriptionHtml:"<p>Handler that is called when the element receives focus.</p>"},pattern:{defaultValue:null,description:"Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:'<p>Regex pattern that the value of the input must match to be valid. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern">MDN</a>.</p>'},placeholder:{defaultValue:null,description:"Text hint that occupies the text input when it is empty.",name:"placeholder",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Text hint that occupies the text input when it is empty.</p>"},readOnly:{defaultValue:null,description:"Whether the input can be selected but not changed by the user.",name:"readOnly",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the input can be selected but not changed by the user.</p>"},required:{defaultValue:null,description:"Whether user input is required on the input before form submission.",name:"required",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"InputHTMLAttributes"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether user input is required on the input before form submission.</p>"},style:{defaultValue:null,description:"Additional CSS styles for the container.",name:"style",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"HTMLAttributes"}],required:!1,type:{name:"CSSProperties"},descriptionHtml:"<p>Additional CSS styles for the container.</p>"},type:{defaultValue:null,description:"The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).",name:"type",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:'"number" | "text" | "search" | "email" | "password" | "url" | "tel"'},descriptionHtml:'<p>The type of input to render. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype">MDN</a>.</p>'},children:{defaultValue:null,description:"For affix use",name:"children",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"},{fileName:"react/react/node_modules/@types/react/index.d.ts",name:"DOMAttributes"}],required:!1,type:{name:"ReactNode"},descriptionHtml:"<p>For affix use</p>"},value:{defaultValue:null,description:"The current value (controlled).",name:"value",declarations:[{fileName:"react/react/packages/textfield/src/props.ts",name:"TypeLiteral"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The current value (controlled).</p>"}},mdxType:"PropTable"}),e("h2",{id:"affix-props"},e("a",{parentName:"h2",href:"#affix-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Affix Props"),e(Ze,{props:{"aria-label":{defaultValue:null,description:"Defines a string value that labels the affix element.",name:"aria-label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Defines a string value that labels the affix element.</p>"},prefix:{defaultValue:null,description:"Affix added at the beginning of input",name:"prefix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the beginning of input</p>"},suffix:{defaultValue:null,description:"Affix added at the end of input",name:"suffix",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Affix added at the end of input</p>"},clear:{defaultValue:null,description:"Displays a clear icon",name:"clear",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a clear icon</p>"},search:{defaultValue:null,description:"Displays a search icon",name:"search",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Displays a search icon</p>"},label:{defaultValue:null,description:"Displays a string",name:"label",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Displays a string</p>"},onClick:{defaultValue:null,description:"Click handler paired with clear or search",name:"onClick",parent:{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"},declarations:[{fileName:"react/react/packages/_helpers/affix.tsx",name:"AffixProps"}],required:!1,type:{name:"() => void"},descriptionHtml:"<p>Click handler paired with clear or search</p>"}},mdxType:"PropTable"}))}Xa.isMDXComponent=!0;const Ua=function(){const[a,l]=n.useState(!1);return e(n.Fragment,null,e("p",{className:"h4"},a.toString()),e(ue,{type:"checkbox",label:"Apple",defaultChecked:a,onChange:r=>l(r),mdxType:"Toggle"}))},Za=function(){const[a,l]=n.useState([{label:"Microsoft",value:"microsoft"}]),r=i=>a.some(s=>s.value===i.value)?l(a.filter(s=>s.value!==i.value)):l([...a,i]);return e(n.Fragment,null,e("p",{className:"h4"},JSON.stringify(a)),e(ue,{type:"checkbox",title:"Companies",defaultSelected:a,options:[{label:"Apple",value:"apple"},{label:"Microsoft",value:"microsoft"}],onChange:r,mdxType:"Toggle"}))},Ya=function(){return e(ue,{type:"radio",title:"Favorite color",helpText:"Choose your absolute favorite color",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],onChange:l=>console.log(l),mdxType:"Toggle"})},Ga=function(){const a=[{label:"Oslo",value:1},{label:"L\xF8renskog",value:2},{label:"Hamar",value:3}],[l,r]=n.useState(!1);return e(n.Fragment,null,e(q,{className:"mb-8",onClick:()=>r(!l),primary:l,negative:!l,small:!0,mdxType:"Button"},"Equal width: ",l.toString()),e("div",null,e(ue,{type:"radio-button",options:a,equalWidth:l,onChange:i=>console.log(i),mdxType:"Toggle"})))},Ka=function(){const[a,l]=n.useState([{label:"Blue",value:"blue"}]);return e(ue,{type:"checkbox",title:"Favorite colors",helpText:"Blue surely isn't amongst your favorites?",invalid:!0,selected:a,options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],mdxType:"Toggle"})},Ja=function(){const[a,l]=n.useState([{label:"Blue",value:"blue"}]),r=i=>a.some(s=>s.value===i.value)?l(a.filter(s=>s.value!==i.value)):l([...a,i]);return e(ue,{type:"checkbox",title:"Favorite colors",helpText:a.some(i=>i.value==="blue")?"Blue surely isn't amongst your favorites?":"Choose your favorite colors",invalid:!!a.some(i=>i.value==="blue"),selected:a,onChange:r,options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"}],mdxType:"Toggle"})},Fl=t=>function(l){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),e("div",c({},l))},jl=Fl("PropTable"),_l={Example0:Ua,Example1:Za,Example2:Ya,Example3:Ga,Example4:Ka,Example5:Ja},$l="wrapper";function Qa(l){var r=l,{components:t}=r,a=x(r,["components"]);return e($l,N(c(c({},_l),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"toggle"},e("a",{parentName:"h1",href:"#toggle","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle"),e("p",null,`The toggle component allows you to render checkboxes or radio buttons, all in
one component. All you have to do is specify the Toggle `,e("inlineCode",{parentName:"p"},"type"),` and let the
component handle the rest. Toggle is built to handle both single and multiple
options.`),e("p",null,e("strong",{parentName:"p"},"You must keep track of state yourself"),`. The state has to be handled
differently depending on whether you want to use single or multiple options. See
examples below.`),e("h2",{id:"import"},e("a",{parentName:"h2",href:"#import","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Import"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Toggle } from '@fabric-ds/react';
`)),e("h2",{id:"checkbox-with-single-option"},e("a",{parentName:"h2",href:"#checkbox-with-single-option","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Checkbox with single option"),e("p",null,"When you only want a single option, please use the ",e("inlineCode",{parentName:"p"},"label"),` property over passing
a single option to the `,e("inlineCode",{parentName:"p"},"options")," property. This results in the ",e("inlineCode",{parentName:"p"},"onChange"),`
callback function returning a single boolean value indicating the current state
of the toggle.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <p className="h4">{checked.toString()}</p>
      <Toggle
        type="checkbox"
        label="Apple"
        defaultChecked={checked}
        onChange={(checked) => setChecked(checked)}
      />
    </>
  );
}
`)),e("div",{className:"example"},e(Ua,{mdxType:"Example0"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"defaultChecked"),` property, which is only used to set the default
value on component mount (uncontrolled). `,e("strong",{parentName:"p"},"It does not"),` actively pass down the
state of the checkbox. Feel free to omit this property if you are not setting
the default value of the checkbox or use the `,e("inlineCode",{parentName:"p"},"checked"),` property (controlled) to
actively pass down state.`),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"onChange"),` property returning a boolean value. This is because
we're working with a single option. When using the `,e("inlineCode",{parentName:"p"},"options"),` property, as seen
in examples below, the option which has been selected is returned on the
callback and we must handle this state ourselves.`),e("h2",{id:"checkbox-with-multiple-options"},e("a",{parentName:"h2",href:"#checkbox-with-multiple-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Checkbox with multiple options"),e("p",null,`Let's have a look at using the Toggle with multiple options. As mentioned above,
using the `,e("inlineCode",{parentName:"p"},"options")," property will change the returning value of the ",e("inlineCode",{parentName:"p"},"onChange"),`
callback. It will now return the option which was selected.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Microsoft', value: 'microsoft' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <>
      <p className="h4">{JSON.stringify(selected)}</p>
      <Toggle
        type="checkbox"
        title="Companies"
        defaultSelected={selected}
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Microsoft', value: 'microsoft' },
        ]}
        onChange={handleSelect}
      />
    </>
  );
}
`)),e("div",{className:"example"},e(Za,{mdxType:"Example1"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"defaultSelected"),` property (uncontrolled). Similar to the single
option `,e("inlineCode",{parentName:"p"},"checked"),` property, this will render the passed options as checked by
default when the component mounts. If you wish to actively pass the state down
use the `,e("inlineCode",{parentName:"p"},"selected")," property instead (controlled)."),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"title"),` property. This gives you the option to label the options,
but is not required.`),e("h2",{id:"toggle-with-multiple-options"},e("a",{parentName:"h2",href:"#toggle-with-multiple-options","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle with multiple options"),e("p",null,`We've already had a look at checkboxes, but Toggle can also render radio options
and buttons.`),e("h3",{id:"radio"},e("a",{parentName:"h3",href:"#radio","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Radio"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <Toggle
      type="radio"
      title="Favorite color"
      helpText="Choose your absolute favorite color"
      options={options}
      onChange={(selected) => console.log(selected)}
    />
  );
}
`)),e("div",{className:"example"},e(Ya,{mdxType:"Example2"})),e("p",null,e("strong",{parentName:"p"},"Note")," the ",e("inlineCode",{parentName:"p"},"helpText"),` property. This gives you the option to further explain
the purpose of the toggle and the action to take.`),e("h3",{id:"radio-buttons"},e("a",{parentName:"h3",href:"#radio-buttons","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Radio buttons"),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const options = [
    { label: 'Oslo', value: 1 },
    { label: 'L\xF8renskog', value: 2 },
    { label: 'Hamar', value: 3 },
  ];

  const [equalWidth, setEqualWidth] = React.useState(false);

  return (
    <>
      <Button
        className="mb-8"
        onClick={() => setEqualWidth(!equalWidth)}
        primary={equalWidth}
        negative={!equalWidth}
        small
      >
        Equal width: {equalWidth.toString()}
      </Button>
      <div>
        <Toggle
          type="radio-button"
          options={options}
          equalWidth={equalWidth}
          onChange={(e) => console.log(e)}
        />
      </div>
    </>
  );
}
`)),e("div",{className:"example"},e(Ga,{mdxType:"Example3"})),e("p",null,"Radio buttons have the special property ",e("inlineCode",{parentName:"p"},"equalWidth"),`, which will render each
option with equal width.`),e("h2",{id:"validation"},e("a",{parentName:"h2",href:"#validation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Validation"),e("p",null,"Validation is as easy as passing the property ",e("inlineCode",{parentName:"p"},"invalid")," with a ",e("inlineCode",{parentName:"p"},"helpText"),` to
further explain the error. `,e("inlineCode",{parentName:"p"},"helpText"),` can also be used as an assistance label
before an error occurs as long as `,e("inlineCode",{parentName:"p"},"invalid")," is set to false."),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText="Blue surely isn't amongst your favorites?"
      invalid
      selected={selected}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(Ka,{mdxType:"Example4"})),e("p",null,`In the next example, we'll take a closer look at one way to conditionally render
error and help messages. You should probably take this a step further and
implement your own error handler, but for the sake of the demo we've kept it
quite simple.`),e("pre",null,e("code",{parentName:"pre",className:"language-jsx",metastring:"example",example:!0},`function Example() {
  const [selected, setSelected] = React.useState([
    { label: 'Blue', value: 'blue' },
  ]);

  const handleSelect = (entry) => {
    if (selected.some((e) => e.value === entry.value)) {
      return setSelected(selected.filter((s) => s.value !== entry.value));
    }

    return setSelected([...selected, entry]);
  };

  return (
    <Toggle
      type="checkbox"
      title="Favorite colors"
      helpText={
        selected.some((e) => e.value === 'blue')
          ? "Blue surely isn't amongst your favorites?"
          : 'Choose your favorite colors'
      }
      invalid={!!selected.some((e) => e.value === 'blue')}
      selected={selected}
      onChange={handleSelect}
      options={[
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
      ]}
    />
  );
}
`)),e("div",{className:"example"},e(Ja,{mdxType:"Example5"})),e("h1",{id:"toggle-props"},e("a",{parentName:"h1",href:"#toggle-props","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Toggle props"),e(jl,{props:{type:{defaultValue:null,description:"The type of Toggle",name:"type",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!0,type:{name:'"radio" | "checkbox" | "radio-button"'},descriptionHtml:"<p>The type of Toggle</p>"},title:{defaultValue:null,description:"The option(s) title",name:"title",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>The option(s) title</p>"},invalid:{defaultValue:null,description:"Renders options in invalid state. Often paired together with `helpText` to provide feedback about the error.",name:"invalid",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Renders options in invalid state. Often paired together with <code>helpText</code> to provide feedback about the error.</p>"},helpText:{defaultValue:null,description:"Help text beneath options",name:"helpText",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Help text beneath options</p>"},options:{defaultValue:null,description:"An array of options to render",name:"options",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to render</p>"},selected:{defaultValue:null,description:"An array of options to be selected / checked (controlled)",name:"selected",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to be selected / checked (controlled)</p>"},defaultSelected:{defaultValue:null,description:"An array of options to be selected / checked on mount (uncontrolled)",name:"defaultSelected",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"ToggleEntry[]"},descriptionHtml:"<p>An array of options to be selected / checked on mount (uncontrolled)</p>"},label:{defaultValue:null,description:"If you only need to render a single option, use this prop instead",name:"label",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>If you only need to render a single option, use this prop instead</p>"},checked:{defaultValue:null,description:"Whether the single option should be checked (controlled)",name:"checked",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the single option should be checked (controlled)</p>"},defaultChecked:{defaultValue:null,description:"Whether the single option should be checked on mount (uncontrolled)",name:"defaultChecked",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the single option should be checked on mount (uncontrolled)</p>"},onChange:{defaultValue:null,description:"Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options",name:"onChange",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!0,type:{name:"(value: any) => void"},descriptionHtml:"<p>Retrieve the selected entry or a boolean value, depending on whether you are working with single or multiple options</p>"},small:{defaultValue:null,description:"Whether the elements should be small",name:"small",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Whether the elements should be small</p>"},optional:{defaultValue:null,description:`Whether the toggle is optional
Appends (valgfritt) to the end of the title for indication`,name:"optional",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:`<p>Whether the toggle is optional
Appends (valgfritt) to the end of the title for indication</p>`},equalWidth:{defaultValue:null,description:"Will make each radio-button equal width",name:"equalWidth",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"boolean"},descriptionHtml:"<p>Will make each radio-button equal width</p>"},className:{defaultValue:null,description:"Custom classes applied to the wrapping container",name:"className",parent:{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"},declarations:[{fileName:"react/react/packages/toggle/src/props.ts",name:"ToggleProps"}],required:!1,type:{name:"string"},descriptionHtml:"<p>Custom classes applied to the wrapping container</p>"}},mdxType:"PropTable"}),e("pre",null,e("code",{parentName:"pre",className:"language-ts"},`type ToggleEntry = {
  label: string;
  value: unknown;
};
`)))}Qa.isMDXComponent=!0;const Wl={},Ol="wrapper";function et(l){var r=l,{components:t}=r,a=x(r,["components"]);return e(Ol,N(c(c({},Wl),a),{components:t,mdxType:"MDXLayout"}),e("h1",{id:"getting-started"},e("a",{parentName:"h1",href:"#getting-started","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Getting started"),e("p",null,`This page describes how to get started building an application with Fabric
React.`),e("h2",{id:"setting-up-your-app"},e("a",{parentName:"h2",href:"#setting-up-your-app","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Setting up your app"),e("p",null,"Ensure the ",e("a",{parentName:"p",href:"https://css.fabric-ds.io"},"Fabric CSS"),` stylesheet is loaded in the
page you are working on.`),e("p",null,`See the
`,e("a",{parentName:"p",href:"https://css.fabric-ds.io/pages/getting-started.html"},"Fabric CSS getting started guide"),`
for more information.`),e("h2",{id:"installation"},e("a",{parentName:"h2",href:"#installation","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Installation"),e("p",null,`All the Fabric React code is provided as a single package and each component can
be imported from this package.`),e("h3",{id:"install-from-npm"},e("a",{parentName:"h3",href:"#install-from-npm","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Install from NPM"),e("p",null,"The Fabric React package can be installed from NPM."),e("pre",null,e("code",{parentName:"pre",className:"language-shell"},`npm install @fabric-ds/react
`)),e("h3",{id:"install-from-eik"},e("a",{parentName:"h3",href:"#install-from-eik","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Install from Eik"),e("p",null,"The same package is also available via our Eik CDN server"),e("pre",null,e("code",{parentName:"pre",className:"language-html"},`https://assets.finn.no/pkg/@fabric-ds/react/v0/index.js
`)),e("h3",{id:"importing-components"},e("a",{parentName:"h3",href:"#importing-components","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing Components"),e("p",null,`Once installed, components can be imported into your app by name. Below are
examples of how thats done`),e("br",null),e("h4",{id:"importing-from-the-npm-package"},e("a",{parentName:"h4",href:"#importing-from-the-npm-package","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing from the NPM package"),e("p",null,"\u{1F449} ",e("em",{parentName:"p"},e("strong",{parentName:"em"},"This is the most common method and should be used in most cases"))),e("p",null,`When importing from NPM you will need to ensure you have build tooling in place.
If you are working with Podium podlets or layouts which is the most common use
case at Finn, you likely already have Eik in place with Rollup or Esbuild in
which case no further action should be needed.`),e("p",null,`If not, take a look at the React
`,e("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html"},"getting started")," docs."),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from '@fabric-ds/react';
`)),e("br",null),e("h4",{id:"importing-directly-from-eik"},e("a",{parentName:"h4",href:"#importing-directly-from-eik","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Importing directly from Eik"),e("p",null,"\u{1F449} ",e("em",{parentName:"p"},e("strong",{parentName:"em"},"This is great for prototyping (can also be used in production)"))),e("p",null,`It is also possible to import components directly from the URL on our Eik
server. While not common, it should be possible to write React code without the
need for a build setup. You might find this useful for rapid prototyping
something on a hack day for example!`),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { Button } from 'https://assets.finn.no/pkg/@fabric-ds/react/v0/index.js';
`)),e("p",null,`If you go down this route, other dependencies such as React and React Dom will
also need to be imported via URLs. These can also be found on the Eik server.`),e("p",null,e("em",{parentName:"p"},"Example")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import React from 'https://assets.finn.no/npm/@pika/react/v16/index.js';
import ReactDom from 'https://assets.finn.no/npm/@pika/react-dom/v16/index.js';
`)),e("br",null),e("h4",{id:"individual-component-imports"},e("a",{parentName:"h4",href:"#individual-component-imports","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"Individual component imports"),e("p",null,`You can find the specific import statement to import each component on that
component's documentation page. For example, here's the `,e("a",{parentName:"p",href:"/button"},"button page")),e("h2",{id:"typescript-support"},e("a",{parentName:"h2",href:"#typescript-support","aria-hidden":"true",tabIndex:-1},e("span",{parentName:"a",className:"icon icon-link"})),"TypeScript support"),e("p",null,`The components are written in TypeScript. To take advantage of this, make sure
your project is up to date on the latest `,e("inlineCode",{parentName:"p"},"@types/react")," definitions."),e("pre",null,e("code",{parentName:"pre",className:"language-shell"},`# YARN
yarn add @types/react -D

# NPM
npm i @types/react -D
`)))}et.isMDXComponent=!0;function zl(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"grid lg:grid-cols-3 gap-16"},n.createElement("div",{className:"lg:col-span-2 overflow-hidden"},n.createElement(et,null)),n.createElement("div",null,n.createElement("f-docs-highlight-box",null))))}const Xl=r=>{var i=r,{children:t,className:a}=i,l=x(i,["children","className"]);const s=a.replace(/language-/,"");return n.createElement(ft,N(c({},bt),{code:t,language:s,theme:gt}),({className:o,style:d,tokens:m,getLineProps:f,getTokenProps:y})=>n.createElement("pre",{className:o,style:N(c({},d),{padding:"20px 20px 0px",overflowX:"auto"})},m.map((k,C)=>n.createElement("div",c({key:C},f({line:k,key:C})),k.map((v,H)=>n.createElement("span",c({key:H},y({token:v,key:H}))))))))},Ul="_table_113bc_1",Zl="_name_113bc_40",Yl="_value_113bc_44",Gl="_type_113bc_48";var we={table:Ul,name:Zl,value:Yl,type:Gl};function Kl({props:t}){return p.exports.createElement("div",{className:"overflow-x-auto"},p.exports.createElement("table",{className:we.table},p.exports.createElement("thead",null,p.exports.createElement("tr",null,p.exports.createElement("th",null,"Name"),p.exports.createElement("th",null,"Type"),p.exports.createElement("th",null,"Default"),p.exports.createElement("th",null,"Description"))),p.exports.createElement("tbody",null,Object.values(t).map(a=>p.exports.createElement("tr",{key:a.name},p.exports.createElement("td",null,p.exports.createElement(Jl,{prop:a})),p.exports.createElement("td",null,p.exports.createElement(en,{prop:a})),p.exports.createElement("td",null,p.exports.createElement(Ql,{prop:a})),p.exports.createElement("td",{dangerouslySetInnerHTML:{__html:a.descriptionHtml}}))))))}const Jl=({prop:t})=>{let a=we.name;t.description.includes("@deprecated")&&(a+=" line-through");const l=p.exports.createElement("span",{className:a},t.name);return t.required?p.exports.createElement(p.exports.Fragment,null,l,p.exports.createElement("span",{className:"ml-4"},"*")):l},Ql=({prop:t})=>{const a=t.defaultValue;if(!a)return p.exports.createElement("span",null);const l=a.value;return l?typeof l=="string"&&l!=="false"&&l!=="true"?p.exports.createElement("span",{className:we.value},'"',l,'"'):p.exports.createElement("span",{className:we.type},l.toString()):p.exports.createElement("span",null,"-")},en=({prop:t})=>{const a=r=>{const i=an[r];let s="";return r.startsWith('"')&&(s=we.value),i?p.exports.createElement("span",{className:s},p.exports.createElement("a",{href:i},r)):p.exports.createElement("span",{className:s},r)},{name:l}=t.type;if(l.includes(" | ")){const r=l.split(" | ");return p.exports.createElement(p.exports.Fragment,null,r.map(i=>p.exports.createElement("span",{className:"block whitespace-nowrap",key:i},p.exports.createElement("span",{className:"mr-4"},"|"),a(i))))}else return a(l)},an={string:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",number:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number",boolean:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean",Date:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date",CSSProperties:"https://reactjs.org/docs/dom-elements.html#style",ReactNode:"https://reactjs.org/docs/rendering-elements.html","RefObject<any>":"https://reactjs.org/docs/refs-and-the-dom.html"},tn={code:Xl,PropTable:Kl,pre:t=>n.createElement("div",c({},t)),img:l=>{var r=l,{style:t}=r,a=x(r,["style"]);return n.createElement("img",N(c({},a),{style:c({maxWidth:"100%"},t)}))}},ln=()=>n.createElement(Nt,{components:tn},n.createElement(yt,null,n.createElement(vt,null,n.createElement(j,{path:"/",exact:!0},n.createElement(zl,null)),n.createElement(j,{path:"/modal"},n.createElement(ga,null)),n.createElement(j,{path:"/breadcrumbs"},n.createElement(Je,null)),n.createElement(j,{path:"/textfield"},n.createElement(Xa,null)),n.createElement(j,{path:"/select"},n.createElement(Na,null)),n.createElement(j,{path:"/tabs"},n.createElement($a,null)),n.createElement(j,{path:"/textarea"},n.createElement(Oa,null)),n.createElement(j,{path:"/slider"},n.createElement(Ea,null)),n.createElement(j,{path:"/combobox"},n.createElement(da,null)),n.createElement(j,{path:"/button"},n.createElement(Qe,null)),n.createElement(j,{path:"/pill"},n.createElement(ea,null)),n.createElement(j,{path:"/box"},n.createElement(Ke,null)),n.createElement(j,{path:"/expandable"},n.createElement(ua,null)),n.createElement(j,{path:"/switch"},n.createElement(qa,null)),n.createElement(j,{path:"/toggle"},n.createElement(Qa,null)),n.createElement(j,{path:"/steps"},n.createElement(Ia,null)),n.createElement(j,{path:"/Card"},n.createElement(na,null)))));xt.exports.render(ln(),document.querySelector("#root"));
