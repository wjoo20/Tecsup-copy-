(function framework7ComponentLoader(e,a){void 0===a&&(a=!0);document,window;var t=e.$,i=(e.Template7,e.utils),n=(e.device,e.support),s=e.Class;e.Modal,e.ConstructorMethods,e.ModalMethods;function l(e){var a=e.app;if(!e.resizableInitialized){i.extend(e,{resizable:!0,resizableWidth:null,resizableInitialized:!0});var s=t("html"),l=e.$el,o=e.$backdropEl,r=e.side,p=e.effect;if(l){var d,h,c,f,v,u,b,m,g={};0===e.$el.find(".panel-resize-handler").length&&e.$el.append('<div class="panel-resize-handler"></div>'),e.$resizeHandlerEl=e.$el.children(".panel-resize-handler"),l.addClass("panel-resizable");var w=!!n.passiveListener&&{passive:!0};e.$el.on(a.touchEvents.start,".panel-resize-handler",k,w),a.on("touchmove:active",y),a.on("touchend:passive",z),a.on("resize",B),e.on("beforeOpen",B),e.once("panelDestroy",(function(){l.removeClass("panel-resizable"),e.$resizeHandlerEl.remove(),e.$el.off(a.touchEvents.start,".panel-resize-handler",k,w),a.off("touchmove:active",y),a.off("touchend:passive",z),a.off("resize",B),e.off("beforeOpen",B)}))}}function C(e){if(!e)return null;if(e.indexOf("%")>=0||e.indexOf("vw")>=0)return parseInt(e,10)/100*a.width;var t=parseInt(e,10);return Number.isNaN(t)?null:t}function k(a){e.resizable&&l.hasClass("panel-resizable")&&(g.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,g.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY,h=!1,d=!0,u=C(l.css("min-width")),b=C(l.css("max-width")),m=l.hasClass("panel-in-breakpoint"))}function y(i){if(d){var n="touchmove"===i.type?i.targetTouches[0].pageX:i.pageX;h||(f=l[0].offsetWidth,l.transition(0),l.addClass("panel-resizing"),s.css("cursor","col-resize"),("reveal"===p||m)&&(v=t(e.getViewEl())),"reveal"!==p||m||(o.transition(0),v.transition(0))),h=!0,i.preventDefault(),c=n-g.x;var w="left"===r?f+c:f-c;u&&!Number.isNaN(u)&&(w=Math.max(w,u)),b&&!Number.isNaN(b)&&(w=Math.min(w,b)),w=Math.min(Math.max(w,0),a.width),e.resizableWidth=w,l[0].style.width=w+"px","reveal"!==p||m?m&&v&&v.css("margin-"+r,w+"px"):(v&&v.transform("translate3d("+("left"===r?w:-w)+"px, 0, 0)"),o&&o.transform("translate3d("+("left"===r?w:-w)+"px, 0, 0)")),l.trigger("panel:resize",w),e.emit("local::resize panelResize",e,w)}}function z(){if(t("html").css("cursor",""),!d||!h)return d=!1,void(h=!1);d=!1,h=!1,s[0].style.setProperty("--f7-panel-"+r+"-width",e.resizableWidth+"px"),l[0].style.width="","reveal"!==p||m||(v.transform(""),o.transform("")),l.removeClass("panel-resizing"),i.nextFrame((function(){l.transition(""),"reveal"===p&&(o.transition(""),v&&v.transition(""))}))}function B(){e.opened&&e.resizableWidth&&(u=C(l.css("min-width")),b=C(l.css("max-width")),u&&!Number.isNaN(u)&&e.resizableWidth<u&&(e.resizableWidth=Math.max(e.resizableWidth,u)),b&&!Number.isNaN(b)&&e.resizableWidth>b&&(e.resizableWidth=Math.min(e.resizableWidth,b)),e.resizableWidth=Math.min(Math.max(e.resizableWidth,0),a.width),s[0].style.setProperty("--f7-panel-"+r+"-width",e.resizableWidth+"px"))}}var o=function(e){function a(a,n){void 0===n&&(n={});var s=i.extend({on:{}},a.params.panel,n);e.call(this,s,[a]);var l;if(this.params=s,this.$containerEl=this.params.containerEl?t(this.params.containerEl).eq(0):a.root,this.containerEl=this.$containerEl[0],this.params.el?l=t(this.params.el).eq(0):this.params.content&&(l=t(this.params.content).filter((function(e,a){return 1===a.nodeType})).eq(0)),0===l.length)return this;if(l[0].f7Panel)return l[0].f7Panel;l[0].f7Panel=this;var o,r=this.params,p=r.side,d=r.effect,h=r.resizable;return void 0===p&&(p=l.hasClass("panel-left")?"left":"right"),void 0===d&&(d=l.hasClass("panel-cover")?"cover":"reveal"),void 0===h&&(h=l.hasClass("panel-resizable")),this.params.backdrop&&this.params.backdropEl?o=t(this.params.backdropEl):this.params.backdrop&&0===(o=this.$containerEl.children(".panel-backdrop")).length&&(o=t('<div class="panel-backdrop"></div>'),this.$containerEl.prepend(o)),i.extend(this,{app:a,side:p,effect:d,resizable:h,$el:l,el:l[0],opened:!1,$backdropEl:o,backdropEl:o&&o[0]}),this.useModules(),this.init(),this}return e&&(a.__proto__=e),a.prototype=Object.create(e&&e.prototype),a.prototype.constructor=a,a.prototype.getViewEl=function(){return this.$containerEl.children(".views").length>0?this.$containerEl.children(".views")[0]:this.$containerEl.children(".view")[0]},a.prototype.enableVisibleBreakpoint=function(){return this.visibleBreakpointDisabled=!1,this.setVisibleBreakpoint(),this},a.prototype.disableVisibleBreakpoint=function(){return this.visibleBreakpointDisabled=!0,this.setVisibleBreakpoint(),this},a.prototype.toggleVisibleBreakpoint=function(){return this.visibleBreakpointDisabled=!this.visibleBreakpointDisabled,this.setVisibleBreakpoint(),this},a.prototype.setVisibleBreakpoint=function(e){var a,i,n;void 0===e&&(e=!0);var s=this,l=s.app;s.visibleBreakpointResizeHandler||(s.visibleBreakpointResizeHandler=function(){s.setVisibleBreakpoint()},l.on("resize",s.visibleBreakpointResizeHandler));var o=s.side,r=s.$el,p=s.params,d=s.visibleBreakpointDisabled,h=p.visibleBreakpoint,c=t(s.getViewEl()),f=r.hasClass("panel-in-breakpoint");l.width>=h&&null!=h&&!d?f?c.css(((i={})["margin-"+o]=r.width()+"px",i)):(t("html").removeClass("with-panel-"+o+"-reveal with-panel-"+o+"-cover with-panel"),r.addClass("panel-in-breakpoint").removeClass("panel-in panel-in-collapsed"),s.onOpen(!1),s.onOpened(),c.css(((a={})["margin-"+o]=r.width()+"px",a)),l.allowPanelOpen=!0,e&&(s.emit("local::breakpoint panelBreakpoint",s),s.$el.trigger("panel:breakpoint"))):f&&(r.removeClass("panel-in-breakpoint panel-in"),s.onClose(),s.onClosed(),c.css(((n={})["margin-"+o]="",n)),e&&(s.emit("local::breakpoint panelBreakpoint",s),s.$el.trigger("panel:breakpoint")))},a.prototype.enableCollapsedBreakpoint=function(){return this.collapsedBreakpointDisabled=!1,this.setCollapsedBreakpoint(),this},a.prototype.disableCollapsedBreakpoint=function(){return this.collapsedBreakpointDisabled=!0,this.setCollapsedBreakpoint(),this},a.prototype.toggleCollapsedBreakpoint=function(){return this.collapsedBreakpointDisabled=!this.collapsedBreakpointDisabled,this.setCollapsedBreakpoint(),this},a.prototype.setCollapsedBreakpoint=function(e){var a=this,i=a.app;a.collapsedBreakpointResizeHandler||(a.collapsedBreakpointResizeHandler=function(){a.setCollapsedBreakpoint()},i.on("resize",a.collapsedBreakpointResizeHandler));var n=a.side,s=a.$el,l=a.params,o=a.collapsedBreakpointDisabled;if(!s.hasClass("panel-in-breakpoint")){var r=l.collapsedBreakpoint,p=s.hasClass("panel-in-collapsed");i.width>=r&&null!=r&&!o?p||(t("html").removeClass("with-panel-"+n+"-reveal with-panel-"+n+"-cover with-panel"),s.addClass("panel-in-collapsed").removeClass("panel-in"),a.collapsed=!0,i.allowPanelOpen=!0,e&&(a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint",a),a.$el.trigger("panel:collapsedbreakpoint"))):p&&(s.removeClass("panel-in-collapsed panel-in"),a.collapsed=!1,e&&(a.emit("local::collapsedBreakpoint panelCollapsedBreakpoint",a),a.$el.trigger("panel:collapsedbreakpoint")))}},a.prototype.enableResizable=function(){return this.resizableInitialized?(this.resizable=!0,this.$el.addClass("panel-resizable")):l(this),this},a.prototype.disableResizable=function(){return this.resizable=!1,this.$el.removeClass("panel-resizable"),this},a.prototype.enableSwipe=function(){return this.swipeInitialized?this.swipeable=!0:function(e){var a=e.app;if(!e.swipeInitialized){i.extend(e,{swipeable:!0,swipeInitialized:!0});var n,s,l,o,r,p,d,h,c,f,v,u,b,m=e.params,g=e.$el,w=e.$backdropEl,C=e.side,k=e.effect,y={},z=0;a.on("touchstart:passive",B),a.on("touchmove:active",$),a.on("touchend:passive",x),a.on("gesturestart",E),a.on("gestureend",O),e.on("panelDestroy",(function(){a.off("touchstart:passive",B),a.off("touchmove:active",$),a.off("touchend:passive",x),a.off("gesturestart",E),a.off("gestureend",O)}))}function B(h){if(e.swipeable&&!l&&a.panel.allowOpen&&(m.swipe||m.swipeOnlyClose)&&!s&&!(t(".modal-in:not(.toast):not(.notification), .photo-browser-in").length>0)){var c=(n=a.panel.get("left"===C?"right":"left")||{}).opened&&n.$el&&!n.$el.hasClass("panel-in-breakpoint");if((e.opened||!c)&&(m.swipeOnlyClose||!c)&&(!h.target||"input"!==h.target.nodeName.toLowerCase()||"range"!==h.target.type)&&!(t(h.target).closest(".range-slider, .tabs-swipeable-wrap, .calendar-months, .no-swipe-panel, .card-opened").length>0)&&(y.x="touchstart"===h.type?h.targetTouches[0].pageX:h.pageX,y.y="touchstart"===h.type?h.targetTouches[0].pageY:h.pageY,!m.swipeOnlyClose||e.opened)){if(m.swipeActiveArea&&!e.opened){if("left"===C&&y.x>m.swipeActiveArea)return;if("right"===C&&y.x<a.width-m.swipeActiveArea)return}z=0,b=t(e.getViewEl()),o=!1,s=!0,r=void 0,p=!1,d=i.now(),u=void 0}}}function $(t){if(s&&!l&&!p&&!((z+=1)<2))if(t.f7PreventSwipePanel||a.preventSwipePanelBySwipeBack||a.preventSwipePanel)s=!1;else{var i="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,n="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY;if(void 0===r&&(r=!!(r||Math.abs(n-y.y)>Math.abs(i-y.x))),r)s=!1;else{if(!u){if(u=i>y.x?"to-right":"to-left",m.swipeActiveArea>0&&!e.opened){if("left"===C&&y.x>m.swipeActiveArea)return void(s=!1);if("right"===C&&y.x<a.width-m.swipeActiveArea)return void(s=!1)}if(g.hasClass("panel-in-breakpoint"))return void(s=!1);if("left"===C&&"to-left"===u&&!g.hasClass("panel-in")||"right"===C&&"to-right"===u&&!g.hasClass("panel-in"))return void(s=!1)}var d=e.opened?0:-m.swipeThreshold;"right"===C&&(d=-d),o||(e.opened||(e.insertToRoot(),g.addClass("panel-in-swipe"),w.css("visibility","visible"),g.trigger("panel:swipeopen"),e.emit("local::swipeOpen panelSwipeOpen",e)),v=g[0].offsetWidth,"reveal"===k&&g.hasClass("panel-in-collapsed")&&(v-=parseFloat(b.css("margin-"+C))),g.transition(0)),o=!0,t.preventDefault(),h=i-y.x+d,"right"===C?"cover"===k?((c=h+(e.opened?0:v))<0&&(c=0),c>v&&(c=v)):((c=h-(e.opened?v:0))>0&&(c=0),c<-v&&(c=-v)):((c=h+(e.opened?v:0))<0&&(c=0),c>v&&(c=v));var B=Math.abs(c/v);if("reveal"===k?(m.swipeNoFollow||(b.transform("translate3d("+c+"px,0,0)").transition(0),w.transform("translate3d("+c+"px,0,0)").transition(0)),g.trigger("panel:swipe",Math.abs(c/v)),e.emit("local::swipe panelSwipe",e,Math.abs(c/v))):("left"===C&&(c-=v),m.swipeNoFollow||(g.transform("translate3d("+c+"px,0,0)").transition(0),w.transition(0),f=1-Math.abs(c/v),w.css({opacity:f})),g.trigger("panel:swipe",Math.abs(c/v)),e.emit("local::swipe panelSwipe",e,Math.abs(c/v))),m.swipeNoFollow)(e.opened&&0===B||!e.opened&&1===B)&&(p=!0,x(t))}}}function x(a){if(!s||!o)return s=!1,void(o=!1);var n="gesturestart"===a.type||l;s=!1,o=!1;var r,p=(new Date).getTime()-d,f=(0===c||Math.abs(c)===v)&&!m.swipeNoFollow,u=m.swipeThreshold||0;"swap"===(r=n?"reset":e.opened?"cover"===k?0===c?"reset":p<300&&Math.abs(c)>0?"swap":p>=300&&Math.abs(c)<v/2?"reset":"swap":c===-v?"reset":p<300&&Math.abs(c)>=0||p>=300&&Math.abs(c)<=v/2?"left"===C&&c===v?"reset":"swap":"reset":Math.abs(h)<u?"reset":"cover"===k?0===c||p<300&&Math.abs(c)>0||p>=300&&Math.abs(c)<v/2?"swap":"reset":0===c?"reset":p<300&&Math.abs(c)>0||p>=300&&Math.abs(c)>=v/2?"swap":"reset")&&(e.opened?e.close(!f):e.open(!f));var y=!0;if("reset"===r&&!e.opened)if(f)g.removeClass("panel-in-swipe");else{y=!1;var z="reveal"===k?b:g;t("html").addClass("with-panel-closing"),z.transitionEnd((function(){g.hasClass("panel-in")||(g.removeClass("panel-in-swipe"),t("html").removeClass("with-panel-closing"))}))}"reveal"===k&&i.nextFrame((function(){b.transition(""),b.transform("")})),y&&g.removeClass("panel-in-swipe"),g.transition("").transform(""),w.transform("").transition("").css({opacity:"",visibility:""})}function E(e){l=!0,x(e)}function O(){l=!1}}(this),this},a.prototype.disableSwipe=function(){return this.swipeable=!1,this},a.prototype.onOpen=function(e){void 0===e&&(e=!0);var a=this.app;this.opened=!0,a.panel.allowOpen=!1,this.$el.trigger("panel:beforeopen"),this.emit("local::beforeOpen panelBeforeOpen",this),e&&t("html").addClass("with-panel with-panel-"+this.side+"-"+this.effect),this.$el.trigger("panel:open"),this.emit("local::open panelOpen",this)},a.prototype.onOpened=function(){this.app.panel.allowOpen=!0,this.$el.trigger("panel:opened"),this.emit("local::opened panelOpened",this)},a.prototype.onClose=function(){var e=this.app;this.opened=!1,e.panel.allowOpen=!1,this.$el.trigger("panel:beforeclose"),this.emit("local::beforeClose panelBeforeClose",this),t("html").addClass("with-panel-closing"),t("html").removeClass("with-panel with-panel-"+this.side+"-"+this.effect),this.$el.trigger("panel:close"),this.emit("local::close panelClose",this)},a.prototype.onClosed=function(){var e=this.app;if(e.panel.allowOpen=!0,t("html").removeClass("with-panel-closing"),this.$el.removeClass("panel-out"),this.$backdropEl){var a=e.panel.get(".panel-in");(!a||a&&!a.$backdropEl)&&this.$backdropEl.removeClass("panel-backdrop-in")}this.$el.trigger("panel:closed"),this.emit("local::closed panelClosed",this)},a.prototype.toggle=function(e){void 0===e&&(e=!0);var a=this.params.visibleBreakpoint;return this.app.width>=a&&null!=a?this.toggleVisibleBreakpoint():(this.opened?this.close(e):this.open(e),this)},a.prototype.insertToRoot=function(){var e=this.$el,a=this.$backdropEl,t=this.$containerEl,i=e.parent(),n=e.parents(document).length>0;if(!i.is(t)||e.prevAll(".views, .view").length){var s=t.children(".panel, .views, .view").eq(0),l=t.children(".panel-backdrop").eq(0);s.length?e.insertBefore(s):l?e.insertBefore(l):t.prepend(e),a&&a.length&&(!a.parent().is(t)&&0===a.nextAll(".panel").length||a.parent().is(t)&&0===a.nextAll(".panel").length)&&a.insertBefore(e),this.once("panelClosed",(function(){n?i.append(e):e.remove()}))}},a.prototype.open=function(e){void 0===e&&(e=!0);var a=this,i=a.app;if(!i.panel.allowOpen)return!1;var n=a.effect,s=a.$el,l=a.$backdropEl,o=a.opened;if(!s||s.hasClass("panel-in"))return a;if(a.insertToRoot(),o||s.hasClass("panel-in-breakpoint")||s.hasClass("panel-in"))return!1;var r=i.panel.get(".panel-in");r&&r!==a&&r.close(e),s[e?"removeClass":"addClass"]("not-animated"),s.addClass("panel-in"),l&&(l.addClass("panel-backdrop-in"),l[e?"removeClass":"addClass"]("not-animated")),"cover"===a.effect&&(a._clientLeft=s[0].clientLeft);var p="reveal"===n?s.nextAll(".view, .views").eq(0):s;return e?(l&&l.removeClass("not-animated"),function e(){p.transitionEnd((function(i){t(i.target).is(p)?s.hasClass("panel-out")?a.onClosed():a.onOpened():e()}))}(),s.removeClass("panel-out not-animated").addClass("panel-in"),a.onOpen()):(l&&l.addClass("not-animated"),s.removeClass("panel-out").addClass("panel-in not-animated"),a.onOpen(),a.onOpened()),!0},a.prototype.close=function(e){void 0===e&&(e=!0);var a=this,i=a.effect,n=a.$el,s=a.$backdropEl;if(!a.opened||n.hasClass("panel-in-breakpoint")||!n.hasClass("panel-in"))return a;n[e?"removeClass":"addClass"]("not-animated"),s&&s[e?"removeClass":"addClass"]("not-animated");var l="reveal"===i?n.nextAll(".view, .views").eq(0):n;return e?(l.transitionEnd((function(){n.hasClass("panel-out")?a.onClosed():n.hasClass("panel-in")&&a.onOpened(),t("html").removeClass("with-panel-closing")})),n.removeClass("panel-in").addClass("panel-out"),a.onClose()):(n.addClass("not-animated").removeClass("panel-in").addClass("panel-out"),a.onClose(),a.onClosed()),a},a.prototype.init=function(){void 0!==this.params.visibleBreakpoint&&this.setVisibleBreakpoint(),void 0!==this.params.collapsedBreakpoint&&this.setCollapsedBreakpoint(),this.params.swipe&&this.enableSwipe(),this.resizable&&this.enableResizable()},a.prototype.destroy=function(){var e,a=this,n=a.app;if(a.$el){if(a.emit("local::beforeDestroy panelBeforeDestroy",a),a.$el.trigger("panel:beforedestroy"),a.visibleBreakpointResizeHandler&&n.off("resize",a.visibleBreakpointResizeHandler),a.collapsedBreakpointResizeHandler&&n.off("resize",a.collapsedBreakpointResizeHandler),a.$el.hasClass("panel-in-breakpoint")||a.$el.hasClass("panel-in-collapsed")){var s=t(a.getViewEl());a.$el.removeClass("panel-in-breakpoint panel-in-collapsed panel-in"),s.css(((e={})["margin-"+a.side]="",e)),a.emit("local::breakpoint panelBreakpoint",a),a.$el.trigger("panel:breakpoint")}a.$el.trigger("panel:destroy"),a.emit("local::destroy panelDestroy",a),a.el&&(a.el.f7Panel=null,delete a.el.f7Panel),i.deleteProps(a),a=null}},a}(s),r={name:"panel",params:{panel:{opened:void 0,side:void 0,effect:void 0,resizable:void 0,backdrop:!0,backdropEl:void 0,visibleBreakpoint:void 0,collapsedBreakpoint:void 0,swipe:!1,swipeNoFollow:!1,swipeOnlyClose:!1,swipeActiveArea:0,swipeThreshold:0,closeByBackdropClick:!0,containerEl:void 0}},static:{Panel:o},instance:{panel:{allowOpen:!0}},create:function(){var e=this;i.extend(e.panel,{create:function(a){return new o(e,a)},get:function(e){if(void 0===e&&(e=".panel"),e instanceof o)return e;"left"!==e&&"right"!==e||(e=".panel-"+e);var a=t(e);return 0===a.length||a.length>1?void 0:a[0].f7Panel},destroy:function(a){void 0===a&&(a=".panel");var t=e.panel.get(a);if(t&&t.destroy)return t.destroy()},open:function(a,t){void 0===a&&(a=".panel"),"left"!==a&&"right"!==a||(a=".panel-"+a);var i=e.panel.get(a);return i&&i.open?i.open(t):i?void 0:(i=e.panel.create({el:a})).open(t)},close:function(a,t){void 0===a&&(a=".panel-in"),"left"!==a&&"right"!==a||(a=".panel-"+a);var i=e.panel.get(a);return i&&i.open?i.close(t):i?void 0:(i=e.panel.create({el:a})).close(t)},toggle:function(a,t){void 0===a&&(a=".panel"),"left"!==a&&"right"!==a||(a=".panel-"+a);var i=e.panel.get(a);return i&&i.toggle?i.toggle(t):i?void 0:(i=e.panel.create({el:a})).toggle(t)}})},on:{init:function(){var e=this;t(".panel-init").each((function(a,i){var n=Object.assign({el:i},t(i).dataset()||{});e.panel.create(n)}))},pageInit:function(e){var a=this;e.$el.find(".panel-init").each((function(e,i){var n=Object.assign({el:i},t(i).dataset()||{});a.panel.create(n)}))},pageBeforeRemove:function(e){var a=this;e.$el.find(".panel-init").each((function(e,t){var i=a.panel.get(t);i&&i.destroy&&i.destroy()}))}},vnode:{"panel-init":{insert:function(e){var a=e.elm,i=Object.assign({el:a},t(a).dataset()||{});this.panel.create(i)},destroy:function(e){var a=e.elm,t=this.panel.get(a);t&&t.destroy&&t.destroy()}}},clicks:{".panel-open":function(e,a){void 0===a&&(a={});this.panel.open(a.panel,a.animate)},".panel-close":function(e,a){void 0===a&&(a={});this.panel.close(a.panel,a.animate)},".panel-toggle":function(e,a){void 0===a&&(a={});this.panel.toggle(a.panel,a.animate)},".panel-backdrop":function(){var e=t(".panel-in:not(.panel-out)");if(e.length){var a=e[0]&&e[0].f7Panel;e.trigger("panel:backdrop-click"),a&&a.emit("backdropClick",a),this.emit("panelBackdropClick",a||e[0]),this.params.panel.closeByBackdropClick&&this.panel.close()}}}};if(a){if(e.prototype.modules&&e.prototype.modules[r.name])return;e.use(r),e.instance&&(e.instance.useModuleParams(r,e.instance.params),e.instance.useModule(r))}return r}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
