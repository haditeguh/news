document.addEventListener("DOMContentLoaded", function () {
  async function fetchNews() {
    try {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/health/us.json",
      );
      const data = await response.json();
      if (data.status === "ok") {
        // Tampilkan Banner Berita
        const beritaBannerContainer = document.getElementById(
          "list-berita-banner-container",
        );
        const templateBanner = document.getElementById(
          "template-berita-banner",
        );
        const indexArtikelBeritaBanner = [6, 15, 11];
        indexArtikelBeritaBanner.forEach((i) => {
          const article = data.articles[i];
          if (article) {
            const cardBanner = templateBanner.content.cloneNode(true);

            cardBanner.querySelector(".carousel-banner-img").src =
              article.urlToImage;
            cardBanner.querySelector(".carousel-banner-title").textContent =
              article.title;
            cardBanner.querySelector(".carousel-banner-text").textContent =
              article.decription || "";

            beritaBannerContainer.appendChild(cardBanner);
          }
        });

        // Tampilkan Berita Terbaru
        const beritaTerbaruContainer = document.getElementById(
          "list-berita-terbaru-container",
        );
        const templateTerbaru = document.getElementById(
          "template-berita-terbaru",
        );

        const indexArtikelBeritaTerbaru = [8, 11, 15, 6, 7];
        indexArtikelBeritaTerbaru.forEach((i) => {
          const article = data.articles[i];
          if (article) {
            // clone template
            const card = templateTerbaru.content.cloneNode(true);

            // isi data ke dalam elemen template
            card.querySelector(".card-berita-terbaru-img").src =
              article.urlToImage;
            card.querySelector(".card-berita-terbaru-title").textContent =
              article.title;
            card.querySelector(".card-berita-terbaru-text").textContent =
              article.description || "";
            card.querySelector("a").href = article.url;

            // tambahkan ke container
            beritaTerbaruContainer.appendChild(card);
          }
        });

        // Tampilkan Berita Trending
        const beritaTrendingContainer = document.getElementById(
          "list-berita-trending-container",
        );
        const templateTrending = document.getElementById(
          "template-berita-trending",
        );

        const indexArtikelBeritaTrending = [21, 32, 3, 25, 5];
        indexArtikelBeritaTrending.forEach((i) => {
          const article = data.articles[i];
          if (article) {
            // clone template
            const cardTrending = templateTrending.content.cloneNode(true);

            // isi data ke dalam elemen template
            cardTrending.querySelector(".card-berita-trending-img").src =
              article.urlToImage;
            cardTrending.querySelector(
              ".card-berita-trending-title",
            ).textContent = article.title;
            cardTrending.querySelector(
              ".card-berita-trending-text",
            ).textContent = article.description || "";

            // tambahkan ke container
            beritaTrendingContainer.appendChild(cardTrending);
          }
        });
      } else {
        console.error("Gagal Load Berita ", data.message);
      }
    } catch (error) {
      console.error("Gagal Load Berita ", error);
    }
  }
  fetchNews();
});
