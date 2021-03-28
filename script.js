// Navbar Show
const documentHTML = $(document);
let scrollAwal = 0;
const navbar = $('nav');
documentHTML.on('scroll', () => {
  let currentScroll = documentHTML.scrollTop();
  if (currentScroll > scrollAwal) {
    navbar.addClass('show');
  } else {
    navbar.removeClass('show');
  }
});

// Menu OnActive
$('.menu ul li').on('click', (e) => {
  $.each($('.menu ul li'), (index, link) => {
    link.classList.remove('active');
  });
  e.target.classList.add('active');
});

// Menu Icon

$('.menu-icon').on('click', (icon) => {
  if (icon.target.classList.value === 'far fa-bars') {
    icon.target.remove();
    $('.menu-icon').append(`<i class="far fa-times"></i>`);
    $('.menu ul').addClass('show');
  } else {
    icon.target.remove();
    $('.menu-icon').append(`<i class="far fa-bars"></i>`);
    $('.menu ul').removeClass('show');
  }
});
