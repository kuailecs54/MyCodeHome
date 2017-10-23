chartOption['3_2'] = {
  tooltip : {
    trigger: 'axis',
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  legend: {
    //图例标签
    right:2,
    itemWidth:18,
    itemHeight:9,
    textStyle:{
      color:'#ccc',
    },
    data:['其他','必应','谷歌'],
  },
  grid: {
    //整个坐标图
    top:30,
    left: 0,
    right: -18,
    bottom: 0,
    containLabel: true
  },
  xAxis : [
    {
      type : 'category',
      boundaryGap : false,
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
        show:1,//轴分隔线
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
      show:1,//轴分隔线
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
  }],
  series : [
        {
            name:'谷歌',
            type:'line',
            itemStyle:{
            	normal:{
            		color:'#ddd',
            	}
            },
            symbolSize:0,
            lineStyle:{
              normal:{
                width:1,
              }
            },            
            data:[120, 132, 101, 134, 290, 230, 220,101,132,120]
        },{
            name:'必应',
            type:'scatter',
            symbolSize:14,//标记的大小
            itemStyle:{
              normal:{
                color:'#87ADFF',
                opacity :1,
              }
            },
            data:[{
              value:300,
              itemStyle:{
                normal:{
                  color:'#87ADFF'
                }
              }
            }, {
              value:72,
              itemStyle:{
                normal:{
                  color:'#EA6F45'
                }
              }
            }, {
              value:71,
              itemStyle:{
                normal:{
                  color:'#2562B2'
                }
              }
            }, {
              value:74,
              itemStyle:{
                normal:{
                  color:'#F39521'
                }
              }
            }, {
              value:100,
              itemStyle:{
                normal:{
                  color:'#1E469B'
                }
              }
            }, {
              value:130,
              itemStyle:{
                normal:{
                  color:'#FC4001'
                }
              }
            }, {
              value:110,
              itemStyle:{
                normal:{
                  color:'#2F979F'
                }
              }
            },{
              value:71,
              itemStyle:{
                normal:{
                  color:'#1A75BB'
                }
              }
            },{
              value:72,
              itemStyle:{
                normal:{
                  color:'#05A0B2'
                }
              }
            },{
              value:260,
              itemStyle:{
                normal:{
                  color:'#E7D449'
                }
              }
            }]
        },        
  ]
};

