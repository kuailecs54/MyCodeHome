chartOption['4_2'] = {
  title: {
      text: '行业分类',
      left: 88,
      top:70,
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
    left:260,
    itemWidth:18,
    itemHeight:9,
    itemGap :20,
    textStyle:{
      color:'#ccc',
    },
    data:['城镇居民','乡村居民','商业住宿','公共事业','金融房地','交通运输','建筑业','农林牧渔','工业','信息传输'],
  },
  series : [{
    type:'pie',
    center:[130,94],
    radius:[88,90],
    labelLine:{
       normal:{
          show:0,
       },
    },
    itemStyle:{
       normal:{
          color:function(a){
             if(a.data == 2){
                return '#232F78';
             }
             if(a.data == 1){
                return 'rgba(0,0,0, 0)';
             }             
          },
       },
    },
    data:[2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1],
  },{
            type:'pie',    
            center:[130,94],
            radius:[72,82],
            label:{
               normal:{
                  show:1,
                  formatter:'{d}%',
               }
            },
            labelLine:{
              normal:{
                 smooth:true,
                 length:6,
                 length2:7,
                 lineStyle :{
                    type:'dotted',
                 },
              }, 
            },
            data:[{
               name:"城镇居民",
               value:120,
               itemStyle:{
                  normal:{
                     color:'#604DBE',
                     
                  },
               },
            }, {
               name:"乡村居民",
               value:132,
               itemStyle:{
                  normal:{
                     color:'#0834CB',
                     
                  },
               },
            }, {
               name:"商业住宿",
               value:101,
               itemStyle:{
                  normal:{
                     color:'#0867B3',
                     
                  },
               },
            }, {
               name:"公共事业",
               value:134,
               itemStyle:{
                  normal:{
                     color:'#02A4CE',
                     
                  },
               },
            }, {
               name:"金融房地",
               value:100,
               itemStyle:{
                  normal:{
                     color:'#418ECE',
                     
                  },
               },
            }, {
               name:"交通运输",
               value:140,
               itemStyle:{
                  normal:{
                     color:'#66CBF6',
                     
                  },
               },
            }, {
               name:"建筑业",
               value:100,
               itemStyle:{
                  normal:{
                     color:'#BCE3F8',
                     
                  },
               },
            },{
               name:"农林牧渔",
               value:101,
               itemStyle:{
                  normal:{
                     color:'#D93A82',
                     
                  },
               },
            },{
               name:"工业",
               value:132,
               itemStyle:{
                  normal:{
                     color:'#1B2668',
                     
                  },
               },
            },{
               name:"信息传输",
               value:120,
               itemStyle:{
                  normal:{
                     color:'#11398E',
                     
                  },
               },
            }]
        } 
  ]
};

