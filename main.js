// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide error modal upon page load
document.querySelector("#modal").className = "hidden";

// Set variable for the heart HTML element that will be clicked
const hearts = document.querySelectorAll('.like-glyph');

// Add event listener to every instance of a heart being clicked
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if(heart.innerHTML === EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        heart.innerHTML = FULL_HEART;
        heart.className = "activated-heart";
        })
      .catch(() => {
        document.querySelector("#modal").className = "";
        document.querySelector("#modal").textContent = "Random server error. Try again.";
        setTimeout(() => {
          document.querySelector("#modal").className = "hidden";
        }, 3000)
      })
    }
    else {
      // remove the color and glyph
      heart.innerHTML = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  }) 
})


// Specification:
// 1. Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads -- DONE
// 2. When a user clicks on an empty heart:
//  - Invoke mimicServerCall to simulate making a server request -- DONE
//  - When the "server" returns a failure status:
//    - Respond to the error using a .catch(() => {}) block after the .then(() => {}) block -- done
//    - Display the error modal by removing the .hidden class -- done
//    - Disply the server error message in the modal -- done (though crude)
//    - Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
//  - When the "server" returns a success status: -- DONE
//    - Change the heart to a full heart -- done
//    - Add the .activated-heart class to make the heart appear red -- done
// 3. When a user clicks on a full heart -- DONE
//  - Change the heart back to an empty heart -- done
//  - Remove the .activated-heart class -- done
// 4. Keep all styling rules entirely in style.css. Do not manipulate any .style properties
// 5. Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
