function saveName() {
  const nameInput = document.getElementById("name");
  const savedName = nameInput.value;

  localStorage.setItem("savedName", savedName);

  document.getElementById("savedName").innerText = `Nome salvato: ${savedName}`;
}

function removeName() {
  localStorage.removeItem("savedName");

  document.getElementById("savedName").innerText =
    "Valore precedentemente salvato:";
}
function updateCounter() {
  let counterValue = sessionStorage.getItem("counter") || 0;

  setInterval(() => {
    counterValue++;
    sessionStorage.setItem("counter", counterValue);
    document.getElementById("counter").innerText = counterValue;
  }, 1000);
}

window.onload = () => {
  updateCounter();

  const savedName = localStorage.getItem("savedName");
  if (savedName) {
    document.getElementById(
      "savedName"
    ).innerText = `Nome salvato: ${savedName}`;
  }
};
