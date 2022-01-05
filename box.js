$(document).ready(function(){
    var img = [
        {"pic":"1.jpg","title":"Wallpaper1"},
        {"pic":"2.jpg","title":"Wallpaper2"},
        {"pic":"3.jpg","title":"Wallpaper3"},
        {"pic":"4.jpg","title":"Wallpaper4"},
    ];
    
getbox();
function getbox(){
    var txt = '';
for(i in img)
{
txt += '<div class="box"><div class="img-box"><img src="'+img[i]["pic"]+'"></div></div>' ;
}
$('.container').html(txt);
}
});