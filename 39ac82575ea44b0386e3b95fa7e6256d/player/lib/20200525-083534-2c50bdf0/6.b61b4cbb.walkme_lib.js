(window._walkmeWebpackJP=window._walkmeWebpackJP||[]).push([[6],{1129:function(t,e,a){(function(e){var n;n=a(1371),t.exports={init:function(){e.register("blackListElements").asInstance(n())}}}).call(this,a(2))},1371:function(e,n){e.exports=function(){var t=[],a=["walkme-inspect-ignore","walkme-editor-popup","walkme-hidden-iframe","walkme-to-remove","walkme-inspect-available-button","wm-ignore-capture"],i=["html","body","frameset","map","area","br","audio"];return{ids:t,classes:a,tagTypes:i,//!lowercase
containers:{tagTypes:["svg","button"]},shouldIgnoreElement:function(e){return!(!(n=e.className)||"string"!=typeof n)&&a.some(function(e){return-1!==n.indexOf(e)})||-1!==t.indexOf(e.id)||-1!==i.indexOf(e.tagName.toLowerCase());var n}}}}}]);