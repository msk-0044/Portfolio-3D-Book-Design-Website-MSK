// Intro Animation

const preLoader = document.querySelector(".preloader");
const intro = document.querySelector(".main-intro");

setTimeout(() => {
  preLoader.style.display = "none";
  intro.style.display = "block";
}, 4000);

setTimeout(() => {
  document.querySelector(".webpage-intro").style.display = "none";
  document.querySelector(".container").style.display = "block";
}, 10000);

// Custom Cursor

const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");
let timeout = true;
let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

// Cursor when move
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.display = "block";
  trail.style.display = "block";

  // Cursor when mouse Stopped
  function mouseStopped(e) {
    cursor.style.display = "none";
    trail.style.display = "none";
  }
  if (timeout) {
    timeout = setTimeout(mouseStopped, 1500);
  } else {
    timeout = false;
  }
});

// Cursor when mouseout
// document.addEventListener("mouseout", () => {
//   cursor.style.display = "none";
//   trail.style.display = "none";
// });

function animate() {
  // smooth follow
  cursorX += (mouseX - cursorX) * 0.15;
  cursorY += (mouseY - cursorY) * 0.15;

  // position + rotate cursor
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
  cursor.style.transform = `translate(-50%, -50%)`;

  // position trail (slight delay)
  trail.style.left = cursorX + "px";
  trail.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}

document.addEventListener("click", () => {
  cursor.style.display = "block";
  trail.style.display = "block";
  cursor.classList.add("scale");

  setTimeout(() => {
    cursor.classList.remove("scale");
  }, 500);
});

animate();

// show pointer cursor where set curosr to be pointer (Hide custom cursor)

document
  .querySelectorAll(
    "a, button, input, textarea",
    ".btn",
    ".next-prev-btn",
    ".mob-next-prev-btn"
  )
  .forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.display = "none";
      trail.style.display = "none";
    });
    el.addEventListener("mouseleave", () => {
      cursor.style.display = "block";
      trail.style.display = "block";
    });
  });

// Name Auto Type (Shakir Khan)

const nameType = document.getElementById("my-name");
const nameType2 = document.getElementById("mob-my-name");
const myName = "SHAKIR KHAN";
let charIdx = 0;
let charIdx2 = 0;

setTimeout(() => {
  let intervalId = setInterval(() => {
    if (charIdx === myName.length - 1) {
      clearInterval(intervalId);
      nameType.classList.add("cursor-off");
      nameType2.classList.add("cursor-off");
    }
    nameType.innerHTML = nameType.innerHTML + myName[charIdx];
    nameType2.innerHTML = nameType2.innerHTML + myName[charIdx2];
    charIdx++;
    charIdx2++;
  }, 400);
}, 13500);

// Auto Typing
const autoText = document.getElementById("auto-text");
const mobAtuoText = document.getElementById("mob-auto-text");
const hideAutoCursor = document.querySelector("h3 span");
const typeList = ["Designer", "Specialist", "Developer"];

let listIdx = 0;
let listCharIdx = 0;
let skipTime = 0;
let reverseType = false;

hideAutoCursor.classList.add("hide-autotype-cursor");

setTimeout(() => {
  hideAutoCursor.classList.remove("hide-autotype-cursor");
}, 17000);

setTimeout(() => {
  autoText.innerText = "";
  mobAtuoText.innerText = "";
}, 18500);

setTimeout(() => {
  let intervalId2 = setInterval(() => {
    if (skipTime) {
      skipTime--;
      return;
    }

    if (!reverseType) {
      skipTime = 1;
      autoText.innerText = autoText.innerText + typeList[listIdx][listCharIdx];
      mobAtuoText.innerText =
        mobAtuoText.innerText + typeList[listIdx][listCharIdx];
      listCharIdx++;
    } else {
      autoText.innerText = autoText.innerText.slice(
        0,
        autoText.innerText.length - 1
      );
      mobAtuoText.innerText = mobAtuoText.innerText.slice(
        0,
        mobAtuoText.innerText.length - 1
      );
      listCharIdx--;
    }

    if (listCharIdx === typeList[listIdx].length) {
      skipTime = 4;
      reverseType = true;
    }

    if (mobAtuoText.innerText.length === 0 && reverseType) {
      reverseType = false;
      listIdx++;
    }

    if (listIdx === typeList.length) {
      listIdx = 0;
    }
  }, 200);
}, 19000);

// Turn pages onclick next or prev btn

const pageTurnBtn = document.querySelectorAll(".next-prev-btn");

pageTurnBtn.forEach((el, idx) => {
  el.onclick = () => {
    let pageTurnId = el.getAttribute("data-page");
    let pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - idx;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + idx;
      }, 500);
    }
  };
});


// Contact page when click contact btn

const bookPages = document.querySelectorAll(".book-page.right-page");
const contactMeBtn = document.querySelector(".btn.btn-contact");

contactMeBtn.onclick = () => {
  bookPages.forEach((page, idx) => {
    setTimeout(() => {
      page.classList.add("turn");

      setTimeout(() => {
        page.style.zIndex = 20 + idx;
      }, 500);
    }, (idx + 1) * 200 + 100);
  });
};

// create reverse index function

let totalPages = bookPages.length;
let pageNum = 0;

function reverseIdx() {
  pageNum--;
  if (pageNum < 0) {
    pageNum = totalPages - 1;
  }
}

// Profile page when click profile btn

const profileBtn = document.querySelector(".profile-btn");

profileBtn.onclick = () => {
  bookPages.forEach((_, idx) => {
    setTimeout(() => {
      reverseIdx();
      bookPages[pageNum].classList.remove("turn");
      setTimeout(() => {
        reverseIdx();
        bookPages[pageNum].style.zIndex = 10 + idx;
      }, 500);
    }, (idx + 1) * 200 + 100);
  });
};

// opening animation

const coverRight = document.querySelector(".cover.cover-right");

// opening animation (Cover Right Animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 12100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 12800);

// opening animation (All Right Pages Animation)

bookPages.forEach((_, idx) => {
  setTimeout(() => {
    reverseIdx();
    bookPages[pageNum].classList.remove("turn");
    setTimeout(() => {
      reverseIdx();
      bookPages[pageNum].style.zIndex = 10 + idx;
    }, 500);
  }, (idx + 1) * 200 + 12100);
});

// opening animation (Left Pade || Profile Animation)

const leftPage = document.querySelector(".book-page.left-page");

setTimeout(() => {
  leftPage.style.zIndex = 20;
}, 13200);

// Read More and Back button when click

const readMoreBtns = document.querySelectorAll(".read-more-btn");
const readMoreItems = document.querySelector(".read-more-items");
const readMoreArea = document.querySelector(".popup-read-more");
const closeReadBtn = document.querySelector(".close-read-btn");

readMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentId = btn.getAttribute("data-id");
    const contentEl = document.getElementById(contentId);
    readMoreItems.innerHTML = contentEl.innerHTML;
    readMoreArea.style.display = "block";
    setTimeout(() => {
      closeReadBtn.style.opacity = "1";
    }, 1500);
  });
});

closeReadBtn.addEventListener("click", () => {
  readMoreArea.style.display = "none";
  closeReadBtn.style.opacity = "0";
});

//  Event delegation for dynamically added "Back" buttons

// readMoreArea.addEventListener("click", (e) => {
//   if (e.target && e.target.classList.contains("back-btn")) {
//     // readMoreArea.style.display = "none";
//     // readMoreItems.innerHTML = ""; // Optional: clear popup
//     console.log("clicked back");
//   }
// });

// form submission

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMail();
});

// Function to create popup dynamically
function createPopup(contentHTML, isLoader = false) {
  const popup = document.createElement("div");
  popup.className = "loading-popup-overlay";
  popup.innerHTML = `
        <div class="loading-popup-box">
          ${
            isLoader
              ? '<div class="loader"></div><p>Sending message...</p>'
              : contentHTML
          }
        </div>
      `;
  document.body.appendChild(popup);
  return popup;
}

//  Function to close and remove popup
function closePopup(popup) {
  if (popup && popup.parentNode) {
    popup.remove();
  }
}

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("comment").value,
  };

  // Show loading popup
  const loadingPopup = createPopup("", true);

  emailjs
    .send("service_7bjik5r", "template_gy42nkg", parms)
    .then(() => {
      // alert("Message sent successfully!");
      closePopup(loadingPopup);

      const successPopup = createPopup(`
            <h3>✅ Message Sent Successfully!</h3>
            <button type="button" id="successBtn">OK</button>
          `);

      successPopup
        .querySelector("#successBtn")
        .addEventListener("click", () => {
          closePopup(successPopup);
          contactForm.reset();
        });
    })

    .catch((error) => {
      closePopup(loadingPopup);

      console.log("Error sending message:", error);
      // alert("Failed to send email. Please try again.");

      // Error popup
      const errorPopup = createPopup(`
            <h3>❌ Failed to Send Message</h3>
            <p>Please try again later.</p>
            <button type="button" id="errorBtn">OK</button>
          `);

      errorPopup.querySelector("#errorBtn").addEventListener("click", () => {
        closePopup(errorPopup);
      });
    });
}

// footer animation
const copyrightP = document.querySelector(".footer");
setTimeout(() => {
  copyrightP.classList.add("copyright");
  copyrightP.style.transition = "1s ease-in-out";
  copyrightP.style.display = "block";
}, 23000);

//    - - - - - - - - - - -
//          Mobile
//    - - - - - - - - - - -

// mob page turning

const mobBookPages = document.querySelectorAll(".mob-book-page");
document.addEventListener("DOMContentLoaded", () => {
  let currentPage = 0;

  function showPage(index) {
    mobBookPages.forEach((page, i) => {
      page.style.display = i === index ? "block" : "none";
      page.classList.remove("mob-turn");
    });

    document
      .querySelectorAll(".mob-next-prev-btn")
      .forEach((btn) => btn.remove());

    if (index > 0) {
      createButton("mob-prev", () => turnPage(-1), mobBookPages[index]);
    }
    if (index < mobBookPages.length - 1) {
      createButton("mob-next", () => turnPage(1), mobBookPages[index]);
    }
  }

  function createButton(type, onClick, parent) {
    const btn = document.createElement("span");
    btn.classList.add("mob-next-prev-btn", type);
    btn.innerHTML =
      type === "next"
        ? `<i class="hgi hgi-stroke hgi-arrow-left-01"></i>`
        : `<i class="hgi hgi-stroke hgi-arrow-right-01"></i>`;
    btn.addEventListener("click", onClick);
    parent.appendChild(btn);
  }

  function turnPage(direction) {
    mobBookPages[currentPage].classList.add("mob-turn");
    setTimeout(() => {
      currentPage += direction;
      showPage(currentPage);
    }, 500);
  }

  showPage(currentPage);

  // // Handle "Profile Page" button (MOB)

  const mobProfileBtn = document.getElementById("profile-page-btn");
  setTimeout(() => {
    if (mobProfileBtn) {
      mobProfileBtn.addEventListener("click", () => {
        mobBookPages[currentPage].classList.add("mob-turn");
        setTimeout(() => {
          currentPage = 0; // Always go to first page
          showPage(currentPage);
        }, 850);
      });
    }
  }, 1000);

  // Handle "Contact Page" button (MOB)

  const mobContactBtn = document.getElementById("contact-page-btn");
  if (mobContactBtn) {
    mobContactBtn.addEventListener("click", () => {
      mobBookPages[currentPage].classList.add("mob-turn");
      setTimeout(() => {
        currentPage = mobBookPages.length - 1; // Always go to last page
        showPage(currentPage);
      }, 850);
    });
  }
});

// mob read more

const mobReadMoreBtns = document.querySelectorAll(".mob-read-more-btn");
const mobReadMoreItems = document.querySelector(".mob-read-more-items");
const mobReadMoreArea = document.querySelector(".mob-popup-read-more");
const mobCloseReadBtn = document.querySelector(".mob-close-read-btn");

mobReadMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const contentId = btn.getAttribute("data-mob-id");
    const contentEl = document.getElementById(contentId);
    mobReadMoreItems.innerHTML = contentEl.innerHTML;
    mobReadMoreArea.style.display = "block";
    setTimeout(() => {
      mobCloseReadBtn.style.display = "block";
    }, 1500);
  });
});

mobCloseReadBtn.addEventListener("click", () => {
  mobReadMoreArea.style.display = "none";
  mobCloseReadBtn.style.display = "none";
});

// Mob form submission

const mobContactForm = document.getElementById("mob-contact-form");

mobContactForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  mobSendMail();
});

function mobSendMail() {
  let parms2 = {
    name: document.getElementById("mob-name").value,
    email: document.getElementById("mob-email").value,
    message: document.getElementById("mob-comment").value,
  };

  // Show loading popup
  const loadingPopup = createPopup("", true);

  emailjs
    .send("service_7bjik5r", "template_gy42nkg", parms2)
    .then(() => {
      // alert("Email sent successfully!");
      closePopup(loadingPopup);

      const successPopup = createPopup(`
            <h3>✅ Message Sent Successfully!</h3>
            <button type="button" id="successBtn">OK</button>
          `);

      console.log(parms2);

      successPopup
        .querySelector("#successBtn")
        .addEventListener("click", () => {
          closePopup(successPopup);
          mobContactForm.reset();
        });
    })

    .catch((error) => {
      closePopup(loadingPopup);

      console.log("Error sending message:", error);
      // alert("Failed to send email. Please try again.");

      // Error popup
      const errorPopup = createPopup(`
            <h3>❌ Failed to Send Message</h3>
            <p>Please try again later.</p>
            <button type="button" id="errorBtn">OK</button>
          `);

      errorPopup.querySelector("#errorBtn").addEventListener("click", () => {
        closePopup(errorPopup);
      });
    });
}
