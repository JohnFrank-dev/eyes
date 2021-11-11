const balls = document.getElementsByClassName("ball");

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  Array.prototype.forEach.call(balls, (element) => {
    element.style.left = x;
    element.style.top = y;
    element.transform = "translate(-" + x + ",-" + y + ")";
  });
};
