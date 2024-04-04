sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zdh/om/zdhom/test/integration/FirstJourney',
		'zdh/om/zdhom/test/integration/pages/OrderItemList',
		'zdh/om/zdhom/test/integration/pages/OrderItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderItemList, OrderItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zdh/om/zdhom') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderItemList: OrderItemList,
					onTheOrderItemObjectPage: OrderItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);