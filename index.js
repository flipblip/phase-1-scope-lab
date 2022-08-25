var customerName = "bob";

console.log(customerName);

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

var bestCustomer;

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'wycliffe';

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Martin';
    return leastFavoriteCustomer;

}

// function upperCaseCustomerName(){
//     return customerName.toUpperCase()
// }

// function setBestCustomer(){
//     var bestCustomer = 'not bob';
// }

// overwriteBestCustomer () => {
//     let bestCustomer = 'Alice'
// }

