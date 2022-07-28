function check(){
let username = document.querySelector('.kotak9').value;
let password = document.querySelector('.kotak8').value;

    if(username=="" && password==""){
        swal("Upsss!","Username & Password Masih Kosong","error");
    }
    else if(username==""){
        swal("Upsss!","Username Masih Kosong","error");
    }
    else if(password==""){
        swal("Upsss!","Password Masih Kosong","error");
    }
    else{
        swal("SUCCES", "Anda Berhasil Login😁", "success",)
        .then((lanjut) => {
            if(lanjut){
                window.location.href= 'home.html'; 
            }
        });
    }
};

function exit(){
    swal({
        title: "Apa kamu yakin?",
        text: "Setelah keluar, Anda Harus Login Ulang Untuk Masuk Kembali ke Halaman ini!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Terima Kasih!", {
            icon: "success",
          }).then(function(){
            window.location.href = 'index.html'
          })
        } 
      });
};

function boking(){
  let nama = document.querySelector('.kotak').value;
  let lapangan = document.querySelector('.pilihlap').value;
  let waktuSewa =document.querySelector('.kotak1').value;
  let waktuMain = document.querySelector('.kotak3').value;
  let pembayaran = document.querySelector('.pilihpembayaran').value;
  let pria = document.querySelector('.pria').value;
  let wanita = document.querySelector('.wanita').value;
  let hp = document.querySelector('.kotak4').value;
  let ktp = document.querySelector('.kotak5').value;

  if(nama == '' || lapangan == '' || waktuSewa == '' || waktuMain == '' || pembayaran == '' || hp == '' || ktp == ''){
    swal("Upsss!","Silahkan Lengkapi Isi Formulir","error");
  }
  else if( pria == '' && wanita== ''){
    swal("Upsss!","Silahkan Lengkapi Isi Formulir","error");
  }
  else{
    swal("Berhasil", "Anda Telah Berhasil Membooking Lapangan!", "success")
    .then((lanjut) => {
            if(lanjut){
                window.location.href= 'form.html'; 
            }
        });
  }
};

$(document).ready(function(){
  $("#tabelSaya").DataTable();
});