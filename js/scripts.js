var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

$(function() {
  $("form").submit(function() {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    if (!result) {
      $('.not').text("not");
    } else {
      $('.not').text("");
    }

    $('.year').text(year);
    $("#result").show();
    event.preventDefault();
  });
});
