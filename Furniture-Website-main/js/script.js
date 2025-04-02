let closer = document.querySelector('#closer');

// Sự kiện khi bấm vào nút closer để ẩn navbar và các phần liên quan
closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active');  // Xóa class 'active' khỏi navbar, điều này giúp ẩn menu (giả sử trong CSS bạn có quy định .navbar.active để hiển thị menu).
    cart.classList.remove('active'); // Nếu các phần tử giỏ hàng (cart) và form đăng nhập (loginForm) tồn tại, chúng cũng bị ẩn (bằng cách xóa class 'active'). Dấu ?. đảm bảo rằng nếu biến đó không tồn tại, mã sẽ không báo lỗi.
    loginForm.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

// Sự kiện khi bấm vào nút menu-btn để hiển thị/ẩn navbar
document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";  // Hiển thị nút closer khi menu mở
    navbar.classList.toggle('active');
}

//  Khi người dùng bấm vào nút giỏ hàng (#cart-btn), giỏ hàng (.shopping-cart) sẽ hiện ra hoặc ẩn đi.
//  Đồng thời, một phần tử (#closer) sẽ hiển thị để có thể bấm vào đó và đóng giỏ hàng.

let cart = document.querySelector('.shopping-cart'); // Lấy phần tử giỏ hàng từ trang HTML, lưu vào biến cart.

document.querySelector('#cart-btn').onclick = () => { //  Bắt sự kiện click vào nút giỏ hàng (#cart-btn). Khi bấm vào, hàm ẩn/hiện giỏ hàng sẽ chạy.
    closer.style.display = "block"; // Hiện phần tử #closer, một lớp nền mờ phía sau giúp người dùng nhấn vào để đóng giỏ hàng.
   
    /* ✔ Thêm hoặc gỡ bỏ class active cho giỏ hàng (.shopping-cart).
      ✔ Khi active được thêm, CSS sẽ làm cho giỏ hàng trượt vào màn hình.
      ✔ Khi active bị gỡ, giỏ hàng sẽ trượt ra ngoài. */
    cart.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form'); // Lấy phần tử giỏ hàng từ trang HTML, lưu vào biến cart.

document.querySelector('#login-btn').onclick = () => { //  Bắt sự kiện click vào nút giỏ hàng (#cart-btn). Khi bấm vào, hàm ẩn/hiện giỏ hàng sẽ chạy.
    closer.style.display = "block"; // Hiện phần tử #closer, một lớp nền mờ phía sau giúp người dùng nhấn vào để đóng giỏ hàng.
   
    /* ✔ Thêm hoặc gỡ bỏ class active cho giỏ hàng (.shopping-cart).
      ✔ Khi active được thêm, CSS sẽ làm cho giỏ hàng trượt vào màn hình.
      ✔ Khi active bị gỡ, giỏ hàng sẽ trượt ra ngoài. */
    loginForm.classList.toggle('active');
}
