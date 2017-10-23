chartOption['4_3'] = {
  title: {
      text: '四表合一建设',
      left: 'center',
      top:-4,
      textStyle:{
        color:'#ddd',
        fontSize:14,
      },
  },
  legend: {
    right:0,
    itemWidth:18,
    itemHeight:9,
    textStyle:{
      color:'#ccc',
    },
    data:['谷歌','其他'],
  },
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    //整个坐标图
    top:30,
    left: 0,
    right: 0,
    bottom: 0,
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      data : ['一','二','三','四','五'],
      splitLine:{
        show:0,//分割线
      },
      axisLine:{
        show:0,//轴线样式
        lineStyle:{
          color:'#1E4499',
        },
      },
      axisTick:{
        show:0,//轴分隔线
        lineStyle:{
          color:'#1E4499',
        },
      },
      axisLabel:{
        show:1,//轴标签
        textStyle:{
          fontSize:5,
          color:'#ccc',
        },
      },
    }
  ],
  yAxis : [{
    axisLine:{
      show:1,//轴线样式
      lineStyle:{
        color:'#1E4499',
      },
    },
    axisTick:{
      show:0,//轴分隔线
      lineStyle:{
        color:'#1E4499',
      },
    },
    splitLine:{
      show:1,//轴分割线
      lineStyle:{
        color:'#1E4499',
      },
    },
    axisLabel:{
      show:1,//轴标签
      textStyle:{
        color:'#ccc',
      },
    },
  },{
    axisLine:{
      show:1,//轴线样式
      lineStyle:{
        color:'#1E4499',
      },
    },
    axisTick:{
      show:0,//轴分隔线
      lineStyle:{
        color:'#1E4499',
      },
    },
    splitLine:{
      show:0,//轴分割线
      lineStyle:{
        color:'#1E4499',
      },
    },
    axisLabel:{
      show:1,//轴标签
      textStyle:{
        color:'#ccc',
      },
    },  
  }],
  series : [
        {
            name:'谷歌',
            type:'line',
            yAxisIndex:0,
            symbol: "circle", 
            itemStyle:{
            	normal:{
            		color:'#EA6F45',
            		borderColor:'#ddd',
            	}
            },
            lineStyle:{
              normal:{
                color:'#EA6F45',
                width:1,
                type:'solid',
              }
            },
            symbolSize:8,       
            data:[120, 132, 101, 134, 290]
        },{
            name:'其他',
            type:'line',
            yAxisIndex:1,
            symbol: "circle", 
            itemStyle:{
            	normal:{
            		color:'#22BBB9',
            		borderColor:'#ddd',
            	}
            },
            lineStyle:{
              normal:{
                color:'#22BBB9',
                width:1,
                type:'solid',
              }
            },
            symbolSize:8,       
            data:[102, 94, 91, 200, 109]
        },{
            name:'谷歌',
            type:'bar',
            yAxisIndex:1,
            itemStyle:{
            	normal:{
                  color: '#4B649E',
                  }
            },
            barWidth:14,
            data:[102, 94, 91, 200, 109]
        },{
            name:'其他',
            type:'bar',
            itemStyle:{
            	normal:{
                  color: '#EA6F45',
                  }
            },
            barWidth:14,
            data:[62, 82, 91, 84, 309]
        }
  ]
};

