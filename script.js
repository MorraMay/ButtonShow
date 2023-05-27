function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name.length < 3 || email.indexOf('@') === -1 || email.indexOf('.') === -1 || password.length < 6) {
      alert("Помилка: Неправильно заповнені дані!");
    } else {
      // Правильно заповнені дані, перенаправлення на іншу сторінку
      window.location.href = "./index-2.html";
    }
  }


