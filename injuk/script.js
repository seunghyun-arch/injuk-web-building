const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('show');
});

const closeMenu = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
};

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);