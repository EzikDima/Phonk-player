document.addEventListener('DOMContentLoaded', function() {
  var songSelect = document.getElementById('songSelect');
  var mySong = document.getElementById('mySong');

  songSelect.addEventListener('change', function() {
    mySong.src = this.value;
    mySong.play();
  });
  
  let state = false;
  let btn = document.querySelector(".btn");
  let record = document.querySelector(".record");
  let toneArm = document.querySelector(".tone-arm");

  btn.addEventListener("click", () => {
    if (state == false) {
      record.classList.add("on");
      toneArm.classList.add("play");
      setTimeout(() => {
        mySong.play();
      }, 1000);
    } else {
      record.classList.remove("on");
      toneArm.classList.remove("play");
      mySong.pause();
    }
    state = !state;
  });
});
