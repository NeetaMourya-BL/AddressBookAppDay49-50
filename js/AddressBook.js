// UC3

class EmployeePayrollData {
    //getter and setter method
    get fullName() {
        return this._fullName;
    }
    set fullName(fullName) {
        let nameRegex = RegExp('^[A-z]{1}[a-z]{2,}$');
        if (nameRegex.test(fullName))
            this.fullName = fullName;
        else throw 'Name is incorrect';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zipCode() {
        return this._zipCode;
    }
    set zipCode(zipCode) {
        this._zipCode = zipCode;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
}