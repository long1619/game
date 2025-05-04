let board = document.getElementById("board"); // The board element

let currentPlayer = "X"; // The current player, starting with "X"
let gameEnded = false; // Flag to check if the game has ended
let countdownInterval; // lưu ID của setInterval

// Tạo ra bàn cờ
function createBoard() {
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            const square = document.createElement('div'); // Create a new div element for each square
            square.classList.add('square'); // Add the 'square' class to the div
            square.addEventListener('click', handleClick); // Thêm event listener trực tiếp

            board.appendChild(square); // thêm square vào board
        }
    }
}

function handleClick() {
    if (!this.textContent && !gameEnded) {
        // Hiển thị X hoặc O
        this.textContent = currentPlayer;
        this.classList.add(currentPlayer === "X" ? "x-mark" : "o-mark"); // thêm class

         // Check for a winner after each move
         if (checkWinner()) {
            return;
        }

        // Đổi lượt người chơi
        currentPlayer = currentPlayer === "X" ? "O" : "X"

         // Start timer for next player
         timeout(currentPlayer);
    }
}
createBoard(); // Call the function to create the boar1

function checkWinner() {
    const DIRECTIONS = [
        // Ngang: phải và trái
        [[0, 1], [0, -1]],
        // Dọc: xuống và lên
        [[1, 0], [-1, 0]],
        // Chéo chính: xuống phải và lên trái
        [[1, 1], [-1, -1]],
        // Chéo phụ: xuống trái và lên phải
        [[1, -1], [-1, 1]]
    ];

    const squares = document.querySelectorAll('.square');
    const boardSize = 3; // boardSize = 3: bàn cờ là 3 hàng x 3 cột.

    //Tạo mảng 2 chiều board kích thước 3x3 và gán tất cả giá trị ban đầu là chuỗi rỗng ''.
    const board = Array(boardSize).fill().map(() => Array(boardSize).fill(''));


    // Convert squares NodeList to 2D array
    squares.forEach((square, index) => {
        const row = Math.floor(index / boardSize);
        const col = index % boardSize;
        board[row][col] = square.textContent;
    });

    // Check all positions
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const currentValue = board[row][col];
            if (!currentValue) continue; // Nếu ô hiện tại chưa được đánh ('') thì bỏ qua.

            // Check all directions from current position
            for (const [dir1, dir2] of DIRECTIONS) {
                let count = 1; // Count current position
                // Check both directions
                for (const [dRow, dCol] of [dir1, dir2]) {
                    let newRow = row + dRow;
                    let newCol = col + dCol;
                    console.log("newRow", newRow);
                    console.log("newCol", newCol);

                    // Đếm số ô liên tiếp cùng giá trị
                    while (
                        newRow >= 0 && newRow < boardSize &&
                        newCol >= 0 && newCol < boardSize &&
                        board[newRow][newCol] === currentValue
                    ) {
                        count++;
                        newRow += dRow;
                        newCol += dCol;
                    }
                }

                if (count >= 3) {
                    gameEnded = true;
                    clearInterval(countdownInterval); // dừng đếm giờ khi có người thắng
                    alert(`Player ${currentValue} wins!`);
                    return true;
                }

            }
        }
    }
    return false;
}

function reset() {
    let resetButton = document.getElementById("reset"); // Get the reset button element
    resetButton.addEventListener("click", function () {
        if (confirm("Do you want to exit the game!")) {
            location.reload();
        } else {
            return false;
        }
    })
    clearInterval(countdownInterval);

}
reset();

function timeout(currentPlayer) {
    clearInterval(countdownInterval); // dừng timer cũ nếu có

    let timeLeft = 30; // 30 giây mỗi lượt
    const timerElement = document.getElementById("timer");
    timerElement.textContent = timeLeft; // reset hiển thị

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            gameEnded = true;
            alert(`Time's up! Player ${currentPlayer} loses!`);
        }
    }, 1000);
}
