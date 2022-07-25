let result = "";
let btn = document.querySelectorAll(".number");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            result = eval(result);
            document.querySelector('input').value = result;
        }
        else if (e.target.innerHTML == 'c'){
            result = '';
            document.querySelector('input').value = result
        }
        else{
        result = result + e.target.innerHTML;
        document.querySelector('input').value = result
        }
    })
})