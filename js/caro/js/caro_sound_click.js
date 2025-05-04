const squares = document.getElementsByClassName('square');
const audio = document.getElementById('bg-sound');

for (let square of squares) {
    square.addEventListener('click', () => {
        audio.pause();               // Dừng âm thanh hiện tại nếu đang phát
        audio.currentTime = 0;       // Đặt lại thời gian về đầu để phát lại
        audio.volume = 1.0;
        audio.play().catch((err) => {
            console.warn('Trình duyệt chặn phát nhạc:', err);
        });
    });
}
