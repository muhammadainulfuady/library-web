// register area
// merupakan id dari input yang ada di dalam register.html
alert("halooo");
let register_us = document.querySelector("#us-register");
let register_pw = document.querySelector("#pw-register");
let register_addres = document.querySelector("#addres-register");

// id dari form registrasi
let form_regis = document.querySelector("#form-regis");

// id dari button register
let btn_submit_regis = document.querySelector("#submit-regis");
let btn_reset_regis = document.querySelector("#reset-regis");

// obj kosong untuk menyimpan data ke local-storage
let obj = {};
let put_data = localStorage.getItem("my-key-value");

// event saat register
form_regis.addEventListener("submit", function (e) {
  e.preventDefault();
  let value_input_register_username = register_us.value;
  let value_input_register_password = register_pw.value;
  let value_input_register_addres = register_addres.value;
  obj[value_input_register_username] = value_input_register_password;
  localStorage.setItem("my-key-value", JSON.stringify(obj));
  alert("Register berhasil!!!");
  window.location = "index.html";
});
