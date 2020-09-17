let allSpans = document.querySelectorAll(".buttons span");
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

  span.addEventListener("click", (e) => {

    if (e.target.classList.contains("check-item")) {

      checkItem();

    }

    if (e.target.classList.contains("add-item")) {

      addItem();

    }

    if (e.target.classList.contains("delete-item")) {

      deleteItem();

    }

    if (e.target.classList.contains("show-items")) {

      showItems();

    }

  })

});

function showMessage() {

  results.innerHTML = 'Input Cant Be Empty';

}

function checkItem(){
	if(theInput.value !==""){
		if(localStorage.getItem(theInput.value)){
			results.innerHTML=`Found Local Storage Item Called <span>${theInput.value}</span>`
		}
		else{
			results.innerHTML=`No Local Storage Item with the Name <span>${theInput.value}</span>`
		}
	}
	else{
		showMessage();
	}
}


function addItem(){
		if(theInput.value !==""){
		let a=localStorage.setItem(theInput.value,"test")
			results.innerHTML=`Found Local Storage Item Called <span> ${theInput.value}</span>Added`
			theInput.value="";
		
	}
	else{
		showMessage();
	}
}
function deleteItem(){
	if(theInput.value !==""){
		if(localStorage.getItem(theInput.value)){
			localStorage.removeItem(theInput.value);
		    results.innerHTML=`delte Local Storage Item Called <span>${theInput.value}</span>`;
		 theInput.value="";
		}
		else{
			results.innerHTML=`No Local Storage Item with the Name <span>${theInput.value}</span>`
		}
	}
	else{
		showMessage();
	}
}
function showItems(){
	if(localStorage.length){
		results.innerHTML=""
		for(let[key,value]of Object.entries(localStorage)){
			results.innerHTML += `<span class="span-class">${key} : ${value}</span>`
			console.log(localStorage.length)
		}

	}else{
		results.innerHTML="Local Storage is empty";
	}
}
let ahmed={
	age:18,
	name:"ahmed"
}
for( let [key,value]of Object.entries(ahmed)){
	console.log(`${key}===${value}`)
}