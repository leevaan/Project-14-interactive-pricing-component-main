"use strict"
const range = document.querySelector(".my-range");
const pageViews = document.querySelector(".page-views");
const month = document.querySelector(".month");
const checkBox = document.querySelector(".check-box");

pageViews.innerHTML = "100K";
month.innerHTML = "$16";
let check = false;

checkBox.addEventListener("change", () => {
    check = checkBox.checked;
    // This method allowed us to get both the discount and the initial cost live.
    if(check){
        //When we want to calculate the discount.
        month.innerHTML = "$" + (month.textContent.slice(1) - (month.textContent.slice(1) * percent / 100))
    }else if(!check){
        //When we want to return the discounted price to the initial cost.
        month.innerHTML = "$" + (month.textContent.slice(1) * 100 / (100 - percent))
    }
})

let slideRangeStep = [0, 20, 40, 60, 80];
let monthCost = [8, 12, 16, 24, 36];
let views = ["10K", "50K", "100K", "500K", "1M"]
let percent = 25;

range.addEventListener("input", () => {
    range.style.background = `linear-gradient(to right, rgba(164, 243, 235, 1) ${range.value * 100 / 80}%, #ECF0FB ${range.value * 100 / 80}%)`;
    range.step = "20";
    
    for(var i = 0; i < slideRangeStep.length; i++){
        if(range.value == slideRangeStep[i]){
            pageViews.innerHTML = views[i];
            if(check == false){
                // without discount
                month.innerHTML = "$" + monthCost[i];
            }else{ 
                //discount
                month.innerHTML = "$" + (monthCost[i] - (monthCost[i] * percent / 100));
            }
            break;
        }
    }
})