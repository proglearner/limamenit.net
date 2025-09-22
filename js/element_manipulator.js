const sec_cont = document.querySelectorAll (".section-container");
t = [];
sec_cont.forEach (function (item) {
  let trick = document.createElement ("div");
  trick.style.height = String (document.querySelector ("#navbar").clientHeight) + "px";
  trick.id = item.id;
  item.id = "";
  document.body.insertBefore (trick, item);
  t.push (trick);
});
function updateTrickSize () {
  t.forEach (function (item) {
    item.style.height = String (document.querySelector ("#navbar").clientHeight) + "px";
  });
  requestAnimationFrame (updateTrickSize);
}
requestAnimationFrame (updateTrickSize);

const posint = document.querySelectorAll (".posint");
posint.forEach (function (item){
  item.addEventListener ("keydown", function (event) {
    const key_disabled = [43, 44, 45, 46, 101, 69]
    if (key_disabled.includes(event.key.charCodeAt())) {
      event.preventDefault ();
    }
  }, false);
  item.min = "0";
  item.step = "1";
})