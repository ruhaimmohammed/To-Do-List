function getAndUpdate(){
    console.log("Updating List...");
    tit = document.getElementById('tit').value;
    desc = document.getElementById('description').value;
    date = document.getElementById('date').value;
    time = document.getElementById('time').value;

    
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc, date, time]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc, date, time]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();

}

function update() {
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    
    // Looping table body

    let tableBody = document.getElementById("tbody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str +=`
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td><button class="btn btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`; 
    });
    tableBody.innerHTML = str ;

    
}

add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

// Deleting completed task
function deleted(itemIndex){
    console.log ("Delete", itemIndex)
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    // Delete itemIndex element from Array
    itemJsonArray.splice(itemIndex, 1)
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();
}

// Clear whole list

function clearList(){
    if(confirm("Do you really want to clear")){
    console.log("Whole list cleared");
    localStorage.clear();
    update();
    }
}
