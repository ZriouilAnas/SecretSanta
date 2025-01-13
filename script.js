// btn
const addPartBTN = document.getElementById("addPartBTN");
const part = document.getElementById("part");
const form = document.getElementById("form");
const gift = document.getElementById("gift");
const recINP = document.getElementById("recINP");
const recBTN = document.getElementById("recBTN");
let santaList = {};
// input

// function
let numbpart = 1;
const addPartFunc = () => {
  //alert("XD");
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

const getPartFunc = () => {};

const getValuesBTN = document.getElementById("getValuesBTN");

/*
// Function to get form values
const getFormValues = () => {
  // Loop through form elements
  const formData = {};
  for (let element of form.elements) {
    if (element.name) {
      // Only include elements with a `name` attribute
      formData[element.name] = element.value;
    }
  }
  console.log(formData); // Log the values as an object
  alert(JSON.stringify(formData, null, 2)); // Display as JSON string
};

// Add event listener
getValuesBTN.addEventListener("click", getFormValues);
*/
// event
addPartBTN.addEventListener("click", addPartFunc);

// Function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Function to generate random pairs
const pairBTN = document.getElementById("pairBTN");
const pairsList = document.getElementById("pairsList");
const generatePairs = () => {
  // Collect names from the form
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

  // Shuffle names to create givers and receivers
  const givers = [...names];
  const receivers = shuffleArray([...names]);

  // Ensure no one gets themselves
  while (receivers.some((receiver, i) => receiver === givers[i])) {
    shuffleArray(receivers);
  }

  // Display the pairs
  pairsList.innerHTML = ""; // Clear previous pairs
  givers.forEach((giver, i) => {
    const listItem = document.createElement("li");
    santaList[giver] = receivers[i];
    console.log(santaList);
    sessionStorage.setItem("santaList", JSON.stringify(santaList));
    /*
    listItem.textContent = `${giver} → ${receivers[i]}`;
    pairsList.appendChild(listItem);
    */
  });
};

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

/// style
