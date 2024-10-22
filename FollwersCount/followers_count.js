let count =0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
    else if (count === 0) {
        alert("The followers count has been reset.");
    }
  }
function resetCount(){
    count = 0;
    displayCount();
    checkCountValue();
}
