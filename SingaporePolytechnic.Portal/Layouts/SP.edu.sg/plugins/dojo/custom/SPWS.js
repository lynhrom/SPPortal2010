define(["dojo/ready","dojo/query","dojo/dom","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-class","dojo/on","dijit/Dialog","dojo/NodeList-traverse"],function(n,b,g,j,l,f,o,m,e,k){function h(q,r,s){n(function(){b("#"+q+" > ul:first-of-type > li").forEach(function(w){nodelist=b("> a",w);var v=l.get(nodelist[nodelist.length-1],"href");var t=nodelist[nodelist.length-1].innerHTML;f.empty(w);var u=f.create("a");l.set(u,"href",v);u.innerHTML=t;f.place(u,w)});b("#"+q+" > div.spws_portlet-bottom-link").forEach(function(u){if(b("#"+q+" > ul:first-of-type > li").length>=r){j.set(u,"display","block");if(s==1){var t="";nodelist=b("#"+q+" > ul:first-of-type > li:first-of-type > a");if(nodelist.length>0){t=l.get(nodelist[0],"href")}if(t.length>0){b("> a",u).forEach(function(v){l.set(v,"href",t)})}}}else{j.set(u,"display","none")}})})}function a(q,r){n(function(){nodelist=b("#"+q+" div.option-body h5:first-of-type a:last-of-type");var w=l.get(nodelist[nodelist.length-1],"href");var u=nodelist[nodelist.length-1].innerHTML;var t=nodelist[nodelist.length-1].parentNode;f.empty(t);var v=f.create("a");l.set(v,"href",w);v.innerHTML=u;f.place(v,t);var s;if(r==1){s="#"+q+" div.spws_rotating-arrow-right a, #"+q+" div.spws_portlet-bottom-link a"}else{s="#"+q+" div.spws_rotating-arrow-right a"}b(s).forEach(function(x){l.set(x,"href",w)})})}function d(r,q){n(function(){lvl1heightfixlist=b(".spws_megamenu_1 > ",r);for(var t=0;t<lvl1heightfixlist.length;t++){lvl1ahrefheightfixlist=b(".spws_megamenu_1_link",lvl1heightfixlist[t]);lvl1ahrefheightfixpositionlist=lvl1ahrefheightfixlist.position();var u=0;for(var s=0;s<lvl1ahrefheightfixpositionlist.length;s++){if(lvl1ahrefheightfixpositionlist[s].h>u){u=lvl1ahrefheightfixpositionlist[s].h}}for(var s=0;s<lvl1ahrefheightfixlist.length;s++){j.set(lvl1ahrefheightfixlist[s],"height",u+"px")}lvl2highest=u+15;lvl2heightfixlist=b(".spws_megamenu_2",lvl1heightfixlist[t]);for(var s=0;s<lvl2heightfixlist.length;s++){j.set(lvl2heightfixlist[s],"top",lvl2highest+"px")}}lvl2heightfixlist=b(".spws_megamenu_2 >",r);for(var t=0;t<lvl2heightfixlist.length;t++){lvl2liheightfixlist=b("> li",lvl2heightfixlist[t]);lvl2lipositionheightfixlist=lvl2liheightfixlist.position();var u=0;for(var s=0;s<lvl2lipositionheightfixlist.length;s++){if(lvl2lipositionheightfixlist[s].h>u){u=lvl2lipositionheightfixlist[s].h}}for(var s=0;s<lvl2liheightfixlist.length;s++){j.set(lvl2liheightfixlist[s],"height",u+"px")}}b(".spws_megamenu_toggle",r).forEach(function(v){e(v,"click",function(w){tgt=b(w.currentTarget,r).next()[0];if(j.get(tgt,"display")==="none"){j.set(tgt,"display","block");b("span",tgt.parentNode)[0].innerHTML="(<span>-</span>)";ul_list=b(tgt,r).parents("ul");if(ul_list.length>=4){li_list=b("> li",ul_list[1]);li_list.style("height","");li_dimension_list=li_list.position();var y=0;for(var x=0;x<li_dimension_list.length;x++){if(li_dimension_list[x].h>y){y=li_dimension_list[x].h}}li_list.style("height",y+"px")}}else{j.set(tgt,"display","none");b("span",tgt.parentNode)[0].innerHTML="(<span>+</span>)";ul_list=b(tgt,r).parents("ul");if(ul_list.length>=4){li_list=b("> li",ul_list[1]);li_list.style("height","");li_dimension_list=li_list.position();var y=0;for(var x=0;x<li_dimension_list.length;x++){if(li_dimension_list[x].h>y){y=li_dimension_list[x].h}}li_list.style("height",y+"px")}}})});b("#spws_nav > ul > li").forEach(function(v){e(v,"mouseout",function(){this._timer=setTimeout(function(){b("div.spws_megamenu_1, div.spws_megamenu_1 > ul > li , div.spws_megamenu_1 > ul > li > a, div.spws_megamenu_2, div.spws_megamenu_2 > ul > li , div.spws_megamenu_2 > ul > li > a, div.spws_megamenu_3, div.spws_megamenu_3 > ul > li , div.spws_megamenu_3 > ul > li > a, div.spws_megamenu_4, div.spws_megamenu_4 > ul > li , div.spws_megamenu_4 > ul > li > a",v).forEach(function(w){m.remove(w,"visible")});b("div.spws_megamenu_1 > ul > li.hover",v).forEach(function(w){m.remove(w,"hover")});m.remove(v,"hover")},q)});e(v,"mouseover",function(){clearTimeout(this._timer);b(v).siblings().forEach(function(w){m.remove(w,"hover");b("div.spws_megamenu_1, div.spws_megamenu_1 > ul > li, div.spws_megamenu_1 > ul > li > a, div.spws_megamenu_2, div.spws_megamenu_2 > ul > li , div.spws_megamenu_2 > ul > li > a, div.spws_megamenu_3, div.spws_megamenu_3 > ul > li , div.spws_megamenu_3 > ul > li > a, div.spws_megamenu_4, div.spws_megamenu_4 > ul > li , div.spws_megamenu_4 > ul > li > a",w).forEach(function(x){m.remove(x,"visible")});b("div.spws_megamenu_1 > ul > li.hover",w).forEach(function(x){m.remove(x,"hover")})});b("div.spws_megamenu_1, div.spws_megamenu_1 > ul > li, div.spws_megamenu_1 > ul > li > a",v).forEach(function(w){m.add(w,"visible")});m.add(v,"hover")})});b(".spws_megamenu_1 > ul > li","spws_nav").forEach(function(v){e(v,"mouseover",function(){clearTimeout(this._timer);b(v).siblings().forEach(function(w){b("div.spws_megamenu_2, div.spws_megamenu_2 > ul > li , div.spws_megamenu_2 > ul > li > a, div.spws_megamenu_3, div.spws_megamenu_3 > ul > li , div.spws_megamenu_3 > ul > li > a, div.spws_megamenu_4, div.spws_megamenu_4 > ul > li , div.spws_megamenu_4 > ul > li > a",w).forEach(function(x){m.remove(x,"visible")});m.remove(w,"hover")});b("div.spws_megamenu_2, div.spws_megamenu_2 > ul > li , div.spws_megamenu_2 > ul > li > a, div.spws_megamenu_3, div.spws_megamenu_3 > ul > li , div.spws_megamenu_3 > ul > li > a, div.spws_megamenu_4, div.spws_megamenu_4 > ul > li , div.spws_megamenu_4 > ul > li > a",v).forEach(function(w){m.add(w,"visible")});m.add(v,"hover")})})})}function i(q){n(function(){b("#"+q+" > div.spws_maskhead_rotator_pane > div.spws_caption").forEach(function(r){m.add(r,"visible")})})}function c(q){n(function(){nodelist=b(".layoutRow",q);for(var r=0;r<nodelist.length;r++){if(r==0){m.add(nodelist[r],["spws_bg-white","spws_border","spws_rounded","spws_shadow"])}else{rownodelist=b("> tbody > tr > td > div",nodelist[r]);if(rownodelist.length>0){rownodelist[0].parentNode.innerHTML=""}if(rownodelist.length>2){rownodelist[rownodelist.length-1].parentNode.innerHTML=""}}}})}function p(q,s,r){n(function(){dialog=new k({title:"",content:""});e(dialog,"hide",function(){dialog.set("title","");dialog.set("content","")});b("#"+q).forEach(function(t){e(t,"click",function(u){dialog.set("title",s);dialog.set("content",r);dialog.show()})})})}return{processLandingPageMenu:a,processLandingPageMenuList:h,processMegaMenu:d,processBanner:i,processLayout:c,createDialog:p}});