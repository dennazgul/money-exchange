// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {

    }
    if (currency > 10000) {
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
        return obj;
    }
    if (currency < 0) {
        return obj;
    }
    var money = currency;
    obj.H = Math.floor(money / 50);
    money = money - obj.H*50;
    console.log(money);
    if (obj.H == 0) {
        delete obj.H;
    }
    obj.Q = Math.floor(money / 25);
    money = money - obj.Q*25;
    console.log(money);
    if (obj.Q == 0) {
        delete obj.Q;
    }
    obj.D = Math.floor(money / 10);
    money = money - obj.D*10;
    console.log(money);
    if (obj.D == 0) {
        delete obj.D;
    }
    obj.N = Math.floor(money / 5);
    money = money - obj.N*5;
    
    if (obj.N == 0) {
        delete obj.N;   
    }
    obj.P = money;
    if (obj.P ==0) {
        delete obj.P; 
    }
    return obj
}