document.addEventListener('DOMContentLoaded', function() {

    var reservation_form = this.getElementById('reservationForm')
    var contact_form = document.getElementById('messageForm');
  
    contact_form.addEventListener('submit', function(event) {

      event.preventDefault();
  
      var isConfirmed = window.confirm('Are you sure you want to submit the form?');
  
      if (isConfirmed) {

        contact_form.submit();
        window.location.href = "confirmation.html";
      }
    });
  });
  