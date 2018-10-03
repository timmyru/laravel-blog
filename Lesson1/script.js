let username = prompt("Ваше имя", '');
let budget = +prompt("Ваш бюджет на месяц?",'');
let mainList = {
    budget,
    username,
    shopGoods: [],
    employers: {},
    open: false
};

mainList.shopGoods[0] = prompt("Какой тип товаров будете продавать", "");
mainList.shopGoods[1] = prompt("Какой тип товаров будете продавать", "");
mainList.shopGoods[2] = prompt("Какой тип товаров будете продавать", "");

alert("Ваш бюджет на день: "+budget/30+" рублейАртем");

console.log(mainList);
