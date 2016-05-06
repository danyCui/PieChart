var line=function(obj){
		var highchart={
        title: {
            text: obj.title,
            x: -20 //center
        },
        xAxis: {
            categories: obj.categories
        },
        yAxis: {
            title: {
                text: obj.lefttitle
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
        	// pointFormat: obj.pointFormat,
            // valueSuffix: ' '
           
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'PV',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }, {
            name: 'UV',
            data: [1.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
        }]

    };
    $(obj.id).highcharts(highchart);
}