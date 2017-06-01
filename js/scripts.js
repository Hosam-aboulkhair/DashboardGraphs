//******************
//***** Sizing 
//**********************************************************************
function sizing() {
    $(document).ready(function() {
        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var headerHeight = $('.left-col .mis-logo').outerHeight()+$('.left-col .user-block').outerHeight();
        var footerHeight = $('.left-col .footer').outerHeight();
        var mainHeaderHeight = $('.right-content h1').outerHeight()+$('.right-content .row').outerHeight();

        $('.login,.left-col').height(windowHeight);
        
        var leftColHeight = $('.left-col').height();
        
        $('.main-menu').height(leftColHeight-headerHeight-footerHeight);
		
		$('.bodyContainer').height(windowHeight - mainHeaderHeight - 30);
    }); 
}

//******************
//***** Selected Row
//**********************************************************************     
			(function selectedRow() {
			   $(document).ready(function() {
			   $('table tbody tr td a.glyphicon').click(function () { 
			   $(this).parent().parent().toggleClass('selectedRow').siblings().removeClass('selectedRow');
			     $('#accordion2').slideDown();
			     });
			  }); 
           
			}());
//******************
//***** Date Picker
//**********************************************************************
	  (function datePicker() {
		  'use strict';
 $(document).ready(function() {
    			 $( "input.date" ).datepicker({
				  changeMonth: true,
     			  changeYear: true,
				  showOtherMonths: true,
      			  selectOtherMonths: true,
				  dateFormat: 'dd-mm-yy' 
				}); 
});
		  
		  }());



//******************
//***** Table Paging 
//**********************************************************************

	   (function tablePaging () {
	  $(document).ready(function() {
			 
			  $('#tableData , .tableData').paging({limit:5});
		  		 
		$('.paging-nav a:first-child').addClass('first');
		$('.paging-nav a:last-child').addClass('last');
		$('.paging-nav a').click( function () {
		$('.paging-nav a:first-child').addClass('first');
		$('.paging-nav a:last-child').addClass('last');
		
		});
		
		$('.paging-nav a:first-child').hover( function () {
			$(this).toggleClass('hover-first');
			});
		 $('.paging-nav a:last-child').hover( function () {
			 $(this).toggleClass('hover-last');
			 })
	  });
	  }());

//******************
//***** Nurse Station
//**********************************************************************
	
	(function nurseStation () { 
	  $(document).ready(function() {
				$('.nurseStationContainer ul.units li a').click( function () {
					$(this).toggleClass('active').parent().siblings().children().removeClass('active');
					$('.stationTitle').fadeIn();
					$('#accordion2').slideUp();
				});
	  });
}());

//******************
//***** Material Paging
//**********************************************************************


			  
				  
				  (function materialPaging () {
	$(document).ready(function() {
		$('.paging li a').click(function () {
	$(this).focus().toggleClass('active').siblings().removeClass('active');
	});
});
			}());	
			
//******************
//***** Click Of Material Item
//**********************************************************************		
					 
(function ItemClick () {
	
	  $(document).ready(function() {
		  
		  										
	$('#ProductDetails .modal-header .closeModel').click(function () {
		$('.bodyContainer a.block').removeClass('active');
	});
		
	$('#itemsContainer a.block').click(function () {
		$(this).focus().toggleClass('active').parent().siblings().children().removeClass('active');
	});
		  
		  });
	}());
	
	

	
//******************
//***** Select All Checkbox
//**********************************************************************
	
(function selectAllBtn() {
		  $(document).ready(function() {
		  
			  
			  	  $('.selcetAll').change(function() {
		  var checkboxes = $(this).closest('.itemGrpContainer').find(':checkbox');
		  if($(this).is(':checked')) {
			  checkboxes.prop('checked', true);
		  } else {
			  checkboxes.prop('checked', false);
		  };
		  

	  });

	});
	
	}());	
	
	

	
	
	
	