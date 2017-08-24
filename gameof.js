$(document).ready(function(){
    
    $('#stark').click(function(){
        $.get("https://anapioficeandfire.com/api/houses/362/", function(res){
            var starkinfo = ""
            starkinfo += "<h2>Name: </h2>" + res.name
            starkinfo += "<h2>Words: </h2>" +res.words
            starkinfo += "<h2>Titles: </h2>" +res.titles
         $('#housedetails').empty().append(starkinfo)
         }, 'json')
    });

    $('#baratheon').click(function(){
        $.get("https://anapioficeandfire.com/api/houses/17/", function(res){
            var baratheoninfo = ""
            baratheoninfo += "<h2>Name: </h2>" + res.name
            baratheoninfo += "<h2>Words: </h2>" +res.words
            baratheoninfo += "<h2>Titles: </h2>" +res.titles
            $('#housedetails').empty().append(baratheoninfo)
        }, 'json')
    })
    
    $('#lannister').click(function(){
        $.get("https://anapioficeandfire.com/api/houses/229/", function(res){
            var lannisterinfo = ""
            lannisterinfo += "<h2>Name: </h2>" + res.name
            lannisterinfo += "<h2>Words: </h2>" +res.words
            lannisterinfo += "<h2>Titles: </h2>" +res.titles
            $('#housedetails').empty().append(lannisterinfo)
        }, 'json')
    })

    $('#targaryen').click(function(){
        $.get("https://anapioficeandfire.com/api/houses/378/", function(res){
            var targaryeninfo = ""
            targaryeninfo += "<h2>Name: </h2>" + res.name
            targaryeninfo += "<h2>Words: </h2>" +res.words
            targaryeninfo += "<h2>Titles: </h2>" +res.titles
            $('#housedetails').empty().append(targaryeninfo)
        }, 'json')
    })

});