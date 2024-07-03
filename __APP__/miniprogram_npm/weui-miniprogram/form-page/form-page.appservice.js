$gwx_XC_7=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}var __WXML_GLOBAL__={};{
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
function gz$gwx_XC_7_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'weui-form'])
Z([[2,'||'],[[7],[3,'title']],[[7],[3,'subtitle']]])
Z([3,'title'])
Z([3,'tips'])
Z([3,'button'])
Z([3,'suffixtips'])
Z([3,'footer'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_7=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_7=true;
var x=['./miniprogram_npm/weui-miniprogram/form-page/form-page.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_7_1()
var xAC=_n('view')
_rz(z,xAC,'class',0,e,s,gg)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,1,e,s,gg)){oBC.wxVkey=1
}
else{oBC.wxVkey=2
var fCC=_n('slot')
_rz(z,fCC,'name',2,e,s,gg)
_(oBC,fCC)
}
var cDC=_n('slot')
_(xAC,cDC)
var hEC=_n('slot')
_rz(z,hEC,'name',3,e,s,gg)
_(xAC,hEC)
var oFC=_n('slot')
_rz(z,oFC,'name',4,e,s,gg)
_(xAC,oFC)
var cGC=_n('slot')
_rz(z,cGC,'name',5,e,s,gg)
_(xAC,cGC)
var oHC=_n('slot')
_rz(z,oHC,'name',6,e,s,gg)
_(xAC,oHC)
oBC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_7";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_7();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/form-page/form-page.wxml'] = [$gwx_XC_7, './miniprogram_npm/weui-miniprogram/form-page/form-page.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/form-page/form-page.wxml'] = $gwx_XC_7( './miniprogram_npm/weui-miniprogram/form-page/form-page.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/form-page/form-page";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/form-page/form-page.js";define("miniprogram_npm/weui-miniprogram/form-page/form-page.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports=require("../_commons/0.js")([{ids:[8],modules:{2:function(e,t,s){e.exports=s(50)},50:function(e,t){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{title:{type:String,value:""},subtitle:{type:String,value:""}},relations:{"../cells/cells":{type:"descendant",linked:function(e){this.data.firstItem||(this.data.firstItem=e),e.setOuterClass("weui-cells__group weui-cells__group_form weui-cells_form"),e!==this.data.firstItem&&e.setOuterClass("weui-cells__group_wxss weui-cells__group weui-cells__group_form weui-cells_form")}}},data:{firstItem:null}})}},entries:[[2,0]]}]);
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/form-page/form-page.js'});require("miniprogram_npm/weui-miniprogram/form-page/form-page.js");