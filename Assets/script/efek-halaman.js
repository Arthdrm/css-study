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
*       Deskripsi : 
*       Mencari index dari parameter elemen pada array. Ingat bahwa parameter elemen haruslah berupa elemen dari array ybs.
*==== END OF PREFACE ====
*/

const buttons = document.querySelectorAll(".btn");
const containers = document.querySelectorAll(".content-container");
  
for(let btn of buttons){
    // Menambahkan event handler click pada button.
    btn.addEventListener("click", (e) => {
        const index = [...buttons].indexOf(e.target);
        const target_cont = containers[index];        

        /* Mekanisme Button */
        if(!(e.target.classList.contains("active"))){
            // "Menghidupkan" button yang diklik.
            e.target.classList.toggle("active");
        }
        for(let btn_2 of buttons){
            // "Mematikan" button yang tidak diklik.
            if(btn_2 != e.target && btn_2.classList.contains("active")){
                btn_2.classList.toggle("active");
            }
        }
        
        /* Mekanisme Halaman */
        if(!(target_cont.classList.contains("active"))){
            // "Menghidupkan" halaman yang diklik.
            target_cont.classList.toggle("active");              
        }
        for(let container of containers){
            // "Mematikan" halaman yang tidak diklik.
            if(container != target_cont && container.classList.contains("active")){
                container.classList.toggle("active");
            }
        }
    })
}