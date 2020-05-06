// document.addEventListener('DOMContentLoaded', function() {

const typedHeading = new Typed(".jumbotron-heading", {
  strings: ["Engineer.  Producer.  Musician."],
  typeSpeed: 100,
  startDelay: 1000,
  loop: false,
});

const $bookingModal = $("#bookingModal");
const $workAlbum = $(".album");
const $workButton = $("#work-button");

$workAlbum.hide();

$workButton.on("click", function () {
  $("#landing-page").addClass("work");
  $workAlbum.show();
});

$bookingModal.submit(function (event) {
  event.preventDefault();

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const startDate = $("#startDate").val();
  const endDate = $("#endDate").val();
  const text = $("#proposalText").val();

  const subject = "New Session Booking";
  const to_email = "jrrlokken@gmail.com";
  const body = `Booking proposal received from ${firstName} ${lastName} - ${email}:
     Proposed booking dates: ${startDate} - ${endDate}
     ${proposalText}
    `;

  // window.location.href =
  //   "mailto:" + to_email + "?subject=" + subject + "&body=" + body;
  console.log(firstName, lastName, email);

  $bookingModal.modal("hide");
});
// });
