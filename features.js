document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money').classList.add('hidden');

});
document.getElementById('adding-money').addEventListener('click',function(){
    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');


});