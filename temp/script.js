// menyimpan data buku
let book_and_year = {}; // key = judul, value = tahun

// fungsi tambah buku
function addBook() {
  const title = document.querySelector("#input-judul").value.toLowerCase();
  const year = parseInt(document.querySelector("#input-tahun").value);
  if (title && year) {
    book_and_year[title] = year;
    alert(`Buku "${title}" berhasil ditambahkan.`);
    tampilkanSemuaBuku();
  }
}

// fungsi tampil semua
function tampilkanSemuaBuku() {
  const container = document.querySelector("#output");
  container.innerHTML = "";
  let no = 1;
  for (let key in book_and_year) {
    container.innerHTML += `<p>${no++}. ${key} (${book_and_year[key]})</p>`;
  }
}

// fungsi cari buku berdasarkan judul
function cariBuku() {
  const cari = document.querySelector("#input-cari-judul").value.toLowerCase();
  const container = document.querySelector("#output");
  container.innerHTML = "";
  if (book_and_year[cari]) {
    container.innerHTML = `<p>${cari} (${book_and_year[cari]})</p>`;
  } else {
    container.innerHTML = `<p>Buku "${cari}" tidak ditemukan.</p>`;
  }
}

// fungsi filter berdasarkan tahun
function filterTahun() {
  const tahun = parseInt(document.querySelector("#input-cari-tahun").value);
  const container = document.querySelector("#output");
  container.innerHTML = "";
  let no = 1;
  let ada = false;
  for (let key in book_and_year) {
    if (book_and_year[key] > tahun) {
      container.innerHTML += `<p>${no++}. ${key} (${book_and_year[key]})</p>`;
      ada = true;
    }
  }
  if (!ada) {
    container.innerHTML = `<p>Tidak ada buku setelah tahun ${tahun}</p>`;
  }
}

// fungsi hapus buku
function hapusBuku() {
  const hapus = document.querySelector("#input-hapus").value.toLowerCase();
  const container = document.querySelector("#output");
  if (book_and_year[hapus]) {
    delete book_and_year[hapus];
    container.innerHTML = `<p>Buku "${hapus}" berhasil dihapus.</p>`;
    tampilkanSemuaBuku();
  } else {
    container.innerHTML = `<p>Buku "${hapus}" tidak ditemukan.</p>`;
  }
}
