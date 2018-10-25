var chart = echarts.init(document.getElementById('main'));


var hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var days = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,];

var data = [];
for(i=0;i<=30;i++){
    for(j=0;j<=23;j++){
        data.push([hours[j],days[i],Math.floor((Math.random()*11))])
    }
}


option = {
    tooltip: {
        position: 'top'
    },
    animation: true,
    grid: {
        width:'50%',
        height: '80%',
        y: '10%'
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: days,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        color:['rgb(187,15,10)','rgb(206,51,32)','rgb(221,81,51)','rgb(252,146,95)','rgb(254,238,214)']
    },
    series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
            normal: {
                show: true
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};


chart.setOption(option);