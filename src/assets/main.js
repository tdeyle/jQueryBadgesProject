$(function() {

  $.ajax({
  	url: 'https://www.codeschool.com/users/978839.json',
  	dataType: 'jsonp',
  	success: function(response) {
  		console.log(response);
	  	$.each(response.courses.completed, function(index, course) {
	  		console.log(course);
		  	$('<div class="course"><h3 title="course.title">' + course.title + '</h3><img src=' + course.badge + '></img><a href=' + course.url + ' target="_blank" class="btn btn-primary">See Course</div>').appendTo('#badges');  		});
  	}

  });
});