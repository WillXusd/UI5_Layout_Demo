sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI5_Layout_Demo.controller.index", {
		onInit: function() {
			this.router = sap.ui.core.UIComponent.getRouterFor(this);

		},
		//Jump to the detail page
		navToFixFlex: function(oEvent) {
			this.router.navTo("FixFlex");
		},
		//Jump to the detail page
		navToFlexBox: function(oEvent) {
			this.router.navTo("FlexBox");
		},
		//Jump to the detail page
		navToGrid: function(oEvent) {
			this.router.navTo("Grid");
		},
		//Jump to the detail page
		navToSimpleForm: function(oEvent) {
			this.router.navTo("SimpleForm");
		},
		navToDoc: function(oEvent) {
			this.router.navTo("Document");
		}

	});

});