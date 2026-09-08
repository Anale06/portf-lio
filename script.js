// Configuração com o seu número do Acre (DDD 68)
const WHATSAPP_NUMERO = "556899675679";

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

  // 2. Clique nos cards de cookie para pedir direto aquele sabor no WhatsApp
  const cookieCards = document.querySelectorAll(".cookie-card");
  cookieCards.forEach(card => {
    card.style.cursor = "pointer";
    card.setAttribute("title", "Clique para encomendar este cookie no WhatsApp!");

    card.addEventListener("click", () => {
      const nomeCookie = card.querySelector("h3") ? card.querySelector("h3").innerText : "Cookie";
      const mensagem = encodeURIComponent(`Olá, Ana Letícia! Vi no seu site e gostaria de encomendar o cookie: *${nomeCookie}*! 🍪`);
      const linkWhatsApp = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
      window.open(linkWhatsApp, "_blank");
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