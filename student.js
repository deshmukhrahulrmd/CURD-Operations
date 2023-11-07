let selectedrow = null;
let userName = document.getElementById("userName");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let city = document.getElementById("city");

// when user click on submit button
function enterData() {
  let studentData = fetchData();
  if (selectedrow == null) {
    addData(studentData);
  }
  else{
    updateData(studentData);
  }
  clearForm();
}

// a function to fetch the data

function fetchData() {
  let studentData = {};
  studentData.userName = userName.value;
  studentData.email = email.value;
  studentData.phone = phone.value;
  studentData.city = city.value;
  return studentData;
}


// function to add data inside the table

function addData(data) {
  let table = document
    .getElementById("studentList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.userName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.email;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.phone;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.city;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onclick="editData(this)">EDIT</button>
    <button onclick="deleteData(this)">DELETE</button>`;
}

// update function

function updateData(data)
{
    selectedrow.cells[0].innerHTML = data.userName;
    selectedrow.cells[1].innerHTML = data.email;
    selectedrow.cells[2].innerHTML = data.phone;
    selectedrow.cells[3].innerHTML = data.city;

}

// delete function

function deleteData(btn)
{
    if(confirm(`Are u sure u want to delete this data ?`)){
        row = btn.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
    }
}

// edit functionality
function editData(btn)
{
    selectedrow = btn.parentElement.parentElement;
    userName.value= selectedrow.cells[0].innerHTML;
    email.value= selectedrow.cells[1].innerHTML;
    phone.value= selectedrow.cells[2].innerHTML;
    city.value= selectedrow.cells[3].innerHTML;
}

// function to clear form

function clearForm()
{
    userName.value="";
    email.value="";
    phone.value="";
    city.value="";
    selectedrow=null;
}