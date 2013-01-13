    $(document).ready(function () {
        var s1 = [[01, 30], [02, 28], [03, 26], [04, 35], [05, 40], 
        [06, 35], [07, 32], [08, 28], [09, 30], [10, 29], [11, 28], [12, 30]];
		
        var s2 = [[01, 30], [02, 26], [03, 24], [04, 22], [05, 20], 
        [06, 16], [07, 15], [08, 15], [09, 12], [10, 10], [11, 9], [12, 8]];

        plot1 = $.jqplot("chart1", [s2, s1], {
            // Turns on animatino for all series in this plot.
            animate: true,
            // Will animate plot on calls to plot1.replot({resetAxes:true})
            animateReplot: true,
            cursor: {
                show: true,
                zoom: true,
                looseZoom: true,
                showTooltip: false
            },
            series:[
                {
                    pointLabels: {
                        show: true
                    },
                    renderer: $.jqplot.BarRenderer,
                    showHighlight: false,
                    yaxis: 'y2axis',
                    rendererOptions: {
                        // Speed up the animation a little bit.
                        // This is a number of milliseconds.  
                        // Default for bar series is 3000.  
                        animation: {
                            speed: 2500
                        },
                        barWidth: 15,
                        barPadding: -15,
                        barMargin: 0,
                        highlightMouseOver: false
                    }
                }, 
                {
                    rendererOptions: {
                        // speed up the animation a little bit.
                        // This is a number of milliseconds.
                        // Default for a line series is 2500.
                        animation: {
                            speed: 2000
                        }
                    }
                }
            ],
            axesDefaults: {
                pad: 0
            },
            axes: {
                // These options will set up the x axis like a category axis.
                xaxis: {
                    tickInterval: 1,
                    drawMajorGridlines: false,
                    drawMinorGridlines: true,
                    drawMajorTickMarks: false,
                    rendererOptions: {
                    tickInset: 0.5,
                    minorTicks: 1
                }
                },
                yaxis: {
                    tickOptions: {
                        formatString: "%'d%"
                    },
                    rendererOptions: {
                        forceTickAt0: true
                    }
                },
                y2axis: {
                    tickOptions: {
                        formatString: "%'d%"
                    },
                    rendererOptions: {
                        // align the ticks on the y2 axis with the y axis.
                        alignTicks: true,
                        forceTickAt0: true
                    }
                }
            },
            highlighter: {
                show: true, 
                showLabel: true, 
                tooltipAxes: 'y',
                sizeAdjust: 7.5 , tooltipLocation : 'ne'
            }
        });
      
	   var a1 = [[01, 250], [02, 245], [03, 240], [04, 245], [05, 238], 
        [06, 230], [07, 233], [08, 230], [09, 225], [10, 222], [11, 220], [12, 210]];
		
        var a2 = [[01, 250], [02, 245], [03, 235], [04, 230], [05, 225], 
        [06, 220], [07, 210], [08, 200], [09, 190], [10, 180], [11, 175], [12, 170]];
		
	  plot2 = $.jqplot("chart2", [a2, a1], {
            // Turns on animatino for all series in this plot.
            animate: true,
            // Will animate plot on calls to plot1.replot({resetAxes:true})
            animateReplot: true,
            cursor: {
                show: true,
                zoom: true,
                looseZoom: true,
                showTooltip: false
            },
            series:[
                {
                    pointLabels: {
                        show: true
                    },
                    renderer: $.jqplot.BarRenderer,
                    showHighlight: false,
                    yaxis: 'y2axis',
                    rendererOptions: {
                        // Speed up the animation a little bit.
                        // This is a number of milliseconds.  
                        // Default for bar series is 3000.  
                        animation: {
                            speed: 2500
                        },
                        barWidth: 15,
                        barPadding: -15,
                        barMargin: 0,
                        highlightMouseOver: false
                    }
                }, 
                {
                    rendererOptions: {
                        // speed up the animation a little bit.
                        // This is a number of milliseconds.
                        // Default for a line series is 2500.
                        animation: {
                            speed: 2000
                        }
                    }
                }
            ],
            axesDefaults: {
                pad: 0
            },
            axes: {
                // These options will set up the x axis like a category axis.
                xaxis: {
                    tickInterval: 1,
                    drawMajorGridlines: false,
                    drawMinorGridlines: true,
                    drawMajorTickMarks: false,
                    rendererOptions: {
                    tickInset: 0.5,
                    minorTicks: 1
                }
                },
                yaxis: {
                    tickOptions: {
                        formatString: "%'dlbs"
                    },
                    rendererOptions: {
                        forceTickAt0: true
                    }
                },
                y2axis: {
                    tickOptions: {
                        formatString: "%'dlbs"
                    },
                    rendererOptions: {
                        // align the ticks on the y2 axis with the y axis.
                        alignTicks: true,
                        forceTickAt0: true
                    }
                }
            },
            highlighter: {
                show: true, 
                showLabel: true, 
                tooltipAxes: 'y',
                sizeAdjust: 7.5 , tooltipLocation : 'ne'
            }
        });
    });