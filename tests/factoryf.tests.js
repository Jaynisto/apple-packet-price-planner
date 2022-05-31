describe("Testing the Factor function", function(){
    it(" Should be able to set the Box price cost", function(){
        let set = AppleTest();

        set.appleBoxPrice(2.85);
        assert.equal(2.85, set.getBoxPrice());

        let set2 = AppleTest();

        set2.appleBoxPrice(25);
        assert.equal(25, set2.getBoxPrice());
    });
    it(" Should be able to set the number of apples in the Packet", function(){
        let set = AppleTest();

        set.applePerBox(2);
        assert.equal(2, set.getNumOfApplesPerBag());

        let set2 = AppleTest();

        set2.applePerBox(25);
        assert.equal(25, set2.getNumOfApplesPerBag());
    });
    it(" Should be able to set the Packet size", function(){
        let set = AppleTest();

        set.packetSize('2kg');
        assert.equal('2kg', set.getPacketSize());

        let set2 = AppleTest();

        set2.packetSize("24kg");
        assert.equal("24kg", set2.getPacketSize());
    });

    it(" Should be able to set Persentage", function(){
        let set = AppleTest();

        set.requiredProfit(20);
        assert.equal(0.2, set.getProfit());

        let set2 = AppleTest();

        set2.packetSize("24kg");
        assert.equal("24kg", set2.getPacketSize());
    });
});
