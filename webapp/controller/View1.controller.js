sap.ui.controller("gst.controller.View1", {
	onInit: function() {

	},
	handleEmailPress: function() {
		sap.m.URLHelper.triggerEmail("ruchi.singh@entune.co", "sample Subject", "Hi");
	},
	registerPress:function(){

	}
});