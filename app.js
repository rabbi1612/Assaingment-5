function selectSeat() {
    document.getElementById('buy-btn') = document.getElementById('select-seat');

}
function hiddenElement(elements) {
    const element = document.getElementById('p-ticket');
    element.classList.add('hidden');
}
function showElement(elements) {
    const element = document.getElementById('success');
    element.classList.remove('hidden');
}
function successSection() {
    hiddenElement('p-ticket');
    showElement('success')
}

const allSeats = document.getElementsByClassName('all-seat');
let count = 0;
let totalSeat = 40;
for (const seat of allSeats) {
    seat.addEventListener('click', function (element) {
        count = count + 1;
        totalSeat = totalSeat - 1;
        const seatNumber = element.target.innerText
        const seatClass = 'Economics';
        const seatPrice = 550;
        const selectedSeatcontainer = document.getElementById('selected-seat');
        const li = document.createElement('li')
        const p = document.createElement('p');
        p.innerText = seatNumber;
        const p2 = document.createElement('p');
        p2.innerText = seatClass;
        const p3 = document.createElement('p');
        p3.innerText = seatPrice
        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);

        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById('total-price').innerText = convertedTotalPrice + seatPrice;

        let grandTotalPrice = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotalPrice);
        const sum = convertedGrandTotal + seatPrice;
        setInnerText('grand-total', sum)



        if (count < 5) {
            document.getElementById('count-seat').innerText = count;
            element.target.style.backgroundColor = '#1DD100';
            selectedSeatcontainer.appendChild(li)
        }
        if (totalSeat > 0 && totalSeat > 35) {
            document.getElementById('total-seat').innerText = totalSeat;
        }

    })

}
function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

document.getElementById('apply-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('cupon-input');
    const inputBtn = document.getElementById('apply-btn')
    const inputval = inputValue.value
    if (inputval === "NEW15") {
        inputBtn.disabled = true;
        inputValue.value = "";
    }
    else if (inputval === "Couple20") {
        inputBtn.disabled = true;
        inputValue.value = "";
    }
    else{
        inputval = inputValue.value ;
    }
})