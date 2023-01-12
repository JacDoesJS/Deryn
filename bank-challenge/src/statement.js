export default class Statement {

    creditLine;
    debitLine;
    debitColor;
    creditColor;
    creditTheRest;
    debitTheRest

    static printStatement(array) {

        //console.log("%cThis is red", 'color: red'); // shows red if code typed in console but does not show red in the terminal

        console.log('\n%c' + 'date       || credit  || debit  || balance', 'background: grey' + ''); // should show grey background in the console

        for (let i = 0; i < array.length; i++) {
            if (array[i].type === "credit") {
                let creditLine = array[i].date + " || ";
                let creditColor = array[i].amount.toFixed(2);
                let creditTheRest = " ||        || " + array[i].balance.toFixed(2);
                console.log(creditLine + creditColor + creditTheRest);

            }
            else {
                let debitLine = array[i].date + " ||         || ";
                let debitColor = array[i].amount.toFixed(2);
                let debitTheRest = " || " + array[i].balance.toFixed(2);
                console.log(debitLine + debitColor + debitTheRest);
            };
        };
    }
}