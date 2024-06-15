
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

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwPHcUmaGggLmWq9I4v3X1Xe0tfSvqIAlRM_HLhMEm7ncd3fBDQ9tVM99_UG_F01wcXNA/exec'

  const form = document.forms['contact-form']
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
