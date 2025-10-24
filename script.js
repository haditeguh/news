// Data API
document.addEventListener("DOMContentLoaded", function () {
  // tunggu sampai halaman selesai load baru jalankan fungsi didalam
  //
  async function fetchNewsBanner() {
    // merupakan fungsi untuk fetch API dan memanipulasi konten
    //
    const listBeritaBannerContainer = document.getElementById(
      "list-berita-banner-container",
    );
    // dapatkan dulu elemen konten yang akan dimanipulasi isinya
    //
    const templateBeritaBanner = document.getElementById(
      "template-berita-banner",
    );
    // dapatkan elemen template
    //
    try {
      // buat block trycatch untuk menanggulangi jika api gagal fetch
      //
      const response = await fetch(
        `https://api-berita-indo.vercel.app/cnn/terbaru`,
      );
      // fetch url api dan simpan ke var response
      //
      if (!response.ok) {
        throw new Error("could not fetch data");
      }
      // block error jika api gagal di fetch
      //
      const data = await response.json();
      // ubah data api menjadi format json lalu simpan pada var data
      //
      const articles = data.slice(0, 3);
      // ambil 3 berita awal dan simpan ke var articles
      //
      listBeritaBannerContainer.innerHTML = "";
      // sterilkan list-berita-banner-container
      //
      articles.forEach((item, index) => {
        // lakukan loop menggunakan method forEach,
        // parameter item akan mengembalikan isi dari konten yang di loop,
        // dalam kasus api berita, konten dapat berupa object atau array yang berisi titleNews, image, textDescription, dsb.
        // index adalah urutan(index) yang berguna untuk menandai berita dengan indexing(you know what i mean).
        //
        //
        const clone = templateBeritaBanner.content.cloneNode(true);
        // gandakan templateBeritaBanner menggunakan `.content` yang merupakan property untuk akses node HTML
        // (dalam kasus ini seluruh isi dari elemen template).
        // kemudian .cloneNode(true) untuk menggandakan node dari parent sampai ke appendChild
        //
        //
        const itemEl = clone.querySelector(".carousel-item");
        // dapetin class .carousel-item kemudian simpan ke itemEl
        //
        //
        if (index === 0) itemEl.classList.add("active"); // biar carousel mulai dari berita pertama
        // jika index = 0 (item pertama), maka tambah .class active pada elemen target itemEl[0] => clone => templateBeritaBanner
        //
        //
        clone.querySelector(".carousel-banner-img").src = item.enclosure.url;
        // isikan data api ke dalam class .carousel-banner-img
        clone.querySelector(".carousel-banner-title").textContent = item.title;
        // isikan data api ke dalam class .carousel-banner-title
        //
        //
        listBeritaBannerContainer.appendChild(clone);
        // gabungkan var clone yang mana merupakan duplikasi dari templateBeritaBanner dengan data yang udah dimodif ke dalam
        // elemen listBeritaBannerContainer
        //
        //
      });
    } catch (error) {
      console.error("Gagal mengambil berita:", error);
      listBeritaBannerContainer.innerHTML = "<p>Gagal memuat berita</p>";
    }
  }

  async function fetchNewsTerbaru() {
    const listBeritaTerbaruContainer = document.getElementById(
      "list-berita-terbaru-container",
    );
    const templateBeritaTerbaru = document.getElementById(
      "template-berita-terbaru",
    );
    listBeritaTerbaruContainer.innerHTML = "";

    try {
      const res = await fetch(`https://api-berita-indo.vercel.app/cnn/terbaru`);
      const data = await res.json();
      const articles = data.slice(0, 5);

      articles.forEach((item) => {
        const clone = templateBeritaTerbaru.content.cloneNode(true);
        clone.querySelector(".card-berita-terbaru-img").src =
          item.enclosure.url;
        clone.querySelector(".card-berita-terbaru-title").textContent =
          item.title;
        clone.querySelector(".card-berita-terbaru-text").textContent =
          item.contentSnippet;

        listBeritaTerbaruContainer.appendChild(clone);
      });
    } catch (error) {
      console.error("Gagal mengambil berita ", error);
      listBeritaTerbaruContainer.innerHTML =
        "<p>Gagal mengambil berita terbaru</p>";
    }
  }

  async function fetchNewsTrending() {
    const listBeritaTrendingContainer = document.getElementById(
      "list-berita-trending-container",
    );
    const templateBeritaTrending = document.getElementById(
      "template-berita-trending",
    );
    listBeritaTrendingContainer.innerHTML = "";

    try {
      const res = await fetch(
        `https://api-berita-indo.vercel.app/antaranews/terbaru`,
      );
      const data = await res.json();
      const articles = data.slice(0, 5);

      articles.forEach((item) => {
        const clone = templateBeritaTrending.content.cloneNode(true);
        clone.querySelector(".card-berita-trending-img").src =
          item.enclosure.url;
        clone.querySelector(".card-berita-trending-title").textContent =
          item.title;
        clone.querySelector(".card-berita-trending-text").textContent =
          item.contentSnippet;
        listBeritaTrendingContainer.appendChild(clone);
      });
    } catch (error) {
      console.error("Gagal mengambil berita", error);
      listBeritaTrendingContainer.innerHTML = "<p>Gagal memuat berita</p>";
    }
  }

  fetchNewsBanner();
  // panggil fungsi fetchNews()
  fetchNewsTerbaru();
  fetchNewsTrending();
});

document.addEventListener("DOMContentLoaded", function () {
  const listBeritaKategoriContainer = document.getElementById(
    "list-berita-kategori-container",
  );
  const kategoriTemplate = document.getElementById("kategori-template");
  const kategoriLink = document.querySelectorAll("kategori-link");

  async function fetchNewsKategori() {
    try {
      const res = await fetch(`https://api-berita-indo.vercel.app/cnn/terbaru`);
      if (!res.ok) {
        throw new Error(`HTTP error, ${res.status}`);
      }
      const data = res.json();
      const articles = data.slice(0, 5);
      listBeritaKategoriContainer.innerHTML = "";
      articles.forEach((item) => {
        const clone = kategoriTemplate.content.cloneNode(true);
        // clone.querySelector(".card-berita-kategori-img").src =
        // clone.querySelector(".card-berita-kategori-title").textContent =
        // clone.querySelector(".card-berita-kategori-text").textContent =
        listBeritaKategoriContainer.appendChild(clone);
      });
    } catch (error) {
      console.error("Gagal memuat berita", error);
      listBeritaKategoriContainer.innerHTML = "<p>Berita gagal dimuat</p>";
    }
  }
});

// Chart Stock Market Dummy
const sp500 = document.getElementById("s&p500").getContext("2d");
const spChart = new Chart(sp500, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "S&P 500",
        data: [
          4500, 4600, 4550, 4700, 4650, 4600, 4500, 4600, 4550, 4700, 4650,
          4800,
        ],
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

const ihsg = document.getElementById("ihsg").getContext("2d");
const ihsgChart = new Chart(ihsg, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "IHSG",
        data: [
          4000, 5000, 4550, 4700, 4950, 4800, 5300, 4600, 4550, 4700, 4650,
          4800,
        ],
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

const bitcoin = document.getElementById("bitcoin").getContext("2d");
const btcChart = new Chart(bitcoin, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "BITCOIN",
        data: [
          3500, 2600, 4550, 5000, 5050, 4600, 6500, 5000, 5500, 6000, 6650,
          6900,
        ],
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

const gold = document.getElementById("gold").getContext("2d");
const goldChart = new Chart(gold, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "GOLD",
        data: [
          3000, 3600, 3900, 4100, 4000, 4500, 4200, 4800, 4900, 4700, 5000,
          4800,
        ],
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

const nasdaq = document.getElementById("nasdaq").getContext("2d");
const nasdaqChart = new Chart(nasdaq, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "NASDAQ",
        data: [
          4500, 4600, 4550, 4700, 4650, 4600, 4500, 4600, 4550, 4700, 4650,
          4800,
        ],
        tension: 0.2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
