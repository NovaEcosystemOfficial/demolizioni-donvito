(function () {
  "use strict";

  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var yearEl = document.getElementById("year");
  var desktopQuery = window.matchMedia("(min-width: 960px)");
  var heroVisual = document.querySelector(".hero-visual");
  var heroPhoto = document.querySelector(".hero-photo");
  var lightbox = document.getElementById("lightbox");
  var lightboxImage = lightbox ? lightbox.querySelector(".lightbox-image") : null;
  var lightboxDialog = lightbox ? lightbox.querySelector(".lightbox-dialog") : null;
  var lastFocus = null;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function showHeroPhoto() {
    if (heroVisual) {
      heroVisual.classList.add("has-photo");
    }
  }

  function hideHeroPhoto() {
    if (heroVisual) {
      heroVisual.classList.remove("has-photo");
    }
    if (heroPhoto) {
      heroPhoto.setAttribute("hidden", "");
    }
  }

  if (heroPhoto && heroVisual) {
    heroPhoto.addEventListener("load", showHeroPhoto);
    heroPhoto.addEventListener("error", hideHeroPhoto);

    if (heroPhoto.complete) {
      if (heroPhoto.naturalWidth > 0) {
        showHeroPhoto();
      } else {
        hideHeroPhoto();
      }
    }
  }

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImage) {
      return;
    }

    lastFocus = document.activeElement;
    lightboxImage.src = src;
    lightboxImage.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");

    if (lightboxDialog) {
      lightboxDialog.focus();
    }

    document.addEventListener("keydown", onLightboxKeydown);
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage || lightbox.hidden) {
      return;
    }

    lightbox.hidden = true;
    lightboxImage.removeAttribute("src");
    lightboxImage.alt = "";
    document.body.classList.remove("lightbox-open");
    document.removeEventListener("keydown", onLightboxKeydown);

    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  function onLightboxKeydown(event) {
    if (event.key === "Escape") {
      closeLightbox();
    }
  }

  document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openLightbox(trigger.getAttribute("data-lightbox"), trigger.getAttribute("data-alt") || "");
    });
  });

  if (lightbox) {
    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
  }

  if (!nav || !toggle) {
    return;
  }

  function setMenuOpen(isOpen) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      isOpen ? "Chiudi il menu di navigazione" : "Apri il menu di navigazione"
    );

    if (isOpen) {
      document.addEventListener("keydown", onMenuKeydown);
      document.addEventListener("click", onDocumentClick);
    } else {
      document.removeEventListener("keydown", onMenuKeydown);
      document.removeEventListener("click", onDocumentClick);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  function onMenuKeydown(event) {
    if (event.key === "Escape") {
      closeMenu();
      toggle.focus();
    }
  }

  function onDocumentClick(event) {
    var target = event.target;
    if (!(target instanceof Node)) {
      return;
    }
    if (!nav.contains(target) && !toggle.contains(target)) {
      closeMenu();
    }
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  function onViewportChange(event) {
    if (event.matches) {
      closeMenu();
    }
  }

  if (typeof desktopQuery.addEventListener === "function") {
    desktopQuery.addEventListener("change", onViewportChange);
  } else if (typeof desktopQuery.addListener === "function") {
    desktopQuery.addListener(onViewportChange);
  }
})();
