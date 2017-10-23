//创新达标统计
function chart_cx() {
	var chart_cx = echarts.init(document.getElementById('chart_cx'));
	option = {
			title : {
				text : '创新达标统计',
				textStyle : {
					color : '#4CFFFF'
				}
			},
			tooltip : {
				formatter : "{a} <br/>{b} : {c}%"
			},
			toolbox : {
				show : true
			},
			series : [ {
				name : '业务指标',
				type : 'gauge',
				splitNumber : 10, // 分割段数，默认为5
				axisLine : { // 坐标轴线
					lineStyle : { // 属性lineStyle控制线条样式
						color : [ [ 0.2, 'red' ], [ 0.8, '#48b' ],
						          [ 1, '#DDB926' ] ],
						          width : 8
					}
				},
				axisTick : { // 坐标轴小标记
					splitNumber : 10, // 每份split细分多少段
					length : 12, // 属性length控制线长
					lineStyle : { // 属性lineStyle控制线条样式
						color : 'auto'
					}
				},
				axisLabel : { // 坐标轴文本标签，详见axis.axisLabel
					textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color : 'auto'
					}
				},
				splitLine : { // 分隔线
					show : true, // 默认显示，属性show控制显示与否
					length : 30, // 属性length控制线长
					lineStyle : { // 属性lineStyle（详见lineStyle）控制线条样式
						color : 'auto'
					}
				},
				pointer : {
					width : 5
				},
				title : {
					show : true,
					offsetCenter : [ 0, '-40%' ], // x, y，单位px
					textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight : 'bolder'
					}
				},
				detail : {
					formatter : '{value}/100',
					textStyle : { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						color : '#26FFFF',
						fontWeight : '400',
						fontSize:'20'
					}
				},
				data : [ {
					value : 50
				} ]
			} ]
	};
	chart_cx.setOption(option);
}

//投入达标统计
function chart_tr() {
	var chart_tr = echarts.init(document.getElementById('chart_tr'));
	var geoCoordMap=[{
		param:'参数1',
		name : '人均GDP超过1万美元',
		value : 2
	},{
		param:'参数2',
		name : '全社会R&D投入占GDP的比重',
		value : 21
	},{
		param:'参数3',
		name : '高新技术产业增加值占工业增加值的比重',
		value : 22
	},{
		param:'参数4',
		name : '科技进步对经济增长的贡献率',
		value : 23
	},
	{
		param:'参数5',
		name : '人均GDP超过1万美元',
		value : 2
	},{
		param:'参数6',
		name : '全社会R&D投入占GDP的比重',
		value : 21
	},{
		param:'参数7',
		name : '高新技术产业增加值占工业增加值的比重',
		value : 22
	},{
		param:'参数8',
		name : '科技进步对经济增长的贡献率',
		value : 23
	}];

	var da=[];
	var da1=[];
	var par=[];

	for (var i = 0; i < geoCoordMap.length; i++) {
		var val;
		var par1;
		var val1;
		val = geoCoordMap[i].value;
		val1 = geoCoordMap[i].name;
		par1 = geoCoordMap[i].param;
		da.push(val)
		da1.push(val1)
		par.push(par1)
	}
	option = {
			title : {
				text : '投入达标统计',
				textStyle : {
					color : 'red'
				}
			},
			tooltip : {
				trigger : 'item',
				formatter: function (v) {
					var dt=da1;
					var dt1=da;
					return "参数:"+par[v.dataIndex] +"<br>名称:"+dt[v.dataIndex]+"<br>数量: "+dt1[v.dataIndex];
				}
			},
			grid : {
				top : '10%',
				left : '3%',
				right : '3%',
				bottom : '3%',
				containLabel : true
			},
			legend : {

				textStyle : {
					color : '#4CFFFF'
				}
			},
			toolbox : {
				show : true,
			},
			calculable : true,
			xAxis : [ {
				type : 'value',
				splitLine : {
					show : false
				},
				axisLabel : {
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},
				axisLine : {
					lineStyle : {
						color : '#97FDFD',
					}
				}
			} ],
			yAxis : [ {
				type : 'category',
				data : [  ],
				splitLine : {
					show : false
				},
				axisLine : {
					lineStyle : {
						color : '#97FDFD',
					}
				},
				axisLabel : {
					formatter : '{value}',
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},
			} ],
			series : [ {
				//name : '2011年',
				type : 'bar',
				label : {
					normal : {
						show : true,
						position : [ '85%', '5%' ],
						textStyle : {
							color : "#fff"
						}
					}
				},
				data : da,
				itemStyle : {
					normal : {
						color : function(params) {
							var colorList = [ 'rgba(161,179,65,0.6)', 'rgba(157,45,58,0.6)','rgba(161,179,65,0.6)', 'rgba(157,45,58,0.6)','rgba(161,179,65,0.6)', 'rgba(157,45,58,0.6)','rgba(161,179,65,0.6)', 'rgba(157,45,58,0.6)'];
							return colorList[params.dataIndex]
						}
					}
				},
			}]
	};

	chart_tr.setOption(option);
}

function chart_cc() {
	var chart_cc = echarts.init(document.getElementById('chart_cc'));
	var geoCoordMap=[{
		param:'参数1',
		name : '人均GDP超过1万美元',
		value : 2
	},{
		param:'参数2',
		name : '全社会R&D投入占GDP的比重',
		value : 21
	},{
		param:'参数3',
		name : '高新技术产业增加值占工业增加值的比重',
		value : 22
	},{
		param:'参数4',
		name : '科技进步对经济增长的贡献率',
		value : 23
	},
	{
		param:'参数5',
		name : '人均GDP超过1万美元',
		value : 2
	},{
		param:'参数6',
		name : '全社会R&D投入占GDP的比重',
		value : 21
	},{
		param:'参数7',
		name : '高新技术产业增加值占工业增加值的比重',
		value : 22
	},{
		param:'参数8',
		name : '科技进步对经济增长的贡献率',
		value : 23
	}];

	var da=[];
	var da1=[];
	var par=[];

	for (var i = 0; i < geoCoordMap.length; i++) {
		var val;
		var par1;
		var val1;
		val = geoCoordMap[i].value;
		val1 = geoCoordMap[i].name;
		par1 = geoCoordMap[i].param;
		da.push(val)
		da1.push(val1)
		par.push(par1)
	}
	option = {
			title : {
				text : '产出达标统计',
				textStyle : {
					color : 'green'
				}
			},
			tooltip : {
				trigger : 'item',
				formatter: function (v) {
					var dt=da1;
					var dt1=da;
					return "参数:"+par[v.dataIndex] +"<br>名称:"+dt[v.dataIndex]+"<br>数量: "+dt1[v.dataIndex];
				}
			},
			grid : {
				top : '10%',
				left : '3%',
				right : '3%',
				bottom : '3%',
				containLabel : true
			},
			legend : {
				textStyle : {
					color : '#4CFFFF'
				}
			},
			toolbox : {
				show : true,
			},
			calculable : true,
			xAxis : [ {
				type : 'value',
				boundaryGap : [ 0, 0.01 ],
				splitLine : {
					show : false
				},
				axisLabel : {
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},

				axisLine : {
					lineStyle : {
						color : '#97FDFD',
					}
				}

			} ],
			yAxis : [ {
				type : 'category',
				data :[  ],
				splitLine : {
					show : false
				},
				axisLabel : {
					formatter : '{value}',
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},

				axisLine : {
					lineStyle : {
						color : '#97FDFD',
					}
				}
			} ],
			series : [ {
				//name : '2011年',
				type : 'bar',
				label : {
					normal : {
						show : true,
						position : [ '85%', '5%' ],
						textStyle : {
							color : "#fff"
						}
					}
				},
				data : [ 2, 150, 250, 280,2, 150, 250, 280 ],
				itemStyle : {
					normal : {
						color : function(params) {
							var colorList = [ 'rgba(119,199,211,0.6)', 'rgba(10,163,81,0.6)','rgba(119,199,211,0.6)', 'rgba(10,163,81,0.6)','rgba(119,199,211,0.6)', 'rgba(10,163,81,0.6)','rgba(119,199,211,0.6)', 'rgba(10,163,81,0.6)'];
							return colorList[params.dataIndex]
						}
					}
				}
			} ]
	};
	chart_cc.setOption(option);
}

var data = [
            [ [ 20, 65, 1500, '上海', '高投入低产出' ],
              [ 30, 95, 1500, '北京', '高投入低产出' ] ],
              [ [ 30, 12, 1500, '天津', '高投入高产出' ],
                [ 40, 32, 1500, '徐州', '高投入高产出' ] ],
                [ [ 66, 80, 1500, '南京', '低投入低产出' ],
                  [ 78, 75, 1500, '苏州', '低投入低产出' ] ],
                  [ [ 78, 40, 1500, '广州', '低投入低产出' ],
                    [ 91, 32, 1500, '深圳', '低投入高产出' ] ] ];
function chart_city() {
	var chart_city = echarts.init(document.getElementById('chart_city'));
	option = {
			title : {
				text : '城市创新绩效',
				textStyle : {
					color : '#4CFFFF'
				}
			},
			legend : {
				bottom : '1%',
				data : [ '高投入低产出', '高投入高产出', '低投入低产出', '低投入高产出' ],
				textStyle : {
					color : '#fff'
				}
			},
			grid : {
				top : '12%',
				left : '3%',
				right : '10%',
				bottom : '3%',
				containLabel : true
			},
			xAxis : {
				axisLabel : {
					show : false,
				},
				splitLine : {
					show : false
				},
				name : '投入',
				nameTextStyle : {
					color : '#4DFFFF',
					fontSize : 14
				},

				min : 0,
				max : 100,
				splitNumber : 2,
				axisLine : {
					lineStyle : {
						color : "#97FDFD"
					}
				},
				splitLine : {
					lineStyle : {
						type : 'dashed',
						color : '#737384'
					}
				}
			},
			yAxis : {
				axisLabel : {
					show : false
				},
				splitLine : {
					show : false
				},

				axisLine : {
					lineStyle : {
						color : '#97FDFD',
					}
				},
				nameTextStyle : {
					color : '#4DFFFF',
					fontSize : 14
				},
				splitNumber : 2,
				min : 0,
				max : 100,
				splitLine : {
					lineStyle : {
						type : 'dashed',
						color : '#737384'
					}
				},
				axisLine : {
					lineStyle : {
						color : "#97FDFD"
					}
				}
			},
			series : [
			          {
			        	  name : '高投入低产出',
			        	  data : data[0],
			        	  type : 'scatter',
			        	  symbolSize : function(data) {
			        		  return Math.sqrt(data[2]) / 2;
			        	  },
			        	  label : {
			        		  normal : {
			        			  show : true,
			        			  position : [ '0%', '100%' ],
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  }
			        		  },
			        		  emphasis : {
			        			  show : true,
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  },
			        			  position : 'top'
			        		  }
			        	  },
			        	  itemStyle : {
			        		  normal : {
			        			  shadowBlur : 10,
			        			  shadowColor : 'rgba(77, 255, 255, 0.5)',
			        			  shadowOffsetY : 5,
			        			  color : new echarts.graphic.RadialGradient(0.4,
			        					  0.3, 1, [ {
			        						  offset : 0,
			        						  color : 'rgb(77, 255, 255)'
			        					  }, {
			        						  offset : 1,
			        						  color : 'rgb(77, 255, 255)'
			        					  } ])
			        		  }
			        	  }
			          },
			          {
			        	  name : '高投入高产出',
			        	  data : data[1],
			        	  type : 'scatter',
			        	  symbolSize : function(data) {
			        		  return Math.sqrt(data[2]) / 2;
			        	  },
			        	  label : {
			        		  normal : {
			        			  show : true,
			        			  position : [ '0%', '100%' ],
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  }
			        		  },
			        		  emphasis : {
			        			  show : true,
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  },
			        			  position : 'top'
			        		  }
			        	  },
			        	  itemStyle : {
			        		  normal : {
			        			  shadowBlur : 10,
			        			  shadowColor : 'rgba(255, 120, 0, 0.5)',
			        			  shadowOffsetY : 5,
			        			  color : new echarts.graphic.RadialGradient(0.4,
			        					  0.3, 1, [ {
			        						  offset : 0,
			        						  color : 'rgb(255, 120, 0)'
			        					  }, {
			        						  offset : 1,
			        						  color : 'rgb(255, 120, 0)'
			        					  } ])
			        		  }
			        	  }
			          },
			          {
			        	  name : '低投入低产出',
			        	  data : data[2],
			        	  type : 'scatter',
			        	  symbolSize : function(data) {
			        		  return Math.sqrt(data[2]) / 2;
			        	  },
			        	  label : {
			        		  normal : {
			        			  show : true,
			        			  position : [ '0%', '100%' ],
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  }
			        		  },
			        		  emphasis : {
			        			  show : true,
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  },
			        			  position : 'top'
			        		  }
			        	  },
			        	  itemStyle : {
			        		  normal : {
			        			  shadowBlur : 10,
			        			  shadowColor : 'rgba(59, 243, 128, 0.5)',
			        			  shadowOffsetY : 5,
			        			  color : new echarts.graphic.RadialGradient(0.4,
			        					  0.3, 1, [ {
			        						  offset : 0,
			        						  color : 'rgb(59, 243, 128)'
			        					  }, {
			        						  offset : 1,
			        						  color : 'rgb(59, 243, 128)'
			        					  } ])
			        		  }
			        	  }
			          },
			          {
			        	  name : '低投入高产出',
			        	  data : data[3],
			        	  type : 'scatter',
			        	  symbolSize : function(data) {
			        		  return Math.sqrt(data[2]) / 2;
			        	  },
			        	  label : {
			        		  normal : {
			        			  show : true,
			        			  position : [ '0%', '100%' ],
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  }
			        		  },
			        		  emphasis : {
			        			  show : true,
			        			  formatter : function(param) {
			        				  return param.data[3];
			        			  },
			        			  position : 'top'
			        		  }
			        	  },
			        	  itemStyle : {
			        		  normal : {
			        			  shadowBlur : 10,
			        			  shadowColor : 'rgba(7, 163, 255, 0.5)',
			        			  shadowOffsetY : 5,
			        			  color : new echarts.graphic.RadialGradient(0.4,
			        					  0.3, 1, [ {
			        						  offset : 0,
			        						  color : 'rgb(7, 163, 255)'
			        					  }, {
			        						  offset : 1,
			        						  color : 'rgb(7, 163, 255)'
			        					  } ])
			        		  }
			        	  }
			          } ]
	};

	chart_city.setOption(option);
}
function chart_zs() {
	var chart_zs = echarts.init(document.getElementById('chart_zs'));
	option = {
			title : {
				text : '创新指数(综合)',
				textStyle : {
					color : '#4CFFFF'
				}
			},
			tooltip : {
				trigger : 'axis'
			},
			grid : {
				top : '10%',
				left : '3%',
				right : '3%',
				bottom : '3%',
				containLabel : true
			},
			xAxis : [ {
				type : 'category',
				boundaryGap : false,
				data : ['2006','2007','2008','2009', '2010', '2011', '2012', '2013', '2014', '2015','2016','2017',],
				splitLine : {
					show : false
				},
				axisLabel : {
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},
				axisLine : {
					lineStyle : {
						color : "#97FDFD"
					}
				},
			} ],
			yAxis : [ {
				name : '',
				type : 'value',
				max : 100,
				splitLine : {
					show : false
				},
				axisLabel : {
					formatter : '{value}',
					show : true,
					textStyle : {
						color : '#4CFFFF'
					}
				},
				axisLine : {
					lineStyle : {
						color : "#97FDFD"
					}
				},
			} ],
			series : [ {
				name : '客单价',
				type : 'line',
				tooltip : {
					trigger : 'axis'
						// formatter: '{a} <br/>{b}日: {c}元'
				},
				smooth : true,
				itemStyle : {
					normal : {
						color : 'rgba(2, 197, 233, 0.2)',
						lineStyle : {
							color : 'rgba(23, 107, 203, 0.2)'
						},
						areaStyle : {
							color : 'rgba(25, 146, 88, 0.4)'
						}
					}
				},
				data : [ 0,0,0,0,10, 12, 21, 54, 60, 80,0,0]
			} ]
	};
	chart_zs.setOption(option);
}






function chart_cyl() {
	var chart_cyl = echarts.init(document.getElementById('chart_cyl'));
	chart_cyl.showLoading();
	$.get('js/les-miserables.gexf', function(xml) {
		chart_cyl.hideLoading();

		var graph = echarts.dataTool.gexf.parse(xml);
		var categories = [];
		for (var i = 0; i < 9; i++) {
			categories[i] = {
					name : '类目' + i
			};
		}
		graph.nodes.forEach(function(node) {
			node.itemStyle = null;
			node.value = node.symbolSize;
			node.symbolSize /= 1.5;
			node.label = {
					normal : {
						show : node.symbolSize > 30
					}
			};
			node.category = node.attributes.modularity_class;
		});
		option = {
				title : {
					text : '产业链',
					textStyle : {
						fontWeight : 'normal',
						fontSize : 16,
						color : '#4CFFFF'
					},
					left : '36%'
				},
				grid : {
					//top:'10%',
					left : '1%', //grid 组件离容器左侧的距离。
					right : '1%', //grid 组件离容器右侧的距离。
					//bottom : '1%', //grid 组件离容器下侧的距离。
					containLabel : true
					//grid 区域是否包含坐标轴的刻度标签[ default: false ] 
				},
				tooltip : {},
				animationDurationUpdate : 1500,
				animationEasingUpdate : 'quinticInOut',
				series : [ {
					//name : 'Les Miserables',
					type : 'graph',
					layout : 'circular',
					data : graph.nodes,
					links : graph.links,
					categories : categories,
					zoom : 1.5,
					//roam : true,
					label : {
						normal : {
							position : 'right',
							formatter : '{b}'
						}
					},
					lineStyle : {
						normal : {
							curveness : 0.3
						}
					}
				} ]
		};

		chart_cyl.setOption(option);
	}, 'xml');
}

function chart_wl() {
	var myChart = echarts.init(document.getElementById('chart_wl'));
	myChart.showLoading();
	$.get('js/webkit-dep.json', function(webkitDep) {
		myChart.hideLoading();
		option = {
				//backgroundColor:'#31829F',
				title : {
					text : '合作网络',
					textStyle : {
						fontWeight : 'normal',
						fontSize : 16,
						color : '#4CFFFF'
					},
					left : '36%'
				},
				legend : {
					data : [ ]
				},
				grid : {
					left : '1%', //grid 组件离容器左侧的距离。
					right : '1%', //grid 组件离容器右侧的距离。
					containLabel : true
				},
				series : [ {
					type : 'graph',
					layout : 'force',
					animation : false,
					label : {
						normal : {
							position : 'right',
							formatter : '{b}'
						}
					},
					draggable : true,
					data : webkitDep.nodes.map(function(node, idx) {
						node.id = idx;
						return node;
					}),
					categories : webkitDep.categories,
					force : {
						edgeLength : 2,
						repulsion :5,
						gravity : 0.4
					},
					edges : webkitDep.links
				} ]
		};

		myChart.setOption(option);
	});
	window.onresize = function () {
		//重置容器高宽
		myChart.resize();
	};
}
function chart_word() {
	var chart_word = echarts.init(document.getElementById('chart_word'));
	var allData = {
			"citys" : [ {
				"name" : "延寿",
				"value" : [ 128.331644, 45.451897, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "临江",
				"value" : [ 126.918087, 41.811979, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "嘉兴",
				"value" : [ 120.755486, 30.746129, 4 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "四平",
				"value" : [ 124.350398, 43.16642, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "营口",
				"value" : [ 122.235418, 40.667012, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "密云",
				"value" : [ 116.801346, 40.35874, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "威海",
				"value" : [ 122.12042, 37.513068, 32 ],
				"symbolSize" : 3,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "杭州",
				"value" : [ 120.15507, 30.274085, 10 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "集安",
				"value" : [ 126.194031, 41.125307, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "贵阳",
				"value" : [ 106.630154, 26.647661, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "抚顺",
				"value" : [ 123.957208, 41.880872, 3 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "海门",
				"value" : [ 121.181615, 31.871173, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "珠海",
				"value" : [ 113.576726, 22.270715, 9 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "河北",
				"value" : [ 114.475704, 38.584854, -19 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#58B3CC"
					}
				}
			}, {
				"name" : "深圳",
				"value" : [ 114.057868, 22.543099, 14 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "黄浦",
				"value" : [ 121.484443, 31.231763, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "蓬莱",
				"value" : [ 120.758848, 37.810661, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "吉首",
				"value" : [ 109.705708, 28.266849, -364 ],
				"symbolSize" : 14,
				"itemStyle" : {
					"normal" : {
						"color" : "#58B3CC"
					}
				}
			}, {
				"name" : "甘肃",
				"value" : [ 103.826308, 36.059421, -2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#58B3CC"
					}
				}
			}, {
				"name" : "龙井",
				"value" : [ 129.427066, 42.766311, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "茂名",
				"value" : [ 110.925456, 21.662999, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "丹东",
				"value" : [ 124.354707, 40.0005, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "晋中",
				"value" : [ 112.752695, 37.687024, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "浙江",
				"value" : [ 120.152792, 30.267447, -2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#58B3CC"
					}
				}
			}, {
				"name" : "海城",
				"value" : [ 122.685217, 40.882377, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "溆浦",
				"value" : [ 110.594921, 27.908281, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "北京",
				"value" : [ 116.407526, 39.90403, -14 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#58B3CC"
					}
				}
			}, {
				"name" : "铁岭",
				"value" : [ 123.726166, 42.223769, 2 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "大同",
				"value" : [ 113.61244, 40.040295, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "金坛",
				"value" : [ 119.597897, 31.723247, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "齐齐哈尔",
				"value" : [ 109.705708, 28.266849, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, {
				"name" : "咸阳",
				"value" : [ 108.708991, 34.329605, 1 ],
				"symbolSize" : 2,
				"itemStyle" : {
					"normal" : {
						"color" : "#F58158"
					}
				}
			}, ],
			"moveLines" : [
			               {
			            	   "fromName" : "吉首",
			            	   "toName" : "珠海",
			            	   "coords" : [ [ 109.705708, 28.266849 ],
			            	                [ 113.576726, 22.270715 ] ]
			               },
			               {
			            	   "fromName" : "吉首",
			            	   "toName" : "舒兰",
			            	   "coords" : [ [ 109.705708, 28.266849 ],
			            	                [ 126.965607, 44.406106 ] ]
			               },
			               {
			            	   "fromName" : "吉首",
			            	   "toName" : "大连",
			            	   "coords" : [ [ 109.705708, 28.266849 ],
			            	                [ 121.614682, 38.914003 ] ]
			               },
			               {
			            	   "fromName" : "长沙",
			            	   "toName" : "集安",
			            	   "coords" : [ [ 113.000194, 28.242883 ],
			            	                [ 126.194031, 41.125307 ] ]
			               },
			               {
			            	   "fromName" : "吉首",
			            	   "toName" : "抚顺",
			            	   "coords" : [ [ 109.705708, 28.266849 ],
			            	                [ 123.957208, 41.880872 ] ]
			               },
			               {
			            	   "fromName" : "山东",
			            	   "toName" : "南京",
			            	   "coords" : [ [ 117.020359, 36.66853 ],
			            	                [ 118.796877, 32.060255 ] ]
			               } ]
	};

	option = {
			//backgroundColor: '#404a59',
			title : {
				text : '高端人才流动',
				left : 'center',
				textStyle : {
					color : '#4CFFFF'
				}
			},

			legend : {
				show : true,
				orient : 'vertical',
				top : 'center',
				left : 'left',
				data : [ '地点', '线路' ],
				textStyle : {
					color : '#4CFFFF'
				}
			},
			geo : {
				map : 'world',
				label : {
					emphasis : {
						show : false
					}
				},
				//roam : true,
				itemStyle : {
					normal : {
						areaColor : 'rgba(50,152,188,0.6)',
						borderColor : '#0A83EC'
					},
					emphasis : {
						areaColor : '#2a333d'
					}
				}
			},
			series : [
			          {
			        	  name : '地点',
			        	  type : 'effectScatter',
			        	  coordinateSystem : 'geo',
			        	  zlevel : 2,
			        	  rippleEffect : {
			        		  brushType : 'stroke'
			        	  },
			        	  label : {
			        		  emphasis : {
			        			  show : true,
			        			  position : 'right',
			        			  formatter : '{b}'
			        		  }
			        	  },
			        	  symbolSize : 2,
			        	  showEffectOn : 'render',
			        	  itemStyle : {
			        		  normal : {
			        			  color : '#46bee9'
			        		  }
			        	  },
			        	  data : allData.citys
			          },
			          {
			        	  name : '线路',
			        	  type : 'lines',
			        	  coordinateSystem : 'geo',
			        	  zlevel : 2,
			        	  large : true,
			        	  effect : {
			        		  show : true,
			        		  constantSpeed : 30,
			        		  symbol : 'pin',
			        		  symbolSize : 3,
			        		  trailLength : 0,
			        	  },
			        	  lineStyle : {
			        		  normal : {
			        			  color : new echarts.graphic.LinearGradient(0,
			        					  0, 0, 1, [ {
			        						  offset : 0,
			        						  color : '#58B3CC'
			        					  }, {
			        						  offset : 1,
			        						  color : '#F58158'
			        					  } ], false),
			        					  width : 1,
			        					  opacity : 0.2,
			        					  curveness : 0.1
			        		  }
			        	  },
			        	  data : allData.moveLines
			          } ]
	};

	chart_word.setOption(option);
}
chart_word();
chart_wl();
chart_cyl();


chart_zs();
chart_city();
chart_cc();
chart_tr();
chart_cx();

