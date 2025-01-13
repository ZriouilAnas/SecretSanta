// btn

const addPartBTN = document.getElementById("addPartBTN");
const recINP = document.getElementById("recINP");
const recBTN = document.getElementById("recBTN");
//divs

const part = document.getElementById("part");
const form = document.getElementById("form");
const gift = document.getElementById("gift");
//vars
let santaList = {};
let numbpart = 1;

// functions

//pour ajouter les participents
const addPartFunc = () => {
  const row = document.createElement("tr");
  const label = document.createElement("label");
  label.innerText = "le nom du participant" + numbpart;
  const input = document.createElement("input");
  input.id = "part" + numbpart;
  input.name = "part" + numbpart;
  const tr = document.createElement("tr");
  tr.appendChild(label);
  tr.appendChild(input);
  form.appendChild(tr);
  numbpart++;
  console.log(numbpart);
};

const getValuesBTN = document.getElementById("getValuesBTN");

// event
addPartBTN.addEventListener("click", addPartFunc);

// Function aleatoire an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to generateur alearoite pairs
const pairBTN = document.getElementById("pairBTN");
const pairsList = document.getElementById("pairsList");
const generatePairs = () => {
  // Collection des names du form
  const names = [];
  for (let element of form.elements) {
    if (element.name) {
      names.push(element.value.trim());
    }
  }

  if (names.length < 2) {
    alert("At least two participants are required for Secret Santa.");
    return;
  }

  //  creer givers and receivers
  const givers = [...names];
  const receivers = shuffleArray([...names]);

  while (receivers.some((receiver, i) => receiver === givers[i])) {
    shuffleArray(receivers);
  }
  // afficher les pairs
  givers.forEach((giver, i) => {
    santaList[giver] = receivers[i];
    console.log(santaList);
    sessionStorage.setItem("santaList", JSON.stringify(santaList));
  });
};

//afficher les receivers
const showREC = () => {
  alert("ahahah");
  const recName = document.createElement("h2");
  const xd = recINP.value;
  console.log(santaList);
  console.log(xd);
  alert(santaList[xd]);
  recName.innerText = santaList[xd];
  gift.appendChild(recName);
};
// Add event listener
pairBTN.addEventListener("click", generatePairs);
recBTN.addEventListener("click", showREC);
