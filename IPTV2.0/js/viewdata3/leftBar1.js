/**
 * Created by 当幸福来敲门 on 2017/10/16.
 */
 var myChart=echarts.init(document.getElementById("left1"));
 var option = {
    /* color:'DeepPink',*/
    title:[ {
        text: '直播收视TOP10',
        x:'left',
        textStyle:{
            color:'#cff',
            verticalAlign:'center',
            top:'10px',
            fontWeight:'bold'
        }

    },{
        text:'收视排行',
        x:'right',
        textStyle:{
            color:'#cff',
            verticalAlign:'center',
            fontWeight:'bold',
            fontSize:35
        }

    }],
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
        name:'直播频道',
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
        data: ['新闻综合','娱乐频道','东方卫视','体育频道','电视剧频道','东方电影','第一财经','旅游卫视','时尚生活','CCTV-新闻']
    },
    series: [

        {
            /*name: 'TOP',*/
            type: 'bar',
            barWidth:14,
            data: [19325, 23438, 28000, 32594, 34141, 58807, 61807, 71807, 81807, 91807]
            ,
            //顶部数字展示pzr
            itemStyle:
            {
                //柱形图圆角，鼠标移上去效果
                emphasis:{
                    barBorderRadius:[10,10,10,10],
                    color:'#feb004'
                },

                normal:{
                    //柱形图圆角，初始化效果
                    barBorderRadius:[10,10,10,10],
                    color:'#f25a3c',
                    borderWidth:2,
                    shadowBlur:{
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowBlur: 10
                    },
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