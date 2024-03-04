function getStudentById(id) {
    return fetch('https://mocki.io/v1/7b9f5d1f-5c76-4745-b967-689051d1dd1d')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => data.find(student => student.regno === id))
        .catch(error => {
            console.error('Error fetching student data:', error);
            throw error; // Propagate the error further
        });
}

function displayLoading() {
    document.getElementById("results").innerHTML = '<p class="text-center">Loading...</p>';
}

function displayStudentInfo(student) {
    if (student) {
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
                <tr>
                    <th class="table-info">Computer science:</th>
                    <td>${student.computerscience}</td>
                </tr>
            </table>
        </div>
        <div class="container-fluid text-center mt-4 mb-4">
            <h5 class="text-danger mb-2">Total marks: <span>${student.english + student.hindi + student.physics + student.chemistry + student.maths + student.computerscience} off 600</span></h5>
            <h5 class="text-success"> Percentage: <span>${((student.english + student.hindi + student.physics + student.chemistry + student.maths + student.computerscience) / 6).toFixed(2) + "%"}</span></h5>
            <a href="#" onclick="location.reload()">Next result</a>
        </div>`;
    } else {
        document.getElementById("results").innerHTML = `<p class="text-center text-danger mt-5"> No student found with ID</p>`;
    }
}

function showResults(event) {
    event.preventDefault();
    const regno = document.getElementById('regno').value;
    const userinput = Number(regno);

    // Display loading indicator
    displayLoading();

    // Fetch student data
    getStudentById(userinput)
        .then(student => displayStudentInfo(student))
        .catch(error => console.error('Error displaying student info:', error));
}
