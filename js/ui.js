const BASE = "/" + location.pathname.split("/")[1];

export async function loadHeader() {
  const el = document.getElementById("header");
  if (!el) return;

  const url = `${BASE}/partials/header.html`;

  try {
    const res = await fetch(url);
    el.innerHTML = await res.text();

    const path = location.pathname.split("/").pop() || "index.html";
    el.querySelectorAll(".nav-link").forEach((a) => {
      const href = a.getAttribute("href").split("/").pop();
      a.classList.toggle("active", href === path);
    });
  } catch (err) {
    console.error("Header load failed:", err);
  }
}