$(document).ready(function () {
  var tabsItem = $('.tabs__item');
  var contentItem = $('.hero-content');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr('data-target');
    tabsItem.removeClass('tabs__item--active');
    contentItem.removeClass('hero-content--active');
    $(activeContent).addClass('hero-content--active');
    $(this).addClass('tabs__item--active');
  });
});