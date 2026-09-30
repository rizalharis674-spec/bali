const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const downloadButton = document.querySelector("#download-itinerary");
const downloadStatus = document.querySelector("#download-status");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Buka navigasi" : "Tutup navigasi");
  siteNav.classList.toggle("is-open", !isExpanded);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    siteNav.classList.remove("is-open");
  }
});

downloadButton.addEventListener("click", () => {
  const itinerary = [
    "RUANG UBUD - ITINERARY SINGKAT",
    "",
    "PAGI  | Jalan santai di Campuhan Ridge Walk",
    "SIANG | Makan siang dan kopi di pusat Ubud",
    "SORE  | Kunjungi galeri seni atau Pasar Seni Ubud",
    "SENJA | Nikmati matahari terbenam di sawah terasering",
    "",
    "LOKASI: Ubud, Kabupaten Gianyar, Bali, Indonesia",
    "PETA  : https://www.google.com/maps/search/?api=1&query=Ubud%2C+Bali%2C+Indonesia",
    "",
    "Periksa jam buka dan kondisi cuaca sebelum berangkat."
  ].join("\n");
  const file = new Blob([itinerary], { type: "text/plain;charset=utf-8" });
  const fileUrl = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = fileUrl;
  link.download = "itinerary-ubud.txt";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(fileUrl);
  downloadStatus.textContent = "Itinerary berhasil diunduh.";
});

document.querySelector("#current-year").textContent = new Date().getFullYear();