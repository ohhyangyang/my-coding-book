$(function () {
    
        $("a").click(function () {
            var pageTitle = sessionStorage.getItem('title');
            //alert(title) 成功
            var urlTitle;
            switch (pageTitle) {
                case "Preparing the load":
                    urlTitle = "1_Preparing-the-load";
                    break;
                case "Loading the sterilizer":
                    urlTitle = "2_Loading-the-sterilizer";
                    break;
                case "Performing a cycle":
                    urlTitle = "3_Performing-a-cycle";
                    break;
                case "Releasing the load":
                    urlTitle = "4_Releasing-the-load";
                    break;
                case "Blukat® replacement":
                    urlTitle = "5_Blukat-replacement";
                    break;
            }
            //alert(urlTitle); 成功
            var lan = $(this).parent().attr("class");
            var urlLan = "_en";
            switch (lan) {
                case "English":
                    urlLan = "_en";
                    break;
                case "Spanish":
                    urlLan = "_es";
                    break;
                case "French":
                    urlLan = "_fr";
                    break;
                case "German":
                    urlLan = "_de";
                    break;
                case "Portuguese":
                    urlLan = "_pt";
                    break;
                case "Russian":
                    urlLan = "_ru";
                    break;
    
            }
            if(!urlLan==""&&!urlTitle==""){
                var href = "https://www.matachana.com/User-Help-Tools/HPO/"+urlTitle+urlLan+".html";
            }else{
                href = "";
            }
            
            alert("href="+href)
            //sessionStorage.removeItem('href');
            window.open(href);
            //sessionStorage.setItem('href', href);
        })
    
    
    //https://www.matachana.com/User-Help-Tools/HPO/1_Preparing-the-load_en.html
    
    
})


