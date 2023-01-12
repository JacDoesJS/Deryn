import Player from './player.js';

class Battle {
    computerWeapon = null;

    currentPlayer() {
        return this.player;
    }

    computerGuess = () => {
        let computerGs = Math.floor(Math.random() * 5);

        switch (computerGs) {
            case 0:
                this.computerWeapon = 'rock';
                break;
            case 1:
                this.computerWeapon = 'paper';
                break;
            case 2:
                this.computerWeapon = 'scissors';
                break;
            case 3:
                this.computerWeapon = 'lizard';
                break;
            case 4:
                this.computerWeapon = 'Spock';
                break;
        }
        return this.computerWeapon;
    }

    checkWinner(playerWeapon, computerWeapon) {
        let result = "";
        let confirmation = '';
        const computer = "Computer wins: ";
        const player = "You WIN: "
        const draw = "It's a draw!";

        if (playerWeapon === computerWeapon) {
            result = draw;
        }

        else if (computerWeapon === 'rock' && playerWeapon === 'paper') {
            result = player;
            confirmation = 'paper wraps rock.';

        }
        else if (computerWeapon === 'rock' && playerWeapon === 'scissors') {
            result = computer;
            confirmation = 'rock blunts scissors.';
        }
        else if (computerWeapon === 'rock' && playerWeapon === 'lizard') {
            result = computer;
            confirmation = 'lizard is crushed by rock.';
        }
        else if (computerWeapon === 'rock' && playerWeapon === 'Spock') {
            result = player;
            confirmation = 'Spock vaporises rock.';
        }
        else if (computerWeapon === 'paper' && playerWeapon === "rock") {
            result = computer;
            confirmation = 'paper wraps rock.';
        }
        else if (computerWeapon === 'paper' && playerWeapon === "scissors") {
            result = player;
            confirmation = 'scissors cut paper.';
        }
        else if (computerWeapon === 'paper' && playerWeapon === "lizard") {
            result = player;
            confirmation = 'lizard eats paper.';
        }
        else if (computerWeapon === 'paper' && playerWeapon === "Spock") {
            result = computer;
            confirmation = 'Spock is disproved by paper.';
        }
        else if (computerWeapon === 'scissors' && playerWeapon === "rock") {
            result = player;
            confirmation = 'rock blunts scissors.';
        }
        else if (computerWeapon === 'scissors' && playerWeapon === 'paper') {
            result = computer;
            confirmation = 'scissors cut paper.'
        }
        else if (computerWeapon === 'scissors' && playerWeapon === "lizard") {
            result = computer;
            confirmation = 'lizard is decapitated by scissors.'
        }
        else if (computerWeapon === 'scissors' && playerWeapon === "Spock") {
            result = player;
            confirmation = 'Spock smashes scissors.'
        }
        else if (computerWeapon === 'lizard' && playerWeapon === 'rock') {
            result = player;
            confirmation = 'lizard is crushed by rock.'
        }
        else if (computerWeapon === 'lizard' && playerWeapon === 'paper') {
            result = computer;
            confirmation = 'lizard eats paper.'
        }
        else if (computerWeapon === 'lizard' && playerWeapon === 'scissors') {
            result = player;
            confirmation = 'lizard is decapitated by scissors.'
        }
        else if (computerWeapon === 'lizard' && playerWeapon === 'Spock') {
            result = computer;
            confirmation = 'lizard poisons Spock.'
        }
        else if (computerWeapon === 'Spock' && playerWeapon === 'rock') {
            result = computer;
            confirmation = 'Spock vaporises rock.'
        }
        else if (computerWeapon === 'Spock' && playerWeapon === 'paper') {
            result = player;
            confirmation = 'Spock is disproved by paper.'
        }
        else if (computerWeapon === 'Spock' && playerWeapon === 'scissors') {
            result = computer;
            confirmation = 'Spock smashes scissors.'
        }
        else if (computerWeapon === 'Spock' && playerWeapon === 'lizard') {
            result = player;
            confirmation = 'lizard poisions Spock.'
        }
        result += confirmation;

        return result;
    }
};


export default Battle;