sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI5_Layout_Demo.controller.index", {
	onInit: function() {
		    this.router = sap.ui.core.UIComponent.getRouterFor(this);
		
		},
		//Jump to the detail page
		onPress1: function(oEvent) {
			this.router.navTo("FixFlex");
		},
		//Jump to the detail page
		onPress2: function(oEvent) {
			this.router.navTo("FlexBox");
		},
		//Jump to the detail page
		onPress3: function(oEvent) {
			this.router.navTo("Grid");
		},
		//Jump to the detail page
		onPress4: function(oEvent) {
			this.router.navTo("SimpleForm");
		},
			onPress5: function(oEvent) {
			this.router.navTo("Document");
		}

	});

});