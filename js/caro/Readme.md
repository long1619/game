- tạo bàn cờ
- thực hiện chọn từng phần tử trên màn hình ( onclick)
- đại diện cho biểu tượng của người chơi.(X hay O)


-------------------------------------------------------------------------------------------------
(0,0) (0,1) (0,2)
(1,0) (1,1) (1,2)
(2,0) (2,1) (2,2)

Khi người chơi "X" đánh vào một ô (ví dụ (1,1)), ta cần:
Nhìn ra xung quanh ô đó theo 4 hướng: ngang, dọc, chéo chính, chéo phụ.
Ở mỗi hướng, đếm số ô liên tiếp có cùng giá trị "X".

✏️ Dò các hướng từ vị trí (1,1)

Hướng 1: Ngang (hàng)
Sang trái: (1,0) = "" → dừng
Sang phải: (1,2) = "" → dừng
✅ Tổng ngang = 0 , 👉 Tổng số ô "X" theo hướng ngang: 0 trái + 0 phải = 0

Hướng 2: Dọc
Lên trên: (0,1) = "X" ✅
Xuống dưới: (2,1) = "X" ✅
✅ Tổng dọc = 2 → cộng với ô hiện tại là 3 → thắng nếu yêu cầu 3 ,

Hướng 3: Chéo chính (↘ ↖)
↘: (2,2) = "" → không phải "X" → dừng
↖: (0,0) = "" → không phải "X" → dừng
✅ Tổng chéo chính = 0 , 👉 Tổng số ô "X" theo hướng chéo phụ: 0 ↗ + 0 ↙ = 0


Hướng 4: Chéo phụ (↙ ↗)
↙: (0,2) → rỗng "" → không phải "X" → dừng
↗: (2,0) → rỗng "" → không phải "X" → dừng
✅ Tổng chéo phụ = 0 , 👉 Tổng số ô "X" theo hướng chéo phụ: 0 ↗ + 0 ↙ = 0

------------------------------  Tổng kết bảng hướng -----------------------------------------------
| Hướng      | `(dRow, dCol)`         | Ý nghĩa           |
| ---------- | ---------------------- | ----------------- |
| Ngang      | `(0, 1)` và `(0, -1)`  | Sang phải và trái |
| Dọc        | `(1, 0)` và `(-1, 0)`  | Xuống và lên      |
| Chéo chính | `(1, 1)` và `(-1, -1)` | Chéo ↘ và chéo ↖  |
| Chéo phụ   | `(1, -1)` và `(-1, 1)` | Chéo ↙ và chéo ↗  |

Trong mảng 2 chiều:
row (dòng) tăng khi đi xuống
col (cột) tăng khi đi sang phải

- nâng cao thêm tính năng thời gian chạy trong 30s không chọn là thua