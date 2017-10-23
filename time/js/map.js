var dataMap = {};
function dataFormatter(obj) {
	var pList = [ '一月' ];
	var temp;
	for (var year = 2002; year <= 2011; year++) { //注意，2002 - 2011 和下面的数据都要对应上

		obj[year] = Math.floor(50 / 100) * 100;
	}
	return obj;
}
dataMap.data = dataFormatter({
	2011 : [ 16 ],
	2010 : [ 36 ],
	2009 : [ 50 ],
	2008 : [ 90 ],
	2007 : [ 77 ],
	2006 : [ 20 ],
	2005 : [ 46 ],
	2004 : [ 68 ],
	2003 : [ 30 ],
	2002 : [ 84 ]
});

function chart_time() {
	var myChart = echarts.init(document.getElementById('timeline'));
	option = {
			baseOption : {
				timeline : {
					axisType : 'category',
					autoPlay : false,
					playInterval : 5000,
					bottom : 10,
					left : 100,
					right : 100,
					lineStyle : {
						color : '#4DFFFF'
					},
					label : {
						normal : {
							textStyle : {
								color : '#4DFFFF'
							}
						}
					},
					checkpointStyle : {
						color : '#4DFFFF',
						borderColor : 'rgba(77,255,255, 0.5)'
					},
					controlStyle : {
						normal : {
							color : '#4DFFFF',
							borderColor : '#4DFFFF'
						}
					},
					data : [ '2002', '2003', '2004', '2005', '2006', '2007',
					         '2008', '2009', '2010', '2011' ]
				},
				xAxis : [ {
					'type' : 'category',
					'axisLabel' : {
						'interval' : 0
					}

				} ],
				yAxis : [ {
					type : 'value'
				} ],
				series : [ {
					name : 'GDP',
					type : 'line'
				} ]
			},
			options : [ {
				series : [ {
					data : dataMap.data['2002']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2003']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2004']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2005']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2006']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2007']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2008']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2009']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2010']
				} ]
			}, {
				series : [ {
					data : dataMap.data['2011']
				} ]
			} ]
	};
	myChart.setOption(option);
	myChart.on('timelinechanged', function(params) {
		chart_data1();
		chart_data();
		chart_hz();
		chart_js();
		chart_zs();
		chart_city();
		chart_cc();
		chart_tr();
		chart_cx();
		chart_word();
		chart_cyl();
		chart_wl();
		$("#md").html('<dl><dt>标题6</dt><dd>内容6</dd></dl>')
	});
}

chart_time();

function chart_data() {
	var chart_data = echarts.init(document.getElementById('chart_data'));
	var geoCoordMap = {
			"北京" : [ 116.46, 39.92 ],
			"南京" : [ 118.78, 32.04 ],
			"吉林" : [ 126.57, 43.87 ],
			"上海" : [ 121.48, 31.22 ],
			"成都" : [ 104.06, 30.67 ],
			"哈尔滨" : [ 126.63, 45.75 ],
			"沈阳" : [ 123.38, 41.8 ],
			"武汉" : [ 114.31, 30.52 ],
			"石家庄" : [ 114.48, 38.03 ],
			"天津" : [ 117.2, 39.13 ],
			"太原" : [ 112.53, 37.87 ],
			"西安" : [ 108.95, 34.27 ],
			"南宁" : [ 108.33, 22.84 ],
			"南昌" : [ 115.89, 28.68 ],
			"济南" : [ 117, 36.65 ],
	};

	var data = [ {
		name : "北京",
		value : 38
	}, {
		name : "南京",
		value : 147
	}, {
		name : "吉林",
		value : 74
	}, {
		name : "上海",
		value : 33
	}, {
		name : "成都",
		value : 192
	}, {
		name : "哈尔滨",
		value : 35
	}, {
		name : "沈阳",
		value : 0
	}, {
		name : "武汉",
		value : 36
	}, {
		name : "石家庄",
		value : 32
	}, {
		name : "天津",
		value : 7
	}, {
		name : "太原",
		value : 1
	}, {
		name : "西安",
		value : 63
	}, {
		name : "南宁",
		value : 29
	}, {
		name : "南昌",
		value : 48
	}, {
		name : "济南",
		value : 61
	} ];
	var nameBest=[];
	for (var i = 0, l = data.length; i < l; i++) {
		data[i] = {
				name: data[i].name,
				value: - data[i].value
		};
		nameBest.push(data[i].name);
	}
	
	//alert(nameBest)
	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name : data[i].name,
					value : geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};

	var convertedData = [ convertData(data),
	                      convertData(data.sort(function(a, b) {
	                    	  return b.value - a.value;
	                      }).slice(0, 6)) ];
	data.sort(function(a, b) {
		return a.value-b.value ;
	})

	var selectedItems = [];
	var categoryData = [];
	var barData = [];
	var sum = 0;
	var count = data.length;
	for (var i = 0; i < data.length; i++) {
		categoryData.push(data[i].name);
		barData.push(data[i].value);
		sum +=data[i].value;
	}

	console.log(categoryData);
	console.log(sum + "   " + count)
	option = {
		animation : true,
		animationDuration : 1000,
		animationEasing : 'cubicInOut',
		animationDurationUpdate : 1000,
		animationEasingUpdate : 'cubicInOut',
		title : [ {
			text : '创新城市概览',
			left : 'center',
			textStyle : {
				color : '#4CFFFF'
			}
		}, {
			id : 'statistic',
			right : 120,
			top : 40,
			width : 100,
			textStyle : {
				color : '#fff',
				fontSize : 16
			}
		} ],
		toolbox : {
			iconStyle : {
				normal : {
					borderColor : '#fff'
				},
				emphasis : {
					borderColor : '#b1e4ff'
				}
			},
			feature : {		
			}
		},		
		geo : {
			map : 'china',
			top : '0.5%',
			left : '20%',
			right : '18%',
			center : [ 117.98561551896913, 31.205000490896193 ],
			zoom : 0.7,
			label : {
				emphasis : {
					show : false
				}
			},
			itemStyle : {
				normal : {
					areaColor : 'rgba(20,52,88,0.1)',
					borderColor : '#0A83EC'
				},
				emphasis : {
					areaColor : '#2a333d'
				}
			}
		},
		tooltip : {
			trigger : 'item',
			formatter: function (geoCoordMap) {
				var v=-geoCoordMap.value;
				return geoCoordMap.name + "<br> " +v;
			}
		},
		grid : {
			right : 80,
			top : 100,
			bottom : 40,
			width : '15%'
		},
		xAxis : {
			type : 'value',
			scale : true,
			show:false,
			position : 'top',
			boundaryGap : false,
			splitLine : {
				show : false
			},
			axisLine : {
				show : true
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				margin : 2,
				textStyle : {
					color : '#aaa'
				}
			},
		},
		yAxis : {
			position:'right',
			type : 'category',
			nameGap : 16,
			axisLine : {
				show : false,
				lineStyle : {
					color : '#ddd'
				}
			},
			axisTick : {
				show : false,
				lineStyle : {
					color : '#ddd'
				}
			},
			axisLabel : {
				interval : 0,
				textStyle : {
					color : '#ddd'
				}
			},
			data : categoryData
		},
		series : [ {
			type : 'scatter',
			coordinateSystem : 'geo',
			data : convertedData[0],
			symbolSize : function(val) {
				return Math.max(val[2] / 10, 8);
			},
			label : {
				normal : {
					formatter : '{b}',
					position : 'right',
					show : false
				},
				emphasis : {
					show : true
				}
			},
			itemStyle : {
				normal : {
					position : 'right',
				}
			}
		}, {
			type : 'effectScatter',
			coordinateSystem : 'geo',
			data : convertedData[0],
			symbolSize : function(val) {
				return Math.max(val[2] / 10, 8);
			},
			showEffectOn : 'emphasis',
			rippleEffect : {
				brushType : 'stroke'
			},
			hoverAnimation : true,
			label : {
				normal : {
					formatter : '{b}',
					position : 'right',
					show : true
				}
			},
			itemStyle : {
				normal : {
					color : '#f4e925',
					shadowBlur : 10,
					shadowColor : '#333'
				}
			},
			zlevel : 1
		}, {
			id : 'bar',
			zlevel : 2,
			type : 'bar',
			symbol : 'none',
			itemStyle : {
				normal : {
					color : '#ddb926',
				},	 
			},
			data : data
		},		
		]
	};

	function renderBrushed(params) {
		var mainSeries = params.batch[0].selected[0];
		var selectedItems = [];
		var categoryData = [];
		var barData = [];
		var maxBar = 30;
		var sum = 0;
		var count = 0;

		for (var i = 0; i < mainSeries.dataIndex.length; i++) {
			var rawIndex = mainSeries.dataIndex[i];
			var dataItem = convertedData[0][rawIndex];
			var pmValue = dataItem.value[2];
			sum += pmValue;
			count++;
			selectedItems.push(dataItem);
		}
		selectedItems.sort(function(a, b) {
			return a.value - b.value;
		});

		for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
			categoryData.push(selectedItems[i].name);
			barData.push(selectedItems[i].value[2]);
		}

		this.setOption({
			yAxis : {
				data : categoryData
			},
			xAxis : {
				axisLabel : {
					show : !!count
				}
			},

			series :[ {
				id : 'bar',
				data : barData
			},

			]
		});
	}
	chart_data.setOption(option);
}
chart_data();






function chart_data1() {
	var chart_data1 = echarts.init(document.getElementById('chart_data1'));
	var geoCoordMap = {
			"北京" : [ 116.46, 39.92 ],
			"南京" : [ 118.78, 32.04 ],
			"吉林" : [ 126.57, 43.87 ],
			"上海" : [ 121.48, 31.22 ],
			"成都" : [ 104.06, 30.67 ],
			"哈尔滨" : [ 126.63, 45.75 ],
			"沈阳" : [ 123.38, 41.8 ],
			"武汉" : [ 114.31, 30.52 ],
			"石家庄" : [ 114.48, 38.03 ],
			"天津" : [ 117.2, 39.13 ],
			"太原" : [ 112.53, 37.87 ],
			"西安" : [ 108.95, 34.27 ],
			"南宁" : [ 108.33, 22.84 ],
			"南昌" : [ 115.89, 28.68 ],
			"济南" : [ 117, 36.65 ],
	};

	var data = [ {
		name : "北京",
		value : 38
	}, {
		name : "南京",
		value : 147
	}, {
		name : "吉林",
		value : 74
	}, {
		name : "上海",
		value : 33
	}, {
		name : "成都",
		value : 192
	}, {
		name : "哈尔滨",
		value : 35
	}, {
		name : "沈阳",
		value : 0
	}, {
		name : "武汉",
		value : 36
	}, {
		name : "石家庄",
		value : 32
	}, {
		name : "天津",
		value : 7
	}, {
		name : "太原",
		value : 1
	}, {
		name : "西安",
		value : 63
	}, {
		name : "南宁",
		value : 29
	}, {
		name : "南昌",
		value : 48
	}, {
		name : "济南",
		value : 61
	} ];
	var convertData = function(data) {

		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name : data[i].name,
					value : geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};

	var convertedData = [ convertData(data),
	                      convertData(data.sort(function(a, b) {
	                    	  return b.value - a.value;
	                      }).slice(0, 6)) ];
	data.sort(function(a, b) {
		return a.value-b.value ;
	})

	var selectedItems = [];
	var categoryData = [];
	var barData = [];
	var sum = 0;
	var count = data.length;
	for (var i = 0; i < data.length; i++) {
		categoryData.push(data[i].name);
		barData.push(data[i].value);
		sum += data[i].value;
	}
	console.log(categoryData);
	console.log(sum + "   " + count)
	option = {
		animation : true,
		animationDuration : 1000,
		animationEasing : 'cubicInOut',
		animationDurationUpdate : 1000,
		animationEasingUpdate : 'cubicInOut',
		title : [ {
			id : 'statistic',
			right : 120,
			top : 40,
			width : 100,
			textStyle : {
				color : '#fff',
				fontSize : 16
			}
		} ],
		toolbox : {
			iconStyle : {
				normal : {
					borderColor : '#fff'
				},
				emphasis : {
					borderColor : '#b1e4ff'
				}
			},
			feature : {		
			}
		},			
		tooltip : {
			trigger : 'item',
			formatter: function (geoCoordMap, ticket, callback) {
				return geoCoordMap.name + "<br> " + geoCoordMap.value;
			}
		},

		grid : {

			bottom : 40,
			left:60,
			width : '100%'
		},
		xAxis : {
			type : 'value',
			show:false,
			scale : true,
			position : 'top',
			boundaryGap : false,
			splitLine : {
				show : false
			},
			axisLine : {
				show : true
			},
			axisTick : {
				show : false
			},
			axisLabel : {
				margin : 2,
				textStyle : {
					color : '#aaa'
				}
			},
		},
		yAxis : {
			type : 'category',
			nameGap : 16,
			axisLine : {
				show : false,
				lineStyle : {
					color : '#ddd'
				}
			},
			axisTick : {
				show : false,
				lineStyle : {
					color : '#ddd'
				}
			},
			axisLabel : {
				interval : 0,
				textStyle : {
					color : '#ddd'
				}
			},
			data : categoryData
		},
		series : [  {
			type : 'effectScatter',
			coordinateSystem : 'geo',
			data : convertedData[0],
			symbolSize : function(val) {
				return Math.max(val[2] / 10, 8);
			},
			showEffectOn : 'emphasis',
			rippleEffect : {
				brushType : 'stroke'
			},
			hoverAnimation : true,
			label : {
				normal : {
					formatter : '{b}',
					position : 'right',
					show : true
				}
			},
			itemStyle : {
				normal : {
					color : '#f4e925',
					shadowBlur : 10,
					shadowColor : '#333'
				}
			},
			zlevel : 1
		}, {
			id : 'bar2',
			zlevel : 2,
			type : 'bar',
			symbol : 'none',
			itemStyle : {
				normal : {
					color : '#ddb926'
				}
			},
			data : data
		},		
		]
	};


	chart_data1.setOption(option);
}
chart_data1();


