export default class Account {

    #statementArray = [];
    #balance = 0;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    addTransaction(transaction) {
        const trans = {
            date: transaction.getDate(),
            type: transaction.getType(),
            amount: transaction.getAmount(),
            balance: 0
        }

        this.setBalance(trans.amount, trans.type);
        trans.balance = this.getBalance();
        this.#statementArray.push(trans);

    }

    getStatementArray() {
        return this.#statementArray;
    }

    getReverseStatementArray() {
        return this.#statementArray.reverse();
    }

    setBalance(amount, type) {
        if (type === "credit") {
            this.#balance += amount;
        }
        else {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;

    }
};