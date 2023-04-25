const icon = document.getElementById('music-icon')  
const counterDiv= document.getElementById('counter_div');
const infoButton= document.getElementById('infoButton');
const infoSection= document.getElementById('infoSection');
const másMenos= document.getElementById('másMenos');
const music = document.getElementById('music');
let isPlaying= false;
let t= 0;


let counter = setInterval( function(){
  t ++;
  counterDiv.innerHTML=Math.ceil(t);
}, 100);


function togglePlay(){
  if(isPlaying){
    music.pause()
  } else{
    music.play();
  }
};

music.onplaying = function(){
  isPlaying = true;
};

music.onpause = function(){
  isPlaying = false;
}

icon.addEventListener('click',togglePlay)

infoButton.addEventListener('click', function(){
    if(infoSection.style.display === 'block'){
        infoSection.style.display = 'none'
        másMenos.textContent = 'More'
    }
    else{
        infoSection.style.display = 'block'
        másMenos.textContent = 'Less'
    }
})
