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
  let flag = 1;
  book_add.addEventListener("click", function () {
    let put_class_add_book = document.querySelector("#regis-add-book");
    let create_div_add_book = document.querySelector(".edited-add-book");
    if (flag % 2 == 1) {
      put_class_add_book.style.display = "flex";
      if (!create_div_add_book) {
        let create_div_add_book = document.createElement("div");
        create_div_add_book.classList = "edited-add-book";
        put_class_add_book.appendChild(create_div_add_book);
        create_div_add_book.innerHTML = `
        <label for="title-book">Masukkan judul buku</label>
        <input type="text" name="title-book" id="title-book" maxlength="100" required />
        <label for="year-book">Masukkan tahun terbit</label>
        <input type="text" name="year-book" id="year-book" maxlength="4" required/>
        <button type="submit"><p>Kirim</p></button>
    `;
      }
    } else {
      put_class_add_book.style.display = "none";
    }
    flag += 1;
  });
  return book_add;
};
add_book(put_btn_add_book);

// data untuk menyimpan form pada tahun serta buku yang di masukkan oleh users ke dalam local storage
let year_title_add_book = JSON.parse(localStorage.getItem("year-title")) || {};

// mengambil id dari form
let put_form_regis_add_book = document.querySelector("#regis-add-book");

// kode untuk menyimpan form add book di dalam local storage
const add_book_form = function (put_form_regis_add_book_func) {
  put_form_regis_add_book_func.addEventListener("submit", function (e) {
    // e.preventDefault();
    let put_data_year_book = document.querySelector("#year-book");
    let put_data_title_book = document.querySelector("#title-book");
    let value_data_year_book = put_data_year_book.value;
    let value_data_title_book = put_data_title_book.value;
    year_title_add_book[value_data_year_book] = value_data_title_book;
    // year_book_to_local_storage.push(value_data_year_book);
    // title_book_to_local_storage.push(value_data_title_book);
    // let create_p_add_book = document.createElement("p");
    // let temp = document.querySelector(".temp");
    // create_p_add_book.innerHTML = "heloo";
    // temp.appendChild(create_p_add_book);
    // console.log(year_book_to_local_storage);
    // console.log(title_book_to_local_storage);
    let convert_json_to_obj_year_title = localStorage.setItem(
      "year-title",
      JSON.stringify(year_title_add_book)
    );
    console.log(convert_json_to_obj_year_title);
    console.log(year_title_add_book);
  });
  return put_form_regis_add_book_func;
};
add_book_form(put_form_regis_add_book);

// mengambil data local storage bagian year_book dan title_book
let put_data_local_year_title_add_book = localStorage.getItem("year-title");
let convert_json_to_obj_year_title_add_book = JSON.parse(
  put_data_local_year_title_add_book
);

// fungsi untuk menampilkan semua buku yang telah di simpan oleh users ke dalam local storage
let found = 1;
const show_book = function (btn_show) {
  btn_show.addEventListener("click", function (e) {
    let put_class_show_book = document.querySelector(".show-book");
    let create_div_show_book = document.querySelector(".edited-show-book");
    if (found % 2 == 1) {
      put_class_show_book.style.display = "block";
      if (!create_div_show_book) {
        let put_data_local_year_title = JSON.parse(
          localStorage.getItem("year-title")
        );
        let create_div_show_book = document.createElement("div");
        create_div_show_book.classList = "edited-show-book";
        put_class_show_book.appendChild(create_div_show_book);
        let table_html = `
        <table>
          <tr>
            <th>No</th>
            <th>Judul Buku</th>
            <th>Tahun Terbit Buku</th>
          </tr>
      `;
        let number_book = 1;
        for (let key in put_data_local_year_title) {
          table_html += `
          <tr>
            <td>${number_book}</td>
            <td>${put_data_local_year_title[key]}</td>
            <td>${key}</td>
          </tr>
        `;
          number_book++;
        }
        table_html += `</table>`;
        create_div_show_book.innerHTML = table_html;
        // create_div_show_book.innerHTML = `<div class="edited-show-book">
        //         <table>
        //           <tr>
        //             <th>No</th>
        //             <th>Judul Buku</th>
        //             <th>Tahun terbit buku</th>
        //           </tr>
        //           <tr>
        //             <td>${number_book + 1}</td>
        //             <td>${put_data_local_year_title[key]}</td>
        //             <td>${key}</td>
        //           </tr>
        //         </table>
        //       </div>`;
      }
    } else {
      put_class_show_book.style.display = "none";
    }
    console.log(put_class_show_book);
    found += 1;
  });
  return btn_show;
};
show_book(put_btn_show_book);

// fungsi untuk mencari buku
const search_book = function (btn_search) {
  let flag = 1;
  btn_search.addEventListener("click", function () {
    let put_class_search_book = document.querySelector(".search-book");
    let create_div_search_book = document.querySelector(".edited-search-book");
    if (flag % 2 == 1) {
      put_class_search_book.style.display = "flex";
      if (!create_div_search_book) {
        let create_div_search_book = document.createElement("div");
        create_div_search_book.classList = "edited-search-book";
        create_div_search_book.innerHTML = `
        <label for="search-book">Masukkan judul buku yang akan di cari</label>
        <input type="text" name="search-book" id="search-book" maxlength="100" required />
        <button type="submit" id="btn-search-js"><p>Cari</p></button>
        `;
        put_class_search_book.appendChild(create_div_search_book);
      }
    } else {
      put_class_search_book.style.display = "none";
    }
    console.log(put_class_search_book);
    flag += 1;
    console.log(flag);
    let put_btn_search_in_js = document.querySelector("#btn-search-js");
    let put_input_search_book = document.querySelector("#search-book");
    put_btn_search_in_js.addEventListener("click", function () {
      let tanda = false;
      for (key in year_title_add_book) {
        let value = year_title_add_book[key];
        if (put_input_search_book.value == value) {
          tanda = true;
        }
      }
      if (tanda == true) {
        alert(`Buku ${put_input_search_book.value} ada di dalam daftar`);
      } else if (put_input_search_book.value == "") {
        alert("Harap isi buku yang akan di cari!!");
      } else {
        alert(`Buku ${put_input_search_book.value} tidak ada di dalam daftar`);
        stop;
      }
    });
  });
  return btn_search;
};
search_book(put_btn_search_book);

// fungsi untuk menghapus buku
const del_book = function (book_del) {
  let flag = 1;
  book_del.addEventListener("click", function () {
    let put_class_delete_book = document.querySelector(".delete-book");
    let create_div_delete_book = document.querySelector(".edited-delete-book");

    if (flag % 2 == 1) {
      put_class_delete_book.style.display = "flex";
      if (!create_div_delete_book) {
        let create_div_delete_book = document.createElement("div");
        create_div_delete_book.classList = "edited-delete-book";
        create_div_delete_book.innerHTML = `
          <label for="delete-book">Masukkan judul buku yang akan di hapus</label>
          <input type="text" name="delete-book" id="delete-book" maxlength="100" required />
          <button type="submit" id="btn-search-js"><p>Hapus</p></button>
        `;
        put_class_delete_book.appendChild(create_div_delete_book);
      }
    } else {
      put_class_delete_book.style.display = "none";
    }

    let put_input_delete_book = document.querySelector("#delete-book");
    let put_btn_delete_in_js = document.querySelector("#btn-search-js");

    put_btn_delete_in_js.addEventListener("click", function () {
      let tanda = false;
      let data = JSON.parse(localStorage.getItem("year-title")) || {};

      for (let tahun in data) {
        if (data[tahun] === put_input_delete_book.value) {
          delete data[tahun];
          tanda = true;
          break;
        }
      }

      if (tanda) {
        localStorage.setItem("year-title", JSON.stringify(data));
        alert(`Buku "${put_input_delete_book.value}" dihapus`);
      } else if (put_input_delete_book.value === "") {
        alert("Harap isi judul buku yang akan dihapus!");
        return;
      } else {
        alert(`Buku "${put_input_delete_book.value}" tidak ditemukan`);
        return;
      }

      // Tampilkan ulang daftar buku setelah dihapus
      document.querySelector(".show-book").innerHTML = "";
      let number = 1;
      for (let tahun in data) {
        let div = document.createElement("div");
        div.classList = "edited-show-book";
        div.innerHTML = `
          <table>
            <tr>
              <th>No</th>
              <th>Judul Buku</th>
              <th>Tahun Terbit</th>
            </tr>
            <tr>
              <td>${number++}</td>
              <td>${data[tahun]}</td>
              <td>${tahun}</td>
            </tr>
          </table>
        `;
        document.querySelector(".show-book").appendChild(div);
      }
    });

    flag += 1;
  });

  return book_del;
};

del_book(put_btn_delete_book);
