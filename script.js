/* =========================================
   ODONTO PRIME
   SCRIPT.JS
========================================= */


/* =========================================
   CONFIGURAÇÃO DO WHATSAPP
========================================= */

const whatsappNumber = "5551999999999";

const whatsappMessage = encodeURIComponent(
    "Olá! Vim pelo site da Odonto Prime e gostaria de saber mais sobre uma avaliação."
);


/* =========================================
   ATUALIZA TODOS OS LINKS DO WHATSAPP
========================================= */

document
    .querySelectorAll('a[href*="wa.me"]')
    .forEach(link => {

        link.href =
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    });


/* =========================================
   FAQ
========================================= */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const item =
            question.parentElement;

        const answer =
            item.querySelector(".faq-answer");

        const isActive =
            item.classList.contains("active");


        /*
         * Fecha todos os outros FAQs
         */

        document
            .querySelectorAll(".faq-item")
            .forEach(otherItem => {

                otherItem.classList.remove("active");

                const otherAnswer =
                    otherItem.querySelector(".faq-answer");

                otherAnswer.style.maxHeight = null;

            });


        /*
         * Abre o FAQ clicado
         */

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* =========================================
   ANIMAÇÃO AO ROLAR A PÁGINA
========================================= */

const fadeElements =
    document.querySelectorAll(".fade");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


fadeElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   HEADER AO ROLAR
========================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================
   ANO AUTOMÁTICO DO FOOTER
========================================= */

const footerBottom =
    document.querySelector(".footer-bottom");


if (footerBottom) {

    footerBottom.innerHTML =
        `© ${new Date().getFullYear()} Odonto Prime — Projeto demonstrativo.`;

  }
