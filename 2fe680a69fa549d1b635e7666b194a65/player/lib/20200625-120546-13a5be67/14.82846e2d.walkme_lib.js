(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[14],{1132:function(n,e,r){(function(t,e){var f=r(31).get();t.register("IntegrationCenterWebhooksInitializer").asCtor(function(g,u,d,p,w,b,h,m,k,C,S){this.start=function(c){return new e(function(e,t){try{var n=p.getSettingsFile(),r=p.getCdnServerName();if(h.isSelfHosted){if(!S.isFeatureEnabled(I))return e();r=n.PlayerApiServer&&n.PlayerApiServer.replace("papi","cdn")}var i=(l=r,f&&f.getItem("wm-integration-center-webhooks-public-path")||l+"/ic/webhooks/1/"),a=(s=p.getSettingsFile(),f&&f.getItem("wm-integration-center-webhooks-api-base-url")||s.PlayerApiServer),o=i+"main.js";g.addScriptWithCallback(o,"onIntegrationCenterWebhooksReadyCb",function(){return{resolve:e,reject:t,wmDependencies:{publicPath:i,apiBaseUrl:a,dataFile:c,wmInternals:h,consts:d,userGuidContainer:b,wmjQuery:w,wmLogger:u,clientStorageManager:m,settingsFile:p,classWalkMeAPI:k,eventSender:C}}},function(){t(new Error("Failed to addScriptWithCallback for: "+o))})}catch(e){t(e)}var s,l})}}).dependencies("CommonUtils, Logger, Consts, SettingsFile, wmjQuery, UserGuidContainer, WmInternals, ClientStorageManager, ClassWalkMeAPI, EventSender, FeaturesManager");var I="IntegrationCenterWebhooksAllowedInSelfHosted";n.exports={init:function(e){return t.get("IntegrationCenterWebhooksInitializer").start(e).catch(function(e){t.get("Logger").error(e)})}}}).call(this,r(2),r(12))}}]);