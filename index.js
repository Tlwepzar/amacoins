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
        document.getElementById('shopColumns').style.display = 'unset'
        document.getElementById('exchangeColumns').style.display = 'none';
    }

    let shopButton = document.getElementById('shop');
    shopButton.addEventListener('click', showShop)
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

(()=> {
    function buying1() {
        let a = parseFloat(document.querySelector('#value1').value);
        let b = parseFloat(document.querySelector('#value2').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else{
            alert(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} kasiCoins have been purchased \n\n${a} ZAR has been deducted on your credit card`);
        }
    }

    let buy1 = document.getElementById('buyButton1');
    buy1.addEventListener('click', buying1);
})();

(()=> {
    function buying2(){
        let a = parseFloat(document.querySelector('#value3').value);
        let b = parseFloat(document.querySelector('#value4').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else{
            alert(`Transaction Sucessful \n\nThe current trade rate is ${b}% \n\n${c} hoodCoins have been purchased \n\n${a} USD has been deducted on your credit card`);
        }
    }

    let buy2 = document.getElementById('buyButton2');
    buy2.addEventListener('click', buying2);
})();

(()=> {
    function buying3() {
        let a = parseFloat(document.querySelector('#value5').value);
        let b = parseFloat(document.querySelector('#value6').value);
        let c = a * b;
        
        if (a == 0){
            alert('Value can not be zero. Insert value')
        } else{
            alert(`Transaction Sucessful \n\nThe current rate is ${b}% \n\n${c} burbCoins have been purchased \n\n${a} ZAR has been deducted on your credit card`);
        }
    }

    let buy3 = document.getElementById('buyButton3');
    buy3.addEventListener('click', buying3);
})();
