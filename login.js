document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();//prevent deafult reload
     const phnNumber=document.getElementById('phone-number').value;
     const pinNumber=document.getElementById('pin-number').value;
     if(phnNumber==='5' && pinNumber==='1234'){
        console.log('youre logeed in');
        window.location.href='home.html';
     }
     else{
        alert('wrong phone number and pin');
     }


})