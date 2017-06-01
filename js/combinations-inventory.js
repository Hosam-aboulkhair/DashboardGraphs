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

            var line_bar = ec.init(document.getElementById('stockvalue_line_bar'), limitless);
            var line_bar1 = ec.init(document.getElementById('stockvalue_line_bar1'), limitless);
            var line_bar2 = ec.init(document.getElementById('stockvalue_line_bar2'), limitless);
            var line_bar3 = ec.init(document.getElementById('stockvalue_line_bar3'), limitless);
            var line_bar4 = ec.init(document.getElementById('stockvalue_line_bar4'), limitless);



            // Charts options
            // ------------------------------


            //
            // Line and bar combination
            //

            line_bar_options = {

                //color
                color: {

                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,


                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Adjustment +ve','Adjustment -ve','Return +ve','Return -ve'],
                    axisLabel:{
                        textStyle:{
                            fontSize: '8',
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Water',
                        axisLabel: {
                            formatter: '{value} MM'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} TB'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Previous Period',
                        type: 'bar',
                        itemStyle: {
                            normal:{color:'#7100a1'},
                            emphasis:{color:'#9700d8'},
                        },
                        data: [2.0, 4.9, 7.0, 23.2]
                    },
                    {
                        name: 'Selected Period',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal:{color:'#f37400'},
                            emphasis:{color:'#ff7a00'},
                        },
                        data: [2.0, 2.2, 3.3, 14.5]
                    }
                ]
            };

            line_bar_options1 = {

                //color
                color: {

                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,


                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Adjustment +ve','Adjustment -ve','Return +ve','Return -ve'],
                    axisLabel:{
                        textStyle:{
                            fontSize: '8',
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Water',
                        axisLabel: {
                            formatter: '{value} MM'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} TB'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Previous Period',
                        type: 'bar',
                        itemStyle: {
                            normal:{color:'#7100a1'},
                            emphasis:{color:'#9700d8'},
                        },
                        data: [2.0, 4.9, 7.0, 23.2]
                    },
                    {
                        name: 'Selected Period',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal:{color:'#f37400'},
                            emphasis:{color:'#ff7a00'},
                        },
                        data: [2.0, 2.2, 3.3, 14.5]
                    }
                ]
            };

            line_bar_options2 = {

                //color
                color: {

                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,


                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Adjustment +ve','Adjustment -ve','Return +ve','Return -ve'],
                    axisLabel:{
                        textStyle:{
                            fontSize: '8',
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Water',
                        axisLabel: {
                            formatter: '{value} MM'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} TB'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Previous Period',
                        type: 'bar',
                        itemStyle: {
                            normal:{color:'#7100a1'},
                            emphasis:{color:'#9700d8'},
                        },
                        data: [2.0, 4.9, 7.0, 23.2]
                    },
                    {
                        name: 'Selected Period',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal:{color:'#f37400'},
                            emphasis:{color:'#ff7a00'},
                        },
                        data: [2.0, 2.2, 3.3, 14.5]
                    }
                ]
            };
                //
            // Line and bar combination
            //

            line_bar_options3 = {

                //color
                color: {

                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,


                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Adjustment +ve','Adjustment -ve','Return +ve','Return -ve'],
                    axisLabel:{
                        textStyle:{
                            fontSize: '8',
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Water',
                        axisLabel: {
                            formatter: '{value} MM'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} TB'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Previous Period',
                        type: 'bar',
                        itemStyle: {
                            normal:{color:'#7100a1'},
                            emphasis:{color:'#9700d8'},
                        },
                        data: [2.0, 4.9, 7.0, 23.2]
                    },
                    {
                        name: 'Selected Period',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal:{color:'#f37400'},
                            emphasis:{color:'#ff7a00'},
                        },
                        data: [2.0, 2.2, 3.3, 14.5]
                    }
                ]
            };
                //
            // Line and bar combination
            //

            line_bar_options4 = {

                //color
                color: {

                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Enable drag recalculate
                calculable: true,


                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['Adjustment +ve','Adjustment -ve','Return +ve','Return -ve'],
                    axisLabel:{
                        textStyle:{
                            fontSize: '8',
                        }
                    }
                }],

                // Vertical axis
                yAxis: [
                    {
                        type: 'value',
                        name: 'Water',
                        axisLabel: {
                            formatter: '{value} MM'
                        }
                    },
                    {
                        type: 'value',
                        name: 'Temp',
                        axisLabel: {
                            formatter: '{value} TB'
                        }
                    }
                ],

                // Add series
                series: [
                    {
                        name: 'Previous Period',
                        type: 'bar',
                        itemStyle: {
                            normal:{color:'#7100a1'},
                            emphasis:{color:'#9700d8'},
                        },
                        data: [2.0, 4.9, 7.0, 23.2]
                    },
                    {
                        name: 'Selected Period',
                        type: 'line',
                        yAxisIndex: 1,
                        itemStyle: {
                            normal:{color:'#f37400'},
                            emphasis:{color:'#ff7a00'},
                        },
                        data: [2.0, 2.2, 3.3, 14.5]
                    }
                ]
            };


            // Apply options
            // ------------------------------

            line_bar.setOption(line_bar_options);
            line_bar1.setOption(line_bar_options1);
            line_bar2.setOption(line_bar_options2);
            line_bar3.setOption(line_bar_options3);
            line_bar4.setOption(line_bar_options4);




            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function (){
                    line_bar.resize();
                    line_bar1.resize();
                    line_bar2.resize();
                    line_bar3.resize();
                    line_bar4.resize();
                }, 200);
            }
        }
    );
});
