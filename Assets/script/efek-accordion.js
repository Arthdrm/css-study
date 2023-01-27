/**
 * ==== PREFACE ==== 
 * Deskripsi : 
 * -)   Script ini berguna untuk membuat efek accordion (expanded) pada header tabel, yaitu saat header tabel diklik
 *      maka body-nya akan muncul dan saat header tabel diklik kembali, maka body-nya akan tertutup.
 * 
 * Prerequisite : 
 * -)   element.nextElementSibling
 *      Deskripsi : Memilih sibling element selanjutnya dari sebuah elemen.
 *
 * -)   event.currentTarget
 *      Deskripsi : Memilih elemen dimana event handler dikaitkan.
 * ==== END OF PREFACE ====
 */

const tbl_headers = document.querySelectorAll(".tbl-header");
const icons = document.querySelectorAll(".fa-angle-down");
for(let tbl_header of tbl_headers){
    tbl_header.addEventListener("click", (e)=>{
        /**
         * Disini e.currentTarget akan memilih elemen dgn class .tbl-header yang event click-nya tereksekusi.
         * Kenapa kita memakai e.currentTarget dan bukannya e.target?
         * Karena elemen .tbl-header memiliki beberapa child element didalamnya, 
         * dan e.target akan memilih elemen spesifik yang men-trigger event click dari .tbl-header.
         * Ini tentu tidak kita inginkan, karena kita ingin men-toggle class .active pada elemen .tbl-header
         * , dan bukan pada childnya.
         * Sedangkan e.currentTarget hanya akan memilih elemen .tbl-header walaupun kita meng-click elemen childnya.
         */
        e.currentTarget.nextElementSibling.classList.toggle("active");
        let index = [...tbl_headers].indexOf(e.currentTarget);
        icons[index].classList.toggle("active");
    })
}
