window._walkmeWebpackJP&&(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[10],{1133:function(r,e,t){(function(n,e){var C=t(31).get();n.register("DeepUiInitializer").asCtor(function(o,s,d,c,u,p,g,m,w,f,S,F,k){this.start=function(l){return new e(function(e,n){try{var r=o.getSettingsFile(),t=o.getCdnServerName();if(m.isSelfHosted){if(!u.isFeatureEnabled(I))return e();t=r.PlayerApiServer&&r.PlayerApiServer.replace("papi","cdn")}var i=t&&~t.indexOf("cdn.walkme.com")&&u.isFeatureEnabled("DpUiProd1")?"/deepui/p1/":"/deepui/",a=C&&C.getItem("wm-deepui-snippet-link")||t+i+"0/main.js";s.addScriptWithCallback(a,"onDeepUIReadyCb",function(){return{resolve:e,reject:n,wmDependencies:{datafile:l,settingsFile:o,commonUtils:s,consts:d,wmjQuery:c,elementFinder:p,jQueryElementFinder:g,wmInternals:m,wmLogger:w,clientStorageManager:f,localStorageService:C,endUsersManager:S,userGuidContainer:F,isInEditor:k}}},function(){n(new Error("Failed to addScriptWithCallback for: "+a))})}catch(e){n(e)}})},function(){}.apply(null,arguments)}).dependencies("SettingsFile, CommonUtils, Consts, wmjQuery, FeaturesManager,ElementFinder, JQueryElementFinder, WmInternals, Logger, ClientStorageManager, EndUsersManager, UserGuidContainer, IsInEditor");var I="DeepUiAllowedInSelfHosted";r.exports={init:function(e){return n.get("DeepUiInitializer").start(e).catch(function(e){n.get("Logger").error(e)})}}}).call(this,t(2),t(12))}}]);