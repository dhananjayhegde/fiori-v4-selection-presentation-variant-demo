sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension", 
    "sap/m/MessageToast"
], function (ControllerExtension, MessageToast) {
    "use strict";
    return ControllerExtension.extend("zdh.om.zdhom.ext.controller.ListReportExtension", {
        // controller extensions can be used for handling manifest based custom action events
        onCustomKeepButtonClick: function (oContext, aSelectedContexts) {
            this.base
                .editFlow
                .invokeAction('com.sap.gateway.srvd.zdh_sd_ordermanagement.v0001.ValidateAction', {
                    contexts: aSelectedContexts,
                    invocationGrouping: "ChangeSet"
                })
                .then(function(aResponse){
                    let oResponse = aResponse && aResponse[0];
                    if(oResponse && oResponse.status && oResponse.status == "rejected" ){
                        MessageToast.show("Validation failed, do not execute main action");
                        return;
                    }
                    MessageToast.show("Validate action completed, calling main action...");
                    this.base
                        .editFlow
                        .invokeAction('com.sap.gateway.srvd.zdh_sd_ordermanagement.v0001.CancelOrder', {
                            contexts: aSelectedContexts,
                            invocationGrouping: "ChangeSet"
                        })
                        .then(function(){
                            MessageToast.show("Main action completed...");
                        })
                }.bind(this))
                .catch(function(oError){
                    console.log("Error ====> ");
                    console.log(oError);
                });
        }
    });
});




// sap.ui.define([
//     "sap/m/MessageToast"
// ], function(MessageToast) {
//     'use strict';

//     return {
//         onCustomKeepButtonClick: function(oEvent) {
//             MessageToast.show("Custom handler invoked.");
//         }
//     };
// });
