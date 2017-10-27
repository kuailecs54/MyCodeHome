/**
 * Created by 当幸福来敲门 on 2017/10/17.
 */
$.get('js/shanghai.json', function (chinaJson) {
    echarts.registerMap('shanghai', chinaJson);
    var centerMap = echarts.init(document.getElementById('centerMap'));
    var geoCoordMap ={

        '浦东新区':[121.746568,31.07175],
        '普陀区':[121.401115,31.265333],
        '杨浦区':[121.53277,31.265211],
        '虹口区':[121.477937,31.284329],
        '徐汇区':[121.442937,31.164329],
        '长宁区':[121.372937,31.208329],
        '黄埔区':[121.497937,31.204329],
        '静安区':[121.437937,31.234329],
        '崇明县':[121.6314087864,31.6267867132],
        '宝山区':[121.479087,31.410532 ],
        '嘉定区':[121.259469,31.380941],
        '青浦区':[121.134138,31.162667],
        '闵行区':[121.403791,31.05163],
        '奉贤区':[121.551909,30.912802],
        '金山区':[121.201978,30.799069],
        '松江区':[121.234138,30.992667]
    };

    var data = [
        {
            name: '浦东新区',
            value: 126

        }, {
            name: '普陀区',
            value: 85
        }, {
            name: '杨浦区',
            value: 117

        }, {
            name: '虹口区',
            value: 88
        }, {
            name: '徐汇区',
            value: 98

        }, {
            name: '长宁区',
            value: 86
        }, {
            name: '黄埔区',
            value: 65

        }, {
            name: '静安区',
            value: 78
        }, {
            name: '崇明县',
            value: 123,
            alarm_num: 11
        }, {
            name: '宝山区',
            value: 140
        }, {
            name: '嘉定区',
            value: 49
        }, {
            name: '青浦区',
            value: 135

        }, {
            name: '闵行区',
            value: 83
        }, {
            name: '奉贤区',
            value: 114
        }, {
            name: '金山区',
            value: 78

        }, {
            name: '松江区',
            value: 132
        }];
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        // 有数据的地区的名称和value值
        return res;
    };
    var series = [];
    [
        ['shanghai', data]
    ].forEach(function(item, i) {
        series.push({
            name: '定位点',
            type: 'effectScatter', // 散点图
            coordinateSystem: 'geo', // 使用地理坐标系
            hoverAnimation: 'false',
            legendHoverLink: 'false',
            rippleEffect: {
                period: 2,
                brushType: 'fill',
                scale: 3
            },
            data: convertData(item[1]),
            symbolSize: function(val) {
                if (val[2] <= 80) {
                    return 10
                }
                if (val[2] > 80 && val[2] <= 100) {
                    return 12
                }
                if (val[2] > 100 && val[2] <= 120) {
                    return 15
                }
                if (val[2] > 120 && val[2] <= 140) {
                    return 25
                }
                if (val[2] > 140 && val[2] <= 180) {
                    return 30
                }
                if (val[2] > 180) {
                    return 35
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFA500'

                }
            },
 /*           zlevel: 1.1*/
        }, {
            type: 'map',

            zoom:1.1,
            left:'20%',
            top:'15%',
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#ddb926',
                        fontSize: 10
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#ddb926',
                        fontSize: 10
                    }
                }

            },
            data: data
        }, {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin',
            symbolSize: 25,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#FF0000' //标志颜色
                }
            },
            zlevel: 6,
            data: convertData(data)
        });
    });
    var  option={
            title:{
                text:'用户终端信息分析',
                x:'center',
                textStyle:{
                    color:'#cff',
                    fontSize:35
                }
            },
            geo:{
                map:'shanghai',
                zoom:1.3,
              aspectScale:0.8,
                left:'20%',
                top:'18%',
                label:{
                    normal:{
                        show:false,
                        color:'auto'
                    },
                    emphasis:{
                        show:true,
                        position:['80%',' 70%'],
                        distance:'insideRight'

                    }
                },
                //地图的设置  默认 和高亮
                itemStyle:{
                    normal:{
                        color:'#0e40bf',//地图背景色
                        borderColor:'#00FFFF',//地图边界线颜色
                        borderWidth:2//边界先宽度
                    },
                    //高亮暂时不设置 默认状态
                    emphasis:{
                        color:'#00FF7F'
                    }

                }
            },
        series: series

    };
    centerMap.setOption(option);

    var centerBar=echarts.init(document.getElementById('centerBar'));
    var   machines={

        浦东新区:[10,20,10,10,20,12,22,20],
        普陀区:[11,12,20,17,11,22,16,23],
        杨浦区:[8,12,20,26,11,22,16,2],
        虹口区:[11,12,8,17,11,22,16,11],
        徐汇区:[11,12,18,17,18,22,16,23],
        长宁区:[11,19,20,20,11,22,16,23],
        黄埔区:[21,12,25,17,18,22,26,23],
        静安区:[11,12,20,17,11,18,16,13],
        崇明县:[11,18,27,17,19,22,26,23],
        宝山区:[11,17,20,20,11,22,16,23],
        嘉定区:[11,12,20,17,15,22,16,23],
        青浦区:[21,12,16,17,8,22,16,23],
        闵行区:[9,10,8,12,11,22,6,5],
        奉贤区:[31,12,2,7,11,22,16,13],
        金山区:[11,8,7,10,11,12,16,3],
        松江区:[11,12,20,17,11,22,16,23],
        黄浦区:[4,7,4,3,5,6,7,4],
        闸北区:[5,3,3,5,8,5,3,3]


    };
    var optionBar={

        title:[ {
            text: '浦东新区',
            x:'right',


            textStyle: {
                color: '#cff',
                fontWeight:'bold',
                fontSize:20
            }
        },{
            text: '机顶盒品牌分布',

            x:'left',
           /* top:'8%',*/
            textStyle: {
                color: '#cff',
                fontWeight:'bold',
                fontSize:25
            }
        }],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                axisLine:{
                    lineStyle:{
                        color:"#cff"
                    }
                },
                axisPointer: {
                    type: 'shadow'
                },
                data : ['创维', '中兴', '华为', '九州', '银河', 'TCL', '九联','长虹'],
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis : [
            {
                name: '终端量',
                type : 'value',

                nameTextStyle:{
                    color:'#cff',
                    top:'200px'
                },
                axisLine:{

                    lineStyle:{
                        color:"#cff"
                    }
                }

            }
        ],
        series : [
            {
                name:'',
                type:'bar',
                barWidth: '40%',
                data:[10, 20, 10, 10, 20, 12, 22, 20],
                itemStyle:
                {
                    //柱形图圆角，鼠标移上去效果
                    emphasis:{
                    /*    barBorderRadius:[10,10,10,10],*/
                        color:'#feb004'
                    },
                    normal:{
                        //柱形图圆角，初始化效果
                   /*     barBorderRadius:[0,0,10,10],*/
                        color:'#f25a3c',
                        borderWidth:1,
                        shadowBlur:{
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            shadowBlur: 1
                        },
                        borderColor:'#fff',

                        label: {
                            show: true,
                            position: 'top',
                            formatter: '{c}',
                            color:'#cff'
                        }
                    }
                }
            }
        ]
    };
    centerBar.setOption(optionBar);
    centerMap.on('click', function (params) {
        if (params.componentType == "geo"){
            centerBar.setOption(
                {
                    series:[{data:machines[params.name]}],
                    title:[{text:params.name}]

                }
            )
        }
    });



});

