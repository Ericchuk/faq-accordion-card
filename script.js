 let description = document.querySelectorAll(".description");
 let descriptionContent = document.querySelectorAll(".description-content")
 let arrow = document.querySelectorAll(".arrow");

 function openDescription0(){
     if(descriptionContent[0].style.display ==="block"){
         descriptionContent[0].style.display="none";
         description[0].style.color="hsl(240, 6%, 50%)";
         description[0].style.fontWeight="400";
         arrow[0].style.transform="rotate(0deg)";
     }else{
         descriptionContent[0].style.display="block",description[0].style.color="hsl(0, 0%, 0%)",
         description[0].style.fontWeight="700",
         arrow[0].style.transform="rotate(180deg)"
     }
 }

 function openDescription1(){
    if(descriptionContent[1].style.display ==="none"){
        descriptionContent[1].style.display="block";
        description[1].style.color="hsl(240, 6%, 50%)";
         description[1].style.fontWeight="400";
         arrow[1].style.transform="rotate(180deg)";
    }else{
        descriptionContent[1].style.display="none",
        description[1].style.color="hsl(0, 0%, 0%)",
         description[1].style.fontWeight="700",
         arrow[1].style.transform="rotate(0deg)"
    }
}

function openDescription2(){
    if(descriptionContent[2].style.display ==="block"){
        descriptionContent[2].style.display="none";
        description[2].style.color="hsl(240, 6%, 50%)";
         description[2].style.fontWeight="400";
         arrow[2].style.transform="rotate(0deg)";
    }else{
        descriptionContent[2].style.display="block",
        description[2].style.color="hsl(0, 0%, 0%)",
         description[2].style.fontWeight="700",
         arrow[2].style.transform="rotate(180deg)"
    }
}

function openDescription3(){
    if(descriptionContent[3].style.display ==="block"){
        descriptionContent[3].style.display="none";
        description[3].style.color="hsl(240, 6%, 50%)";
         description[3].style.fontWeight="400";
         arrow[3].style.transform="rotate(0deg)";
    }else{
        descriptionContent[3].style.display="block",
        description[3].style.color="hsl(0, 0%, 0%)",
         description[3].style.fontWeight="700",
         arrow[3].style.transform="rotate(180deg)"
    }
}

function openDescription4(){
    if(descriptionContent[4].style.display ==="block"){
        descriptionContent[4].style.display="none";
        description[4].style.color="hsl(240, 6%, 50%)";
         description[4].style.fontWeight="400";
         arrow[4].style.transform="rotate(0deg)";
    }else{
        descriptionContent[4].style.display="block",
        description[4].style.color="hsl(0, 0%, 0%)",
         description[4].style.fontWeight="700",
         arrow[4].style.transform="rotate(180deg)"
    }
}

 description[0].addEventListener("click", openDescription0);
 description[1].addEventListener("click", openDescription1);
 description[2].addEventListener("click", openDescription2);
 description[3].addEventListener("click", openDescription3);
 description[4].addEventListener("click", openDescription4);
