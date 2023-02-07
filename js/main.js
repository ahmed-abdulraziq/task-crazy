// play video
const play = document.getElementById("play") || null;
const video = document.getElementById("video") || null;

if (play && video) {
    play.addEventListener('click', (e) => {
        e.target.style.opacity = 0;
        video.play();
    });
}

onscroll = () => {
    const list = ["header", "about", "services", "advantages"].reverse();
    for (e of list) {
        const link = document.getElementById(`link-${e}`);
        link && link.classList.remove("text-blue");
    }
    for (e of list) {
        const el = document.getElementById(e) || null;
        const link = document.getElementById(`link-${e}`) || null;

        if (el && link && window.scrollY >= el.offsetTop - 200) {
            link.classList.add("text-blue");
            break;        
        }
    }
}


const btnShowDesc = document.querySelectorAll(".btnShowDesc") || null;
const pShowDesc = document.querySelectorAll(".pShowDesc") || null;

if (btnShowDesc && pShowDesc) {
    for (let i = 0; i < btnShowDesc.length; i++) {
        btnShowDesc[i].addEventListener('click',() => {
            pShowDesc[i].classList.toggle("d-none");
        })
    }
}
