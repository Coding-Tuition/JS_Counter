let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const target = e.currentTarget;

    if (target.classList.contains("decrement")) {
      count--;
    } else if (target.classList.contains("increment")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});

// let arr = ["a", "b", "c"];
// console.log(arr.includes("b"));
