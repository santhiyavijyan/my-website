window.onload = function () {
  const content = document.querySelector(".content");

  content.style.opacity = "0";
  content.style.transform = "translateY(30px)";

  setTimeout(() => {
    content.style.transition = "0.8s";
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 300);
};
