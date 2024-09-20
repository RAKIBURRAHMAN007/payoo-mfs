document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    const pinNumber=document.getElementById('pin-number').value;
    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        const newBalance=parseFloat(balance)+parseFloat(addMoney);
        document.getElementById('account-balance').innerText=newBalance;



    }
    else{
        alert(' Failed to add money ,please try again');
    }


});