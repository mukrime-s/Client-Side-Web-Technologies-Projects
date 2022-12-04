var TAB1 = document.getElementById(TAB1)
var TAB2 = document.getElementById(TAB2)
var TAB3 = document.getElementById(TAB3)
var TAB4 = document.getElementById(TAB4)

window.onload = function(){
  document.getElementById("checked").click();
}
function openTab(evt, tabNumber) {
  var x, y;
  
  if(tabNumber.value == TAB1){
    var sum = " ";
    for(x=0;x<10;x++){
      for(y=0;y<14;y++){
        sum = sum + "111 ";
      }
      sum = sum + "<br>";
    }
    document.getElementById("tab1").innerHTML = sum;
  }
  if(tabNumber.value == TAB2){
    var sum = " ";
    for(x=0;x<10;x++){
      for(y=0;y<14;y++){
        sum = sum + "222 ";
      }
      sum = sum + "<br>";
    }
    document.getElementById("tab2").innerHTML = sum;
  }
  if(tabNumber.value == TAB3){
    var sum = " ";
    for(x=0;x<10;x++){
      for(y=0;y<14;y++){
        sum = sum + "333 ";
      }
      sum = sum + "<br>";
    }
    document.getElementById("tab3").innerHTML = sum;
  }
  if(tabNumber.value == TAB4){
    var sum = " ";
    for(x=0;x<10;x++){
      for(y=0;y<14;y++){
        sum = sum + "444 ";
      }
      sum = sum + "<br>";
    }
    document.getElementById("tab4").innerHTML = sum;
  }

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabNumber).style.display = "block";
  evt.currentTarget.className += " active";
}