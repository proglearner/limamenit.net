const sehat = document.querySelectorAll (".sehat input");
function count () {
 tkal = 0;
 thar = 0;
 jumlah.forEach (function (j, n) {
  tkal += kalori[n] * Number(j.value);
  thar += harga[n] * Number(j.value);
 });
 document.querySelector ("#total_kalori").innerHTML = tkal;
 document.querySelector ("#total_harga").innerHTML = thar;
 s = 0;
 sehat.forEach (function (item) {
  if (Number(item.value) > 0) {
   s = 1;
  }
 })
 comment.innerHTML = "";
 if (s == 0) {
  comment.innerHTML += "Yakin gak mau tambah sayur dan buah? ";
 }
 if (tkal > 600) {
  comment.innerHTML += "Wow kamu lagi lapar banget ya? Imbangi dengan olahraga ya buat bakar kalori.";
 } else if (tkal < 300) {
  comment.innerHTML += "Gak mau tambah lagi nih??";
 } else if (s != 0) {
  comment.innerHTML += "Selamat makan!!";
 }
}
const kalorib = document.querySelectorAll (".kalori");
let kalori = [];
kalorib.forEach (function (item) {
 kalori.push (Number(item.innerText));
});
const pointb = document.querySelectorAll (".point");
let point = [];
pointb.forEach (function (item) {
 point.push (Number(item.innerText));
});
const hargab = document.querySelectorAll (".harga");
let harga = [];
hargab.forEach (function (item) {
 harga.push (Number(item.innerText));
});
const comment = document.querySelector ("#comment");
let tkal = 0;
let thar = 0;
jumlah = document.querySelectorAll (".jumlah");
jumlah.forEach (function (item) {
 item.addEventListener ("input", count);
});
document.querySelector ("#total_kalori").innerHTML = tkal;
document.querySelector ("#total_harga").innerHTML = thar;

const order = document.querySelector ("#order");
order.addEventListener ("click", function () {
 if (Number(document.querySelector("#total_harga").innerHTML) > 0) {
  tpts = 0;
  jumlah.forEach (function (j, n) {
   tpts += point[n] * Number(j.value);
  })
  sessionStorage.setItem ("point", Number(sessionStorage.getItem("point"))+tpts);
  jumlah.forEach (function (j) {
   j.value = 0;
  });
  count ();
  comment.style.border = "";
  comment.innerHTML = "";
  document.location = 'order.html';
 }
});
const menu_d = document.querySelector ("#menu_d");

function updatePoint () {
 document.querySelector ("#total_point").innerHTML = sessionStorage.getItem ("point");
 requestAnimationFrame (updatePoint);
}
requestAnimationFrame (updatePoint);