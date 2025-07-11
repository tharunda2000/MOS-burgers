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
                  <div class="flex flex-col items-center justify-center w-1"></i></div>

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
                  <div class="flex flex-col items-center justify-center w-1"><i class="ri-delete-bin-2-fill text-3xl text-red-600 hover:text-red-800 cursor-pointer" onclick="deleteCustomer(${item.id})"></i></div>
                  

                </div>
              </div>
       
       `; 
        document.getElementById("table").innerHTML=body;

    }
        

        
        
    })
    
    

    

}

function deleteCustomer(id){

  fetch(`http://localhost:9001/customer/${id}`,{
    method:"DELETE",
  }).then(()=>{
    alert("Customer DELETED");
    loadTable();
  });

}

function setText () {


     const customer = {
      name: document.getElementById("nameIn").value,
      email: document.getElementById("emailIn").value,
      mobile: document.getElementById("mobileIn").value,
      address: document.getElementById("addressIn").value
    };

    fetch("http://localhost:9001/customer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customer)
    })
    .then(() => {
      alert("Customer added!");
      reset();
      loadTable();
    });

    

    
    
    
    
}




loadTable();







