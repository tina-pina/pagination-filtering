/* global variables */
let studentsList = document.querySelectorAll(".student-item");
let numStudents = studentsList.length;
let totalPages = Math.ceil(numStudents / 10);
let currentPage = 1;


/* display 10 students per page */
function showPage(studentsList, page) {

	/* get start and end index */
	let showFirstStudentsIdx = (page - 1) * 10;	
	let showLastStudentsIdx = showFirstStudentsIdx + 9;	
	
	/* display students on the page */
	for(let i=0; i<studentsList.length; i++) {
		studentsList[i].style.display = 'none';
		if(showFirstStudentsIdx <= i && i <= showLastStudentsIdx) {
			studentsList[i].style.display = 'block';	
		} 
	}
}


/* highlight selected button */
function toggleButton() {
	let buttons = document.querySelectorAll(".pageButton");
	for(let button of buttons) {
		if(Number(button.innerHTML) === Number(currentPage)) {
			button.style.backgroundColor = 'blue';
		}
		else {
			button.style.backgroundColor = 'white';
		}
	}
}


/* create page buttons dynamically based on the number of students */
function appendPageLinks(totalPages) {
	let parentDiv = document.querySelector(".page");
	for(let i = 0; i<totalPages; i++) {
		let button = document.createElement("button");
		button.innerHTML = i+1;
		button.className = "pageButton"
		
		button.style.margin = "10px"
		button.addEventListener("click", () => {
			currentPage = i+1
			showPage(studentsList, i+1)
			toggleButton()
		});
		
		parentDiv.appendChild(button);
	}	
}

/* init with page 1 */
showPage(studentsList, 1)
/* create buttons */
appendPageLinks(totalPages)




