 
 
 
var SemTagSvcPortalGlobalDynamic={
basePumaResolvedUrl: ''+
''+
'/wps/contenthandler/!ut/p/digest!DV46yigdoXPCQyVPIFyL2g/um/secure/users/profiles?locale=en_US',
availAttribUrl: ''+
''+
'/wps/contenthandler/!ut/p/digest!DV46yigdoXPCQyVPIFyL2g/um/secure/attributes/users?locale=en_US'
};

/* (C) Copyright IBM Corp. 2007  All Rights Reserved.                */
/**
 * This is the JS file for the common semantic tagging service
 */


 










 






 



 
var SemTagSvcPortalGlobal = {
	debug: false,
	trace: false,
	lang: "en",
	bidi: "ltr",
	service: "",
	ifConnUrlExists: "false",
	connUrl: "null",
	isconnServerNew:false,
    contextUrl: "/_layouts/sp.edu.sg/plugins/semanticTag",
	wpsBaseURL: "/wps",
	ptTimeout: 1500,
	preferredImIds: ["X-imn","email","uid","fn"],
	externalServiceEntries:'',
	// for c2a
	c2a_click_for_actions:"Click for Actions",
	// for semtagmenu
	"hover_label_menu": "Click for options",
	"a11y_hover": "more information",
	"a11y_photo": "photo",
	"a11y_close": "close",
	"ally_expandImage" : "Click to hide information",
	"ally_collapsedImage" : "Click to display more information",
	"ally_showMore" : "Show More",
	"ally_showLess" : "Show Less",
	"ally_buisnessCardLabel" : "Business Card",
	"ally_moreAction": "More Actions",
	// For Person card
    "start_chat": "Chat",
    "add_to_contact": "Add as Sametime Contact",
    "send_email": "Send Mail",
    "view_person": "Profile",
    "hover_label_person": "Click here for Person Card",
    "work_location": "person.adr.locality+', '+person.adr.region+' '+person.adr.countryname",
    "specify_email_if_connection": "When Portal is integrated with Connections, Connection Business Card appears only if email is specified",
	// this is for buffering html for atttributes for businesscard
	expandedItems : "ibm-primaryEmail,street,stateOrProvinceName,postalCode,countryName",
	collapsedItems : "ibm-jobTitle,telephoneNumber",
	showDetailsFlag : true,
	isDynamicLoading : false,
	isC2AHandlerRequired : true,
	isPersonCardHandlerRequired : true,
	isActionHandlerRequired : true,
	isParsingRequired : true,
	newSametimeCommunityServer:true,
	getPersonResolverUrl: function(){
		return "?uri=personrecord%3ATOBEREPLACED";
	},
    basePumaResolvedUrl: SemTagSvcPortalGlobalDynamic.basePumaResolvedUrl,
    availAttribUrl: SemTagSvcPortalGlobalDynamic.availAttribUrl
};

SemTagSvcPortalGlobal.service={"entries":[{"id":"com.ibm.portal.action","test":"(globalTestNode.className.match(SemTagSvcPortal.actionRE))","js":"","classnames":[".com\\.ibm\\.portal\\.action"]},{"id":"hcard","test":"(globalTestNode.className.match(SemTagSvcPortal.hcardRE))","js":"/javascript/semanticTagPerson.js","classnames":[".vcard"]},{"id":"sametime","test":"id:hcard","js":"/javascript/semanticTagAwareness.js","classnames":[]},{"id":"c2a","test":"(globalTestNode.className.match(/(^|\\s)c2a:(source|target)(\\s|$)/)) ","js":"/javascript/semanticTagC2A.js","classnames":[".c2a\\:source",".c2a\\:target"]}]};
var externalEntries;
try{
if(SemTagSvcPortalGlobal.externalServiceEntries!=null&&SemTagSvcPortalGlobal.externalServiceEntries.length>0){
externalEntries=eval(" ("+SemTagSvcPortalGlobal.externalServiceEntries+")");
if(SemTagSvcPortalGlobal.debug){
console.log("Object got is:"+externalEntries);
}
if(SemTagSvcPortalGlobal.debug){
console.log("SemTagSvcPortalGlobal.service.entries is:"+SemTagSvcPortalGlobal.service.entries+": before merge"+":"+externalEntries+":"+SemTagSvcPortalGlobal.externalServiceEntries+":");
}
SemTagSvcPortalGlobal.service.entries=SemTagSvcPortalGlobal.service.entries.concat(externalEntries);
if(SemTagSvcPortalGlobal.debug){
console.log("SemTagSvcPortalGlobal.service.entries is:"+SemTagSvcPortalGlobal.service.entries+": after merge");
}
}else{
if(SemTagSvcPortalGlobal.debug){
console.log("No external service entry exists hence no change"+SemTagSvcPortalGlobal.service.entries);
}
}
}
catch(e){
if(SemTagSvcPortalGlobal.debug){
console.error("Error occured doing eval on:"+SemTagSvcPortalGlobal.externalServiceEntries+":"+e);
}
}


var SemTagSvcPortal={debug:SemTagSvcPortalGlobal.debug,trace:SemTagSvcPortalGlobal.trace,version:"1.0",lang:SemTagSvcPortalGlobal.lang,bidi:SemTagSvcPortalGlobal.bidi,tagScope:["*"],service:SemTagSvcPortalGlobal.service,scripts:new Array(),actionRegistry:null,refcntAttr:"semtag_refcnt",hoverIdPrefix:"semtag_hover_",hoverIdx:0,liveElemPrefix:"semtag_live_",reMap:new Array(),actionRE:new RegExp("(^|\\s)com.ibm.portal.action(\\s|$)"),hcardRE:new RegExp("(^|\\s)vcard(\\s|$)"),specialMenuProviders:new Array(),parseElem:null,availAttribStr:"",ifConnUrlExists:SemTagSvcPortalGlobal.ifConnUrlExists,connUrl:SemTagSvcPortalGlobal.connUrl,isconnServerNew:SemTagSvcPortalGlobal.isconnServerNew,sametimeSTProxy:(typeof stproxy!=="undefined"),sametimeSTLinks:((typeof stproxy==="undefined")&&(typeof prepareSametimeLink!=="undefined")),sametimeNotIntegrated:((typeof stproxy==="undefined")&&(typeof prepareSametimeLink==="undefined")),isEnablerObjectAvailable:(typeof com!=="undefined")&&(typeof com.ibm!=="undefined")&&(typeof com.ibm.mashups!=="undefined"),svcEntryPersonCard:null,isSizzleAvailable:((typeof i$!=="undefined")&&(typeof i$.query==="function")),DELAY:10,init:function(_1){
var _2=SemTagSvcPortal.DELAY;
if(SemTagSvcPortal.debug){
console.log("inside init of SemtagSvc:");
}
if(SemTagSvcPortalGlobal.isParsingRequired===false){
SemTagSvcPortal.svcEntryPersonCard=SemTagSvcPortal.service.entries[1];
if(SemTagSvcPortal.debug){
console.log("SemTagSvcPortal.svcEntryPersonCard.nodes is:"+SemTagSvcPortal.svcEntryPersonCard.nodes);
}
if(!SemTagSvcPortal.svcEntryPersonCard.nodes){
SemTagSvcPortal.svcEntryPersonCard.nodes=[];
}
if(SemTagSvcPortal.debug){
console.log("After SemTagSvcPortal.svcEntryPersonCard.nodes is:"+SemTagSvcPortal.svcEntryPersonCard.nodes);
}
}
var _3=SemTagSvcPortal.isEnablerObjectAvailable;
SemTagSvcPortal.isSizzleAvailable=((typeof i$!=="undefined")&&(typeof i$.query==="function"));
if(SemTagSvcPortal.debug){
console.log("Enabler object got is:"+_3+" And isSizzleAvailable is "+SemTagSvcPortal.isSizzleAvailable);
}
if(SemTagSvcPortal.isSizzleAvailable===true||_3===false){
if(SemTagSvcPortal.debug){
console.log("inside init of SemtagSvc for non csa2.theme since either sizzler is available and enabler is not");
}
SemTagSvcPortal.parseElem=SemTagSvcPortal.getElementFromEvent(_1);
window.setTimeout(SemTagSvcPortal.parseDom,SemTagSvcPortal.DELAY);
}else{
if(SemTagSvcPortal.debug){
console.log("inside init of SemtagSvc for csa2.theme as Sizzle is not available while enabler is");
}
var _4=SemTagSvcPortal.service.entries;
if(SemTagSvcPortal.debug){
console.log("In case of csa2.theme"+(_4?_4.length:0));
}
if(SemTagSvcPortalGlobal.isDynamicLoading){
for(var k=0;k<_4.length;k++){
var _5=_4[k];
if(SemTagSvcPortal.debug){
console.log("Calling SemTagSvcPortal.loadScript for:"+_5.js+":"+_5.id);
}
if(_5.id==="hcard"){
SemTagSvcPortal.loadScript("/javascript/attributes.js");
SemTagSvcPortal.loadScript("/javascript/semanticTagMenu.js");
}
SemTagSvcPortal.loadScript(_5.js);
}
}
}
if(SemTagSvcPortalGlobal.isActionHandlerRequired){
SemTagSvcPortal.setCallback("com.ibm.portal.action",SemTagSvcPortal.processActions);
}
if(!SemTagSvcPortalGlobal.isDynamicLoading&&SemTagSvcPortalGlobal.isPersonCardHandlerRequired){
window.setTimeout(SemTagMenu.init,_2);
}
},loadConnScript:function(){
var _6=document.createElement("script");
var _7=SemTagSvcPortal.connUrl;
var _8=_7;
_8=_7+"/profiles/portalJS/portalBizCard.js";
_8+=(_8.indexOf("?")==-1)?"?":"&";
_8+="lang="+SemTagSvcPortal.lang;
_6.src=_8;
try{
document.body.insertBefore(_6,document.body.firstChild);
}
catch(e){
alert("Svc.loadConnScript caught: "+e);
}
},watchEvent:function(_9,_a,_b,_c){
try{
if(_9.addEventListener){
_9.addEventListener(_a,_b,_c);
}else{
if(_9.attachEvent){
_9.attachEvent("on"+_a,_b);
}
}
}
catch(e){
if(SemTagSvcPortal.debug){
alert("Svc.watchEvent caught: "+e);
}
}
},clearEventWatch:function(_d,_e,_f,_10){
try{
if(_d.removeEventListener){
_d.removeEventListener(_e,_f,_10);
}else{
if(_d.detachEvent){
_d.detachEvent("on"+_e,_f);
}
}
}
catch(e){
if(SemTagSvcPortal.debug){
alert("Svc.clearEventWatch caught: "+e);
}
}
},parseDomUsingMashupHandlerSingleNode:function(_11,_12){
if(SemTagSvcPortal.debug){
console.log("Inside parseDomUsingMashupHandlerSingleNode :"+_11+":"+_12);
}
if(SemTagSvcPortal.isSizzleAvailable===true){
if(SemTagSvcPortal.debug){
console.log("Inside parseDomUsingMashupHandlerSingleNode returning because Sizzle is available:"+SemTagSvcPortal.isSizzleAvailable);
}
return false;
}
if(SemTagSvcPortalGlobal.isParsingRequired===false){
if(SemTagSvcPortal.debug){
console.log("Inside parseDomUsingMashupHandlerSingleNode returning because SemTagSvcPortalGlobal.isParsingRequired is:"+SemTagSvcPortalGlobal.isParsingRequired);
}
return false;
}
var _13=SemTagSvcPortal.getService(_12);
if(!_13.nodes){
_13.nodes=[];
}else{
for(var k=0;k<_13.nodes.length;k++){
_13.nodes.pop();
}
}
_13.nodes.push(_11);
if(SemTagSvcPortal.debug){
console.log("parseDomUsingMashupHandlerSingleNode entry.callback got is:"+_13.callback+":"+_13.id+":"+_13.nodes.length+":"+(_13.id=="hcard"));
}
if(_13.callback){
_13.callback.call(this);
}
if(_13.id==="hcard"){
var _14=SemTagSvcPortal.getService("sametime");
if(SemTagSvcPortal.debug){
console.log("Entry for sametime got is:"+_14);
}
_14.callback.call(this);
}
},parseDomUsingMashupHandler:function(_15,_16){
if(SemTagSvcPortal.debug){
console.log("Inside parseDomUsingMashupHandler :"+_15+":"+_16);
}
if(SemTagSvcPortal.isSizzleAvailable===true){
if(SemTagSvcPortal.debug){
console.log("Commneted Inside parseDomUsingMashupHandler returning because Sizzle is available:"+SemTagSvcPortal.isSizzleAvailable);
}
}
if(SemTagSvcPortalGlobal.isParsingRequired===false){
if(SemTagSvcPortal.debug){
console.log("Inside parseDomUsingMashupHandler returning because SemTagSvcPortalGlobal.isParsingRequired is:"+SemTagSvcPortalGlobal.isParsingRequired);
}
return false;
}
var _17=SemTagSvcPortal.getService(_16);
if(_16==="com.ibm.portal.action"){
SemTagSvcPortal.setCallback(_16,SemTagSvcPortal.processActions);
}
if(!_17.nodes){
_17.nodes=[];
}
for(var len=0;len<_15.length;len++){
_17.nodes.push(_15[len]);
}
if(SemTagSvcPortal.debug){
console.log("parseDomUsingMashupHandler entry.callback got is:"+_17.callback+":"+_17.id+":"+_17.nodes.length+":"+(_17.id=="hcard"));
}
if(_17.callback){
_17.callback.call(this);
}
SemTagSvcPortal.loadScript(_17.js);
try{
var _18=SemTagSvcPortal.service.entries;
for(var k=0;k<_18.length;k++){
var _19=_18[k];
if(SemTagSvcPortal.debug){
console.log("entryTemp.callback got is:"+_19.id+":"+_19.nodes+":"+_19.js+":And original entry id is:"+_17.id);
}
var _1a=false;
if(_19.id===_17.id){
continue;
}
if(_19.test&&_19.test.match(/^id:/)){
var _1b=_19.test.substr(3);
if(_1b!=_17.id){
continue;
}
if(SemTagSvcPortal.debug){
console.log("svcName got is:"+_1b);
}
var _15=SemTagSvcPortal.getNodes(_1b);
if(SemTagSvcPortal.debug){
console.log("nodes for "+_1b+" got is:"+_15+":"+_15.length);
}
if(_15&&0<_15.length){
_1a=true;
}
}
if(_1a){
if(SemTagSvcPortalGlobal.isDynamicLoading){
SemTagSvcPortal.loadScript(_19.js);
}
}
if(_19.callback){
_19.callback.call(this);
}
}
}
catch(e){
if(SemTagSvcPortal.debug){
console.error("Exception occured while doing match of services in SemTagSvcPortal.parseDonMashup"+e);
}
}
},parseDom:function(_1c,_1d){
if(SemTagSvcPortal.debug){
console.log("inside parseDom of SemtagSvc");
}
if(SemTagSvcPortalGlobal.isParsingRequired===false){
if(SemTagSvcPortal.debug){
console.log("Inside parseDom returning because SemTagSvcPortalGlobal.isParsingRequired is:"+SemTagSvcPortalGlobal.isParsingRequired);
}
return false;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("parseDom("+_1c+","+_1d+")");
}
if(!_1d&&_1c){
_1d=SemTagSvcPortal.getElementFromEvent(_1c);
}
if(!_1d&&SemTagSvcPortal.parseElem){
_1d=SemTagSvcPortal.parseElem;
}else{
if(!_1d){
_1d=document;
}else{
if(typeof _1d=="string"){
_1d=document.getElementById(_1d);
}
}
}
var _1e=SemTagSvcPortal.service.entries;
for(var j=0;j<_1e.length;j++){
var _1f=_1e[j];
if(!_1f.nodes){
_1f.nodes=[];
}else{
if(_1d==document){
while(0<_1f.nodes.length){
_1f.nodes.pop();
}
}
}
}
var _20=new Date().getTime();
if(SemTagSvcPortal.isSizzleAvailable===false){
SemTagSvcPortal.traverseNodes(_1d);
var _21=new Date().getTime();
}else{
_20=new Date().getTime();
for(var k=0;k<_1e.length;k++){
var _1f=_1e[k];
if(_1f.classnames==null||_1f.classnames==="undefined"||_1f.classnames.length<1){
if(SemTagSvcPortal.trace){
console.info("For service entry:"+_1f.id+": selector not defined to skipping");
}
continue;
}
if(SemTagSvcPortal.trace){
console.log("Type of classnames is:"+typeof _1f.classnames);
}
if(typeof _1f.classnames==="string"){
if(SemTagSvcPortal.trace){
console.info("For service entry:"+_1f.id+": selector defined is string so skipping"+typeof _1f.classnames);
}
continue;
}
if(SemTagSvcPortal.trace){
console.info(" For service entry:"+_1f.id+":"+_1f.classnames.join(","));
}
var _22;
_22=i$.query(_1f.classnames.join(","),_1d,_1f.nodes);
if(_1f.nodes.length!=_22.length){
if(SemTagSvcPortal.trace){
console.info("How is this possible");
}
}
if(SemTagSvcPortal.trace){
console.log("Length are "+_1f.nodes.length+":"+_22.length);
}
}
_21=new Date().getTime();
if(SemTagSvcPortal.trace){
console.info("Sizzle parse&test: "+(_21-_20));
}
}
for(var k=0;k<_1e.length;k++){
var _1f=_1e[k];
var _23=false;
if(0<_1f.nodes.length){
_23=true;
}else{
if(_1f.test&&_1f.test.match(/^id:/)){
var _24=_1f.test.substr(3);
var _25=SemTagSvcPortal.getNodes(_24);
if(_25&&0<_25.length){
_23=true;
}
}
}
if(_23){
if(SemTagSvcPortalGlobal.isDynamicLoading){
if(_1f.id=="hcard"){
SemTagSvcPortal.loadScript("/javascript/attributes.js");
SemTagSvcPortal.loadScript("/javascript/semanticTagMenu.js");
}
if(SemTagSvcPortal.trace){
console.log("Type of entry.js is :"+typeof _1f.js);
}
if(typeof _1f.js==="string"){
SemTagSvcPortal.loadScript(_1f.js);
}
}
}
if(SemTagSvcPortal.debug){
console.log("entry.callback got is:"+_1f.id+":"+_1f.nodes);
}
if(_1f.callback){
_1f.callback.call(_1f.nodes);
}
}
SemTagSvcPortal.parseElem=null;
},traverseNodes:function(_26){
SemTagSvcPortal.traverse_children(_26);
},traverse_tagscope:function(_27){
var _28=SemTagSvcPortal.service.entries;
var _29=_27.getElementsByTagName(SemTagSvcPortal.tagScope);
for(var i=0;i<_29.length;i++){
var _27=_29[i];
for(var j=0;j<_28.length;j++){
var _2a=_28[j];
if(!_2a.nodes){
_2a.nodes=new Array();
}
if(eval(_2a.test)){
_2a.nodes.push(_27);
}
}
}
},traverse_children:function(_2b){
SemTagSvcPortal.testNode(_2b);
var _2c=(_2b&&_2b.childNodes)?_2b.childNodes:null;
if(SemTagSvcPortalGlobal.isPersonCardHandlerRequired&&_2b&&_2b.tagName&&_2b.tagName=="IFRAME"){
try{
if(typeof ActiveXObject!="undefined"){
var _2d=document.frames[_2b.id].document;
if(_2d){
_2c=_2d.childNodes;
}
}else{
if(_2b.contentDocument&&_2b.contentDocument.childNodes){
_2c=_2b.contentDocument.childNodes;
}
}
}
catch(e){
_2c=null;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("IFRAME(id="+_2b.id+",children="+(_2c?_2c.length:"is null")+")");
}
if(_2c&&0<_2c.length){
var _2e=SemTagMenu.includeCSS(_2c[0].parentNode);
if(_2e){
SemTagSvcPortal.watchEvent(_2b,"load",SemTagSvcPortal.parseDom,false);
SemTagMenu.registerMenuEventHandlers(_2c[0].parentNode);
}
}
}
if(_2c==null||_2c=="undefined"){
return;
}
for(var i=0;i<_2c.length;i++){
SemTagSvcPortal.traverse_children(_2c[i]);
}
},testNode:function(_2f){
globalTestNode=_2f;
if(_2f==null||_2f.className==null||_2f.className=="undefined"||_2f.tagName==null||_2f.tagName=="undefined"){
return;
}
var _30=SemTagSvcPortal.service.entries;
for(var j=0;j<_30.length;j++){
var _31=_30[j];
if(_31.test&&!_31.test.match(/^id:/)&&eval(_31.test)){
if(!_2f.alreadyadded){
_2f.alreadyadded=true;
_31.nodes.push(_2f);
}
}
}
},getService:function(_32){
var _33=SemTagSvcPortal.service.entries;
for(var i=0;i<_33.length;i++){
var _34=_33[i];
if(_34.id==_32){
return _34;
}
}
},setSemanticTagValue:function(_35,_36,_37){
if(!_36.semTagValues){
_36.semTagValues={};
}
_36.semTagValues[_35]=_37;
},getSemanticTagValues:function(_38){
return _38.semTagValues;
},getNodes:function(_39){
var _3a=SemTagSvcPortal.getService(_39);
if(SemTagSvcPortal.debug){
console.log("Inside SemTagSvcPortal.getNodes for:"+_39);
}
if(_3a&&_3a.test&&_3a.test.match(/^id:/)){
_3a=SemTagSvcPortal.getService(_3a.test.substr(3));
}
if(SemTagSvcPortal.debug){
console.log("Inside SemTagSvcPortal.getNodes for:"+_39+"and service  is:"+_3a);
}
if(_3a){
if(SemTagSvcPortal.debug){
console.log("Inside SemTagSvcPortal.getNodes for:"+_39+"and service.nodes  is:"+_3a.nodes);
}
}
return _3a?_3a.nodes:null;
},setCallback:function(_3b,_3c){
var _3d=SemTagSvcPortal.getService(_3b);
if(_3d){
_3d.callback=_3c;
if(SemTagSvcPortal.debug){
console.log("Callback setting for :"+_3b);
}
if(SemTagSvcPortal.debug){
console.log("Callback set for :"+_3d.id);
}
}else{
if(SemTagSvcPortal.debug){
console.log("Did not get service for :"+_3b);
}
}
},loadScript:function(_3e,_3f){
if(!_3e||_3e==""){
return;
}
if(_3f=="undefined"||_3f==null){
_3f=false;
}
if(!SemTagSvcPortal.scripts[_3e]){
SemTagSvcPortal.scripts[_3e]=true;
var _40=document.createElement("script");
var url=_3e.match(/^http/)?_3e:SemTagSvcPortalGlobal.contextUrl+_3e;
url+=(url.indexOf("?")==-1)?"?":"&";
url+="language="+SemTagSvcPortal.lang;
_40.src=url;
if(SemTagSvcPortal.debug){
console.log("URL in LOADSCRIPT GOT IS :"+url);
}
if(SemTagSvcPortalGlobal.isDynamicLoading||_3f){
document.body.insertBefore(_40,document.body.firstChild);
}
}
},setSpecialMenuProvider:function(_41){
SemTagSvcPortal.specialMenuProviders.push(_41);
},getElementsByClassName:function(_42,_43,_44,_45){
if(!_43){
_43=document.body;
}
if(!_44){
limit=0;
}
if(!_45){
_45=["*"];
}
var _46=SemTagSvcPortal.getRegExp(_42);
if(_43&&_43.className&&_43.className.match(_46)){
return new Array(_43);
}
var _47=new Array();
for(var t=0;t<_45.length;t++){
var _48=_43.getElementsByTagName(_45[t]);
for(var i=0;i<_48.length;i++){
var _49=_48[i];
if(_49.className&&_49.className.match(_46)){
_47.push(_49);
}
if(0<_44&&_44==_47.length){
break;
}
}
}
return _47;
},getParentByClassName:function(_4a,_4b){
if(!_4b){
return null;
}
var _4c=SemTagSvcPortal.getRegExp(_4a);
if(_4b.className&&_4b.className.match(_4c)){
return _4b;
}
while(_4b.parentNode){
_4b=_4b.parentNode;
if(_4b.className&&_4b.className.match(_4c)){
return _4b;
}
}
return null;
},addHover:function(_4d,_4e,_4f,_50){
while(typeof SemTagMenu==undefined){
alert("waiting...");
}
var _51=_4d.getAttribute(SemTagSvcPortal.refcntAttr);
if(SemTagSvcPortal.debug){
console.log("Refcount got is:"+_51+":"+SemTagMenu.staticHover+":"+(_4e!==null)+":"+_4f);
}
if(_51){
_4d.setAttribute(SemTagSvcPortal.refcntAttr,parseInt(Number(_51)+1));
if(SemTagMenu.staticHover){
var img=SemTagMenu.findHoverFromLiveElement(_4d);
if(img){
SemTagSvcPortal.watchEvent(img,"click",_4f,false);
img.setAttribute("href","javascript:SemTagMenu.a11y()");
}else{
if(SemTagSvcPortal.debug){
alert("couldn't find the hover for this element!");
}
}
}else{
SemTagSvcPortal.watchEvent(_4d,"mouseover",_4e,false);
}
}else{
_4d.setAttribute(SemTagSvcPortal.refcntAttr,"1");
SemTagSvcPortal.hoverIdx++;
_4d.setAttribute(SemTagSvcPortal.liveElemPrefix+"id",SemTagSvcPortal.hoverIdx);
if(SemTagMenu.staticHover){
var img=SemTagSvcPortal.createHoverImage(_50);
SemTagSvcPortal.watchEvent(img,"click",_4f,false);
SemTagSvcPortal.watchEvent(img,"keydown",SemTagMenu.a11y,false);
img.setAttribute("href","javascript:void()");
var _52=_4d.nextSibling;
if(_52){
_52.parentNode.insertBefore(img,_52);
}else{
_4d.parentNode.appendChild(img);
}
_4d.setAttribute(SemTagSvcPortal.hoverIdPrefix+"idx",parseInt(SemTagSvcPortal.hoverIdx));
_4d.id=SemTagSvcPortal.liveElemPrefix+SemTagSvcPortal.hoverIdx;
}else{
var _53=SemTagUtil.getNodeClassValue(_4d);
if(_53&&0<_53.length){
_53+=" hasHover";
}else{
_53="hasHover";
}
SemTagUtil.setNodeClassValue(_4d,_53);
SemTagSvcPortal.watchEvent(_4d,"mouseover",_4e,false);
_4d.setAttribute("tabIndex","0");
SemTagSvcPortal.watchEvent(_4d,"focus",_4e,false);
SemTagSvcPortal.watchEvent(_4d,"blur",SemTagMenu.mouseout,false);
}
}
},removeHover:function(_54,_55,_56){
var _57=_54.getAttribute(SemTagSvcPortal.refcntAttr);
if(_57){
var _58=Number(_57)-1;
if(_58<0&&SemTagSvcPortal.debug){
alert("SemTagSvcPortal.removeHover called on an element with refcnt="+_57);
}
if(SemTagMenu.staticHover){
var _59=SemTagSvcPortal.getHoverElement(_54);
SemTagSvcPortal.clearEventWatch(_59,"click",_56,false);
if(_58==0){
_59.parentNode.removeChild(_59);
}
}else{
SemTagSvcPortal.clearEventWatch(_54,"mouseover",_55,false);
SemTagSvcPortal.clearEventWatch(_54,"focus",_55,false);
_54.setAttribute(SemTagSvcPortal.refcntAttr,_58);
if(_58==0){
var _5a=SemTagUtil.getNodeClassValue(_54);
var _5b=_5a.replace(/hasHover/,"");
SemTagUtil.setNodeClassValue(_54,_5b);
_54.removeAttribute(SemTagSvcPortal.refcntAttr);
_54.removeAttribute("tabIndex");
}
}
}
},createHoverImage:function(_5c){
var img=document.createElement("img");
img.id=SemTagSvcPortal.hoverIdPrefix+SemTagSvcPortal.hoverIdx;
img.className=SemTagMenu.iconName;
img.setAttribute("src",SemTagSvcPortalGlobal.contextUrl+"/ui/menu_selected.gif");
img.setAttribute("border","0");
img.setAttribute("alt",_5c);
var _5d=document.createElement("a");
SemTagSvcPortal.watchEvent(_5d,"mouseover",SemTagMenu.activateHover,false);
SemTagSvcPortal.watchEvent(_5d,"mouseout",SemTagMenu.deactivateHover,false);
_5d.appendChild(img);
return _5d;
},getHoverElement:function(_5e){
if(!_5e){
return null;
}
if(SemTagMenu.staticHover){
var idx=_5e.getAttribute(SemTagSvcPortal.hoverIdPrefix+"idx");
var img=document.getElementById(SemTagSvcPortal.hoverIdPrefix+idx);
if(img){
return img.parentNode;
}
}else{
var _5f=SemTagUtil.getNodeClassValue(_5e);
if(_5f.match(/hasHover/)){
return _5e;
}
}
return null;
},showHover:function(_60,_61,_62){
SemTagMenu.showHover(_60,_61,_62);
},setMenuData:function(_63,_64,_65,_66,_67){
SemTagMenu.setMenuData(_63,_64,_65,_66,_67);
},getMenuItemJson:function(_68,_69,_6a,_6b){
var o=_6a?_6a:0;
var i=_6b?_6b:"";
return {"label":_68,"href":_69,"order":o,"icon":i};
},getMenuHeaderJson:function(_6c,_6d,_6e){
if(_6d!="text/html"){
return null;
}
if(_6c&&0<_6c.length){
return {"markup":_6c,"order":_6e};
}else{
null;
}
},getMenuFooterJson:function(_6f,_70,_71){
if(_70!="text/html"){
return null;
}
if(_6f&&0<_6f.length){
return {"markup":_6f,"order":_71};
}else{
null;
}
},getElementFromEvent:function(_72){
var _73=_72.target?_72.target:_72.srcElement;
if(_73==window){
_73=_73.document;
}
return _73;
},getLiveElementFromEvent:function(_74){
return SemTagMenu.findLiveElementFromEventSource(SemTagSvcPortal.getElementFromEvent(_74));
},getEventAbsoluteX:function(e){
var x=0;
if(e.pageX){
x=e.pageX;
}else{
if(e.clientX){
if(document.body.scrollLeft>document.documentElement.scrollLeft){
x=e.clientX+document.body.scrollLeft;
}else{
x=e.clientX+document.documentElement.scrollLeft;
}
}
}
return x;
},getEventAbsoluteY:function(e){
var y=0;
if(e.pageY){
y=e.pageY;
}else{
if(e.clientY){
if(document.body.scrollTop>document.documentElement.scrollTop){
y=e.clientY+document.body.scrollTop;
}else{
y=e.clientY+document.documentElement.scrollTop;
}
}
}
return y;
},findPosition:function(obj,_75){
var _76=0,_77=0,_78=0;
var _79=obj.offsetWidth;
if(obj.offsetParent){
if(_75){
_77+=(SemTagSvcPortal.bidi=="rtl")?0:_79;
}
_78+=obj.offsetHeight;
while(obj!=null){
_77+=obj.offsetLeft;
_78+=obj.offsetTop;
obj=obj.offsetParent;
_76++;
}
return [_77+(SemTagSvcPortal.bidi=="rtl"?_79:0),_78];
}else{
return [obj.x+(SemTagSvcPortal.bidi=="rtl"?_79:0),obj.y];
}
},createGroupJson:function(ctx,_7a){
return {"context":ctx,"extenders":_7a};
},createActionJson:function(id,js,ctx,_7b,_7c,_7d,url,_7e){
var i=(id&&0<id.length)?id[0].innerHTML:null;
var j=(js&&0<js.length)?js[0].innerHTML:null;
var c=(ctx&&0<ctx.length)?ctx[0].innerHTML:null;
var l=(_7b&&0<_7b.length)?_7b[0].innerHTML:null;
var d=(_7c&&0<_7c.length)?_7c[0].innerHTML:null;
var s=(_7d&&0<_7d.length)?_7d[0].innerHTML:null;
var u=(url&&0<url.length)?url[0].innerHTML:null;
var o=(_7e&&0<_7e.length)?parseInt(_7e[0].innerHTML):0;
return {"id":i,"impl":j,"context":c,"label":l,"description":d,"showif":s,"url":u,"order":o};
},parseOrder:function(_7f){
if(_7f==null||_7f.length==0){
return 0;
}
if(_7f.charAt(0)=="-"){
return parseInt(_7f.substr(1))*-1;
}else{
return parseInt(_7f);
}
},getActions:function(_80){
if(!SemTagSvcPortal.actionRegistry){
SemTagSvcPortal.processActions();
}
for(var i=0;i<SemTagSvcPortal.actionRegistry.length;i++){
if(SemTagSvcPortal.actionRegistry[i].context==_80){
return SemTagSvcPortal.actionRegistry[i].extenders;
}
}
return SemTagSvcPortal.actionRegistry[0].extenders;
},processActions:function(){
if(SemTagSvcPortal.debug){
console.log("inside processActions of SemtagSvcPortal");
}
if(!SemTagSvcPortal.actionRegistry){
SemTagSvcPortal.actionRegistry=new Array();
SemTagSvcPortal.actionRegistry[0]=SemTagSvcPortal.createGroupJson("dummy",new Array());
}
var i;
var _81=SemTagSvcPortal.getNodes("com.ibm.portal.action");
if(SemTagSvcPortal.debug){
console.log("Nodes got for com.ibm.portal.action is:"+_81);
}
while(_81&&0<_81.length){
if(SemTagSvcPortal.debug){
console.log("Inside while loop of actions");
}
var _82=_81.pop();
var id=SemTagSvcPortal.getElementsByClassName("action-id",_82);
var _83=SemTagSvcPortal.getElementsByClassName("action-impl",_82);
var ctx=SemTagSvcPortal.getElementsByClassName("action-context",_82);
var _84=SemTagSvcPortal.getElementsByClassName("action-label",_82);
var _85=SemTagSvcPortal.getElementsByClassName("action-description",_82);
var _86=SemTagSvcPortal.getElementsByClassName("action-showif",_82);
var url=SemTagSvcPortal.getElementsByClassName("action-url",_82);
var _87=SemTagSvcPortal.getElementsByClassName("action-order",_82);
var _88=SemTagSvcPortal.createActionJson(id,_83,ctx,_84,_85,_86,url,_87);
for(i=1;i<SemTagSvcPortal.actionRegistry.length;i++){
if(SemTagSvcPortal.actionRegistry[i].context==_88.context){
var cnt=SemTagSvcPortal.actionRegistry[i].extenders.length;
for(var j=0;j<cnt;j++){
if(_88.id==SemTagSvcPortal.actionRegistry[i].extenders[j].id){
break;
}
}
if(j==cnt){
SemTagSvcPortal.actionRegistry[i].extenders.push(_88);
}
break;
}
}
if(i==SemTagSvcPortal.actionRegistry.length){
SemTagSvcPortal.actionRegistry[i]=SemTagSvcPortal.createGroupJson(ctx[0].innerHTML,new Array());
SemTagSvcPortal.actionRegistry[i].extenders.push(_88);
}
if(SemTagSvcPortal.debug){
console.log("Action.impl got is:"+_88.impl);
}
if(_88.impl){
SemTagSvcPortal.loadScript(_88.impl,true);
}
}
for(i=0;i<SemTagSvcPortal.actionRegistry.length;i++){
SemTagSvcPortal.actionRegistry[i].extenders.sort(SemTagSvcPortal.sortByOrder);
}
},sortByOrder:function(a,b){
if(a.order>b.order){
return 1;
}else{
if(a.order<b.order){
return -1;
}else{
return 0;
}
}
},getTextValue:function(_89){
if(!_89){
return "";
}
return _89.innerHTML.replace(/<[a-zA-Z\/][^>]*>/gi,"");
},getTypedValue:function(_8a,_8b){
if(!_8b){
_8b="def";
}
var _8c=new Array();
var _8d=SemTagSvcPortal.getElementsByClassName("type",_8a);
var _8e=SemTagSvcPortal.getElementsByClassName("value",_8a);
var _8f="";
if(_8e.length<1){
_8f=SemTagSvcPortal.getTextValue(_8a);
}
for(var i=0;i<_8e.length;i++){
_8f+=SemTagSvcPortal.getTextValue(_8e[i]);
}
if(_8d.length<1){
_8c[_8b]=_8f;
}else{
for(var j=0;j<_8d.length;j++){
var _90=_8d[j];
var _91=_90.tagName.match(/^abbr$/i)?_90.getAttribute("title"):SemTagSvcPortal.getTextValue(_90);
_8c[_91.toLowerCase()]=_8f;
}
}
return _8c;
},findNameElementInHcard:function(_92){
if(_92.className!="vcard"){
_92=SemTagSvcPortal.getParentByClassName("vcard",_92);
}
var _93=SemTagSvcPortal.getElementsByClassName("fn",_92)[0];
if(!_93){
_93=SemTagSvcPortal.getElementsByClassName("n",_92)[0];
}
return _93;
},getEmailFromHcard:function(_94){
if(!_94){
return "";
}
if(_94.className!="vcard"){
_94=SemTagSvcPortal.getParentByClassName("vcard",_94);
}
var _95="";
if(_94){
var _96=SemTagSvcPortal.getElementsByClassName("email",_94)[0];
var _97=SemTagSvcPortal.getTypedValue(_96,"internet");
_95=_97.internet;
}
return _95;
},findElementByNameInHcard:function(_98,_99){
if(_98.className!="vcard"){
_98=SemTagSvcPortal.getParentByClassName("vcard",_98);
}
return SemTagSvcPortal.getElementsByClassName(_99,_98)[0];
},getRegExp:function(str){
var _9a=SemTagSvcPortal.reMap[str];
if(!_9a){
_9a=new RegExp("(^|\\s)"+str+"(\\s|$)");
SemTagSvcPortal.reMap[str]=_9a;
}
return _9a;
},addElementToHandler:function(_9b,_9c,_9d){
if(SemTagSvcPortalGlobal.isParsingRequired===true){
if(SemTagSvcPortal.debug){
console.log("Since parser is on returning to avoid duplicacy");
}
return false;
}
if(_9b==null||_9b==="undefined"){
return false;
}
var _9e=SemTagSvcPortal.service.entries;
if(SemTagSvcPortal.debug){
console.log("Service entries got is:"+_9e);
}
var _9f=null;
for(var k=0;k<_9e.length;k++){
var _a0=_9e[k];
if(_a0.id===_9d){
_9f=_a0;
if(SemTagSvcPortal.debug){
console.log("Service entry got is:"+_9f.id+":"+_9f);
}
break;
}
}
if(_9f==null){
if(SemTagSvcPortal.debug){
console.log("Since no Service entry got so returning");
}
return false;
}
var _a1;
if(_9b.nodeName==="A"||_9d==="c2a"){
_a1=_9b.parentNode;
}else{
_a1=_9b;
}
if(SemTagSvcPortal.debug){
console.log("Node is :"+_a1+":"+_a1.nodeName+":"+_a1.innerHTML);
}
if(_a1.getAttribute("alreadyAdded")==null){
if(_9f.nodes==null||_9f.nodes==="undefined"||typeof _9f.nodes!=="array"){
_9f.nodes=[];
}
_9f.nodes.push(_a1);
_a1.setAttribute("alreadyAdded",true);
if(_9d==="c2a"){
var _a2=document.getElementsByClassName("c2a:target");
for(var i=0;i<_a2.length;i++){
_9f.nodes.push(_a2.item(i));
}
}
}
if(SemTagSvcPortal.debug){
console.log("Before calling Service "+_9d+" handler callback");
}
_9f.callback.call(_9f.nodes);
if(SemTagSvcPortal.debug){
console.log("After calling Service "+_9d+" handler callback");
}
if(SemTagSvcPortal.debug){
console.log("event object is :"+_9c+":"+_9c.type+":"+_9c.target);
}
if(_9d==="hcard"){
if(SemTagSvcPortalGlobal.ifConnUrlExists==="false"){
SemTagPerson.showHover(_9c);
}
SemTagSvcPortal.sametimeNotIntegrated=((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)==="undefined"));
if(SemTagSvcPortal.debug){
console.log("parsing required is:"+SemTagSvcPortalGlobal.isParsingRequired+": and sametimeintegrated is"+SemTagSvcPortal.sametimeNotIntegrated);
}
if(SemTagSvcPortalGlobal.isParsingRequired===false&&SemTagSvcPortal.sametimeNotIntegrated===false){
if(SemTagSvcPortal.debug){
console.log("Calling SemTagAwrns.processHcards in addElementToHandler");
}
SemTagAwrns.processHcards([_a1]);
}
}
if(_9d==="c2a"){
SemTagC2A.showHover(_9c);
}
_9f.nodes=[];
return true;
},addElementToPersonCardHandler:function(_a3,_a4){
if(SemTagSvcPortalGlobal.isParsingRequired===true){
if(SemTagSvcPortal.debug){
console.log("Since parser is on returning to avoid duplicacy");
}
return false;
}
if(_a3==null||_a3==="undefined"){
return false;
}
var _a5;
if(_a3.nodeName==="A"){
_a5=_a3.parentNode;
}else{
_a5=_a3;
}
if(SemTagSvcPortal.debug){
console.log("Node is :"+_a5+":"+_a5.nodeName+":"+_a5.innerHTML);
}
if(_a5.getAttribute("alreadyAdded")==null){
SemTagSvcPortal.svcEntryPersonCard.nodes.push(_a5);
_a5.setAttribute("alreadyAdded",true);
}
if(SemTagSvcPortal.debug){
console.log("Before calling Person Card hanlder callback");
}
SemTagSvcPortal.svcEntryPersonCard.callback.call(SemTagSvcPortal.svcEntryPersonCard.nodes);
if(SemTagSvcPortal.debug){
console.log("After calling Person Card hanlder callback");
}
if(SemTagSvcPortal.debug){
console.log("event object is :"+_a4+":"+_a4.type+":"+_a4.target);
}
if(SemTagSvcPortalGlobal.ifConnUrlExists==="false"){
SemTagPerson.showHover(_a4);
}
SemTagSvcPortal.sametimeNotIntegrated=((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)==="undefined"));
if(SemTagSvcPortal.debug){
console.log("parsing required is:"+SemTagSvcPortalGlobal.isParsingRequired+": and sametimeintegrated is"+SemTagSvcPortal.sametimeNotIntegrated);
}
if(SemTagSvcPortalGlobal.isParsingRequired===false&&SemTagSvcPortal.sametimeNotIntegrated===false){
if(SemTagSvcPortal.debug){
console.log("Calling SemTagAwrns.processHcards in addElementToPersonCardHandler");
}
SemTagAwrns.processHcards([_a5]);
}
SemTagSvcPortal.svcEntryPersonCard.nodes.pop();
return true;
},registerService:function(_a6){
var _a7=SemTagSvcPortal.service.entries;
_a7[_a7.length]=_a6;
}};
var SemTagSvcConfig=null;
if((SemTagSvcPortal.ifConnUrlExists=="true")&&(SemTagSvcPortal.isconnServerNew===true)){
SemTagSvcConfig={isPortal:true,baseUrl:SemTagSvcPortal.connUrl+"/profiles",loadCssFiles:true,isBidiRTL:false};
}
SemTagSvcPortal.watchEvent(window,"load",SemTagSvcPortal.init,false);
var SemTagSvc=SemTagSvcPortal;


var SemTagUtil={isGecko:(document.all?false:true),getNodeClassValue:function(_1){
var rv;
if(SemTagUtil.isGecko){
rv=(typeof (_1.getAttribute)!="undefined")?_1.getAttribute("class"):"";
}else{
rv=_1.className;
}
return (typeof (rv)!="undefined"&&rv!=null)?rv:"";
},setNodeClassValue:function(_2,_3){
if(SemTagUtil.isGecko){
_2.setAttribute("class",_3);
}else{
_2.className=_3;
}
},fireEvent:function(_4,_5){
try{
if(_4.fireEvent){
_4.fireEvent(_5);
}else{
if(_4.dispatchEvent){
_4.dispatchEvent(_5);
}
}
}
catch(e){
if(SemTagSvcPortal.debug){
alert("Svc.fireEvent caught: "+e);
}
}
},getOwnerDocument:function(_6){
if(!_6){
return null;
}
if(SemTagUtil.isGecko){
return _6.ownerDocument;
}else{
var _7=_6;
while(_7.parentNode){
_7=_7.parentNode;
}
return _7;
}
},getFrameElement:function(_8){
if(SemTagUtil.isGecko){
var oD=_8.ownerDocument;
return oD.defaultView.frameElement;
}else{
var _9=_8;
while(_9.parentNode){
_9=_9.parentNode;
}
return _9.parentWindow.frameElement;
}
},getHcardAttributeValue:function(_a,_b){
switch(_a){
case ("email"):
return SemTagUtil.getHcardTypedAttribute(_b,_a,"internet");
case ("tel"):
return SemTagUtil.getHcardTypedAttribute(_b,_a,"voice");
case ("adr"):
return SemTagUtil.getHcardTypedAttribute(_b,_a,"intl");
}
var _c=SemTagSvcPortal.getParentByClassName("vcard",_b);
var _d=SemTagSvcPortal.getElementsByClassName(_a,_c,1);
if(_d.length>0&&_d[0].tagName.match(/^abbr$/i)){
return _d[0].getAttribute("title");
}
switch(_a){
case ("X-person-display-inline"):
if(_d.length>0){
return true;
}else{
return false;
}
case ("fn"):
var fn=SemTagUtil.getSinglePropertyValue(_d[0]);
if(fn){
return fn;
}else{
return SemTagUtil.getHcardAttributeValue("n",_b);
}
break;
case ("X-person-header-only"):
case ("X-person-inside-inline"):
return (_d&&0<_d.length);
case ("X-sametime-resolve"):
var _e=_d[0];
return (typeof (_e)!="undefined"&&_e!=null);
case ("n"):
if(_d.length>0){
var _f=_d[0];
var _10="";
var _11=["honorific-prefix","given-name","additional-name","family-name","honorific-suffix"];
for(var i=0;i<5;i++){
var n=SemTagUtil.getSinglePropertyValue(SemTagSvcPortal.getElementsByClassName(_11[i],_f,1)[0]);
if(n){
_10+=n+" ";
}
}
return _10;
}
return "";
break;
case ("photo"):
var _12=_d[0];
if(_12){
return _12.getAttribute("src");
}else{
return;
}
break;
case ("X-sametime-status"):
var _13=_d[0];
if(!_13){
return "";
}
var _14=_13.getAttribute("value");
if(_14){
return _14;
}else{
return SemTagUtil.getSinglePropertyValue(_13);
}
break;
case ("street-address"):
case ("post-office-box"):
case ("extended-address"):
case ("locality"):
case ("region"):
case ("postal-code"):
case ("country-name"):
case ("title"):
case ("role"):
case ("org"):
default:
return SemTagUtil.getSinglePropertyValue(_d[0]);
break;
}
},getHcardTypedAttribute:function(_15,_16,_17){
var _18=new Object();
var _19=SemTagSvcPortal.getParentByClassName("vcard",_15);
var _1a=SemTagSvcPortal.getElementsByClassName(_16,_19);
for(var i=0;i<_1a.length;i++){
var _1b=_1a[i];
if(_16=="email"&&_1b.nodeName.toLowerCase()=="a"&&_1b.href.match(/^mailto:/)){
var _1c=_1b.href.indexOf("?");
if(_1c>-1){
_18[_17]=_1b.href.slice(7,_1c);
}else{
_18[_17]=_1b.href.slice(7);
}
continue;
}
_18=SemTagSvcPortal.getTypedValue(_1b,_17);
}
return _18;
},getSinglePropertyValue:function(_1d){
if(!_1d){
return false;
}
var _1e=_1d.innerHTML.replace(/<[a-zA-Z\/][^>]*>/gi,"");
return _1e;
},crossDomainRequest:function(){
var _1f=new Array();
var _20=new Array();
var _21=this;
createTimeoutFunction=function(_22){
return function(){
_21.cancelRequest(_22);
};
};
this.getScriptId=function(id){
return "_JVLN_"+id;
};
this.getScriptObject=function(id){
var _23=SemTagUtil.isGecko?this.getScriptId(id):this.$_getScriptId(id);
return document.getElementById(_23);
};
this.request=function(url,_24,_25,_26,_27){
var _28=this.getScriptId(_27);
if(_25){
_1f[_27]=_25;
}
if(_26){
_20[_27]=_26;
}
var _29=document.createElement("script");
_29.id=_28;
try{
_29.src=url;
}
catch(e){
if(SemTagSvcPortal.debug){
alert("crossDomainRequest.request: "+e);
}
return false;
}
document.body.insertBefore(_29,document.body.firstChild);
if(_24){
var _2a=this;
window.setTimeout(createTimeoutFunction(_27),_24);
}
};
this.cancelRequest=function(id){
if(SemTagSvcPortal.debug){
window.status="crossDomainRequest.cancelRequest";
}
var _2b=_1f[id];
_1f[id]=null;
var _2c=_20[id];
_20[id]=null;
if(_2b){
try{
if(_2b){
var evt={"target":_2c};
_2b.call(this,false,null,evt);
}
var _2d=this.getScriptObject(id);
if(_2d){
document.body.removeChild(_2d);
}
}
catch(e){
if(SemTagSvcPortal.trace){
SemTagUtil.log("crossDomainRequest.cancelRequest caught: "+e+"(callback="+_2b+")");
}
}
}
};
this.dispatch=function(id,_2e){
if(!id){
return;
}
try{
var _2f=_1f[id];
if(SemTagSvcPortal.debug&&!_2f){
alert("dispatch got null callback for: "+id);
}
if(_2f){
var evt={"target":_20[id]};
_2f.call(this,true,_2e,evt);
_1f[id]=null;
_20[id]=null;
var _30=this.getScriptObject(id);
if(_30){
document.body.removeChild(_30);
}
}
}
catch(e){
if(SemTagSvcPortal.trace){
SemTagUtil.log("crossDomainRequest.dispatch caught: "+e);
}
}
};
},log:function(msg){
var _31=document.getElementById("javlin.logger");
if(_31){
var txt=document.createTextNode(msg+"..... ");
_31.appendChild(txt);
}
}};





	
	var availAttrib={availAttribUrl:SemTagSvcPortalGlobal.availAttribUrl,req:"",userAttributesRetrieved:false,retrieveAttribute:function(){
if(availAttrib.userAttributesRetrieved){
return;
}
if(SemTagSvcPortal.availAttribStr!=""){
return;
}
availAttrib.req=ibm.portal.xml.getXmlHttpRequest();
availAttrib.req.onreadystatechange=availAttrib.processStateChange;
try{
availAttrib.req.open("GET",availAttrib.availAttribUrl,true);
}
catch(e){
alert(e);
}
availAttrib.req.send(null);
availAttrib.userAttributesRetrieved=true;
},getAttributesFromTags:function(_1,_2,_3){
if(typeof ActiveXObject!="undefined"){
return _1.getElementsByTagName(_3+":"+_2);
}
return _1.getElementsByTagNameNS("*",_2);
},processStateChange:function(){
if(availAttrib.req.readyState==4){
if(availAttrib.req.status==200){
var _4=availAttrib.req.responseText;
if(_4.length>1){
var _5=ibm.portal.xml.loadXmlString(_4);
var _6=availAttrib.getAttributesFromTags(_5.documentElement,"title","atom");
var i;
for(i=1;i<_6.length;i++){
if((SemTagSvcPortal.availAttribStr=="")){
if((_6[i].firstChild.nodeValue!=null)){
SemTagSvcPortal.availAttribStr=_6[i].firstChild.nodeValue;
}
}else{
if((_6[i].firstChild.nodeValue!=null)){
SemTagSvcPortal.availAttribStr=_6[i].firstChild.nodeValue+","+SemTagSvcPortal.availAttribStr;
}
}
}
}
}else{
if(SemTagSvcPortal.debug){
console.log(availAttrib.req.statusText);
}
}
}
}};


	


var mytest=null;
var liveNameElementId=null;
var SemTagMenu={needCss:true,staticHover:false,id:"semtagmenu",hideDelay:SemTagSvcPortalGlobal.ptTimeout,timeouts:[],iconName:"menu_drop_icon",showing:false,currentElem:null,currentHoverLabel:null,refCount:-1,a11yMode:false,svcHandlers:[],items:[],headers:[],footers:[],moreActionImgUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/ShowActions.gif",verticalRulerUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/Line_Tree.gif",hoverIdRE:new RegExp(SemTagSvcPortal.hoverIdPrefix),iconNameRE:new RegExp("(^|\\s)menu_drop_icon(\\s|$)"),sftflag:false,init:function(){
SemTagMenu.includeCSS(document);
},includeCSS:function(_1){
var _2=false;
if(typeof (_1._JAVLIN_STYLE_)=="undefined"){
_2=true;
if(SemTagMenu.needCss){
var _3=_1.createElement("link");
_3.rel="stylesheet";
_3.href=SemTagSvcPortalGlobal.contextUrl+"/"+(SemTagSvcPortal.bidi=="rtl"?"styles_rtl.css":"styles.css");
_3.type="text/css";
var _4=_1.getElementsByTagName("head");
if((_4&&_4[0])){
_4[0].appendChild(_3);
}
}
_1._JAVLIN_STYLE_="loaded";
}
return _2;
},registerMenuEventHandlers:function(_5){
SemTagSvcPortal.watchEvent(_5,"click",SemTagMenu.click,false);
SemTagSvcPortal.watchEvent(_5,"keydown",SemTagMenu.catchEscape,false);
SemTagSvcPortal.watchEvent(_5,"keyup",SemTagMenu.catchKeyup,false);
},unregisterMenuEventHandlers:function(_6){
SemTagSvcPortal.clearEventWatch(_6,"click",SemTagMenu.click,false);
SemTagSvcPortal.clearEventWatch(_6,"keydown",SemTagMenu.catchEscape,false);
SemTagSvcPortal.clearEventWatch(_6,"keyup",SemTagMenu.catchKeyup,false);
},nls:{"hover_label":SemTagSvcPortalGlobal.hover_label_menu,"a11y_hover":SemTagSvcPortalGlobal.a11y_hover,"a11y_photo":SemTagSvcPortalGlobal.a11y_photo,"a11y_close":SemTagSvcPortalGlobal.a11y_close,"ally_expandImage":SemTagSvcPortalGlobal.ally_expandImage,"ally_collapsedImage":SemTagSvcPortalGlobal.ally_collapsedImage,"ally_showMore":SemTagSvcPortalGlobal.ally_showMore,"ally_showLess":SemTagSvcPortalGlobal.ally_showLess,"ally_buisnessCardLabel":SemTagSvcPortalGlobal.ally_buisnessCardLabel,"ally_moreAction":SemTagSvcPortalGlobal.ally_moreAction},hoverDimension:[14,14],hoverOffset:[15,-1],menuOffset:[15,-1],writeHover:function(_7,_8,_9){
_7.write("<div class='"+SemTagMenu.iconName+"' style='cursor:pointer;'>"+_9+"</div>");
},startMenu:function(_a,_b){
_a.write("<div class='personMenu' id='personMenuID'><ul role='region' aria-label='listitem' style='padding:0px;margin:0px;list-style-type:none;float:left;'title='Person card dialog' alt='Person card dialog'><li role='region' aria-label='listitem' tabindex=0 onkeydown=\"SemTagMenu.catchEscape();\" onkeyup=\"SemTagMenu.catchKeyup();\"></li></ul>");
},writeHeader:function(_c,_d,_e){
_c.write("<div class='semtag_header'>"+_d.markup+"</div>");
},startActionSection:function(_f,_10,_11,_12){
if(!_11){
_11="personMenuActions";
}
_f.write("<div id='lessItem' style='display:block'><table role='presentation' class='personMenuActions' id='menuItemID' dir='"+_10+"'><tr >");
if(0<SemTagMenu.items.length){
tempitem=SemTagMenu.items.shift();
_f.write("<td style='width:10'><a role='region' aria-label='actionItem' href='"+tempitem.href+"' style='color:#105ec1;padding-top:5px;padding-bottom:5px;font-size:1.0em;'><img style='display:none' src='' alt=''> "+tempitem.label+"</img></a></td>");
}
if(_12.length>=1){
_f.write("<td style='width:1'><img src= '"+SemTagMenu.verticalRulerUrl+"' alt=''/> </td> ");
_f.write("<td ><a role='region' aria-label='moreaction' href='#' style='color:#105ec1;padding-top:5px;padding-bottom:5px;font-size:1.0em;width:90;'onClick=\"SemTagMenu.shtest();return false;\" onKeydown=\" if (event.keyCode==13){SemTagMenu.shtest();return false; }\"><img style='display:none' src='' alt=''><label id='actionMore'>"+SemTagMenu.nls.ally_moreAction+"</img></label><span style='position: absolute; top: -9000px;'>Press Enter for more actions items and tab to move the focus on items</span><img style='border:none;' src='"+SemTagMenu.moreActionImgUrl+"' title='"+SemTagMenu.nls.ally_collapsedImage+" ' alt='"+SemTagMenu.nls.ally_collapsedImage+" ' /></a></td>");
}
_f.write("</tr></table></div>");
_f.write("<div id='moreItem' style='display:none'><table role='presentation' id='moreActionItems' class='"+_11+"' dir='"+_10+"'>");
while(0<SemTagMenu.items.length){
_12=SemTagMenu.items.shift();
if(_12.href&&(_12.href.indexOf("mailto:")>-1||_12.href.indexOf("http:")>-1)){
_f.write("<tr ><td><a href='"+_12.href+"'>"+_12.label+"</a></td></tr>");
}else{
_f.write("<tr ><td><a  onclick='"+_12.href+";return false;"+"' href='javascript;'>"+_12.label+"</a></td></tr>");
}
}
_f.write("</table></div>");
},writeFooter:function(out,_13,_14){
out.write("<div class='semtag_footer'>"+_13.markup+"</div>");
},endMenu:function(out,_15){
out.write("<a role='region' aria-label='exitlink' style='width:0px; height:0px;' onblur=\"SemTagMenu.exitCard();\" onclick='return false;' href='exit from person card' title='exit from person card'><img style='display:none' src='' alt='' /></a></div>");
},out:function(){
this.buffer="";
this.write=function(str){
this.buffer+=str;
};
},activateHover:function(_16){
var _17=SemTagSvcPortal.getElementFromEvent(_16);
if(_17){
_17.src=SemTagSvcPortalGlobal.contextUrl+"/ui/menu_selected_hover.gif";
}
SemTagMenu.setCurrentElement(SemTagMenu.findLiveElementFromEventSource(_17));
},deactivateHover:function(_18){
var _19=SemTagSvcPortal.getElementFromEvent(_18);
if(_19){
_19.src=SemTagSvcPortalGlobal.contextUrl+"/ui/menu_selected.gif";
}
},showHover:function(_1a,_1b,_1c){
if(SemTagMenu.staticHover){
return;
}
var tag=SemTagMenu.getMenuTag();
if(SemTagMenu.showing&&tag.style.display!="none"){
return;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.showHover");
}
var _1d=SemTagSvcPortal.getElementFromEvent(_1a);
if(SemTagSvcPortal.trace){
SemTagUtil.log("currentElem="+SemTagMenu.currentElem);
}
var _1e=0;
if(_1d&&_1d!=SemTagMenu.currentElem){
SemTagMenu.clearAllSvcHandlers(tag);
_1e=_1d.getAttribute(SemTagSvcPortal.refcntAttr);
if(SemTagSvcPortal.trace){
SemTagUtil.log("refcnt="+_1e);
}
if(_1e){
SemTagMenu.setCurrentElement(_1d);
}else{
if(SemTagSvcPortal.debug){
alert("SemTagMenu.showHover called for a DOM element with no refcnt attribute!");
}
SemTagMenu.setCurrentElement(null);
return;
}
}
SemTagMenu.addSvcHandler(tag,_1b);
if(_1c&&0<_1c.length){
SemTagMenu.currentHoverLabel=_1c;
}
SemTagMenu.refCount--;
if(0<SemTagMenu.refCount){
return;
}
SemTagMenu.setRefCount((0<_1e)?_1e:Number(_1d.getAttribute(SemTagSvcPortal.refcntAttr)));
SemTagMenu.showing=false;
if(_1a.type=="focus"){
SemTagMenu.a11yMode=true;
SemTagSvcPortal.watchEvent(_1d,"keydown",SemTagMenu.a11y,false);
}
var out=new SemTagMenu.out();
var _1c=SemTagMenu.currentHoverLabel?SemTagMenu.currentHoverLabel:SemTagMenu.nls.hover_label;
SemTagMenu.writeHover(out,SemTagSvcPortal.bidi,_1c);
if(SemTagSvcPortalGlobal.isPersonCardHandlerRequired){
availAttrib.retrieveAttribute();
}
SemTagMenu.offScreen(tag);
tag.innerHTML=out.buffer;
var pos=SemTagSvcPortal.findPosition(SemTagMenu.currentElem,false);
var _1f=(SemTagSvcPortal.bidi=="rtl")?0-SemTagMenu.hoverOffset[0]:SemTagMenu.hoverOffset[0];
SemTagMenu.show(SemTagMenu.id,_1a,pos[0]+_1f,pos[1]+SemTagMenu.hoverOffset[1],tag.offsetWidth,tag.offsetHeight);
},addSvcHandler:function(tag,_20){
SemTagMenu.svcHandlers.push(_20);
SemTagSvcPortal.watchEvent(tag,"click",_20,false);
},clearAllSvcHandlers:function(tag){
while(0<SemTagMenu.svcHandlers.length){
var _21=SemTagMenu.svcHandlers.pop();
if(_21){
SemTagSvcPortal.clearEventWatch(tag,"click",_21,false);
}
}
},setCurrentElement:function(_22){
SemTagMenu.currentElem=_22;
SemTagMenu.setRefCount(_22?Number(_22.getAttribute(SemTagSvcPortal.refcntAttr)):0);
SemTagMenu.currentHoverLabel=null;
while(0<SemTagMenu.headers.length){
SemTagMenu.headers.pop();
}
while(0<SemTagMenu.items.length){
SemTagMenu.items.pop();
}
while(0<SemTagMenu.footers.length){
SemTagMenu.footers.pop();
}
},setRefCount:function(cnt){
SemTagMenu.refCount=cnt;
},setMenuData:function(_23,_24,_25,_26,_27){
if(SemTagSvcPortal.debug){
window.status="Menu.setMenuData: items.length="+(_24?_24.length:0);
}
if(!SemTagMenu.staticHover&&SemTagMenu.refCount<0){
if(SemTagSvcPortal.debug){
alert("setMenuData called when refCount="+SemTagMenu.refCount);
}
return;
}
var _28=SemTagMenu.findLiveElementFromEventSource(SemTagSvcPortal.getElementFromEvent(_23));
if(!_28){
if(SemTagSvcPortal.debug){
alert("setMenuData called on a null live element");
}
return;
}
if(SemTagMenu.staticHover&&(_28!=SemTagMenu.currentElem||SemTagMenu.showing)){
SemTagMenu.setCurrentElement(_28);
}
if(_24){
for(var i=0;i<_24.length;i++){
SemTagMenu.items.push(_24[i]);
}
}
if(_25){
SemTagMenu.currentMenuCss=_25;
}
if(_26){
SemTagMenu.headers.push(_26);
}
if(_27){
SemTagMenu.footers.push(_27);
}
SemTagMenu.refCount--;
if(0<SemTagMenu.refCount){
return;
}
SemTagMenu.stopEvent(_23);
for(var j=0;j<SemTagSvcPortal.specialMenuProviders.length;j++){
var _29=SemTagSvcPortal.specialMenuProviders[j];
var _2a=_29.call(_23,SemTagMenu.currentElem);
if(_2a&&0<_2a.length){
for(var k=0;k<_2a.length;k++){
SemTagMenu.items.push(_2a[k]);
}
}
}
SemTagMenu.showMenu(_23);
},getCurrentElement:function(){
return SemTagMenu.currentElem;
},showMenu:function(_2b){
if(0==SemTagMenu.headers.length+SemTagMenu.items.length+SemTagMenu.footers.length){
SemTagMenu.hide();
return;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.showMenu");
}
SemTagMenu.items.sort(SemTagSvcPortal.sortByOrder);
if(1<SemTagMenu.headers.length){
SemTagMenu.headers.sort(SemTagSvcPortal.sortByOrder);
}
if(1<SemTagMenu.footers.length){
SemTagMenu.footers.sort(SemTagSvcPortal.sortByOrder);
}
var out=new SemTagMenu.out();
SemTagMenu.startMenu(out,SemTagSvcPortal.bidi);
if(0<SemTagMenu.headers.length){
SemTagMenu.writeHeader(out,SemTagMenu.headers[0],SemTagSvcPortal.bidi);
}
SemTagMenu.startActionSection(out,SemTagSvcPortal.bidi,SemTagMenu.currentMenuCss,SemTagMenu.items);
if(0<SemTagMenu.footers.length){
SemTagMenu.writeFooter(out,SemTagMenu.footers[0],SemTagSvcPortal.bidi);
}
SemTagMenu.endMenu(out,SemTagSvcPortal.bidi);
var tag=SemTagMenu.getMenuTag();
SemTagMenu.clearAllSvcHandlers(tag);
SemTagMenu.offScreen(tag);
tag.innerHTML=out.buffer;
SemTagMenu.showing=true;
SemTagMenu.defaultCursor();
if(SemTagMenu.a11yMode){
if(SemTagUtil.isGecko){
var _2c=tag.getElementsByTagName("li");
if(0<_2c.length){
_2c[0].focus();
}
}else{
tag.focus();
}
}
SemTagMenu.registerMenuEventHandlers(document);
var pos=SemTagSvcPortal.findPosition(SemTagMenu.currentElem,false);
var _2d=(SemTagSvcPortal.bidi=="rtl")?0-SemTagMenu.menuOffset[0]:SemTagMenu.menuOffset[0];
SemTagMenu.show(SemTagMenu.id,_2b,pos[0]+_2d,pos[1]+SemTagMenu.menuOffset[1],tag.offsetWidth,tag.offsetHeight);
},getMenuTag:function(){
var tag=document.getElementById(SemTagMenu.id);
if(!tag){
tag=document.createElement("div");
tag.setAttribute("id",SemTagMenu.id);
tag.style.position="absolute";
tag.style.display="none";
tag.style.zIndex="99999";
SemTagSvcPortal.watchEvent(tag,"mouseout",SemTagMenu.mouseout,false);
SemTagSvcPortal.watchEvent(tag,"mouseover",SemTagMenu.mouseover,false);
document.body.insertBefore(tag,document.body.firstChild);
}
return tag;
},show:function(_2e,e,_2f,_30,_31,_32){
if(SemTagSvcPortal.trace){
SemTagUtil.log("SemTagUtil.show");
}
var _33;
var _34;
SemTagMenu.clearTimeouts();
var _35=document.getElementById(_2e);
if(_31==null){
_31=0;
}
if(_32==null){
_32=0;
}
var top,_36;
if(_2f!=null&&_30!=null){
var top=_30;
var _36=_2f-(SemTagSvcPortal.bidi=="rtl"?_31:0);
}else{
var top=SemTagSvcPortal.getEventAbsoluteY(e);
var _36=SemTagSvcPortal.getEventAbsoluteX(e);
}
var _37=SemTagMenu.currentElem;
mytest=_37.parentNode;
var _38,_39,d=document;
if(typeof window.innerWidth!="undefined"){
_38=window.innerWidth;
_39=window.innerHeight;
}else{
if(d.documentElement&&typeof d.documentElement.clientWidth!="undefined"&&d.documentElement.clientWidth!=0){
_38=d.documentElement.clientWidth;
_39=d.documentElement.clientHeight;
}else{
if(d.body&&typeof d.body.clientWidth!="undefined"){
_38=d.body.clientWidth;
_39=d.body.clientHeight;
}
}
}
var _3a=(document.body.scrollLeft>document.documentElement.scrollLeft)?document.body.scrollLeft:document.documentElement.scrollLeft;
if((_36+_31)>(_38+_3a)){
var _3b=(_36+_31)-_38-_3a;
_36-=_3b;
}
var _3c=(document.body.scrollTop>document.documentElement.scrollTop)?document.body.scrollTop:document.documentElement.scrollTop;
if((top+_32)>(_39+_3c)){
var _3b=(top+_32)-_39-_3c;
top-=_3b;
}
if(SemTagSvcPortal.bidi=="rtl"&&_36<0){
_36=0;
}
var od=SemTagUtil.getOwnerDocument(_37);
if(od.location!=document.location){
var f=SemTagUtil.getFrameElement(_37);
if(f){
var el=f.offsetParent;
var x=0,y=0;
while(el){
x+=el.offsetLeft;
y+=el.offsetTop;
el=el.offsetParent;
}
var lof=_37.offsetParent;
var xx=0,yy=0;
while(lof){
xx+=lof.offsetLeft;
yy+=lof.offsetTop;
lof=lof.offsetParent;
}
if(f.id=="wpsFLY_flyoutIFrame"){
top=y+yy+_37.offsetHeight;
_36=x+xx+_37.offsetWidth;
}else{
top+=f.offsetTop;
_36+=f.offsetLeft;
}
if(SemTagUtil.isGecko&&f.id=="wpsFLY_flyoutIFrame"){
_34=f.contentWindow.pageXOffset;
_33=f.contentWindow.pageYOffset;
}
if(!SemTagUtil.isGecko&&f.id=="wpsFLY_flyoutIFrame"){
_34=f.contentWindow.document.body.parentNode.scrollLeft;
_33=f.contentWindow.document.body.parentNode.scrollTop;
}
top-=_33;
_36-=_34;
}
}
_35.style.top=top+"px";
_35.style.left=_36+"px";
_35.style.display="block";
SemTagMenu.startHideTimer(_2e);
},hide:function(_3d,e){
SemTagMenu.unregisterMenuEventHandlers(document);
var tag=SemTagMenu.getMenuTag();
if(!tag){
return false;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.hide");
}
if(tag.style.display!="block"){
return false;
}
tag.style.display="none";
SemTagMenu.showing=false;
try{
var _3e=SemTagMenu.getNextEle(mytest);
}
catch(e){
}
SemTagMenu.setCurrentElement(null);
SemTagMenu.currentHoverLabel=null;
SemTagMenu.clearAllSvcHandlers(tag);
SemTagMenu.a11yMode=false;
SemTagMenu.defaultCursor();
return true;
},getNextEle:function(ele){
var par=ele.parentNode;
while(true){
if(par==null||par=="undefined"){
return false;
}else{
if(par.nodeName=="BODY"){
return par;
}else{
var _3f=par.nextSibling;
if(_3f!=null){
return _3f;
}
par=par.parentNode;
}
}
}
return false;
},offScreen:function(_40){
_40.style.top="-1000px";
_40.style.left="-1000px";
_40.style.display="block";
},findLiveElementFromEventSource:function(_41){
if(SemTagMenu.staticHover){
var id=_41.id;
if(!id.match(SemTagMenu.hoverIdRE)){
var _42=_41.getElementsByTagName("img");
for(var i=0;i<_42.length;i++){
if(_42[i].id&&_42[i].id.match(SemTagMenu.hoverIdRE)){
id=_42[i].id;
break;
}
}
}
if(id&&0<id.length){
var idx=id.substr(SemTagSvcPortal.hoverIdPrefix.length);
return document.getElementById(SemTagSvcPortal.liveElemPrefix+idx);
}else{
return _41;
}
}else{
var _43=SemTagMenu.getCurrentElement();
return _43?_43:_41;
}
},findHoverFromLiveElement:function(_44){
var idx=_44.getAttribute(SemTagSvcPortal.hoverIdPrefix+"idx");
return document.getElementById(SemTagSvcPortal.hoverIdPrefix+idx);
},inMenu:function(_45,_46,_47,_48){
if(!_45){
return false;
}
if(!SemTagMenu.showing){
return false;
}
if(!_47){
_47=0;
}
if(!_48){
_48=0;
}
var _49=SemTagSvcPortal.getEventAbsoluteX(_46);
var _4a=SemTagSvcPortal.getEventAbsoluteY(_46);
var _4b=_45.style.left.replace(/px$/,"");
var _4c=_45.style.top.replace(/px$/,"");
var _4d=parseInt(_4b)+parseInt(_45.clientWidth);
var _4e=parseInt(_4c)+parseInt(_45.clientHeight);
if((_49-1<=(_4b-_47))||(_4a-1<=(_4c-_48))||(_49>=(_4d+_47))||(_4a>=(_4e+_48))){
return false;
}else{
return true;
}
},mouseout:function(_4f){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.mouseout");
}
if(_4f.type=="blur"){
var _50=SemTagSvcPortal.getElementFromEvent(_4f);
if(SemTagMenu.currentElem){
if(SemTagSvcPortal.trace){
SemTagUtil.log("clearEventWatch");
}
SemTagSvcPortal.clearEventWatch(SemTagMenu.currentElem,"keydown",SemTagMenu.a11y,false);
}
if(!SemTagMenu.showing){
if(SemTagSvcPortal.trace){
SemTagUtil.log("dismissing hover");
}
if(!_50.className.match(SemTagMenu.iconNameRE)){
SemTagMenu.hide();
}
}
}else{
var _51=SemTagMenu.id;
menuElem=document.getElementById(_51);
if(SemTagMenu.inMenu(menuElem,_4f)){
}else{
SemTagMenu.startHideTimer(_51);
}
}
},mouseover:function(_52){
SemTagMenu.clearTimeouts();
},click:function(_53){
if(!_53){
return;
}
var _54=SemTagSvcPortal.getElementFromEvent(_53);
var _55=SemTagSvcPortal.getParentByClassName("semtag_header",_54);
var _56=SemTagSvcPortal.getParentByClassName("personMenuActions",_54);
if(!_55&&!_56){
SemTagMenu.hide(SemTagMenu.id);
}
},catchKeyup:function(_57){
var _58;
var _59=false;
if(_57){
if(_57.which){
_58=_57.which;
}else{
_58=_57.keyCode;
}
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.catchKeyup:key="+_58);
}
var _5a=document.activeElement.className;
if(_5a.indexOf("lotusui")>-1){
_59=true;
}
if(_58==16&&_59&&SemTagMenu.sftflag){
SemTagMenu.exitCard();
}
SemTagMenu.sftflag=false;
},catchEscape:function(_5b){
var key;
if(_5b){
if(_5b.which){
key=_5b.which;
}else{
key=_5b.keyCode;
}
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.catchEscape:key="+key);
}
if(key==16){
SemTagMenu.sftflag=true;
}
if(key==27){
var _5c=null;
if(SemTagMenu.showing){
var _5d=SemTagMenu.getCurrentElement();
if(_5d){
_5c=SemTagSvcPortal.getHoverElement(_5d);
}
}
SemTagMenu.hide();
if(_5c){
_5c.focus();
}
}
},a11y:function(_5e){
if(_5e){
var key;
if(_5e.which){
key=_5e.which;
}else{
key=_5e.keyCode;
}
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.a11y:key="+key);
}
if(key==13){
var _5f=SemTagSvcPortal.getElementFromEvent(_5e);
if(_5f){
SemTagMenu.a11yMode=true;
var _60=(SemTagMenu.staticHover?_5f:SemTagMenu.getMenuTag());
if(SemTagUtil.isGecko){
var evt=document.createEvent("MouseEvents");
evt.initEvent("click",true,true);
SemTagUtil.fireEvent(_60,evt);
}else{
_60.click();
}
SemTagMenu.stopEvent(_5e);
}
}
}else{
var _5f=SemTagMenu.currentElem;
if(_5f){
SemTagMenu.a11yMode=true;
var _60=(SemTagMenu.staticHover?_5f:SemTagMenu.getMenuTag());
if(SemTagUtil.isGecko){
var _61=document.createEvent("MouseEvents");
_61.initEvent("click",true,true);
SemTagUtil.fireEvent(_60,_61);
}else{
_60.click();
}
SemTagMenu.stopEvent(evt);
}
}
return true;
},stopEvent:function(_62){
if(!_62){
return;
}
if(SemTagUtil.isGecko){
try{
_62.preventDefault();
_62.stopPropagation();
}
catch(e){
}
}else{
try{
_62.returnValue=false;
_62.cancelBubble=true;
}
catch(e){
if(SemTagSvcPortal.trace){
SemTagUtil.log("stopEvent caught "+e);
}
}
}
},startHideTimer:function(_63){
if(0<SemTagMenu.hideDelay&&!SemTagMenu.a11yMode&&!SemTagSvcPortal.debug){
SemTagMenu.timeouts.push(window.setTimeout("SemTagMenu.endHideTimer(\""+_63+"\")",SemTagMenu.hideDelay));
}
},endHideTimer:function(_64){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Menu.endHideTimer");
}
SemTagMenu.hide(_64);
},clearTimeouts:function(){
var tos=SemTagMenu.timeouts;
for(i=0;i<tos.length;i++){
window.clearTimeout(tos[i]);
}
},defaultCursor:function(){
document.body.style.cursor="default";
},waitCursor:function(){
document.body.style.cursor="progress";
},shtest:function(){
var _65=document.getElementById("lessItem");
var _66=document.getElementById("moreItem");
_65.style.display="none";
_66.style.display="block";
},exitCard:function(){
var _67=null;
if(SemTagMenu.showing){
var _68=SemTagMenu.getCurrentElement();
if(_68){
_67=SemTagSvcPortal.getHoverElement(_68);
}
}
SemTagMenu.hide();
if(_67){
_67.focus();
}
}};
if(SemTagSvcPortalGlobal.isDynamicLoading&&SemTagSvcPortalGlobal.isPersonCardHandlerRequired){
window.setTimeout(SemTagMenu.init,SemTagSvcPortal.DELAY);
}



	

var SemTagPerson={INLINE:"X-person-display-inline",activeElems:new Array(),requestor:new SemTagUtil.crossDomainRequest(),basePumaResolvedUrl:SemTagSvcPortalGlobal.basePumaResolvedUrl,reqMethod:eval("callUserProfileServlet"),collapsedImgUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/imgcollapsed.gif",expandedImgUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/imgexpanded.gif",moreActionImgUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/ShowActions.gif",verticalRulerUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/Line_Tree.gif",profileImageUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/Properties.gif",noPhotoPersonUrl:SemTagSvcPortalGlobal.contextUrl+"/ui/NoPhotoPerson.gif",pumaUrl:"um/secure/users/profiles",init:function(){
if(SemTagSvcPortal.trace){
console.log("Inside init of SemTagPerson.init()");
}
if(SemTagSvcPortal.ifConnUrlExists=="true"&&SemTagSvcPortal.isconnServerNew==false){
if(eval("document.body != null")==false){
SemTagPerson.processUntilAvailable(SemTagPerson.init,"(document.body != null)",null,null,null,null);
return;
}else{
SemTagPerson.loadScript();
}
}
if(SemTagSvcPortal.ifConnUrlExists=="true"&&SemTagSvcPortal.isconnServerNew==true){
if(eval("document.body != null")==false){
SemTagPerson.processUntilAvailable(SemTagPerson.init,"(document.body != null)",null,null,null,null);
return;
}else{
SemTagSvcPortal.loadConnScript();
}
}
SemTagSvcPortal.setCallback("hcard",SemTagPerson.hcardsAdded);
SemTagSvcPortal.setCallback("mailto",SemTagPerson.mailtosAdded);
SemTagPerson.processHcards(SemTagSvcPortal.getNodes("hcard"));
SemTagPerson.processMailtos(SemTagSvcPortal.getNodes("mailto"));
SemTagSvcPortal.watchEvent(window,"load",SemTagPerson.clearInternalData,false);
},loadScript:function(){
var _1=document.createElement("script");
var _2=SemTagSvcPortal.connUrl;
_2+=(_2.indexOf("?")==-1)?"?":"&";
_2+="lang="+SemTagSvcPortal.lang;
_1.src=_2;
document.body.insertBefore(_1,document.body.firstChild);
},clearInternalData:function(){
var _3=SemTagPerson.activeElems;
while(_3!=="undefined"&&_3!=null&&0<_3.length){
_3.pop();
}
_3=SemTagAwrns.activeElems;
while(_3!=="undefined"&&_3!=null&&0<_3.length){
_3.pop();
}
},nls:{"start_chat":SemTagSvcPortalGlobal.start_chat,"add_to_contact":SemTagSvcPortalGlobal.add_to_contact,"send_email":SemTagSvcPortalGlobal.send_email,"view_person":SemTagSvcPortalGlobal.view_person,"hover_label":SemTagSvcPortalGlobal.hover_label_person,"work_location":SemTagSvcPortalGlobal.work_location,"specify_email_if_connection":SemTagSvcPortalGlobal.specify_email_if_connection},getPersonResolverUrl:SemTagSvcPortalGlobal.getPersonResolverUrl,getMarkup:function(_4,_5,_6,_7,_8,_9){
var _a="";
var _b=(typeof (_4.email)!="undefined"&&_4.email.internet)?_4.email.internet:null;
if(!(SemTagSvcPortal.ifConnUrlExists=="true"&&_b!=null)){
if(_4._profileinplace){
var _c=_4.uid.replace(/\\/g,"&perc5C");
_a="javascript:SemTagPerson.executeJSTargetInFrame(\"javascript:doShowProfile(\\\""+_c+"\\\")\")";
}else{
_a="javascript:SemTagPerson.openPersonRecord()";
}
_6.push(SemTagSvcPortal.getMenuItemJson(SemTagPerson.nls.view_person,_a,-100));
}
if(_b){
_6.push(SemTagSvcPortal.getMenuItemJson(SemTagPerson.nls.send_email,"mailto:"+_b,-90));
}
if(SemTagSvcPortal.debug){
console.log("ST Status got in person1.jsp is:"+typeof (SemTagAwrns)!="undefined"&&typeof (_4.X.ststatus)!="undefined");
}
if(SemTagSvcPortal.debug){
console.log(_4.X.ststatus+":"+(_4.X.ststatus=="online"||_4.X.ststatus=="away"));
}
if(SemTagSvcPortal.sametimeSTProxy){
var _d="javascript:SemTagAwrns.openAddToContacts(\""+_4.X.imn+"\")";
_6.push(SemTagSvcPortal.getMenuItemJson(stproxy.uiControl.i18nStrings.contextMenuAddToContacts,_d,-40));
}
if(typeof (SemTagAwrns)!="undefined"&&typeof (_4.X.ststatus)!="undefined"&&(_4.X.ststatus=="online"||_4.X.ststatus=="away")){
var _e="javascript:SemTagAwrns.openChat(\""+_4.X.imn+"\")";
_6.push(SemTagSvcPortal.getMenuItemJson(SemTagPerson.nls.start_chat,_e,-80));
if(SemTagSvcPortal.sametimeSTProxy){
var _f="javascript:SemTagAwrns.openCall(\""+_4.X.imn+"\")";
var _10="javascript:SemTagAwrns.openInstantMeeting(\""+_4.X.imn+"\")";
var _11="javascript:SemTagAwrns.openSendAnnouncement(\""+_4.X.imn+"\")";
_6.push(SemTagSvcPortal.getMenuItemJson(stproxy.uiControl.i18nStrings.contextMenuCall,_f,-70));
_6.push(SemTagSvcPortal.getMenuItemJson(stproxy.uiControl.i18nStrings.contextMenuInstantMeeting,_10,-60));
_6.push(SemTagSvcPortal.getMenuItemJson(stproxy.uiControl.i18nStrings.contextMenuSendAnnouncement,_11,-50));
}
if(SemTagSvcPortal.sametimeSTLinks){
_6.push(SemTagSvcPortal.getMenuItemJson(SemTagPerson.nls.add_to_contact,"javascript:SemTagPerson.addToSametimeList()",-11));
}
}
var _12=SemTagSvcPortal.getActions("person");
if(_12){
for(i=0;i<_12.length;i++){
var _13=_12[i].showif;
var _14=true;
if(_13){
try{
var _15=eval(_13);
_14=_15.call(null,SemTagPerson.currentPerson);
}
catch(e){
try{
var _15=eval(_13);
_14=_15.call(null,SemTagPerson.currentPerson);
}
catch(e2){
_14=false;
}
}
}
if(_14){
var _16=_12[i].label;
if(_16.match(/nls\.[a-z]/)){
_16=eval(_16);
}
if(!(_16.indexOf("Send Instant")>-1)){
var _17=_12[i].url.replace(/@@@ARGS@@@/g,"SemTagPerson.currentPerson");
_6.push(SemTagSvcPortal.getMenuItemJson(_16,_17,_12[i].order));
}
}
}
}
if(!_4._inline){
if(SemTagSvcPortal.ifConnUrlExists=="true"&&(SemTagSvcPortal.isconnServerNew==false)&&(_b!=null)){
_8.write("<div class='popupPersonCard' id='businessCard'>");
_8.write("</div>");
}else{
var _18="";
if(typeof (SemTagAwrns)!="undefined"&&typeof (_4.X.ststatus)!="undefined"&&(_4.X.ststatus=="online"||_4.X.ststatus=="away")){
_18=_4.X.ststatus;
}
var _19=null;
if(_4.photo!=null&&_4.photo!=="undefined"&&_4.photo.length>0){
_19=_4.photo;
}else{
_19=SemTagPerson.noPhotoPersonUrl;
}
_8.write("<div class ='businessCardMenu'>");
_8.write("<span class='photoCard' id ='imageSpan'><div id='imageDiv' style='height:90px; width:90px' >");
_8.write("<img id='personImg' tabindex=0 style='border:1px solid rgb(192,192,192);float:right;padding:10px ; height:50px; width:50px; background-color:white;margin-right:6px' src='"+_19+"' onMouseover='SemTagPerson.imgHoverIn();return false;' alt='"+_4.fn+" "+SemTagMenu.nls.a11y_photo+"' title='"+_4.fn+" "+SemTagMenu.nls.a11y_photo+"' role='region' aria-label='UserImage' / >");
_8.write(" <img id='personImg1' tabindex=0 style='display:none;border:1px solid rgb(192,192,192);float:right;padding:10px ; height:82px; width:82px; background-color:white;margin-right:6px' src='"+_19+"' onMouseout='SemTagPerson.imgHoverOut();return false;' alt='"+_4.fn+" "+SemTagMenu.nls.a11y_photo+"' title='"+_4.fn+" "+SemTagMenu.nls.a11y_photo+"' role='region' aria-label='UserImage'/></div></span>");
_8.write("<div class='businessCard'><ul role='region' aria-label='listitem'dir='"+_5+"'>");
_8.write("<li class='cardName' onkeydown=\"SemTagMenu.catchEscape();\" onkeyup=\"SemTagMenu.catchKeyup();\" role='region' aria-label='listitem'><a href='#' style='text-Decoration:none;color:black'>"+_4.fn+"</a></li>");
if(typeof (SemTagAwrns)!="undefined"&&typeof (_4.X.ststatus)!="undefined"&&(_4.X.ststatus=="online"||_4.X.ststatus=="away")){
_8.write("<span id='statusIcon' style='vertical-align:text-top'><a href='#' style='text-Decoration:none;color:black'>"+SemTagAwrns.st+_18+"</a></span>");
}
if(SemTagSvcPortalGlobal.debug){
console.log("person got in getMarkUp method is:"+_4);
}
if(SemTagSvcPortalGlobal.collapsedItems!=null){
_8.write(SemTagPerson.getItemsAsHtml(SemTagSvcPortalGlobal.collapsedItems,"collapsed"));
}
_8.write("</ul></div>");
if(SemTagSvcPortalGlobal.showDetailsFlag){
_8.write("<div class='showMoreDiv'>");
_8.write("<span><img tabIndex=0 id='expCollapImg' src='"+SemTagPerson.collapsedImgUrl+"' alt ='"+SemTagMenu.nls.ally_collapsedImage+" ' title='"+SemTagMenu.nls.ally_collapsedImage+" ' onClick='SemTagPerson.imgClicked();' onKeydown='SemTagPerson.imgClicked();' role='region' aria-label='showMore'/><label id='toggleLabel' class='showMoreLabel'>"+SemTagMenu.nls.ally_showMore+"</label></font></span>");
_8.write("</div>");
}
_8.write("<div class='businessCardExtended' id='expandedSection' style='display:none'><ul role='region' aria-label='listItem' style='padding-top:5px;align:left;' dir='"+_5+"'>");
if(SemTagSvcPortalGlobal.expandedItems!=null){
_8.write(SemTagPerson.getItemsAsHtml(SemTagSvcPortalGlobal.expandedItems,"expanded"));
}
_8.write("<li></li></ul></div>");
_8.write("</div>");
}
}
},getItemsAsHtml:function(_1a,_1b){
var _1c=new String("");
if(_1a!=null){
var _1d=_1a.split(",");
var i=0;
if(SemTagSvcPortal.debug){
console.log("Length of card items got is:"+_1d.length);
}
while(i<_1d.length){
var _1e=_1d[i].replace(/^\s+|\s+$/g,"");
var _1f=new String("");
if(_1e.match("businessCategory")){
_1f=".category";
}else{
if(_1e.match("carLicense")){
_1f=".X.carlicense";
}else{
if(_1e.match("cn")&&_1e.length==2){
_1f=".fn";
}else{
if(_1e.match("countryName")){
_1f=".adr.countryname";
}else{
if(_1e.match("departmentNumber")){
_1f=".X.departmentnumber";
}else{
if(_1e.match("description")){
_1f=".note";
}else{
if(_1e.match("displayName")){
_1f=".fn";
}else{
if(_1e.match("employeeNumber")){
_1f=".X.employeenumber";
}else{
if(_1e.match("employeeType")){
_1f=".X.employeetype";
}else{
if(_1e.match("facsimileTelephoneNumber")){
_1f=".tel.fax";
}else{
if(_1e.match("givenName")){
_1f=".n.givenname";
}else{
if(_1e.match("homePostalAddress")){
_1f=".X.homeaddress";
}else{
if(_1e.match("ibm-gender")){
_1f=".X.gender";
}else{
if(_1e.match("ibm-generationQualifier")){
_1f=".n.honorificsuffix";
}else{
if(_1e.match("ibm-hobby")){
_1f=".X.hobby";
}else{
if(_1e.match("ibm-jobTitle")){
_1f=".title";
}else{
if(_1e.match("ibm-middleName")){
_1f=".n.additionalname";
}else{
if(_1e.match("ibm-otherEmail")){
_1f=".email.X_notes";
}else{
if(_1e.match("ibm-personalTitle")){
_1f=".n.honorificprefix";
}else{
if(_1e.match("ibm-primaryEmail")){
_1f=".email.internet";
}else{
if(_1e.match("mail")&&_1e.length==4){
_1f=".email.internet";
}else{
if(_1e.match("ibm-regionalLocale")){
_1f=".X.locale";
}else{
if(_1e.match("ibm-timeZone")){
_1f=".tz";
}else{
if(_1e.match("initials")){
_1f=".X.initials";
}else{
if(_1e.match("localityName")){
_1f=".adr.locality";
}else{
if(_1e.match("manager")){
_1f=".X.manager";
}else{
if(_1e.match("mobile")){
_1f=".tel.cell";
}else{
if(_1e.match("o")&&_1e.length==1){
_1f=".org.name";
}else{
if(_1e.match("ou")&&_1e.length==2){
_1f=".org.unit";
}else{
if(_1e.match("pager")){
_1f=".tel.pager";
}else{
if(_1e.match("postalAddress")){
_1f=".X.fulladdress";
}else{
if(_1e.match("postalCode")){
_1f=".adr.postalcode";
}else{
if(_1e.match("preferredLanguage")){
_1f=".X.language";
}else{
if(_1e.match("roomNumber")){
_1f=".adr.extendedaddress";
}else{
if(_1e.match("secretary")){
_1f=".X.secretary";
}else{
if(_1e.match("seeAlso")){
_1f=".url";
}else{
if(_1e.match("sn")&&_1e.length==2){
_1f=".n.familyname";
}else{
if(_1e.match("stateOrProvinceName")){
_1f=".adr.region";
}else{
if(_1e.match("street")){
_1f=".adr.streetaddress";
}else{
if(_1e.match("telephoneNumber")){
_1f=".tel.voice";
}else{
if(_1e.match("uid")&&_1e.length==3){
_1f=".uid";
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
if(0<_1f.length){
var _20=new String("");
var pos=_1f.indexOf(".",1);
while(pos!=-1){
if(0<_20.length){
_20+=" && ";
}
_20+="SemTagPerson.currentPerson"+_1f.substring(0,pos);
pos=_1f.indexOf(".",pos+1);
}
if(0<_20.length){
_20+=" && ";
}
_20+="SemTagPerson.currentPerson"+_1f;
var _21=0;
if(_1b.match("expanded")){
_21=0;
}
if(_1b.match("collapsed")){
_21=1;
}
if(SemTagSvcPortal.debug){
console.log(_20.toString());
}
if(SemTagSvcPortal.debug){
console.log(eval(_20.toString()));
}
var _22="<li +tabindex="+_21+" style='padding-bottom:3px'> "+eval(_20.toString())+"</li>";
if(_1e.indexOf("mail")!=-1){
_22="<li><a href='mailto: "+eval(_20.toString())+"'> "+eval(_20.toString())+"</a></li>";
}
if(eval(_20.toString())){
_1c+=_22;
}
}
i++;
}
}
return _1c;
},imgClicked:function(){
var _23=document.getElementById("expCollapImg");
var _24=document.getElementById("toggleLabel");
var _25=document.getElementById("expandedSection");
var _26=navigator.appName;
if(_26=="Netscape"){
_25.style.width="240";
}else{
_25.style.width="378";
}
if(_23.src.indexOf(SemTagPerson.expandedImgUrl)>1){
_23.src=SemTagPerson.collapsedImgUrl;
_23.title=SemTagMenu.nls.ally_collapsedImage;
_24.innerHTML=SemTagMenu.nls.ally_showMore;
}else{
_23.src=SemTagPerson.expandedImgUrl;
_23.title=SemTagMenu.nls.ally_expandImage;
_24.innerHTML=SemTagMenu.nls.ally_showLess;
}
var _27=document.getElementById("expandedSection");
_27.style.display=(_27.style.display!="none"?"none":"");
},imgHoverIn:function(){
var _28=document.getElementById("personImg");
var _29=document.getElementById("personImg1");
_28.style.display="none";
_29.style.display="";
},imgHoverOut:function(){
var _2a=document.getElementById("personImg");
var _2b=document.getElementById("personImg1");
_2a.style.display="";
_2b.style.display="none";
},getInlineMarkup:function(_2c,_2d,_2e){
var _2f=_2c.email.internet;
_2e.write("<div class='personMenu'>");
_2e.write("<div class='photoCard'><img src='"+_2c.photo+"' alt=''/></div>");
_2e.write("<div class='businessCard' dir='"+_2d+"'>");
var _30=(_2c._headeronly?"class='vcard X-person-inside-inline'":"");
_2e.write("<ul "+_30+" dir='"+_2d+"'>");
_2e.write("<li class='cardName'><span class='fn'>"+_2c.fn+"</span></li>");
_2e.write("<li class='email'><span class'type' style='display:none;'>internet</span><span class='value'>"+_2f+"</span></li>");
if(_2c.title){
_2e.write("<li>"+_2c.title+"</li>");
}
if(_2c.tel&&_2c.tel.voice){
_2e.write("<li>"+_2c.tel.voice+"</li>");
}
_2e.write("</ul>");
_2e.write("</div>");
if(_2c._headeronly){
_2e.write("<div style='clear:both;'>");
}else{
_2e.write("<div class='personMenuActions' dir='"+_2d+"' style='clear:both;'>");
_2e.write("<ul>");
_2e.write("<li><a href='NEEDSWORK"+"'>"+SemTagPerson.nls.view_person+"</a></li>");
_2e.write("<li><a href='mailto:"+_2f+"'>"+SemTagPerson.nls.send_email+"</a></li>");
_2e.write("<li><a href='NEEDSWORK"+"'>"+SemTagPerson.nls.add_to_contact+"</a></li>");
_2e.write("</ul>");
}
_2e.write("</div>");
_2e.write("</div>");
},openPersonRecord:function(){
var _31=SemTagPerson.currentPerson;
var _32=null;
if(_31&&_31.uid&&_31.uid.length>0){
_32=_31.uid;
}else{
if((typeof (_31.email)!="undefined"&&typeof (_31.email.internet)!="undefined"&&0<_31.email.internet.length)){
_32=_31.email;
}
}
var _33=encodeURIComponent(_32);
var _34=encodeURIComponent(_33);
if(SemTagSvcPortal.debug){
console.log("userId3is :"+_34+":"+SemTagPerson.currentPerson.fn+":"+SemTagPerson.getPersonResolverUrl()+":");
}
if(SemTagSvcPortal.debug){
console.log("NEWReplaced string is:"+SemTagPerson.getPersonResolverUrl().replace("TOBEREPLACED",_34));
}
window.open(SemTagPerson.getPersonResolverUrl().replace("TOBEREPLACED",_34),null,"height=640,width=512,resizable=yes,scrollbars=yes,status=yes,toolbar=no,menubar=no,location=no");
},addToSametimeList:function(){
var _35=SemTagPerson.currentPerson.email.internet;
var fn_=encodeURIComponent(SemTagPerson.currentPerson.fn);
var fn=encodeURIComponent(fn_);
window.open(SemTagPerson.getPersonResolverUrl().replace("TOBEREPLACED",_35+"/"+fn),null,"height=640,width=512,resizable=yes,scrollbars=yes,status=yes,toolbar=no,menubar=no,location=no");
},out:function(){
this.buffer="";
this.write=function(str){
this.buffer+=str;
};
},processHcards:function(_36){
if(SemTagSvcPortal.trace){
console.log("Inside processHcards of SemTagSerson and length of hcards is:"+(_36?_36.length:0));
}
if(!_36||_36.length==0){
return;
}
for(var i=0;i<_36.length;i++){
var _37=_36[i];
var _38=SemTagPerson.getNameElement(_37);
if(!_38){
continue;
}
var _39=_38.getAttribute(SemTagSvcPortal.liveElemPrefix+"id");
if(_39&&SemTagSvcPortal.ifConnUrlExists=="false"){
if(SemTagPerson.activeElems[_39]){
continue;
}else{
if(SemTagSvcPortal.trace){
SemTagUtil.log("Person.leid="+_39+" being processed again!");
}
continue;
}
}
var _3a=SemTagSvcPortal.getElementsByClassName("email",_37);
_3a=_3a||null;
if((_3a==null||_3a.length==0)&&SemTagSvcPortal.ifConnUrlExists=="true"&&SemTagSvcPortal.isconnServerNew===false){
console.info(SemTagPerson.nls.specify_email_if_connection+"Email is for user:"+uid);
}
if(SemTagSvcPortal.ifConnUrlExists=="true"&&SemTagSvcPortal.isconnServerNew){
if(SemTagSvcPortal.debug){
console.log("Beofore calling lconn.profiles.bizCard.bizCard.processTag for email:"+(_3b+":"+(_3b?_3b.internet:"Not defined")));
}
try{
if(eval("window.lconn != null")==false||(lconn.profiles==null||lconn.profiles=="undefined")){
SemTagPerson.processUntilAvailable(SemTagPerson.processHcards,"window.lconn != null && !(lconn.profiles == null || lconn.profiles == 'undefined')",null,null,null,_36);
}else{
lconn.profiles.bizCard.bizCard.processTag(_38);
}
}
catch(e){
console.log("Connection server is probably down please check following resource is up:"+SemTagSvcPortalGlobal.connUrl+"/profiles/portalJS/portalBizCard.js");
console.log("Actual Error occured is:"+e);
return;
}
}
var _3c=SemTagSvcPortal.getElementsByClassName("userObjectId",_37);
if(SemTagSvcPortal.debug){
console.log("userObjectid element got is:"+_3c);
}
var _3b=SemTagUtil.getHcardAttributeValue("email",_37);
if(!_3c){
if(!_3b.internet){
var uid=SemTagUtil.getHcardAttributeValue("uid",_37);
if(!uid){
continue;
}
}
}
if(SemTagPerson.isInline(_37)){
var _3d={"target":_38};
SemTagPerson.requestPersonInfo(_3d);
}else{
var _3e=SemTagSvcPortal.getTextValue(_38);
var _3f=_3e.indexOf("click");
var _40=_3e.substring(0,_3f)+SemTagPerson.nls.hover_label+" "+SemTagMenu.nls.a11y_hover;
if(SemTagSvcPortal.ifConnUrlExists=="false"||(SemTagSvcPortal.ifConnUrlExists=="true"&&SemTagSvcPortal.isconnServerNew==false)){
if(SemTagSvcPortal.debug){
console.log("Adding hover for old business card case or no business card");
}
SemTagSvcPortal.addHover(_38,SemTagPerson.showHover,SemTagPerson.showMenu,_40);
}else{
if(SemTagSvcPortal.debug){
console.log("Inside  ifConnURLExistsnew"+SemTagSvcPortal.ifConnUrlExists+":"+SemTagSvcPortal.isconnServerNew);
}
var _41=_38.getAttribute(SemTagSvcPortal.refcntAttr);
if(_41){
_38.setAttribute(SemTagSvcPortal.refcntAttr,parseInt(Number(_41)+1));
}else{
_38.setAttribute(SemTagSvcPortal.refcntAttr,"1");
SemTagSvcPortal.hoverIdx++;
_38.setAttribute(SemTagSvcPortal.liveElemPrefix+"id",SemTagSvcPortal.hoverIdx);
}
}
_39=_38.getAttribute(SemTagSvcPortal.liveElemPrefix+"id");
if(SemTagSvcPortal.debug){
console.log("in semtagperson leid got is:"+_39);
}
if(_39){
SemTagPerson.activeElems[_39]=true;
}
}
}
},processUntilAvailable:function(_42,_43,_44,_45,_46,_47){
if(typeof (_42)!="function"){
return;
}
var _48=500;
var _49=20;
var _4a=true;
if(typeof (_45)=="number"){
_48=_45;
}
if(typeof (_46)=="number"){
_49=_46;
}
if(typeof (_44)=="boolean"){
_4a=_44;
}
var _4b="";
var _4c=0;
console.log("eval(test) is :"+eval(_43));
var _4d=Array.prototype.slice.call(arguments);
var _4e=_4d.shift();
var _4f=_4d.shift();
var _50=_4d.shift();
var _51=_4d.shift();
var _52=_4d.shift();
if(SemTagSvcPortal.trace){
console.log("shifted args length is:"+_4d.length+":"+_4d);
}
if(eval(_43)){
if(_47!=null){
_42.apply(null,Array.prototype.slice.call(_4d));
}else{
_42();
}
return;
}
if(SemTagSvcPortal.trace){
console.log("inside processUntilAvailable for time :"+_4c+":"+eval(_43)+":"+"clearing intervalid:"+_4b);
}
_4b=window.setInterval(function(){
_4c++;
if(SemTagSvcPortal.trace){
console.log("inside processUntilAvailable for time :"+_4c+":"+eval(_43)+":"+"clearing intervalid:"+_4b);
}
if(eval(_43)){
window.clearInterval(_4b);
if(_47!=null){
_42.apply(null,Array.prototype.slice.call(_4d));
}else{
_42();
}
}else{
if(_4c>=_49){
window.clearInterval(_4b);
if(_4a){
throw new Error("processUntilAvailable: test was never met: "+_43);
}
}
}
},_48);
},isInline:function(_53){
return SemTagUtil.getHcardAttributeValue(SemTagPerson.INLINE,_53);
},processMailtos:function(_54){
if(!_54||_54.length==0){
return;
}
while(_54.length>0){
var _55=_54.pop();
SemTagSvcPortal.watchEvent(_55,"mouseover",SemTagPerson.tagMouseover,false);
}
},hcardsAdded:function(_56){
if(SemTagSvcPortal.trace){
SemTagUtil.log("hcardsAdded");
}
if(SemTagSvcPortal.trace){
console.log("INside hcardsAdded length of nodes got it:"+SemTagSvcPortal.getNodes("hcard").length+":"+_56);
}
if(_56&&_56.length>0){
SemTagPerson.processHcards(_56);
}else{
SemTagPerson.processHcards(SemTagSvcPortal.getNodes("hcard"));
}
},hcardsAdded:function(){
if(SemTagSvcPortal.trace){
SemTagUtil.log("hcardsAdded");
}
if(SemTagSvcPortal.trace){
console.log("INside hcardsAdded length of nodes got it:"+SemTagSvcPortal.getNodes("hcard").length);
}
SemTagPerson.processHcards(SemTagSvcPortal.getNodes("hcard"));
},mailtosAdded:function(){
SemTagPerson.processMailtos(SemTagSvcPortal.getNodes("mailto"));
},showHover:function(_57){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Person.showHover");
}
var _58=SemTagUtil.getHcardAttributeValue("X-person-inside-inline",SemTagSvcPortal.getLiveElementFromEvent(_57));
var _59=_58?null:SemTagPerson.nls.hover_label;
SemTagSvcPortal.showHover(_57,SemTagPerson.showMenu,_59);
return false;
},showMenu:function(_5a){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Person.showMenu");
}
SemTagMenu.waitCursor();
SemTagMenu.stopEvent(_5a);
SemTagPerson.requestPersonInfo(_5a);
return false;
},renderCard:function(_5b){
var _5c=new BusinessCard.out();
BusinessCard.getMenuData(_5b,null,null,null,_5c);
if(SemTagSvcPortal.trace){
console.log("Inside renderCard"+_5c.buffer+":"+document.getElementById("businessCard"));
}
document.getElementById("businessCard").innerHTML=_5c.buffer;
},requestPersonInfo:function(_5d){
SemTagPerson.reqMethod.call(SemTagPerson,_5d);
},dispatch:function(_5e){
var _5f=(_5e.email&&_5e.email.internet)?_5e.email.internet:null;
if(_5f){
SemTagPerson.requestor.dispatch(_5f.toLowerCase(),_5e);
}
},requestReturn:function(_60,_61,_62){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Person.requestReturn: "+_61+" ("+(_60?"success":"fail")+")");
}
var _63=_60?_61:SemTagPerson.emptyPerson();
if(_63){
var _64=SemTagSvcPortal.getLiveElementFromEvent(_62);
SemTagPerson.fillPersonJsonMoreFromDom(_63,_64);
SemTagPerson.update(_63,_64,_62);
}else{
SemTagMenu.defaultCursor();
}
},appendObjectIdToUrl:function(_65){
if(SemTagSvcPortal.trace){
console.log("entering appendObjectIdToUrl:"+_65);
}
if(SemTagSvcPortal.trace){
console.log("staring with SemTagPerson.basePumaResolvedUrl:"+SemTagPerson.basePumaResolvedUrl);
}
var _66=SemTagPerson.basePumaResolvedUrl.indexOf(SemTagPerson.pumaUrl);
var _67="";
if(_66>-1){
_67=SemTagPerson.basePumaResolvedUrl.substr(0,_66)+SemTagPerson.pumaUrl+"/"+_65+SemTagPerson.basePumaResolvedUrl.substr(_66+SemTagPerson.pumaUrl.length);
}
if(SemTagSvcPortal.trace){
console.log("Returning updated url:"+_67);
}
return _67;
},fillPersonJsonMoreFromDom:function(_68,_69){
if(SemTagSvcPortal.debug){
window.status="Person.fillPersonJsonMoreFromDom";
}
var _6a=SemTagSvcPortal.findNameElementInHcard(_69);
if(_6a){
var _6b=SemTagSvcPortal.getTextValue(_6a);
var _6c=_6b.indexOf("click");
if(_6c>0){
_68.fn=_6b.substring(0,_6c);
}else{
_68.fn=SemTagSvcPortal.getTextValue(_6a);
}
}
var _6d=SemTagPerson.getElementEmail(_69);
if(_6d){
_68.email={"internet":_6d};
}
var uid=SemTagUtil.getHcardAttributeValue("uid",_69);
if(uid){
_68.uid=uid;
}
if(_68.userObjectID){
var _6e=_68.userObjectID.split("/");
if(_6e&&_6e.length>0){
_68.userObjectID=_6e[_6e.length-1];
}
}
if(SemTagSvcPortal.debug&&_68){
console.log("person.photo got is:"+_68.photoURL+(_68.photo&&_68.photo.length>0?"not null":"is not available"));
}
if(_68&&_68.photo&&_68.photo.length>0){
if(_68.userObjectID&&_68.userObjectID.length>0){
var _6f=SemTagPerson.appendObjectIdToUrl(_68.userObjectID+"/jpegPhoto");
_68.photo=_6f+"&index=0";
}else{
_68.photo=_68.photoURL;
}
}
if(!_68.tel||!_68.tel.voice){
var _70=SemTagSvcPortal.findElementByNameInHcard(_69,"tel");
if(_70){
var _71=SemTagSvcPortal.getTypedValue(_70,"voice");
_68.tel={"voice":_71["voice"]};
}
}
var _72=SemTagSvcPortal.findElementByNameInHcard(_69,"adr");
var _73={};
if(_72){
_73=SemTagPerson.getAddressJson(_72);
_68.adr=_73;
}
if(typeof (_68.adr)!="undefined"&&(_68.adr.locality||_68.adr.countryname||_68.adr.region)){
if(!_68.X){
_68.X={};
}
var _74=_68.adr.locality+", "+_68.adr.region+" "+_68.adr.countryname;
_68.X.worklocation=_74.replace(/undefined/g,"");
}
if(typeof (SemTagAwrns)!="undefined"){
if(!_68.X){
_68.X={};
}
_68.X.imn=SemTagAwrns.getSametimeId(_69);
_68.X.ststatus=_6a.getAttribute("semtag_ststatus");
}
},emptyPerson:function(){
return {"fn":"","email":{"internet":""}};
},update:function(_75,_76,_77){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Person.update");
}
SemTagPerson.currentPerson=_75;
var _78=SemTagSvcPortal.getParentByClassName("vcard",_76);
var _79=SemTagUtil.getHcardAttributeValue("X-person-header-only",_78);
if(_79){
_75._headeronly=true;
}
SemTagPerson.readHcardContext(_78,_75);
SemTagSvcPortal.setSemanticTagValue("hcard",_76,_75);
if(SemTagPerson.isInline(_78)){
var out=new SemTagPerson.out();
SemTagPerson.getInlineMarkup(_75,SemTagSvcPortal.bidi,out);
_78.innerHTML=out.buffer;
var _7a=SemTagUtil.getNodeClassValue(_78);
SemTagUtil.setNodeClassValue(_78,_7a.replace(/vcard/,"vcard-done"));
if(_79){
var _7b=SemTagSvcPortal.getElementsByClassName("vcard",_78,1);
if(_7b){
SemTagPerson.processHcards(_7b);
}
}
}else{
var _7c=new Array();
var _7d="personMenuActions";
var _7e=new SemTagPerson.out();
var _7f=new SemTagPerson.out();
SemTagPerson.getMarkup(_75,SemTagSvcPortal.bidi,_7c,_7d,_7e,_7f);
var _80=(typeof (_75.email)!="undefined"&&_75.email.internet)?_75.email.internet:null;
SemTagSvcPortal.setMenuData(_77,_7c,_7d,SemTagSvcPortal.getMenuHeaderJson(_7e.buffer,"text/html",-100),SemTagSvcPortal.getMenuFooterJson(_7f.buffer,"text/html",-100));
if(SemTagSvcPortal.trace){
console.log("values are in update of semtagperson:"+SemTagSvcPortal.ifConnUrlExists+":"+(SemTagSvcPortal.isconnServerNew===false));
}
if(SemTagSvcPortal.ifConnUrlExists=="true"&&(SemTagSvcPortal.isconnServerNew===false)&&_80!=null){
if(eval("window.BusinessCard != null")==false){
SemTagPerson.processUntilAvailable(BusinessCard.getProfileInfo,"(window.BusinessCard != null)",null,null,null,true,"SemTagPerson.renderCard",_80);
}else{
BusinessCard.getProfileInfo(true,"SemTagPerson.renderCard",_80);
}
}
}
},readHcardContext:function(_81,_82){
var _83=SemTagUtil.getHcardAttributeValue("X-person-inside-inline",_81);
if(_83){
_82._inline=true;
}
var _84=SemTagUtil.getHcardAttributeValue("X-person-inside-profile",_81);
if(_84){
_82._inprofile=true;
}
var _85=SemTagUtil.getHcardAttributeValue("X-person-profile-inplace",_81);
if(_85){
_82._profileinplace=true;
}
},getElementEmail:function(_86){
if(!_86){
alert("getElementEmail called with: "+_86);
}
var _87;
var _88=SemTagSvcPortal.getParentByClassName("vcard",_86);
if(_88){
_87=SemTagUtil.getHcardAttributeValue("email",_88);
_87=_87.internet;
}else{
if(_86.tagName=="A"&&_86.href.match(/^mailto:/)){
_87=_86.href.replace(/^mailto:/,"");
}
}
return _87;
},getNameElement:function(_89){
try{
if(_89.className!="vcard"){
_89=SemTagSvcPortal.getParentByClassName("vcard",_89);
}
var _8a=SemTagSvcPortal.getElementsByClassName("fn",_89,1)[0];
if(!_8a){
_8a=SemTagSvcPortal.getElementsByClassName("n",_89,1)[0];
}
return _8a;
}
catch(e){
if(SemTagSvcPortal.debug){
alert(e);
}
}
return null;
},getAddressJson:function(_8b){
var _8c={"postofficebox":"","streetaddress":"","locality":"","region":"","postalcode":"","countryname":""};
var _8d=_8b;
if(_8d.className!="adr"){
_8d=SemTagSvcPortal.getParentByClassName("adr",_8b);
}
if(_8d){
var _8e=_8d.childNodes;
for(var i=0;i<_8e.length;i++){
SemTagPerson.readAddressInfo(_8e[i],_8c);
}
}else{
_8c.streetaddress="5 Technology Park Drive";
_8c.locality="Westford";
_8c.region="MA";
_8c.postalcode="01886";
_8c.countryname="USA";
}
return _8c;
},readAddressInfo:function(_8f,_90){
var _91=_8f.childNodes;
if(_91){
for(var i=0;i<_91.length;i++){
SemTagPerson.readAddressInfo(_91[i],_90);
}
}
if(_8f.className!=null){
var cn=_8f.className;
if(cn.match(/(^|\s)post-office-box(\s|$)/i)){
_90.postofficebox=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)extenodeed-address(\s|$)/i)){
_90.extenodeedaddress=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)street-address(\s|$)/i)){
_90.streetaddress=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)locality(\s|$)/i)){
_90.locality=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)region(\s|$)/i)){
_90.region=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)postal-code(\s|$)/i)){
_90.postalcode=SemTagSvcPortal.getTextValue(_8f);
}else{
if(cn.match(/(^|\s)country-name(\s|$)/i)){
_90.countryname=SemTagSvcPortal.getTextValue(_8f);
}
}
}
}
}
}
}
}
},existsInObject:function(_92,_93){
var _94=_93.split(".");
var _95=_92;
var _96=true;
for(var i=0;i<_94.length;i++){
var _97;
if(_94[i].indexOf("(")>-1){
_97=_94[i].substr(0,_94[i].indexOf("("));
}else{
_97=_94[i];
}
if(_95[_97]){
_95=_95[_97];
}else{
_96=false;
break;
}
}
return _96;
},executeJSTargetInFrame:function(_98){
if(_98.indexOf("javascript:")>-1){
var _99=_98.substr(("javascript:".length));
var _9a=window;
if(!SemTagPerson.existsInObject(window,_99)){
for(var i=0;i<parent.frames.length;i++){
if(SemTagPerson.existsInObject(parent.frames[i],_99)){
_9a=parent.frames[i];
break;
}
}
}else{
}
_9a.eval(_98);
}else{
}
}};
function getTagFromServer(_9b){
var _9c=SemTagSvcPortal.getLiveElementFromEvent(_9b);
var _9d=SemTagPerson.getElementEmail(_9c);
if(_9d){
_9d=_9d.toLowerCase();
var src=SemTagPerson.servletUrl.replace(/@@@EMAIL@@@/,_9d);
if(SemTagSvcPortal.debug){
window.status="Person.getTagFromServer sending request for: "+_9d+")";
}
SemTagPerson.requestor.request(src,6000,SemTagPerson.requestReturn,_9c,_9d);
}else{
if(SemTagSvcPortal.debug){
alert("getTagFromServer couldn't find the e-mail");
}
var evt={"target":_9c};
SemTagPerson.requestReturn(false,null,evt);
}
};
function callUserProfileServlet(_9e){
if(SemTagSvcPortal.trace){
SemTagUtil.log("callUserProfileServlet");
}
var _9f="";
var _a0=SemTagSvcPortal.getLiveElementFromEvent(_9e);
var _a1="";
var _a2=SemTagPerson.getElementEmail(_a0);
if(_a2){
_a1="ibm-primaryEmail="+_a2;
}
var uid=SemTagUtil.getHcardAttributeValue("uid",_a0);
if(uid){
_a1="identifier="+uid;
}
_9f=SemTagUtil.getHcardAttributeValue("userObjectId",_a0);
var xml=null;
try{
if(_9f&&_9f.length>0){
var _a3=SemTagPerson.appendObjectIdToUrl(_9f)+"&expandRefs=true&includeAttributes=@@@AVAILATTRIBUTES@@@";
_a3=_a3.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr);
if(SemTagSvcPortal.trace){
console.log("SemTagPerson.servletUrlForObjectId is :"+_a3.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr));
}
xml=ibm.portal.xml.loadXml(_a3.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr));
}else{
if(uid&&uid.length>0){
var _a3=SemTagPerson.basePumaResolvedUrl+"&@@@QUERY@@@&includeAttributes=@@@AVAILATTRIBUTES@@@";
_a3=_a3.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr);
try{
xml=ibm.portal.xml.loadXml(_a3.replace("@@@QUERY@@@",_a1));
}
catch(er){
if(SemTagSvcPortal.debug){
console.info("Person.callUserProfileServlet Error caught is: "+er);
}
if(uid.indexOf("uid=")==0){
_a1=uid;
}else{
_a1="uid="+uid;
}
var _a4=SemTagPerson.basePumaResolvedUrl+"&expandRefs=true&includeAttributes=@@@AVAILATTRIBUTES@@@&searchAttributes=@@@QUERY@@@";
_a4=_a4.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr);
xml=ibm.portal.xml.loadXml(_a4.replace(/@@@QUERY@@@/,_a1));
}
}else{
var _a3=SemTagPerson.basePumaResolvedUrl+"&expandRefs=true&includeAttributes=@@@AVAILATTRIBUTES@@@&searchAttributes=@@@QUERY@@@";
_a3=_a3.replace("@@@AVAILATTRIBUTES@@@",SemTagSvcPortal.availAttribStr);
xml=ibm.portal.xml.loadXml(_a3.replace(/@@@QUERY@@@/,_a1));
}
}
}
catch(e){
if(SemTagSvcPortal.debug){
console.info("Person.callUserProfileServlet caught: "+e);
}
}
if(xml){
if(0<_9f.length){
var xsl=ibm.portal.xml.loadXsl(SemTagSvcPortalGlobal.contextUrl+"/xsl/UserAtomByIdToPersonJson.xsl");
}else{
var xsl=ibm.portal.xml.loadXsl(SemTagSvcPortalGlobal.contextUrl+"/xsl/UserAtomToPersonJson.xsl");
}
var _a5=ibm.portal.xml.transform(xml,xsl,null,null,true);
if(SemTagSvcPortal.trace){
SemTagUtil.log(_a5);
}
var _a6=eval(_a5)[0];
if(SemTagSvcPortal.trace){
console.log("Person got is:"+_a6);
}
if(!_a6&&!_a6.fn){
_a6=SemTagPerson.emptyPerson();
}
if(SemTagSvcPortal.trace){
console.log("person.photo is:"+_a6.photo);
}
SemTagPerson.fillPersonJsonMoreFromDom(_a6,_a0);
SemTagPerson.update(_a6,_a0,_9e);
return;
}else{
if(SemTagSvcPortal.trace){
SemTagUtil.log("bad XML");
}
}
var evt={"target":_a0};
SemTagPerson.requestReturn(false,null,evt);
};
SemTagPerson.init();


var SemTagAwrns={SVCNAME:"sametime",hcards:new Array(),activeElems:[],hasApplet:false,imIds:SemTagSvcPortalGlobal.preferredImIds,st:"",samtimeIconRequired:false,init:function(){
SemTagSvcPortal.setCallback(SemTagAwrns.SVCNAME,SemTagAwrns.hcardsAdded);
SemTagAwrns.processHcards(SemTagSvcPortal.getNodes(SemTagAwrns.SVCNAME));
},hcardsAdded:function(){
SemTagAwrns.processHcards(SemTagSvcPortal.getNodes(SemTagAwrns.SVCNAME));
},processHcards:function(_1){
_1=_1||null;
if(SemTagSvcPortal.debug){
console.log("in processHcards hcards got is"+_1);
}
if(_1==null){
return;
}
SemTagSvcPortal.sametimeSTProxy=(typeof (stproxy)!=="undefined");
SemTagSvcPortal.sametimeSTLinks=((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)!=="undefined"));
SemTagSvcPortal.sametimeNotIntegrated=((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)==="undefined"));
if(SemTagSvcPortal.debug){
console.log("Inside processHCards SemTagSvcPortal.sametimeSTProxy:"+SemTagSvcPortal.sametimeSTProxy+":"+SemTagSvcPortal.sametimeNotIntegrated+":"+SemTagSvcPortal.sametimeSTLinks);
}
if(SemTagSvcPortal.debug){
console.log("Inside processHCards SemTagSvcPortal.sametimeSTProxy:"+(typeof (stproxy)!=="undefined")+":"+((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)!=="undefined"))+":"+((typeof (stproxy)==="undefined")&&(typeof (prepareSametimeLink)==="undefined")));
}
if(!SemTagSvcPortal.sametimeSTProxy&&!SemTagSvcPortal.sametimeSTLinks){
if(SemTagSvcPortal.debug){
console.info("stproxy and stlinks both are not available,person awareness will not be available");
}
return;
}else{
if(SemTagSvcPortal.debug){
console.info("Sametime is connected to Portal");
}
}
SemTagAwrns.hcards=[];
SemTagAwrns.hcards=_1;
if(SemTagSvcPortal.sametimeSTProxy){
stproxy.addOnLoad(function(){
var _2=SemTagAwrns.hcards;
if(SemTagSvcPortal.debug){
console.log("Hcards got is:"+_2);
}
for(var i=0;i<_2.length;i++){
var _3=_2[i];
if(SemTagAwrns.disabled(_3)){
continue;
}
var _4=SemTagSvcPortal.findNameElementInHcard(_3);
if(SemTagSvcPortal.debug){
console.log("fnElem got is:"+_4);
}
if(!_4){
continue;
}
var _5=_4.getAttribute(SemTagSvcPortal.liveElemPrefix+"id");
if(SemTagSvcPortal.debug){
console.log("leid got is:"+_5+":"+SemTagAwrns.activeElems[_5]);
}
if(_5==null){
continue;
}
if(_5&&SemTagAwrns.activeElems[_5]){
continue;
}
var _6=SemTagAwrns.getSametimeId(_3);
var _7=SemTagUtil.getHcardAttributeValue("X-sametime-resolve",_3);
if(!_7){
if(SemTagSvcPortal.debug){
console.log("resolve is "+_7+" so continuing");
}
continue;
}
var _8=document.createElement("span");
var _9=SemTagUtil.getHcardAttributeValue("x-sametime-no-icon",_3);
SemTagAwrns.samtimeIconRequired=false;
if(_9){
SemTagAwrns.samtimeIconRequired=true;
}
var _a=stproxy.getLiveNameModel(_6,{"isInBuddyList":false,"forceWatchlist":true});
_a.portalId=_6;
if(SemTagSvcPortal.debug){
console.log("Model got for id:"+_6+": is :"+_a);
}
var _b=SemTagAwrns.getStatus(_a.status);
if(_4){
_4.setAttribute("semtag_ststatus",_b);
}
if(SemTagSvcPortal.debug){
console.log("semtag_ststatus variable set to :"+_b);
}
if(!(SemTagAwrns.samtimeIconRequired)){
var _c=document.createElement("img");
_c.id=i;
_c.imgId=_a.id;
SemTagAwrns.setSametimeIconSrc(_a,_c,stproxy);
_8.appendChild(_c);
_8.setAttribute("class","sametimeawarenessicon");
_8.className+=" sametimeawarenessicon";
_4.parentNode.insertBefore(_8,_4);
}
if(stproxy.hitch&&stproxy.hitch.connect){
if(SemTagSvcPortal.debug){
console.log("Inside stproxy.hitch way:");
}
stproxy.hitch.connect(_a,"onUpdate",SemTagAwrns.updateSTProxy);
}else{
if(SemTagSvcPortal.debug){
console.log("Inside non stproxy.hitch way:");
}
_a.onUpdate=SemTagAwrns.updateSTProxy;
}
if(_5){
SemTagAwrns.activeElems[_5]=true;
}
}
});
}
if(SemTagSvcPortal.sametimeSTLinks){
if(SemTagSvcPortal.debug){
console.log("Hcards got is:"+_1);
}
for(var i=0;i<_1.length;i++){
var _d=_1[i];
if(SemTagAwrns.disabled(_d)){
continue;
}
SemTagAwrns.hcards=[];
SemTagAwrns.hcards.push(_d);
var _e=SemTagSvcPortal.findNameElementInHcard(_d);
if(SemTagSvcPortal.debug){
console.log("fnElem got is:"+_e);
}
if(!_e){
continue;
}
var _f=_e.getAttribute(SemTagSvcPortal.liveElemPrefix+"id");
if(SemTagSvcPortal.debug){
console.log("leid got is:"+_f+":"+SemTagAwrns.activeElems[_f]);
}
if(_f==null){
continue;
}
if(_f&&SemTagAwrns.activeElems[_f]){
continue;
}
var _10=SemTagAwrns.getSametimeId(_d);
var _11=SemTagUtil.getHcardAttributeValue("X-sametime-resolve",_d);
if(_11){
var _12=document.createElement("span");
}
if(SemTagSvcPortal.sametimeSTLinks&&_11){
var od=SemTagUtil.getOwnerDocument(_d);
if(od.location!=document.location){
var f=SemTagUtil.getFrameElement(_d);
if(f){
if(f.id=="wpsFLY_flyoutIFrame"){
continue;
}
}
}
_12.style.verticalAlign="text-top";
}
if(SemTagSvcPortal.sametimeSTLinks&&_11){
st=prepareSametimeLink(_10,"",_11,"text:no;");
if(SemTagSvcPortal.debug){
console.log("ST got is:"+st);
}
_12.innerHTML=st;
_e.parentNode.insertBefore(_12,_e);
}
if(_f){
SemTagAwrns.activeElems[_f]=true;
}
}
}
},setSametimeIconSrc:function(_13,_14,_15){
if(_13.status>=_15.awareness.OFFLINE&&_13.status<=_15.awareness.IN_MEETING_MOBILE){
switch(_13.status){
case 0:
_14.src=_15.uiControl.iconPaths.iconOffline;
break;
case 1:
_14.src=_15.uiControl.iconPaths.iconAvailable;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 4:
case 2:
_14.src=_15.uiControl.iconPaths.iconAway;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 3:
_14.src=_15.uiControl.iconPaths.iconDnd;
break;
case 5:
_14.src=_15.uiControl.iconPaths.iconInMeeting;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 6:
_14.src=_15.uiControl.iconPaths.iconAvailableMobile;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 7:
_14.src=_15.uiControl.iconPaths.iconAwayMobile;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 8:
_14.src=_15.uiControl.iconPaths.iconDndMobile;
break;
case 9:
_14.src=_15.uiControl.iconPaths.iconAwayMobile;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
case 10:
_14.src=_15.uiControl.iconPaths.iconInMeetingMobile;
_14.onclick=function(){
SemTagAwrns.openChat(_14.imgId,_13);
};
break;
default:
_14.src=_15.NOT_USING;
break;
}
_14.title=_13.statusMessage;
_14.alt=_13.statusMessage;
}
},disabled:function(_16){
return SemTagUtil.getHcardAttributeValue("X-no-awareness",_16);
},getSametimeId:function(_17){
var _18=null;
for(var i=0;i<SemTagAwrns.imIds.length;i++){
var _19=SemTagSvcPortal.findElementByNameInHcard(_17,SemTagAwrns.imIds[i]);
if(_19){
_18=SemTagSvcPortal.getTextValue(_19);
if(0<_18.length){
break;
}
}
}
return _18;
},updateST:function(_1a){
var _1b=_1a.split(";");
var _1c=_1b[0];
var _1d=_1b[1];
if(SemTagSvcPortal.debug){
console.log("INside updateST"+_1a);
}
for(var i=0;i<SemTagAwrns.hcards.length;i++){
var vc=SemTagAwrns.hcards[i];
var _1e=SemTagAwrns.getSametimeId(vc);
if(_1e==_1c){
var _1f=SemTagSvcPortal.findNameElementInHcard(vc);
if(_1f){
_1f.setAttribute("semtag_ststatus",_1d);
}
}
}
},updateSTProxy:function(){
if(SemTagSvcPortal.debug){
console.log("Update getting called for :stid"+this.id+":portalid:"+this.portalId+":status:"+this.status);
}
var _20=SemTagAwrns.getStatus(this.status);
for(var i=0;i<SemTagAwrns.hcards.length;i++){
var vc=SemTagAwrns.hcards[i];
var _21=SemTagAwrns.getSametimeId(vc);
if(_21.toLowerCase()==this.portalId.toLowerCase()){
if(SemTagSvcPortal.debug){
console.log("Doing Update for :stid"+this.id+":portalid:"+this.portalId+":status:"+this.status);
}
var _22=SemTagSvcPortal.findNameElementInHcard(vc);
if(_22){
_22.setAttribute("semtag_ststatus",_20);
}
var _23=SemTagUtil.getHcardAttributeValue("x-sametime-no-icon",vc);
SemTagAwrns.samtimeIconRequired=false;
if(_23){
SemTagAwrns.samtimeIconRequired=true;
}
if(!(SemTagAwrns.samtimeIconRequired)){
var _24=SemTagSvcPortal.getElementsByClassName("sametimeawarenessicon",vc);
var _25=_24!=null||_24.length>0?_24[0]:null;
if(_25){
icon=_25.firstChild;
SemTagAwrns.setSametimeIconSrc(this,icon,stproxy);
}else{
if(SemTagSvcPortal.debug){
console.log("Awareness span does not exist should not be possible"+vc+":"+this.id);
}
}
}
}
}
},getStatus:function(_26){
var val="";
switch(_26){
case 0:
val="offline";
break;
case 1:
val="online";
break;
case 2:
val="away";
break;
case 3:
val="donotdisturb";
break;
case 4:
val="away";
break;
case 5:
val="meeting";
break;
default:
val="offline";
break;
}
return val;
},openCall:function(_27){
if(stproxy.policies.get(stproxy.policies.TCSPI)){
stproxy.call.byId(_27);
}
},openInstantMeeting:function(_28){
if(stproxy.policies.get(stproxy.policies.DISABLE_MEETING_INVITATION)){
stproxy.createMeeting(_28);
}
},openSendAnnouncement:function(_29){
if(stproxy.policies.get(stproxy.policies.ALLOW_ANNOUNCEMENT)){
stproxy.createAnnouncement(_29);
}
},openAddToContacts:function(_2a){
stproxy.createAdder(_2a);
},openChat:function(_2b,_2c){
if(SemTagSvcPortal.debug){
console.info("Opening chat with: "+_2b+":"+SemTagSvcPortal.sametimeSTLinks+":"+SemTagSvcPortal.sametimeSTProxy);
}
if(SemTagSvcPortal.sametimeSTLinks){
STLinksCreateIM(_2b);
}
if(SemTagSvcPortal.sametimeSTProxy){
if(SemTagSvcPortal.debug){
console.info("Opening chat with: imId,modelid"+_2b+":"+_2c.id);
}
stproxy.openChat(_2c.id);
}
}};
if(typeof wps_userStatusFuncs=="undefined"){
wps_userStatusFuncs=new Object();
}
wps_userStatusFuncs["STLinksUserStatusChanged_SA"]=0;
if(typeof wps_loggedInFuncs=="undefined"){
wps_loggedInFuncs=new Object();
}
wps_loggedInFuncs["STLinksLoggedIn_SA"]=0;
if(typeof wps_appletStartedFuncs=="undefined"){
wps_appletStartedFuncs=new Object();
}
wps_appletStartedFuncs["STLinksAppletStarted_SA"]=0;
function STLinksUserStatusChanged_SA(_2d,_2e,_2f,_30,_31){
var val="";
if(SemTagSvcPortal.debug){
console.log("STLinksUserStatusChanged_SA status got is : "+_2d+";"+_2f+":"+(typeof _2f));
}
switch(_2f){
case 32:
val="online";
break;
case 64:
val="away";
break;
case 554:
val="online";
break;
case 96:
val="away";
break;
case 608:
val="away";
break;
case 128:
val="donotdisturb";
break;
default:
val="offline";
break;
}
var arg=_2d+";"+val;
if(SemTagSvcPortal.debug){
console.log("STLinksUserStatusChanged_SA status got is Final : "+arg);
}
if(SemTagSvcPortal.sametimeSTLinks){
SemTagAwrns.updateST(arg);
}
};
function STLinksAppletStarted_SA(){
if(SemTagSvcPortal.debug){
alert("Applet Started!");
}
SemTagAwrns.hasApplet=true;
};
function STLinksLoggedIn_SA(id,_32){
if(SemTagSvcPortal.debug){
alert("Logged In: "+id+", "+_32);
}
};
window.setTimeout(SemTagAwrns.init,SemTagSvcPortal.DELAY);



	

var SemTagC2A={serviceId:"c2a",sourceTagName:"c2a:source",typeNameTagName:"c2a:typename",valueTagName:"c2a:value",displayTagName:"c2a:display",anchorTagName:"c2a:anchor",targetTagName:"c2a:target",menulabelTagName:"c2a:action-label",paramTagName:"c2a:action-param",defaultNameSpaceStr:"IBM_C2A_DEFAULT_NAMESPACE",namespaceSep:"#",liveObjectNamespace:"http://www.ibm.com/xmlns/prod/websphere/portal/v6.1/livetext",targetsAvail:null,targetNodeIDs:new Object(),sourceNodeIDs:new Object(),currentValue:"",currentValArray:null,IDctr:0,c2aIdBaseStr:"IBMC2ASRVC_",c2aSourceIdBase:"IBMC2ASRVC_Source_",c2aTargetIdBase:"IBMC2ASRVC_Target_",nls:{"c2a_click_for_actions":SemTagSvcPortalGlobal.c2a_click_for_actions},init:function(){
if(!window.ibm){
window.ibm=new Object();
}
if(!window.ibm.portal){
window.ibm.portal=new Object();
}
window.ibm.portal.c2a=new Object();
for(var i=0;i<parent.frames.length;i++){
if(SemTagC2A.canAccessFrameContent(parent.frames[i])){
if(!parent.frames[i].ibm){
parent.frames[i].ibm=new Object();
}
if(!parent.frames[i].ibm.portal){
parent.frames[i].ibm.portal=new Object();
}
parent.frames[i].ibm.portal.c2a=new Object();
}
}
SemTagC2A.defineRegExpressions();
SemTagSvcPortal.setCallback(SemTagC2A.serviceId,SemTagC2A.parseDOM);
SemTagSvcPortal.setSpecialMenuProvider(SemTagC2A.getSpecialC2AMenuItems);
SemTagC2A.parseDOM();
},getSpecialC2AMenuItems:function(_1){
var _2=null;
try{
var _3=_1;
var _4=_1.parentNode;
var _5=SemTagSvcPortal.getSemanticTagValues(_1);
for(var _6 in _5){
var _7=_5[_6];
if(!_7){
continue;
}
_2=SemTagC2A.getTargetMenuItems(SemTagC2A.getSpecialC2ASourceInfo(_6,_7));
}
}
catch(e){
if(SemTagSvcPortal.trace){
SemTagUtil.log("error getting special c2a menu items, exception is "+e);
}
}
return _2;
},showHover:function(_8){
SemTagSvcPortal.showHover(_8,SemTagC2A.handleClick,SemTagC2A.nls.c2a_click_for_actions);
},canAccessFrameContent:function(_9){
var _a=false;
try{
if(window.location.host==_9.location.host&&window.location.protocol==_9.location.protocol){
_a=true;
}
}
catch(err){
}
return _a;
},findElementInWindowScope:function(_b){
var _c;
_c=document.getElementById(_b);
if(_c==null){
for(var i=0;i<parent.frames.length;i++){
if(SemTagC2A.canAccessFrameContent(parent.frames[i])){
_c=frames[i].document.getElementById(_b);
if(_c!=null){
break;
}
}
}
}
return _c;
},handleClick:function(_d){
if(!window.ibm){
window.ibm=new Object();
}
if(!window.ibm.portal){
window.ibm.portal=new Object();
}
window.ibm.portal.c2a=new Object();
for(var i=0;i<parent.frames.length;i++){
if(SemTagC2A.canAccessFrameContent(parent.frames[i])){
if(!parent.frames[i].ibm){
parent.frames[i].ibm=new Object();
}
if(!parent.frames[i].ibm.portal){
parent.frames[i].ibm.portal=new Object();
}
parent.frames[i].ibm.portal.c2a=new Object();
}
}
var _e=SemTagSvcPortal.getLiveElementFromEvent(_d);
if(!SemTagC2A.isSource(_e)){
var _f=SemTagSvcPortal.getParentByClassName(SemTagC2A.sourceTagName,_e);
}
SemTagC2A.generateMenuContents(_d,_f);
},parseDOM:function(){
SemTagC2A.processDomNodes(SemTagSvcPortal.getNodes(SemTagC2A.serviceId));
SemTagC2A.processSources(SemTagC2A.sourceNodeIDs);
},processDomNodes:function(_10){
for(var _11 in SemTagC2A.sourceNodeIDs){
if(!SemTagC2A.findElementInWindowScope(_11)){
delete SemTagC2A.sourceNodeIDs[_11];
}
}
for(var _11 in SemTagC2A.targetNodeIDs){
if(!SemTagC2A.findElementInWindowScope(_11)){
delete SemTagC2A.targetNodeIDs[_11];
}
}
while(_10&&_10.length>0){
var _12=_10.pop();
var _13=_12.id;
if(_13!=null&&(SemTagC2A.exists(SemTagC2A.sourceNodeIDs,_13)||SemTagC2A.exists(SemTagC2A.targetNodeIDs,_13))){
continue;
}
if(SemTagC2A.isSource(_12)){
if(_12.id==null||_12.id==""){
_12.id=SemTagC2A.c2aSourceIdBase+SemTagC2A.IDctr;
SemTagC2A.IDctr++;
}
SemTagC2A.sourceNodeIDs[_12.id]="true";
}else{
if(SemTagC2A.isTarget(_12)){
if(_12.id==null||_12.id==""){
_12.id=SemTagC2A.c2aTargetIdBase+SemTagC2A.IDctr;
SemTagC2A.IDctr++;
}
SemTagC2A.targetNodeIDs[_12.id]="true";
}
}
}
SemTagC2A.updateAvailableTargets();
},exists:function(_14,_15){
if(_14[_15]&&_14[_15]=="true"){
return true;
}
return false;
},processSources:function(_16){
for(var _17 in _16){
var _18=SemTagC2A.findElementInWindowScope(_17);
var _19=SemTagC2A.getSourceInfo(_18);
var _1a=SemTagC2A.isTargetDefined(_19);
if(_19.value==null||_19.value==""){
if(SemTagSvcPortal.trace){
SemTagUtil.log("Click-to-Action error: Missing c2a:value tag");
}
break;
}
var _1b=_19.anchorNode.getAttribute("hasHover");
if(_1a||_19.display!=""){
if(_1b==null||_1b=="false"){
SemTagSvcPortal.addHover(_19.anchorNode,SemTagC2A.showHover,SemTagC2A.handleClick);
_19.anchorNode.setAttribute("hasHover","true");
}
}else{
if(_1b=="true"){
SemTagSvcPortal.removeHover(_19.anchorNode,SemTagC2A.showHover,SemTagC2A.handleClick);
}
_19.anchorNode.setAttribute("hasHover","false");
}
}
},defineRegExpressions:function(){
SemTagC2A.sourceRegExp=new RegExp("(^|\\s)"+SemTagC2A.sourceTagName+"(\\s|$)");
SemTagC2A.typeNameRegExp=new RegExp("(^|\\s)"+SemTagC2A.typeNameTagName+"(\\s|$)");
SemTagC2A.valueRegExp=new RegExp("(^|\\s)"+SemTagC2A.valueTagName+"(\\s|$)");
SemTagC2A.displayRegExp=new RegExp("(^|\\s)"+SemTagC2A.displayTagName+"(\\s|$)");
SemTagC2A.anchorRegExp=new RegExp("(^|\\s)"+SemTagC2A.anchorTagName+"(\\s|$)");
SemTagC2A.targetRegExp=new RegExp("(^|\\s)"+SemTagC2A.targetTagName+"(\\s|$)"),SemTagC2A.menulabelRegExp=new RegExp("(^|\\s)"+SemTagC2A.menulabelTagName+"(\\s|$)");
SemTagC2A.paramRegExp=new RegExp("(^|\\s)"+SemTagC2A.paramTagName+"(\\s|$)");
},isTarget:function(_1c){
if(_1c.tagName=="FORM"){
return (SemTagUtil.getNodeClassValue(_1c).match(SemTagC2A.targetRegExp));
}else{
return false;
}
},isSource:function(_1d){
if(_1d.tagName=="SPAN"||_1d.tagName=="DIV"){
return (SemTagUtil.getNodeClassValue(_1d).match(SemTagC2A.sourceRegExp));
}else{
return false;
}
},updateAvailableTargets:function(){
SemTagC2A.targetsAvail=null;
SemTagC2A.targetsAvail=new Array();
for(var _1e in SemTagC2A.targetNodeIDs){
var _1f=SemTagC2A.findElementInWindowScope(_1e);
var _20=_1f.childNodes;
var _21=null;
var _22=null;
for(var i=0;i<_20.length;i++){
var _23=_20[i];
var _24=SemTagUtil.getNodeClassValue(_23);
if(_24==""){
continue;
}
if(_24.match(SemTagC2A.typeNameRegExp)){
var _25=SemTagC2A.getElementValue(_23);
var _26=SemTagC2A.parseTypeName(_25);
_21=_26.namespace;
_22=_26.type;
if(_22!=null){
if(_21==null){
_21=SemTagC2A.defaultNameSpaceStr;
}
if(typeof (SemTagC2A.targetsAvail[_21])=="undefined"){
SemTagC2A.targetsAvail[_21]=new Array();
}
SemTagC2A.targetsAvail[_21][_22]=true;
}
}
}
}
},parseTypeName:function(_27){
var _28=null;
var _29=null;
var _2a=_27.indexOf(SemTagC2A.namespaceSep);
if(_2a<0){
_28=SemTagC2A.defaultNameSpaceStr;
_29=_27;
}else{
_28=_27.substring(0,_2a);
_29=_27.substring(_2a+1);
}
if(_28==SemTagC2A.liveObjectNamespace){
var _2b=_29.indexOf(".");
if(_2b>0){
var _2c=_29.substring(_2b+1);
_29=_29.substring(0,_2b);
return {"namespace":_28,"type":_29,"selector":_2c};
}
}
return {"namespace":_28,"type":_29};
},isTargetDefined:function(_2d){
var _2e=false;
for(var i=0;i<_2d.typenames.length;i++){
if(!_2d.typenames[i].namespace||_2d.typenames[i].namespace==""){
_2d.typenames[i].namespace=SemTagC2A.defaultNameSpaceStr;
}
if(typeof (SemTagC2A.targetsAvail[_2d.typenames[i].namespace])!="undefined"){
var _2f=SemTagC2A.targetsAvail[_2d.typenames[i].namespace][_2d.typenames[i].type];
_2e=(typeof (_2f)!="undefined"&&_2f?true:false);
}
if(_2e==true){
return _2e;
}
}
return false;
},isTargetSourceMatch:function(_30,_31){
var _32;
var _33;
for(var i=0;i<_30.typenames.length;i++){
_32=_30.typenames[i];
for(var j=0;j<_31.typenames.length;j++){
_33=_31.typenames[j];
if(_32.namespace==_33.namespace){
if(_32.namespace==SemTagC2A.liveObjectNamespace){
var _34;
if(_33.selector){
_34=SemTagC2A.selectSubField(_30.value,_31.selector);
}else{
_34=_30.value;
}
if(_34&&_34!=null&&_34!=""){
return true;
}
}else{
if(_32.type==_33.type){
return true;
}
}
}
}
}
return false;
},getElementValue:function(_35){
var _36;
if(SemTagUtil.getNodeClassValue(_35).match(SemTagC2A.displayRegExp)){
_36=_35.innerHTML;
}else{
_36=_35.firstChild.nodeValue;
}
return (_36==null?"":_36.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));
},fillC2AInfo:function(_37,_38){
var _39=_37.childNodes;
for(var i=0;i<_39.length;i++){
var _3a=_39[i];
var _3b=SemTagUtil.getNodeClassValue(_3a);
if(_3b==null||_3b==""){
if(_3a.childNodes.length>0){
SemTagC2A.fillC2AInfo(_3a,_38);
}
}else{
if(_3b.match(SemTagC2A.typeNameRegExp)){
var _3c=SemTagC2A.getElementValue(_3a);
var _3d=SemTagC2A.parseTypeName(_3c);
_38.typenames.push({namespace:_3d.namespace,type:_3d.type});
if(_3d.selector){
_38.selector=_3d.selector;
}
}else{
if(_3b.match(SemTagC2A.valueRegExp)&&_38.value==""){
_38.value=SemTagC2A.getElementValue(_3a);
if(!_38.anchorNode||_38.anchorNode==""){
_38.anchorNode=_3a;
}
}else{
if(_3b.match(SemTagC2A.displayRegExp)&&_38.display==""){
_38.display=SemTagC2A.getElementValue(_3a);
}else{
if(_3b.match(SemTagC2A.menulabelRegExp)&&_38.menuLabel==""){
_38.menuLabel=SemTagC2A.getElementValue(_3a);
}else{
if(_3b.match(SemTagC2A.anchorRegExp)){
_38.anchorNode=_3a;
}else{
if(!_3b.match(SemTagC2A.sourceRegExp)&&!_3b.match(SemTagC2A.targetRegExp)){
if(_3a.childNodes.length>0){
SemTagC2A.fillC2AInfo(_3a,_38);
}
}
}
}
}
}
}
}
}
},getSpecialC2ASourceInfo:function(_3e,_3f){
var _40={"typenames":new Array(),"value":_3f,"display":"","anchorNode":""};
_40.typenames.push({namespace:SemTagC2A.liveObjectNamespace,type:_3e});
return _40;
},getSourceInfo:function(_41){
var _42={"typenames":new Array(),"value":"","display":"","anchorNode":""};
SemTagC2A.fillC2AInfo(_41,_42);
return _42;
},getTargetInfo:function(_43){
var _44={"typenames":new Array(),"menuLabel":""};
SemTagC2A.fillC2AInfo(_43,_44);
return _44;
},generateMenuContents:function(_45,_46){
var _47=null;
var _48=null;
var _49=SemTagC2A.getSourceInfo(_46);
if(SemTagC2A.isTargetDefined(_49)==true){
_47=SemTagC2A.getTargetMenuItems(_49);
}
if(_49.display!=""){
_48=SemTagSvcPortal.getMenuHeaderJson(_49.display,"text/html",-100);
}
if(_47!=null||_49.display!=""){
SemTagSvcPortal.setMenuData(_45,_47,"",_48,"");
}
},getTargetMenuItems:function(_4a){
var _4b=new Array();
var _4c=new Array();
for(var _4d in SemTagC2A.targetNodeIDs){
var _4e=SemTagC2A.findElementInWindowScope(_4d);
var _4f=SemTagC2A.getTargetInfo(_4e);
var _50=_4f.menuLabel;
var _51=_4c[_50];
if(_51!=null){
_4c[_50]=_51++;
}else{
_4c[_50]=1;
_51=1;
}
if(_51>1){
_50+=" ("+_51+")";
}
if(SemTagC2A.isTargetSourceMatch(_4a,_4f)==true){
_4b.push(SemTagSvcPortal.getMenuItemJson(_50,"javascript:SemTagC2A.executeMenuAction(\""+_4d+"\");"));
}
}
if(_4b.length>0){
SemTagC2A.currentValue=_4a.value;
}
return _4b;
},executeMenuAction:function(_52){
var _53={};
var _54=SemTagC2A.findElementInWindowScope(_52);
if(_54&&_54.tagName=="FORM"){
var _55=SemTagC2A.currentValue;
var _56=SemTagC2A.getTargetInfo(_54);
if(_56.selector){
_55=SemTagC2A.selectSubField(_55,_56.selector);
}
var _57=SemTagSvcPortal.getElementsByClassName(SemTagC2A.paramTagName,_54,0,["INPUT"]);
for(var j=0;j<_57.length;j++){
_57[j].value=SemTagC2A.getStringValue(_55);
}
window.ibm.portal.c2a.event={value:_55};
for(var i=0;i<parent.frames.length;i++){
if(SemTagC2A.canAccessFrameContent(parent.frames[i])){
if(!parent.frames[i].ibm){
parent.frames[i].ibm=new Object();
}
if(!parent.frames[i].ibm.portal){
parent.frames[i].ibm.portal=new Object();
}
parent.frames[i].ibm.portal.c2a=new Object();
parent.frames[i].ibm.portal.c2a.event={value:_55};
}
}
if(_54.onsubmit){
if(SemTagUtil.isGecko){
var _58=new Object();
_54.onsubmit(_58);
}else{
_54.fireEvent("onsubmit");
}
}
_54.submit();
}else{
if(SemTagSvcPortal.trace){
SemTagUtil.log("no target node can be found for id "+_52);
}
}
},selectSubField:function(obj,_59){
var _5a=_59.split(".");
var x=obj;
for(var i=0;i<_5a.length;i++){
if(typeof (x)=="object"&&x[_5a[i]]){
x=x[_5a[i]];
}else{
if(SemTagSvcPortal.trace){
SemTagUtil.log("cannot select "+_59+" from "+obj);
}
x=null;
break;
}
}
return x;
},getStringValue:function(x){
if(typeof x=="string"){
return x;
}else{
return SemTagC2A.getJSON(x);
}
},getJSON:function(x){
if(x==null){
return "null";
}
switch(typeof x){
case "string":
return "\""+x+"\"";
case "number":
case "boolean":
return String(x);
case "object":
if(x instanceof Array){
return SemTagC2A.getArrayJSON(x);
}else{
if(x){
return SemTagC2A.getObjectJSON(x);
}
}
}
},getObjectJSON:function(o){
var a=[];
for(k in o){
if(o.hasOwnProperty(k)){
a.push("\""+k+"\":"+SemTagC2A.getJSON(o[k]));
}
}
return "{"+a.join(",")+"}";
},getArrayJSON:function(o){
var a=[];
for(var k=0;k<o.length;k++){
a.push(SemTagC2A.getJSON(o[k]));
}
return "["+a.join(",")+"]";
},triggerCSRAction:function(_5b){
var _5c=SemTagC2A.findElementInWindowScope(_5b);
var _5d=SemTagC2A.getC2ATargetPageID(_5c);
var _5e=SemTagC2A.getC2ATargetPortletWindowID(_5c);
var _5f=SemTagC2A.getC2ACommTargetName(_5c);
var _60=SemTagC2A.currentValue;
var _61=SemTagC2A.getTargetActionParams(_5c);
},triggerCSREvent:function(_62){
var _63=SemTagC2A.findElementInWindowScope(_62);
var _64=SemTagC2A.getC2ATargetPageID(_63);
var _65=SemTagC2A.getC2ATargetPortletWindowID(_63);
var _66=SemTagC2A.getC2ACommTargetQName(_63);
var _67=SemTagC2A.currentValue;
var _68=com.ibm.mashups.services.ServiceManager.getService(com.ibm.mashups.iwidget.services.EventService.SERVICE_NAME);
_68.fireEvent(_65,_66,_67,"{http://www.w3.org/2001/XMLSchema}string");
},getC2ATargetPageID:function(_69){
var _6a=dojo.query("input[name=\"com.ibm.wps.propertybroker.standard.c2a.pageid\"]",_69);
var _6b=(_6a!=null&&_6a.length==1)?_6a[0].value:"undefined";
return _6b;
},getC2ATargetPortletWindowID:function(_6c){
var _6d=dojo.query("input[name=\"com.ibm.wps.propertybroker.standard.c2a.portletwindowid\"]",_6c);
var _6e=(_6d!=null&&_6d.length==1)?_6d[0].value:"undefined";
return _6e;
},getC2ACommTargetName:function(_6f){
var _70=dojo.query("input[name=\"com.ibm.wps.propertybroker.standard.c2a.commtargetname\"]",_6f);
var _71=(_70!=null&&_70.length==1)?_70[0].value:"undefined";
return _71;
},getC2ACommTargetQName:function(_72){
var _73=dojo.query("input[name=\"com.ibm.wps.propertybroker.standard.c2a.commtargetqname\"]",_72);
var _74=(_73!=null&&_73.length==1)?_73[0].value:"undefined";
return _74;
},getC2ATargetActionParams:function(_75){
var _76=dojo.query("input[type=\"text\"]",_75);
dojo.forEach(_76,function(_77){
});
}};
SemTagC2A.init();



 // end of jspscriptlet

if(typeof (ibm)=="undefined"){
ibm={};
}
if(typeof (ibm.portal)=="undefined"){
ibm.portal={};
}
if(typeof (ibm.portal.xml)=="undefined"){
ibm.portal.xml={};
}
if(typeof (ibm.portal.xml)=="undefined"){
ibm.portal.xml={};
}
ibm.portal.util={};
ibm.portal.util.cloneObject=function(_1){
var _2={};
for(i in _1){
_2[i]=_1[i];
}
return _2;
};
ibm.portal.resource={};
ibm.portal.resource.str={};
ibm.portal.resource.getString=function(_3,_4){
s=_3[_4];
s=(s==null)?_4:s;
if(arguments.length>=2){
i=1;
do{
s=s.replace("%"+i,arguments[i]);
i=i+1;
}while(i<arguments.length);
}
return s;
};
if(typeof (ibm.portal.xml)=="undefined"){
ibm.portal.xml={};
}
ibm.portal.xml.ie={};
ibm.portal.xml.gecko={};
ibm.portal.xml.getXmlHttpRequest=function(){
var _5=null;
if(typeof ActiveXObject!="undefined"){
_5=new ActiveXObject("Microsoft.XMLHTTP");
}else{
_5=new XMLHttpRequest();
}
return _5;
};
ibm.portal.xml.loadXml=function(_6){
if(typeof ActiveXObject!="undefined"){
return ibm.portal.xml.ie.loadXml(_6);
}else{
return ibm.portal.xml.gecko.loadXml(_6);
}
};
ibm.portal.xml.loadXmlString=function(_7){
if(typeof ActiveXObject!="undefined"){
return ibm.portal.xml.ie.loadXmlString(_7);
}else{
return ibm.portal.xml.gecko.loadXmlString(_7);
}
};
ibm.portal.xml.loadXsl=function(_8){
if(typeof ActiveXObject!="undefined"){
return ibm.portal.xml.ie.loadXsl(_8);
}else{
return ibm.portal.xml.gecko.loadXsl(_8);
}
};
ibm.portal.xml.transform=function(_9,_a,_b,_c,_d){
if(typeof ActiveXObject!="undefined"){
return ibm.portal.xml.ie.transform(_9,_a,_b,_c,_d);
}else{
return ibm.portal.xml.gecko.transform(_9,_a,_b,_c,_d);
}
};
ibm.portal.xml.update=function(_e,_f,xsl,_10,_11){
if(typeof ActiveXObject!="undefined"){
var _12=ibm.portal.xml.ie.transform(_f,xsl,_10,_11,true);
ibm.portal.debug.text("XSLT result: "+_12);
_e.innerHTML+=_12;
}else{
_12=ibm.portal.xml.gecko.transform(_f,xsl,_10,_11,false);
_e.appendChild(_12.documentElement);
}
};
ibm.portal.xml.ie.loadXml=function(_13){
var _14=new ActiveXObject("MSXML2.DOMDocument");
_14.async=0;
_14.resolveExternals=0;
if(!_14.load(_13)){
throw new Error("Error loading xml file "+_13);
}
return _14;
};
ibm.portal.xml.ie.loadXmlString=function(_15){
var _16=new ActiveXObject("MSXML2.DOMDocument");
_16.async=0;
_16.resolveExternals=0;
if(!_16.loadXML(_15)){
throw new Error("Error loading xml string "+_15);
}
return _16;
};
ibm.portal.xml.ie.loadXsl=function(_17){
var _18=new ActiveXObject("MSXML2.FreeThreadedDOMDocument");
_18.async=0;
_18.resolveExternals=0;
if(!_18.load(_17)){
throw new Error("Error loading xsl file "+_17);
}
return _18;
};
ibm.portal.xml.ie.transform=function(_19,xsl,_1a,_1b,_1c){
var _1d=_19;
var _1e=xsl;
try{
if(!_1e.documentElement){
_1e=this.loadXsl(xsl);
}
}
catch(e){
var _1f=e.message;
throw new Error(""+_1f,""+_1f);
}
var _20=new ActiveXObject("Msxml2.XSLTemplate");
_20.stylesheet=_1e;
var _21=_20.createProcessor();
_21.input=_1d;
if(_1b){
for(var p in _1b){
_21.addParameter(p,_1b[p]);
}
}
if(_1a){
_21.addParameter("mode",_1a);
}
if(_1c){
if(!_21.transform()){
throw new Error("Error transforming xml doc "+_1d);
}
return _21.output;
}else{
var _22=new ActiveXObject("MSXML2.DOMDocument");
_22.async=0;
_22.validateOnParse=1;
_1d.transformNodeToObject(_1e,_22);
return _22;
}
};
ibm.portal.xml.gecko.loadXml=function(_23){
var _24=document.implementation.createDocument("","",null);
var xhr=new XMLHttpRequest();
xhr.open("GET",_23,false);
xhr.send(null);
if(xhr.status==200){
_24=xhr.responseXML;
}
return _24;
};
ibm.portal.xml.gecko.loadXmlString=function(_25){
var _26=new DOMParser();
try{
oXmlDoc=_26.parseFromString(_25,"text/xml");
}
catch(exc){
throw new Error("Error loading xml string "+_25);
}
return oXmlDoc;
};
ibm.portal.xml.gecko.loadXsl=function(_27){
var _28=document.implementation.createDocument("","",null);
var xhr=new XMLHttpRequest();
xhr.open("GET",_27,false);
xhr.send(null);
if(xhr.status==200){
_28=xhr.responseXML;
}
return _28;
};
ibm.portal.xml.gecko.transform=function(_29,xsl,_2a,_2b,_2c){
try{
var _2d=xsl;
if(!_2d.documentElement){
alert("xslDoc is not a Document, loading it...");
_2d=this.loadXsl(xsl);
}
var _2e=new XSLTProcessor();
_2e.importStylesheet(_2d);
if(_2b){
for(var p in _2b){
_2e.setParameter(null,p,_2b[p]);
}
}
if(_2a){
_2e.setParameter(null,"mode",_2a);
}
var _2f=_2e.transformToDocument(_29);
if(!_2c){
return _2f;
}
resultStr=_2f.documentElement.textContent;
}
catch(exc){
throw new Error("Error transforming xml doc "+exc);
}
return resultStr;
};
ibm.portal.xml.setLayerContentByXml=function(_30,xml,xsl,_31,_32){
var _33=ibm.portal.xml.transform(xml,xsl,null,_31,_32);
if(_30.innerHTML){
_30.innerHTML=_33;
}else{
var obj=document.getElementById(_30);
obj.innerHTML=_33;
}
};
ibm.portal.io={};
ibm.portal.io.sAcceptLanguage="";
ibm.portal.io.getResponseHeader=function(_34,_35){
var _36;
try{
_36=_34.getResponseHeader(_35);
}
catch(exc){
_36=null;
}
return _36;
};
ibm.portal.io.checkForError=function(_37){
var _38=null;
var _39=ibm.portal.io.getResponseHeader(_37,"X-IBM-REST-Error");
if(_39){
var _38="",_3a=ibm.portal.io.getResponseHeader(_37,"X-IBM-REST-MsgArg1");
if(_3a){
_38=ibm.portal.resource.getString(_39,window.decodeURIComponent(_3a));
}else{
_38=ibm.portal.resource.getString(_39);
}
}
return _38;
};
ibm.portal.io.asyncRequest=function(_3b,_3c,_3d,_3e){
try{
ibm.portal.io.setAsync(_3b,_3c,_3d,_3e,true);
}
catch(e){
ibm.portal.io.setAsync(_3b,_3c,_3d,_3e,false);
}
};
ibm.portal.io.setAsync=function(_3f,_40,_41,_42,_43){
var _44=ibm.portal.xml.getXmlHttpRequest();
_44.open(_3f,_40,true);
if(!_43){
_44.setRequestHeader("Accept-language","*");
}
try{
_44.onreadystatechange=function(){
if(_44.readyState==4){
_42.startUpdate();
sError=ibm.portal.io.checkForError(_44);
if(sError){
_42.handleError(""+ibm.portal.resource.getString(sError));
}else{
var _45=_44.responseText;
_42.handleData(_45);
}
}
};
_44.send(_41);
}
catch(e){
throw new Error("","");
}
};
try{
}
catch(e){
console.error(e);
}




 

