//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation
$("#menu").find("a").each(function(idx,elem){
  var $option = $("<option></option>");
  var link = $(elem).attr("href");
  var content = $(elem).html();
  $option.attr("value",link);
  $option.html(content);
  console.log($option);
  $("#mobile-menu").append($option);
});
/*var optionHTML = `<option value="${$(elem).attr("href")}"> ${$(elem).html()}</option>`;
$("mobile-menu").append(optionHTML); --- otra forma de hacerlo*/
$("#mobile-menu").on("change", function(){
  window.location = $(this).val();
});

$(window).on("resize load", function(){
  if(window.innerWidth > 768){
    $("#mobile-menu").hide();
    $("#menu ul").show();
  }else{
    $("#mobile-menu").show();
    $("#menu ul").hide();
  }
});

$(window).on("load", function(){
  var arr = window.location.href.split("/");
  var filename = arr[arr.length-1];
  $("#mobile-menu").val(filename);
});
