function charts(dom){
  this.chart = this.init(dom);
}
charts.prototype = {
  init:function(dom){
    return echarts.init(dom);
  },
  setOption: function(option){
    if(this.chart){
      return this.chart.setOption(option);
    }
    return false;
  },
  setData: function(data){
    
  },
}