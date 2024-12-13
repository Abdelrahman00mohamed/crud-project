
var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescInput = document.getElementById('productDescInput');
let btnadd=document.querySelector(".btn-info")
let btnupdate=document.querySelector(".d-none")
var productsContainer;
if(localStorage.getItem("myproducts")!=null){
    productsContainer=JSON.parse(localStorage.getItem("myproducts"))
    displayProducts(productsContainer);
}else{
    productsContainer=[]
}

function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescInput.value
    }
    productsContainer.push(product);
    localStorage.setItem("myproducts",JSON.stringify(productsContainer))
 
    clearForm();
    displayProducts(productsContainer);   
   
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";
  }

function displayProducts(list) { 
    var container = ``;
    for(var i =0;i<list.length ;i++)
    {
        container+=`<tr>
        <td>${i+1}</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td> <button onclick="ubdataproducts(${i})" class="btn btn-outline-info">update</button> </td>
        <td> <button onclick="deleteproducts(${i})" class="btn btn-outline-danger">delete</button> </td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML =container;
 }

 function deleteproducts(deletedindex) {
    productsContainer.splice(deletedindex,1)
    if(productsContainer.length==0){
     localStorage.clear("myproducts")
     displayProducts(productsContainer)
    }else{
        localStorage.setItem("myproducts",JSON.stringify(productsContainer))
        displayProducts(productsContainer)
    }
 }

function searchbroduct(ele) {
    var searcharr=[];
    for(var i =0;i<productsContainer.length;i++){
        if(productsContainer[i].name.toLowerCase().includes(ele.toLowerCase())){
           searcharr.push(productsContainer[i]) 
        }
    }
    displayProducts(searcharr)
}
let indexupdated;
function ubdataproducts(ubdated){
    productNameInput.value =productsContainer[ubdated].name
    productPriceInput.value =productsContainer[ubdated].price
    productCategoryInput.value =productsContainer[ubdated].category
    productDescInput.value =productsContainer[ubdated].desc
btnadd.classList.toggle("d-none")
btnupdate.classList.toggle("d-none")
indexupdated=ubdated;
}


function updatebtn(){
    productsContainer[indexupdated].name=productNameInput.value
    productsContainer[indexupdated].price=productPriceInput.value
    productsContainer[indexupdated].category=productCategoryInput.value
    productsContainer[indexupdated].desc=productDescInput.value
    clearForm()
    displayProducts(productsContainer)
    localStorage.setItem("myproducts",JSON.stringify(productsContainer))
    btnadd.classList.toggle("d-none")
    btnupdate.classList.toggle("d-none")
}


//  regular expression
// function inputvalid(){
//     let val=/^[A-Z][a-z]{3,11}$/
    
//     if (val.test(productNameInput.value)) {
//         productNameInput.classList.add("is-valid")
//         productNameInput.classList.remove("is-invalid")
//         if(productNameInput.value==''){
//             productNameInput.classList.remove("is-valid")
//         }else{
//             productNameInput.classList.add("is-valid")
//         productNameInput.classList.remove("is-invalid")
//         }
//         return true
//     }else{
//         productNameInput.classList.add("is-invalid")
//         productNameInput.classList.remove("is-valid")
//         if(productNameInput.value==''){
//             productNameInput.classList.remove("is-invalid")
//         }else{
//             productNameInput.classList.add("is-invalid")
//             productNameInput.classList.remove("is-valid")
//         }
        
//         return false
//     }
// }