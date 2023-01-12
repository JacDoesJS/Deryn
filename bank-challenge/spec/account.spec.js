import Transaction from '../src/Transaction.js'
import Account from '../src/Account.js'


describe("bank account tests: ", () => {

    it(`check that transaction details are stored in statementArray`, () => {
        //Arrange
        const accountB = new Account(0);
        const transactionB = new Transaction(1000, "credit", "14-01-2012");
        accountB.addTransaction(transactionB);

        //Act
        const result = accountB.getStatementArray().length;

        //Assert
        expect(result).toEqual(1);
    });

    it(`test balance is updated`, () => {
        //Arrange
        const accountJ = new Account(0);
        const transactionC = new Transaction(1000, "credit", "01-10-2012");
        const transactionE = new Transaction(2000, "credit", "01-13-2012");
        accountJ.addTransaction(transactionC);
        accountJ.addTransaction(transactionE);

        //Act
        const result = accountJ.getBalance();

        //Assert
        expect(result).toBe(3000);
    });

    it(`check that amount is correctly stored on statement array`, () => {
        //Arrange
        const accountJ = new Account(1000);
        const transactionF = new Transaction(500, "debit", "01-14-2012");
        accountJ.addTransaction(transactionF);

        //Act
        const result = accountJ.getBalance();

        //Assert
        expect(result).toEqual(500);
    });

    it(`check that balance updates on statement array`, () => {
        //Arrange
        const accountJ = new Account(0);
        const transactionC = new Transaction(1000, "credit", "01-10-2012");
        const transactionE = new Transaction(2000, "credit", "01-13-2012");
        const transactionF = new Transaction(500, "debit", "01-14-2012");
        accountJ.addTransaction(transactionC);
        accountJ.addTransaction(transactionE);
        accountJ.addTransaction(transactionF);

        //Act
        const result = accountJ.getBalance();

        //Assert
        expect(result).toEqual(2500);
    });

    it(`check that amounts are rounded to 2 decimal places`, () => {
        //Arrange
        const accountB = new Account(0);
        const transactionB = new Transaction(1000, "credit", "14-01-2012");
        accountB.addTransaction(transactionB);

        //Act
        const result = accountB.getBalance();

        //Assert
        expect(result).toEqual(1000);
    });

});

