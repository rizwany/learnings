
document.querySelectorAll('.quiz').forEach((quiz)=>{
  const btn = quiz.querySelector('button');
  const result = quiz.querySelector('.result');
  if(!btn) return;
  btn.addEventListener('click',()=>{
    let score=0,total=0;
    quiz.querySelectorAll('.question').forEach((q)=>{
      total++;
      const checked = q.querySelector('input:checked');
      if(checked && checked.value === q.dataset.answer){ score++; }
    });
    let msg = score + ' / ' + total + ' درست جواب۔ ';
    if(score === total){ msg += 'بہت خوب! آپ نے concept اچھی طرح سمجھ لیا۔'; }
    else if(score >= Math.ceil(total/2)){ msg += 'اچھا نتیجہ، مگر ایک بار اہم نکات دوبارہ دیکھ لیں۔'; }
    else{ msg += 'موضوع کو دوبارہ آسانی سے پڑھیں، پھر quiz دوبارہ حل کریں۔'; }
    result.textContent = msg;
  });
});
