/* 
  아래에 코드를 작성해주세요.
*/

const API_URL = "http://ws.audioscrobbler.com/2.0/?method=album.search";

const inputTag = document.querySelector("input");

const btnTag = document.querySelector("button");

const resultTag = document.querySelector(".search-result");

const MY_API_KEY = "c73dd19cfc3601b28166646f4809aa2b";

let prev;

function ser(event) {
  if (prev === inputTag.value) {
    return;
  }
  resultTag.innerHTML = "";
  const keyword = inputTag.value;
  prev = inputTag.value;
  axios({
    method: "get",
    url: API_URL,
    params: {
      album: keyword,
      format: "json",
      limit: 10,
      page: 1,
      api_key: MY_API_KEY,
    },
  }).then((res) => {
    console.log(res.data.results.albummatches.album);
    let album = res.data.results.albummatches.album;
    for (let song of album) {
      const imgTag = document.createElement("img");
      const songImg = song.image[1]["#text"];
      if (!songImg) {
        imgTag.src =
          "https://op-js-music-search.netlify.app/assets/default.png";
        imgTag.style.height = "64px";
        imgTag.style.width = "64px";
      } else {
        imgTag.src = songImg;
      }

      const h2Tag = document.createElement("h2");
      h2Tag.innerText = song.artist;

      const pTag = document.createElement("p");
      if (song.name === "(null)") {
        pTag.innerText = "";
      } else {
        pTag.innerText = song.name;
      }

      const divText = document.createElement("div");
      divText.classList.add("search-result__text");

      const aTag = document.createElement("a");
      aTag.setAttribute("href", song.url);

      const card = document.createElement("div");
      card.classList.add("search-result__card");

      divText.appendChild(h2Tag);
      divText.appendChild(pTag);
      console.log(divText);
      card.appendChild(imgTag);
      card.append(divText);

      card.addEventListener("click", function (event) {
        window.location.href = song.url;
      });

      resultTag.append(card);
    }
  });
}

btnTag.addEventListener("click", ser);

inputTag.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    ser();
  }
});

console.log(inputTag);
