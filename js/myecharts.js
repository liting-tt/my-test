
var mychw = '';
var MyECharts = {
    //生成图形
    ChartOptionTemplates: {
        //折线图
        Line: function (dataX, dataB1, dataB2) {
            var option = {
                tooltip: {
                    trigger: 'axis',
                    padding: [5, 10, 5, 10],
                    textStyle: {
                        fontSize: 12,
                        color: '#FFF'
                    },
                },
                legend: {
                    show: false,
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    bottom: '10%',
                    top: '15%',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: dataX,
                    boundaryGap: false,
                    axisLabel: {
                        rotate:45,
                        show: true,
                        textStyle: {
                            color: '#7f7f7f',
                            fontSize: 12
                        },
                        //margin: 20
                    },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                        alignWithLabel: true,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#eef1f6'
                        }
                    },
                },
                yAxis:[
                 {
                    type: 'value',
            		name: '教师',
		            min: 0,
		            max: 100,
		            interval: 25,
                    splitLine: {
                        lineStyle: {
                            // type: 'dashed',
                            color: '#eef1f6'
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: '#7f7f7f',
                        textStyle: {
                            fontSize: 12,
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                    nameTextStyle: {
                        color: "#adb1c2",
                        fontSize: 12,
                    },
                    splitArea: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#eef1f6'
                        },
                        alignWithLabel: true,
                    },
                }, {
                    type: 'value',
            		name: '学生',
		            min: 0,
		            max: 100,
		            interval: 25,
                    splitLine: {
                        lineStyle: {
                            // type: 'dashed',
                            color: '#eef1f6'
                        }
                    },
                    axisLabel: {
                        formatter: '{value}%',
                        color: '#7f7f7f',
                        textStyle: {
                            fontSize: 12,
                        },
                    },
                    axisLine: {
                        show: false,
                    },
                    nameTextStyle: {
                        color: "#adb1c2",
                        fontSize: 12,
                    },
                    splitArea: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: '#eef1f6'
                        },
                        alignWithLabel: true,
                    },
                }],
                series: [
                    {
                        name: '教师',
                        type: 'line',
                        showSymbol: false,
                        data: dataB1,
                        itemStyle: {
                            normal: {
                                color:'#ff7390',
                                lineStyle: {
                                    color: "#3A84FF",
                                    width:0
                                },
                                areaStyle: { 
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: '#fdfeff'
                                    }, {
                                        offset: 1,
                                        color: '#ff7390'
                                    }]),
                                }
                            }
                        },
                        smooth: true,
                    },
                    {
                        name: '学生',
                        type: 'line',
                        showSymbol: false,
            			yAxisIndex: 1,
                        data: dataB2,
                        itemStyle: {
                            normal: {
                                color:'#56b5ff',
                                lineStyle: {
                                    color: "rgba(255,80,124,1)",
                                    width:0
                                },
                                areaStyle: { 
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: '#fcfeff'
                                    }, {
                                        offset: 1,
                                        color: '#56b5ff'
                                    }]),
                                }
                            }
                        },
                        smooth: true
                    },
                ]
            };
            return option;
        },
    },
    //参数：图形option、图形显示区域id

    RenderChart: function (option, containerId) {
        var container = eval("document.getElementById('" + containerId + "');");//获取图形显示区域
        var myChart = echarts.init(container);
        myChart.setOption(option);// 为echarts对象加载数据
        mychw = myChart;
    }
};

