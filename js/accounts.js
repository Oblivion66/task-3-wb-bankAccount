// Дебетовый счет
class DebitAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    // Пополнение счета
    deposit(amount) {
        this.balance += amount;
        console.log(`Пополнение $${amount} на дебетовой счет ${this.accountNumber}. Текущий баланс: $${this.balance}`);
    }
    // Снятие средств с дебетового счета
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Снятие $${amount} из дебетового счета ${this.accountNumber}. Остаток на счету: $${this.balance}`);
        }
        else {
            console.log(`Недостаточно средств на дебетовом счете ${this.accountNumber}.`);
        }
    }
    // Получение баланса
    getBalance() {
        console.log(`Баланс дебетового счета ${this.accountNumber}: $${this.balance}`);
        return this.balance;
    }
}
// Кредитный счет
class CreditAccount {
    constructor(accountNumber, creditLimit) {
        this.accountNumber = accountNumber;
        this.balance = 0; // Баланс по кредитному счету начально равен нулю
        this.creditLimit = creditLimit;
        this.debt = 0;
    }
    // Пополнение кредитного счета
    deposit(amount) {
        if (this.debt > 0) {
            const debtPaid = Math.min(amount, this.debt);
            this.debt -= debtPaid;
            amount -= debtPaid;
            console.log(`Удержание $${debtPaid} взымаемых на кредитный счет ${this.accountNumber}. Остаток по задолженности: $${this.debt}`);
        }
        if (amount > 0) {
            this.balance += amount;
            console.log(`Пополнение $${amount} на кредитный счет ${this.accountNumber}. Текущий баланс: $${this.balance}`);
        }
    }
    // Снятие средств с кредитного счета
    withdraw(amount) {
        const availableFunds = this.balance + (this.creditLimit - this.debt);
        if (amount <= availableFunds) {
            if (amount <= this.balance) {
                this.balance -= amount;
            }
            else {
                this.debt += amount - this.balance;
                this.balance = 0;
            }
            console.log(`Снятие $${amount} с кредитного счета ${this.accountNumber}. Остаток на счету: $${this.balance}, Задолженность: $${this.debt}`);
        }
        else {
            console.log(`Недостаточно средств на кредитном счете ${this.accountNumber}.`);
        }
    }
    // Получение баланса
    getBalance() {
        console.log(`Баланс кредитного счета ${this.accountNumber}: $${this.balance}, Задолженность: $${this.debt}`);
        return this.balance;
    }
    // Получение текущей задолженности
    getDebt() {
        console.log(`Задолженность по кредитному счету ${this.accountNumber}: $${this.debt}`);
        return this.debt;
    }
}
export { DebitAccount, CreditAccount };