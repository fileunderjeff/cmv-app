define([
    'dojo/on',
    'dojo/date/locale'
], function (on, locale) {

    function formatDateTime (value) {
        var date = new Date(value);
        return locale.format(date, {
            formatLength: 'short'
        });
    }

    return {
        map: true,
        mapClickMode: true,

        layers: [{
                name: 'allplanstest',
                expression: '', // additional where expression applied to all queries
                idProperty: 'allplanstest',
                queryParameters: {
                    type: 'spatial', // spatial, relationship, table or database
                    layerID: 'allplanstest', // from operational layers
                    sublayerID: 0
                    outFields: ['*']
                },
                attributeSearches: [
                    {
                        name: 'Search For Plans',
                        searchFields: [
                            {
                                name: 'Lead Organization',
                                label: 'Lead Organization',
                                expression: '(lead_organization LIKE \'[value]%\')',
                                placeholder: 'e.g. HGAC',
                                required: true,
                                minChars: 3
                            }
                        ],

                        title: 'Plan Database',
                        topicID: 'assessmentsQuery',
                        gridOptions: {
                            columns: [                          
                                {
                                    field: 'Plan_Name',
                                    label: 'Plan Name'
                                },
                                {
                                    field: 'LEAD_ORGANIZATION',
                                    label: 'Lead Organization'
                                },
                                {
                                    field: 'PLAN_HOU_GOALS',
                                    label: 'Goals'
                                },
                                {
                                    field: 'PLAN_TIME_FRAME',
                                    label: 'Time Frame'
                                },
                                {
                                    field: 'DATE_ADDED_UPDATED',
                                    label: 'Date Updated'
                                },
                                {
                                    field: 'PROJECT_STATUS',
                                    label: 'Project Status'
                                },
                                {
                                    field: 'PROJECT_SUMMARY',
                                    label: 'Project Summary'
                                },
                                {
                                    field: 'TYPE_OF_PLAN',
                                    label: 'Type of Plan'
                                },
                                {
                                    field: 'Plan_Link',
                                    label: 'Plan Link',
                                    get: function (object) { // allow export as a proper date
                                    return new Date(object.lastupdate);
                                        },
                                    formatter: formatDateTime
                                }                                
                            ],
                            sort: [
                                {
                                
                                }
                                    ]
                                }
                            }
                        ]
                    },
                ]
            }
        ]
    };
});