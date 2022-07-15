function myfunction(){
    let element = document.getElementById("dark");
    element.classList.toggle("dark-mode");
}

let display = document.getElementById('displays');
let buttons = Array.from(document.getElementsByClassName('btn-number'));

buttons.map( button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                let pattern1 = new RegExp('\u{00F7}');
                let pattern2 = new RegExp('[x]');
                if(pattern1.test(display.innerText)){
                    let str = display.innerText.replace(pattern1,"/");
                    display.innerText = eval(str);

                }
                else if(pattern2.test(display.innerText)){
                    let str = display.innerText.replace(pattern2,"*");
                    display.innerText = eval(str);
                }
                else{
                    display.innerText = eval(display.innerText);
                }

                break;
            default:
                display.innerText += e.target.innerText;

        }
    })
})
