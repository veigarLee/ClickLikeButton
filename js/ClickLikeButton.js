var filterArray = new Array();
filterArray.push("https://www.douban.com/people/electronic/");
filterArray.push("https://www.douban.com/people/135929971/");




var pTimeout = window.setTimeout(
    function ()
    {

        //window.location = "https://www.douban.com";
        var index = Number(window.location.href.lastIndexOf("?p="));
        if (index === -1 )
        {
            window.location.href += "?p=1";
            return;
        }


        var pageNum = window.location.href.toString().substring(index +3);
        pageNum = Number(pageNum);
        pageNum++;


        var allLikeButtons = window.document.getElementsByClassName("btn-key-like");

        var likeButtons = new Array();
        for (var i = 0 ; i < allLikeButtons.length ; i++)
        {
            var likeAttribute =  allLikeButtons[i].getAttribute("data-action-type");
            if(likeAttribute == "like")
            {
                likeButtons.push(allLikeButtons[i]);
            }
        }

        var filterItemCount = 0;
        for (var i = 0 ; i < likeButtons.length ; i++)
        {
            var id = likeButtons[i].getAttribute("href").substring(0,likeButtons[i].getAttribute("href").lastIndexOf("/status/")+1)
            if (filterArray.includes(id) ===false )
            {
                likeButtons[i].click();
            }
            else
            {
                filterItemCount ++;
            }
        }

        if(likeButtons.length - filterItemCount === 0 )
        {
            window.setTimeout(function (){
                    window.location = window.location.href.toString().substring(0,index +3) + "1";
                }
                ,1000);
            return
        }


        window.setTimeout(
            function ()
            {
                window.location = window.location.href.toString().substring(0,index +3) + pageNum;
            }
            ,1000);


    }

    ,19000)
