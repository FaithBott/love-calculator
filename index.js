function makePercentage(firstName, secondName) {
    if(firstName === 'faith' && secondName === 'jacob') {
        return 100000001;
    }
}

function calculateLove() {
    const firstName = document.getElementById('first').value;
    const secondName = document.getElementById('second').value;
    const result = document.getElementById('result');
    
    result.style = '';
    
    result.value = makePercentage(firstName, secondName) + '%';
    
    if(!firstName || !lastName) {
        result.value = 'Stop cheating you fucking slut'
    }
}