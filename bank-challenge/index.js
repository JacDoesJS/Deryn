import Account from './src/Account.js'
import Statement from './src/Statement.js'
import Transaction from './src/Transaction.js'


const accountTest = new Account(0);

const transactionC = new Transaction(1000, "credit", "01-10-2012");
const transactionE = new Transaction(2000, "credit", "01-13-2012");
const transactionF = new Transaction(-500, "debit", "01-14-2012");
accountTest.addTransaction(transactionC);
accountTest.addTransaction(transactionE);
accountTest.addTransaction(transactionF);

const array = accountTest.getReverseStatementArray();

Statement.printStatement(array);

