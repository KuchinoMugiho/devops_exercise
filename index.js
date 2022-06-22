function onCalculateButtonClick() {
  const a = Number(document.querySelectorAll('input[type=\'text\'], input[type=\'number\']')[0].value);
  const b = Number(document.querySelectorAll('input[type=\'text\'], input[type=\'number\']')[1].value);
  const estimatedSeconds = Math.round(((a * 60) + b) * 42.195);
  const z = estimatedSeconds % 60;
  const y = (estimatedSeconds - z) / 60 % 60;
  const x = (estimatedSeconds - z - y * 60) / 3600;
  document.querySelector('span').textContent = `${x} 時間 ${y} 分 ${z} 秒`;
}
