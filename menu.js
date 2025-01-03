const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .banner-navbar');


/* Функция Показать или скрыть мобильное меню */
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
/**************************************************************************/

/* Функция Выпадающего меню (dropdown) показывает или скрывает */
document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach((dropdown, index) => {
        // Находим соответствующий content по индексу или добавляем идентификаторы вручную
        const content = document.querySelectorAll('.content')[index];

        // При открытии dropdown добавляем класс adapted к конкретному content
        dropdown.addEventListener('shown.bs.dropdown', () => {
            content.classList.add('adapted');
        });
  
        // При закрытии dropdown убираем класс adapted только с текущего content
        dropdown.addEventListener('hidden.bs.dropdown', () => {
            content.classList.remove('adapted');
        });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
  
    dropdowns.forEach((dropdown) => {
        const observer = new MutationObserver(() => {
            // Удаляем атрибуты и стили, если они были добавлены
            dropdown.removeAttribute('style');
            dropdown.removeAttribute('data-popper-placement');
        });
  
        observer.observe(dropdown, {
            attributes: true,
            childList: true,
            subtree: true
        });
    });
  });
/**************************************************************************/

  /* Функция замены контейнера при действии входа и регистрации в мобильном меню */
  document.addEventListener("DOMContentLoaded", function () {
    const registerBox = document.querySelector(".register-box-items");
    const lang = document.querySelector("#languages");
    const bannerNavbar = document.querySelector(".banner-navbar");
    const originalContainer = document.querySelector(".menubtns-box"); // Исходный контейнер для возврата

    // Функция для перемещения элемента
    function moveRegisterBox() {
        if (window.innerWidth <= 991.9) {
            if (!bannerNavbar.contains(registerBox)) {
                bannerNavbar.appendChild(registerBox);
            }
        } else {
            if (!originalContainer.contains(registerBox)) {
                originalContainer.appendChild(registerBox);
            }
        }
    }

    // Вызов функции при загрузке страницы и изменении размера экрана
    moveRegisterBox();
    window.addEventListener("resize", moveRegisterBox);
});
/**************************************************************************/

// document.addEventListener('DOMContentLoaded', function () {
//     const menu = document.querySelector('#mainMenu'); // Главный контейнер меню
    
//     // Выбор пунктов меню
//     const home = menu.querySelector('.home'); // "Главная"
//     const panel = menu.querySelector('.dpanel-show'); // "Панель"
//     const companyDropdown = menu.querySelector('.ccc'); // "О компании"
//     const vehicles = menu.querySelector('a[href="cars.html"]'); // "Автомобили"
//     const pagesDropdown = menu.querySelector('.ppp'); // "Pages"
//     const contact = menu.querySelector('a[href="contact.html"]'); // "Контакты"
//     const languagesDropdown = menu.querySelector('.languages-sm'); // "Языки"
//     const accountDropdown = menu.querySelector('.acc'); // "Account"
//     const help = menu.querySelector('a[href="contact.html"][id="content-5"]'); // "Help & Faqs"
//     const logout = menu.querySelector('.logout-btn'); // "Logout"

//     // Проверяем, что элементы существуют
//     const items = [
//         home,
//         panel,
//         companyDropdown,
//         vehicles,
//         pagesDropdown,
//         contact,
//         languagesDropdown,
//         accountDropdown,
//         help,
//         logout,
//     ].filter(Boolean); // Убираем `null` элементы

//     // Функция перестановки пунктов меню
//     function rearrangeMenu() {
//         menu.innerHTML = ''; // Очищаем меню

//         if (window.innerWidth < 992) {
//             // При экране меньше чем 992px:
//             [
//                 home,
//                 panel,
//                 accountDropdown,
//                 companyDropdown,
//                 vehicles,
//                 pagesDropdown,
//                 contact,
//                 languagesDropdown,
//                 help,
//                 logout,
//             ].forEach((item) => {
//                 if (item) menu.appendChild(item); // Добавляем только существующие элементы
//             });
//         } else {
//             // При экране больше чем 992px:
//             [
//                 home,
//                 companyDropdown,
//                 vehicles,
//                 pagesDropdown,
//                 contact,
//                 languagesDropdown,
//                 panel,
//                 accountDropdown,
//                 help,
//                 logout,
//             ].forEach((item) => {
//                 if (item) menu.appendChild(item); // Добавляем только существующие элементы
//             });
//         }
//     }

//     // Вызываем при загрузке и при изменении размера экрана
//     rearrangeMenu();
//     window.addEventListener('resize', rearrangeMenu);
// });








