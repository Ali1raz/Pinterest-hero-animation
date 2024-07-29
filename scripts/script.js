const items = ["g", "n", "r", "d"];
const active = ["opacity-1", "z-2", "translateY-40"];
const disabled = ["opacity-0", "z-0", "translateY-80"];

items.forEach((item, index) => {
  document.querySelector(`.${item}`).classList.add(...disabled);
  // document.querySelector(`.${items[index]}`).classList.add(...disabled);
});

let current = 0;

setInterval(() => {
  items.forEach((item, index) => {
    start_animation(item, index);
  });
}, 1500);

start_animation(items[current], current);

function start_animation(item, index) {
  setTimeout(() => {
    items.forEach((otherItem) => {
      document.querySelector(`.${otherItem}`).classList.remove(...active);
      document.querySelector(`.${otherItem}`).classList.add(...disabled);
    });
    document.querySelector(`.${item}`).classList.add(...active);
    document.querySelector(`.${item}`).classList.remove(...disabled);
  }, index * 1500);
}
