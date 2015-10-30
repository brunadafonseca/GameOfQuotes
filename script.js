mySite = "http://bit.ly/1SaiSpL";

$(function () {
    $('q, p').hide();
    $(".my-btn").on("click", function() {
        $(this).blur();
        var $q = $('.quotes div q'); //Select only the hidden one
        var randomize = Math.floor(Math.random() * $q.length); //Use only those hidden, remove the 1 since we are now on a 0-based index
        $('.quotes div q, p.author').hide();
        $q.eq(randomize).show(); //Use eq on the hidden q
        $q.eq(randomize).siblings("p").show();
        txtShare = $('q:visible').text() + " " + $('p:visible').text();
      }).click();
  }); 