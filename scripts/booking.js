/********* create variables *********/
// useful variables might be: the cost per day, the number of daysList selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var Days=[]
var daysList = document.getElementById("daysList").getElementsByTagName("li");
var halfClicked=false
var fullClicked=false
const fullPrice=35
const halfPrice=20
var price=0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayClick=(event)=>{
   if(!Days.includes(event.target.id))
   {
    event.target.style.backgroundColor="#E5AF42";
    event.target.style.color="black";
    event.target.style.textDecoration="none";
    Days.push(event.target.id)
    calculateCost();
    console.log(Days)
   }
    else
    {
        event.target.style.backgroundColor="#fff";
        event.target.style.color="black";
        event.target.style.textDecoration="none";
        Days.splice(Days.indexOf(event.target.id),1)
        calculateCost();
    }
}


for(var index=0;index<daysList.length;index++)
{
  daysList[index].addEventListener('click',dayClick)
}


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

const clearAll=()=>{
    for(var day=0;day<daysList.length;day++)
    daysList[day].style.backgroundColor="#fff";
    Days=[]
    document.getElementById("calculated-cost").innerHTML=0;
    resetStyle("half")
    halfClicked=false
    resetStyle("full")
    fullClicked=false
}

document.getElementById("clear-button").addEventListener('click',clearAll)

const resetStyle=(id)=>{
    document.getElementById(id).style.backgroundColor="#fff";
    document.getElementById(id).style.color="black";
    document.getElementById(id).style.textDecoration="none";
};
const changeStyle=(id)=>{
    document.getElementById(id).style.backgroundColor="#E5AF42";
    document.getElementById(id).style.color="black";
    document.getElementById(id).style.textDecoration="none";
};


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.


document.getElementById("half").addEventListener('click',()=>{
    if(halfClicked==false)
    {
        halfClicked=true;
        if(fullClicked==true)
        {
        resetStyle("full");
        fullClicked=false;
        }
        changeStyle("half");
        price=halfPrice;
       calculateCost();
    }
    else
    {
        resetStyle("half");
        halfClicked=false ;
        document.getElementById("calculated-cost").innerHTML=0;
    }
});




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

document.getElementById("full").addEventListener('click',()=>{
    if(fullClicked==false)
    {
        fullClicked=true;
        if(halfClicked==true)
        {
        resetStyle("half") ;
        halfClicked=false;
        }
        changeStyle("full");
        price=fullPrice;
        calculateCost();
    } else
    {
        resetStyle("full");
        fullClicked=false;
        document.getElementById("calculated-cost").innerHTML=0;

    }
    
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculateCost=()=>{
    if(fullClicked==true || halfClicked==true)
    {
    var totalBill=Days.length*price;
    document.getElementById("calculated-cost").innerHTML=totalBill;
    }
};
