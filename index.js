const inc = document.querySelector(".b1");
const dec = document.querySelector(".b2");
const text = document.querySelector(".text");

let counter = (function counter() {
  let count;
  localStorage.getItem("count")
    ? (count = Number(localStorage.getItem("count")))
    : (count = 0);
  text.innerHTML = localStorage.getItem("count");
  function increment(value = 1) {
    count += value;
    localStorage.setItem("count", count);
    text.innerHTML = count;
  }
  function decrement(value = 1) {
    count -= value;
    localStorage.setItem("count", count);
    text.innerHTML = count;
  }
  return {
    count: count,
    increment: increment,
    decrement: decrement,
  };
})();

inc.addEventListener("click", () => {
  counter.increment();
});
dec.addEventListener("click", () => {
  counter.decrement();
});
