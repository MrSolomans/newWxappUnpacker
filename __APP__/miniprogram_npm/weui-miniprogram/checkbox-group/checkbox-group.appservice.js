$gwx_XC_4=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];
function gz$gwx_XC_4_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'multi']])
Z([3,'checkedChange'])
Z([[7],[3,'extClass']])
Z(z[1])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_4=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_4=true;
var x=['./miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_4_1()
var oJB=_v()
_(r,oJB)
if(_oz(z,0,e,s,gg)){oJB.wxVkey=1
var fKB=_mz(z,'checkbox-group',['bindchange',1,'class',1],[],e,s,gg)
var cLB=_n('slot')
_(fKB,cLB)
_(oJB,fKB)
}
else{oJB.wxVkey=2
var hMB=_mz(z,'radio-group',['bindchange',3,'class',1],[],e,s,gg)
var oNB=_n('slot')
_(hMB,oNB)
_(oJB,hMB)
}
oJB.wxXCkey=1
oJB.wxXCkey=3
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_4";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_4();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxml'] = [$gwx_XC_4, './miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxml'] = $gwx_XC_4( './miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.js";define("miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports=require("../_commons/0.js")([{ids:[5],modules:{190:function(t,e){Component({options:{addGlobalClass:!0,multipleSlots:!0},properties:{multi:{type:Boolean,value:!0,observer:"_multiChange"},extClass:{type:String,value:""},prop:{type:String,value:""}},data:{targetList:[],parentCell:null},relations:{"../checkbox/checkbox":{type:"descendant",linked:function(t){this.data.targetList.push(t),t.setMulti(this.data.multi),this.data.firstItem||(this.data.firstItem=t),t!==this.data.firstItem&&t.setOuterClass("weui-cell_wxss")},unlinked:function(t){var e=-1;this.data.targetList.forEach(function(a,s){a===t&&(e=s)}),this.data.targetList.splice(e,1),this.data.targetList||(this.data.firstItem=null)}},"../form/form":{type:"ancestor"},"../cells/cells":{type:"ancestor",linked:function(t){this.data.parentCell||(this.data.parentCell=t),this.setParentCellsClass()},unlinked:function(){this.data.parentCell=null}}},methods:{checkedChange:function(t,e){if(this.data.multi){var a=[];this.data.targetList.forEach(function(t){t.data.disabled||t.data.checked&&a.push(t.data.value)}),this.triggerEvent("change",{value:a})}else{var s="";this.data.targetList.forEach(function(t){t.data.disabled||(t===e?s=t.data.value:t.setData({checked:!1}))}),this.triggerEvent("change",{value:s},{})}},setParentCellsClass:function(){var t=this.data.multi?"weui-cells_checkbox":"weui-cells_radio";this.data.parentCell&&this.data.parentCell.setCellsClass(t)},_multiChange:function(t){return this.data.targetList.forEach(function(e){e.setMulti(t)}),this.data.parentCell&&this.data.parentCell.setCellMulti(t),t}}})},20:function(t,e,a){t.exports=a(190)}},entries:[[20,0]]}]);
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.js'});require("miniprogram_npm/weui-miniprogram/checkbox-group/checkbox-group.js");