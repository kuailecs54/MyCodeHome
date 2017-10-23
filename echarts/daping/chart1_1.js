chartOption['1_1'] = {
  title_: {
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
    	right:0,
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
      right: -20,
      bottom: 0,
      containLabel: true
    },
    xAxis :
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日'],
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
	        		color:'#ccc',
	        	},
	        },            
        },
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
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#AEDDE3',
            	}
            },
            stack: '搜索引擎',
            barWidth:10,
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#56B6DE',
            	},

            },
            stack: '搜索引擎',
             barWidth:10,
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#1A75BB',
            	},

            },            
            stack: '搜索引擎',
             barWidth:10,
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
};