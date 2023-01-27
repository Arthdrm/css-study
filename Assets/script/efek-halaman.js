/**  
* ==== PREFACE ====
* Deskripsi : 
* -)    Script ini berfungsi untuk menambahkan efek halaman binder pada web.
*       Dimana saat "tombol binder" diklik, maka warnanya akan berubah terang, sedangkan tombol lain akan berwarna gelap.
*       Konten halaman yg terhubung dgn tombol akan ditampilkan, sedangkan konten halaman lain akan disembunyikan.
*   
* Prequisite : 
* -)    document.querySelectorAll("selector_css")
*       Deskripsi : Berguna untuk memilih seluruh elemen html berdasarkan selector yg telah ditentukan.
*       Kembalian : Mengembalikan Node List (Dapat di-index spt array, tetapi tidak dpt memakai method-method array).
*
* -)    document.style.namaStyle
*       Deskripsi : Berguna utk menerapkan style inline pada sebuah elemen.
*
* -)    for (var nama_iterator of iterable){
*           //Badan loop
*       } 
*       Deskripsi : Berguna untuk mengiterasi tiap-tiap elemen dari collection menggunakan sebuah iterator.
*
* -)    document.addEventListener("event", fungsi_callback)
*       Deskripsi : 
*       Membuat sebuah event handler untuk objek dokumen. Saat event terjadi, fungsi_callback akan dipanggil dan
*       objek event akan dilempar sebagai argumen pertama dari fungsi_callback tsb. Parameter yang menangkap objek event,
*       biasanya diberi nama "e" atau "env".
*       Tipe objek event yang dilempar akan bergantung pada event-nya. 
*       Cth : Event "click" akan mengembalikan objek MouseEvent.
*
* -)    (param1, param2, ...) => {
*         //Badan fungsi
*       }
*       Deskripsi : 
*       Merupakan sintaks dari fungsi arrow. Fungsi arrow merupakan shorthand utk fungsi anonymous.
*       Fungsi anonymous sendiri biasanya merupakan fungsi yg hanya dipanggil utk kasus spesifik (non-utility).
*       Karena fungsi anonymous tidak memiliki nama, jadi ia tidak memenuhi namespace global.
*
* -)    event.target 
*       Deskripsi : Merupakan property dari objek event yg merujuk pada objek (elemen) yg men-trigger event ybs.
*
* -)    [...iterable]
*       Deskripsi : 
*       Merupakan sintaks operator spread. Digunakan utk memecah/menyebar iterable menjadi elemen-elemen individu.
*       Operator spread juga digunakan utk mengkonversi objek node list menjadi array, sehingga kita dpt
*       menggunakan method-method array pada objek tsb.
*
* -)    array.IndexOf(elemen)
*       Deskripsi : Method dari objek array yg digunakan utk mendapatkan nilai index dari sebuah elemen array.
*==== END OF PREFACE ====
*/

// Mendapatkan seluruh elemen dengan class btn (Button Halaman).
let buttons = document.querySelectorAll(".btn");

// Mendapatkan seluruh elemen dengan class content-container (Konten Halaman).
let div = document.querySelectorAll(".content-container");

// Mengiterasi node list buttons menggunakan loop for of.
// Iterasi dilakukan utk memudahkan kita dalam menambahkan event listener ke tiap-tiap button.      
for(let btn of buttons){
    // Menambahkan event handler click pada button.
    btn.addEventListener("click", (e) => {
        //Mengubah bg-color button saat ini menjadi putih.
        e.target.style.backgroundColor = "white";

        //Mendapatkan index button saat ini.
        //Nilai index diperlukan sebagai penghubung antara button dgn konten halaman.
        let index = [...buttons].indexOf(e.target);

        //Menyembunyikan konten halaman kecuali konten halaman yg index-nya sm dengan index button saat ini.
        for(let x of div){
            if( x != div[index]){
                x.style.display = "none";
            }else{
                x.style.display = "block";
            }
        }

        // e.target.parentNode.children digunakan utk mendapatkan sibling dari elemen saat ini.
        // Loop dibawah digunakan utk mengiterasi seluruh sibling dari button saat ini.
        for(let x of e.target.parentNode.children){
            if(x != e.target){
                // Mengubah warna button selain button saat ini menjadi gelap.
                x.style.backgroundColor = "darkgrey";
            }
        }
    })
}