const input = document.querySelector(".chat-input input");
const chatArea = document.querySelector(".chat-area");
const submitBtn = document.querySelector(".submit");
const cursor = document.querySelector(".cursor");
let lag = 0.02;
let chaos = 0;

function userMessage(message) {
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("userMessageDiv");
  userMessageDiv.textContent = message;
  userMessageDiv.style.top = Math.random() * 80 + "%";
  userMessageDiv.style.right = Math.random() * 20 + "%";

  chatArea.appendChild(userMessageDiv);

  input.value = "";
}

function GPTMessage() {
  const GPTMessageDiv = document.createElement("div");
  GPTMessageDiv.classList.add("GPTMessageDiv");
  GPTMessageDiv.textContent = "I don't know man";
  GPTMessageDiv.style.top = Math.random() * 80 + "%";
  GPTMessageDiv.style.left = Math.random() * 20 + "%";

  chatArea.appendChild(GPTMessageDiv);
}

window.addEventListener("mousemove", (e) => {
  lag += 0.005;
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: lag,
  });
});

submitBtn.addEventListener("click", function () {
  userMessage(input.value);

  setTimeout(() => {
    GPTMessage();
  }, 1000);
});

setInterval(() => {
  chaos += 5;
  document.body.style.filter = `hue-rotate(${chaos}deg)`;
}, 1000);
