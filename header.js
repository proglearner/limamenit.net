let nte = document.createElement ("div");
document.body.appendChild (nte);
nte.outerHTML = '<nav class="navbar navbar-expand-sm fixed-top" style="background-color:#8bc34a; padding:0;" id="navbar"><div class="logo" style="background-color:white;"><img src="asset/logo.png" alt="logo" width="50" height="43"></div><div class="container-fluid justify-content-end"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header">≡</button><div class="collapse navbar-collapse justify-content-end" id="header"><ul class="navbar-nav"></ul></div></div></nav><div id="header_trick"></div>';
function updateTrickHeight () {
 document.querySelector ("#header_trick").style.height = String (document.querySelector ("#navbar").clientHeight) + "px";
 requestAnimationFrame (updateTrickHeight);
}
requestAnimationFrame (updateTrickHeight);
const navopt = document.querySelector (".navbar-nav");
const path = String(document.location).split ("/");
let docname = path[path.length-1];
docname = docname.split ("#");
docname = docname[0];
if (docname == "index.html") {
 navopt.innerHTML = '<li class="nav-item"><a class="nav-link" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#about">About Us</a></li><li class="nav-item"><a class="nav-link" href="#testimoni">Testimoni</a></li><li class="nav-item"><a class="nav-link" href="#artikel">Artikel</a></li><li class="nav-item"><a class="nav-link" id="acc_home"></a></li>';
 const acc_home = document.querySelector ("#acc_home");
 if (sessionStorage.getItem("account") != null) {
  acc_home.innerHTML = "Order";
  acc_home.href = "dashboard.html";
 } else {
  acc_home.innerHTML = "Login";
  acc_home.href = "#login";
 }
} else {
 navopt.innerHTML = '<li class="nav-item"><a class="nav-link" href="index.html">Home</a></li><li class="nav-item"><span id="logout" class="nav-link">Logout</span></li>'
 const logout = document.querySelector ("#logout");
 logout.addEventListener ("click", function logout () {
  sessionStorage.clear();
  document.location = "index.html";
 });
}
const favicon = document.createElement ("link");
favicon.rel = "icon";
favicon.href = "asset/logo.png";
document.head.appendChild (favicon);