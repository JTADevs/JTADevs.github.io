const descs = document.querySelectorAll("div.desc")
const descriptions = document.querySelectorAll("div#descriptions")
$(".graphic").on("click", function() {
    const clicked = descs[parseInt(this.getAttribute("desc"))]
    if($(this).hasClass("active")){
        $(this).removeClass("active")
        $(clicked).removeClass("active")
        $(descriptions).removeClass("expand")
    }else{
        const activeDesc = document.querySelector("#descriptions > .active")
        const activeGraphic = document.querySelector("#devs > .active")
        if(activeGraphic){
            $(activeGraphic).removeClass("active")
            $(activeDesc).removeClass("active")
        }else{
            $(descriptions).addClass("expand")
        }
        $(this).addClass("active")
        $(clicked).addClass("active")
    }
})