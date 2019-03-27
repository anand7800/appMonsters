$(function() {
	
	$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
	
	 $('.dropdown').on('show.bs.dropdown', function() {
       $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

   $('.dropdown').on('hide.bs.dropdown', function() {
     $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
   });
   
	$('.mybrand input').focus(function () {
		$(this).parents('.mybrand').addClass('hastext');
	});
	$('.mybrand input').blur(function () {
		if($(this).val() == '') {
		$(this).parents('.mybrand').removeClass('hastext');
		}
	});
	
	$('.btn-primary.addoption').click(function(){
		if($('.variants .variantsoption .form-group').length <= 2){
		$(this).parents('.variants .variantsoption .form-group').after('<div class="form-group"><div class="row clearfix"><div class="col-sm-3"><input class="form-control" type="text" placeholder="Size" /></div><div class="col-sm-6"><input class="form-control" type="text" placeholder="XS" /></div><div class="col-sm-3"><button type="button" class="btn btn-primary removebtn">Remove</button></div></div></div>');
		}
	});
	
	$(document).on('click','.removebtn',function(){
		$(this).parents('.variants .variantsoption .form-group').remove();
	});

	$('.update_stock_box .updatebx .updatestockbtnbx').on("click", function () {
		$(this).parents('.updateddigit').addClass("update");
		setTimeout(RemoveClass, 2000);
		});
		function RemoveClass() {
		$('.updateddigit').removeClass("update");
		}
	$('.analyticsheading .sessionheading .minus').click(function(){
		$(this).parents('.sessionheading ').addClass('active');
	});

	$('.analyticsheading .sessionheading .plus').click(function(){
		$(this).parents('.sessionheading ').addClass('deactive');
		$(this).parents('.sessionheading ').removeClass('active');
	});
     //Custom Select Option Start Here
	$('.sales_year_choose select.select').each(function(){
		var title = $(this).attr('title');
		if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
		$(this)
			.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
			.after('<span class="select">' + title + '</span>')
			.change(function(){
				val = $('option:selected',this).text();
				$(this).next().text(val);
	 });
	});
	//End

	$('.sidemenuwrap .navbar-nav > li').click(function(){
		$('.sidemenuwrap .navbar-nav > li').removeClass('active');
		$(this).addClass('active');
	});

});


