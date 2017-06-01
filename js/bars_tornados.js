/* ------------------------------------------------------------------------------
 *
 *  # Echarts - bars and tornados
 *
 *  Bars and tornados chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function () {

    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'js/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/theme/limitless',
            'echarts/chart/bar',
            'echarts/chart/line'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var basic_bars = ec.init(document.getElementById('basic_bars'), limitless);
            var stacked_bars = ec.init(document.getElementById('stacked_bars'), limitless);
 		    var basic_bars2 = ec.init(document.getElementById('basic_bars2'), limitless);
			var basic_bars3 = ec.init(document.getElementById('basic_bars3'), limitless);
			var basic_bars4 = ec.init(document.getElementById('basic_bars4'), limitless);
			var basic_bars5 = ec.init(document.getElementById('basic_bars5'), limitless);
            // Charts setup
            // ------------------------------

            //
            // Basic bars options
            //

            basic_bars_options = {

                // Setup grid
                grid: {
               
			    x: '10%',
            x2:'10%',
         y:'20%',
		 y2:'5%',
     width: '80%',
	height: '70%',
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
							
                    },
					textStyle: {
							fontSize:8
							},
                },
				
		
							
                // Add legend
                legend: {
                    data:['Internet Explorer','Opera','Safari','Firefox','UC Browser'],
					show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value'
					
                }],

                // Vertical axis
                yAxis: [{
					//show: false,
					
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
					
					type: 'category',
					
					
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday', 'saturday']
                }],

                // Add series
                series: [
                    {		
				
							barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
                        name: 'Internet Explorer',
                        type: 'bar',
					
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#59007f',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#6b0099',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[320, 302, 301, 334, 390, 350]
                    },

                  
                ]
            };


            //
            // Stacked bars options
            //

            stacked_bars_options = {

                // Setup grid
                grid: {
         //         x: 75,
         //           x2: 25,
         //           y: 35,
         //           y2: 25
		   //      width: '100%',
		               
		    x: '10%',
            x2:'10%',
         y:'20%',
		 y2:'5%',
     width: '80%',
	height: '70%',
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
						
                    },
					textStyle: {
							fontSize:8
							},
                },

                // Add legend
                legend: {
					textStyle: {
						
						fontSize: 8,
						},
                    data:['Internet Explorer','Opera','Safari','Firefox', 'UC Browser'],
					//show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value'
                }],

                // Vertical axis
                yAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
					show: true,
					type: 'category',
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday', 'saturday']
                }],

                // Add series
                series: [
				
                    {
                        name: 'Internet Explorer',
                        type: 'bar',
					barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
					
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#0036d9',
                                label: {
                                    show: true,
                                    position: 'insideLeft'


                                }
                            },
                            emphasis: {
                                color: '#0d4aff',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[320, 302, 301, 334, 390, 350]
                    },
                    {
			
                        name: 'Opera',
                        type: 'bar',
				barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
						
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#00b8d2',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#16dffb',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[120, 132, 101, 134, 90, 150]
                    },
                    {
						
                        name: 'Safari',
                        type: 'bar',
				barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
						
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#ff7a00',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#ff8412',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[220, 182, 191, 234, 290, 250]
                    },
                    {
							
                        name: 'Firefox',
                        type: 'bar',
				barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
						
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#bf0e00',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#d90e00',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[150, 212, 201, 154, 190,150]
                    },
{
							
                        name: 'UC Browser',
                        type: 'bar',
				barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
						
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#7100a1',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#9700d8',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[150, 212, 201, 154, 190,150, 200]
                    }
             
                ]
            };



            //
            // Basic bars options
            //

            basic_bars_options2 = {

                // Setup grid
                grid: {
                  //  x:  '50%',
                    
                  //  y:  '50%',
                     //   width: '100%',
		               
		    x: '10%',
            x2:'10%',
         y:'20%',
		 y2:'5%',
     width: '80%',
	height: '70%',
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
						
                    },
						textStyle: {
							fontSize:8
							},
                },

                // Add legend
                legend: {
                    data:['Internet Explorer','Opera','Safari','Firefox','UC Browser'],
					show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value'
                }],

                // Vertical axis
                yAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
					show: true,
					type: 'category',
                    data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday','saturday']
                }],

                // Add series
                series: [
                    {
						barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
                        name: 'Internet Explorer',
                        type: 'bar',
					
					
                        stack: 'Total',
                        itemStyle: {
                            normal: {
                                color: '#00ba20',
                                label: {
                                    show: true,
                                    position: 'insideLeft'
                                }
                            },
                            emphasis: {
                                color: '#00d423',
                                label: {
                                    show: true
                                }
                            }
                        },
                        data:[320, 302, 301, 334, 390,350]
                    },

                  
                ]
            };

           //
            // Basic bars options
            //

            basic_bars_options3 = {

                // Setup grid
                grid: {
					               
			    x: '10%',
            x2:'10%',
         y:'5%',
		 y2:'10%',
     width: '80%',
	height: '85%',
                 //   x: 100,
                  
                 //   y: 100,
                     //   width: '100%',
	
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
					textStyle: {
							fontSize:8
							},
                },

                // Add legend
                legend: {
                    data: ['Year 2013', 'Year 2014'],
					show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],

                // Vertical axis
                yAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'category',
                    data: ['Germany','France','Spain','Netherlands','Belgium','Germany','France','Spain','Netherlands','Belgium']
                }],

                // Add series
                series: [
                    {
							barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
                        name: 'Year 2013',
                        type: 'bar',
                        itemStyle: {
							   
                            normal: {
                                color: '#ff7a00',
								  label: {
                                    show: true,
                                    position: 'insideLeft'
                                },
                            },
							emphasis: {
								label:
								{
									show:true,
									}
								}
                        },
                        data: [38203, 73489, 129034, 204970, 331744, 440356, 540345 , 666555, 778086, 996325  ]
                    }
                ]
            };




           //
            // Basic bars options
            //

            basic_bars_options4 = {
                // Setup grid
                grid: {
					               
			    x: '10%',
            x2:'10%',
         y:'5%',
		 y2:'10%',
     width: '80%',
	height: '85%',
               //     x: 100,
                  
               //     y: 100,
                
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
					textStyle: {
							fontSize:8
							},
                },

                // Add legend
                legend: {
                    data: ['Year 2013', 'Year 2014'],
					show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],

                // Vertical axis
                yAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'category',
                    data: ['Germany','France','Spain','Netherlands','Belgium','Germany','France','Spain','Netherlands','Belgium']
                }],

                // Add series
                series: [
                    {
							barGap: 2,
							barWidth:20,
					barCategoryGap: 2,
                        name: 'Year 2013',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#bf0e00',
								     label: {
                                    show: true,
                                    position: 'insideLeft'
                                },
                            },
									emphasis: {
								label:
								{
									show:true,
									}
								}
								
                        },
                        data: [38203, 73489, 129034, 204970, 331744, 440356, 540345 , 666555, 778086, 996325]
                    }
                ]
            };




           //
            // Basic bars options
            //

            basic_bars_options5 = {
                // Setup grid
                grid: {
					               
			    x: '10%',
            x2:'10%',
         y:'5%',
		 y2:'10%',
     width: '80%',
	height: '85%',
               //     x: 100,
                  
               //     y: 100,
                
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
					textStyle: {
							fontSize:8
							},
                },

                // Add legend
                legend: {
                    data: ['Year 2013', 'Year 2014'],
					show: false,
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'value',
                    boundaryGap: [0, 0.01]
                }],

                // Vertical axis
                yAxis: [{
					
					axisLabel: {
						
						textStyle: {
							fontSize: 8 ,
							
							},
						},
                    type: 'category',
                    data: ['Germany','France','Spain','Netherlands','Belgium','Germany','France','Spain','Netherlands','Belgium']
                }],

                // Add series
                series: [
                    {
				barGap: 1,
							barWidth:18,
					barCategoryGap: 1,
                        name: 'Year 2013',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                color: '#008295',
								     label: {
                                    show: true,
                                    position: 'insideLeft'
                                },
                            },
									emphasis: {
								label:
								{
									show:true,
									}
								}
                        },
                        data: [38203, 73489, 129034, 204970, 331744, 440356, 540345 , 666555, 778086, 996325]
                    }
                ]
            };



            // Apply options
            // ------------------------------

            basic_bars.setOption(basic_bars_options);
            stacked_bars.setOption(stacked_bars_options);
            basic_bars2.setOption(basic_bars_options2);
 			basic_bars3.setOption(basic_bars_options3);
			basic_bars4.setOption(basic_bars_options4);
			basic_bars5.setOption(basic_bars_options5);
			
			
			
			
            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    basic_bars.resize();
                    stacked_bars.resize();

                }, 200);
            }
        }
    );
});
