let screen=document.getElementById('screen');            //Screen is an input tag
buttons=document.querySelectorAll('button');
let screenvalue='';                                     //screen value is a string which is to be vacant in the start
for (item of buttons){
    item.addEventListener('click', (e)=>{   
        buttonText = e.target.innerText;               //e.target on the button which is clicked, will give the inner text.
        console.log('Button text is',buttonText);      //whichever button is clicked, that button will be displayed.  
        if(buttonText=='X'){                           //X is fancy letter, we need     
            buttonText = '*';           
            screenvalue += buttonText;                 //using += so we can other numbers as well, not just one no. Screen.value is a vlaue that we need on calc's screen.
            screen.value = screenvalue;
        }
        else if (buttonText =='C'){      
            screenvalue = "";                          //when C is clicked, we need the values to be cleared so we added'' ''
            screen.value = screenvalue;
        }
        else if( buttonText =='='){                    //when we click =, we need to evaluate the values. so using eval command below!
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue += buttonText;
            screen.value=screenvalue;
        }
    })
}