$(document).ready(function(){
    $("div").mousedown(function(){
        $("h2").text("mousedown")
    })
    $("div").mouseup(function(){
        $("h2").text("mouseup")
    })
    // $("div").mouseenter(function(){
    //     $("h1").text("mouseenter")
    // })
    // $("div").mouseleave(function(){
    //     $("h1").text("mouseleave")
    // })
    $("div").mouseover(function(){
        $("h3").text("mouseover")
    })
    $("div").mouseout(function(){
        $("h3").text("mouseout")
    })

})

$(document).ready(function(){
    $(window).mousemove(function(event){
        $("span").text(event.pageX+ "," +event.pageY) 
    })
})