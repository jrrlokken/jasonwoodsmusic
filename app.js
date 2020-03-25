// document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', handleCardClick);
}

function handleCardClick(event) {
  if (!event.target.classList.contains('front')) return;
  let currentCard = event.target.parentElement;
  console.log(currentCard);
  // currentCard.classList.add('flipped');
}
// });
