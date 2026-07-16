const music = document.querySelector("#music");

const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("btn");

setTimeout(()=>{
    title.innerHTML = "Menghubungkan ke server...";
    text.innerHTML = "Connection Established";
},2000);

setTimeout(()=>{
    title.innerHTML = "Memverifikasi penerima hadiah...";
    text.innerHTML = "Checking Access...";
},5000);

setTimeout(()=>{
    title.innerHTML = "Akses diterima ✅";
    text.innerHTML = "Selamat! Kamu adalah orang spesial yang menerima hadiah ini.";
    btn.style.display = "inline-block";
},8000);

function start(){

    music.play();

    title.innerHTML = "🎉 HAPPY BIRTHDAY SAYANG 🎉";

    text.innerHTML = `

<p>Who's birthday today?? Yapp pacar akuuu ❤️</p>

<p>Kamu pikir aku lupa yaa... gamungkin lupa dong hehe.</p>

<p>Selamat ulang tahun ya sayangkuu ❤️</p>

<p>Semoga dengan bertambahnya usia kamu, kamu selalu menjadi pribadi yang lebih baik dari hari ke hari, lebih dewasa, dan semakin kuat menghadapi semua hal yang datang dalam hidupmu.</p>

<p>Semoga kamu selalu diberi kesehatan, baik fisik maupun mental, dilancarkan rezekinya, dipermudah semua urusannya, dan dikuatkan di setiap proses yang sedang kamu jalani.</p>

<p>Makasih banyak karena kamu sudah berhasil melewati hal-hal berat di dunia ini dan menyelesaikannya dengan sangat baik. I'm so proud of you ❤️</p>

<p>Semoga tujuan dan impian kamu bisa tercapai satu per satu.</p>

<p>Kalau kamu butuh seseorang untuk menjadi tempat cerita segala keluh kesahmu, selama ada aku, aku akan selalu ada untukmu.</p>

<p>I will always support you dalam hal apa pun itu.</p>

<p>Always remember that everything is going to be okay and your life is going to be better.</p>

<p>Makasih juga sudah mau belajar saling mengerti dan bertahan sampai sejauh ini.</p>

<p>Maaf kalau aku masih sering bikin kamu kesal.</p>

<p>Happy Birthday Sayangg ❤️</p>

<p>Always love uuu ❤️</p>
`;

    btn.style.display = "none";
}