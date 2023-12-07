const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    // Удалить класс selected у всех карточек
    cards.forEach((c) => c.classList.remove("selected"));

    // Добавить класс selected только текущей карточке
    card.classList.add("selected");
  });
});
