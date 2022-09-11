//console.log("welcome to rhythm");


 $(document).ready(function(){

    $("#home").click(function(){

     window.location.href="file:///F:/java/Microsoft%20VS%20Code/bin/rhythm%20Music/home.html";
 })


     $("#img12").click(function(){
     
         window.location.href= "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
        
     })

     
     $("#img2").click(function(){
     
        window.location.href= "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
       
    })

    
    $("#img3").click(function(){
     
        window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
       
    })

    
    $("#img4").click(function(){
    
       window.location.href=
       "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
      
   })

   $("#img5").click(function(){
     
    window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
   
})


$("#img6").click(function(){

   window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
  
})

$("#img7").click(function(){
     
    window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
   
})


$("#img8").click(function(){

   window.location.href= "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
  
})

$("#img9").click(function(){
     
    window.location.href= "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
   
})


$("#img10").click(function(){

   window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
  
})

$("#img11").click(function(){
     
    window.location.href="file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
   
})


$("#img12").click(function(){

   window.location.href=
   "file:///C:/Users/kishan/Desktop/rhythm%20Music/rhythm.html";
  
})

   
})
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let playing=document.getElementById('playing');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=document.querySelectorAll('.songItemPlay');
let next=document.getElementById('next');
let previous=document.getElementById('previous');
let masterSongName=document.getElementById('masterSongName');
let containerImg=document.getElementById('containerImg');




songs =[{songName:"Bulleya.mp3",songPath:"songs/Bulleya - 320Kbps.mp3",coverPath:"images/bulleya.jpg"},
{songName:"kabira.mp3",songPath:"songs/Kabira-Arijit Singh 320 Raag.Me.mp3",coverPath:"images/ranbir1.jpg"},
{songName:"The breakup Song.mp3",songPath:"songs/The Breakup Song.mp3",coverPath:"images/BreakupSong.jpg"},
{songName:"Channa Mereya.mp3",songPath:"songs/Channa Mereya.mp3",coverPath:"images/Channa_Mereya.jpg"},
{songName:"Ae Dil Hai Mushkil.mp3",songPath:"songs/01 Ae Dil Hai Mushkil - Title Track (Ae Dil Hai Mushkil).mp3",coverPath:"images/aedil.jpg"}];


songItems.forEach((element,i)=>{

 element.getElementsByTagName("img")[0].src=songs[i].coverPath;
 element.getElementsByClassName("songPlay")[0].innerText=songs[i].songName;
})


//play and pause
masterPlay.addEventListener('click',()=>{
 
    if(audioElement.paused || audioElement<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        playing.style.opacity="1";
        masterSongName.innerText="Bulleya.mp3";
        containerImg.src="images/bulleya.jpg";
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle-o');
        masterPlay.classList.remove('fa-pause-circle-o');
        playing.style.opacity="0";
        masterSongName.innerText="Bulleya.mp3";
    }
  
})
//Listen to Event
audioElement.addEventListener('timeupdate',()=>{
   

    let progess=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progess;

})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


//audioElement.play();



function MakeAllPlays(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle-o');
    element.classList.remove('fa-pause-circle-o');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{

    element.addEventListener('click',(e)=>{
        console.log(e.target);
        songIndex=parseInt(e.target.id);
        
        MakeAllPlays();
        containerImg.src=songs[songIndex].coverPath;
        e.target.classList.remove('fa-play-circle-o');
        e.target.classList.add('fa-pause-circle-o');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;


       
        audioElement.play();

        audioElement.currentTime=0;
        masterPlay.classList.add('fa-pause-circle-o');
        masterPlay.classList.remove('fa-play-circle-o');
        playing.style.opacity="1";


    })

    
})

next.addEventListener('click',()=>{

    if (songIndex>=4)
        songIndex=0; 
    else
    songIndex ++;

    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    containerImg.src=songs[songIndex].coverPath;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.add('fa-pause-circle-o');
    masterPlay.classList.remove('fa-play-circle-o');
})

previous.addEventListener('click',()=>{

    if (songIndex<=0)
        songIndex=0; 
    else
    songIndex --;

    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    containerImg.src=songs[songIndex].coverPath;
    audioElement.play();
    audioElement.currentTime=0;
    masterPlay.classList.add('fa-pause-circle-o');
    masterPlay.classList.remove('fa-play-circle-o');
})

