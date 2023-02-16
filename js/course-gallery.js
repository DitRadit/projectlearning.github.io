$(document).ready(function() {
  // NAVBAR
    $(window).on("scroll",function () {
        if($(this).scrollTop() > 90 ){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    });

//COURSE GALLERY
const searchInput = document.getElementById('search-input');
const filterAll = document.getElementById('filter-all');
const filterCategory1 = document.getElementById('filter-category1');
const filterCategory2 = document.getElementById('filter-category2');
const filterCategory3 = document.getElementById('filter-category3');
const cardRow = document.getElementById('card-row');

// Search function
searchInput.addEventListener('input', () => {
  const searchQuery = searchInput.value.toLowerCase();
  const cards = cardRow.querySelectorAll('.filter-item');

  cards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const text = card.querySelector('.card-text').textContent.toLowerCase();

    if (title.includes(searchQuery) || text.includes(searchQuery)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});


filterAll.addEventListener('click', () => {
  const cards = cardRow.querySelectorAll('.filter-item');

  cards.forEach(card => {
    card.style.display = 'block';
  });

  filterAll.classList.add('active');
  filterCategory1.classList.remove('active');
  filterCategory2.classList.remove('active');
  filterCategory3.classList.remove('active');
});

filterCategory1.addEventListener('click', () => {
  const cards = cardRow.querySelectorAll('.filter-item');

  cards.forEach(card => {
    if (card.getAttribute('data-category') === 'category1') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterAll.classList.remove('active');
  filterCategory1.classList.add('active');
  filterCategory2.classList.remove('active');
  filterCategory3.classList.remove('active');
});

filterCategory2.addEventListener('click', () => {
  const cards = cardRow.querySelectorAll('.filter-item');

  cards.forEach(card => {
    if (card.getAttribute('data-category') === 'category2') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterAll.classList.remove('active');
  filterCategory1.classList.remove('active');
  filterCategory2.classList.add('active');
  filterCategory3.classList.remove('active');
});

filterCategory3.addEventListener('click', () => {
  const cards = cardRow.querySelectorAll('.filter-item');

  cards.forEach(card => {
    if (card.getAttribute('data-category') === 'category3') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });

  filterAll.classList.remove('active');
  filterCategory1.classList.remove('active');
  filterCategory2.classList.remove('active');
  filterCategory3.classList.add('active');
});

});
