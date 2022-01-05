const isInArray = (item, array) => {
  let isExist = false;
  array.forEach(val => {
    if (val === item) {
      isExist = true;
    }
    return isExist;
  })
}

let itemsArr = ["apple", "orange", "banana", "rice", "cashew", "soya bean", "bean", "carrot", "beatroot"];

var checkboxMap = itemsArr.map(val => `<div class="item"><span>${val}</span></div>`).join("");

var checkboxStyle = `<style>
*{font-size:14px;font-family:"segoe UI";}
#checkboxDiv{display:none; padding:20px 10px; position:absolute; margin-top:2px; width:180px; background-color:#fefefe; box-shadow:2px 6px 5px rgba(0,0,0,0.15); border-radius:10px;}
span{display:inline-block; padding-left:5px;}
[type=text]{width:200px; padding:5px 20px; border:1px solid #d0d0ff; border-radius:10px;} 
.item{padding:5px;}
.item:hover{background-color:#efeff0; color:#2929df; margin:0px; border-radius:2px; cursor:pointer;}
</style>`;

var checkboxDropdown = `${checkboxStyle}<br>
<div>
<input type="text" id="check">
<div role="checkbox" id="checkboxDiv">
${checkboxMap}
</div>
</div>`;

document.write(checkboxDropdown);

(function toggleListbox() {
  let isClicked = false;
  document.getElementById("check").onclick = () => {
    isClicked = !isClicked;
    document.querySelector("#checkboxDiv").style.display = isClicked == true ? "block" : "none";
  }
  document.querySelector("#checkboxDiv").ondblclick = () => {
    document.querySelector("#checkboxDiv").style.display = "none";
    isClicked = !isClicked;
  }
})();

document.querySelectorAll(".item").forEach((it) => {
  it.onclick = () => {
    document.querySelector("#check").value = it.lastChild.innerText;
  }
});

document.querySelector("#check").onchange = () => {
  let inputValue = document.querySelector("#check").value;
  document.querySelector("#check").value = isInArray(inputValue, itemsArr) ? inputValue : "";
}
