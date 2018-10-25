var w = 958,
    h = 498;

/* vertices为数组，
 *
 * d3.range()等差数列方法
 *    d3.range(10)表示：a0=0,an<10,d=1的等差数列；
 *    d3.range(2,10)表示：a0=2,an<10,d=1的等差数列；
 *    d3.range(3,10,3)表示：a0=3,an<10,d=3的等差数列；
 * 综上：d3.range(100)为0~99
 */

var vertices = d3.range(100).map(function(d) {
    return [Math.random() * w, Math.random() * h];
});


/* 创建svg标签
 *
 * d3.select()选择第一个元素
 * 故：d3.select("body")为
 *     选择第一个为body的元素
 *
 * selection.append()在选择的元素后添加一个元素
 * 故：d3.select("body").append("svg:svg")为
 *     在第一个body标签下添加svg元素
 *
 * attr()设置元素css属性
 * 故：d3.select("body").append("svg:svg").attr("width", w).attr("height", h)为
 *     在第一个body标签下添加svg元素;
 *     并设置svg元素的宽高
 *
 * 综上：d3.range(100)为0~99
 */

var svg = d3.select("body")
    .append("svg:svg")
    .attr("width", w)
    .attr("height", h)
    .on("mousemove", update);

svg.selectAll("path")
    .data(voronoi(vertices))
    .enter("svg:path")
    .style("fill", function()
    {
        return d3.hsl(Math.random() * 360, 1, .5);
    })
    .attr("d", function(d)
    { return "M" + d.join("L") + "Z";
    });

function update() {
    vertices[0] = d3.svg.mouse(this);
    svg.selectAll("path")
        .data(voronoi(vertices)
            .map(function(d) {
                return "M" + d.join("L") + "Z";
            }))
        .filter(function(d) {
            return this.getAttribute("d") != d;
        })
        .select(this).style("fill", function() {
        return "rgb("+Math.floor(Math.random()*256)+","
            +Math.floor(Math.random()*256)+","
            +Math.floor(Math.random()*256)+")"
    });
}