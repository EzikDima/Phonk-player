document.addEventListener('DOMContentLoaded', function() {
  let songSelect = document.getElementById('songSelect');
  let mySong = document.getElementById('mySong');
  let slider = document.querySelector(".slider");

  songSelect.addEventListener('change', function() {
    mySong.volume = 100;
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

  // Добавьте обработчик событий для слайдера, чтобы изменить громкость аудио
  slider.addEventListener('input', function() {
    mySong.volume = this.value / 100; // Значение слайдера должно быть между 0 и 100
  });
});
