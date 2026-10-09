"use strict";

(function () {
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const nav = window.__NAV || [];
  const quoteUrl = window.__COTIZAR || "cotizar.html";

  function openWhatsApp(number, message) {
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function initHeader() {
    const header = document.querySelector("#optimized-header");
    if (!header) return;
    const update = () => {
      const scrolled = window.scrollY > 20;
      header.classList.toggle("bg-brand-blue-500/95", scrolled);
      header.classList.toggle("shadow-elevated", scrolled);
      header.classList.toggle("border-white/10", scrolled);
      header.classList.toggle("backdrop-blur-md", scrolled);
      header.classList.toggle("py-2.5", scrolled);
      header.classList.toggle("bg-brand-blue-500", !scrolled);
      header.classList.toggle("border-transparent", !scrolled);
      header.classList.toggle("py-4", !scrolled);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  function initDesktopMenus() {
    const root = document.querySelector("#desktop-nav-opt");
    if (!root) return;
    [...root.children].forEach((item, index) => {
      const entry = nav[index];
      const trigger = item.querySelector("button");
      if (!entry?.items || !trigger) return;
      const menu = document.createElement("div");
      menu.className = "absolute left-0 mt-2 w-64 bg-brand-blue-500 rounded-2xl shadow-2xl border border-white/15 py-2.5 text-white overflow-hidden z-50 hidden";
      entry.items.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.className = "block px-4 py-2.5 rounded-xl transition-colors hover:bg-white/10 text-white hover:text-brand-yellow-500";
        anchor.textContent = link.label;
        menu.appendChild(anchor);
      });
      item.appendChild(menu);
      const setOpen = (open) => {
        menu.classList.toggle("hidden", !open);
        trigger.setAttribute("aria-expanded", String(open));
      };
      trigger.addEventListener("click", () => setOpen(menu.classList.contains("hidden")));
      item.addEventListener("mouseenter", () => setOpen(true));
      item.addEventListener("mouseleave", () => setOpen(false));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          setOpen(false);
          trigger.focus();
        }
      });
    });
  }

  function initMobileMenu() {
    const toggle = document.querySelector("#mobile-menu-toggle-opt");
    if (!toggle) return;
    let overlay;
    let dialog;
    let isOpen = false;
    const original = toggle.innerHTML;

    function close() {
      if (!isOpen) return;
      isOpen = false;
      overlay.remove();
      dialog.remove();
      document.body.style.overflow = "";
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
      toggle.innerHTML = original;
      toggle.focus();
    }

    function open() {
      if (isOpen) return;
      isOpen = true;
      overlay = document.createElement("div");
      overlay.className = "fixed inset-0 bg-brand-blue-500/70 backdrop-blur-md z-99";
      dialog = document.createElement("div");
      dialog.id = "mobile-navigation-dialog";
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-modal", "true");
      dialog.setAttribute("aria-label", "Menú principal");
      dialog.className = "fixed top-0 right-0 bottom-0 z-100 flex flex-col w-full max-w-[320px] h-dvh bg-brand-blue-500 shadow-2xl border-l border-white/10 lg:hidden overflow-y-auto p-5 text-white";
      const closeButton = document.createElement("button");
      closeButton.type = "button";
      closeButton.className = "self-end p-3 rounded-xl bg-white/10 mb-4";
      closeButton.textContent = "Cerrar menú";
      closeButton.addEventListener("click", close);
      dialog.appendChild(closeButton);
      const menu = document.createElement("nav");
      menu.className = "flex flex-col gap-3";
      nav.forEach((entry) => {
        if (entry.href) {
          const link = document.createElement("a");
          link.href = entry.href;
          link.className = "py-3 px-2 text-xl font-subheading uppercase text-white hover:text-brand-yellow-500";
          link.textContent = entry.label;
          menu.appendChild(link);
          return;
        }
        const group = document.createElement("details");
        const summary = document.createElement("summary");
        summary.className = "py-3 px-2 text-xl font-subheading uppercase cursor-pointer";
        summary.textContent = entry.label;
        group.appendChild(summary);
        (entry.items || []).forEach((sub) => {
          const link = document.createElement("a");
          link.href = sub.href;
          link.className = "block py-2 px-4 text-brand-blue-50 hover:text-brand-yellow-500";
          link.textContent = sub.label;
          group.appendChild(link);
        });
        menu.appendChild(group);
      });
      dialog.appendChild(menu);
      const quote = document.createElement("a");
      quote.href = quoteUrl;
      quote.className = "mt-auto block text-center rounded-full bg-brand-yellow-500 text-brand-blue-900 font-bold p-4";
      quote.textContent = "Cotizá tu envío";
      dialog.appendChild(quote);
      document.body.append(overlay, dialog);
      overlay.addEventListener("click", close);
      dialog.addEventListener("click", (event) => {
        if (event.target.closest("a")) close();
      });
      document.body.style.overflow = "hidden";
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Cerrar menú");
      toggle.innerHTML = "×";
      closeButton.focus();
    }

    toggle.addEventListener("click", () => isOpen ? close() : open());
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") close();
    });
  }

  function initServicesCarousel() {
    const section = document.querySelector('[aria-labelledby="services-overview-title"]');
    const stack = section?.querySelector('[class*="preserve-3d"]');
    if (!section || !stack) return;
    const cards = [...stack.querySelectorAll(":scope > button")];
    const dots = [...section.querySelectorAll('[aria-label="Navegación de servicios"] > button')];
    const previous = section.querySelector('[aria-label="Anterior Servicio"]');
    const next = section.querySelector('[aria-label="Siguiente Servicio"]');
    const autoButton = [...section.querySelectorAll("button")].find((button) => /ROTACIÓN/i.test(button.textContent));
    if (!cards.length) return;
    let current = 0;
    let timer;
    let auto = !reducedMotion;

    function render() {
      cards.forEach((card, index) => {
        const offset = ((index - current + cards.length / 2) % cards.length + cards.length) % cards.length - cards.length / 2;
        const active = offset === 0;
        card.style.transform = reducedMotion ? "none" : `translateX(${offset * (innerWidth < 640 ? 140 : 260)}px) translateZ(${active ? 120 : -Math.abs(offset) * 180}px) rotateY(${offset * -28}deg) scale(${active ? 1.05 : Math.max(.65, 1 - Math.abs(offset) * .18)})`;
        card.style.opacity = active || !reducedMotion ? "1" : "0";
        card.style.zIndex = String(cards.length - Math.round(Math.abs(offset)));
        card.style.pointerEvents = active ? "auto" : "none";
        card.setAttribute("aria-hidden", String(!active));
        card.tabIndex = active ? 0 : -1;
      });
      dots.forEach((dot, index) => {
        const active = index === current;
        dot.setAttribute("aria-current", String(active));
        const marker = dot.querySelector("span");
        if (marker) {
          marker.style.width = active ? "2.5rem" : ".625rem";
          marker.classList.toggle("bg-brand-yellow-500", active);
          marker.classList.toggle("bg-white/30", !active);
        }
      });
    }

    function go(index) {
      current = (index + cards.length) % cards.length;
      render();
    }
    function setAuto(enabled) {
      auto = enabled && !reducedMotion;
      clearInterval(timer);
      if (auto) timer = setInterval(() => go(current + 1), 4500);
      if (autoButton) autoButton.setAttribute("aria-pressed", String(auto));
    }
    cards.forEach((card, index) => card.addEventListener("click", () => go(index)));
    dots.forEach((dot, index) => dot.addEventListener("click", () => { go(index); setAuto(false); }));
    previous?.addEventListener("click", () => { go(current - 1); setAuto(false); });
    next?.addEventListener("click", () => { go(current + 1); setAuto(false); });
    autoButton?.addEventListener("click", () => setAuto(!auto));
    section.addEventListener("mouseenter", () => clearInterval(timer));
    section.addEventListener("mouseleave", () => setAuto(auto));
    window.addEventListener("resize", render);
    render();
    setAuto(auto);
  }

  function initMarquees() {
    document.querySelectorAll("[data-dup]").forEach((track) => {
      [...track.children].forEach((child) => {
        const copy = child.cloneNode(true);
        copy.setAttribute("aria-hidden", "true");
        track.appendChild(copy);
      });
      track.removeAttribute("data-dup");
    });
    const pauseButton = [...document.querySelectorAll("button")].find((button) => /carrusel/i.test(button.getAttribute("aria-label") || ""));
    if (!pauseButton) return;
    const tracks = [...document.querySelectorAll(".animate-marquee-left, .animate-marquee-right")];
    pauseButton.addEventListener("click", () => {
      const paused = pauseButton.getAttribute("aria-pressed") !== "true";
      tracks.forEach((track) => track.classList.toggle("is-paused", paused));
      pauseButton.setAttribute("aria-pressed", String(paused));
      pauseButton.setAttribute("aria-label", paused ? "Reanudar carrusel" : "Pausar carrusel");
      const text = [...pauseButton.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      if (text) text.textContent = paused ? " Reanudar" : " Pausar";
    });
  }

  function initForms() {
    const form = document.querySelector("#cta-name")?.form;
    form?.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.querySelector("#cta-name").value.trim();
      const business = form.querySelector("#cta-business").value.trim();
      const volume = form.querySelector("#volume-select").value;
      const message = `Hola, soy ${name}${business ? ` de ${business}` : ""}. Me interesa cotizar envíos para ${volume} paquetes mensuales.`;
      openWhatsApp("5492236602699", message);
    });
  }

  function initActiveNavigation() {
    const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    const label = current === "index.html" ? "Inicio" : /^(servicios-|guias-)/.test(current) ? "Servicios" : /^(nosotros|redes)/.test(current) ? "Nosotros" : current === "contacto.html" ? "Contacto" : null;
    if (!label) return;
    document.querySelectorAll("#desktop-nav-opt a, #desktop-nav-opt button").forEach((item) => {
      if (item.getAttribute("href") === current) item.setAttribute("aria-current", "page");
      if (item.textContent.trim() === label) item.classList.add("text-brand-yellow-500");
    });
  }

  function init() {
    initHeader();
    initDesktopMenus();
    initMobileMenu();
    initServicesCarousel();
    initMarquees();
    initForms();
    initActiveNavigation();
    document.querySelector('[aria-label="Volver arriba"]')?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
