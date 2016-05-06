var bar=function(obj){
	var highchart={
        chart: {
            type: 'column',
            margin: [ 50, 50, 100, 80]
        },
        title: {
            text: obj.title
        },
        xAxis: {
            categories: obj.categories,
            labels: {
                rotation: -45,
                align: 'right',
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: obj.lefttitle
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: obj.pointFormat,
        },
        series: [{
            name: 'Population',
            data: [34.4, 21.8, 20.1, 20, 19.6, 19.5, 19.1, 18.4, 18,
                17.3, 16.8, 15, 14.7, 14.5, 13.3, 12.8, 12.4, 11.8,
                11.7, 11.2],
            dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#000',
                align: 'center',
                x: 0,
                y: -10,
                style: {
                    fontSize: '10px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        }]
    };
    $(obj.id).highcharts(highchart);
};