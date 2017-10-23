var data = [{
    name: '可可慕斯',
    value: [3, 3, 5, 4, 6, 4, 3, 3, 3, 5]
}, {
    name: '马卡龙',
    value: [5, 5, 3, 4, 2, 4, 5, 5, 5, 3]
}, {
    name: '布朗尼',
    value: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
}]
chartOption['3_1'] = {
    angleAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五', '六', '七','八','九'],
        z: 10 ,
        boundaryGap:false,
        splitLine:{
          show:false,
        },
        axisLine:{
          show:true,
          lineStyle :{
            color:'#6F91DB'
          }
        },
        axisTick:{
          show:false,
        },
        axisLabel:{
          show:false,
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: 75,
    },
    radiusAxis: {
      type:'value',
      splitLine :{
        show:false,
      },
      axisLine:{
        show:false,
      },
      axisTick:{
        show:false,
      },
      axisLabel:{
        show:false,
      },      
    },    
    series: [{
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: [6,6,6,6,6,6,6,6,6,6],
        coordinateSystem: 'polar',
        stack: 'a',
        silent: true
    }, {
        type: 'bar',
        data: [
            data["0"].value["0"],
            data["0"].value["1"],
            data["0"].value["2"],
            data["0"].value["3"],
            data["0"].value["4"],
            data["0"].value["5"],
            data["0"].value["6"],
            data["0"].value["7"],
            data["0"].value["8"],
        ],
        coordinateSystem: 'polar',
        name: data["0"].name,
        stack: 'a',
        itemStyle: {
            normal: {
              color:'#87ADFF'
            },
            emphasis: {
            }
        }
    },{
        type: 'bar',
        data: [
            data["1"].value["0"],
            data["1"].value["1"],
            data["1"].value["2"],
            data["1"].value["3"],
            data["1"].value["4"],
            data["1"].value["5"],
            data["1"].value["6"],
            data["1"].value["7"],
            data["1"].value["8"],
        ],
        coordinateSystem: 'polar',
        name: data["0"].name,
        stack: 'a',
        itemStyle: {
            normal: {
              color:'#2665b5'
            },
            emphasis: {
            }
        }
    },{
        type: 'bar',
        data: [
            data["2"].value["0"],
            data["2"].value["1"],
            data["2"].value["2"],
            data["2"].value["3"],
            data["2"].value["4"],
            data["2"].value["5"],
            data["2"].value["6"],
            data["2"].value["7"],
            data["2"].value["8"],
        ],
        coordinateSystem: 'polar',
        name: data["0"].name,
        stack: 'a',
        itemStyle: {
            normal: {
              color:'#122851'
            },
            emphasis: {
            }
        },
     
    },{
        type: 'bar',
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        },
        data: [2,2,2,2,2,2,2,2,2,2],
        coordinateSystem: 'polar',
        stack: 'a',
        silent: true
    },{
            type:'pie',
            radius: [75,89],
            itemStyle:{
              normal:{
                color:'#23589A',
                borderColor: '#0C142F'
              }
            },
            labelLine:{
              normal:{
                show:0,
                length:2,
                length2:3,
              },
            },
            startAngle:25,
            label: {
                normal: {
                  show:1,
                  textStyle:{
                    color:'#87ADFF',
                  }
                    //position: 'inside'
                }
            },        
            data:[{
              name:"需求",
              value:2, 
            },0.7,{
              name:"采购",
              value:2, 
            },0.7,{
              name:"到货",
              value:2, 
            },0.7,{
              name:"检定",
              value:2, 
            },0.7,{
              name:"库存",
              value:2, 
            },0.7,{
              name:"配送",
              value:2, 
            },0.7,{
              name:"安装",
              value:2, 
            },0.7,{
              name:"运行",
              value:2, 
            },0.7,{
              name:"报废",
              value:2, 
            },0.7]
   }]
}
