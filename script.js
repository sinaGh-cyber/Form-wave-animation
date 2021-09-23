const lables = document.querySelectorAll('.form-control label');

lables.forEach((lable) => {
  lable.innerHTML = lable.innerText
    .split('')
    .map((letter, idx) => {
      return `<span style="transition-delay: ${idx * 30}ms;" >${letter}</span>`;
    })
    .join('');
});
