const output = document.querySelector(".output");
output.textContent = "";

for(let i = 10; i >= 0; i--){
  if(i == 10){
    const para = document.createElement('p');
    para.textContent = `Countdown ${i}`;
    output.appendChild(para);
    continue;
  }else if(i == 0){
    const para = document.createElement('p');
    para.textContent = 'Blast off!';
    output.appendChild(para);
    continue;
  }else {
    const para = document.createElement('p');
    para.textContent = i;
    output.appendChild(para);
  }
}

