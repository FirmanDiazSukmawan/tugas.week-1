const pijarFood = (hargaMakanan, voucher, pajak, jarak) => {
    let discount = 0;
    const tarif = jarak <= 2 ? 5000 : 5000 + (jarak - 2) * 3000;
    if (voucher === "PIJARFOOD5" && hargaMakanan >= 50000) {
        discount = hargaMakanan * 0.5;
        discount = discount >= 50000 ? 50000 : discount;
    } else if (voucher === "DITRAKTRIRPIJAR" && hargaMakanan >= 25000) {
        discount = hargaMakanan * 0.6;
        discount = discount >= 25000 ? 30000 : discount;
    }

    let biayaPajak = 0;
    if (pajak) {
        biayaPajak = hargaMakanan * 0.05;
    }

    const subTotal = hargaMakanan - discount + tarif + biayaPajak;

    console.log(`harga: ${hargaMakanan}`);
    console.log(`tarif: ${tarif}`);
    console.log(`discount: ${discount}`);
    console.log(`pajak: ${biayaPajak}`);
    console.log(`subTotal: ${subTotal}`);
};

pijarFood(75000, "PIJARFOOD5", true, 2);




const divideAndSort = (angkaParameter) => {
    let pecahAngka = angkaParameter.toString().split("0");
    let sortNumber = pecahAngka.map((item) => parseInt(item.split("").sort().join("")));
    let hasil = parseInt(sortNumber.join(""));
    return hasil;

}
console.log(divideAndSort(5956560159466056));