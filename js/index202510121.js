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
const login_confirm = document.querySelector ("#login_confirm");
if (sessionStorage.getItem ('account') != null) {
  login_confirm.value = "Ganti Akun";
}

const artikel_btn = document.querySelector ("#selengkapnya_artikel");
artikel_btn.addEventListener ("click", function () {
  if (artikel_btn.innerHTML == "Selengkapnya") {
    artikel_btn.innerHTML = "Tutup";
    } else {
    artikel_btn.innerHTML = "Selengkapnya";
  }
});

Promise.all([
  faceapi.nets.ssdMobilenetv1.loadFromUri("face-api.js-master/weights"),
  faceapi.nets.faceLandmark68Net.loadFromUri("face-api.js-master/weights"),
  faceapi.nets.faceRecognitionNet.loadFromUri("face-api.js-master/weights"),
  faceapi.nets.ageGenderNet.loadFromUri("face-api.js-master/weights")
])//.then(startVideo)

/*
  [min, max, menu]
  min <= u < max
*/
const recommendation = [
  [0, 10, "asset/STEAK_DETAIL.png"],
  [10, 20, "asset/RENDANG_DETAIL.png"],
  [20, 30, "asset/BROKOLI_DETAIL.png"],
  [25, 30, "asset/APEL_DETAIL.png"],
  [30, 40, "asset/KANGKUNG_DETAIL.png"],
  [40, Number.POSITIVE_INFINITY, "asset/PISANG_DETAIL.png"]
]

const video = document.querySelector("#video");
const recomm = document.querySelector("#recommendation");
video.addEventListener("play", function(){
    interval_ids.push(setInterval(async function(){
      const detections = await faceapi.detectAllFaces(video, new faceapi.SsdMobilenetv1Options()).withAgeAndGender();
      if(detections.length > 0) {
        console.log(detections);
        stopVideo();
        video.style.display = "none";
        recomm.style.display = "block";
        for (let r = 0; r < recommendation.length; r++){
          rc = recommendation[r];
          if(rc[0] <= detections[0].age && detections[0].age < rc[1]){
            recomm.src = rc[2];
            break;
          }
          console.log(rc)
        }
        document.querySelector("#scan_description").innerHTML = 
            `Perkiraan Umur Anda: ${Math.trunc(detections[0].age)} tahun.<br>
            <span class="bold normal-big dark-green">Rekomendasi Menu untuk Anda</span>`;
      }
    }, 100))
  })
let video_streams = [] // one time to prevent unaccessible streams
let interval_ids = [] // to handle multiple play (unexpected)
let timeouts = []
function startVideo(){
  timeouts.forEach(function(item){clearTimeout(item);});
  navigator.mediaDevices.getUserMedia({video: {}}).then(
    function(stream){
      video.srcObject = stream;
      video_streams.push(stream);
      console.log(stream);
    }, 
    function(err){console.error(err)});
  video_streams.push(false);
  video.style.display = "block";
  recomm.style.display = "none";
  video.play()
}
const modal = document.querySelector("#MenuAI_box");
modal.addEventListener("hidden.bs.modal", stopVideo);
function stopVideo(){
  interval_ids.forEach(function(id){
    clearInterval(id)
  });
  interval_ids = [];
  video_streams.forEach(function(stream){
    if(stream){
      stream.getTracks().forEach(function(track){
        if(track.readyState == "live") {track.stop();}
      });
    }
  });
  video.pause();
  video.srcObject = null;
}
document.querySelector("#MenuAI_btn").addEventListener("click", startVideo)
timeouts.push(setTimeout(function(){
  m = new bootstrap.Modal(modal)
  m.show()
  startVideo();
}, 5000));
recomm.addEventListener("click", function(){
  if(sessionStorage.getItem("account") != null){
    document.location = "dashboard.html"
  }
})