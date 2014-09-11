sap.ui.controller("evabirthday.InitialView", {

  onInit : function (evt) {
	
  },

	handleShoppingPress: function(evt) {
		sap.ui.getCore().byId("evaApp").to("idShoppingView1");
	},
  
	handleWellnessPress: function(evt) {
		sap.ui.getCore().byId("evaApp").to("idWellnessView1");
	},
	
	acceptedShopping: function(evt) {
	    var msg = "You accepted Option Shopping! Good choice :-); I'm looking forward to see your new stuff.";
	    sap.m.MessageToast.show(msg);	
	},
	
	acceptedWellness: function(evt) {
	    var msg = "You accepted Option Wellness! Good choice :-); I'm looking forward to get into the water and into try, hot rooms.";
	    sap.m.MessageToast.show(msg);
	},
	
	pressMe: function(evt) {
		var msg = "Da du ja so auf Entscheidungen stehst... darfst du heute dein Geburtstagsgeschenk selbst aussuchen :-). - Alles Gute zum Geburtstag Süße! - Freu mich auf die Zukunft mir DIR! :-*";
		sap.m.MessageToast.show(msg);
	}
});