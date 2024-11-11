const wheel = document.querySelector('.wheel');
const spinButton = document.querySelector('.spin-button');

spinButton.addEventListener('click', () => {
    // 항상 꽝에 맞춰짐 (랜덤이 아님)
    const rotation = 360 * 5; // 5바퀴 회전
    wheel.style.transform = `rotate(${rotation}deg)`;
});