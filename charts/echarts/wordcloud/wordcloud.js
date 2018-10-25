var targetElement = document.getElementById('main');
var chart = echarts.init(targetElement);

var option = {
    tooltip: {},
    series: [ {
        type: 'wordCloud',
        maxFontSize:60,
        minFontSize:50,
        gridSize: 2,
        sizeRange: [12, 50],
        rotateRatio:1,//单词旋转概率（0，不旋转；1，都旋转）
        //单词随机旋转角度的取值范围
        rotationRange:[-90, 90],
        // Shape can be 'circle', 'cardioid', 'diamond', 'triangle-forward', 'triangle', 'pentagon', 'star'
        shape: 'diamond',
        width: 800,
        height: 600,
        drawOutOfBound: true,
        textStyle: {
            normal: {
                color: function () {
                    return 'rgb(' + [
                        Math.round(Math.random() * 256),
                        Math.round(Math.random() * 256),
                        Math.round(Math.random() * 256)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [
            {name: 'Sam S Club',value: 10000,textStyle: {normal: {color: 'black'},emphasis: {color: 'red'}}},
            {name: 'Macys',value: 6181},{name: 'Amy Schumer',value: 4386},{name: 'Jurassic World',value: 4055},
            {name: 'Charter Communications',value: 2467},{name: 'Chick Fil A',value: 2244},{name: 'Planet Fitness',value: 1898},
            {name: 'Pitch Perfect',value: 1484},{name: 'Express',value: 1112},{name: 'Home',value: 965},
            {name: 'Johnny Depp',value: 847},{name: 'Lena Dunham',value: 582},{name: 'Lewis Hamilton',value: 555},
            {name: 'KXAN',value: 550},{name: 'Mary Ellen Mark',value: 462},{name: 'Farrah Abraham',value: 366},
            {name: 'Rita Ora',value: 360},{name: 'Serena Williams',value: 282},{name: 'NCAA baseball tournament',value: 273},
            {name: 'Point Break',value: 265}
        ]
    } ]
};

var timer = null;
var setTimer = function (){
    timer = setInterval(function(){
        window.onresize = chart.resize;
        chart.setOption(option);
    },1000)
}

targetElement.onmouseover = function(){
    clearInterval(timer);
}

targetElement.onmouseleave = function(){
    setTimer();
}

// var timer = setInterval(function(){
//     window.onresize = chart.resize;
//     chart.setOption(option);
// },1000)
//
// targetElement.onmouseover = function(){
//     clearInterval(timer);
// }
//
// targetElement.onmouseleave = function(){
//     timer = setInterval(function(){
//         window.onresize = chart.resize;
//         chart.setOption(option);
//     },1000)
// }
