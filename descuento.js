// const precioOriginal = 120;
// const descuento = 18;
/*
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

     const inputDiscount = document.getElementById('InputDiscount');
     const priceDiscount = inputDiscount.value;

     const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);
    
     const resultP = document.getElementById('ResultP');
     resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
     console.log(precioConDescuento);

}
//Solucion 1
function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById('InputDiscount');
    // const priceDiscount = inputDiscount.value;

    const inputCoupon = document.getElementById('InputCoupon');
    const couponValue = inputCoupon.value;    

    let discount;

        switch(couponValue) {

            case "JuanDC_es_Batman":
                discount = 15;
                break;         
                
                case "pero_no_le_digas_a_nadie":
                discount = 30;
                break;    

                case "es_un_secreto":
                discount = 25;
                break;    
        }

        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
        const resultP = document.getElementById('ResultP');
        resultP.innerText = 'El precio con cupon es: $' + precioConDescuento;
    }
*/

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });

//Solucion 2
/*
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;

    // const inputDiscount = document.getElementById('InputDiscount');
    // const priceDiscount = inputDiscount.value;

    const inputCoupon = document.getElementById('InputCoupon');
    const couponValue = inputCoupon.value;    

   
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        discount = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        discount = 30;
     } else if (couponValue === "es_un_secreto") {
        discount = 25;
     }
    
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
        const resultP = document.getElementById('ResultP');
        resultP.innerText = 'El precio con cupón es: $' + precioConDescuento;
    }
*/

//Solucion 3


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = inputPrice.value;
    
    const inputCoupon = document.getElementById('InputCoupon');
    const couponValue = inputCoupon.value;

    const isCouponValueValid = (coupon) => {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
} else {
       
        const discount = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El precio con descuento con el cupon " + couponValue + " son: $" + precioConDescuento;
}

}
 