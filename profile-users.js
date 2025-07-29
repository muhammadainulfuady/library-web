// mengambil data local storage bagian password dan username
let put_data_username_password = localStorage.getItem("my-key-value");
let convert_json_to_obj_username_password = JSON.parse(
  put_data_username_password
);

// mengambil data local storage bagian addres dan date
let put_data_local_addres_date = localStorage.getItem("addres-date");
let convert_json_to_obj_addres_date = JSON.parse(put_data_local_addres_date);

// mengambil data local storage bagian img dan none
let put_data_local_img_none = localStorage.getItem("img-user-profile");
let convert_json_to_obj_img_none = JSON.parse(put_data_local_img_none);
// console.log(convert_json_to_obj_img_none);

// 1
// fungsi untuk mengambil data dari local storage yaitu username dari user yang telah register tadi
const put_username = function (username_users) {
  for (let key in username_users) {
    let put_profile_username = document.querySelector("#profile-username");
    let create_p_for_profile_username = document.createElement("p");
    create_p_for_profile_username.innerHTML = key;
    put_profile_username.appendChild(create_p_for_profile_username);
  }
  return username_users;
};
put_username(convert_json_to_obj_username_password);

// 2
// fungsi untuk mengambil data dari local storage yaitu username dari user yang telah register tadi
const put_username_two = function (username_users_two) {
  for (let key in username_users_two) {
    let put_profile_username_two = document.querySelector(".profile-users-two");
    let create_p_for_profile_username_two = document.createElement("p");
    create_p_for_profile_username_two.innerHTML = key;
    put_profile_username_two.appendChild(create_p_for_profile_username_two);
  }
  return username_users_two;
};
put_username_two(convert_json_to_obj_username_password);

// fungsi untuk mengambil data dari local storage yaitu alamat dari user yang telah register tadi
const put_addres = function (addres_users) {
  for (let key in addres_users) {
    let put_profile_addres = document.querySelector("#profile-addres");
    let create_p_for_profile_addres = document.createElement("p");
    create_p_for_profile_addres.innerHTML = key;
    put_profile_addres.appendChild(create_p_for_profile_addres);
  }
  return addres_users;
};
put_addres(convert_json_to_obj_addres_date);

// fungsi untuk mengambil data dari local storage yaitu tanggal lahir dari user yang telah register tadi
const put_date = function (date_users) {
  for (let key in date_users) {
    let put_profile_date = document.querySelector("#profile-date");
    let create_p_for_profile_date = document.createElement("p");
    create_p_for_profile_date.innerHTML = date_users[key];
    put_profile_date.appendChild(create_p_for_profile_date);
  }
  return date_users;
};
put_date(convert_json_to_obj_addres_date);

// fungsi untuk mengambil data dari local storage yaitu foto profile dari user yang telah register tadi
const put_img = function (img_users) {
  for (let key in img_users) {
    let put_profile_img = document.querySelector("#profile-img");
    let create_p_for_profile_img = document.createElement("p");
    create_p_for_profile_img.innerHTML = `<img src="${img_users[key]}" alt"">`;
    put_profile_img.appendChild(create_p_for_profile_img);
  }
  return img_users;
};
put_img(convert_json_to_obj_img_none);

// kode berikut merupakan button dari id main-menu
let put_btn_add_book = document.querySelector("#tambah-buku");
let put_btn_show_book = document.querySelector("#tampilkan-buku");
let put_btn_search_book = document.querySelector("#cari-buku");
let put_btn_tebrit_book = document.querySelector("#terbit-buku");
let put_btn_delete_book = document.querySelector("#hapus-buku");

// fungsi untuk membuat tampilan di menu add_book
const add_book = function (book_add) {
  book_add.addEventListener("click", function () {
    let put_class_add_book = document.querySelector(".add-book");
    let create_div_add_book = document.createElement("div");
    create_div_add_book.classList = "edited-input-menu";
    create_div_add_book.innerHTML = `
    <label for="title-book">Masukkan tahun terbit</label>
    <input type="text" name="title-book" id="title-book" />
    <label for="title-book">Masukkan judul buku</label>
    <input type="text" name="title-book" id="title-book" />`;
    put_class_add_book.appendChild(create_div_add_book);
    console.log(create_div_add_book);
  });
  return book_add;
};
add_book(put_btn_add_book);
