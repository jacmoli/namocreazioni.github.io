//se non abbiamo salvato il cookie allora l'utente NON ha ancora premuto OK 
//dobbiamo mostrare il popup per chiedere conferma

$(document).ready(function () {

    if (!getCookie("COOKIE_LAW_CONFIRM")) {

        $(".cookieDialogTop").show(1000);
        document.onscroll = function (e) {
            if (!getCookie("COOKIE_LAW_CONFIRM")) {
                var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                if (scrollTop > 100) {
                    acceptCookie();
                }
            }
        };

        $('a').click(function (e) {
            if (!getCookie("COOKIE_LAW_CONFIRM")) {

                acceptCookie();

            }
        });
    }
});



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

//creo un cookie valido per un anno 
function acceptCookie() {
    $(".cookieDialogTop").hide(1000);
    var expiration_date = new Date();
    expiration_date.setFullYear(new Date().getFullYear() + 1);
    document.cookie = "COOKIE_LAW_CONFIRM=true;path=/; expires=" + expiration_date.toGMTString();

}