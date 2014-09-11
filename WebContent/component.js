/**
 * 
 */
jQuery.sap.declare("com.routing.Component");

sap.ui.core.UIComponent.extend("com.routing.Component",{
	metadata : {
		routing : {
			config : { 
				viewType:"XML",
				viewPath:"evabirthday",
				targetControl:"navContainer",
				targetAggregation:"pages",
				clearTarget : false
			},
			routes : [
			          {
			        	  pattern : "",
			        	  name:"InitialView",
			        	  view:"InitialView"
			          },
			          {
			        	  pattern : "Shopping/{id}",
			        	  name : "Shopping",
			        	  view : "Shopping"
			          },
			          {
			        	  pattern : "Wellness/{id}",
			        	  name : "Wellness",
			        	  view : "Wellness"
			          }]
		}
	}
});

com.routing.Component.prototype.init = function(){
	jQuery.sap.require("sap.ui.core.routing.History");
	jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	
	sap.ui.core.UIComponent.prototype.init.apply(this);
	
	var router = this.getRouter();
	this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
	router.initialize();
};
com.routing.Component.prototype.destroy = function(){
	if(this.routeHandler){
		this.routeHandler.destroy();
	}
	sap.ui.core.UIComponent.destroy.apply(this,arguments);
};
com.routing.Component.prototype.createContent = function(){
	this.view = sap.ui.view({id:"InitialView",viewName:"evabirthday.InitialView",type:sap.ui.core.mvc.ViewType.XML});
	return this.view;
};