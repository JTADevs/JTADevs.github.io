const descriptions = document.querySelectorAll("div.desc")
$(".letters").on("click", function() {
    const clicked = descriptions[parseInt(this.getAttribute("desc"))]
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        $(clicked).removeClass("active")
    }else{
        const activeDesc = document.querySelector("#descriptions > .active")
        const activeLetter = document.querySelector("#letters > .active")
        if(activeLetter){
            $(activeLetter).removeClass("active")
            $(activeDesc).removeClass("active")
        }
        $(this).addClass("active")
        $(clicked).addClass("active")
    }
})