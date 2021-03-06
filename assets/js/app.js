// document.addEventListener('DOMContentLoaded', function() {
const typedHeading = new Typed('.jumbotron-heading', {
  strings: ['Engineer.  Producer.  Musician.'],
  typeSpeed: 100,
  startDelay: 1000,
  loop: false,
});

const $bookingModal = $('#bookingModal');
const $bookingForm = $('#booking-form');
const $workAlbum = $('.album');
const $workButton = $('#work-button');

$workAlbum.hide();

function getWorkBtnText() {
  let isClicked = $workButton.hasClass('clicked');
  let btnText = isClicked ? 'Back' : 'Work';
  return btnText;
}

$workButton.text(getWorkBtnText());

$workButton.on('click', function () {
  $workButton.toggleClass('clicked');
  $workButton.text(getWorkBtnText());
  $('#landing-page').toggleClass('work');
  if (getWorkBtnText() === 'Work') {
    $workAlbum.hide();
  } else {
    $workAlbum.show();
  }
});

$bookingForm.submit(function (event) {
  event.preventDefault();

  const $firstName = $('#firstName').val();
  const $lastName = $('#lastName').val();
  const $email = $('#email').val();
  const $startDate = $('#startDate').val();
  const $endDate = $('#endDate').val();
  const $proposalText = $('#proposalText').val();

  const subject = 'New Session Booking';
  const to_email = 'jrrlokken@gmail.com';
  const body = `Booking proposal from ${$firstName} ${$lastName}:
     Proposed booking dates: ${$startDate} - ${$endDate}
     Email address: ${$email}

     ${$proposalText}
    `;

  window.location.href = `mailto:${to_email}?subject=${subject}&body=${body}`;
  // console.log($firstName, $lastName, $email);

  $bookingModal.modal('hide');
  $bookingForm.trigger('reset');
});

// });
