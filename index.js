// first sec
// let asideWidth = $("aside").outerWidth();
// console.log(asideWidth);

$(".open").click(function () {
  $("aside").fadeIn(400);
  $(".open").animate({ left: `211.969px` }, 500);

  if ($("aside").css("left") === `-211.969px`) {
    $("aside").animate({ left: `0px` }, 500);
    $(".open").animate({ left: `211.969px` }, 500);
  }
});
// disapear
$(".x").click(function () {
  $("aside").animate({ left: `-211.969px` }, 500);
  $(".open").animate({ left: `50.969px` }, 500);
});
// second sec

$(".inner").hide();
$(".toggle")
  .eq(0)
  .click(function () {
    $(".inner").eq(0).slideToggle(500);
    $(".inner").eq(1).slideUp(500);
    $(".inner").eq(2).slideUp(500);
    $(".inner").eq(3).slideUp(500);
  });
$(".toggle")
  .eq(1)
  .click(function () {
    $(".inner").eq(1).slideToggle(500);
    $(".inner").eq(0).slideUp(500);
    $(".inner").eq(2).slideUp(500);
    $(".inner").eq(3).slideUp(500);
  });

$(".toggle")
  .eq(2)
  .click(function () {
    $(".inner").eq(2).slideToggle(500);
    $(".inner").eq(1).slideUp(500);
    $(".inner").eq(0).slideUp(500);
    $(".inner").eq(3).slideUp(500);
  });
$(".toggle")
  .eq(3)
  .click(function () {
    $(".inner").eq(3).slideToggle(500);
    $(".inner").eq(1).slideUp(500);
    $(".inner").eq(2).slideUp(500);
    $(".inner").eq(0).slideUp(500);
  });

// third
           $(document).ready(function() {
         
            var countDownDate = new Date("Jan 1, 2025 00:00:25").getTime();

            var x = setInterval(function() {
            
                var now = new Date().getTime();

                var distance = countDownDate - now;

                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $(".days").html(days + "d " )
                $(".hours").html(hours + "h " )
                $(".minutes").html(minutes + "m " )
                $(".seconds").html(seconds + "s" )

                if (distance < 0) {
                    clearInterval(x);
                    $("#time").html("TIME-EXPIRED").addClass("mt-5").addClass("fw-bolder").addClass("text-center").addClass("text-danger").addClass("fs-1");
                   
                }
            }, 1000);
        });
        // last sec
  var n=100;
  $("#chars").html("100").addClass("text-danger");
  $("textarea").on("input",function(e){
    
    let x =e.target.value;
    if(x.length<=100){
     
      n--
      $("#chars").html(n);
      if(n==0){
        $("#chars").html("Your available characters finished").addClass("text-danger").addClass("fs-5");
      }
    }
      
  })
 

