const psw2 = document.getElementById('psw2');
const error = document.getElementById("nomatch");
const btn = document.getElementById('btn')


psw2.addEventListener('input', function(){
    const psw = document.getElementById('psw').value;
    const psw2 = document.getElementById('psw2').value;
    if (!(psw === psw2)){
        error.style.display="block";
        } else {
            error.style.display="none";
        }
});


btn.addEventListener('click', function(){
    alert('Your account have been created');
})