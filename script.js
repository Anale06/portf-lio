// Número oficial da Ana Letícia atualizado: (68) 99606-4178
const WHATSAPP_NUMERO = "5568996064178";

document.addEventListener("DOMContentLoaded", () => {
  // 1. Rolagem suave para os links do menu
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 2. Clique no card do cookie abre o WhatsApp direto com o sabor escolhido
  const cookieCards = document.querySelectorAll(".cookie-card");
  cookieCards.forEach(card => {
    card.style.cursor = "pointer";
    card.setAttribute("title", "Clique para pedir este cookie no WhatsApp!");

    card.addEventListener("click", () => {
      const nomeCookie = card.querySelector("h3") ? card.querySelector("h3").innerText : "Cookie";
      const mensagem = encodeURIComponent(`Olá, Ana Letícia! Vi no site e gostaria de encomendar o cookie: *${nomeCookie}*! 🍪`);
      window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
    });
  });

  // 3. Efeito suave ao passar o mouse sobre os cookies
  cookieCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-6px)";
      card.style.transition = "transform 0.25s ease";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0)";
    });
  });
});