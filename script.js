// Selecting elements
var data = document.querySelector("h5");
var btn = document.querySelector("#btn1");
var check = 0;

// Button click event
btn.addEventListener("click", function () {
    // Add animation class to <h5>
    data.classList.add("animate");

    // Check condition for Add/Remove friend
    if (check == 0) {
        data.innerHTML = "Friend Request Accepted";
        data.style.color = "green";
        btn.innerHTML = "Remove Friend";
        check = 1;
    } else {
        data.innerHTML = "Friend Request Removed";
        data.style.color = "red";
        btn.innerHTML = "Add Friend";
        check = 0;
    }

    // Remove animation class after animation ends
    setTimeout(function () {
        data.classList.remove("animate");
    }, 400);
});
