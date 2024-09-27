const sec_cont = document.querySelectorAll (".section-container");
sec_cont.forEach (function (item) {
 let trick = document.createElement ("div");
 trick.style.height = String (document.querySelector ("#navbar").clientHeight) + "px";
 trick.id = item.id;
 item.id = "";
 document.body.insertBefore (trick, item);
});
const posint = document.querySelectorAll (".posint");
posint.forEach (function (item){
 item.addEventListener ("keydown", function (event) {
  if (event.key.charCodeAt () == 43 || event.key.charCodeAt () == 45 || event.key.charCodeAt () == 46 || event.key.charCodeAt () == 101 || event.key.charCodeAt () == 69 || event.key.charCodeAt () == 44) {
   event.preventDefault ();
  }
 }, false);
 item.min = "0";
 item.step = "1";
})