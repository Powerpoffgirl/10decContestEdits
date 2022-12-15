let arr = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
];

arr.map(function (item){
    item.age = Number(item.age);
})

arr.forEach((item)=>{
    if(item.name ==="john"){
        item.age = 19;
    }
})

//Selecting the result div, dropDown and button
let result = document.getElementById("result");
let dropDown = document.getElementById("dropDown");
let btn = document.getElementById("filterBtn");

//function to filter by profession
function filterByProfession(){
    //setting the result div to empty
    result.innerHTML ="";

    //getting the value of the dropDown
    let dropDownValue = dropDown.value;
    console.log(dropDownValue);

    //if the value is profession , then alert the user to select a profession
    if(dropDownValue == "profession"){
        alert("Please select a profession");
        return;
    }

    //looping through the array and checking if the profession matches the dropdown value
    arr.forEach((item) => {

        //if the profession matches, then create a div and append it to the result div
        if(item.profession === dropDownValue){
           
            let table = document.createElement("table");
            let row = document.createElement("tr");
            let id = document.createElement("td");
            let fname = document.createElement("td");
            let profession = document.createElement("td");
            let age = document.createElement("td");
            id.innerHTML =item.id;
            fname.innerHTML = "Name : "+ item.name;
            profession.innerHTML = "Profession : "+item.profession;
            age.innerHTML = "Age : "+ item.age;

            // row.innerText = arr[0].id+". Name:"+ arr[0].name + " Profession:"+ arr[0].profession + " Age:" + arr[0].age;
            row.append(id);
            row.append(fname);
            row.append(profession);
            row.append(age);

            table.append(row);

            result.append(table);
        }
    })
}

btn.addEventListener("click",filterByProfession);
