const containers = document.querySelectorAll(".cards");

containers.forEach((container) => {
  container.addEventListener("wheel", (event) => {
    event.preventDefault(); 
    const scrollSpeed = 4; 
    container.scrollBy({
      left: event.deltaY * scrollSpeed, 
      behavior: "smooth", 
    });
  });
});

const burgerButton = document.getElementById("burgerMenuButton");
const menu = document.getElementById("burgerMenu");
burgerButton.addEventListener("click", function () {
  menu.classList.toggle("active");
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = this.elements['email'].value;
  const password = this.elements['password'].value;

  if (email === 'admin' && password === 'admin') {
    window.location.href = 'admin.html'; 
  } else {
    window.location.href = 'test.html'; 
  }
});
