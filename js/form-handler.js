function myCheck() {
    var fruits = document.fruitform.fruits
    var sum = 0;
    for (var i = 0; i < fruits.length; i++) {
      if (fruits[i].checked) {
        console.log(typeof(sum));
        sum += parseInt(fruits[i].value);
      }
    }
    document.getElementById("fruit-sum").innerHTML = sum;
  }