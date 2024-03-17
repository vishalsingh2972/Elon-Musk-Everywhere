
let elonMuskImages = [
  "https://www.politico.eu/cdn-cgi/image/width=1280,quality=80,onerror=redirect,format=auto/wp-content/uploads/2023/08/22/GettyImages-1229892852-scaled.jpg",
  "https://i.guim.co.uk/img/media/ff51317a233516aede64e630c73fdb26106c8b0f/0_32_3500_2099/master/3500.jpg?width=620&dpr=2&s=none",
  "https://img.lemde.fr/2022/11/25/13/0/2100/1050/2048/1024/45/0/2afbd07_1669390937464-twitter-musk-oiseau6.png",
  "https://wave.rozhlas.cz/sites/default/files/styles/cro_original_tablet/public/images/790c6d5890ec2e599c4fba011e6e2dc9.jpeg?itok=XX7aZgkT",
  "https://themalaysianreserve.com/wp-content/uploads/2022/04/Elon-Musk%E2%80%99s-Twitter-Investment-Could-Be-Bad-News-for-Free-Speech.jpeg",
  "https://sm.mashable.com/t/mashable_in/article/m/musks-twit/musks-twitter-takeover-isnt-going-the-way-you-think_f5fd.1248.jpg",
  "https://pbs.twimg.com/media/F4KmeU4X0AAJ_Vt?format=jpg&name=medium",
  "https://pbs.twimg.com/media/F4M64_SbgAANoRd?format=jpg&name=large",
  "https://pbs.twimg.com/media/F4MTKqNWsAAETCJ?format=jpg&name=medium",
  "https://pbs.twimg.com/media/F3d3WnrakAImHZu?format=jpg&name=large",
  "https://c.files.bbci.co.uk/7727/production/_103330503_musk3.jpg"
];

const images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++){
    const randomImg = Math.floor(Math.random() * elonMuskImages.length);
    images[i].src = elonMuskImages[randomImg];
}

const headers = document.getElementsByTagName("h2");
for(let i = 0; i < headers.length; i++){
    headers[i].innerText = "Made with ❤️ by Vishal";
}
