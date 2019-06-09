(function () {
    function showDate() {
        let showButton = new Date();
        document.getElementById('dateButton').innerHTML = showButton;
    }
    setInterval(showDate, 50);

    let button1 = document.getElementById('dateButton');
    button1.addEventListener('click', showDate);

})();

(function () {
    function contactAdmin() {
        alert('\t     For username and password resets\nPlease contact admin on credentials@amaCoins.com')
    }

    let adminDetails = document.getElementById('adminContact');
    adminDetails.addEventListener('click', contactAdmin);
})();
