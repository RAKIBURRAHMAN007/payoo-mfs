document.getElementById('btn-cash-out-money').addEventListener('click',function(event){
    event.preventDefault();
    const cashOutMoney=document.getElementById('input-cashout-money').value;
    const pinNumber=document.getElementById('cash-out-pin-number').value;
    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        const newBalance=parseFloat(balance)-parseFloat(cashOutMoney);
        document.getElementById('account-balance').innerText=newBalance;



    }
    else{
        alert(' Failed to add money ,please try again');
    }


});