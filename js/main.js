Fancybox.bind("[data-fancybox]", {
  Thumbs: false,
});

$(".burger-menu").click(function () {
  $(".header-nav").toggleClass("active");
});
$(".header .close").click(function () {
  $(".header-nav").toggleClass("active");
});

$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 50) {
    header.addClass("scroll");
  } else {
    header.removeClass("scroll");
  }
});

$(window).on("scroll", function () {
  var rotation = $(this).scrollTop() / 5;
  $(".rotating-image").css("transform", "rotate(" + rotation + "deg)");
});
$(document).ready(function () {
  const filters = $(".career-filter");
  const steps = $(".career-step-item");

  filters.on("click", function () {
    const target = $(this).data("filter");

    filters.removeClass("active");
    $(this).addClass("active");

    steps.each(function () {
      const step = $(this);
      if (step.data("step") === target) {
        step.addClass("active");
      } else {
        step.removeClass("active");
      }
    });
  });
});

$(document).ready(function () {
  function checkVisibility() {
    $(".skill-item").each(function () {
      var skillItem = $(this);
      if (skillItem.hasClass("animated")) {
        return;
      }
      var rangeValue = skillItem.find(".range").text().trim().replace("%", "");
      var scaleElement = skillItem.find(".scale");
      var totalWidth = scaleElement.width();
      var widthInPixels = totalWidth * (rangeValue / 100) + 16;
      var rect = skillItem[0].getBoundingClientRect();
      var windowHeight = $(window).height();
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        skillItem.find(".scale-range").css("width", widthInPixels + "px");
        skillItem.addClass("animated");
      }
    });
  }
  $(window).on("scroll resize", checkVisibility);
  checkVisibility();
});

$(document).ready(function () {
  let counterShown = false;

  $(window).on("scroll", function () {
    if (!counterShown && isScrolledIntoView($(".count"))) {
      $(".count").each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate(
          { Counter: $this.text().replace(/\D/g, "") },
          {
            duration: 2000,
            easing: "swing",
            step: function () {
              $this.text(Math.ceil(this.Counter));
            },
          }
        );
      });

      counterShown = true;
    }
  });

  function isScrolledIntoView($elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height() - 0;
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return elemTop <= docViewBottom && elemBottom >= docViewTop;
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $(".to-top").fadeIn();
  } else {
    $(".to-top").fadeOut();
  }
});
//-----------------------SLIDERS-----------------------//
if ($(window).width() <= 768) {
  $(".carrer-steps").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".career").find(".prev"),
    nextArrow: $(".career").find(".next"),
  });
}

$(".videos-list").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $(".videos").find(".prev"),
  nextArrow: $(".videos").find(".next"),
  dots: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".feedback-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $(".feedback").find(".prev"),
  nextArrow: $(".feedback").find(".next"),
});
