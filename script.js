const h1 = document.getElementById("head1");

h1.addEventListener("mouseover", (e) => {
  h1.style.color = "white";
});

h1.addEventListener("mouseout", (e) => {
  h1.style.color = "black";
});

console.log("ok");
