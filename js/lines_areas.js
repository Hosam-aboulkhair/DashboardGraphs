/* ------------------------------------------------------------------------------
 *
 *  # Echarts - lines and areas
 *
 *  Lines and areas chart configurations
 *
 *  Version: 1.0
 *  Latest update: August 1, 2015
 *
 * ---------------------------------------------------------------------------- */

$(function() {


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

        
            var invv_stacked_lines = ec.init(document.getElementById('inventoryv_stacked_lines'), limitless);
    



            // Charts setup
            // ------------------------------

          



            

 //
            // Inventory Stacked lines options
            //

            invv_stacked_lines_options = {

                // Setup grid
                grid: {
                    x: '5%',
                    x2:'5%',
                    y:'5%',
                    y2:'5%',
                    width: '90%',
                    height: '85%',
                    },

                // Add tooltip
                tooltip: {
                    trigger: 'axis'
                },

                // Add legend
                legend: {
                    show: false,
                    data: ['Internet Explorer', 'Opera', 'Safari', 'Firefox', 'Chrome']
                },

                // Enable drag recalculate
                calculable: true,

                // Hirozontal axis
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: [
                        'FD', 'FM', 'FS', 'FP', 'R3', 'FT', 'R1','FD', 'FM', 'FS', 'FP', 'R3', 'FT', 'R1'
                    ]
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value'
                }],

                // Add series
                series: [
                    {
                        name: 'Internet Explorer',
                        type: 'line',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210,90, 180, 70, 90, 200, 230, 80]
                    },
                ]
            };



            




        



            // Apply options
            // ------------------------------

         
            invv_stacked_lines.setOption(invv_stacked_lines_options);




            // Resize charts
            // ------------------------------

            window.onresize = function () {
                setTimeout(function () {
                 
                    invv_stacked_lines.resize();
           
                }, 200);
            }
        }
    );
});
