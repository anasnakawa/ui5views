sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("ui5views.controller.RootApp", {
		onInit: function() {},

		onAfterRendering: function() {
			this.byId("editView").$().hide();
		}
	});

});
