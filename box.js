$( () => {

    const shapeBox = () => {
        $("#box").css({
            height: window.innerHeight,
            width: window.innerWidth,
        })
    }

    $("#box").hammer().bind("tap pan pinch", (e) => {
        shapeBox();
    })

    $(window).resize((e) => {
        setTimeout( () => {
            shapeBox();
        },100)
    })

    shapeBox();

})
