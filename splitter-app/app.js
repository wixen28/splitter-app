

let bill = document.getElementById('bill')
const tips = document.querySelectorAll('.specific-tip')
const totalPerson = document.querySelector('.total')
const totalTip = document.querySelector('.tip-amount')
let people = document.querySelector('#people-sum')
const reset = document.querySelector('.reset-btn')


let percentage;
let billWithTip = 0;

tips.forEach( (oneTip) => {
    oneTip.addEventListener('click', function(e) {
        e.preventDefault()
        currentBill = Number(bill.value)
        percentage = parseInt(percentage)
        currentPeople = Number(people.value)

        if(currentPeople === 0 || currentBill === 0) {
            people.style.border = '1px solid red'
            people.placeholder='Must be greater than 0'
            people.classList.add('message')
            alert('Both bill and number of people must be filled!')
        } else if(currentPeople !== 0 && currentBill !== 0){
            people.classList.remove('message')
            people.style.border = 'none'
            people.placeholder=''
            if(oneTip.id === '5') {
                percentage = currentBill * 0.05
                console.log( billWithTip = currentBill + percentage)
                let roundedTipTotal = percentage / currentPeople
                let roundedTotalPerson = billWithTip / currentPeople
                totalTip.innerHTML = roundedTipTotal.toFixed(2)
                totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}`  
            } else if(oneTip.id === '10') {
                percentage = currentBill * 0.1
                console.log( billWithTip = currentBill + percentage)
                let roundedTipTotal = percentage / currentPeople
                let roundedTotalPerson = billWithTip / currentPeople
                totalTip.innerHTML = roundedTipTotal.toFixed(2)
                totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}`  
            } else if(oneTip.id === '15') {
                percentage = currentBill * 0.15
                console.log( billWithTip = currentBill + percentage)
                let roundedTipTotal = percentage / currentPeople
                let roundedTotalPerson = billWithTip / currentPeople
                totalTip.innerHTML = roundedTipTotal.toFixed(2)
                totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}`   
            } else if(oneTip.id === '25') {
                percentage = currentBill * 0.25
                console.log( billWithTip = currentBill + percentage)
                let roundedTipTotal = percentage / currentPeople
                let roundedTotalPerson = billWithTip / currentPeople
                totalTip.innerHTML = roundedTipTotal.toFixed(2)
                totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}`   
            } else if(oneTip.id === '50') {
                percentage = currentBill * 0.50
                console.log( billWithTip = currentBill + percentage)
                let roundedTipTotal = percentage / currentPeople
                let roundedTotalPerson = billWithTip / currentPeople
                totalTip.innerHTML = roundedTipTotal.toFixed(2)
                totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}` 
            } else if( oneTip.id === 'custom') {
                oneTip.addEventListener('keypress', function(e) {
                    if(e.key === 'Enter') {
                    // Cancel the default action, if needed
                    e.preventDefault();
                    // Trigger the button element with a click
                    oneTip.click();
                    }
                })
                customTip()
            }
        }
    
    })
})


reset.addEventListener('click', function(e) {
    bill.value = ''
    people.value = ''
    totalTip.innerHTML = '$' + 0  
    totalPerson.innerHTML = '$' + 0  
    document.querySelector('#custom').value = ''
})

//fc calc custom
const customTip = () => {
    currentBill = parseInt(bill.value)
    currentPeople = Number(people.value)
    let customPercentage = document.querySelector('#custom')
    let newCustom = Number(customPercentage.value) / 100
    let percentage = newCustom * currentBill
    let newBill = currentBill + percentage
    let roundedTipTotal = percentage / currentPeople
    let roundedTotalPerson = newBill / currentPeople
    totalTip.innerHTML = roundedTipTotal.toFixed(2)
    totalPerson.innerHTML = `$${roundedTotalPerson.toFixed(2)}`   
}


