sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zdh.om.zdhom',
            componentId: 'OrderItemList',
            contextPath: '/OrderItem'
        },
        CustomPageDefinitions
    );
});