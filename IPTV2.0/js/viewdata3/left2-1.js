/**
 * Created by 当幸福来敲门 on 2017/10/16.
 */
    var myChart=echarts.init(document.getElementById("left2-1"))
var option = {
    /* color:'DeepPink',*/
    title: {
        text: '回看收视TOP5',
        x:'left',
        textStyle:{
            color:'#cff',
            verticalAlign:'center',
            top:'10px',
            fontWeight:'bold'
        }

    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },

    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show:true,
        boundaryGap: [0, 0.01],
       /* max:'35000',*/
        splitLine:{
            show:true
        },
        axisLine:{
            show:true,
            lineStyle:{
                color:'#F8F8FF'
            }
        }


    },
    yAxis: {
        type: 'category',
        show: true,
        name:'回看频道',
        x:center,

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
        data: ['新闻综合','娱乐频道','东方卫视','体育频道','电视剧频道']
    },
    series: [

        {
            /* name: 'TOP',*/
            type: 'bar',
            barWidth:15,
            data: [18325, 18438, 20000, 24594, 28141]
            ,
            //顶部数字展示pzr
            itemStyle:
            {
                //柱形图圆角，鼠标移上去效果
                emphasis:{
                    barBorderRadius:[10,10,10,10],
                    color:'#f25a3c'
                },

                normal:{
                    //柱形图圆角，初始化效果
                    barBorderRadius:[10,10,10,10],
                    color:'#ffde00',
                    borderWidth:2,
                    borderColor:'#fff',
                    label: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        color:'#cff'
                    }
                }
            }
        }

    ]
};
myChart.setOption(option);