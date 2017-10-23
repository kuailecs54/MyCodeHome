chartOption['1_3'] = JSON.parse(JSON.stringify(chartOption['1_1']));
chartOption['1_3'].series = [
        {
            name:'谷歌',
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#1E469B',
            	}
            },
            stack: '搜索引擎',
            barWidth:20,
            data:[120, 132, 101, 134, 290, 230, 220,101,132,120]
        },
        {
            name:'必应',
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#2665B5',
            	},

            },
            stack: '搜索引擎',
            barWidth:20,
            data:[60, 72, 71, 74, 190, 130, 110,71,72,60]
        },
        {
            name:'其他',
            type:'bar',
            itemStyle:{
            	normal:{
            		color:'#22BBB9',
            	},

            },            
            stack: '搜索引擎',
            barWidth:20,
            data:[62, 82, 91, 84, 109, 110, 120,91,82,62]
        }
];
chartOption['1_3'].xAxis[0].data = ['周一','周二','周三','周四','周五','周六','周日','周八','周九','周十'];
chartOption['1_3'].xAxis[0].axisTick.show = 1;