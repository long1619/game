// Phát nhạc nền
// Ý tưởng là từ màn index cho cờ là true
// Xong đến màn chọn chế độ chơi thì sẽ lấy cờ đó ra, và check nếu true thì sẽ phát nhạc
const shouldPlay = localStorage.getItem('audioShouldPlay');

const audio = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
muteBtn.textContent = audio.muted == false ? '🔇' : '🔊'; // Hiện thị icon âm thanh

window.addEventListener('DOMContentLoaded', () => {
    if (shouldPlay === 'true') {
        // const audio = document.getElementById('bg-music');
        audio.loop = true;
        audio.volume = 0.5;
        audio.play().catch((err) => {
            console.warn('Trình duyệt chặn phát nhạc:', err);
        });
    }
});

// Tắt nhạc nền
// Khi click vào nút mute
muteBtn.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? '🔇' : '🔊';
});

// Bỏ mute khi người dùng tương tác
document.addEventListener('click', () => {
    // audio.muted = false;
    if (audio.muted) {
        muteBtn.click(); // 👈 Gọi sự kiện "click" của nút mute
    }
    muteBtn.textContent = '🔊';
    audio.play().catch(e => console.log("Phát nhạc bị chặn:", e));
}, { once: true });
