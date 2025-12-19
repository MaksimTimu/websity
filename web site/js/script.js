// Функция для переключения видимости страниц
function showPage(pageId) {
    // Скрываем все страницы
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('page-section--active');
    });
    // Показываем нужную страницу
    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) {
        targetSection.classList.add('page-section--active');
    }
    // Прокручиваем наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Обработчик кликов по ссылкам навигации (включая логотип)
document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const page = e.currentTarget.dataset.page; // Получаем ID целевой страницы
        showPage(page); // Показываем страницу
        closeMobileMenu(); // Закрываем мобильное меню после перехода
    });
});

const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

function openMobileMenu() {
    mobileMenu.classList.add('mobile-menu--active');
    burger.classList.add('burger--active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('mobile-menu--active');
    burger.classList.remove('burger--active');
    document.body.style.overflow = '';
}

burger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        closeMobileMenu();
    }
});

// Обработчик формы заказа
document.getElementById('orderForm')?.addEventListener('submit', e => {
    e.preventDefault(); // Отменяем стандартную отправку формы

    // Показываем сообщение об успешном заказе
    alert('Ваш заказ успешно оформлен!');

    // Сбрасываем форму
    e.target.reset();

    // Закрываем мобильное меню, если оно было открыто
    closeMobileMenu();
});