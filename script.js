add = document.getElementById("add");
add.addEventListener("click", () =>{
    console.log("Updating List...");
    tit = document.getElementById('tit').value;
    desc = document.getElementById('description').value;
    date = document.getElementById('time').value;

    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([tit, desc, date]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, desc, date]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }


    
});