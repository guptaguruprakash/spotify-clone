console.log("Let's write some js");
async function getsongs() {
    try {
        let a = await fetch("http://127.0.0.1:3000/songs/");
        let response = await a.text();
        console.log(response);
        let div = document.createElement("div");
        div.innerHTML = response;
        let as = div.getElementsByTagName("a");
        let songs = [];
        for (let index = 0; index < as.length; index++) {
            const element = as[index];
            if (element.href.endsWith(".mp3")) {
                songs.push(element.href.split("/songs/")[1]);
            }
        }
        return songs;
    } catch (error) {
        console.error("An error occurred:", error);
        return [];
    }
}
async function main() {
    let songs = await getsongs();
    console.log(songs);
    let songul=document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML=songul.innerHTML+`<li>${song.replaceAll("%20","")}<li>`
    }

    
    // play the first song
    var audio =new Audio(songs[0]);
    // audio.play();
    audio.addEventListener("loadeddata",()=>
    {
        console.log(audio.duration);
    })
 
} 
main();
