var header_info = [
  { "section" : 0, "header" : 1, "name" : "My Progress Report" , "link" : "./my_prog_rpt.html"},
  { "section" : 0, "header" : 0, "name" : "My Program" , "link" : "./my_prog.html"},
  { "section" : 0, "header" : 0, "name" : "My Program History" , "link" : "./my_prog_hist.html"},
  { "section" : 1, "header" : 1, "name" : "Excercise" , "link" : "./exercise.html"},
  { "section" : 2, "header" : 1, "name" : "FOGR Schedule" , "link" : "./sched.html"},
  { "section" : 2, "header" : 0, "name" : "FOGR News" , "link" : "./news.html"}
 ];
 
 $(function () {
  "use strict";
  var el;
  var e;
  for (var i = 0; i <= header_info.length; i++) {
    
	el = $('#lv_prog' + header_info[i].section);
		
    if (header_info[i].header == 1) {
		el.append($('<li data-role="list-divider" role="heading">')).listview('refresh');
	}
	
    e = header_info[i];
	el.append($('<li><a href="' + header_info[i].link + '">'+ e.name +'</a></li>')).listview('refresh');
    //el.append($('<li data-theme="c"><a href="#" data-transition="slide">' + e.name + '</a></li>'));
  }
  //el.listview('refresh');
});