// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 -  descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}
/*
const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];
*/
// function onClickButtonPriceDiscount(){
//     const inputPrice = document.getElementById('InputPrice');
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById('InputDiscount');
//     const priceDiscount = inputDiscount.value;

//     const precioConDescuento = calcularPrecioConDescuento(priceValue, priceDiscount);
    
//     const resultP = document.getElementById('ResultP');
//     resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
    // console.log(precioConDescuento);

//}


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

    


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });






