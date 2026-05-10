
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".quiz-question");
      const buttons = parent.querySelectorAll(".option");
      const correctIndex = Number(parent.dataset.correct);
      const feedback = parent.querySelector(".feedback");
      buttons.forEach((b, i) => {
        b.disabled = true;
        if (i === correctIndex) b.classList.add("correct");
      });
      const selected = Array.from(buttons).indexOf(btn);
      if (selected === correctIndex) {
        feedback.textContent = "درست جواب! آپ نے اہم تصور سمجھ لیا۔";
        feedback.style.color = "#177245";
      } else {
        btn.classList.add("wrong");
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
      progress.style.width = percent + "%";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress);
  }
});
