$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */
  
 //-----------------------
  //- MONTHLY SALES CHART -
  //-----------------------

  // Get context with jQuery - using jQuery's .get() method.
  /* var salesChartCanvas = $("#salesChart").get(0).getContext("2d");
  // This will get the first returned node in the jQuery collection.
  var salesChart = new Chart(salesChartCanvas);

  var salesChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Electronics",
        fillColor: "rgb(210, 214, 222)",
        strokeColor: "rgb(210, 214, 222)",
        pointColor: "rgb(210, 214, 222)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgb(220,220,220)",
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: "Digital Goods",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: [28, 48, 40, 19, 86, 27, 90]
      }
    ]
  };

  var salesChartOptions = {
    //Boolean - If we should show the scale at all
    showScale: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - Whether the line is curved between points
    bezierCurve: true,
    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.3,
    //Boolean - Whether to show a dot for each point
    pointDot: false,
    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,
    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,
    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,
    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    //Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: true,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true
  };

  //Create the line chart
  salesChart.Line(salesChartData, salesChartOptions); */

  //---------------------------
  //- END MONTHLY SALES CHART -
  //---------------------------
  
  //-------------
  //- PIE CHART -
  //-------------
  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
  var pieChart = new Chart(pieChartCanvas);
  var PieData = [
    {
      value: 475,
      color: "#f56954",
      highlight: "#f56954",
      label: "Positive"
    },
    {
      value: 500,
      color: "#00a65a",
      highlight: "#00a65a",
      label: "Negative"
    },
    {
      value: 50,
      color: "#f39c12",
      highlight: "#f39c12",
      label: "Neutral"
    }
  ];
  var pieOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    //String - The colour of each segment stroke
    segmentStrokeColor: "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    //Number - Amount of animation steps
    animationSteps: 100,
    //String - Animation easing effect
    animationEasing: "easeOutBounce",
    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    //Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
    //String - A tooltip template
    tooltipTemplate: "<%=value %> <%=label%> users"
  };
  //Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData, pieOptions);
  //-----------------
  //- END PIE CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */

    /* SPARKLINE CHARTS
   * ----------------
   * Create a inline charts with spark line
   */

  //-----------------
  //- SPARKLINE BAR -
  //-----------------
  //$('.sparkbar').each(function () {
  //  var $this = $(this);
  //  $this.sparkline('html', {
  //    type: 'bar',
  //    height: $this.data('height') ? $this.data('height') : '30',
  //    barColor: $this.data('color')
  //  });
  //});

  //-----------------
  //- SPARKLINE PIE -
  //-----------------
  //$('.sparkpie').each(function () {
  //  var $this = $(this);
  //  $this.sparkline('html', {
  //    type: 'pie',
  //    height: $this.data('height') ? $this.data('height') : '90',
  //    sliceColors: $this.data('color')
  //  });
  //});

  //------------------
  //- SPARKLINE LINE -
  //------------------
  //$('.sparkline').each(function () {
  //  var $this = $(this);
  //  $this.sparkline('html', {
  //    type: 'line',
  //    height: $this.data('height') ? $this.data('height') : '90',
  //    width: '100%',
  //    lineColor: $this.data('linecolor'),
  //    fillColor: $this.data('fillcolor'),
  //    spotColor: $this.data('spotcolor')
  //  });
  //});
  //
  //------------------
  //- D3 - CLoud -
  //------------------
  
  /* var d3 = require("d3"),
  cloud = require("../");

  var fill = d3.scale.category20();
	
  var layout = cloud()
	  .size([500, 500])
	  .words([
	    "Hello", "world", "normally", "you", "want", "more", "words",
	    "than", "this"].map(function(d) {
	    return {text: d, size: 10 + Math.random() * 90, test: "haha"};
	  }))
	  .padding(5)
	  .rotate(function() { return ~~(Math.random() * 2) * 90; })
	  .font("Impact")
	  .fontSize(function(d) { return d.size; })
	  .on("end", draw);
	
	layout.start();
	
	function draw(words) {
	d3.select("#cloudChart").append("svg")
	    .attr("width", layout.size()[0])
	    .attr("height", layout.size()[1])
	  .append("g")
	    .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
	  .selectAll("text")
	    .data(words)
	  .enter().append("text")
	    .style("font-size", function(d) { return d.size + "px"; })
	    .style("font-family", "Impact")
	    .style("fill", function(d, i) { return fill(i); })
	    .attr("text-anchor", "middle")
	    .attr("transform", function(d) {
	      return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
	    })
	    .text(function(d) { return d.text; });
	}
	
	  // Get context with jQuery - using jQuery's .get() method.
	  var salesChartCanvas = $("#cloudChart").get(0).getContext("2d");
	  // This will get the first returned node in the jQuery collection.
	  var salesChart = new Chart(salesChartCanvas);
	
	  var salesChartData = {
	    labels: ["January", "February", "March", "April", "May", "June", "July"],
	    datasets: [
	      {
	        label: "Electronics",
	        fillColor: "rgb(210, 214, 222)",
	        strokeColor: "rgb(210, 214, 222)",
	        pointColor: "rgb(210, 214, 222)",
	        pointStrokeColor: "#c1c7d1",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgb(220,220,220)",
	        data: [65, 59, 80, 81, 56, 55, 40]
	      },
	      {
	        label: "Digital Goods",
	        fillColor: "rgba(60,141,188,0.9)",
	        strokeColor: "rgba(60,141,188,0.8)",
	        pointColor: "#3b8bba",
	        pointStrokeColor: "rgba(60,141,188,1)",
	        pointHighlightFill: "#fff",
	        pointHighlightStroke: "rgba(60,141,188,1)",
	        data: [28, 48, 40, 19, 86, 27, 90]
	      }
	    ]
	  };
	
	  var salesChartOptions = {
	    //Boolean - If we should show the scale at all
	    showScale: true,
	    //Boolean - Whether grid lines are shown across the chart
	    scaleShowGridLines: false,
	    //String - Colour of the grid lines
	    scaleGridLineColor: "rgba(0,0,0,.05)",
	    //Number - Width of the grid lines
	    scaleGridLineWidth: 1,
	    //Boolean - Whether to show horizontal lines (except X axis)
	    scaleShowHorizontalLines: true,
	    //Boolean - Whether to show vertical lines (except Y axis)
	    scaleShowVerticalLines: true,
	    //Boolean - Whether the line is curved between points
	    bezierCurve: true,
	    //Number - Tension of the bezier curve between points
	    bezierCurveTension: 0.3,
	    //Boolean - Whether to show a dot for each point
	    pointDot: false,
	    //Number - Radius of each point dot in pixels
	    pointDotRadius: 4,
	    //Number - Pixel width of point dot stroke
	    pointDotStrokeWidth: 1,
	    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	    pointHitDetectionRadius: 20,
	    //Boolean - Whether to show a stroke for datasets
	    datasetStroke: true,
	    //Number - Pixel width of dataset stroke
	    datasetStrokeWidth: 2,
	    //Boolean - Whether to fill the dataset with a color
	    datasetFill: true,
	    //String - A legend template
	    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].lineColor%>\"></span><%=datasets[i].label%></li><%}%></ul>",
	    //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	    maintainAspectRatio: true,
	    //Boolean - whether to make the chart responsive to window resizing
	    responsive: true
	  }; */
  
  $('.tweetDateRangePicker').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
  });

    $('.products-list').slimScroll({
        height: '315px'
    });


    $('#main_search_form').submit(function (event) {
        event.preventDefault();

        var search_term = $('#search-btn-val').val();

        postToSolr(search_term);

    });

    $('.daterangepicker').find('.applyBtn').click(function() {
        getLangDateInfo();
    });

    $('#all_check').click(function() {
        if ($('#all_check').is(":checked")) {
            $('#eng_check').prop('checked', true);
            $('#ru_check').prop('checked', true);
            $('#de_check').prop('checked', true);
            $('#fr_check').prop('checked', true);
        }
        else {
            $('#eng_check').prop('checked', false);
            $('#ru_check').prop('checked', false);
            $('#de_check').prop('checked', false);
            $('#fr_check').prop('checked', false);
        }
    });

    $('#search_language-btn').click(function() {

        var selected = [];
        $('.language_chooser input:checked').each(function() {
            if($(this).attr('value') != "all") {
                selected.push($(this).attr('value'));
            }
        });

        var search_term = $('#search-btn-val').val();

        if(search_term == "") {
            var jElement = $('#main_search_form');
            jElement.css("border-color","red");
            setTimeout(
                function() { jElement.css("border-color","black"); },
                2000
            );
        }

        else {
            var search_string = "text:" + search_term;

            if (selected.length > 0) {
                search_string += " AND  (";
            }

            $.each(selected, function (index, value) {
                if (index == selected.length - 1) {
                    search_string += "lang:" + value + ")";
                }
                else {
                    search_string += "lang:" + value + ",";
                }
            });

            postToSolr(search_string);
        }

    });

    // Modal - Pop-Over for User

    //$('.person-title').click(function() {
    //    console.log("Hello!");
    //    console.log($(this).text());
    //    getInfo4Modal("who");
    //    return false;
    //    //$('#userModalContent').modal('show');
    //});
    //
    //// Modal - Pop-Over for Topics
    //
   /* $('.topic-title').click(function() {
        alert("Hello topis!");
        getInfo4Modal("what");
        $('#topicsModalContent').modal('show');
        return false;
    });*/
    //
    //// Modal - Pop-Over for Map
    //
    //$('.jvectormap-element').click(function() {
    //    getInfo4Modal("where");
    //    $('#mapModalContent').modal('show');
    //});
});

function getLangDateInfo() {

    var language = "all";
    var start_date = $("input[name=daterangepicker_start]").val();
    var end_date = $("input[name=daterangepicker_end]").val();

    //language = $('.language_chooser').find('.active a').html();
    //console.log("Language is"+language);

    var search_term = $('#search-btn-val').val();

    var search_string = search_term +'&date_from='+start_date + '&date_to='+end_date +'&language='+language;

    console.log(search_string);

    postToSolr(search_string);
}


function getInfo4Modal(came_from_module, facet_search) {

    var language = "all";

    var search_term = $('#search-btn-val').val();

    var search_string;

    if(came_from_module == "who" ) {
        search_string = "text:"+search_term+" AND screen_name:"+facet_search;
        postToSolrForUserModal(search_string);
    }
    else if(came_from_module == "what" ) {
        search_string = "text:"+search_term+" AND topics:"+facet_search;
        postToSolrForTopicsModal(search_string);
    }
    else if(came_from_module == "where" ) {
        search_string = "text:"+search_term+" AND user_location: \""+facet_search+"\"";
        postToSolrForMapModal(search_string, facet_search);
    }
}

function postToSolr(search_query) {

    $.post("/welcome/search?query=" + search_query + "&method=facets", function (data) {
        console.log(data);

        $('.user_tweet_content').find('.products-list').empty();
        $('.topic_tweet_content').find('.products-list').empty();
        $('#world-map-markers').empty();

        var whos_data_array = data.whos;
        var whats_data_array = data.whats;
        var places_data_array = data.places;
        var hashtag_counter = 0, popularity_counter = 0;

        if(whos_data_array.length > 0) {

            for (var i = 0; i < whos_data_array.length; i++) {
                var obj = whos_data_array[i];
                if(obj != null && obj.hasOwnProperty("id")) {
                    popularity_counter += obj.count;
                    $('.user_tweet_content').find('.products-list').append(
                        "<li class ='item'>" +
                        "<div class='product-img'>" +
                        "<img src=' " + obj.image + "'/>" +
                        "</div>" +
                        "<div class='product-info'>" +
                        "<a href='#' class='product-title person-title' data-screen_name=\"" + obj.screen_name + "\">" +
                        obj.name +
                        "<span class='label label-success pull-right'>" +
                        obj.count +
                        "</span>" +
                        "</a>" +
                        "<span class='product-description person-tweet-text'>" +
                        obj.tweet +
                        "</span>" +
                        "<span class='label label-info'>" +
                        obj.name +
                        "</span>"+
                        "</div>" +
                        "</li>"
                    );
                }
            }

            $("#popularity_count").html((popularity_counter/600).toPrecision(2));
        }

        else {
            $('.user_tweet_content').find('.products-list').append(
                "<li class ='item'>" +
                "<div>" +
                "<span class='product-description person-tweet-text text-center'>" +
                "No tweets found." +
                "</span>" +
                "</div>" +
                "</li>"
            );
            $("#popularity_count").html("");
        }

        if(whats_data_array.length > 0) {

            for (var i = 0; i < whats_data_array.length; i++) {
                var obj = whats_data_array[i];
                var topics_array;
                var topic_span_string = "";
                if(obj != null && obj.hasOwnProperty("id")) {
                    hashtag_counter += obj.count;
                    topics_array = obj.tags;
                    $.each(topics_array, function (index, value) {
                        topic_span_string += "<span class='label label-info'>"+value+"</span>&nbsp;";
                    });

                    $('.topic_tweet_content').find('.products-list').append(
                        "<li class ='item'>" +
                        "<div class='product-img'>" +
                        "<img src=' " + obj.image + "'/>" +
                        "</div>" +
                        "<div class='product-info'>" +
                        "<a href='#' class='product-title topic-title' data-topics=\"" + obj.topic + "\">" +
                        obj.topic +
                        "<span class='label label-success pull-right'>" +
                        obj.count +
                        "</span>" +
                        "</a>" +
                        "<span class='product-description person-tweet-text'>" +
                        obj.tweet +
                        "</span>" +
                        topic_span_string +
                        "</div>" +
                        "</li>"
                    );
                }

                $("#hashtag_count").html(hashtag_counter);
            }
        }

        else {
            $('.topic_tweet_content').find('.products-list').append(
                "<li class ='item'>" +
                "<div>" +
                "<span class='product-description person-tweet-text text-center'>" +
                "No tweets found." +
                "</span>" +
                "</div>" +
                "</li>"
            );
            $("#hashtag_count").html(hashtag_counter);
        }

        if(places_data_array.length > 0) {

            var locations = [];

            for (var i = 0; i < places_data_array.length; i++) {
                var obj = places_data_array[i];
                if(obj != null
                    && obj.hasOwnProperty("lat_long") && obj.lat_long != null
                    && obj.lat_long.hasOwnProperty("lat") && obj.lat_long.lat != null
                    && obj.lat_long.hasOwnProperty("lng") && obj.lat_long.lng != null) {

                    locations.push({
                        latLng: [
                            obj.lat_long.lat,
                            obj.lat_long.lng
                        ],
                        name: obj.location
                    });
                }
            }

            $('#world-map-markers').vectorMap({

                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: 'rgba(210, 214, 222, 1)',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.7,
                        cursor: 'pointer'
                    },
                    selected: {
                        fill: 'yellow'
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: '#00a65a',
                        stroke: '#111'
                    }
                },
                markers: locations,
                onMarkerClick: function(events, index) {
                    getInfo4Modal("where",locations[index].name);
                    $('#mapModalContent').modal('show');
                }
            });

            attachEvents();
        }

        else {

            $('#world-map-markers').vectorMap({

                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                backgroundColor: 'transparent',
                regionStyle: {
                    initial: {
                        fill: 'rgba(210, 214, 222, 1)',
                        "fill-opacity": 1,
                        stroke: 'none',
                        "stroke-width": 0,
                        "stroke-opacity": 1
                    },
                    hover: {
                        "fill-opacity": 0.7,
                        cursor: 'pointer'
                    },
                    selected: {
                        fill: 'yellow'
                    },
                    selectedHover: {}
                },
                markerStyle: {
                    initial: {
                        fill: '#00a65a',
                        stroke: '#111'
                    }
                }
            });

        }
    });
}

function postToSolrForUserModal(search_query) {

    $.post("/welcome/search?query="+search_query, function (data) {
        console.log(data);

        var whos_data_array = data.tweets;

        $('.user-modal-tweet-content').find('.products-list').empty();

        $('#userModalLabel').html("Tweets for "+whos_data_array[0].name);

        if (whos_data_array.length > 0) {

            for (var i = 0; i < whos_data_array.length; i++) {
                var obj = whos_data_array[i];
                $('.user-modal-tweet-content').find('.products-list').append(
                    "<li class ='item'>" +
                    "<div class='product-img'>" +
                    "<img src=' " + obj.image + "'/>" +
                    "</div>" +
                    "<div class='product-info'>" +
                    "<a href='#' class='product-title person-title'>" +
                    obj.name +
                    "<span class='label label-success pull-right'>" +
                    "</span>" +
                    "</a>" +
                    "<span class='product-description person-tweet-text' style='white-space:normal'>" +
                    obj.tweet +
                    "</span>" +
                    "</div>" +
                    "</li>"
                );
            }
        }

        else {
            $('.user_tweet_content').find('.products-list').append(
                "<li class ='item'>" +
                "<div>" +
                "<span class='product-description person-tweet-text text-center'>" +
                "No tweets found." +
                "</span>" +
                "</div>" +
                "</li>"
            );
        }



    });
}

function postToSolrForTopicsModal(search_query) {

    console.log(search_query)

    $.post("/welcome/search?query="+search_query, function (data) {
        console.log(data);

        var whats_data_array = data.tweets;

        $('.topics-modal-tweet-content').find('.products-list').empty();

        $('#topicsModalLabel').html("Tweets for "+whats_data_array[0].topic);

        if (whats_data_array.length > 0) {

            for (var i = 0; i < whats_data_array.length; i++) {
                var obj = whats_data_array[i];
                $('.topics-modal-tweet-content').find('.products-list').append(
                    "<li class ='item'>" +
                    "<div class='product-img'>" +
                    "<img src=' " + obj.image + "'/>" +
                    "</div>" +
                    "<div class='product-info'>" +
                    "<a href='#' class='product-title person-title' >" +
                    obj.name +
                    "<span class='label label-success pull-right'>" +
                    "</span>" +
                    "</a>" +
                    "<span class='product-description person-tweet-text' style='white-space:normal'>" +
                    obj.tweet +
                    "</span>" +
                    "</div>" +
                    "</li>"
                );
            }
        }

        else {
            $('.user_tweet_content').find('.products-list').append(
                "<li class ='item'>" +
                "<div>" +
                "<span class='product-description person-tweet-text text-center'>" +
                "No tweets found." +
                "</span>" +
                "</div>" +
                "</li>"
            );
        }

    });
}

function postToSolrForMapModal(search_query, location_sent) {

    $.post("/welcome/search?query="+search_query, function (data) {
        console.log(data);

        var whos_data_array = data.tweets;

        $('.map-modal-tweet-content').find('.products-list').empty();

        $('#mapModalLabel').html("Tweets from "+location_sent);

        if (whos_data_array.length > 0) {

            for (var i = 0; i < whos_data_array.length; i++) {
                var obj = whos_data_array[i];
                $('.map-modal-tweet-content').find('.products-list').append(
                    "<li class ='item'>" +
                    "<div class='product-img'>" +
                    "<img src=' " + obj.image + "'/>" +
                    "</div>" +
                    "<div class='product-info'>" +
                    "<a href='#' class='product-title person-title'>" +
                    obj.name +
                    "<span class='label label-success pull-right'>" +
                    "</span>" +
                    "</a>" +
                    "<span class='product-description person-tweet-text' style='white-space:normal'>" +
                    obj.tweet +
                    "</span>" +
                    "</div>" +
                    "</li>"
                );
            }
        }

        else {
            $('.map_tweet_content').find('.products-list').append(
                "<li class ='item'>" +
                "<div>" +
                "<span class='product-description person-tweet-text text-center'>" +
                "No tweets found." +
                "</span>" +
                "</div>" +
                "</li>"
            );
        }



    });
}

function attachEvents() {

    // Modal - Pop-Over for User

    var screen_name, topic_name;

    $('.person-title').click(function() {
        console.log($(this).attr("data-screen_name"));
        screen_name = $(this).attr("data-screen_name");
        getInfo4Modal("who", screen_name);
        $('#userModalContent').modal('show');
        return false;
    });

    // Modal - Pop-Over for Topics

    $('.topic-title').click(function() {
        console.log($(this).attr("data-topics"));
        topic_name = $(this).attr("data-topics");
        getInfo4Modal("what", topic_name);
        $('#topicsModalContent').modal('show');
        return false;
    });

}