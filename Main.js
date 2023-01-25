function getStudentById(id) {
return fetch('https://mocki.io/v1/7b9f5d1f-5c76-4745-b967-689051d1dd1d')
.then(response => response.json())
.then(data => {
return data.find(student => student.regno === id);
})
.catch(error => console.error(error));
}
function showResults(event) {
event.preventDefault()
const regno = document.getElementById('regno').value;
const form = document.forms[0];
const formData = new FormData(form);
const search = new URLSearchParams(formData);
const queryString = search.toString();
const userinput = Number(queryString.replace('regno=', ''));
getStudentById(userinput)
.then(student => {
if (userinput === student.regno) {
document.getElementById("results").innerHTML = `<div class="table-bordered mt-4">
<table class="table">
<tr>
<th class="table-info">Student ID:</th>
<td class="text-primary">${student.regno}</td>
</tr>
<tr>
<th class="table-info">Name:</th>
<td>${student.name}</td>
</tr>
<tr>
<th class="table-info">English:</th>
<td>${student.english}</td>
</tr>
<tr>
<th class="table-info">Hindi:</th>
<td>${student.hindi}</td>
</tr>
<tr>
<th class="table-info">Physics:</th>
<td>${student.physics}</td>
</tr>
<tr>
<th class="table-info">Chemistry:</th>
<td>${student.chemistry}</td>
</tr>
<tr>
<th class="table-info">Maths:</th>
<td>${student.maths}</td>
</tr>
<th class="table-info">Computer science:</th>
<td>${student.computerscience}</td>
</tr>
</table>
</div>
<div class="container-fluid text-center mt-4 mb-4">
<h5 class="text-danger mb-2">Total marks: <span>${student.english+student.hindi+student.physics+student.chemistry+student.maths+student.computerscience} off 600</span></h5><h5 class="text-success"> Percentage: <span>${
((student.english+student.hindi+student.physics+student.chemistry+student.maths+student.computerscience)/6).toFixed(2)+ "%"}</span></h5>
<a href="#" onclick="location.reload()">Next result</a></div>`;
}
});
document.getElementById("results").innerHTML = `<p class=" text-center text-danger mt-5"> No student found with ID: ${userinput}<p>`;
}
