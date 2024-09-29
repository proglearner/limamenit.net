const banana = document.querySelector ("#a500");
const milk = document.querySelector ("#a1000");
const ticket = document.querySelector ("#a5000");
const rewards = [banana, milk, ticket];
rewards.forEach (function (item) {
 item.addEventListener ("click", function () {
  let pts = item.id;
  pts = pts.replace ("a", "");
  pts = Number(pts);
  if (sessionStorage.getItem('point') >= pts) {
   sessionStorage.setItem('point', sessionStorage.getItem('point')-pts);
   alert (`Selamat! Anda telah berhasil menukarkan point anda! Point anda berkurang sebanyak ${pts}`);
  }
 });
});
pbcs = [];
rewards.forEach (function (item) {
 let pbc = document.createElement ("span");
 pbc.className = "pbc";
 pbcs.push (pbc);
 item.appendChild (pbc);
});
function updatePoint () {
 document.querySelector ("#total_point").innerHTML = sessionStorage.getItem ("point");
 pbcs.forEach (function (item) {
  if (Number(String (item.parentElement.id).replace("a", "")) > sessionStorage.getItem("point")) {
   item.innerHTML = "<br>Yah... Pointmu belum cukup untuk mendapatkan aku";
  } else {
   item.innerHTML = "<br>Klik gambar untuk mendapatkan aku!";
  }
 });
 requestAnimationFrame (updatePoint);
}
requestAnimationFrame (updatePoint);