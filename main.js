import "/src/styles/style.css";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("loaded");
  }, 250);
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").classList.remove("loaded");
    setTimeout(() => {
      window.location.href = link.href;
    }, 200);
  });
});
