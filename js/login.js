// login area
// id dari button login
let btn_submit_login = document.querySelector("#submit-login");
let btn_login_reset = document.querySelector("#reset-login");

// merupakan id dari input yang ada di dalam login.html
let login_us = document.querySelector("#us-login");
let login_pw = document.querySelector("#pw-login");

// id dari form login
let form_login = document.querySelector("#form-login");

// data dari local storage
let put_data_local = localStorage.getItem("my-key-value");
let convert_json_to_obj = JSON.parse(put_data_local);

// event saat login
form_login.addEventListener("submit", function (e) {
  e.preventDefault();
  flag = false;
  let value_input_login_username = login_us.value;
  let value_input_login_password = login_pw.value;
  for (let key in convert_json_to_obj) {
    let value = convert_json_to_obj[key];
    if (
      value_input_login_username == key &&
      value_input_login_password == value
    ) {
      flag = true;
      console.log(value_input_login_username == key);
    }
  }
  if (flag == true) {
    window.location = "/pages/home.html";
    alert("Login berhasil silahkan masuk!!");
  } else {
    alert("Maaf username/pasword anda salah!!");
  }
});
