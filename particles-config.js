particlesJS("particles-js", {
  particles: {
    number: { value: 120, density: { enable: true, value_area: 900 } },
    color: { value: "#ffd36a" },
    shape: { type: "circle" },
    opacity: { value: 0.9, random: true },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 170,
      color: "#ffd36a",
      opacity: 0.25,
      width: 1
    },
    move: { enable: true, speed: 0.5, random: true }
  },
  retina_detect: true
});

particlesJS("particles-dust", {
  particles: {
    number: { value: 220, density: { enable: true, value_area: 1200 } },
    color: { value: "#ffe9a3" },
    opacity: { value: 0.15, random: true },
    size: { value: 1.4, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 0.15, random: true }
  },
  retina_detect: true
});
