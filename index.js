function simpleInterest(principal, rate, time){
    rate = rate / 100
    return principal * rate * time;
}

// console.log(simpleInterest(50000, 5, 30))

function compounInterest(principal, rate, time){
    rate = rate / 100;
    return principal * Math.pow((1 + rate), time);
}

// console.log(compounInterest(50000, 5, 30))

function calculateInvestment(){
    const InputMoney = document.getElementById('InputMoney');
    const valueMoney = InputMoney.value;
    const InputInterest = document.getElementById('InputInterest');
    const valueInterest = InputInterest.value;
    const InputYears = document.getElementById('InputYears');
    const valueYears = InputYears.value;

    const rSimpleInterest = simpleInterest(valueMoney, valueInterest, valueYears);
    const rCompoundInterest = compounInterest(valueMoney, valueInterest, valueYears);
    
    const resultP = document.getElementById('result');
    resultP.innerHTML = `Investment obtained with simple interest: ${rSimpleInterest.toFixed(2)}
    | Investment obtained with compound interest: ${rCompoundInterest.toFixed(2)}`
}