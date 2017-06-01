/* ------------------------------------------------------------------------------
 *
 *  # Echarts - pies and donuts
 *
 *  Pies and donuts chart configurations
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
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------

            var basic_pie = ec.init(document.getElementById('basic_pie'), limitless);
			var basic_pie2 = ec.init(document.getElementById('basic_pie2'), limitless);



            // Charts setup
            // ------------------------------                    

            //
            // Basic pie options
            //

            basic_pie_options = {

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    x: 'center',
					show: false,
					
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },







                // Add legend
                legend: {
                    orient: 'horizontal',
                    y: 'top',
                    data: ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome']
                },

                // Display toolbox
                toolbox: {
                    show: false,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
					
				// Add itemStyle
				itemStyle: {
					normal: {
						label: {
							show: false,
							},
							labelLine: {
								
								show: false,
								},
						},
					
					},

                    name: 'Browsers',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 335, name: 'IE'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            };


    


          //
            // Basic pie options
            //

            basic_pie_options2 = {

                // Add title
                title: {
					show: false,
                    text: 'Browser popularity',
                    subtext: 'Open source information',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

              // Add legend
                legend: {
                    orient: 'horizontal',
                    y: 'top',
                    data: ['IE', 'Opera', 'Safari', 'Firefox', 'Chrome']
                },

                // Display toolbox
                toolbox: {
                    show: false,
                    orient: 'vertical',
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'View data',
                            lang: ['View chart data', 'Close', 'Update']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: 'Switch to pies',
                                funnel: 'Switch to funnel',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
					// Add itemStyle
				itemStyle: {
					normal: {
						label: {
							show: false,
							},
							labelLine: {
								
								show: false,
								},
						},
					
					},
                    name: 'Browsers',
                    type: 'pie',
                    radius: '70%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 335, name: 'IE'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            };

 

       







            // Apply options
            // ------------------------------

            basic_pie.setOption(basic_pie_options);
			basic_pie2.setOption(basic_pie_options2);


            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    basic_pie.resize();
  					basic_pie2.resize();
                }, 200);
            }
        }
    );
});
