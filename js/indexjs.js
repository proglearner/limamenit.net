const login_form = document.querySelector ("#login_form");
const error = document.querySelector ("#error");
login_form.addEventListener ("submit", check_login);
function check_login (event) {
 event.preventDefault ();
 error.innerHTML = "";
 if (login_form["NIS"].value == "") {
  error.innerHTML = error.innerHTML + "Tolong masukkan NIS<br>";
 }
 if (login_form["pwd"].value == "") {
  error.innerHTML = error.innerHTML + "Tolong masukkan password <br>";
 }
 if (error.innerHTML == "") {
  sessionStorage.clear ();
  sessionStorage.setItem("account", login_form.NIS.value);
  document.location = "dashboard.html"
 }
}