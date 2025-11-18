// Alternar Modo Escuro
const toggle = document.getElementById('dark-toggle');

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Trocar ícone conforme o modo ativo
    if (document.body.classList.contains('dark')) {
        toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});
