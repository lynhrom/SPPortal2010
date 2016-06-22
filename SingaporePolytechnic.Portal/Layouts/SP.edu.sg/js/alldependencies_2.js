require({cache:{
'url:dijit/templates/TooltipDialog.html':"<div role=\"presentation\" tabIndex=\"-1\">\n\t<div class=\"dijitTooltipContainer\" role=\"presentation\">\n\t\t<div class =\"dijitTooltipContents dijitTooltipFocusNode\" data-dojo-attach-point=\"containerNode\" role=\"dialog\"></div>\n\t</div>\n\t<div class=\"dijitTooltipConnector\" role=\"presentation\"></div>\n</div>\n"}});
define("dijit/TooltipDialog", [
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.replace
	"dojo/_base/event", // event.stop
	"dojo/keys", // keys
	"dojo/_base/lang", // lang.hitch
	"./focus",
	"./layout/ContentPane",
	"./_DialogMixin",
	"./form/_FormMixin",
	"./_TemplatedMixin",
	"dojo/text!./templates/TooltipDialog.html",
	"."		// exports methods to dijit global
], function(declare, domClass, event, keys, lang,
			focus, ContentPane, _DialogMixin, _FormMixin, _TemplatedMixin, template, dijit){

/*=====
	var ContentPane = dijit.layout.ContentPane;
	var _DialogMixin = dijit._DialogMixin;
	var _FormMixin = dijit.form._FormMixin;
	var _TemplatedMixin = dijit._TemplatedMixin;
=====*/

	// module:
	//		dijit/TooltipDialog
	// summary:
	//		Pops up a dialog that appears like a Tooltip


	return declare("dijit.TooltipDialog",
		[ContentPane, _TemplatedMixin, _FormMixin, _DialogMixin], {
		// summary:
		//		Pops up a dialog that appears like a Tooltip

		// title: String
		// 		Description of tooltip dialog (required for a11y)
		title: "",

		// doLayout: [protected] Boolean
		//		Don't change this parameter from the default value.
		//		This ContentPane parameter doesn't make sense for TooltipDialog, since TooltipDialog
		//		is never a child of a layout container, nor can you specify the size of
		//		TooltipDialog in order to control the size of an inner widget.
		doLayout: false,

		// autofocus: Boolean
		// 		A Toggle to modify the default focus behavior of a Dialog, which
		// 		is to focus on the first dialog element after opening the dialog.
		//		False will disable autofocusing. Default: true
		autofocus: true,

		// baseClass: [protected] String
		//		The root className to use for the various states of this widget
		baseClass: "dijitTooltipDialog",

		// _firstFocusItem: [private] [readonly] DomNode
		//		The pointer to the first focusable node in the dialog.
		//		Set by `dijit._DialogMixin._getFocusItems`.
		_firstFocusItem: null,

		// _lastFocusItem: [private] [readonly] DomNode
		//		The pointer to which node has focus prior to our dialog.
		//		Set by `dijit._DialogMixin._getFocusItems`.
		_lastFocusItem: null,

		templateString: template,

		_setTitleAttr: function(/*String*/ title){
			this.containerNode.title = title;
			this._set("title", title)
		},

		postCreate: function(){
			this.inherited(arguments);
			this.connect(this.containerNode, "onkeypress", "_onKey");
		},

		orient: function(/*DomNode*/ node, /*String*/ aroundCorner, /*String*/ corner){
			// summary:
			//		Configure widget to be displayed in given position relative to the button.
			//		This is called from the dijit.popup code, and should not be called
			//		directly.
			// tags:
			//		protected
			var newC = "dijitTooltipAB" + (corner.charAt(1) == 'L' ? "Left" : "Right")
					+ " dijitTooltip"
					+ (corner.charAt(0) == 'T' ? "Below" : "Above");

			domClass.replace(this.domNode, newC, this._currentOrientClass || "");
			this._currentOrientClass = newC;
		},

		focus: function(){
			// summary:
			//		Focus on first field
			this._getFocusItems(this.containerNode);
			focus.focus(this._firstFocusItem);
		},

		onOpen: function(/*Object*/ pos){
			// summary:
			//		Called when dialog is displayed.
			//		This is called from the dijit.popup code, and should not be called directly.
			// tags:
			//		protected

			this.orient(this.domNode,pos.aroundCorner, pos.corner);
			this._onShow(); // lazy load trigger
		},

		onClose: function(){
			// summary:
			//		Called when dialog is hidden.
			//		This is called from the dijit.popup code, and should not be called directly.
			// tags:
			//		protected
			this.onHide();
		},

		_onKey: function(/*Event*/ evt){
			// summary:
			//		Handler for keyboard events
			// description:
			//		Keep keyboard focus in dialog; close dialog on escape key
			// tags:
			//		private

			var node = evt.target;
			if(evt.charOrCode === keys.TAB){
				this._getFocusItems(this.containerNode);
			}
			var singleFocusItem = (this._firstFocusItem == this._lastFocusItem);
			if(evt.charOrCode == keys.ESCAPE){
				// Use setTimeout to avoid crash on IE, see #10396.
				setTimeout(lang.hitch(this, "onCancel"), 0);
				event.stop(evt);
			}else if(node == this._firstFocusItem && evt.shiftKey && evt.charOrCode === keys.TAB){
				if(!singleFocusItem){
					focus.focus(this._lastFocusItem); // send focus to last item in dialog
				}
				event.stop(evt);
			}else if(node == this._lastFocusItem && evt.charOrCode === keys.TAB && !evt.shiftKey){
				if(!singleFocusItem){
					focus.focus(this._firstFocusItem); // send focus to first item in dialog
				}
				event.stop(evt);
			}else if(evt.charOrCode === keys.TAB){
				// we want the browser's default tab handling to move focus
				// but we don't want the tab to propagate upwards
				evt.stopPropagation();
			}
		}
	});
});

define("dojo/fx/Toggler", ["../_base/lang","../_base/declare","../_base/fx", "../_base/connect"], 
  function(lang, declare, baseFx, connectUtil) {
	// module:
	//		dojo/fx/Toggler
	// summary:
	//		TODOC

return declare("dojo.fx.Toggler", null, {
	// summary:
	//		A simple `dojo.Animation` toggler API.
	//
	// description:
	//		class constructor for an animation toggler. It accepts a packed
	//		set of arguments about what type of animation to use in each
	//		direction, duration, etc. All available members are mixed into
	//		these animations from the constructor (for example, `node`,
	//		`showDuration`, `hideDuration`).
	//
	// example:
	//	|	var t = new dojo.fx.Toggler({
	//	|		node: "nodeId",
	//	|		showDuration: 500,
	//	|		// hideDuration will default to "200"
	//	|		showFunc: dojo.fx.wipeIn,
	//	|		// hideFunc will default to "fadeOut"
	//	|	});
	//	|	t.show(100); // delay showing for 100ms
	//	|	// ...time passes...
	//	|	t.hide();

	// node: DomNode
	//		the node to target for the showing and hiding animations
	node: null,

	// showFunc: Function
	//		The function that returns the `dojo.Animation` to show the node
	showFunc: baseFx.fadeIn,

	// hideFunc: Function
	//		The function that returns the `dojo.Animation` to hide the node
	hideFunc: baseFx.fadeOut,

	// showDuration:
	//		Time in milliseconds to run the show Animation
	showDuration: 200,

	// hideDuration:
	//		Time in milliseconds to run the hide Animation
	hideDuration: 200,

	// FIXME: need a policy for where the toggler should "be" the next
	// time show/hide are called if we're stopped somewhere in the
	// middle.
	// FIXME: also would be nice to specify individual showArgs/hideArgs mixed into
	// each animation individually.
	// FIXME: also would be nice to have events from the animations exposed/bridged

	/*=====
	_showArgs: null,
	_showAnim: null,

	_hideArgs: null,
	_hideAnim: null,

	_isShowing: false,
	_isHiding: false,
	=====*/

	constructor: function(args){
		var _t = this;

		lang.mixin(_t, args);
		_t.node = args.node;
		_t._showArgs = lang.mixin({}, args);
		_t._showArgs.node = _t.node;
		_t._showArgs.duration = _t.showDuration;
		_t.showAnim = _t.showFunc(_t._showArgs);

		_t._hideArgs = lang.mixin({}, args);
		_t._hideArgs.node = _t.node;
		_t._hideArgs.duration = _t.hideDuration;
		_t.hideAnim = _t.hideFunc(_t._hideArgs);

		connectUtil.connect(_t.showAnim, "beforeBegin", lang.hitch(_t.hideAnim, "stop", true));
		connectUtil.connect(_t.hideAnim, "beforeBegin", lang.hitch(_t.showAnim, "stop", true));
	},

	show: function(delay){
		// summary: Toggle the node to showing
		// delay: Integer?
		//		Ammount of time to stall playing the show animation
		return this.showAnim.play(delay || 0);
	},

	hide: function(delay){
		// summary: Toggle the node to hidden
		// delay: Integer?
		//		Ammount of time to stall playing the hide animation
		return this.hideAnim.play(delay || 0);
	}
});

});

define("dojo/NodeList-traverse", ["./query", "./_base/lang", "./_base/array"], function(dquery, lang, array) {
	// module:
	//		dojo/NodeList-traverse
	// summary:
	//		TODOC

var NodeList = dquery.NodeList;

/*=====
dojo["NodeList-traverse"] = {
	// summary: Adds a chainable methods to dojo.query() / Nodelist instances for traversing the DOM
};

// doc alias helpers:
NodeList = dojo.NodeList;
=====*/

lang.extend(NodeList, {
	_buildArrayFromCallback: function(/*Function*/callback){
		// summary:
		// 		builds a new array of possibly differing size based on the input list.
		// 		Since the returned array is likely of different size than the input array,
		// 		the array's map function cannot be used.
		var ary = [];
		for(var i = 0; i < this.length; i++){
			var items = callback.call(this[i], this[i], ary);
			if(items){
				ary = ary.concat(items);
			}
		}
		return ary;	//Array
	},

	_getUniqueAsNodeList: function(/*Array*/ nodes){
		// summary:
		// 		given a list of nodes, make sure only unique
		// 		elements are returned as our NodeList object.
		// 		Does not call _stash().
		var ary = [];
		//Using for loop for better speed.
		for(var i = 0, node; node = nodes[i]; i++){
			//Should be a faster way to do this. dojo.query has a private
			//_zip function that may be inspirational, but there are pathways
			//in query that force nozip?
			if(node.nodeType == 1 && array.indexOf(ary, node) == -1){
				ary.push(node);
			}
		}
		return this._wrap(ary, null, this._NodeListCtor);	 //dojo.NodeList
	},

	_getUniqueNodeListWithParent: function(/*Array*/ nodes, /*String*/ query){
		// summary:
		// 		gets unique element nodes, filters them further
		// 		with an optional query and then calls _stash to track parent NodeList.
		var ary = this._getUniqueAsNodeList(nodes);
		ary = (query ? dquery._filterResult(ary, query) : ary);
		return ary._stash(this);  //dojo.NodeList
	},

	_getRelatedUniqueNodes: function(/*String?*/ query, /*Function*/ callback){
		// summary:
		// 		cycles over all the nodes and calls a callback
		// 		to collect nodes for a possible inclusion in a result.
		// 		The callback will get two args: callback(node, ary),
		// 		where ary is the array being used to collect the nodes.
		return this._getUniqueNodeListWithParent(this._buildArrayFromCallback(callback), query);  //dojo.NodeList
	},

	children: function(/*String?*/ query){
		// summary:
		// 		Returns all immediate child elements for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the child elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, all immediate child elements for the nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".container").children();
		//		returns the four divs that are children of the container div.
		//		Running this code:
		//	|	dojo.query(".container").children(".red");
		//		returns the two divs that have the class "red".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			return lang._toArray(node.childNodes);
		}); //dojo.NodeList
	},

	closest: function(/*String*/ query, /*String|DOMNode?*/ root){
		// summary:
		// 		Returns closest parent that matches query, including current node in this
		// 		dojo.NodeList if it matches the query.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// query:
		//		a CSS selector.
		// root:
		//		If specified, query is relative to "root" rather than document body.
		// returns:
		//		dojo.NodeList, the closest parent that matches the query, including the current
		//		node in this dojo.NodeList if it matches the query.
		// example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		//	|		<div class="red">Red One</div>
		//	|		Some Text
		//	|		<div class="blue">Blue One</div>
		//	|		<div class="red">Red Two</div>
		//	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".red").closest(".container");
		//		returns the div with class "container".
		return this._getRelatedUniqueNodes(null, function(node, ary){
			do{
				if(dquery._filterResult([node], query, root).length){
					return node;
				}
			}while(node != root && (node = node.parentNode) && node.nodeType == 1);
			return null; //To make rhino strict checking happy.
		}); //dojo.NodeList
	},

	parent: function(/*String?*/ query){
		// summary:
		// 		Returns immediate parent elements for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the parent elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, immediate parent elements for nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		<div class="blue first"><span class="text">Blue One</span></div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue"><span class="text">Blue Two</span></div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".text").parent();
		//		returns the two divs with class "blue".
		//		Running this code:
		//	|	dojo.query(".text").parent(".first");
		//		returns the one div with class "blue" and "first".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			return node.parentNode;
		}); //dojo.NodeList
	},

	parents: function(/*String?*/ query){
		// summary:
		// 		Returns all parent elements for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the child elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, all parent elements for nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		<div class="blue first"><span class="text">Blue One</span></div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue"><span class="text">Blue Two</span></div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".text").parents();
		//		returns the two divs with class "blue", the div with class "container",
		// 	|	the body element and the html element.
		//		Running this code:
		//	|	dojo.query(".text").parents(".container");
		//		returns the one div with class "container".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var pary = [];
			while(node.parentNode){
				node = node.parentNode;
				pary.push(node);
			}
			return pary;
		}); //dojo.NodeList
	},

	siblings: function(/*String?*/ query){
		// summary:
		// 		Returns all sibling elements for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the sibling elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, all sibling elements for nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".first").siblings();
		//		returns the two divs with class "red" and the other div
		// 	|	with class "blue" that does not have "first".
		//		Running this code:
		//	|	dojo.query(".first").siblings(".red");
		//		returns the two div with class "red".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var pary = [];
			var nodes = (node.parentNode && node.parentNode.childNodes);
			for(var i = 0; i < nodes.length; i++){
				if(nodes[i] != node){
					pary.push(nodes[i]);
				}
			}
			return pary;
		}); //dojo.NodeList
	},

	next: function(/*String?*/ query){
		// summary:
		// 		Returns the next element for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the next elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, the next element for nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue last">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".first").next();
		//		returns the div with class "red" and has innerHTML of "Red Two".
		//		Running this code:
		//	|	dojo.query(".last").next(".red");
		//		does not return any elements.
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var next = node.nextSibling;
			while(next && next.nodeType != 1){
				next = next.nextSibling;
			}
			return next;
		}); //dojo.NodeList
	},

	nextAll: function(/*String?*/ query){
		// summary:
		// 		Returns all sibling elements that come after the nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the sibling elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, all sibling elements that come after the nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red next">Red Two</div>
		// 	|		<div class="blue next">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".first").nextAll();
		//		returns the two divs with class of "next".
		//		Running this code:
		//	|	dojo.query(".first").nextAll(".red");
		//		returns the one div with class "red" and innerHTML "Red Two".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var pary = [];
			var next = node;
			while((next = next.nextSibling)){
				if(next.nodeType == 1){
					pary.push(next);
				}
			}
			return pary;
		}); //dojo.NodeList
	},

	prev: function(/*String?*/ query){
		// summary:
		// 		Returns the previous element for nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the previous elements.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, the previous element for nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".first").prev();
		//		returns the div with class "red" and has innerHTML of "Red One".
		//		Running this code:
		//	|	dojo.query(".first").prev(".blue");
		//		does not return any elements.
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var prev = node.previousSibling;
			while(prev && prev.nodeType != 1){
				prev = prev.previousSibling;
			}
			return prev;
		}); //dojo.NodeList
	},

	prevAll: function(/*String?*/ query){
		// summary:
		// 		Returns all sibling elements that come before the nodes in this dojo.NodeList.
		// 		Optionally takes a query to filter the sibling elements.
		// description:
		// 		The returned nodes will be in reverse DOM order -- the first node in the list will
		// 		be the node closest to the original node/NodeList.
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		//	query:
		//		a CSS selector.
		// returns:
		//		dojo.NodeList, all sibling elements that come before the nodes in this dojo.NodeList.
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red prev">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue prev">Blue One</div>
		// 	|		<div class="red second">Red Two</div>
		// 	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".second").prevAll();
		//		returns the two divs with class of "prev".
		//		Running this code:
		//	|	dojo.query(".first").prevAll(".red");
		//		returns the one div with class "red prev" and innerHTML "Red One".
		return this._getRelatedUniqueNodes(query, function(node, ary){
			var pary = [];
			var prev = node;
			while((prev = prev.previousSibling)){
				if(prev.nodeType == 1){
					pary.push(prev);
				}
			}
			return pary;
		}); //dojo.NodeList
	},

	andSelf: function(){
		// summary:
		// 		Adds the nodes from the previous dojo.NodeList to the current dojo.NodeList.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// returns:
		//		dojo.NodeList
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red prev">Red One</div>
		// 	|		Some Text
		// 	|		<div class="blue prev">Blue One</div>
		// 	|		<div class="red second">Red Two</div>
		// 	|		<div class="blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".second").prevAll().andSelf();
		//		returns the two divs with class of "prev", as well as the div with class "second".
		return this.concat(this._parent);	//dojo.NodeList
	},

	//Alternate methods for the :first/:last/:even/:odd pseudos.
	first: function(){
		// summary:
		// 		Returns the first node in this dojo.NodeList as a dojo.NodeList.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// returns:
		//		dojo.NodeList, with the first node in this dojo.NodeList
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue last">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".blue").first();
		//		returns the div with class "blue" and "first".
		return this._wrap(((this[0] && [this[0]]) || []), this); //dojo.NodeList
	},

	last: function(){
		// summary:
		// 		Returns the last node in this dojo.NodeList as a dojo.NodeList.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// returns:
		//		dojo.NodeList, with the last node in this dojo.NodeList
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="red">Red One</div>
		// 	|		<div class="blue first">Blue One</div>
		// 	|		<div class="red">Red Two</div>
		// 	|		<div class="blue last">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".blue").last();
		//		returns the last div with class "blue",
		return this._wrap((this.length ? [this[this.length - 1]] : []), this); //dojo.NodeList
	},

	even: function(){
		// summary:
		// 		Returns the even nodes in this dojo.NodeList as a dojo.NodeList.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// returns:
		//		dojo.NodeList, with the even nodes in this dojo.NodeList
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="interior red">Red One</div>
		// 	|		<div class="interior blue">Blue One</div>
		// 	|		<div class="interior red">Red Two</div>
		// 	|		<div class="interior blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".interior").even();
		//		returns the two divs with class "blue"
		return this.filter(function(item, i){
			return i % 2 != 0;
		}); //dojo.NodeList
	},

	odd: function(){
		// summary:
		// 		Returns the odd nodes in this dojo.NodeList as a dojo.NodeList.
		// description:
		// 		.end() can be used on the returned dojo.NodeList to get back to the
		// 		original dojo.NodeList.
		// returns:
		//		dojo.NodeList, with the odd nodes in this dojo.NodeList
		//	example:
		//		assume a DOM created by this markup:
		//	|	<div class="container">
		// 	|		<div class="interior red">Red One</div>
		// 	|		<div class="interior blue">Blue One</div>
		// 	|		<div class="interior red">Red Two</div>
		// 	|		<div class="interior blue">Blue Two</div>
		//	|	</div>
		//		Running this code:
		//	|	dojo.query(".interior").odd();
		//		returns the two divs with class "red"
		return this.filter(function(item, i){
			return i % 2 == 0;
		}); //dojo.NodeList
	}
});

return NodeList;
});
define("dijit/nls/common", { root:
//begin v1.x content
({
	buttonOk: "OK",
	buttonCancel: "Cancel",
	buttonSave: "Save",
	itemClose: "Close"
})
//end v1.x content
,
"zh": true,
"zh-tw": true,
"tr": true,
"th": true,
"sv": true,
"sl": true,
"sk": true,
"ru": true,
"ro": true,
"pt": true,
"pt-pt": true,
"pl": true,
"nl": true,
"nb": true,
"ko": true,
"kk": true,
"ja": true,
"it": true,
"hu": true,
"hr": true,
"he": true,
"fr": true,
"fi": true,
"es": true,
"el": true,
"de": true,
"da": true,
"cs": true,
"ca": true,
"az": true,
"ar": true
});
define("dojo/fx/easing", ["../_base/lang"], function(lang) {
// module:
//		dojo/fx/easing
// summary:
//		This module defines standard easing functions that are useful for animations.

var easingFuncs = /*===== dojo.fx.easing= =====*/ {
	// summary:
	//		Collection of easing functions to use beyond the default
	//		`dojo._defaultEasing` function.
	//
	// description:
	//
	//		Easing functions are used to manipulate the iteration through
	//		an `dojo.Animation`s _Line. _Line being the properties of an Animation,
	//		and the easing function progresses through that Line determing
	//		how quickly (or slowly) it should go. Or more accurately: modify
	//		the value of the _Line based on the percentage of animation completed.
	//
	//		All functions follow a simple naming convention of "ease type" + "when".
	//		If the name of the function ends in Out, the easing described appears
	//		towards the end of the animation. "In" means during the beginning,
	//		and InOut means both ranges of the Animation will applied, both
	//		beginning and end.
	//
	//		One does not call the easing function directly, it must be passed to
	//		the `easing` property of an animation.
	//
	//	example:
	//	|	dojo.require("dojo.fx.easing");
	//	|	var anim = dojo.fadeOut({
	//	|		node: 'node',
	//	|		duration: 2000,
	//	|		//	note there is no ()
	//	|		easing: dojo.fx.easing.quadIn
	//	|	}).play();
	//

	linear: function(/* Decimal? */n){
		// summary: A linear easing function
		return n;
	},

	quadIn: function(/* Decimal? */n){
		return Math.pow(n, 2);
	},

	quadOut: function(/* Decimal? */n){
		return n * (n - 2) * -1;
	},

	quadInOut: function(/* Decimal? */n){
		n = n * 2;
		if(n < 1){ return Math.pow(n, 2) / 2; }
		return -1 * ((--n) * (n - 2) - 1) / 2;
	},

	cubicIn: function(/* Decimal? */n){
		return Math.pow(n, 3);
	},

	cubicOut: function(/* Decimal? */n){
		return Math.pow(n - 1, 3) + 1;
	},

	cubicInOut: function(/* Decimal? */n){
		n = n * 2;
		if(n < 1){ return Math.pow(n, 3) / 2; }
		n -= 2;
		return (Math.pow(n, 3) + 2) / 2;
	},

	quartIn: function(/* Decimal? */n){
		return Math.pow(n, 4);
	},

	quartOut: function(/* Decimal? */n){
		return -1 * (Math.pow(n - 1, 4) - 1);
	},

	quartInOut: function(/* Decimal? */n){
		n = n * 2;
		if(n < 1){ return Math.pow(n, 4) / 2; }
		n -= 2;
		return -1 / 2 * (Math.pow(n, 4) - 2);
	},

	quintIn: function(/* Decimal? */n){
		return Math.pow(n, 5);
	},

	quintOut: function(/* Decimal? */n){
		return Math.pow(n - 1, 5) + 1;
	},

	quintInOut: function(/* Decimal? */n){
		n = n * 2;
		if(n < 1){ return Math.pow(n, 5) / 2; }
		n -= 2;
		return (Math.pow(n, 5) + 2) / 2;
	},

	sineIn: function(/* Decimal? */n){
		return -1 * Math.cos(n * (Math.PI / 2)) + 1;
	},

	sineOut: function(/* Decimal? */n){
		return Math.sin(n * (Math.PI / 2));
	},

	sineInOut: function(/* Decimal? */n){
		return -1 * (Math.cos(Math.PI * n) - 1) / 2;
	},

	expoIn: function(/* Decimal? */n){
		return (n == 0) ? 0 : Math.pow(2, 10 * (n - 1));
	},

	expoOut: function(/* Decimal? */n){
		return (n == 1) ? 1 : (-1 * Math.pow(2, -10 * n) + 1);
	},

	expoInOut: function(/* Decimal? */n){
		if(n == 0){ return 0; }
		if(n == 1){ return 1; }
		n = n * 2;
		if(n < 1){ return Math.pow(2, 10 * (n - 1)) / 2; }
		--n;
		return (-1 * Math.pow(2, -10 * n) + 2) / 2;
	},

	circIn: function(/* Decimal? */n){
		return -1 * (Math.sqrt(1 - Math.pow(n, 2)) - 1);
	},

	circOut: function(/* Decimal? */n){
		n = n - 1;
		return Math.sqrt(1 - Math.pow(n, 2));
	},

	circInOut: function(/* Decimal? */n){
		n = n * 2;
		if(n < 1){ return -1 / 2 * (Math.sqrt(1 - Math.pow(n, 2)) - 1); }
		n -= 2;
		return 1 / 2 * (Math.sqrt(1 - Math.pow(n, 2)) + 1);
	},

	backIn: function(/* Decimal? */n){
		// summary:
		//		An easing function that starts away from the target,
		//		and quickly accelerates towards the end value.
		//
		//		Use caution when the easing will cause values to become
		//		negative as some properties cannot be set to negative values.
		var s = 1.70158;
		return Math.pow(n, 2) * ((s + 1) * n - s);
	},

	backOut: function(/* Decimal? */n){
		// summary:
		//		An easing function that pops past the range briefly, and slowly comes back.
		//
		// description:
		//		An easing function that pops past the range briefly, and slowly comes back.
		//
		//		Use caution when the easing will cause values to become negative as some
		//		properties cannot be set to negative values.

		n = n - 1;
		var s = 1.70158;
		return Math.pow(n, 2) * ((s + 1) * n + s) + 1;
	},

	backInOut: function(/* Decimal? */n){
		// summary:
		//		An easing function combining the effects of `backIn` and `backOut`
		//
		// description:
		//		An easing function combining the effects of `backIn` and `backOut`.
		//		Use caution when the easing will cause values to become negative
		//		as some properties cannot be set to negative values.
		var s = 1.70158 * 1.525;
		n = n * 2;
		if(n < 1){ return (Math.pow(n, 2) * ((s + 1) * n - s)) / 2; }
		n-=2;
		return (Math.pow(n, 2) * ((s + 1) * n + s) + 2) / 2;
	},

	elasticIn: function(/* Decimal? */n){
		// summary:
		//		An easing function the elastically snaps from the start value
		//
		// description:
		//		An easing function the elastically snaps from the start value
		//
		//		Use caution when the elasticity will cause values to become negative
		//		as some properties cannot be set to negative values.
		if(n == 0 || n == 1){ return n; }
		var p = .3;
		var s = p / 4;
		n = n - 1;
		return -1 * Math.pow(2, 10 * n) * Math.sin((n - s) * (2 * Math.PI) / p);
	},

	elasticOut: function(/* Decimal? */n){
		// summary:
		//		An easing function that elasticly snaps around the target value,
		//		near the end of the Animation
		//
		// description:
		//		An easing function that elasticly snaps around the target value,
		//		near the end of the Animation
		//
		//		Use caution when the elasticity will cause values to become
		//		negative as some properties cannot be set to negative values.
		if(n==0 || n == 1){ return n; }
		var p = .3;
		var s = p / 4;
		return Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p) + 1;
	},

	elasticInOut: function(/* Decimal? */n){
		// summary:
		//		An easing function that elasticly snaps around the value, near
		//		the beginning and end of the Animation.
		//
		// description:
		//		An easing function that elasticly snaps around the value, near
		//		the beginning and end of the Animation.
		//
		//		Use caution when the elasticity will cause values to become
		//		negative as some properties cannot be set to negative values.
		if(n == 0) return 0;
		n = n * 2;
		if(n == 2) return 1;
		var p = .3 * 1.5;
		var s = p / 4;
		if(n < 1){
			n -= 1;
			return -.5 * (Math.pow(2, 10 * n) * Math.sin((n - s) * (2 * Math.PI) / p));
		}
		n -= 1;
		return .5 * (Math.pow(2, -10 * n) * Math.sin((n - s) * (2 * Math.PI) / p)) + 1;
	},

	bounceIn: function(/* Decimal? */n){
		// summary:
		//		An easing function that 'bounces' near the beginning of an Animation
		return (1 - easingFuncs.bounceOut(1 - n)); // Decimal
	},

	bounceOut: function(/* Decimal? */n){
		// summary:
		//		An easing function that 'bounces' near the end of an Animation
		var s = 7.5625;
		var p = 2.75;
		var l;
		if(n < (1 / p)){
			l = s * Math.pow(n, 2);
		}else if(n < (2 / p)){
			n -= (1.5 / p);
			l = s * Math.pow(n, 2) + .75;
		}else if(n < (2.5 / p)){
			n -= (2.25 / p);
			l = s * Math.pow(n, 2) + .9375;
		}else{
			n -= (2.625 / p);
			l = s * Math.pow(n, 2) + .984375;
		}
		return l;
	},

	bounceInOut: function(/* Decimal? */n){
		// summary:
		//		An easing function that 'bounces' at the beginning and end of the Animation
		if(n < 0.5){ return easingFuncs.bounceIn(n * 2) / 2; }
		return (easingFuncs.bounceOut(n * 2 - 1) / 2) + 0.5; // Decimal
	}
};

lang.setObject("dojo.fx.easing", easingFuncs);

return easingFuncs;
});
// wrapped by build app
define("dojox/widget/rotator/Fade", ["dijit","dojo","dojox","dojo/require!dojo/fx"], function(dijit,dojo,dojox){
dojo.provide("dojox.widget.rotator.Fade");
dojo.require("dojo.fx");

(function(d){

	function _fade(/*Object*/args, /*string*/action){
		//	summary:
		//		Returns an animation of a fade out and fade in of the current and next
		//		panes.  It will either chain (fade) or combine (crossFade) the fade
		//		animations.
		var n = args.next.node;
		d.style(n, {
			display: "",
			opacity: 0
		});

		args.node = args.current.node;

		return d.fx[action]([ /*dojo.Animation*/
			d.fadeOut(args),
			d.fadeIn(d.mixin(args, { node: n }))
		]);
	}

	d.mixin(dojox.widget.rotator, {
		fade: function(/*Object*/args){
			//	summary:
			//		Returns a dojo.Animation that fades out the current pane, then fades in
			//		the next pane.
			return _fade(args, "chain"); /*dojo.Animation*/
		},

		crossFade: function(/*Object*/args){
			//	summary:
			//		Returns a dojo.Animation that cross fades two rotator panes.
			return _fade(args, "combine"); /*dojo.Animation*/
		}
	});

})(dojo);
});
// wrapped by build app
define("dojox/widget/Rotator", ["dijit","dojo","dojox","dojo/require!dojo/parser"], function(dijit,dojo,dojox){
dojo.provide("dojox.widget.Rotator");
dojo.require("dojo.parser");

(function(d){

	// build friendly strings
	var _defaultTransition = "dojox.widget.rotator.swap", // please do NOT change
		_defaultTransitionDuration = 500,
		_displayStr = "display",
		_noneStr = "none",
		_zIndex = "zIndex";

	d.declare("dojox.widget.Rotator", null, {
		//	summary:
		//		A widget for rotating through child nodes using transitions.
		//
		//	description:
		//		A small, fast, extensible, awesome rotator that cycles, with transitions,
		//		through panes (child nodes) displaying only one at a time and ties into
		//		controllers used to change state.
		//
		//		The Rotator does not rely on dijit.  It is designed to be as lightweight
		//		as possible.  Controllers and transitions have been externalized
		//		so builds can be as optimized with only the components you want to use.
		//
		//		For best results, each rotator pane should be the same height and width as
		//		the Rotator container node and consider setting overflow to hidden.
		//		While the Rotator will accept any DOM node for a rotator pane, a block
		//		element or element with display:block is recommended.
		//
		//		Note: When the Rotator begins, it does not transition the first pane.
		//
		//	subscribed topics:
		//		[id]/rotator/control - Controls the Rotator
		//			Parameters:
		//				/*string*/ action        - The name of a method of the Rotator to run
		//				/*anything?*/ args       - One or more arguments to pass to the action
		//
		//	published topics:
		//		[id]/rotator/update - Notifies controllers that a pane or state has changed.
		//			Parameters:
		//				/*string*/ type          - the type of notification
		//				/*dojox.widget.Rotator*/ rotator
		//										 - the rotator instance
		//				/*object?*/ params		 - params
		//
		//	declarative dojo/method events (per pane):
		//		onBeforeIn  - Fired before the transition in starts.
		//		onAfterIn   - Fired after the transition in ends.
		//		onBeforeOut - Fired before the transition out starts.
		//		onAfterOut  - Fired after the transition out ends.
		//
		//	example:
		//	|	<div dojoType="dojox.widget.Rotator">
		//	|		<div>Pane 1!</div>
		//	|		<div>Pane 2!</div>
		//	|	</div>
		//
		//	example:
		//	|	<script type="text/javascript">
		//	|		dojo.require("dojox.widget.rotator.Fade");
		//	|	</script>
		//	|	<div dojoType="dojox.widget.Rotator" transition="dojox.widget.rotator.crossFade">
		//	|		<div>Pane 1!</div>
		//	|		<div>Pane 2!</div>
		//	|	</div>

		//	transition: string
		//		The name of a function that is passed two panes nodes and a duration,
		//		then returns a dojo.Animation object. The default value is
		//		"dojox.widget.rotator.swap".
		transition: _defaultTransition,

		//	transitionParams: string
		//		Parameters for the transition. The string is read in and eval'd as an
		//		object.  If the duration is absent, the default value will be used.
		transitionParams: "duration:" + _defaultTransitionDuration,

		//	panes: array
		//		Array of panes to be created in the Rotator. Each array element
		//		will be passed as attributes to a dojo.create() call.
		panes: null,

		constructor: function(/*Object*/params, /*DomNode|string*/node){
			//	summary:
			//		Initializes the panes and events.
			d.mixin(this, params);

			var _t = this,
				t = _t.transition,
				tt = _t._transitions = {},
				idm = _t._idMap = {},
				tp = _t.transitionParams = eval("({ " + _t.transitionParams + " })"),
				node = _t._domNode = dojo.byId(node),
				cb = _t._domNodeContentBox = d.contentBox(node), // we are going to assume the rotator will not be changing size

				// default styles to apply to all the container node and rotator's panes
				p = {
					left: 0,
					top: 0
				},

				warn = function(bt, dt){
					console.warn(_t.declaredClass, ' - Unable to find transition "', bt, '", defaulting to "', dt, '".');
				};

			// if we don't have an id, then generate one
			_t.id = node.id || (new Date()).getTime();

			// force the rotator DOM node to a relative position and attach the container node to it
			if(d.style(node, "position") == "static"){
				d.style(node, "position", "relative");
			}

			// create our object for caching transition objects
			tt[t] = d.getObject(t);
			if(!tt[t]){
				warn(t, _defaultTransition);
				tt[_t.transition = _defaultTransition] = d.getObject(_defaultTransition);
			}

			// clean up the transition params
			if(!tp.duration){
				tp.duration = _defaultTransitionDuration;
			}

			// if there are any panes being passed in, add them to this node
			d.forEach(_t.panes, function(p){
				d.create("div", p, node);
			});

			// zero out our panes array to store the real pane instance
			var pp = _t.panes = [];

			// find and initialize the panes
			d.query(">", node).forEach(function(n, i){
				var q = { node: n, idx: i, params: d.mixin({}, tp, eval("({ " + (d.attr(n, "transitionParams") || "") + " })")) },
					r = q.trans = d.attr(n, "transition") || _t.transition;

				// cache each pane's title, duration, and waitForEvent attributes
				d.forEach(["id", "title", "duration", "waitForEvent"], function(a){
					q[a] = d.attr(n, a);
				});

				if(q.id){
					idm[q.id] = i;
				}

				// cache the transition function
				if(!tt[r] && !(tt[r] = d.getObject(r))){
					warn(r, q.trans = _t.transition);
				}

				p.position = "absolute";
				p.display = _noneStr;

				// find the selected pane and initialize styles
				if(_t.idx == null || d.attr(n, "selected")){
					if(_t.idx != null){
						d.style(pp[_t.idx].node, _displayStr, _noneStr);
					}
					_t.idx = i;
					p.display = "";
				}
				d.style(n, p);

				// check for any declarative script blocks
				d.query("> script[type^='dojo/method']", n).orphan().forEach(function(s){
					var e = d.attr(s, "event");
					if(e){
						q[e] = d.parser._functionFromScript(s);
					}
				});

				// add this pane to the array of panes
				pp.push(q);
			});

			_t._controlSub = d.subscribe(_t.id + "/rotator/control", _t, "control");
		},

		destroy: function(){
			//	summary:
			//		Destroys the Rotator and its DOM node.
			d.forEach([this._controlSub, this.wfe], d.unsubscribe);
			d.destroy(this._domNode);
		},

		next: function(){
			//	summary:
			//		Transitions the Rotator to the next pane.
			return this.go(this.idx + 1);
		},

		prev: function(){
			//	summary:
			//		Transitions the Rotator to the previous pane.
			return this.go(this.idx - 1);
		},

		go: function(/*int|string?*/p){
			//	summary:
			//		Transitions the Rotator to the specified pane index.
			var _t = this,
				i = _t.idx,
				pp = _t.panes,
				len = pp.length,
				idm = _t._idMap[p];

			// we gotta move on, so if the current pane is waiting for an event, just
			// ignore it and clean up
			_t._resetWaitForEvent();

			// determine the next index and set it to idx for the next go to
			p = idm != null ? idm : (p || 0);
			p = p < len ? (p < 0 ? len-1 : p) : 0;

			// if we're already on the requested pane or still transitioning, then return
			if(p == i || _t.anim){
				return null;
			}

			// get the current and next panes
			var current = pp[i],
				next = pp[p];

			// adjust the zIndexes so our animations look good... this must be done before
			// the animation is created so the animation could override it if necessary
			d.style(current.node, _zIndex, 2);
			d.style(next.node, _zIndex, 1);

			// info object passed to animations and onIn/Out events
			var info = {
					current: current,
					next: next,
					rotator: _t
				},

				// get the transition
				anim = _t.anim = _t._transitions[next.trans](d.mixin({
					rotatorBox: _t._domNodeContentBox
				}, info, next.params));

			if(anim){
				// create the deferred that we'll be returning
				var def = new d.Deferred(),
					ev = next.waitForEvent,

					h = d.connect(anim, "onEnd", function(){
						// reset the node styles
						d.style(current.node, {
							display: _noneStr,
							left: 0,
							opacity: 1,
							top: 0,
							zIndex: 0
						});

						d.disconnect(h);
						_t.anim = null;
						_t.idx = p;

						// fire end events
						if(current.onAfterOut){ current.onAfterOut(info); }
						if(next.onAfterIn){ next.onAfterIn(info); }

						_t.onUpdate("onAfterTransition");

						if(!ev){
							// if there is a previous waitForEvent, then we need to make
							// sure it gets unsubscribed
							_t._resetWaitForEvent();

							// animation is all done, fire the deferred callback.
							def.callback();
						}
					});

				// if we're waiting for an event, subscribe to it so we know when to continue
				_t.wfe = ev ? d.subscribe(ev, function(){
					_t._resetWaitForEvent();
					def.callback(true);
				}) : null;

				_t.onUpdate("onBeforeTransition");

				// fire start events
				if(current.onBeforeOut){ current.onBeforeOut(info); }
				if(next.onBeforeIn){ next.onBeforeIn(info); }

				// play the animation
				anim.play();

				// return the deferred
				return def; /*Deferred*/
			}
		},

		onUpdate: function(/*string*/type, /*object?*/params){
			//	summary:
			//		Send a notification to all controllers with the state of the rotator.
			d.publish(this.id + "/rotator/update", [type, this, params || {}]);
		},

		_resetWaitForEvent: function(){
			//	summary:
			//		If there is a waitForEvent pending, kill it.
			if(this.wfe){
				d.unsubscribe(this.wfe);
				this.wfe = null;
			}
		},

		control: function(/*string*/action){
			//	summary:
			//		Dispatches an action, first to this engine, then to the Rotator.
			var args = d._toArray(arguments),
				_t = this;
			args.shift();

			_t._resetWaitForEvent();

			if(_t[action]){
				// action exists, so call it and fire deferred if applicable
				var def = _t[action].apply(_t, args);
				if(def){
					def.addCallback(function(){
						_t.onUpdate(action);
					});
				}

				// since this action was triggered by a controller, we assume this was a
				// manual action, so check if we should pause
				_t.onManualChange(action);
			}else{
				console.warn(_t.declaredClass, ' - Unsupported action "', action, '".');
			}
		},

		resize: function(/*int*/width, /*int*/height){
			var b = this._domNodeContentBox = { w: width, h: height };
			d.contentBox(this._domNode, b);
			d.forEach(this.panes, function(p){ d.contentBox(p.node, b); });
		},

		onManualChange: function(){
			//	summary:
			//		Stub function that can be overriden or connected to.
		}
	});

	d.setObject(_defaultTransition, function(/*Object*/args){
		//	summary:
		//		The default rotator transition which swaps two panes.
		return new d._Animation({ // dojo.Animation
			play: function(){
				d.style(args.current.node, _displayStr, _noneStr);
				d.style(args.next.node, _displayStr, "");
				this._fire("onEnd");
			}
		});
	});

})(dojo);
});


