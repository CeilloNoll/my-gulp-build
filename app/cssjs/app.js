//    фиксирование шапки сайта при скролле
let scrollpos = window.scrollY;
const header = document.querySelector("header");
const header_height = header.offsetHeight;
const add_class_on_scroll = () => header.classList.add("header-fixed");
const remove_class_on_scroll = () => header.classList.remove("header-fixed");
window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos >= 210) {
        add_class_on_scroll()
    } else {
        remove_class_on_scroll()
    }
});

;(function ($) {
    // аттрибуты для внещних ссылок
    $('[target="_blank"]').attr('rel','noopener noreferrer');

    // фикс для яндекс метрики
    $('form:not(.-visor-no-click)').addClass('-visor-no-click');

    // маска для номера
    $('[type="tel"]').inputmask({
        'mask': '+7 999 999-99-99',
        'onincomplete': e => {
            e.target.value = '';
        }
    });

    // скролл к элементу
    $(".scroll-to").on("click", function (event) {
        $('.mobile-menu-btn.active').click();
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 300 мс
        $('body,html').animate({scrollTop: top - 100}, 300);
    });

    // закрытие меню при клике на оверлей
    $('.page-overlay').click(function () {
        $(this).fadeToggle();
        $('.mobile-menu-btn').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    });

    // открытие меню
    $('.mobile-menu-btn').click(function () {
        $('.mobile-menu-btn').toggleClass('active');
        $('.page-overlay').fadeToggle();
        $('.mobile-menu').toggleClass('active');
    });

    /*Цели метрики*/
    $(document).on('af_complete', function(event, response) {
        if (response.success) {
            var goal = response.form[0].getElementsByClassName('goalMetrika')[0].value;
            // eval('yaCounterXXXXXXX.reachGoal("'+goal+'")');
            // gtag('event', goal, {'event_category': 'category'});
            $.fancybox.close(); // закрываем fancybox после отправки
        }
    });

})(jQuery);