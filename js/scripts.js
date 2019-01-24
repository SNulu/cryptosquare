function cryptoSquare(words){
  words = words.split('');
  var i = 1;
  while(i * i < words.length)
  {
    i++;
  }
  console.log(i);
  var newArr = [];
  for(var h=0;h<i;h++){
    for(var j=h;j<words.length;j+=i){
      newArr.push(words[j]);
    }
  }
  return newArr;
}



$(document).ready(function(){
  function display(arr, i)
  {
    i = parseInt(Math.sqrt(i));
    for(var j = 0;j<i;j++){
      var newArr = [];
    for(var h = 0;h<arr.length;h++){
      if(h % i === j){
        if(arr[h] === " "){
          newArr.push("&nbsp;");
        }else{
      newArr.push(arr[h]);
    }
    }
  }
    console.log(newArr);
    $("ul").append("<li>"+ newArr.join("") +"</li>")
    }
  }
  $("form#transportation_survey").submit(function(event){
    var input = $("#sentence").val();
    var input = cryptoSquare(input);
  $("p").text(input.join(''));
  display(input, (input.length))
  event.preventDefault();
  });
});
