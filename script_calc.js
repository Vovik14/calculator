let a = '';
let b = '';
let sign = '';
let finish = true;

const digit = ['0', '1', '2','3', '4', '5','6', '7', '8','9', '.'];
const action = ['+', '-', 'X', '/', '%'];

const out = document.querySelector('.calc-screen p');

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = true;
    out.textContent=0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) =>{
    // console.log(event.target.textContent);
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;
    // console.log(a);

    out.textContent=0;
    const key = event.target.textContent;  
    
    if (digit.includes(key)){
        if (b==='' && sign===''){
            a+=key;
            // console.log(a, sign, b);
            out.textContent=a;
            // return;
        }
        else if (a!=='' && b!=='' && finish){
            b=key;
            finish=false;
            out.textContent=b;
        }
        else{
            b+=key;
            // console.log(a, sign, b);
            out.textContent=b;
            // return;
        }
        console.log(a, sign, b);
        return;        
    }

    if (action.includes(key)) {
        sign=key;
        out.textContent=sign;
        // out.textContent=a;
        console.log(a, sign, b);
        return;
    } 
    
    // There is equal
    if (key==='='){
        switch (sign){
            case '+':
                a=(+a)+(+b);
                break;
            case '-':
                a=a-b;
                break;
            case 'X':
                a=a*b;
                break;
            case '/':
                if (b==='0'){
                    clearAll();
                    out.textContent='cant by 0';
                    // console.log(a, sign, b);
                    return;
                }
                a=a/b;
                break;
            case '%':
                a=a/100;
                break;
        }
        finish=true;
        out.textContent=a;
        console.log(a, sign, b);        
    }
    
    
}

