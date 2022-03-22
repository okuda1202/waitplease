'use strict';

// 要素
const music = new Audio('musics/wait.mp3');
const play = document.getElementById('play');
const volumeUp = document.getElementById('volume-up');
const volumeDown = document.getElementById('volume-down');
const mute = document.getElementById('mute');


document.addEventListener('keypress', keypress_ivent);
/*
function keypress_ivent(e) {
	//いずれかのキーが押された時の処理
    if(!music.paused){
        play.innerHTML ="再生";
        music.reset();
      }else{
        play.innerHTML = "停止";
        music.play();
        
      }
	return false; 
}

// 再生ボタン
play.addEventListener('click', function(){
  if(!music.paused){
    play.innerHTML ="再生";
    music.pause();
  }else{
    play.innerHTML = "停止";
    music.play();
  }
});

*/


 // 画像を切り替える関数
 function changeImage() {
   idx++;
   idx %= 2;


   if(idx == 0){
     image_place.style.display = "none";
     play.innerHTML ="再生";
    music.pause();
    music.currentTime = 0;
   }
   else{
     image_place.style.display = "block";
     play.innerHTML = "停止";
     music.play();
     

   }
   // img要素のsrcに画像ファイル名を設定する
   // img.src = "img/" + "sample" + idx + ".png";
 }

