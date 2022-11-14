const allPanel = document.querySelectorAll(".panel");
console.log(allPanel);
let prevActive;

allPanel.forEach(function (e) {
  e.addEventListener("click", function exec(e) {
    if (prevActive === this) {
      prevActive.classList.toggle("active");
      console.log("If Block");
    } else {
      prevActive && prevActive.classList.remove("active");
      this.classList.toggle("active");
      prevActive = this;
      console.log("Else Block");
    }

    // removeActive();
    // this.cla
  });
});
