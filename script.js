"use strict";

const data = [
  // 1
  {
    sender: "Sadam",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "M",
  },
  // 2
  {
    sender: "Twitter",
    date: "Dec, 22",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "M",
    },
  //  3
  {
    sender: "Yahye",
    date: "Dec, 14",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "M",
    },
  // 4
  {
    sender: "Sadam",
    date: "Jan, 11",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 5
  {
    sender: "Qadar",
    date: "Dec, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 6
  {
    sender: "John",
    date: "Oct, 26",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "", 
    },
  // 7
  {
    sender: "Slaf",
    date: "Dec, 21",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 8
  {
    sender: "Sadam",
    date: "Dec, 10",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "", 
    },
  // 9
  {
    sender: "Farah",
    date: "May, 20",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 10
  {
    sender: "Alex",
    date: "Feb, 12",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 11
  {
    sender: "Alex",
    date: "Jun, 25",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "", 
    },
  // 12
  {
    sender: "Moe",
    date: "Sep, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "", 
    },
  // 13
  {
    sender: "Jey",
    date: "Jan, 17",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 14
  {
    sender: "Adam",
    date: "Nov, 15",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",  
    },
  // 15
  {
    sender: "Joe",
    date: "Apr, 23",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 16
  {
    sender: "Sadam",
    date: "Jul, 28",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
  // 17
  {
    sender: "Slef",
    date: "Dec, 31",
    message:
      " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem libero delectus sint delectus sint adipisicing ...",
    num: "",
    },
];

const messages = document.querySelector(".messages_area");

// Select the indices of the messages where the tick image will be displayed.
const tickMessages = [3, 4, 5, 7, 9, 10, 11, 13, 15];

// Function to render the messages.
const render = function (data) {
  messages.innerHTML = data
    .map(
      (d, index) =>
        `<div class="messages" data-index="${index}">
          <div class="messages_left">
            <div class="check check_2">
              <img src="./img/checkbox.png" alt="" />
              <span> <ion-icon name="checkmark"></ion-icon> </span>
            </div>
            <ion-icon name="star-outline" class="hover star"></ion-icon>
            <span class="sender">${d.sender}</span>
          </div>
          <div class="messages_content">${d.message}</div>
          <div class="messages_date">${d.date}</div>
          ${
            tickMessages.includes(index)
              ? '<img class="tick" src="./img/tick.png" alt="" />'
              : ""
          }
          <div class="messages_num" style="background-color: ${
            d.num === "M" ? "#06d755" : "transparent"
          }">${d.num}</div>
        </div>`
    )
    .join(" ");

  // After rendering, add event listeners to each message for click functionality.
  document.querySelectorAll(".messages").forEach((messageEl) => {
    messageEl.addEventListener("click", function () {
      const index = this.dataset.index;
      displayMessage(data[index]); // Display full message when clicked.
    });
  });
};

// Function to display the full message (could be a modal or a different area on the page).
const displayMessage = function (message) {
  const messageDetails = document.querySelector(".message_details");
  messageDetails.innerHTML = `
    <h3>${message.sender}</h3>
    <p>${message.date}</p>
    <p>${message.message}</p>
  `;
};

// Initial render of the messages.
render(data);


document.querySelector('.nav_top span').addEventListener('click', () => {
    document.querySelector('.compose-email-modal').style.display = 'block';
  });
  
  document.querySelector('.close-modal').addEventListener('click', () => {
    document.querySelector('.compose-email-modal').style.display = 'none';
  });
  
  //const messages = document.querySelectorAll('.messages');
  messages.forEach(message => {
    message.addEventListener('click', () => {
      document.querySelector('.message-view').style.display = 'block';
    });
  });
  
  document.querySelector('.close-message-view').addEventListener('click', () => {
    document.querySelector('.message-view').style.display = 'none';
  });
  

  document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  });
  