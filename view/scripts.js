function cerrar() {
    $("#floatLayer").css({ opacity: "0"}), setTimeout(function() {
        $("#floatLayer").css({
            display: "none"
        })
    }, 500)
}
function setscroll() {
    var e = document.getElementById("items").scrollTop;
    localStorage.setItem("scrollpos", e)
}
function mclick() {
    var e = 1;
    localStorage.setItem("menuclick", e)
}
$("#shield").click(function(){
    $("#playerProtected").show();
    $("#shield").hide();
    $( "#playerProtected" ).append(content);
    $("#ciframe").attr("scrolling", "no");
});
$("#cuerpo").css({
        opacity: "1"
    }), $("#ciframe").attr("scrolling", "no"), setTimeout(function() {
        $("#floatLayer").css({
            opacity: "1"
        })
    }, 1e3), $("#sombra").fadeTo(1, 0), $("#luces").click(function() {
        $("#header").css({
            zIndex: "997"
        }), $("#player").css({
            zIndex: "998"
        }), $("#sombra").css({
            display: "block"
        }), $("#sombra").fadeTo(300, .9), $("#floatLayer").css({
            zIndex: "999"
        }), $(".slide-in").removeClass("slide-in on").addClass("slide-in"), $(".mclick").removeClass("mclick").addClass("slide-in")
    }), $("#sombra").click(function() {
        $("#sombra").fadeTo(300, 0), $(".slide-in").removeClass("slide-in on").addClass("slide-in"), setTimeout(function() {
            $("#player").css({
                zIndex: "980"
            }), $("#floatLayer").css({
                zIndex: "980"
            }), $("#sombra").css({
                display: "none"
            })
        }, 400)
    }), $(document).ready(function(e) {
        var n = localStorage.getItem("menuclick");
        if (1 == n) {
            document.getElementById("menu").className = "mclick";
            var s = window.innerHeight - 45,
                t = localStorage.getItem("scrollpos");
            $("#items").css("height", s - 70), $("#items").scrollTop(t)
        }
        $(document).mouseup(function(e) {
            var n = localStorage.getItem("menuclick");
            if (1 == n) {
                setTimeout(function() {
                    document.getElementById("menu").className = "slide-in"
                }, 300);
                var s = 0;
                localStorage.setItem("menuclick", s)
            }
        }), $("#menu-icon").click(function() {
            var e = $("#sombra").css("display"),
                n = $("#menu").hasClass("on");
            if ("block" == e) $("#sombra").fadeTo(300, 0), $("#sombra").css({
                display: "none"
            }), $("#menu").removeClass("on");
            else {
                var s = window.innerHeight - 45;
                $(".slide-in").toggleClass("on"), $("#items").css("height", s - 70), $("#menu-search").focus(), 0 == n && ($("#sombra").css({
                    display: "block"
                }), $("#sombra").fadeTo(300, .5), $("#header").css({
                    zIndex: "999"
                }))
            }
        })
    }), $("#menu-icon").click(function() {
        var e = document.getElementById("menu"),
            n = e.className;
        "mclick" == n && (e.className = "slide-in on")
    }), $(".menu-link").click(function() {
        var e = document.getElementById("items").scrollTop;
        localStorage.setItem("scrollpos", e);
        var n = 1;
        localStorage.setItem("menuclick", n)
    }), $(window).resize(function() {
        var e = window.innerHeight - 45;
        $("#items").css("height", e - 70)
    }),
    function(e) {
        function n(n, s) {
            e("#menu-search").change(function() {
                var n = e(this).val();
                return n ? (e("#items").find("a:not(:Contains(" + n + "))").parent().fadeOut(), e("#items").find("a:Contains(" + n + ")").parent().fadeIn()) : e("#items").find("li").fadeIn(), !1
            }).keyup(function() {
                e(".menu-separator").css("display", "none"), e(this).change()
            })
        }
        jQuery.expr[":"].Contains = function(e, n, s) {
            return (e.textContent || e.innerText || "").toUpperCase().indexOf(s[3].toUpperCase()) >= 0
        }, e(function() {
            n(e("#list"), e("#items"))
        })
    }(jQuery),
    function(e, n, s, t, o, a, c) {
        e.GoogleAnalyticsObject = o, e[o] = e[o] || function() {
            (e[o].q = e[o].q || []).push(arguments)
        }, e[o].l = 1 * new Date, a = n.createElement(s), c = n.getElementsByTagName(s)[0], a.async = 1, a.src = t, c.parentNode.insertBefore(a, c)
    }(window, document, "script", "/view/resources/analytics.js", "ga"), ga("create", "UA-41210250-1", "colgado.tv"), ga("send", "pageview");