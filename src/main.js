import "./style.css";

const WA = "966502372866";

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
btn?.addEventListener("click", () => menu?.classList.toggle("hidden"));
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => menu.classList.add("hidden")));

// consultation form -> WhatsApp message
const form = document.querySelector("[data-consult-form]");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(form);
  const text =
    `السلام عليكم أستاذ حمزة،\n` +
    `أرغب في طلب استشارة قانونية.\n\n` +
    `الاسم: ${d.get("name")}\n` +
    `الجوال: ${d.get("phone")}\n` +
    `نوع القضية: ${d.get("type")}\n` +
    `التفاصيل: ${d.get("details") || "-"}`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`, "_blank");
});

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
