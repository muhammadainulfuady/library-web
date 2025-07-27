// merupakan id dari input yang ada di dalam register.html
let register_us = document.querySelector("#us-register");
let register_pw = document.querySelector("#pw-register");
let register_addres = document.querySelector("#addres-register");

// value dari atas tersebut
let value_input_register_username = register_us.value;
let value_input_register_password = register_pw.value;
let value_input_register_addres = register_addres.value;

// obj kosong untuk menyimpan data ke local-storage
let obj = {};

// id dari form registrasi
let form_regis = document.querySelector("#form-regis");

// id dari form login
let form_login = document.querySelector("#form-login");

// merupakan id dari input yang ada di dalam login.html
let login_us = document.querySelector("#us-login");
let login_pw = document.querySelector("#pw-login");

// id dari button register
let btn_submit_regis = document.querySelector("#submit-regis");
let btn_reset_regis = document.querySelector("#reset-regis");

// id dari button login
let btn_submit_login = document.querySelector("#submit-login");
let btn_login_reset = document.querySelector("#reset-login");

form_regis.addEventListener("submit", function (e) {
  e.preventDefault();
  //   window.location = "/index.html";
  obj.value_input_register_username = value_input_register_username;
  obj.value_input_register_password = value_input_register_password;
  console.log(obj);
});
