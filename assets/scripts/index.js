$(function(){
        $("img#birb").click(function(){
            var src = ($(this).attr("src") == "birb.png")
                    ?"human.png"
                    :"birb.png";
            $(this).attr("src", src);
        });
    });