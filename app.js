let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector(".new");
let msg = document.querySelector("#msg");
let winmsg = document.querySelector(".winnerandnew");
let turnO = true;
let resetbtn = document.querySelector(".reset");

const winpatterns = [
  [0,1,2], [0,3,6], [0,4,8],
  [1,4,7], [2,5,8], [2,4,6],
  [3,4,5], [6,7,8]
];

const disable = () => {
  boxes.forEach(box => box.disabled = true);
};

const enableBoxes = () => {
  boxes.forEach(box => box.disabled = false);
};

const showwinner = (winner) => {
  msg.innerHTML = `Congratulations! The winner is ${winner}`;
  winmsg.classList.remove("hide");
  disable();
};

const reset = () => {
  turnO = true;
  enableBoxes();
  winmsg.classList.add("hide");
  boxes.forEach(box => box.innerHTML = "");
};

const checkwinner = () => {
  for (let pattern of winpatterns) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner is", pos1val, "!");
        showwinner(pos1val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }

    box.disabled = true;
    checkwinner();
  });
});

newbtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);

