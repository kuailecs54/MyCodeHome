/**
 * Created by 当幸福来敲门 on 2017/10/16.
 */
var mychart= echarts.init(document.getElementById("right1"));

option = {

    title: {
        x : 'left',
        text: '用户行为分析',
        textStyle:{
            color:'#cff',
            fontSize:25
        }
    },

    tooltip: {
        trigger: 'axis',
        //触发效果
       /* axisPointer: {
            type: 'cross',
      /!*      crossStyle: {
                color: 'red'
            }*!/
        }*/
    },
 /*   toolbox: {

        feature: {

            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },*/
    legend: {
        top:'30px',
        textStyle:{
         color:'#cff'
        },
        data:['PU量','PV量','总访问量','平均时长']
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
            min: 0,
            max: 250,
            interval: 50,
            axisLine:{

                lineStyle:{
                    color:"#cff"
                }
            },
            splitLine:{
                show:false
            },
            axisTick:{
                show:false,
                alignWithLabel:true
            },
            nameTextStyle:{
                color:'#cff'
            }
        /*    axisLabel: {
                formatter: '{value}',
                color:'#cff'
            }*/
        },
        {
            type: 'value',
            name: '平均时长',
            min: 0,
            max: 24,
            interval: 5,
            axisLine:{
                lineStyle:{
                    color:"#cff"
                }
            },
            nameTextStyle:{
                color:'#cff'
            },
            axisLabel: {
                formatter: '{value}小时'
            }
}
    ],
    series: [
        {
            name:'PV量',
            type:'bar',
            data:[80, 90, 95, 85, 76, 83, 99],
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
                    barWidth:20,
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        color:'#cff'
                    }
                }
            }


        },
        {
            name:'PU量',
            type:'bar',
            data:[130, 140, 150, 170, 130, 160, 190],
            itemStyle:
            {
                //柱形图圆角，鼠标移上去效果
                emphasis:{
                    /*  barBorderRadius:[10,10,0,0],*/
                    color:'#feb004'

                },
                normal:{
                    //柱形图圆角，初始化效果
                    /*   barBorderRadius:[10,10,0,0],*/
                    color:'#f25a3c',
                    barWidth:20,
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        color:'#cff'
                    }
                }
            }

        },
        {
            name:'总访问量',
            type:'bar',
            data:[180,160,170,180,190,170,190],
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
                    color:'#9400D3',
                    barWidth:20,
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{c}',
                        color:'#cff'
                    }
                }
            }

        },
        {
            name:'平均时长',
            type:'line',
            yAxisIndex: 1,
            data:[8,9,7,8,10,9,10],


        }
    ]
};
mychart.setOption(option);
