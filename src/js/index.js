// Select
$(".select").each(function () {
  const _this = $(this),
    selectOption = _this.find("option"),
    selectOptionLength = selectOption.length,
    selectedOption = selectOption.filter(":selected"),
    duration = 450; // длительность анимации

  _this.hide();
  _this.wrap('<div class="select"></div>');
  $("<div>", {
    class: "new-select",
    text: _this.children("option:disabled").text(),
  }).insertAfter(_this);

  const selectHead = _this.next(".new-select");
  $("<div>", {
    class: "new-select__list",
  }).insertAfter(selectHead);

  const selectList = selectHead.next(".new-select__list");
  for (let i = 1; i < selectOptionLength; i++) {
    $("<div>", {
      class: "new-select__item",
      html: $("<span>", {
        text: selectOption.eq(i).text(),
      }),
    })
      .attr("data-value", selectOption.eq(i).val())
      .appendTo(selectList);
  }

  const selectItem = selectList.find(".new-select__item");
  selectList.slideUp(0);
  selectHead.on("click", function () {
    if (!$(this).hasClass("on")) {
      $(this).addClass("on");
      selectList.slideDown(duration);

      selectItem.on("click", function () {
        let chooseItem = $(this).data("value");

        $("select").val(chooseItem).attr("selected", "selected");
        selectHead.text($(this).find("span").text());

        selectList.slideUp(duration);
        selectHead.removeClass("on");
      });
    } else {
      $(this).removeClass("on");
      selectList.slideUp(duration);
    }
  });
});
// Select

// Swiper-sliders
var swiper = new Swiper(".portfolio-slider", {
  slidesPerView: 3,
  spaceBetween: 39,
  pagination: {
    el: ".portfolio-slider-pag",
  },
  navigation: {
    nextEl: ".portfolio-slider-next",
    prevEl: ".portfolio-slider-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 24 },
    500: { slidesPerView: 2, spaceBetween: 24 },
    768: { slidesPerView: 3, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 39 },
  },
});
var swiper2 = new Swiper(".brand-slider", {
  slidesPerView: 3,
  spaceBetween: 39,
  loop: true,
  pagination: {
    el: ".brand-slider-pag",
  },
  navigation: {
    nextEl: ".brand-slider-next",
    prevEl: ".brand-slider-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 24, centeredSlides: true },
    500: { slidesPerView: 3, spaceBetween: 24, centeredSlides: true },
    768: { slidesPerView: 4, spaceBetween: 40, centeredSlides: false },
    1024: { slidesPerView: 6, spaceBetween: 40, centeredSlides: false },
  },
});
// Swiper-sliders

// Accordion
$(document).ready(function () {
  $(".panel-heading").click(function () {
    $(this).toggleClass("in").next().slideToggle();
  });
});
// Accordion
