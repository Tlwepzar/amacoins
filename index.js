((tellDate) => {
    function showDate() {
        let showButton = new Date();
        document.getElementById('dateButton').innerHTML = showButton;
    }
    setInterval(showDate, 50);

    let button1 = document.getElementById('dateButton');
    button1.addEventListener('click', showDate);

})();

((pressExchange) => {
    function showColumns() {
        document.getElementById('container').style.display = 'none';
        document.getElementById('balances').style.display = 'none';
        document.getElementById('exchangeColumns').style.display = 'unset';
        document.getElementById('shopColumns').style.display = 'none';

        document.getElementById('operator1').style.display = 'none';
        document.getElementById('operator2').style.display = 'none';
        document.getElementById('operator3').style.display = 'none';
    }

    function setRates(){
        document.getElementById('value2').value = 1.5876;
        document.getElementById('value4').value = 0.8941;
        document.getElementById('value6').value = 0.7938;
    }

    function setValues() {
        document.getElementById('value1').value = 0;
        document.getElementById('value3').value = 0;
        document.getElementById('value5').value = 0;
    }

    let exchangeButton = document.getElementById('exchange');
    exchangeButton.addEventListener('click', showColumns),
    exchangeButton.addEventListener('click', setRates),
    exchangeButton.addEventListener('click', setValues)
})();

((pressShop) => {
    function showShop () {
        document.getElementById('container').style.display = 'none';
        document.getElementById('balances').style.display = 'none',
        document.getElementById('exchangeColumns').style.display = 'none',
        document.getElementById('shopColumns').style.display = 'unset'
    }

    let shopButton = document.getElementById('shop');
    shopButton.addEventListener('click', showShop);
})();

((pressProfile) =>{
    function showProfile () {
        document.getElementById('container').style.display = 'unset';
        document.getElementById('balances').style.display = 'unset';
        document.getElementById('exchangeColumns').style.display = 'none';
        document.getElementById('shopColumns').style.display = 'none';
    }

    let profileButton = document.getElementById('profile');
    profileButton.addEventListener('click', showProfile);
})();

((calcKco) => {
    function calc1 () {
        let a = parseFloat(document.querySelector('#value1').value);
        let b = parseFloat(document.querySelector('#value2').value);
        let op = document.querySelector('#operator1').value;
        let calculate;

        if (op == 'add') {
            calculate = a + b;
        } else if (op == 'min') {
            calculate = a - b;
        } else if (op == 'div') {
            calculate = a / b;
        } else if (op == 'mul') {
            calculate = a * b;
        }

        if (a == 0) {
            alert('Value can not be zero. Insert value ')
        } else {
            alert(`\t\t\t ${a} ZAR is worth ${calculate} kCos`);
        }

        console.log(calculate);
        //document.getElementById('results1').innerHTML = 'Currency Value: ' + calculate + ' kCos';
    }

    let button2 = document.getElementById('calcButton1');
    button2.addEventListener('click', calc1);

})();

((calcHco)=> {
    function calc2(){
        let a = parseFloat(document.querySelector('#value3').value);
        let b = parseFloat(document.querySelector('#value4').value);
        let op = document.querySelector('#operator2').value;
        let calculate;

        if (op == 'add') {
            calculate = a + b;
        } else if (op == 'min') {
            calculate = a - b;
        } else if (op == 'div') {
            calculate = a / b;
        } else if (op == 'mul') {
            calculate = a * b;
        }

        if (a == 0) {
            alert('Value can not be zero. Insert value')
        } else {
            alert(`\t\t\t ${a} USD is worth ${calculate} hCos`);
        }

        console.log(calculate);
        //document.getElementById('results2').innerHTML = 'Currency Value: ' + calculate + ' hCos';
    }

    let button3 = document.getElementById('calcButton2');
    button3.addEventListener('click', calc2);
})();

((calcBco)=> {
    function calc3 () {
        let a = parseFloat(document.querySelector('#value5').value);
        let b = parseFloat(document.querySelector('#value6').value);
        let op = document.querySelector('#operator3').value;
        let calculate;

        if (op == 'add') {
            calculate = a + b;
        } else if (op == 'min') {
            calculate = a - b;
        } else if (op == 'div') {
            calculate = a / b;
        } else if (op == 'mul') {
            calculate = a * b;
        }

        if (a == 0) {
            alert('Value can not be zero. Insert value')
        } else {
            alert(`\t\t\t ${a} ZAR is worth ${calculate} bCos`);
        }

        console.log(calculate);
        //document.getElementById('results3').innerHTML = 'Currency Value: ' + calculate + ' bCos';
    }

    let button4 = document.getElementById('calcButton3');
    button4.addEventListener('click', calc3);
    
})();

((buyKco)=> {
    function buying1() {
        let a = parseFloat(document.querySelector('#value1').value);
        let b = parseFloat(document.querySelector('#value2').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else{
            alert(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} kasiCoins have been purchased \n\nR${a} has been deducted on your credit card`);
        }
        console.log(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} kasiCoins have been purchased \n\nR${a} has been deducted on your credit card`);
    }

    let buy1 = document.getElementById('buyButton1');
    buy1.addEventListener('click', buying1);
})();

((buyHco)=> {
    function buying2(){
        let a = parseFloat(document.querySelector('#value3').value);
        let b = parseFloat(document.querySelector('#value4').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else{
            alert(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} hoodCoins have been purchased \n\n$${a} has been deducted on your credit card`);
        }
        console.log(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} hoodCoins have been purchased \n\n$${a} has been deducted on your credit card`);

    }

    let buy2 = document.getElementById('buyButton2');
    buy2.addEventListener('click', buying2);
})();

((buyBco)=> {
    function buying3() {
        let a = parseFloat(document.querySelector('#value5').value);
        let b = parseFloat(document.querySelector('#value6').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else {
            alert(`Transaction Sucessful \n\nThe current rate is ${b}% \n\n${c} burbCoins have been purchased \n\nR${a} has been deducted on your credit card`);
        }
        console.log(`Transaction Sucessful \n\nThe current rate is ${b}% \n\n${c} burbCoins have been purchased \n\nR${a} has been deducted on your credit card`);

    }

    let buy3 = document.getElementById('buyButton3');
    buy3.addEventListener('click', buying3);
})();

((sellKco)=>{
    function selling1(){
        let zarValue = 0;
        let kcoQty = Number(prompt('How many kasi Coins do you want to sell?'));
        let kcoRate = Number(parseFloat(document.querySelector('#value2').value));

        let kcoCalc = kcoQty * kcoRate;

        zarValue === kcoCalc ? alert('Transaction Cancelled') : alert(kcoQty + ' Kasi Coins Sold \n\nTransaction Successful \n\nYou have R' + kcoCalc + ' deposited into your account');
        console.log(kcoQty +' kasi Coins were SOLD');
    }

    let sell1 = document.getElementById('sellButton1');
    sell1.addEventListener('click', selling1);
})();

((sellHco)=>{
    function selling2(){
        let usdValue = 0;
        let hcoQty = Number(prompt('How many hood Coins do you want to sell?'));
        let hcoRate = Number(parseFloat(document.querySelector('#value4').value));

        let hcoCalc = hcoQty * hcoRate;

        usdValue == hcoCalc ? alert('Transaction Cancelled') : alert(hcoQty + ' Hood Coins Sold \n\nTransaction Successful \n\nYou have $' + hcoCalc + ' deposited into your account');
        console.log(hcoQty +' hood Coins were SOLD');
    }

    let sell2 = document.getElementById('sellButton2');
    sell2.addEventListener('click', selling2);
})();

((sellBco)=>{
    function selling3(){
        let zarValue = 0;
        let bcoQty = Number(prompt('How many burb Coins do you want to sell?'));
        let bcoRate = Number(parseFloat(document.querySelector('#value6').value));

        let bcoCalc = bcoQty * bcoRate;

        zarValue == bcoCalc ? alert('Transaction Cancelled') : alert(bcoQty + ' burb Coins Sold \n\nTransaction Successful \n\nYou have R' + bcoCalc + ' deposited into your account');
        console.log(bcoQty +' burb Coins were SOLD');
    }

    let sell3 = document.getElementById('sellButton3');
    sell3.addEventListener('click', selling3);
})();