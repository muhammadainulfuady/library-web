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
    console.log(key);
  }
  return img_users;
};
put_img(convert_json_to_obj_img_none);
