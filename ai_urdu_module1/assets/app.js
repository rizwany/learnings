function updateProgress(){
  const bar=document.querySelector('.progress span'); if(!bar) return;
  const h=document.documentElement; const scrolled=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100; bar.style.width=Math.max(0,Math.min(100,scrolled))+'%';
}
window.addEventListener('scroll',updateProgress); updateProgress();
function checkQuiz(formId,answers){
  const form=document.getElementById(formId); if(!form) return;
  let score=0,total=Object.keys(answers).length;
  Object.entries(answers).forEach(([name,correct])=>{
    const chosen=form.querySelector(`input[name="${name}"]:checked`);
    const labels=form.querySelectorAll(`input[name="${name}"]`);
    labels.forEach(inp=>{inp.parentElement.classList.remove('correct','incorrect'); if(inp.value===correct) inp.parentElement.classList.add('correct');});
    if(chosen && chosen.value===correct){score++;} else if(chosen){chosen.parentElement.classList.add('incorrect');}
  });
  const result=form.querySelector('.result');
  const msg= score===total ? 'زبردست! آپ نے تمام جوابات درست دیے۔' : `آپ کا اسکور ${score}/${total} ہے۔ سبز جواب درست ہیں، دوبارہ پڑھ کر کوشش کریں۔`;
  result.textContent=msg;
}
