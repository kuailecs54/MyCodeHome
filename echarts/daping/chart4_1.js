chartOption['4_1'] = {
  title: {
      text: '四表合一建设',
      left: 'center',
      top:-4,
      textStyle:{
        color:'#ddd',
        fontSize:14,
      },
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
      data : ['一','二','三','四','五','六','日','八','九','十'],
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
            		color:'#D81C5D',
            		borderColor:'#ddd',
            	}
            },
            lineStyle:{
              normal:{
                color:'#D81C5D',
                width:2,
                type:'dashed',
              }
            },
            stack: '1',
            symbolSize:8,       
            data:[120, 132, 101, 134, 180, 230, 220,101,132,120]
        },{
            name:'必应',
            type:'bar',
            yAxisIndex:1,
            itemStyle:{
            	normal:{
                  color: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 0.3,
                      colorStops: [{
                          offset: 0, color: '#D81C5D' // 0% 处的颜色
                      }, {
                          offset: 1, color: '#87ADFF' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                  }
            	}
            },
            stack: '2',
            barWidth:20,
            data:[102, 94, 91, 200, 109, 200, 180,91,82,62]
        }, 
  ]
};

