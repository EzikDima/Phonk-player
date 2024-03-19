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
  let slider = document.querySelector(".slider");

  btn.addEventListener("click", () => {
    if (state == false) {
      record.classList.add("on");
      toneArm.classList.add("play");
      setTimeout(() => {
        mySong.play(); // Используйте mySong вместо song
      }, 1000);
    } else {
      record.classList.remove("on");
      toneArm.classList.remove("play");
      mySong.pause(); // Используйте mySong вместо song
    }
    state = !state;
  });
});
