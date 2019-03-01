document.querySelector("button").addEventListener("click", ()=> {
		let inputText = document.querySelector("input").value;
		let allStudentDetails = document.querySelectorAll(".student-details h3");
		let count= 0;

		for(let i= 0; i< allStudentDetails.length; i++) {
			if (allStudentDetails[i].innerHTML.split(' ').includes(inputText)) {
				allStudentDetails[i].style.display = 'block';
				count++;
			}
			else if(inputText === '') {
				allStudentDetails[i].parentNode.parentNode.style.display = 'block'
			}
				
			else  {
					
				allStudentDetails[i].parentNode.parentNode.style.display = 'none'
			}
		}
		if(count === 0) {
			alert("Sorry there are no results!Please try another search!")
		}
	
	})