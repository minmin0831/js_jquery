$.getJSON('audio_list.json', function(data) {
  const titles = [];
  const artists = [];
  $.each(data, function(key, value) {
    titles.push(`${value.title}`);
    artists.push(`${value.artist}`);
  });
  
  let index = 0;
  $.each(titles, () => {
    document.querySelector(`.title${index + 1}`).innerHTML = titles[index];
    document.querySelector(`.artist${index + 1}`).innerHTML = artists[index];
    document.querySelector(`#sound${index + 1}`).setAttribute('src', titles[index] + ".mp3");
    document.querySelector(`.pad${index + 1}`).style.backgroundImage = `url(${titles[index]}.png)`;
    index++;
  });
});


window.addEventListener('load', () => {
  
  let index = 0;
  let current = 0;
  let play = 0; // 0은 재생 정지. 1은 재생.
  const pads = document.querySelectorAll(".pads div");
  const sounds = document.querySelectorAll(".sound");

  $('.play').click(() => {
    $('.play').css('display', 'none');
    $('.pause').css('display', 'block');
    sounds[index].play();
    current = index;
    play = 1;
    playNext(index);
    console.log(index);
  });
  

  $('.pause').click(() => {
    $('.pause').css('display', 'none');
    $('.play').css('display', 'block');
    sounds[index].pause();
    play = 0;
    console.log(index);
  });

  $('.next').click(() => {
    sounds[index].pause();
    sounds[index].currentTime = 0;
    index++;
    if(index > sounds.length-1) {
      index = 0;
    }
    if(play) {
      sounds[index].play();
      current = index;
    }
    moveSlider(index);
    playNext(index);
    console.log(index);
  });

  $('.prev').click(() => {
    sounds[index].pause();
    sounds[index].currentTime = 0;
    index--;
    if(index < 0) {
      index = sounds.length-1;
    }
    if(play) {
      sounds[index].play();
      current = index;
    }
    moveSlider(index);
    console.log(index);
  });

  const playNext = index => {
    sounds[index].onended = () => {
      $('.next').click();
      return playNext(index);
    }
  }
  
  const moveSlider = index => {
    $('.container').animate({
      left: -(index*400)
    }, 'slow');
  }
});

