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