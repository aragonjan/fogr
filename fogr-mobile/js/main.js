var index_info = [
  { "index" : 1, "name" : "My Progress Report" },
  { "index" : 2, "name" : "My Program" },
  { "index" : 2, "name" : "My Program History" },
  { "index" : 3, "name" : "Excercise" },
  { "index" : 3, "name" : "FOGR Schedule" },
  { "index" : 3, "name" : "FOGR News" }
 ];
 
 $(function () {
  "use strict";
  var el = $('#lv_prog1');
  for (var i = 0; i <= index_info.length; i++) {
    var e = index_info[i];
	el.append($('<li><a href="#"></a></li>').text(e.name));
    //el.append($('<li data-theme="c"><a href="#" data-transition="slide">' + e.name + '</a></li>'));
  }
  el.listview('refresh');
});

var excercises = [
  { "name" : "Push Sit-up" },
  { "name" : "Push Crunch" },
  { "name" : "Neck Press" },
  { "name" : "Shoulder Press" },
  { "name" : "Lying Crunch" },
  { "name" : "Arm Bar" },
  { "name" : "Arm Pad" },
  { "name" : "Crunch" },
  { "name" : "Incline Sit-up" },
  { "name" : "Lunge" },
  { "name" : "Squat" }
];

$(function () {
  "use strict";
  var el = $('#excercise-list');
  for (var i = 0; i < excercises.length; i++) {
    var e = excercises[i];
    el.append($('<li><a href="#"></a></li>').text(e.name));
  }
  el.listview('refresh');
});

