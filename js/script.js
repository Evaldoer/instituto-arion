window.addEventListener("scroll", function() {
    const elementos = document.querySelectorAll(".conteudo h2");

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});