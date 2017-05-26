(function($, HelloWorldDevsTysonSteele) {

  // ======= Fixes =======
  HelloWorldDevsTysonSteele.noOrphans('h1,h2,h3,h4,h5,h6,li,p', '.allow-orphan');
  HelloWorldDevsTysonSteele.scrollToFix('#primary-menu');
  HelloWorldDevsTysonSteele.stopVideoModal('#video-modal', '#video-iframe');

  // ======= Request Appointment Form =======
  HelloWorldDevsTysonSteele.requestAppointment('#mail-form', '#success_msg' , '7fb35345-752d-4792-9480-cd3db6674a62');

  // ======= Carousels =======
  HelloWorldDevsTysonSteele.marqueeCarousel({
    autoplay: 6000,
    effect: 'fade',
    speed: 500
  });
  // HelloWorldDevsTysonSteele.tourCarousel('.js-tour-carousel', {
  //   items: 1,
  //   navText: [
  //     '<i class="icon-chevron-left"></i>',
  //     '<i class="icon-chevron-right"></i>'
  //   ]
  // });
  //

  HelloWorldDevsTysonSteele.pyramidCarousel('.js-team-carousel', {
    items: 2,
    navText: [
      '<img src="assets/team-arrow-left.png">',
      '<img src="assets/team-arrow-right.png">'
    ],
    responsive: {
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    },
    margin: 10
  });
  HelloWorldDevsTysonSteele.updateCopyright('.js-copyright-year');

  // Remove last name from team cards
  $('.team-card__title').each(function() {
    var firstWord = $(this).text().split(' ');
    $(this).text(firstWord[0]);
  });

  // ======= Google Maps =======
  HelloWorldDevsTysonSteele.googleMap('#google-map5', '33.6392813,-111.8949859', '33.6392813,-111.8949859');


}(jQuery, HelloWorldDevsTysonSteele));

