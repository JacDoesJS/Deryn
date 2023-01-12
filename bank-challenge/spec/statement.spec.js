import Account from '../src/Account.js'
import Statement from '../src/Statement.js'
import Transaction from '../src/Transaction.js'


describe("statement printing tests: ", () => {

    it(`check that printStatement() is called`, () => {
        //Arrange
        //const testStatement = new Statement(0);
        let arrayTest = [1];
        spyOn(Statement, 'printStatement');

        //Act
        //testStatement.printStatement();
        //console.log(testStatement.printStatement());
        Statement.printStatement(arrayTest);

        //Assert
        expect(Statement.printStatement).toHaveBeenCalled();
    });

    it(`check that printStatement() headings are printed`, () => {
        //Arrange
        //const testStatement = new Statement();
        //console.log(testStatement.printStatement());
        let arrayTest = [1];
        spyOn(Statement, 'printStatement');

        //Act
        Statement.printStatement(arrayTest);
        //console.log(testStatement.printStatement());

        //Assert
        expect(Statement.printStatement).toHaveBeenCalled();
    });

    xit(`check that statement prints`, () => {
        //Arrange
        const accountZ = new Account(0);
        //const testStatement = new Statement();
        const transactionC = new Transaction(1000, "credit", "01-10-2012");
        const transactionE = new Transaction(2000, "credit", "01-13-2012");
        const transactionF = new Transaction(500, "debit", "01-14-2012");
        accountZ.addTransaction(transactionC);
        accountZ.addTransaction(transactionE);
        accountZ.addTransaction(transactionF);

        const array = accountZ.getReverseStatementArray();
        //spyOn(testStatement, 'printStatement');

        //Act
        const result = Statement.printStatement(array);
        //console.log(testStatement.printStatement(accountZ.getStatementArray()));

        //Assert
        expect(result).toEqual("a big console.log");
    });
});
