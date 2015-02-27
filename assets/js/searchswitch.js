$(document).ready(function () {
    $('.menu li a').click(function(e) {

        $('.menu li').removeClass('active');
        
        var action
        
        switch(this.id) {
        	case "searchby_img":
        		action = "https://www.google.com/images";
        		break;
        	case "searchby_vid":
        		action = "https://www.youtube.com/results";
        		break;	
        	case "searchby_shop":
        		action = "https://www.google.com/shopping";
        		break;
        	case "searchby_news":
        		action = "https://news.google.com/news/search";
        		break;
        	default:
        		action = "https://www.google.com/search";
        		break;
        }

        var $parent = $(this).parent();
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
            document.getElementById("search_box").action = action;
        }
	e.preventDefault();
    	});
});
