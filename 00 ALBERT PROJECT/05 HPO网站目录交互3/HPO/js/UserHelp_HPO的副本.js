
$(window).scroll(function (event) {

//1 nav
    var toVideos = $(".videos").offset().top ;
    var toDocuments = $(".documents").offset().top;
    var toProducts = $(".products").offset().top;
    
    //adapt size
    $(window).resize(function(){
        
        toVideos = $(".videos").offset().top ;
        toDocuments = $(".documents").offset().top;
        toProducts = $(".products").offset().top;
    });
    
    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    console.log(toVideos);
    
    //nav underline
    if (scrollTop >= toVideos-80 && scrollTop < toDocuments-80) {
        $(".navWeb .nav li").css("border", "none");
        $(".navWeb .nav li:first").css("border-bottom", "solid 5px #1B365D");
    } else if (scrollTop >= toDocuments-80 && scrollTop < toProducts-80) {
        $(".navWeb .nav li").css("border", "none");
        $(".navWeb .nav li:nth-child(2)").css("border-bottom", "solid 5px #1B365D");
    } else if (scrollTop >= toProducts-80) {
        $(".navWeb .nav li").css("border", "none");
        $(".navWeb .nav li:last").css("border-bottom", "solid 5px #1B365D");
    } else {
        $(".navWeb .nav li").css("border", "none");
    }
    
    //navmobil
    if (scrollTop >= toVideos-100 && scrollTop < toDocuments-100) {
        $(".logoVideos").removeClass("colorNormal");
        $(".logoVideos").addClass("colorHighlight");
        $(".navMobil .logoVideos img").attr("src","img/SVG/btn-videos.svg")
    }else{
        $(".logoVideos").removeClass("colorHighlight");
        $(".logoVideos").addClass("colorNormal");
        $(".navMobil .logoVideos img").attr("src","img/SVG/btn-videos-negative.svg")
    }
    if (scrollTop >= toDocuments-100 && scrollTop < toProducts-100){
        $(".logoDocuments").removeClass("colorNormal");
        $(".logoDocuments").addClass("colorHighlight");
        $(".navMobil .logoDocuments img").attr("src","img/SVG/btn-tools-documents.svg")

    }else{
        $(".logoDocuments").removeClass("colorHighlight");
        $(".logoDocuments").addClass("colorNormal");
        $(".navMobil .logoDocuments img").attr("src","img/SVG/btn-tools-documents-negative.svg")

    }
    if (scrollTop >= toProducts-100) {
        $(".logoProducts").removeClass("colorNormal");
        $(".logoProducts").addClass("colorHighlight");
        $(".navMobil .logoProducts img").attr("src","img/SVG/btn-other-products.svg")
    
    }else{
        $(".logoProducts").removeClass("colorHighlight");
        $(".logoProducts").addClass("colorNormal");
        $(".navMobil .logoProducts img").attr("src","img/SVG/btn-other-products-negative.svg")
    
    }

    //MENU DESKTOP position:fixed
    var headerH = $(".header").height();
    if(scrollTop > headerH){
        $(".navWeb").css("position","fixed");
    }else{
        $(".navWeb").css("position","relative");
    }
})

$(window).ready(function () {
    
//2 languageBox
    $(".languageBoxWrap").hide();
    $(".language").click(function () {
        if ($(".languageBoxWrap").is(":hidden")) {
            $(".languageBoxWrap").slideDown();
        } else {
            $(".languageBoxWrap").slideUp();
        }
        return false
        
    });
    $(":not(.language,.languageBoxWrap)").click(function () {
        if ($(".languageBoxWrap").is(":visible")) {
            $(".languageBoxWrap").slideUp();
        }
    });
    
    
//3 nav clickTo
    
    var toVideos = $(".videos").offset().top ;
    var toDocuments = $(".documents").offset().top;
    var toProducts = $(".products").offset().top;
    
    //adapt size
    $(window).resize(function(){
        
        toVideos = $(".videos").offset().top ;
        toDocuments = $(".documents").offset().top;
        toProducts = $(".products").offset().top;
    });
    
    //web clickTo(fixed)
    $(".nav li:first").click(function () {
        $('html,body').animate({scrollTop: toVideos-80}, 400);
        return false
    })
    $(".nav li:nth-child(2)").click(function () {
        $('html,body').animate({scrollTop: toDocuments-80}, 400);
        return false
    })
    $(".nav li:last").click(function () {
        $('html,body').animate({scrollTop: toProducts-80}, 400);
        return false
    })
    //mobil clickTo
    $(".logoVideos").click(function () {
        $('html,body').animate({scrollTop: toVideos-100}, 400);
        return false
    })
    $(".logoDocuments").click(function () {
        $('html,body').animate({scrollTop: toDocuments-100}, 400);
        return false
    })
    $(".logoProducts").click(function () {
        $('html,body').animate({scrollTop: toProducts-100}, 400);
        return false
    })
    

    
//5 return to top
    $(".UserHelp-seccion").click(function () {
        $('html,body').animate({scrollTop: 0}, 400);
        
    })
    
    
    
    $(".UserHelp-seccion-mobile").click(function () {
        $('html,body').animate({scrollTop: 0}, 400);

    })
    
//4 hover change mobil logos
    $(".navMobil .logoVideos")
        .mouseover(function () {
           $(".navMobil .logoVideos img").attr("src","img/SVG/btn-videos.svg")
        })
        .mouseout(function () {
            if($(".logoVideos").hasClass("colorNormal"))
                $(".navMobil .logoVideos img").attr("src","img/SVG/btn-videos-negative.svg")
        })
    
    
    $(".navMobil .logoDocuments")
        .mouseover(function () {
            $(".navMobil .logoDocuments img").attr("src","img/SVG/btn-tools-documents.svg")
        })
        .mouseout(function () {
            if($(".logoDocuments").hasClass("colorNormal"))
                $(".navMobil .logoDocuments img").attr("src","img/SVG/btn-tools-documents-negative.svg")
        })
    
    $(".navMobil .logoProducts")
        .mouseover(function () {
        $(".navMobil .logoProducts img").attr("src","img/SVG/btn-other-products.svg")
    })
        .mouseout(function () {
            if($(".logoProducts").hasClass("colorNormal"))
                $(".navMobil .logoProducts img").attr("src","img/SVG/btn-other-products-negative.svg")
        })
    
   })


