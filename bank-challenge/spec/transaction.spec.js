import Transaction from '../src/Transaction.js'

describe("transaction tests: ", () => {

    it(`test amount can be retrieved`, () => {
        //Arrange
        const transactionA = new Transaction(500, "credit");

        //Act
        const result = transactionA.getAmount()

        //Assert
        expect(result).toBe(500);
    });

    it(`test type of transaction is recorded`, () => {
        //Arrange
        const transactionA = new Transaction(500, "credit");

        //Act
        const result = transactionA.getType()

        //Assert
        expect(result).toBe("credit");
    });

    it(`test date is stored in correct format`, () => {
        //Arrange
        const transactionA = new Transaction(500, "credit", "01-10-2012");

        //Act
        const result = transactionA.getDate()

        //Assert
        expect(result).toBe("10/01/2012");
    });


});