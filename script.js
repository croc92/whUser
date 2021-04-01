function showMenu() {
  const elementList = document.getElementsByTagName('ul');
  for (const element of elementList) {
    element.style.display = "flex";
  }
}

function closeMenu() {
  const navbar = document.querySelector(".navbar-links");
  navbar.style.display = "none";
}
