 const scriptURL = 'https://script.google.com/macros/s/AKfycbwPHcUmaGggLmWq9I4v3X1Xe0tfSvqIAlRM_HLhMEm7ncd3fBDQ9tVM99_UG_F01wcXNA/exec'

  const form = document.forms['contact-form']
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! your form is submitted successfully." ))
    .then()
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })

  $(document).ready(function(){
    $("button").click(function(){
      $("#submit").hide();
    });
  });

  $(function() {
    $('#select').change(function(){
      $('.hidden_div').hide();
      $('.' + $(this).val()).show();
    });
  });
