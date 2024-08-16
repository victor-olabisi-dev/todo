var allAthletes = (JSON.parse(localStorage.getItem('allathletes')))
let currentItem;

function register() {


  
    var todoInput = document.getElementById("todo");
 

  var todo =todoInput.value;
  
if (todo === "") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";

   todoInput.value = "";
   
    var person = {
      todo
    };

   allAthletes.push(person);
    console.log(allAthletes);

    
    showResult.innerHTML = `
         <tr>
            <td>S/N</td>
            <td>task</td>
         
            <td></td>
            </tr>`;

    for (var i = 0; i < allAthletes.length; i++) {
      showResult.innerHTML += `
            
          
           <tr>
            <td>${i + 1}</td>
            <td>${allAthletes[i].todo}</td>
        
            <td>
              <button  onclick="edititem(${i})" class= "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
              <button onclick="deleteitem(${i})" class= "btn btn-success">delete</button>
              <button onclick="done(${i})" class= "btn btn-info">done</button>
            </td>
            </tr>
        
            `;
    }
  }
  localStorage.setItem('allathletes', JSON.stringify(allAthletes))
}

function deleteitem(index) {
  console.log(index);
  var confamu = confirm("Are you sure you want to delete this task? Once it's deleted, it cannot be undone");
  if (confamu == true) {
    showResult.innerHTML = ``;
    allAthletes.splice(index, 1);
    for (var i = 0; i < allAthletes.length; i++) {
      showResult.innerHTML += `
      
    
     <tr>
      <td>${i + 1}</td>
      <td>${allAthletes[i].todo}</td>
     
      <td>
        <button  onclick="edititem(${i})" class= "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
        <button onclick="deleteitem(${i})" class= "btn btn-success">delete</button>
        <button onclick="done(${i})" class= "btn btn-info">done</button>
      </td>
      </tr>
  
      `;
    }
  }
  localStorage.setItem('allathletes', JSON.stringify(allAthletes))
}

function edititem(index) {
  // console.log(index)

  currentItem = index
  // allAthletes.slice(index);


  NewTask.value = allAthletes[currentItem].todo
 
  showResult.innerHTML = ``;
  for (var i = 0; i < allAthletes.length; i++) {
    showResult.innerHTML += `
    
  
   <tr>
    <td>${i + 1}</td>
    <td>${allAthletes[i].todo}</td>
    
    <td>
    <button  onclick="edititem(${i})" class= "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
    <button onclick="deleteitem(${i})" class= "btn btn-success">delete</button>
    <button onclick="done(${i})" class= "btn btn-info">done</button>
    </td>
    </tr>
    
    `;
  }
  
  
}


function saveEdit() {

  
  
  console.log(allAthletes[currentItem])
  allAthletes[currentItem].todo= NewTask.value
  
  console.log(allAthletes[currentItem])

  showResult.innerHTML = ``;
  for (var i = 0; i < allAthletes.length; i++) {
    showResult.innerHTML += `
    
  
   <tr>
    <td>${i + 1}</td>
    <td>${allAthletes[i].todo}</td>
    
    <td>
    <button  onclick="edititem(${i})" class= "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">edit</button>
    <button onclick="deleteitem(${i})" class= "btn btn-success">delete task</button>
    <button onclick="done(${i})" class= "btn btn-info">done</button>
    </td>
    </tr>
    
    `;
  }
  localStorage.setItem('allathletes', JSON.stringify(allAthletes))

}
function done(index) {
  console.log(index);
  var good = confirm("Task completed successfully");
  if (good == true) {
    showResult.innerHTML = ``;
    allAthletes.splice(index, 1);
    for (var i = 0; i < allAthletes.length; i++) {
      showResult.innerHTML += `
      
    
     <tr>
      <td>${i + 1}</td>
      <td>${allAthletes[i].todo}</td>
     
      <td>
        <button  onclick="edititem(${i})" class= "btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">edit task</button>
        <button onclick="deleteitem(${i})" class= "btn btn-success">delete task</button>
        <button onclick="done(${i})" class= "btn btn-info">done</button>
      </td>
      </tr>
  
      `;
    }
  }
  localStorage.setItem('allathletes', JSON.stringify(allAthletes))
}
