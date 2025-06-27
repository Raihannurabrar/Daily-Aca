const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const today = new Date();
const weekContainer = document.getElementById("week");

function getDefaultDate(offset) {
  const d = new Date();
  d.setDate(today.getDate() - today.getDay() + offset); // mulai dari Senin
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function createDayColumn(dayName, index) {
  const column = document.createElement("div");
  column.className = "day";

  const title = document.createElement("h2");
  title.textContent = dayName;

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.className = "date-input";
  dateInput.value = getDefaultDate(index);

  const taskContainer = document.createElement("div");
  taskContainer.className = "task-container";

  const addBtn = document.createElement("button");
  addBtn.className = "add-btn";
  addBtn.textContent = "Tambah Kegiatan";

  addBtn.onclick = () => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Nama kegiatan";

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(input);
    taskContainer.appendChild(taskDiv);
  };

  const resetBtn = document.createElement("button");
  resetBtn.className = "reset-btn";
  resetBtn.textContent = "Reset Hari Ini";

  resetBtn.onclick = () => {
    if (confirm(`Yakin ingin mereset semua data hari ${dayName}?`)) {
      dateInput.value = getDefaultDate(index);
      taskContainer.innerHTML = "";
    }
  };

  column.appendChild(title);
  column.appendChild(dateInput);
  column.appendChild(taskContainer);
  column.appendChild(addBtn);
  column.appendChild(resetBtn);

  return column;
}

// Generate semua hari
days.forEach((dayName, i) => {
  const dayCol = createDayColumn(dayName, i + 1);
  weekContainer.appendChild(dayCol);
});
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  clock.textContent = `${hh}:${mm}:${ss}`;
}

setInterval(updateClock, 1000);
updateClock(); // Jalankan langsung saat load
let clockInterval = null;

function updateClockDisplay(hh, mm, ss) {
  const clock = document.getElementById("clock");
  clock.textContent = `${hh}:${mm}:${ss}`;
}

function startRealTimeClock() {
  if (clockInterval) clearInterval(clockInterval);
  clockInterval = setInterval(() => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const ss = String(now.getSeconds()).padStart(2, '0');
    updateClockDisplay(hh, mm, ss);
  }, 1000);
}
const quotes = [
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #1",
  "Hari ini adalah peluang baru, jangan sia-siakan. #2",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #3",
  "Kamu hebat, kamu kuat, dan kamu bisa. #4",
  "Fokus pada proses, bukan hasil instan. #5",
  "Tidak apa-apa istirahat, asal tidak menyerah. #6",
  "Setiap hari adalah halaman baru dalam hidupmu. #7",
  "Berani memulai adalah setengah dari kemenangan. #8",
  "Kebiasaan kecil menciptakan perubahan besar. #9",
  "Jangan bandingkan dirimu. Jalanmu unik! #10",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #1",
  "Hari ini adalah peluang baru, jangan sia-siakan. #1",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #1",
  "Kamu hebat, kamu kuat, dan kamu bisa. #1",
  "Fokus pada proses, bukan hasil instan. #1",
  "Tidak apa-apa istirahat, asal tidak menyerah. #1",
  "Setiap hari adalah halaman baru dalam hidupmu. #1",
  "Berani memulai adalah setengah dari kemenangan. #1",
  "Kebiasaan kecil menciptakan perubahan besar. #1",
  "Jangan bandingkan dirimu. Jalanmu unik! #1",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #2",
  "Hari ini adalah peluang baru, jangan sia-siakan. #2",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #2",
  "Kamu hebat, kamu kuat, dan kamu bisa. #2",
  "Fokus pada proses, bukan hasil instan. #2",
  "Tidak apa-apa istirahat, asal tidak menyerah. #2",
  "Setiap hari adalah halaman baru dalam hidupmu. #2",
  "Berani memulai adalah setengah dari kemenangan. #2",
  "Kebiasaan kecil menciptakan perubahan besar. #2",
  "Jangan bandingkan dirimu. Jalanmu unik! #2",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #3",
  "Hari ini adalah peluang baru, jangan sia-siakan. #3",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #3",
  "Kamu hebat, kamu kuat, dan kamu bisa. #3",
  "Fokus pada proses, bukan hasil instan. #3",
  "Tidak apa-apa istirahat, asal tidak menyerah. #3",
  "Setiap hari adalah halaman baru dalam hidupmu. #3",
  "Berani memulai adalah setengah dari kemenangan. #3",
  "Kebiasaan kecil menciptakan perubahan besar. #3",
  "Jangan bandingkan dirimu. Jalanmu unik! #3",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #4",
  "Hari ini adalah peluang baru, jangan sia-siakan. #4",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #4",
  "Kamu hebat, kamu kuat, dan kamu bisa. #4",
  "Fokus pada proses, bukan hasil instan. #4",
  "Tidak apa-apa istirahat, asal tidak menyerah. #4",
  "Setiap hari adalah halaman baru dalam hidupmu. #4",
  "Berani memulai adalah setengah dari kemenangan. #4",
  "Kebiasaan kecil menciptakan perubahan besar. #4",
  "Jangan bandingkan dirimu. Jalanmu unik! #4",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #5",
  "Hari ini adalah peluang baru, jangan sia-siakan. #5",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #5",
  "Kamu hebat, kamu kuat, dan kamu bisa. #5",
  "Fokus pada proses, bukan hasil instan. #5",
  "Tidak apa-apa istirahat, asal tidak menyerah. #5",
  "Setiap hari adalah halaman baru dalam hidupmu. #5",
  "Berani memulai adalah setengah dari kemenangan. #5",
  "Kebiasaan kecil menciptakan perubahan besar. #5",
  "Jangan bandingkan dirimu. Jalanmu unik! #5",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #6",
  "Hari ini adalah peluang baru, jangan sia-siakan. #6",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #6",
  "Kamu hebat, kamu kuat, dan kamu bisa. #6",
  "Fokus pada proses, bukan hasil instan. #6",
  "Tidak apa-apa istirahat, asal tidak menyerah. #6",
  "Setiap hari adalah halaman baru dalam hidupmu. #6",
  "Berani memulai adalah setengah dari kemenangan. #6",
  "Kebiasaan kecil menciptakan perubahan besar. #6",
  "Jangan bandingkan dirimu. Jalanmu unik! #6",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #7",
  "Hari ini adalah peluang baru, jangan sia-siakan. #7",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #7",
  "Kamu hebat, kamu kuat, dan kamu bisa. #7",
  "Fokus pada proses, bukan hasil instan. #7",
  "Tidak apa-apa istirahat, asal tidak menyerah. #7",
  "Setiap hari adalah halaman baru dalam hidupmu. #7",
  "Berani memulai adalah setengah dari kemenangan. #7",
  "Kebiasaan kecil menciptakan perubahan besar. #7",
  "Jangan bandingkan dirimu. Jalanmu unik! #7",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #8",
  "Hari ini adalah peluang baru, jangan sia-siakan. #8",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #8",
  "Kamu hebat, kamu kuat, dan kamu bisa. #8",
  "Fokus pada proses, bukan hasil instan. #8",
  "Tidak apa-apa istirahat, asal tidak menyerah. #8",
  "Setiap hari adalah halaman baru dalam hidupmu. #8",
  "Berani memulai adalah setengah dari kemenangan. #8",
  "Kebiasaan kecil menciptakan perubahan besar. #8",
  "Jangan bandingkan dirimu. Jalanmu unik! #8",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #9",
  "Hari ini adalah peluang baru, jangan sia-siakan. #9",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #9",
  "Kamu hebat, kamu kuat, dan kamu bisa. #9",
  "Fokus pada proses, bukan hasil instan. #9",
  "Tidak apa-apa istirahat, asal tidak menyerah. #9",
  "Setiap hari adalah halaman baru dalam hidupmu. #9",
  "Berani memulai adalah setengah dari kemenangan. #9",
  "Kebiasaan kecil menciptakan perubahan besar. #9",
  "Jangan bandingkan dirimu. Jalanmu unik! #9",
  "Lakukan yang terbaik hari ini, demi dirimu di masa depan. #10",
  "Hari ini adalah peluang baru, jangan sia-siakan. #10",
  "Langkah kecil hari ini lebih baik dari tidak sama sekali. #10",
  "Kamu hebat, kamu kuat, dan kamu bisa. #10",
  "Fokus pada proses, bukan hasil instan. #10",
  "Tidak apa-apa istirahat, asal tidak menyerah. #10",
  "Setiap hari adalah halaman baru dalam hidupmu. #10",
  "Berani memulai adalah setengah dari kemenangan. #10",
  "Kebiasaan kecil menciptakan perubahan besar. #10",
  "Jangan bandingkan dirimu. Jalanmu unik! #10"
];

  // ... bisa tambahkan hingga 100 quote seperti sebelumnya

let currentQuoteIndex = 0;
const quoteText = document.getElementById("quote-text");

function showQuote(index) {
  quoteText.classList.remove("fade-in");
  quoteText.classList.add("fade-out");

  setTimeout(() => {
    quoteText.textContent = `"${quotes[index]}"`;
    quoteText.classList.remove("fade-out");
    quoteText.classList.add("fade-in");
  }, 500); // waktu fade-out sebelum ganti
}

function startQuoteCycle() {
  showQuote(currentQuoteIndex);
  setInterval(() => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote(currentQuoteIndex);
  }, 15000); // ganti setiap 15 detik
}

startQuoteCycle();

