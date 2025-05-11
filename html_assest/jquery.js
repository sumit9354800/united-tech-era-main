var owl = ('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        }
    }
});
// owl.on('mousewheel', '.owl-stage', function (e) {
//     if (e.deltaY>0) {
//         owl.trigger('next.owl');
//     } else {
//         owl.trigger('prev.owl');
//     }
//     e.preventDefault();
// });

// accordion 

$(document).ready(function(){
    $(".accordion").on("click", ".heading", function() {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);
                 
    $(this).siblings().removeClass("active");
    });
   });
        