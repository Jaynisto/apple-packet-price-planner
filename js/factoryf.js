function AppleTest(){
    var singleBoxCost = 0;
    var numberOfApples = 0;
    var packetWeight = 0;
    var profit = 0;

    function appleBoxPrice(price){
        singleBoxCost = price;
    }
    function applePerBox(number){
        numberOfApples = number;
    }
    function packetSize(weight){
        packetWeight = weight;
    }
    function requiredProfit(persentage){
        profit = persentage/100;

    }
//Getting the values
    function getBoxPrice(){
        return singleBoxCost;
    }

    function getNumOfApplesPerBag(){
        return numberOfApples;
    }

    function getPacketSize(){
        return packetWeight;
    }

    function getProfit(){
        return profit;
    }




    return{
        appleBoxPrice,
        applePerBox,
        packetSize,
        requiredProfit,
        getBoxPrice,
        getNumOfApplesPerBag,
        getPacketSize,
        getProfit

    }
}