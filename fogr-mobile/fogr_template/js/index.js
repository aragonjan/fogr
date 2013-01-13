var index_info = [
  { "index" : 0, "name" : "My Progress Report" },
  { "index" : 1, "name" : "My Program" },
  { "index" : 1, "name" : "My Program History" },
  { "index" : 1, "name" : "Excercise" },
  { "index" : 2, "name" : "FOGR Schedule" },
  { "index" : 2, "name" : "FOGR News" }
 ];
 
 $(function () {
  "use strict";
  var el = $('#lv_prog' + 0);
  for (var i = 0; i <= index_info.length; i++) {
    
    if (i == 0 || index_info[i].index == index_info[i-1].index)
	{
		el.append($('<li data-role="list-divider" role="heading">')).listview('refresh');
	}
	
    var e = index_info[i];
	el.append($('<li><a href="#">'+ e.name +'</a></li>')).listview('refresh');
    //el.append($('<li data-theme="c"><a href="#" data-transition="slide">' + e.name + '</a></li>'));
  }
  //el.listview('refresh');
});