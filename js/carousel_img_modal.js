$(document).ready(function($) {      

    $('#carousel-text').html($('#slide-content-0').html());

    var dataSlideNumber = 0;
    var max = $('.carousel-inner').children().length;
   $('.fancybox').on('click', function(){
   		dataSlideNumber = $(this).attr('data-slide-number');
       var img = $(this).find('img');
       var label = $(this).find('h5');
       var footer = $(this).find('p');
      $('#modal-img-id').attr('src', img.attr('src'));
      $('#modal-img-id').attr('class', 'img-responsive center-block d-block mx-auto w-100');
      $('#myModalLabel').text(label.text());
      // console.log(label);
      $('#myModalFooter').text(footer.text());
       $('#myModal').modal('toggle');
       $('.modal-backdrop').hide();
   });

   $('#modal-prev').on('click', function(){

   		if(dataSlideNumber == 0){
   			dataSlideNumber = max-1;
   		} else {
   			dataSlideNumber--;
   		};

   		var active = $('[data-slide-number=' + dataSlideNumber + ']');
   		var img = active.find('img');
       	var label = active.find('h5');
       	var footer = active.find('p');
       	$('#modal-img-id').attr('src', img.attr('src'));
      $('#modal-img-id').attr('class', 'img-responsive center-block d-block mx-auto w-100');
      $('#myModalLabel').text(label.text());
      // console.log(label);
      $('#myModalFooter').text(footer.text());
       // $('#myModal').modal('toggle');
       $('.modal-backdrop').hide();
   	});

   $('#modal-next').on('click', function(){
   		// $('#myModal').modal('toggle');
   		// $('.fancybox').click();
   		// $('.fancybox').click();

   		// $('#myModal').modal('toggle');
   		if(dataSlideNumber == max-1) {
   			dataSlideNumber = 0;
   		} else {
   			dataSlideNumber++;
   		}

   		var active = $('[data-slide-number=' + dataSlideNumber + ']');
   		var img = active.find('img');
       	var label = active.find('h5');
       	var footer = active.find('p');
       	$('#modal-img-id').attr('src', img.attr('src'));
      $('#modal-img-id').attr('class', 'img-responsive center-block d-block mx-auto w-100');
      $('#myModalLabel').text(label.text());
      // console.log(label);
      $('#myModalFooter').text(footer.text());
       // $('#myModal').modal('toggle');
       $('.modal-backdrop').hide();
   });

});
