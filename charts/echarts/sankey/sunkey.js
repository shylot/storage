var chart = echarts.init(document.getElementById('main'));

var data = [{name: 'MAC'}, {name:'IPAD'}, {name: 'IPHONE'},
    {name: '华东'}, {name: '华北'}, {name: '东北'},{name:'华南'},{name:'西南'},{name:'西北'},{name:'华中'}];
var link = [
    {source: 'MAC', target: '华东',value: 20},
    {source: 'MAC',target: '华北',value: 20},
    {source: 'MAC',target: '东北',value: 4},
    {source: 'MAC',target: '华南',value: 4},
    {source: 'MAC',target: '西南',value: 8},
    {source: 'MAC',target: '西北',value: 4},
    {source: 'MAC',target: '华中',value: 4},

    {source: 'IPAD',target: '华东',value: 5},
    {source: 'IPAD',target: '华北',value: 5},
    {source: 'IPAD',target: '东北',value: 1},
    {source: 'IPAD',target: '华南',value: 1},
    {source: 'IPAD',target: '西南',value: 2},
    {source: 'IPAD',target: '西北',value: 1},
    {source: 'IPAD',target: '华中',value: 1},

    {source: 'IPHONE',target: '华东',value: 2},
    {source: 'IPHONE',target: '华北',value: 4},
    {source: 'IPHONE',target: '东北',value: 1},
    {source: 'IPHONE',target: '华南',value: 1},
    {source: 'IPHONE',target: '西南',value: 1},
    {source: 'IPHONE',target: '西北',value: 1},
    {source: 'IPHONE',target: '华中',value: 1}
]

option = {
    tooltip:{},
    series: {
        type: 'sankey',
        layout:'none',
        data: data,
        links: link
    }
};



chart.setOption(option);