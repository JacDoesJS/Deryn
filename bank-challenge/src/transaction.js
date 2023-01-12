export default class Transaction {
    #amount;
    #type;
    #date;
    #transactionBalance;

    constructor(amount, type, date) {
        this.#amount = amount;
        this.#type = type;
        this.#date = date;
        this.#transactionBalance = 0;
    }

    getAmount() {
        return this.#amount;
    }

    getType() {
        return this.#type;
    }

    getDate() {
        const dateOut = new Date(this.#date);
        return dateOut.toLocaleString().slice(0, 10);
    }

    setTransactionBalance(money) {
        return this.#transactionBalance += money;
    }

    getTransactionBalance() {
        return this.#transactionBalance;
    }

}