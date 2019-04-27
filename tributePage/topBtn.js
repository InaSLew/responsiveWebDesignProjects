window.onscroll = function() {
    function scrollDetect() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("backbtn").style.display = "block";
        } else {
            document.getElementById("backbtn").style.display = "none";
        }
    }

    function backToTop() {
        let btn = document.getElementById("backbtn");
        btn.addEventListener("click", function() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })
    }

    scrollDetect();
    backToTop();
}