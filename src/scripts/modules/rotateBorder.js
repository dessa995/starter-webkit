const rotateBorder = () => {
  const baseCard = document.querySelectorAll(".js-rotate-border");
  baseCard.forEach((card) => {
    card.classList.add("rotate-card");
    console.log(card.children);
    for (let i = 0; i < card.children.length; i++) {
      let child = card.children[i];
      child.classList.add("absolute");
      console.log(child);
    }
    let lines = document.createElement("div");
    lines.classList = "lines";
    card.append(lines);
  });
  console.log("rotation generated");
};

export default rotateBorder;
