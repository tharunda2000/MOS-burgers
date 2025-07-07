let customerList = [];

function reset () {

    document.getElementById("idIn").value="",
    document.getElementById("fNameIn").value="",
    document.getElementById("lNameIn").value="",
    document.getElementById("addressIn").value="",
    document.getElementById("ageIn").value="",
    document.getElementById("bdayIn").value="";

}

function resetStorage () {

    localStorage.clear();

}

function setText () {
    
      customerList.push({
        id : document.getElementById("idIn").value,
        firstName : document.getElementById("fNameIn").value,
        lastName : document.getElementById("lNameIn").value,
        address : document.getElementById("addressIn").value,
        age : document.getElementById("ageIn").value,
        birthday : document.getElementById("bdayIn").value
    })

    let cus = JSON.stringify(customerList.concat(JSON.parse(localStorage.getItem(JSON.stringify(localStorage.length-1)))));

    localStorage.setItem(JSON.stringify(localStorage.length),cus)

    
    reset();
    
    
}

function loadTable(){
    
    let customerListLocal = JSON.parse(localStorage.getItem(JSON.stringify(localStorage.length-1)));

    let body =`<tr>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">id</th>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">firstName</th>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">lastName</th>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">address</th>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">age</th>
                    <th class="border border-gray-300 dark:border-gray-600 bg-gray-300">birthday</th>
                    
                </tr>`

    for(data of customerListLocal){

       body+=`

                <tr>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.id}</td>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.firstName}</td>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.lastName}</td>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.address}</td>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.age}</td>
                    <td class="border border-gray-200 dark:border-gray-600 bg-gray-300">${data.birthday}</td>
                    
                </tr>
       
       `; 
        document.getElementById("table").innerHTML=body;

    }

}








