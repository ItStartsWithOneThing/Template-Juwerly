$(function(){

$('.occasion-menu__item-link').on('click', function(e){
    e.preventDefault();

    $('.occasion-menu__item-link').removeClass('occasion-menu__item-link--active');

    $(this).addClass('occasion-menu__item-link--active');

    $('.items-menu').removeClass('items-menu--active');

    $($(this).attr('href')).addClass('items-menu--active');
})

$('.menu-btn').on('click', function(e){
    $('.drop-down__menu').toggleClass('active');
    $('.menu-cross').toggleClass('active');
    $(this).toggleClass('active');
});

$('.menu-cross').on('click', function(e){
    $('.drop-down__menu').toggleClass('active');
    $('.menu-cross').toggleClass('active');
    $('.menu-btn').toggleClass('active');
});

});