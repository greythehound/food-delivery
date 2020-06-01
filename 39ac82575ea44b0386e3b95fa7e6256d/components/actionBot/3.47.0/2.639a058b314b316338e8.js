(window._walkmeABWebpackJP_latest=window._walkmeABWebpackJP_latest||[]).push([[2],{113:function(e,t,n){"use strict";(function(e,r){function a(t){return function(){var n=t.apply(this,arguments);return new e(function(t,r){return function a(o,u){try{var i=n[o](u),c=i.value}catch(e){return void r(e)}if(!i.done)return e.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});t(c)}("next")})}}Object.defineProperty(t,"__esModule",{value:!0});var o,u,i,c=n(134),s=(o=c)&&o.__esModule?o:{default:o},l=n(25),d=n(27),f=["publicPath","apiBaseUrl","clientStorageManager","jQuerySelectorRunner","actionStagesFactory","inputGenerator","consts","settingsFile","wmjQuery","wmLogger","eventSender","eventsListener","userGuidContainer","endUsersManager","auditSourceManager","classWalkMeAPI","launchersModule","dataFile","wmAjax","eventsTrigger","commonEvents","topContainerProvider","newApiEventsConfigProvider","siteConfigManager","shuttlesManager","shoutOutsManager","eventSenderErrorLogger","win"],_=void 0,S=void 0,E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.create,r=t.ctorParams,a=window._walkmeInternals;if(a&&a.ctx&&a.ctx.has(e))return n?a.ctx.create(e,r):a.ctx.get(e)},T=function(){return _.siteConfigManager.get()},A=(u=a(r.mark(function t(a){return r.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,S){t.next=6;break}return t.next=4,new e(function(t){e.all([n.e(9),n.e(6)]).then(function(){t(n(761))}.bind(null,n)).catch(n.oe)});case 4:S=t.sent.default;case 6:return t.abrupt("return",S.searchDeployables(a));case 9:t.prev=9,t.t0=t.catch(0),s.default.error(t.t0);case 12:case"end":return t.stop()}},t,void 0,[[0,9]])})),function(){return u.apply(this,arguments)}),v=[d.ACTION_TYPE_NONE,d.ACTION_TYPE_ACTION_BOT],p=(i=a(r.mark(function e(t){var n;return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:_=t,n=Object.keys(t),f.forEach(function(e){-1===n.indexOf(e)&&s.default.error(new Error("Dependency "+e+" is required."),!0)});try{t.newApiEventsConfigProvider.set(l.EXT_BOT_DUI_SHOW,{}),t.newApiEventsConfigProvider.set(l.EXT_BOT_DUI_CLOSE,{})}catch(e){s.default.error(e)}case 4:case"end":return e.stop()}},e,void 0)})),function(){return i.apply(this,arguments)});t.default={init:p,get deps(){return _},getUserGuid:function(){return _.userGuidContainer.getUserGuid()},getEndUserGuid:function(){return _.endUsersManager.getEndUserGuid()},getEnvId:function(){return _.auditSourceManager.get()},getSettingsFile:function(){return _.settingsFile.getSettingsFile()},getPublicPath:function(){return _.publicPath},getApiBaseUrl:function(){return _.apiBaseUrl},startFlowById:function(e){return _.classWalkMeAPI.startFlowById(e)},startWalkthruById:function(e){return _.classWalkMeAPI.startWalkthruById(e)},playSurveyById:function(e){return _.classWalkMeAPI.startSurveyById(e)},playShoutOutById:function(e){return _.shoutOutsManager.activateById(e)},playResourceById:function(e){return _.classWalkMeAPI.startContentById(e)},playShuttleById:function(e){return _.shuttlesManager.activateById(e)},openMenu:function(){var e=window&&window.WalkMePlayerAPI;e&&e.isMenuOpen&&!e.isMenuOpen()&&e.toggleMenu&&e.toggleMenu()},searchDeployables:A,resolveBBCodes:function(e){try{var t=E("BBCodeParser");return t?t.parse(e).trim():(s.default.error(new Error("BBCode parser isn't present")),e)}catch(e){s.default.error(e)}return e},isValidLauncher:function(e){try{return v.indexOf(e.Settings.action.actionType)>-1}catch(e){s.default.error(e)}return!1},getLaunchers:function(){var e=_.launchersModule.getLaunchers();return e&&e.length?e:_.dataFile&&_.dataFile.Launchers},getUserJsonSettings:function(){return T().Custom},getSiteConfig:T,getLiveChat:function(){var e=E("LiveChatSettings"),t=e&&e.getLiveChatSettings();return E("LiveChat",{create:!0,ctorParams:t})},getCommonUtils:function(){return E("CommonUtils")},getGuidGenerator:function(){return E("GuidGenerator")},getLogger:function(){return E("Logger")},getLibInitializer:function(){return E("LibInitializer")},getAuditingEnabledIndicator:function(){return E("AuditingEnabledIndicator")},getServerDataSenderManager:function(){return E("ServerDataSenderManager")},getAbPermutationManager:function(){return E("AbPermutationManager")},getFeaturesManager:function(){return E("FeaturesManager")},getHostData:function(){return E("HostData")},getJsonUtils:function(){return E("JsonUtils")},getUiDataProvider:function(){return E("UiDataProvider")}}}).call(this,n(18).Promise,n(33))},134:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,a=e||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(113),u=(r=o)&&r.__esModule?r:{default:r},i=n(62);t.default={log:function(e){u.default.deps.wmLogger.customerLog(e,i.LOG_LEVEL_STR_TO_NUM.INFO,i.LOG_FEATURE_NAME)},debug:function(e){u.default.deps.wmLogger.customerLog(e,i.LOG_LEVEL_STR_TO_NUM.DEBUG,i.LOG_FEATURE_NAME)},warn:function(e){u.default.deps.wmLogger.customerLog(e,i.LOG_LEVEL_STR_TO_NUM.WARN,i.LOG_FEATURE_NAME)},error:function(e,t){try{0;var n=e&&e.config&&e.config.url,r=e&&e.config&&e.config.method,o=e&&e.config&&e.config.data,c=e||new Error("Unknown error");c.message=i.LOG_FEATURE_NAME+"(e): "+(c.message||e);var s=c.stack&&c.stack.split("\n"),l=s&&s.length?s.slice(0,i.LOG_STACK_MAX_LENGTH).join("\n"):c.message,d="originalError",f="processedError";try{d=JSON.stringify(e)}catch(e){}try{f=JSON.stringify(c)}catch(e){}u.default.deps.eventSenderErrorLogger.logError(l,{group:i.LOG_GROUP_NAME,project:i.LOG_PROJECT_NAME,component:i.LOG_COMPONENT_NAME,meta:a({version:"3.47.0",origErr:d,processedErr:f,clientRelated:Boolean(t),userGuid:u.default.getUserGuid()},n&&{url:n},r&&{method:r},o&&{payload:o})})}catch(t){u.default.deps.wmLogger.customerLog(e,i.LOG_LEVEL_STR_TO_NUM.ERROR,i.LOG_FEATURE_NAME)}u.default.deps.wmLogger.customerLog(e,i.LOG_LEVEL_STR_TO_NUM.ERROR,i.LOG_FEATURE_NAME)}}}).call(this,n(7).assign)},237:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(202)),o=r(n(149)),u="middleEndian",i="date",c="number",s="comma";t.default=function(e,t){switch(e&&e.type){case i:return function(e,t){var n=new Date(e.value);if(!(0,o.default)(n))return e;var r=function(e){return e?e.replace(/(D+)|(Y+)/g,function(e){return e.toLowerCase()}):e}(t);if(!r)switch(e.settings&&e.settings.format){case u:r="MM/dd/yyyy";break;default:r="dd/MM/yyyy"}return(0,a.default)(n,r)}(e,t);case c:return function(e){return e.settings&&e.settings.decimalSeparator===s?String(e.value).replace(/\./g,","):e.value}(e);default:return e&&e.value}}},238:function(e,t,n){"use strict";(function(e,r,a){Object.defineProperty(t,"__esModule",{value:!0});var o,u=n(113),i=(o=u)&&o.__esModule?o:{default:o};t.default={getItem:function(e){return i.default.deps.clientStorageManager.getData("wm-ab-"+e)},setItem:function(e,t){return i.default.deps.clientStorageManager.saveData("wm-ab-"+e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:600,arguments[3])},removeItem:function(e){var t;return(t=i.default.deps.clientStorageManager).removeData.apply(t,["wm-ab-"+e].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);e.length>t;t++)n[t]=e[t];return n}return r(e)}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})))},clear:function(){},sync:function(){var t,n=(t=a.mark(function t(){return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new e(function(e){i.default.deps.clientStorageManager.refreshGetData(null,function(){e()})}));case 1:case"end":return t.stop()}},t,this)}),function(){var n=t.apply(this,arguments);return new e(function(t,r){return function a(o,u){try{var i=n[o](u),c=i.value}catch(e){return void r(e)}if(!i.done)return e.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});t(c)}("next")})});return function(){return n.apply(this,arguments)}}()}}).call(this,n(18).Promise,n(31).from,n(33))},25:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.INIT_MESSAGE_FUNC="WM_BOT_INIT_MESSAGE_FUNC",t.ADD_USER_ID="WM_BOT_ADD_USER_ID",t.ADD_BOT_SETTINGS="WM_BOT_ADD_BOT_SETTINGS",t.TRY_INIT_SESSION="WM_BOT_TRY_INIT_SESSION",t.GET_BOT_DATA_SUCCESS="GET_BOT_DATA_SUCCESS",t.GET_BOT_DATA_FAIL="GET_BOT_DATA_FAIL",t.GET_BOT_CONVERSATIONS_SUCCESS="GET_BOT_CONVERSATIONS_SUCCESS",t.GET_BOT_ALL_CONVERSATIONS_SUCCESS="GET_BOT_ALL_CONVERSATIONS_SUCCESS",t.GET_BOT_CONVERSATIONS_FAIL="GET_BOT_CONVERSATIONS_FAIL",t.BOT_STATUS="BOT_STATUS",t.CHANGE_INPUT_FOCUS="CHANGE_INPUT_FOCUS",t.PASS_ENV_ID="PASS_ENV_ID",t.PASS_API_BASE_URL="PASS_API_BASE_URL",t.INIT_SESSION_SUCCESS="INIT_SESSION_SUCCESS",t.INIT_SESSION_FAIL="INIT_SESSION_FAIL",t.INITIAL_DATA_LOAD_FAIL="INITIAL_DATA_LOAD_FAIL",t.RESTORE_DIALOG_SUCCESS="RESTORE_DIALOG_SUCCESS",t.RESTORE_DIALOG_FAIL="RESTORE_DIALOG_FAIL",t.ADD_SEPARATOR="ADD_SEPARATOR",t.SEND_MESSAGE_FAIL="SEND_MESSAGE_FAIL",t.GET_SUGGESTIONS_SUCCESS="GET_SUGGESTIONS_SUCCESS",t.GET_REST_SUGGESTIONS_START="GET_REST_SUGGESTIONS_START",t.GET_WM_SEARCH_SUGGESTIONS_START="GET_WM_SEARCH_SUGGESTIONS_START",t.GET_WM_SEARCH_SUGGESTIONS_SUCCESS="GET_WM_SEARCH_SUGGESTIONS_SUCCESS",t.CHOOSE_CONVERSATION_SUCCESS="CHOOSE_CONVERSATION_SUCCESS",t.GET_CONVERSATION_NODE_SUCCESS="GET_CONVERSATION_NODE_SUCCESS",t.CREATE_DIALOG_SUCCESS="CREATE_DIALOG_SUCCESS",t.DIALOG_DATA_ADDED="DIALOG_DATA_ADDED",t.DIALOG_TRUNCATE_DATA_SEQUENCE="DIALOG_TRUNCATE_DATA_SEQUENCE",t.FINISH_CONVERSATION="FINISH_CONVERSATION",t.BOT_ANALYTICS_EVENT="BOT_ANALYTICS_EVENT",t.BOT_READY="BOT_READY",t.BOT_CLOSE="BOT_CLOSE",t.BOT_SHOW="BOT_SHOW",t.BOT_HIDE="BOT_HIDE",t.BOT_VISIBILITY="BOT_VISIBILITY",t.WALK_ME_ACTION="WALK_ME_ACTION",t.START_WALKTHRU="START_WALKTHRU",t.START_SMARTWALKTHRU="START_SMARTWALKTHRU",t.SMARTWALKTHRU="SMARTWALKTHRU",t.WEBHOOK="WEBHOOK",t.LIVE_CHAT="LIVE_CHAT",t.WALKTHRU="WALKTHRU",t.SURVEY="SURVEY",t.SHOUTOUT="SHOUTOUT",t.RESOURCE="RESOURCE",t.SHUTTLE="SHUTTLE",t.MENU="MENU",t.CONVERSATION="CONVERSATION",t.DISABLE_LIVE_CHAT="DISABLE_LIVE_CHAT",t.ADD_MESSAGE="ADD_MESSAGE",t.WALKME_SEARCH="WALKME_SEARCH",t.RESOLVE_BBCODES="RESOLVE_BBCODES",t.ADD_IDS_TO_LAST_MESSAGE="ADD_IDS_TO_LAST_MESSAGE",t.REMOVE_ANSWER_SUCCESS="REMOVE_ANSWER_SUCCESS",t.REMOVE_ANSWER_FAIL="REMOVE_ANSWER_FAIL",t.FINISH_CURRENT_DIALOG_SUCCESS="FINISH_CURRENT_DIALOG_SUCCESS",t.FINISH_CURRENT_DIALOG_FAIL="FINISH_CURRENT_DIALOG_FAIL",t.RECALCULATE_SCROLL="RECALCULATE_SCROLL",t.FLUSH_STORE="FLUSH_STORE",t.SEND_ERROR_TO_LOGZ="SEND_ERROR_TO_LOGZ",t.GET_APP_STARTED_FLAG="GET_APP_STARTED_FLAG",t.CLEAN_APP_STARTED_FLAG="CLEAN_APP_STARTED_FLAG",t.ANALYTICS_CONVERSATION_SEARCH_TRY="ANALYTICS_CONVERSATION_SEARCH_TRY",t.ANALYTICS_ANSWER_QUESTION_TRY="ANALYTICS_ANSWER_QUESTION_TRY",t.EXT_BOT_DUI_SHOW="WM_BOT_DUI_SHOW",t.EXT_BOT_DUI_CLOSE="WM_BOT_DUI_CLOSE",t.EXT_BOT_DUI_ACTION="WM_BOT_DUI_ACTION"},27:function(e,t){"use strict";function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r;Object.defineProperty(t,"__esModule",{value:!0});t.WM_WRAPPER_BOT_CLASSNAME="wm-chatbot",t.WM_BOT_CLASSNAME="wm-chatbot-container";var a=t.IFRAME_ID="wm-action-bot-iframe-latest",o=(t.LINK_TAG_ID=a+"-link",t.STYLE_TAG_ID=a+"-style",t.MAX_SUGGESTIONS_IN_VIEW=4,t.SCROLL_BTN_OFFSET_PX=60,t.MAX_USER_MESSAGE_LENGTH=7e3,t.SUGGESTIONS_LOADER_ID="loader",t.SUGGESTION_ITEM_HEIGHT=34,t.DEFAULT_SUGGESTION_ITEM_WIDTH=347,t.LIVE_CHAT_SUGGESTION_ID="open-live-chat-suggestion",t.DEFAULT_BOT_ID=130,t.ACTION_TYPE_NONE="none",t.ACTION_TYPE_ACTION_BOT="actionbot",t.SUGGESTIONS_SEPARATOR_ID="suggestions-separator-id",t.CLIENT_SIDE_MODE="clientSideMode",t.CONVERSATION_NODE_TYPES={action:"action",message:"message",question:"question"},t.ANALYTICS_EVENTS={conversationsNodeServed:"conversationsNodeServed",conversationsQuestionAnswered:"conversationsQuestionAnswered",conversationActionTriggered:"conversationActionTriggered",conversationsSearch:"conversationsSearch",conversationStarted:"conversationStarted",conversationEnded:"conversationEnded",chatOpened:"chatOpened",chatClosed:"chatClosed",endUserEngaged:"endUserEngaged"},t.DEFAULT_LABELS={buttonSendText:"Send",buttonStartOverText:"Start Over",buttonLiveChatText:"Open Live Chat",conversationUnpublishedText:"The dialog has been restarted automatically because conversation has been changed since you used it last.",conversationUpdatedText:"The dialog has been restarted automatically because conversation has been changed since you used it last.",doneText:"Ok, we are done! Thank you. Anything else?",noConversationsOneSearchItemFoundText:"One match found. Please select it or try searching for something else",severalConversationsFoundText:"I found several options for you, please choose one.",suggestionsText:"Suggestions",chatInputPlaceholderText:"Type a message...",disabledInputText:"Please click to choose one of the above suggestions.",separatorNewText:"New",separatorTodayText:"Today",separatorYesterdayText:"Yesterday",separatorCompletedText:"Completed",liveChatSuggestionText:"Need Help? Start a LiveChat now."},t.DEFAULT_ERROR_MESSAGE="Something went wrong. Please try again later.",t.DATE_FORMATS={littleEndian:"dd/MM/yyyy",middleEndian:"MM/dd/yyyy"},t.DATE_PICKER_CONFIG={currentYear:(new Date).getFullYear(),yearsPerPage:24,maxPageOffset:4},t.SALESFORCE_QUESTION_TYPE="connection_salesforce",t.MIN_SUGGESTIONS_CHUNK_SIZE=200,t.EXT_ACTIONBOT_ACTION="wm.cb.ACTIONBOT_ACTION",t.SUGGESTION_TYPES={liveChat:"liveChat",conversation:"conversation",resource:"content",shuttle:"shuttle",smartWalkThru:"flow",walkthru:"walkthru",text:"text",staticSuggestion:"staticSuggestion",separator:"separator"});t.DEPLOYABLES_SUGGESTION_TYPES=[o.walkthru,o.smartWalkThru,o.shuttle,o.resource],t.SUGGESTION_MERGE_TYPES={top:"On top",bottom:"On the bottom",merged:"Merged list"},t.SUGGESTION_TYPE_TO_WM_APP_TYPE=(n(r={},o.resource,"RESOURCE"),n(r,o.shuttle,"SHUTTLE"),n(r,o.smartWalkThru,"START_WALKTHRU"),n(r,o.walkthru,"WALKTHRU"),r),t.ERROR_SOURCES={LIVE_CHAT_ACTION:"LIVE_CHAT_ACTION"},t.DEFAULT_THEME={botDesignId:2,css:""},t.BOT_CUSTOM_DESIGN_MAP={1:"classic",2:"modern"},t.BOT_HEADER_HEIGHT_MAP={classic:57,modern:32},t.QUESTION_DATA_TYPES={text:"text",boolean:"boolean",number:"number",regex:"regex",phone:"phone",email:"email",date:"date",choice:"choice",connection_salesforce:"connection_salesforce"},t.MENTION_DATA_TYPES={variable:"conversationVariable"},t.DATA_MAPPING_VARIABLE_TYPES={variable:"conversationVariable"}},31:function(e){"use strict";var t=Object.prototype.toString,n=function(e){return"function"==typeof e||"[object Function]"===t.call(e)},r=Math.pow(2,53)-1,a=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),r)};e.exports={get from(){return window&&window.Array&&window.Array.from&&"function"==typeof window.Array.from.toString&&String(window.Array.from.toString()).indexOf("[native code]")>-1?window.Array.from:function(e){var t=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,o=arguments.length>1?arguments[1]:void 0;if(void 0!==o){if(!n(o))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var u,i=a(t.length),c=n(this)?Object(new this(i)):new Array(i),s=0;i>s;)u=t[s],c[s]=o?void 0===r?o(u,s):o.call(r,u,s):u,s+=1;return c.length=i,c}}}},332:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateStartedAppKey=t.safeReject=t.safeResolve=t.noop=t.resolveVariablesInText=t.isTextHasVariable=t.parseVarName=t.extractVariableName=void 0;var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.resolveVariable=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=void 0;try{E(e)&&(t=T(e))}catch(e){s.default.error(e)}return t||e};var o=r(n(123)),u=r(n(26)),i=r(n(238)),c=r(n(237)),s=r(n(134)),l=/\${([^{]+)}/g,d=function(e){return e.replace(/\\/g,"")},f=t.extractVariableName=function(){return d(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(/\${(.*)}/,"$1")},_=function(e){return function(e){return d(e).match(l)||[]}(e).map(function(e){return f(e)})},S=t.parseVarName=function(){return d(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("@")},E=t.isTextHasVariable=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"string"==typeof e&&Boolean(d(e).match(l))},T=t.resolveVariablesInText=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=_(e);if(!t.length)return e;var n=t.map(function(e){var t=S(e),n=a(t,2),r=n[1];return(0,c.default)(i.default.getItem(n[0]),r)}),r=d(e);return t.forEach(function(e,t){void 0!==n[t]&&(r=r.replace("${"+e+"}",n[t]))}),(0,o.default)(r)},A=t.noop=function(){};t.safeResolve=function(e,t){(0,u.default)(e,"resolve",A)(t)},t.safeReject=function(e,t){(0,u.default)(e,"reject",A)(t)},t.generateStartedAppKey=function(e,t){return e+"-"+t+"-started"}},333:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}function a(t){if(Array.isArray(t)){for(var n=0,r=Array(t.length);t.length>n;n++)r[n]=t[n];return r}return e(t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(113)),u=r(n(134)),i=n(62),c=r(n(477)),s=function(e){try{var t=o.default.deps.wmjQuery,n=t();if(!e)return n;t.merge(n,t(e));try{var r=window.frames;if(!r||!r.length)return n;[].concat(a(r)).forEach(function(r){var a=t(e,r.document);t.merge(n,a)})}catch(e){}return n}catch(e){return u.default.error(e),o.default.deps.wmjQuery()}};t.default={init:function(){!function(){try{var e=c.default.toString(),t=document.createElement("style"),n=document.createTextNode(e);t.classNames="walkme-to-remove",t.appendChild(n),(document.head||document.getElementsByTagName("head")[0]).appendChild(t);try{var r=window.frames;r&&r.length&&[].concat(a(r)).forEach(function(t){var n=document.createElement("style"),r=document.createTextNode(e);n.classNames="walkme-to-remove",n.appendChild(r),(t.document.head||t.document.getElementsByTagName("head")[0]).appendChild(n)})}catch(e){}}catch(e){u.default.error(e)}}()},show:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(e.type){case i.WM_DEPLOYABLE_IDS.launcher:!function(e){if(e){var t=o.default.deps.wmjQuery,n=s(".walkme-launcher-id-"+e);if(n.length&&!n.find(".wm-ab-launcher-spinner").length){var r=t("<div>");r.addClass("wm-ab-launcher-spinner"),n.append(r)}}}(e.id)}},remove:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(e.type){case i.WM_DEPLOYABLE_IDS.launcher:!function(e){if(e){var t=s(".walkme-launcher-id-"+e);t.length&&t.find(".wm-ab-launcher-spinner").remove()}}(e.id)}},removeAll:function(){s(".wm-ab-launcher-spinner").remove()}}}).call(this,n(31).from)},334:function(e,t,n){"use strict";(function(e,r,a,o){function u(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(){var t=e.apply(this,arguments);return new r(function(e,n){return function a(o,u){try{var i=t[o](u),c=i.value}catch(e){return void n(e)}if(!i.done)return r.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});e(c)}("next")})}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.ACTIONS_REQUIRE_DATA_SAVE=void 0;var s,l,d,f=e||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),S=u(n(113)),E=u(n(333)),T=u(n(134)),A=u(n(238)),v=u(n(479)),p=n(332),O=n(27),h=n(62),I=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(25)),g=t.ACTIONS_REQUIRE_DATA_SAVE=[I.START_WALKTHRU,I.START_SMARTWALKTHRU,I.SMARTWALKTHRU,I.WALKTHRU,I.SURVEY,I.SHOUTOUT,I.SHUTTLE,I.RESOURCE],y=void 0,m=void 0,L=void 0,R=!1,N=!1,C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{return e.type===t.type&&e.id===t.id}catch(e){return!1}},b=function(t){var n=t.answers,r=S.default.getUserJsonSettings(),o=r&&r.actionbot,u=void 0;try{u=S.default.deps.eventsTrigger.sync(O.EXT_ACTIONBOT_ACTION,n)}catch(e){T.default.error(e)}var i=window.location,c=i.host;e(n,{returnUrl:n.returnUrl||{type:"string",value:c+i.pathname},returnBaseUrl:n.returnBaseUrl||{type:"string",value:c}},u||{});var s=[void 0];try{var l=o&&o.syncSwtDataToOtherAccounts;if(l&&l.length){var d=l.filter(function(e){return Array.isArray(e.conversationId)?e.conversationId.map(Number).indexOf(t.options.conversationId)>-1:Number(e.conversationId)===t.options.conversationId});if(d&&d.length){var f=d.reduce(function(e,t){return t&&t.accountGuids&&t.accountGuids.length?e.concat(t.accountGuids):e},[]);s=s.concat(f)}}}catch(e){T.default.error(e)}return s.forEach(function(e){a(n).forEach(function(t){var n=_(t,2),r=n[0],a=n[1],u=void 0;try{var i=o&&o.swtDataTTL;if(i&&i.length){var c=i.find(function(e){return Array.isArray(e.nodeId)?e.nodeId.map(Number).indexOf(a.nodeId)>-1:Number(e.nodeId)===a.nodeId});u=Number(c&&c.ttl)}}catch(e){T.default.error(e)}return A.default.setItem(r,a,u||void 0,e)})}),A.default.sync()},w=(c(s={},I.START_SMARTWALKTHRU,S.default.startFlowById),c(s,I.START_WALKTHRU,S.default.startFlowById),c(s,I.SMARTWALKTHRU,S.default.startFlowById),c(s,I.WALKTHRU,S.default.startWalkthruById),c(s,I.SURVEY,S.default.playSurveyById),c(s,I.SHOUTOUT,S.default.playShoutOutById),c(s,I.RESOURCE,S.default.playResourceById),c(s,I.SHUTTLE,S.default.playShuttleById),c(s,I.MENU,S.default.openMenu),s),U=(c(l={},I.START_SMARTWALKTHRU,{eventKey:"FlowCompleted",dataKey:"businessSolutionId"}),c(l,I.START_WALKTHRU,{eventKey:"FlowCompleted",dataKey:"businessSolutionId"}),c(l,I.SMARTWALKTHRU,{eventKey:"FlowCompleted",dataKey:"businessSolutionId"}),c(l,I.SHOUTOUT,{eventKey:"ShoutOutClosed",dataKey:"businessSolutionId"}),l),M=function(e){return new r((t=i(o.mark(function t(n){var r,a,u,i,c,s,l,d;return o.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=(r=e.settings).id,g.indexOf(a=r.app)<=-1){t.next=4;break}return t.next=4,b(e);case 4:(i=w[a])&&(a&&A.default.setItem((0,p.generateStartedAppKey)(a,u),!0),i(u),U[a]?(l=(c=U[a]).dataKey,S.default.deps.eventsListener.bind(s=c.eventKey,function e(t,r){(r&&r[l]===u||r.shoutOut&&r.shoutOut.Id===u)&&(S.default.deps.eventsListener.unbind(s,e),n())})):n()),a===I.LIVE_CHAT&&((d=S.default.getLiveChat())?d.chat.openChat():T.default.warn("[ActionBot] LiveChat doesn't present on ctx"),n());case 7:case"end":return t.stop()}},t,void 0)})),function(){return t.apply(this,arguments)}));var t},D=(d=i(o.mark(function e(t,a){var u,c,s,l,d,_;return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=a.botId,s=void 0===(c=a.additionalSettings)?{}:c,d=void 0===(l=a.globalConfig)?{}:l,t||T.default.error(new Error("Initiator is mandatory when opening DialogUI."),!0),_=t.type!==h.WM_DEPLOYABLE_IDS.event&&C(y,t)&&R,y=t,m){e.next=13;break}return e.next=8,new r(function(e){r.all([n.e(7),n.e(5)]).then(function(){e(n(760))}.bind(null,n)).catch(n.oe)});case 8:if(e.t0=e.sent,e.t0){e.next=11;break}e.t0={};case 11:m=new(0,e.t0.default);case 13:if(N){e.next=31;break}return e.next=16,m.init({userGuid:S.default.getUserGuid(),walkmeEndUserId:S.default.getEndUserGuid(),envId:S.default.getEnvId(),apiBaseUrl:S.default.getApiBaseUrl(),publicPath:S.default.getPublicPath(),uuid:A.default.getItem("euid"),siteConfig:S.default.getSiteConfig(),globalConfig:d});case 16:A.default.setItem("euid",e.sent.uuid,63072e3),N=!0,m.on(I.BOT_SHOW,function(e){try{E.default.remove(y),R=!0,S.default.deps.commonEvents.raiseEvent(I.EXT_BOT_DUI_SHOW,a),s.playMode&&S.default.deps.commonEvents.raiseEvent(I.BOT_SHOW)}catch(e){T.default.error(e)}(0,p.safeResolve)(e)}),m.on(I.BOT_HIDE,function(e){(0,p.safeResolve)(e)}),m.on(I.BOT_CLOSE,function(e){try{G(s.playMode)}catch(e){T.default.error(e)}(0,p.safeResolve)(e)}),m.on(I.BOT_ANALYTICS_EVENT,function(e){var t=e.type,n=e.data,r=e.options;try{var a=f({},r.skipPInit||n.pInit?null:{pInit:{id:y.id||null,type:y.type||h.WM_DEPLOYABLE_IDS.launcher,appType:y.type||h.WM_DEPLOYABLE_IDS.launcher}},n);(0,v.default)(t,a)}catch(e){T.default.error(e)}}),m.on(I.WALK_ME_ACTION,function(){var e=i(o.mark(function e(t){return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return S.default.deps.commonEvents.raiseEvent(s.playMode?I.WALK_ME_ACTION:I.EXT_BOT_DUI_ACTION,t),e.prev=1,e.next=4,M(t);case 4:(0,p.safeResolve)(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),(0,p.safeReject)(t,e.t0);case 10:case"end":return e.stop()}},e,void 0,[[1,7]])}));return function(){return e.apply(this,arguments)}}()),m.on(I.GET_APP_STARTED_FLAG,function(){var e=i(o.mark(function e(t){var n;return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{n=A.default.getItem((0,p.generateStartedAppKey)(t.app,t.id)),(0,p.safeResolve)(t,n)}catch(e){(0,p.safeReject)(t,e)}case 1:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}()),m.on(I.CLEAN_APP_STARTED_FLAG,function(){var e=i(o.mark(function e(t){return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A.default.removeItem((0,p.generateStartedAppKey)(t.app,t.id)),e.next=5,A.default.sync();case 5:(0,p.safeResolve)(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),(0,p.safeReject)(t,e.t0);case 11:case"end":return e.stop()}},e,void 0,[[0,8]])}));return function(){return e.apply(this,arguments)}}()),m.on(I.INITIAL_DATA_LOAD_FAIL,function(e){try{E.default.remove(y),L=null}catch(e){T.default.error(e)}(0,p.safeResolve)(e)}),m.on(I.SEND_ERROR_TO_LOGZ,function(e){T.default.error(e.error,e.clientRelated),(0,p.safeResolve)(e)}),m.on(I.WALKME_SEARCH,function(){var e=i(o.mark(function e(t){return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.default.searchDeployables(t.searchTerm);case 3:(0,p.safeResolve)(t,e.sent),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),T.default.error(e.t0),(0,p.safeReject)(t,e.t0);case 11:case"end":return e.stop()}},e,void 0,[[0,7]])}));return function(){return e.apply(this,arguments)}}()),m.on(I.RESOLVE_BBCODES,function(){var e=i(o.mark(function e(t){return o.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:try{(0,p.safeResolve)(t,S.default.resolveBBCodes(t.text))}catch(e){T.default.error(e),(0,p.safeReject)(t,e)}case 1:case"end":return e.stop()}},e,void 0)}));return function(){return e.apply(this,arguments)}}());case 31:if(!u||_){e.next=38;break}return m.hide(),e.next=35,m.open(a,L===u);case 35:L=u,e.next=41;break;case 38:m.hide(),E.default.remove(y),R=!1;case 41:e.next=48;break;case 43:e.prev=43,e.t1=e.catch(0),E.default.remove(y),[I.INITIAL_DATA_LOAD_FAIL].indexOf(e.t1)>-1&&T.default.error(e.t1);case 48:case"end":return e.stop()}},e,void 0,[[0,43]])})),function(){return d.apply(this,arguments)}),G=function(e){E.default.remove(y),m.hide(),R=!1,S.default.deps.commonEvents.raiseEvent(I.EXT_BOT_DUI_CLOSE),e&&S.default.deps.commonEvents.raiseEvent(I.BOT_CLOSE)};t.default={open:D,close:G,destroy:function(){m&&(m.close(),m=null)}}}).call(this,n(7).assign,n(18).Promise,n(7).entries,n(33))},477:function(e,t,n){(e.exports=n(478)(!1)).push([e.i,".wm-ab-launcher-spinner {\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.wm-ab-launcher-spinner::before {\n  animation: wm-ab-spin 1.5s linear infinite;\n  border: 2px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 2px solid transparent;\n  content: '';\n  height: 18px;\n  left: calc(50% - 9px);\n  position: absolute;\n  top: calc(50% - 9px);\n  width: 18px;\n}\n\n@keyframes wm-ab-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""])},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(113),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e,t){return o.default.deps.eventSender.postEvent(e,t)}},762:function(e,t,n){"use strict";(function(e,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(n(767)),u=a(n(113)),i=a(n(333));t.default={init:function(){var t,n=(t=r.mark(function e(t){return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u.default.init(t),i.default.init(),o.default.init();case 3:case"end":return e.stop()}},e,this)}),function(){var n=t.apply(this,arguments);return new e(function(t,r){return function a(o,u){try{var i=n[o](u),c=i.value}catch(e){return void r(e)}if(!i.done)return e.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});t(c)}("next")})});return function(){return n.apply(this,arguments)}}()}}).call(this,n(18).Promise,n(33))},765:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.restoreWindowOpen=function(){i.open&&"function"==typeof i.open&&e(o.default.deps.win,{open:i.open})},t.default=function(){var t=o.default.deps.win,n=t.open;e(i,{open:n}),t.open=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),a=1;t>a;a++)r[a-1]=arguments[a];return n.apply(void 0,[(0,u.resolveVariable)(e)].concat(r))}};var r,a=n(113),o=(r=a)&&r.__esModule?r:{default:r},u=n(332),i={}}).call(this,n(7).assign)},767:function(e,t,n){"use strict";(function(e,r,a){function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){f.default.deps.eventsListener.bind(e,t),h.push({key:e,func:t})}function i(){var t,n,o=this,i=f.default.deps.consts.EVENTS.Launchers.LauncherClicked,c=f.default.getLaunchers(),s=c&&c.reduce(function(t,n){var r,a,o;return e(t,(o=n,(a=n.Id)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r)),t},{});return u(i,(t=a.mark(function e(t,n){var r,u,i,c,l,T,p,h,I,g,y,m,L,R=n.launcherId;return a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r=s[R],!O&&r&&f.default.isValidLauncher(r)){e.next=4;break}return e.abrupt("return");case 4:if(O=!0,R){e.next=7;break}throw new Error("[Integration: launcher click listener] Launcher ID isn't present in data");case 7:if(i=(u={}).botId,c=u.conversationId,p=(l=r.Settings.action).arguments,(T=l.actionType)!==v.ACTION_TYPE_NONE){e.next=27;break}return e.next=12,(0,_.default)();case 12:if(e.t0=e.sent,e.t0){e.next=15;break}e.t0={};case 15:if(I=void 0===(h=e.t0.launchers)?{}:h,-1!==Object.keys(I).map(Number).indexOf(R)){e.next=22;break}return O=!1,e.abrupt("return");case 22:i=(g=I[R]||{}).bot,c=g.conversation,e.next=28;break;case 27:T===v.ACTION_TYPE_ACTION_BOT&&(m=(y=p||{}).actionBotConversationId,i=Number(y.actionBotId),c=Number(m));case 28:return E.default.show(L={id:R,type:A.WM_DEPLOYABLE_IDS.launcher}),e.next=32,S.default.open(L,{botId:i,conversationId:c});case 32:O=!1,e.next=39;break;case 35:e.prev=35,e.t1=e.catch(0),O=!1,d.default.error(e.t1);case 39:case"end":return e.stop()}},e,o,[[0,35]])}),n=function(){var e=t.apply(this,arguments);return new r(function(t,n){return function a(o,u){try{var i=e[o](u),c=i.value}catch(e){return void n(e)}if(!i.done)return r.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});t(c)}("next")})},function(){return n.apply(this,arguments)}))}function c(){return u(f.default.deps.consts.EVENTS.WalkmeReady,function(){try{!function(){var e=window.location.search,t=/\?walkme=(\d+)-(\d+)(-(\d+))?/.exec(e);if(t){var n=l(t,5),r=n[1],a=n[2],o=n[4];if(Number(r)===A.ACTIONBOT_DEPLOYABLE_TYPE&&a){var u=s({botId:Number(a)},o&&{conversationId:Number(o)}),i={id:[r,a,o].filter(Boolean).join("-"),type:A.WM_DEPLOYABLE_IDS.permalink};S.default.open(i,u)}}}()}catch(e){d.default.error(e)}})}Object.defineProperty(t,"__esModule",{value:!0}),t.addWalkMeApi=void 0;var s=e||function(e){for(var t=1;arguments.length>t;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=o(n(134)),f=o(n(113)),_=o(n(768)),S=o(n(334)),E=o(n(333)),T=o(n(770)),A=n(62),v=n(27),p=n(765),O=!1,h=[],I=t.addWalkMeApi=function(){e(f.default.deps.classWalkMeAPI,{actionbot:{open:function(e){return S.default.open({type:A.WM_DEPLOYABLE_IDS.api},{botId:e.botId,conversationId:e.conversationId,globalConfig:e.globalConfig})},close:function(){return S.default.close()}}})};t.default={init:function(){T.default.init(),I(),c(),i(),u(f.default.deps.consts.EVENTS.BeforeWalkmeRemoved,function(){try{S.default.destroy();try{f.default.deps.wmjQuery('script[src*="chatbot"], script[src*="local"]').remove()}catch(e){}if(E.default.removeAll(),h&&h.length)for(;h.length;){var e=h.pop();f.default.deps.eventsListener.unbind(e.key,e.func)}["_walkmeABWebpackJP_latest","__wm-ab-core-js_shared__latest"].forEach(function(e){window.hasOwnProperty(e)&&delete window[e]}),window.open&&"function"==typeof window.open&&window.open.toString().indexOf("resolveVariable")>-1&&(0,p.restoreWindowOpen)()}catch(e){d.default.error(e)}}),u("wmActionBotRun",function(e){S.default.open({type:A.WM_DEPLOYABLE_IDS.event},e)})}}}).call(this,n(7).assign,n(18).Promise,n(33))},768:function(e,t,n){"use strict";(function(e,r){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o,u,i=a(n(769)),c=a(n(113)),s=void 0,l=(o=r.mark(function e(){var t,n,a;return r.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=9;break}return t=c.default.getUserGuid(),n=c.default.getEnvId(),a=c.default.getSettingsFile(),e.next=6,(0,i.default)({url:"/chatbot/settings",baseURL:a.PlayerApiServer,headers:{"x-wmab-wmenv":n},params:{userGuid:t}});case 6:s=e.sent.data;case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}},e,void 0)}),u=function(){var t=o.apply(this,arguments);return new e(function(n,r){return function a(o,u){try{var i=t[o](u),c=i.value}catch(e){return void r(e)}if(!i.done)return e.resolve(c).then(function(e){a("next",e)},function(e){a("throw",e)});n(c)}("next")})},function(){return u.apply(this,arguments)});t.default=l}).call(this,n(18).Promise,n(33))},769:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(113),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(t){var n=t.type,r=void 0===n?"GET":n,a=t.baseURL,u=t.url,i=t.headers,c=t.params;return new e(function(e,t){try{o.default.deps.wmAjax.execute({type:r,url:a+u,data:c,dataType:"json",headers:i,success:function(t){e({data:t})},error:function(){for(var e=arguments.length,n=Array(e),r=0;e>r;r++)n[r]=arguments[r];t(n)}})}catch(e){t(e)}})}}).call(this,n(18).Promise)},770:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(n(771)),o=r(n(772)),u=r(n(773)),i=r(n(774)),c=r(n(765));t.default={init:function(){(0,a.default)(),(0,o.default)(),(0,u.default)(),(0,i.default)(),(0,c.default)()}}},771:function(e,t,n){"use strict";(function(e){function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var t=a.default.deps.actionStagesFactory,n=t.createActionStage;t.createActionStage=function(t){for(var r=arguments.length,a=Array(r>1?r-1:0),i=1;r>i;i++)a[i-1]=arguments[i];try{if(t&&"Redirect"===t.ActionType&&t.Settings&&t.Settings.actionArgs&&t.Settings.actionArgs.url){var c=t.Settings.actionArgs.url;(0,o.isTextHasVariable)(c)&&e(t.Settings.actionArgs,{url:(0,o.resolveVariablesInText)(c)})}}catch(e){u.default.error(e)}return n.apply(void 0,[t].concat(a))}};var a=r(n(113)),o=n(332),u=r(n(134))}).call(this,n(7).assign)},772:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=function(){var e=o.default.deps.clientStorageManager,t=e.getData;e.getData=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];try{if((0,u.isTextHasVariable)(e)){var l=(0,u.extractVariableName)(e),d=(0,u.parseVarName)(l),f=a(d,2),_=f[1],S=i.default.getItem(f[0]);if(S&&S.value)return(0,c.default)(S,_)}}catch(e){s.default.error(e)}return t.apply(void 0,[e].concat(r))}};var o=r(n(113)),u=n(332),i=r(n(238)),c=r(n(237)),s=r(n(134))},773:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=o.default.deps.inputGenerator,t=e.text,n=e.selectByText;e.text=function(e,n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;r>o;o++)a[o-2]=arguments[o];return t.apply(void 0,[e,(0,u.resolveVariable)(n)].concat(a))},e.selectByText=function(e,t){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;r>o;o++)a[o-2]=arguments[o];return n.apply(void 0,[e,(0,u.resolveVariable)(t)].concat(a))}};var r,a=n(113),o=(r=a)&&r.__esModule?r:{default:r},u=n(332)},774:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=o.default.deps.jQuerySelectorRunner,t=e.run;e.run=function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;n>a;a++)r[a-1]=arguments[a];return t.apply(void 0,[(0,u.resolveVariable)(e)].concat(r))}};var r,a=n(113),o=(r=a)&&r.__esModule?r:{default:r},u=n(332)}}]);