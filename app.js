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
        
        name : document.getElementById("nameIn").value,
        address : document.getElementById("addressIn").value,
        mobile : document.getElementById("mobileIn").value,
        email : document.getElementById("emailIn").value,
        
    })

    let cus = JSON.stringify(customerList.concat(JSON.parse(localStorage.getItem(JSON.stringify(localStorage.length-1)))));

    localStorage.setItem(JSON.stringify(localStorage.length),cus)

    
    reset();
    loadTable();
    
    
}

function loadTable(){

    fetch(`http://localhost:9001/customers` )
    .then(res => res.json())
    .then(data=>{
        
        console.log(data);

    let body =`<div class="flex justify-center  p-4 text-lg ">
                <div id="" class="flex gap-30 bg-gray-400 p-4 items-center justify-center px-10 font-bold">

                  <div class="flex flex-col items-center justify-center w-1">ID</div>
                  <div class="flex flex-col items-center justify-center w-40">Name</div>
                  <div class="flex flex-col items-center justify-center w-50">Address</div>
                  <div class="flex flex-col items-center justify-center w-10">Mobile</div>
                  <div class="flex flex-col items-center justify-center w-30">Email</div>

                </div>
              </div>`

    for(item of data){

       body+=`

                <div class="flex justify-center  p-4 text-lg ">
                <div id="" class="flex gap-30 bg-gray-300 p-4 items-center justify-center px-10 h-20 ">

                  <div class="flex flex-col items-center justify-center w-1">${item.id}</div>
                  <div class="flex flex-col items-center justify-center w-40">${item.name}</div>
                  <div class="flex flex-col items-center justify-center w-50">${item.address}</div>
                  <div class="flex flex-col items-center justify-center w-10 ">${item.mobile}</div>
                  <div class="flex flex-col items-center justify-center w-30 ">${item.email}</div>

                </div>
              </div>
       
       `; 
        document.getElementById("table").innerHTML=body;

    }
        

        
        
    })
    
    

    

}


loadTable();







