var butt = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.getElementsByTagName("li");
var delButtons = document.getElementsByClassName("delButton");

function inputCheck() {
	if (input.value.length > 0) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
}

function addElementByButton() {
	inputCheck();
	createDeleteButton();
	deleteItem();
}

function addElementByEnter(event) {
	if (event.keyCode === 13) {
		inputCheck();
		createDeleteButton();
		deleteItem();
	}
}


function lineThrough(item) {
	if (item.target.tagName === "LI")
		item.target.classList.toggle("done");

}

function createDeleteButton() {
	for (var i = 0; i < items.length; i++) {
		var newDeleteButton = document.createElement("button");
		newDeleteButton.appendChild(document.createTextNode("x"));
		newDeleteButton.classList.add("delButton");
		items[i].appendChild(newDeleteButton);

	}
}

function deleteItem() {
	for (var i = 0; i < delButtons.length; i++) {
		delButtons[i].addEventListener("click", function() {
			this.parentNode.remove();
		})
	}
}


createDeleteButton();
butt.addEventListener("click", addElementByButton);
input.addEventListener("keypress", addElementByEnter);
ul.addEventListener("click", lineThrough);
deleteItem();