$gwx_XC_20=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_20 || [];
function gz$gwx_XC_20_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'wrapperShow']])
Z([3,'alert'])
Z([a,[3,'weui-toptips weui-toptips_warn '],[[7],[3,'className']],[3,' '],[[7],[3,'extClass']],[3,' '],[[2,'?:'],[[7],[3,'innerShow']],[1,'weui-animate-fade-in'],[1,'weui-animate-fade-out']]])
Z([[7],[3,'msg']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_20_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_20_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_20=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_20=true;
var x=['./miniprogram_npm/weui-miniprogram/toptips/toptips.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_20_1()
var oRE=_v()
_(r,oRE)
if(_oz(z,0,e,s,gg)){oRE.wxVkey=1
var cSE=_mz(z,'view',['ariaRole',1,'class',1],[],e,s,gg)
var oTE=_v()
_(cSE,oTE)
if(_oz(z,3,e,s,gg)){oTE.wxVkey=1
}
else{oTE.wxVkey=2
var lUE=_n('slot')
_(oTE,lUE)
}
oTE.wxXCkey=1
_(oRE,cSE)
}
oRE.wxXCkey=1
return r
}
e_[x[0]]=e_[x[0]]||{f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_20";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_20();	if (__vd_version_info__.delayedGwx) __wxAppCode__['miniprogram_npm/weui-miniprogram/toptips/toptips.wxml'] = [$gwx_XC_20, './miniprogram_npm/weui-miniprogram/toptips/toptips.wxml'];else __wxAppCode__['miniprogram_npm/weui-miniprogram/toptips/toptips.wxml'] = $gwx_XC_20( './miniprogram_npm/weui-miniprogram/toptips/toptips.wxml' );
	;__wxRoute = "miniprogram_npm/weui-miniprogram/toptips/toptips";__wxRouteBegin = true;__wxAppCurrentFile__="miniprogram_npm/weui-miniprogram/toptips/toptips.js";define("miniprogram_npm/weui-miniprogram/toptips/toptips.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";module.exports=require("../_commons/0.js")([{ids:[21],modules:{8:function(t,e,s){t.exports=s(94)},94:function(t,e){var s={warn:"weui-toptips_warn",info:"weui-toptips_info",success:"weui-toptips_success",error:"weui-toptips_error"};Component({options:{addGlobalClass:!0},properties:{type:{type:String,value:"error",observer:"_typeChange"},show:{type:Boolean,value:!1,observer:"_showChange"},msg:{type:String,value:""},delay:{type:Number,value:2e3},extClass:{type:String,value:""}},data:{wrapperShow:!1,innerShow:!1},lifetimes:{ready:function(){this._showChange(this.data.show)},attached:function(){this._typeChange(this.data.type)}},methods:{_typeChange:function(t){this.setData({className:s[t]||""})},_showChange:function(t){t?this._showToptips():this._hideToptips()},_showToptips:function(){var t=this;this.data.delay&&setTimeout(function(){t._hideToptips(),t.setData({show:!1},function(){t.triggerEvent("hide",{},{})})},this.data.delay),this.setData({wrapperShow:!0,innerShow:!0})},_hideToptips:function(){var t=this;this.data.innerShow&&(this.setData({innerShow:!1}),setTimeout(function(){t.setData({wrapperShow:!1})},300))}}})}},entries:[[8,0]]}]);
},{isPage:false,isComponent:true,currentFile:'miniprogram_npm/weui-miniprogram/toptips/toptips.js'});require("miniprogram_npm/weui-miniprogram/toptips/toptips.js");