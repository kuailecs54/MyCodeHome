var hideItemStyle = {label: {show: false},labelLine: {show: false},opacity:0};
var 半圆饼图通用配置 = {
  name: '值',
  type: 'pie',
  center: [100, 91],
  clockWise: false,
  hoverAnimation: false,
  startAngle:180,
  itemStyle: {
    normal: {
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      borderWidth: 5,
      shadowBlur: 40,
      borderColor: "#ffcd26",
      shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
  },  
};
chartOption['1_2'] = {
  legend: {
      orient: 'vertical',
      align:'left',
      x: 'right',
      y:'bottom',
    	itemWidth:18,
    	itemHeight:9,
    	textStyle:{
    		color:'#ccc',
    	},
      data:['其他','必应','谷歌','百度'],
  },  
  series: [$.extend({
    radius: [69, 70],
    data: [{
        value: .5,
        name: '其他',
        itemStyle:{
          normal:{
            color: "#1E469B",
            borderColor: "#1E469B",
          }
        }
    }, {
        value: .5,
        name: '50%',
        itemStyle:{
          normal: hideItemStyle,
          emphasis: hideItemStyle,
        }
    }]
  },半圆饼图通用配置),$.extend({
    radius: [55, 56],
    data: [{
        value: .4,
        name: '必应',
        itemStyle:{
          normal:{
            color: "#2665B5",
            borderColor: "#2665B5",
          }
        }        
    }, {
        value: .6,
        name: '',
        itemStyle:{
          normal: hideItemStyle,
          emphasis: hideItemStyle,
        }
    }]
  },半圆饼图通用配置),$.extend({
    radius: [41, 42],
    data: [{
        value: .3,
        name: '谷歌',
        itemStyle:{
          normal:{
            color: "#87ADFF",
            borderColor: "#87ADFF",
          }
        }        
    }, {
        value: .7,
        name: '50%',
        itemStyle:{
          normal: hideItemStyle,
          emphasis: hideItemStyle,
        }
    }]
  },半圆饼图通用配置),$.extend({
    radius: [27, 28],
    data: [{
        value: .2,
        name: '百度',
        itemStyle:{
          normal:{
            color: "#AEDDE3",
            borderColor: "#AEDDE3",
          }
        }        
    }, {
        value: .8,
        name: '50%',
        itemStyle:{
          normal: hideItemStyle,
          emphasis: hideItemStyle,
        }
    }]
  },半圆饼图通用配置)],

};