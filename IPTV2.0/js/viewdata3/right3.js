/**
 * Created by 当幸福来敲门 on 2017/10/17.
 */
/**
 * Created by 当幸福来敲门 on 2017/10/16.
 */
var mychart= echarts.init(document.getElementById("right3"));


option = {

    title: {
        x : 'left',

        text: '广告业务指标分析',
        textStyle:{
            color:'#cff',
            fontSize:25
        }
    },

    tooltip: {
        trigger: 'axis'
/*        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: 'red'
            }
        }*/
    },
    legend: {
        top:'30px',
        textStyle:{
            color:'#cff'
        },
        data:['广告点击量','点击转化量','转化量占比']
    },
    xAxis: [
        {
            type: 'category',


            data: ['10月16日','10月17日','10月18日','10月19日','10月20日','10月21日','10月22日'],
            axisLine:{
                lineStyle:{
                    color:"#cff"
                }
            },
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '访问量',

            /*min: 0,
            max: 300,*/
            interval: 50,
            splitLine:{
                show:false
            },
            axisTick:{
                show:false,
                alignWithLabel:true
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#F8F8FF'
                }
            },
            nameTextStyle:{
                color:'#cff'
            }
        },
        {
            type: 'value',
            name: '转化率',
           /* min: 1,
            max: 100,
            interval: 40,*/
            splitLine:{
                show:false
            },
            axisTick:{
                show:false,
                alignWithLabel:true
            },
            axisLine:{
                show:true,
                lineStyle:{
                    color:'#cff'
                }},

            nameTextStyle:{
                color:'#cff'
            },
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [
        {
            name:'广告点击量',
            type:'bar',
            barMaxWidth:20,
            data:[100, 110, 120, 95, 88, 130, 120],
            itemStyle:
            {
                //柱形图圆角，鼠标移上去效果
                emphasis:{
                  /*  barBorderRadius:[10,10,0,0],*/
                    color:'#f25a3c'

                },
                normal:{
                    //柱形图圆角，初始化效果
                 /*   barBorderRadius:[10,10,0,0],*/
                    color:'#feb004',
                    borderWidth:2,
                    barWidth:20,
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10
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



        },
     /*   {
            name:'点击转化量',
            type:'bar',
            stack: '总量',
            data:[90, 88, 90, 70, 69, 110, 97]
        },
*/
        {
            name:'转化量占比',
            type:'line',
            yAxisIndex: 1,
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            data:[90,80,75,73,78,84,81]
        }
    ]
};
mychart.setOption(option);
