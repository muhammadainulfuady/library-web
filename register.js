// register area
// merupakan id dari input yang ada di dalam register.html
let register_us = document.querySelector("#us-register");
let register_pw = document.querySelector("#pw-register");
let register_addres = document.querySelector("#addres-register");
let register_date = document.querySelector("#date-register");

// id dari form registrasi
let form_regis = document.querySelector("#form-regis");

// id dari button register
let btn_submit_regis = document.querySelector("#submit-regis");
let btn_reset_regis = document.querySelector("#reset-regis");

// obj kosong untuk menyimpan data ke local-storage
let username_password = {};
let addres_date = {};

// event saat register
form_regis.addEventListener("submit", function (e) {
  e.preventDefault();
  let value_input_register_username = register_us.value;
  let value_input_register_password = register_pw.value;
  let value_input_register_addres = register_addres.value;
  let value_input_register_date = register_date.value;
  username_password[value_input_register_username] =
    value_input_register_password;
  addres_date[value_input_register_addres] = value_input_register_date;
  localStorage.setItem("my-key-value", JSON.stringify(username_password));
  localStorage.setItem("addres-date", JSON.stringify(addres_date));
  alert("Register berhasil!!!");
  window.location = "index.html";
});
