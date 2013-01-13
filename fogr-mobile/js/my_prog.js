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
  var el = $('#lv_my_prog');
  
  el.append($('<li data-role="list-divider" role="heading">')).listview('refresh');
  
  for (var i = 0; i < excercises.length; i++) {
    var e = excercises[i];
    el.append($('<li><a href="#"></a></li>').text(e.name)).listview('refresh');
  }
  
});