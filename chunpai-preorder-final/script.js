const songsData = {
    "First LoVE!!!!": {
        lyrics: "It seems like a long time ago<br>在水裡游泳 森林裡放空<br>I miss the days that I with you<br>望向橘色街頭 那時候你我<br>like always wanna figure out what you think<br>對所有事情都很在意<br>oh my oh my god 究竟什麼是 truth<br>oh why~~ why are you so beautiful to be mine<br>Cause you're my first LoVE oh~~<br>you're my first LoVE ohh<br>You're my First love<br>you're my first LoVE<br>Time stop when you look at me<br>When you say you love me is the craziest things<br>oh I always wanna see your smile be mine<br>cause you're my<br>I think<br>first love is unforgettable all one's life<br>you make my heart smile it's killing me<br>don't leave me alone",
        audio: "audios/firstlove-preview.mp3"
    },
    "Again": {
        lyrics: "憂憂的景象 而他 還是一樣<br>總想遺忘那些 看似事與願違 纏繞著誰<br>但我總在你失落之後放棄自由<br>就讓我封閉 就給我逃避<br>Baby count on to 3 我們都放輕鬆<br>Will you come back to me? 我會把你抱緊<br>Baby count on to 3 我們都放輕鬆<br>Will you come back to me? 我會把你抱緊<br>Again and again",
        audio: "audios/again-preview.mp3"
    },
    "OME": {
        lyrics: "Hey, you know I love you<br>Did you know, you make me feel that I'm complete<br>I wish you can forever be a part of my life<br>I'm on your side<br>When you're lost or hide<br>When feel tough again<br>You can tell me everything<br>Oh baby please just cry<br>I'll be on your side<br>when all the time<br>when you feel down<br>or be alone<br>you know my world can turn because of you<br>My everything is you<br>My everything is you",
        audio: "audios/ome-preview.mp3"
    },

    "When We End(開始)": {
        lyrics: "When I really hurt you<br>When I really hurt you<br>but I can't find a way to save us<br>Maybe not so long ago<br>I'm not ok<br>where should I go<br>and how about you<br>I miss you all day<br>like the things never pass<br>but you never find me when I need you<br>When I really hurt you<br>When tears welled up in her eyes<br>but I can't find a way to save us<br>When you really hurt me<br>when my heart is getting broken<br>What those really mean to me<br>When I'm with you<br>I don't wanna be me anymore<br>I don't wanna<br>Maybe I'm the problem<br>maybe I maybe I maybe I maybe I maybe I<br>maybe I'm the problem<br>maybe I'm the problem<br>maybe I'm the problem",
        audio: "audios/whenweend-preview.mp3"
    }

};

const slider = document.querySelector('.product-slider');

slider.addEventListener('wheel', (evt) => {
    if (evt.deltaY === 0) return; // 如果沒滾動就不處理
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY * 0.8; // 滾動不要太快，乘0.8比較自然
});





function openModal(songName) {
    const song = songsData[songName];
    if (song) {
        document.getElementById('modalTitle').innerText = songName;
        document.getElementById('modalLyrics').innerHTML = song.lyrics;
        document.getElementById('modalAudio').src = song.audio;
        document.getElementById('trackModal').style.display = "block";
    }
}

function closeModal() {
    document.getElementById('trackModal').style.display = "none";
    document.getElementById('modalAudio').pause();
}

// 滾動淡入動畫
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
/* script.js 內容待補充 */

document.querySelectorAll('.track').forEach(track => {
  track.addEventListener('click', function () {
    const title = this.dataset.title;
    openModal(title);
  });
});
