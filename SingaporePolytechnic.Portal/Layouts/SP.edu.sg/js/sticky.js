window.postPlatformApp.register("sticky",function(k){function g(a){this.attributes=this.getAttributes(a);this.widgetOptions=c.extend(a.widgetOptions||{},d.widgetOptions);this.init();this.initialState=c.extend({},this.attributes);this.initialState.widgetOptions=c.extend({},this.widgetOptions)}var c=k._,d;d={classes:{position:"__pw-position-",buttonPosition:"__pw-posbtnclose-",buttonClose:"__pw-btnclose-",buttonHover:"__pw-hoverbtnclose-",view:"__pw-view-",domNode:"pw-sticky",domNodeHide:"__pw-show-false",
fullHide:"pw-g-hide"},hideOffset:5,attributes:[{id:"position",defaultValue:"left"},{id:"offset",defaultValues:{keyAttribute:"position",values:{top:[0,0],bottom:[0,0],left:[0,0],right:[0,0],"top-right":[0,0],"top-left":[0,0],"bottom-right":[0,0],"bottom-left":[0,0]}},convertType:c.stringToArray.bind(c)},{id:"toggleButton",defaultValue:{show:"always",arrowPosition:"after"}},{id:"openOnInit",defaultValue:"true"}],templates:{domNode:'\x3cdiv id\x3d"{widgetId}"\x3e\x3c/div\x3e\x3cspan class\x3d"pw-sticky__btnclose" role\x3d"button"\x3e\x3c/span\x3e'},
widgetOptions:{popup:{center:!0,overlay:!0},afterShareOptions:{center:!0}}};g.prototype={constructor:g,init:function(){this.widgetId="pw"+c.getGUID().substr(0,10);this.render();this.initToggleButton()},initToggleButton:function(){this.attributes.toggleButton&&(this.buttonNode=c.get("span",this.domNode)[0],c.on(this.buttonNode,"click",this.onClick.bind(this)))},onClick:function(){c.isParentNodeMatch(this.buttonNode,"__pw-show-false")?this.openSticky():this.closeSticky()},openSticky:function(){this.setClassList();
this.convertToSticky()},closeSticky:function(){this.setClassList([d.classes.domNodeHide]);this.hideNodeByPosition()},render:function(){this.domNode=c.createNode("div",{style:{display:"none"},innerHTML:c.t(d.templates.domNode,{widgetId:this.widgetId,hasButton:!!this.attributes.toggleButton})});c.appendTo("body",this.domNode);window.postPlatform.createWidget("#"+this.widgetId,this.widgetOptions);setTimeout(function(){c.cssReady(function(){this.stickyVisibility();this.stickyRendered=!0}.bind(this))}.bind(this),
300)},show:function(){this.setClassList();this.resetStyles();this.convertToSticky()},hide:function(){this.setClassList([d.classes.domNodeHide]);this.resetStyles();this.convertToSticky();this.hideNodeByPosition()},fullHide:function(){this.setClassList([d.classes.fullHide])},update:function(a){this.attributes=this.getAttributes(c.extend(this.attributes,a||{}));this.widgetOptions=c.extend(a?a.widgetOptions:{},d.widgetOptions);window.postPlatform.updateWidget("#"+this.widgetId,this.widgetOptions);this.stickyVisibility()},
stickyVisibility:function(){this.attributes.openOnInit?this.show():this.hide()},reset:function(){this.update(this.initialState)},resetStyles:function(){var a={display:"block"};c.each(this.styles||{},function(b){a[b]=""});c.setStyle(this.domNode,a)},setClassList:function(a){var b=this.attributes.toggleButton,e;b&&(e=[d.classes.buttonPosition+b.arrowPosition,d.classes.buttonHover+("hover"===b.show)]);c.setClass(this.domNode,[d.classes.position+this.attributes.position,d.classes.domNode,d.classes.view+
this.getView(),d.classes.buttonClose+!!b].concat(e||[]).concat(a||[]).join(" "))},getView:function(){return c.get("div.pw-widget.__pw-view-full",this.domNode)[0]?"full":"auto"},convertOffset:function(a,b){return c.isFunction(a)?a(b):a},getSizeWithPx:function(a){return a+"px"},hideNodeByPosition:function(){var a=this.attributes.position.split("-")[0],b=c.getElementSize(this.domNode),e={};switch(a){case "top":case "bottom":e[a]="-"+this.getSizeWithPx(b.height);break;case "left":case "right":e[a]="-"+
this.getSizeWithPx(b.width)}c.setStyle(this.domNode,e)},convertToSticky:function(){var a=this.attributes.position,b=this.attributes.offset,e=this.domNode,d="auto"===this.getView(),f={},h,g,b=this.convertOffset(b,e);h=c.getElementSize(e);g=-Math.round(h.height/2+ +b[1])+"px";h=-Math.round(h.width/2-+b[0])+"px";switch(a){case "left":case "right":f.marginTop=g;f[a]=this.getSizeWithPx(b[0]);f.top="50%";break;case "top":case "bottom":f[a]=this.getSizeWithPx(b[1]);d&&(f.marginLeft=h,f.left="50%");break;
case "top-right":case "top-left":case "bottom-right":case "bottom-left":f[a.split("-")[0]]=this.getSizeWithPx(b[1]),f[a.split("-")[1]]=this.getSizeWithPx(b[0])}c.isEmptyObject(f)||(c.setStyle(e,f),this.styles=f)},getAttributes:function(a){var b={},e,g,f;c.each(d.attributes,function(d){e=d.id;g=d.convertType;f=a[e];c.isUndefined(f)?(b[e]=d.defaultValue,!b[e]&&d.defaultValues&&(b[e]=d.defaultValues.values[b[d.defaultValues.keyAttribute]]),b[e]=g?g(b[e]):b[e]):c.isObject(d.defaultValue)&&!1!==f?b[e]=
c.extend(c.cloneObject(d.defaultValue),f):b[e]=f});return b}};return{stickyInstance:null,hideOn:!1,shouldStickyHide:function(a){a=(c.isObject(a)?a:{}).widgetOptions||{};return!this.hideOn&&a.hideOn===(c.isMobile()?"mobile":"desktop")},renderSticky:function(a){!this.stickyInterval&&this.stickyInstance&&(this.stickyInterval=setInterval(function(){this.stickyInstance.stickyRendered&&(c.doFunction(a),clearInterval(this.stickyInterval),this.stickyInterval=null)}.bind(this),50))},initSticky:function(a){var b=
a?a.options:{};this.shouldStickyHide(b)&&(this.hideOn=!0);this.hideOn||(this.stickyInstance?this.renderSticky(function(){this.stickyInstance.update(b)}.bind(this)):this.stickyInstance=new g(b))},resetSticky:function(){this.renderSticky(function(){this.stickyInstance.reset()}.bind(this))},hideSticky:function(){this.renderSticky(function(){this.stickyInstance.fullHide()}.bind(this))},manageSticky:function(a){!1===a||"false"===a||"hide"===a||this.shouldStickyHide(a)?this.hideSticky():a?this.initSticky({options:a}):
this.resetSticky()},init:function(){c.bindAll(this,["initSticky","resetSticky","hideSticky","manageSticky"]);k.subscribe({"sticky.init":this.initSticky,"sticky.reset":this.resetSticky,"sticky.hide":this.hideSticky,"sticky.manage":this.manageSticky})},destroy:function(){}}});