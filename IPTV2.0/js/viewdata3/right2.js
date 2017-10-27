/**
 * Created by 当幸福来敲门 on 2017/10/16.
 */
var mychart= echarts.init(document.getElementById("right2"));

var

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: [{
            text: '用户订购信息分析',
            x:'left',
          /*  left: '30%',
            top: '1%',*/
            textStyle: {
                color: '#cff',
                fontSize:25
            }
        }, {
            text: '订购成功/失败分析',
            left: '73%',
            top: '1%',

            textStyle: {
                color: '#cff'
            }
        }],
        legend: {
            top:'35px',
         left:'28%',
            textStyle:{
                color:'#cff'
            },

            data: ['订购成功', '订购失败']
        },
        grid: {
            left: '5%',
            right: '38%',
            top: '16%',
            bottom: '6%',
            containLabel: true
        },
        yAxis:  {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color:"#cff"
                }
            }
        },
        xAxis: {
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:"#cff"
                }
            },
            data: ['10月16日','10月17日','10月18日','10月19日','10月20日','10月21日','10月22日']
        },
        series: [
            {
                name: '订购成功',
                type: 'bar',
                stack: '总量',
                barWidth:15,
                data: [320, 302, 301, 334, 390, 330, 320],
                itemStyle:
                {
                    //柱形图圆角，鼠标移上去效果
                    emphasis:{
                        barBorderRadius:[10,10,0,0],
                        color:'#feb004'
                    },
                    normal:{
                        //柱形图圆角，初始化效果
                     /*   barBorderRadius:[0,0,10,10],*/
                        color:'#f25a3c',
                        borderWidth:1,
                        shadowBlur:{
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            shadowBlur: 1
                        },
                        borderColor:'#fff',

                        label: {
                            show: true,
                            position: 'right',
                            formatter: '成功\n:{c}',
                            color:'#cff'
                        }
                    }
                }
            },
            {
                name: '订购失败',
                type: 'bar',
                stack: '总量',
                data: [50, 43, 40, 30, 44, 39, 30],
                itemStyle:
                {
                    //柱形图圆角，鼠标移上去效果
                    emphasis:{
                        barBorderRadius:[10,10,0,0],
                        color:'#f25a3c'

                    },
                    normal:{
                        //柱形图圆角，初始化效果
                      /*  barBorderRadius:[10,10,0,0],*/
                        color:'#feb004',
                        borderWidth:1,
                        shadowBlur:{
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            shadowBlur: 1
                        },
                        borderColor:'#fff',

                        label: {
                            show: true,
                            position: 'right',
                            formatter: '失败\n:{c}',
                            color:'#cff'
                        }
                    }
                }
            },
            {
                type: 'pie',
                color:['#FFA07A','#4682B4'],
                center: ['85%', '30%'],
                radius: ['18%', '38%'],
           /*     itemStyle:{
                  normal:{
                      color:[{'#FF00FF'}]
                  }
                },*/
                label:{
                    normal:{
                        show:true,
                        position:'inner',
                        formatter:'{b}\n{d}%'
                    }
                },
                data:[
                    {value:2297, name:'订购成功'},
                    {value:276, name:'订购失败'}
                ]
            },
            {
                type: 'pie',
                center: ['85%', '73%'],
                radius: ['18%', '38%'],
                color:[],
                label:{
                    normal:{
                        show:true,
                        position:'inner',
                        formatter:'{b}\n{d}%'
                    }
                },
                data:[
                    {value:30, name:'原因一'},
                    {value:79, name:'原因二'},
                    {value:80, name:'原因三'},
                    {value:87, name:'原因四'}

                ]
            }

        ]
    };
mychart.setOption(option);
