const descriptions = document.querySelectorAll("div.desc")
$(".letters").on("click", function() {
    const clicked = descriptions[parseInt(this.getAttribute("desc"))]
    if($(clicked).hasClass("active")){
        $(clicked).removeClass("active")
    }else{
        const active = document.querySelector(".active")
        if(active){
            $(active).removeClass("active")
        }
        $(clicked).addClass("active")
    }
})