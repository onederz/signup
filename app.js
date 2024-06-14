
$(function () {
    $("#datepicker").datepicker({
        beforeShowDay: function (d) {
            var day = d.getDay();
            return [day != 0 && day != 2 && day != 3 && day != 4 && day != 6 && day != 6];
        },
        
    });
});

$(function () {
    $("#datepicker2").datepicker({
        beforeShowDay: function (d) {
            var day = d.getDay();
            return [day != 1 && day != 2 && day != 4 && day != 5 && day != 6];
        },
        
    });
});

$(function () {
    $("#datepicker3").datepicker({
        beforeShowDay: function (d) {
            var day = d.getDay();
            return [day != 1 && day != 2 && day != 4 && day != 5 && day != 6];
        },
        
    });
});

$(function() {
    $('#select').change(function(){
      $('.hidden_div').hide();
      $('#' + $(this).val()).show();
    });
  });