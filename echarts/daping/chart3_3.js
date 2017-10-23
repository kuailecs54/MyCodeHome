chartOption['3_3'] = {
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
  legend: {
    //图例标签
    right:2,
    itemWidth:18,
    itemHeight:9,
    textStyle:{
      color:'#ccc',
    },
    data:['计划量','实际量','谷歌'],
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
            symbol: "circle", 
            itemStyle:{
            	normal:{
            		color:'#2f979c',
            		borderColor:'#ddd',
            	}
            },
            lineStyle:{
              normal:{
                color:'#ddd',
                width:1,
              }
            },
            symbolSize:8,       
            data:[120, 132, 101, 134, 290, 230, 220,101,132,120]
        },
        {
            name:'计划量',
            type:'line',
            smooth:true,
            areaStyle:{
              normal:{
                color:'#1A3C85',
                
              }
            },
            itemStyle:{
              normal:{
                color:'#1A3C85',
              }
            },
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },            
            symbol: 'none',
            z:1,
            data:[102, 94, 91, 200, 109, 200, 180,91,82,62]
        }, 
        {
            name:'实际量',
            type:'line',
            smooth:true,
            areaStyle:{
              normal:{
                color:'#1A75BB',
                opacity:1,
              }
            },
            itemStyle:{
              normal:{
                color:'#1A75BB',
              }
            },            
            lineStyle: {
                normal: {
                    opacity: 0
                }
            },    
            z:2,
            symbol: 'none',
            data:[62, 82, 91, 84, 109, 200, 120,91,82,62]
        }       
  ]
};

