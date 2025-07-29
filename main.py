# final chalenge
# untuk menyimpan data penting
book_and_year = {}
menu_buku = [
    "Tambah Buku",
    "Tampilkan Semua Buku",
    "Cari Buku (by Judul)",
    "Buku Terbit Setelah Tahun Tertentu",
    "Hapus buku",
    "Keluar"]
temp_key = []


# membuat flag true
def toFlag(n):
    return n == True

# fungsi menampilkan menu buku
def showMenu(menu):
    number_book = 0
    print(f"\n=== MENU BUKU ===")
    for menu_book in menu:
        print(f"{number_book+1}. {menu_book}")
        number_book += 1
    return menu

# fungsi untuk menu pertama yaitu menambahkan sebuah buku
def addBook(book_add):
    user_add_book = input(f"\nMasukkan judul buku : ").lower()
    user_add_year = int(input(f"Masukkan tahun terbit dari buku {user_add_book} : "))
    print(f"Buku {user_add_book} berhasil di tambahkan")
    book_add[user_add_book] = user_add_year
    return book_add

# fungsi untuk menu kedua yaitu menampilkan semua buku yang telah di simpan di dalam book_and_year
def showBook(bookShow):
    number_show_book = 0
    if bookShow == {}:
        print(f"Tolong menambahkan buku terlebih dahulu yah!!")
    else:
        for key in bookShow:
            val = bookShow[key]
            print(f"{number_show_book+1}. {key} ({val})")
            number_show_book += 1
    return bookShow

# fungsi untuk mencari nilai buku
def searchBook(search):
    search_book_user = input("Masukkan judul buku yang di cari : ").lower()
    found = False
    for key in search:
        val = search[key]
        if search_book_user == key:
            found = True
    print("")
    if found == True:
        print(f"Hasil : {search_book_user} ({search[search_book_user]})")
    else:
        print(f"Buku {search_book_user} tidak ada di dalam daftar")
    return search

# fungsi menemukan buku tergantung tahun setelahnya
def searchBookYear(book_year):
    searh_year_user = int(input(f"Masukkan tahun buku setelah? : "))
    result = []
    number_year_book = 0
    print("")
    for key in book_year:
        val = book_year[key]
        if val > searh_year_user:
            result.append(f"{number_year_book+1}. {key} ({val})")
        number_year_book += 1
    if len(result) > 0:
        print(f"Buku setelah tahun {searh_year_user} :")
        for loop in result:
            print(f"{loop}")
    else:
        print(f"Tidak ada buku setelah tahun {searh_year_user}")
    return book_year

# fungsi untuk menghapus buku
def delBook(book_del):
    user_del_book = input(f"\nMasukkan buku yang akan di hapus? : ").lower()
    flag = False
    if user_del_book in book_del:
        flag = True
        book_del.pop(user_del_book)
    if flag == True:
        print(f"{user_del_book} berhasil di hapus")
    else:
        print(f"{user_del_book} tidak ada di dftar buku")
    return book_del

# memulai program dengan flag
flag = True
while flag:
    showMenu(menu_buku)
    user_pilih = int(input("\nMasukkan pilihan kamu : "))
    if user_pilih == 1:
        addBook(book_and_year)
    elif user_pilih == 2:
        showBook(book_and_year)
    elif user_pilih == 3:
        searchBook(book_and_year)
    elif user_pilih == 4:
        searchBookYear(book_and_year)
    elif user_pilih == 5:
        delBook(book_and_year)
    elif user_pilih == 6:
        flag = False
        print(f"Terimakasih sudah mencoba program perpustakaan!!😁")