$(function() {

    setInterval(function() {
       $('.next').trigger('click');
    },5000)
	$('.next').click(function() {
        var truoc = $(".active");
       var sau = $('.active').next();
       var firstSlide = $('.each-silde:first-child');
       var lastSlide = $('.each-silde:last-child');
       var vitri = $('.iconactive').index()+1;
       if(vitri===$('.button-dieu-huong i').length){
           vitri =0;
       }
       $('.button-dieu-huong i.iconactive').removeClass('iconactive');
       $('.button-dieu-huong i:nth-child('+ (vitri+1) + ')').addClass('iconactive');
       
          if(sau.length === 0){
            lastSlide.addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
                $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                lastSlide.removeClass('active');
            });
            firstSlide.addClass('xuat-hien-tu-ben-trai').one('webkitAnimationEnd',function(){
                $(".xuat-hien-tu-ben-trai").removeClass('xuat-hien-tu-ben-trai');
                firstSlide.addClass('active');
            });
              
          }else{
            truoc.addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
                $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                truoc.removeClass('active');
            });
            sau.addClass('xuat-hien-tu-ben-trai').one('webkitAnimationEnd',function(){
              $(".xuat-hien-tu-ben-trai").removeClass('xuat-hien-tu-ben-trai');
              sau.addClass('active');
          });
          }
               
             
     


    })


    $('.pre').click(function() {
        var sau = $(".active");
       var truoc = $('.active').prev();
       var firstSlide = $('.each-silde:first-child');
       var lastSlide = $('.each-silde:last-child');
       var vitri = $('.iconactive').index()+1;
       if(vitri===1){
        vitri =$('.button-dieu-huong i').length+1;
    }
    $('.button-dieu-huong i.iconactive').removeClass('iconactive');
    $('.button-dieu-huong i:nth-child('+ (vitri-1) + ')').addClass('iconactive');
       
          if(truoc.length === 0){
            firstSlide.addClass('bien-mat-o-ben-trai').one('webkitAnimationEnd',function(){
                $(".bien-mat-o-ben-trai").removeClass('bien-mat-o-ben-trai');
                firstSlide.removeClass('active');
            });
            lastSlide.addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
                $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
                lastSlide.addClass('active');
            });
              
          }else{
            sau.addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
                $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                sau.removeClass('active');
            });
            truoc.addClass('xuat-hien-tu-ben-trai').one('webkitAnimationEnd',function(){
              $(".xuat-hien-tu-ben-trai").removeClass('xuat-hien-tu-ben-trai');
              truoc.addClass('active');
          });
          }
               
             
     


    })

    $('.button-dieu-huong i').click(function(e){
           $('.button-dieu-huong i.iconactive').removeClass('iconactive');
              $(this).addClass('iconactive');

         


              $('.each-silde.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
                            $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
                           
                            
                        });
                
                        $('.each-silde:nth-child(' + ($(this).index() + 1) + ')').addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
                            $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
                            $('.each-silde.active').removeClass('active');
                            $('.each-silde:nth-child(' + ($(this).index() + 1) + ')').addClass('active');
                        }); 
    })


//     $('.button-dieu-huong i:nth-child(3)').click(function(e){
//         $('.each-silde.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
//             $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
           
            
//         });

//         $('.each-silde:nth-child(3)').addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
//             $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
//             $('.each-silde.active').removeClass('active');
//             $('.each-silde:nth-child(3)').addClass('active');
//         });

       
         
      
//  })

//  $('.button-dieu-huong i:nth-child(2)').click(function(e){
//     $('.each-silde.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
//         $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
       
        
//     });

//     $('.each-silde:nth-child(2)').addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
//         $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
//         $('.each-silde.active').removeClass('active');
//         $('.each-silde:nth-child(2)').addClass('active');
//     });

   
     
  
// })


// $('.button-dieu-huong i:nth-child(1)').click(function(e){
//     $('.each-silde.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
//         $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
       
        
//     });

//     $('.each-silde:nth-child(1)').addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
//         $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
//         $('.each-silde.active').removeClass('active');
//         $('.each-silde:nth-child(1)').addClass('active');
//     });

   
     
  
// })

// $('.button-dieu-huong i:nth-child(4)').click(function(e){
//     $('.each-silde.active').addClass('bien-mat-o-ben-phai').one('webkitAnimationEnd',function(){
//         $(".bien-mat-o-ben-phai").removeClass('bien-mat-o-ben-phai');
       
        
//     });

//     $('.each-silde:nth-child(4)').addClass('xuat-hien-tu-ben-phai').one('webkitAnimationEnd',function(){
//         $(".xuat-hien-tu-ben-phai").removeClass('xuat-hien-tu-ben-phai');
//         $('.each-silde.active').removeClass('active');
//         $('.each-silde:nth-child(4)').addClass('active');
//     });

   
     
  
// })



});