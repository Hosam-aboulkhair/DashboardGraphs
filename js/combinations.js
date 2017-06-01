/* ------------------------------------------------------------------------------
 *
 *  # Echarts - chart combinations
 *
 *  Chart combination configurations
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

        // Add necessary charts
        [
          'echarts',
          'echarts/theme/limitless',
          'echarts/chart/line',
          'echarts/chart/bar',
          'echarts/chart/pie',


          'echarts/chart/scatter',
          'echarts/chart/k',
          'echarts/chart/radar',
          'echarts/chart/gauge'
        ],


        // Charts setup
        function (ec, limitless) {


            // Initialize charts
            // ------------------------------


            var connect_pie = ec.init(document.getElementById('connect_pie'), limitless);
            var connect_column = ec.init(document.getElementById('connect_column'), limitless);
		


            // Charts options
            // ------------------------------

            //
            // Column and pie connection
            //

            // Pie options
            connect_pie_options = {

                // Add title
                title: {
                    text: 'Browser popularity',
                    subtext: 'Open source data',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['Internet Explorer','Opera','Safari','Firefox','Chrome']
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'Browser',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 335, name: 'Internet Explorer'},
                        {value: 310, name: 'Opera'},
                        {value: 234, name: 'Safari'},
                        {value: 135, name: 'Firefox'},
                        {value: 1548, name: 'Chrome'}
                    ]
                }]
            };

            // Column options
            connect_column_options = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['Internet Explorer','Opera','Safari','Firefox','Chrome']
                },

                // Add toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right', 
                    y: 35,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                                stack: 'Switch to stack',
                                tiled: 'Switch to tiled'
                            },
                            type: ['line', 'bar', 'stack', 'tiled']
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

                // Horizontal axis
                xAxis: [{
                    type: 'category',
					axisTick: {
						show: 'true',
						length: 8,
						},
                    data: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
					axisLabel: {
						show: 'true',
						width: 'auto',
						rotate: 0,
					
						textStyle: { 
								//	fontSize : 10,
									//align: 'left',
						}
						
						}
					 
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
				
                    splitArea: {show: true},
					axisTick: {
						show: 'true',
						length: 5,
						},
				axisLabel: {
						show: 'true',
						width: 400,
						rotate: 0,
						textStyle: { 
									fontSize : 10,
									//baseline: 'middle' ,
									//align: 'left',
						}
						
						}
					
                }],

                // Add series
                series: [
                    {
                        name: 'Internet Explorer',
                        type: 'bar',
                        stack: 'Total',
                        data: [3000, 33200, 3010, 3340, 3900, 3300, 3200]
                    },
                    {
                        name: 'Opera',
                        type: 'bar',
                        stack: 'Total',
                        data: [12000, 13200, 10100, 13400, 9000, 23000, 21000]
                    },
                    {
                        name: 'Safari',
                        type: 'bar',
                        stack: 'Total',
                        data: [22000, 18200, 19100, 23400, 29000, 33000, 31000]
                    },
                    {
                        name: 'Firefox',
                        type: 'bar',
                        stack: 'Total',
                        data: [15000, 23200, 20100, 15400, 19000, 3300, 41000]
                    },
                    {
                        name: 'Chrome',
                        type: 'bar',
                        stack: 'Total',
                        data: [8200, 9320, 90100, 9340, 1290, 1330, 1320]
                    }
                ]
            };

            // Connect charts
            connect_pie.connect(connect_column);
            connect_column.connect(connect_pie);






   



            // Apply options
            // ------------------------------

      
           
     
            
            connect_pie.setOption(connect_pie_options);
            connect_column.setOption(connect_column_options);
		


     window.onresize = function () {
                setTimeout(function (){
                 
                    connect_pie.resize();
                    connect_column.resize();
                }, 200);
            }




        }
    );
});
