const myMessage = "To my favorite person... I just wanted to tell you that you really are special in a way that's hard to explain. There's a softness in the way you talk, a sweetness in the way you smile, and something genuine about you that just feels good to be around. Thank you for being in my life. ❤️";

function showPage(pageId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// 1. Heart Rain Effect
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = ['❤️', '💖', '✨', '🌸', '💘'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
    document.body.appendChild(heart);
    
    heart.animate([
        { transform: 'translateY(-10vh) rotate(0deg)', opacity: 1 },
        { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: Math.random() * 3000 + 3000,
        easing: 'linear'
    }).onfinish = () => heart.remove();
}
setInterval(createHeart, 400);

// 2. Cuteness Meter
function startCutenessMeter() {
    showPage('page2');
    let width = 0;
    let bar = document.getElementById('progressBar');
    let percentText = document.getElementById('percentage');
    
    let interval = setInterval(() => {
        if (width >= 120) {
            clearInterval(interval);
            document.getElementById('warning').innerText = "⚠️ SYSTEM OVERLOAD: TOO CUTE TO HANDLE";
            setTimeout(() => showPage('page3'), 2500);
        } else {
            width++;
            bar.style.width = (width / 120 * 100) + "%";
            percentText.innerText = width + "%";
            if(width === 100) document.getElementById('meterStatus').innerText = "Finalizing results...";
        }
    }, 45);
}

// 3. Click to Reveal
let count = 0;
function reveal(el, text) {
    if(!el.classList.contains('revealed')) {
        el.innerHTML = `<span style="animation: fadeIn 0.5s">${text}</span>`;
        el.classList.add('revealed');
        count++;
        if(count === 5) document.getElementById('seeMoreBtn').classList.remove('hidden');
    }
}

// 4. Letter Typing Effect
function openLetter() {
    document.getElementById('letterClosed').classList.add('hidden');
    document.getElementById('letterOpen').classList.remove('hidden');
    
    const container = document.getElementById('typing-area');
    let i = 0;
    function type() {
        if (i < myMessage.length) {
            container.innerHTML += myMessage.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}