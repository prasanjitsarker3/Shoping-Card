function updateProductNumber(product,price,increasing){
    const productInput=document.getElementById(product + "-input");
    let productNumber=productInput.value;
    if(increasing== true ){
        productNumber=parseInt(productNumber) + 1;
    }
    else if(productNumber >0){
        productNumber=parseInt(productNumber) - 1;
    }
    productInput.value=productNumber;
    const productTotal=document.getElementById(product +"-amount");
    productTotal.innerText=productNumber * price;
    calculateTotal();
}

function getInputValue(product){
    const productInput=document.getElementById(product + "-input");
    const productNumber=parseInt(productInput.value);
    return productNumber;
} 

function calculateTotal(){ 
    const phoneTotal=getInputValue("phone") * 1219;
    const caseTotal=getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount=subTotal / 10;
    const totalPrice= subTotal+taxAmount;
    console.log(subTotal);
    //update on the html
    document.getElementById("sub-total").innerText=subTotal;
    document.getElementById("tax-amount").innerText=taxAmount;
    document.getElementById("total-price").innerText=totalPrice;


}

//handle phone increase and decrease

document.getElementById("phone-plus").addEventListener("click",function(){
    updateProductNumber("phone",1219,true);
})
document.getElementById("phone-min").addEventListener("click",function(){
    updateProductNumber("phone",1219,false);
})
//handle case increase and decrease
document.getElementById("case-plus").addEventListener('click', function(){
    updateProductNumber("case",59,true); 
})
document.getElementById("case-min").addEventListener('click', function(){
    updateProductNumber("case",59,false); 
})