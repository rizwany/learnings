document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
      const question = button.closest(".quiz-question");
      const buttons = Array.from(question.querySelectorAll(".option"));
      const correctIndex = Number(question.dataset.correct);
      const feedback = question.querySelector(".feedback");
      const selectedIndex = buttons.indexOf(button);

      buttons.forEach((item, index) => {
        item.disabled = true;
        if (index === correctIndex) item.classList.add("correct");
      });

      if (selectedIndex === correctIndex) {
        feedback.textContent = "درست جواب! آپ نے اہم نکتہ سمجھ لیا۔";
        feedback.style.color = "#177245";
      } else {
        button.classList.add("wrong");
        feedback.textContent = "یہ جواب درست نہیں۔ درست جواب سبز رنگ میں دکھایا گیا ہے۔";
        feedback.style.color = "#b42318";
      }
    });
  });

  const progress = document.querySelector(".progress span");
  if (progress) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progress.style.width = `${percent}%`;
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);
  }
});
