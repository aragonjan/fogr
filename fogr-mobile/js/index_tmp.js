var index_info = [
  { "index" : "#lv_prog0", "name" : "My Progress Report" },
  { "index" : "#lv_prog1", "name" : "My Program" },
  { "index" : "#lv_prog1", "name" : "My Program History" },
  { "index" : "#lv_prog1", "name" : "Excercise" },
  { "index" : "#lv_prog2", "name" : "FOGR Schedule" },
  { "index" : "#lv_prog2", "name" : "FOGR News" }
 ];
 
 $(function () {
  "use strict";
  var el = $("'"+ index_info[i].index +"'");
  
  el.append($('<li data-role="list-divider" role="heading">')).listview('refresh');
  
  for (var i = 0; i <= index_info.length; i++) {
    var el = $(index_info[i].index);
	
    if (index_info[i].index != "#lv_prog0" && index_info[i].index == index_info[i - 1].index)
	{
		el.append($('<li data-role="list-divider" role="heading">')).listview('refresh');
	}
	
    var e = index_info[i];
	el.append($('<li><a href="#">'+ e.name +'</a></li>')).listview('refresh');
    //el.append($('<li data-theme="c"><a href="#" data-transition="slide">' + e.name + '</a></li>'));
  }
  //el.listview('refresh');
});