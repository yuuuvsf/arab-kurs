document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtns = [
    document.getElementById("openModalBtn"),
    document.getElementById("openModalBtn2"),
  ];
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("registration-form");
  const thankYouMsg = document.getElementById("thankYouMsg");

  // Modalni ochish tugmalari
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      thankYouMsg.style.display = "none";
      form.style.display = "block";
      form.reset();
    });
  });

  // Modalni yopish tugmasi
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal oynadan tashqarini bosganda yopish
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form validatsiyasi va yuborilishi
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();

    if (!name || !email) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Iltimos, to'g'ri email manzil kiriting.");
      return;
    }

    // Formani yuborish (formsubmit.co ishlatilgan)
    form.submit();

    // Formani yashirish va "Rahmat" xabarini ko'rsatish
    form.style.display = "none";
    thankYouMsg.style.display = "block";

    // 3 soniyadan so'ng modalni yopish va formani tiklash
    setTimeout(() => {
      modal.style.display = "none";
      form.style.display = "block";
      thankYouMsg.style.display = "none";
      form.reset();
    }, 3000);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtns = [
    document.getElementById("openModalBtn"),
    document.getElementById("openModalBtn2"),
  ];
  const closeBtn = document.querySelector(".close");
  const form = document.getElementById("registration-form");
  const thankYouMsg = document.getElementById("thankYouMsg");

  // Modalni ochish tugmalari
  openModalBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "block";
      thankYouMsg.style.display = "none";
      form.style.display = "block";
      form.reset();
    });
  });

  // Modalni yopish tugmasi
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Modal oynadan tashqarini bosganda yopish
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form validatsiyasi va yuborilishi
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();

    if (!name || !email) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Iltimos, to'g'ri email manzil kiriting.");
      return;
    }

    // Formani yuborish (formsubmit.co ishlatilgan)
    form.submit();

    // Formani yashirish va "Rahmat" xabarini ko'rsatish
    form.style.display = "none";
    thankYouMsg.style.display = "block";

    // 3 soniyadan so'ng modalni yopish va formani tiklash
    setTimeout(() => {
      modal.style.display = "none";
      form.style.display = "block";
      thankYouMsg.style.display = "none";
      form.reset();
    }, 3000);
  });
});
