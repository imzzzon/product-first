const loveButton = document.getElementById('loveButton');

function createBubble() {
  const bubble = document.createElement('span');
  bubble.classList.add('bubble');
  bubble.innerText = '사랑해';

  // 무작위 색상
  const colors = ['#ff69b4', '#ff1493', '#ff4500', '#ffa500', '#ff00ff', '#00ced1', '#adff2f'];
  bubble.style.color = colors[Math.floor(Math.random() * colors.length)];

  // 무작위 크기
  const fontSize = Math.floor(Math.random() * 20) + 20;
  bubble.style.fontSize = `${fontSize}px`;

  // 버튼 위치를 기준으로 무작위 수평 위치 설정
  const rect = loveButton.getBoundingClientRect();
  const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 80;
  const startY = rect.top;

  bubble.style.left = `${startX}px`;
  bubble.style.top = `${startY}px`;

  document.body.appendChild(bubble);

  // 애니메이션이 끝나면 요소 삭제
  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

// 클릭할 때마다 딱 하나씩만 생성
loveButton.addEventListener('click', () => {
  createBubble();
});
