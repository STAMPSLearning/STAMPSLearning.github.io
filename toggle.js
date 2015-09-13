$(document).ready(function(){

    function hideothers(s)
    {
        for(n=1;n<8;n++)
        {
            if(n!=s)
            {
                $('.s'+n).hide();
            }
        }
    }

    hideothers(1);

    $("#s1").click(function(){
        $(".s1").toggle();
        $("#t1").toggleClass("caret ocaret");
    });
    $("#s2").click(function(){
        $(".s2").toggle();
        $("#t2").toggleClass("caret ocaret");
    });
    $("#s3").click(function(){
        $(".s3").toggle();
        $("#t3").toggleClass("caret ocaret");
    });
    $("#s4").click(function(){
        $(".s4").toggle();
        $("#t4").toggleClass("caret ocaret");
    });
    $("#s5").click(function(){
        $(".s5").toggle();
        $("#t5").toggleClass("caret ocaret");
    });
    $("#s6").click(function(){
        $(".s6").toggle();
        $("#t6").toggleClass("caret ocaret");
    });
    $("#s7").click(function(){
        $(".s7").toggle();
        $("#t7").toggleClass("caret ocaret");
    });
});
