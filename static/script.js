function scrollProducts(){
    window.scrollTo({
        top:700,
        behavior:'smooth'
    });
}


function openOrder(productName){

    document.getElementById('orderModal')
    .style.display='block';

    document.getElementById('product')
    .value=productName;
}


function closeOrder(){

    document.getElementById('orderModal')
    .style.display='none';
}


/* ORDER FORM */

const orderForm =
document.getElementById('orderForm');


orderForm.addEventListener('submit',
async(e)=>{

    e.preventDefault();

    const order={

        name:
        document.getElementById('name').value,

        phone:
        document.getElementById('phone').value,

        address:
        document.getElementById('address').value,

        product:
        document.getElementById('product').value,

        quantity:
        document.getElementById('quantity').value
    };


    const response =
    await fetch('/place-order',{

        method:'POST',

        headers:{
            'Content-Type':'application/json'
        },

        body:JSON.stringify(order)
    });


    const result =
    await response.json();

    alert(result.message);

    orderForm.reset();

    closeOrder();

});