document.querySelector(".sheetBtn").addEventListener("click",script)
function script()
{
    if(  document.querySelector(".sheetBtn").getAttribute('value')==1)
    {
        document.querySelector(".sheetBtn").innerHTML='close';
        document.querySelector(".description").style.opacity='0.1';
        document.querySelector("#image").style.opacity='1';
        document.querySelector(".sheetBtn").setAttribute('value',0);
    
    }
    else
    {
        document.querySelector(".sheetBtn").innerHTML='Cheat Sheet';
        document.querySelector(".description").style.opacity='1';
        document.querySelector("#image").style.opacity='0';
        document.querySelector(".sheetBtn").setAttribute('value',1);
    
    }

}
let a=Math.trunc(Math.random()*70)+1;
if(a>1&&a<3)
{
document.querySelector(".clueInfo").innerHTML='Infact';
}
else if(a>4&&a<13)
{
    document.querySelector(".clueInfo").innerHTML='Childhood';
}
else if(a>13&&a<21)
{
    document.querySelector(".clueInfo").innerHTML='Adolescent';
}
else if(a>20&&a<20)
{
    document.querySelector(".clueInfo").innerHTML='Early Adulthood';
}
else if(a>30&&a<50 )
{
    document.querySelector(".clueInfo").innerHTML='Late Adulthood';
}
else 
{
    document.querySelector(".clueInfo").innerHTML='Old';
}

document.querySelector(".submitBtn").addEventListener("click",checkInput)
function checkInput()
{
    let input=document.querySelector(".inputNum").value;
    if(input==a)
    {
        document.querySelector(".answerBtn").style.backgroundColor="green";
        document.querySelector(".answerBtn").innerHTML=a;
        document.querySelector('.clueInfo').innerHTML='you won';
        document.querySelector('.inputNum').disabled=true;
        document.querySelector('.clueInfo').style.backgroundColor="green";
        document.querySelector("#ballonDiv").style.display='block';
        console.log("correct");
    }
    else
    {
        console.log("Wrong");
        let wrong=document.querySelector('.count').innerHTML;
        wrong--;
        if(wrong==0)
        {
            document.querySelector(".clueInfo").innerHTML='Game Over';
            document.querySelector('.inputNum').disabled=true;

        }
        else{
            document.querySelector('.count').innerHTML=wrong;
            document.querySelector(".answerBtn").style.backgroundColor="red";
        
        }
    }
}
