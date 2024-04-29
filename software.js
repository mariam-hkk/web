 var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,
   spaceBetween: 45,
   slidesPerGroup: 1,
   loop: true,
   grabCursor: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

var users;
async function fetchData() {
  try {
    const response = await fetch("users.json");

    users = await response.json();
    users = users.users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();

let logBtn = document.getElementById("mainLoginBtn");

function loginCheck(e) {
  e.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username, password);
  let user;

  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      user = users[i];
      break;
    } else {
      user = false;
    }
  }
  console.log(user);
  if (user) {
    if (user.password === password) {
      window.alert("Login successful");
    } else {
      window.alert("Incorrect password");
    }
  } else {
    window.alert("User not found");
  }
}

logBtn.addEventListener("click", loginCheck);
