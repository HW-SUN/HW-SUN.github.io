(() => {
  const openButtons = document.querySelectorAll(".p_openIcon, .p_navButton");
  for (const button of openButtons) {
    button.addEventListener("click", () => document.body.classList.toggle("static-menu-open"));
  }

  const topButton = document.querySelector("#ScrollToTop");
  if (topButton) {
    topButton.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  for (const form of document.querySelectorAll("form")) {
    form.classList.add("static-message-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      showStaticContactTip(form);
    });
    for (const button of form.querySelectorAll("button, [type='button'], [type='submit'], a")) {
      button.addEventListener("click", (event) => {
        if (button.tagName.toLowerCase() === "a" && button.getAttribute("href") && button.getAttribute("href") !== "javascript:;") return;
        event.preventDefault();
        showStaticContactTip(form);
      });
    }
  }

  function showStaticContactTip(form) {
    let tip = form.querySelector(".static-form-tip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "static-form-tip";
      form.appendChild(tip);
    }
    tip.textContent = "该静态复刻站不提交留言。请通过电话 86-411-82739302 或邮箱 info@your-new-domain.com 联系我们。";
  }
})();
