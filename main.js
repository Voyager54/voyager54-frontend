import "/src/styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("loaded");
  }, 250);
});
setInterval(() => {
  document.querySelector("body").classList.add("loaded");
}, 1500);

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").classList.remove("loaded");
    setTimeout(() => {
      window.location.href = link.href;
    }, 200);
  });
});
