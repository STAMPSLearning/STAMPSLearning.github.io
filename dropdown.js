function showSideMenu()
    {
        document.getElementById("sideopen").style.display="block";
    }

function hideSideMenu()
    {
        document.getElementById("sideopen").style.display="none";
    }

var sideopen=document.getElementById("sideopen");
document.getElementById("robotlinkbox").onmouseover=function(){
                    showSideMenu();
                    window.imagborder="";
                    document.getElementById("roboticslink").style.color="#71bd52";
                };

document.getElementById("robotlinkbox").onmouseout=function(){
    window.setTimeout(function()
        {
            window.imagborder=window.getComputedStyle(sideopen,null).border;
        },100);
                
    if (window.imagborder != "0px solid rgb(0, 0, 255)")
        {
            hideSideMenu();
        }
    document.getElementById("roboticslink").style.color="#8e8e8e";
}

document.getElementById("robotlinkbox").onclick=function(){window.location="robotics.html"};
document.getElementById("sideopenmenu").onmouseover=function(){showSideMenu();};
