$(function(){

    const shapeBox = () => {
        $("#box").css({
            height: window.innerHeight,
            width: window.innerWidth,
            border: "5px solid red"
        })
    }

    $("#box").hammer().bind("tap pan pinch", function(e){
        shapeBox();
    })

    $(window).resize(function(e){
        setTimeout(function(){
            shapeBox();
        },100)
    })

    shapeBox();

})
