function toggleTheme() {
  const html = document.documentElement;
  const image = document.querySelector("#profile img"); // pega a imagem dentro do elemento com id "profile"

  // Alterna entre adicionar o tema "light" ou removê-lo
  html.classList.toggle("light");

  // Seta a imagem de acordo com o tema
  image.setAttribute("src", html.classList.contains("light") ? "./assets/avatar-light.png" : "./assets/avatar.png");

  // Seta o atributo alt de acordo com o tema
  image.setAttribute(
    "alt",
    html.classList.contains("light")
      ? "Foto de Mayk Brito sorrindo, usando uma jaqueta preta e óculos escuros"
      : "Foto de Mayk Brito sorrindo, usando uma camisa preta e óculos"
  );
}
