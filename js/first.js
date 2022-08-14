
const headerSections = document.getElementsByTagName("h2");

for (const headerSection of headerSections){
    headerSection.style.color = "lightblue";
}

const backpactSections = document.getElementById('bag');

backpactSections.style.backgroundColor = "tomato";

const cardParts = document.getElementsByClassName('card-section')

for (const cardPart of cardParts){

    cardPart.style.borderRadius = "30px";
}

function somethingSpecial(){
    console.log("Lets See");
}


const removeButtons = document.getElementsByTagName('button')

for (const removeButton of removeButtons ){
    removeButton.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    })
}


document.getElementById('email-section').addEventListener('keyup', function(event){
    const email = event.target.value;

    const deleteSection = document.getElementById('delete-section');
    if (email === 'email'){
        deleteSection.removeAttribute('disabled')
    }
    else{
        deleteSection.setAttribute('disabled', true);
    }
})

document.getElementById('image-change').addEventListener('mouseenter', function(changeImage){
    let displayImage = document.getElementById('image-change');
   
    if (displayImage.src.match('images/bags/bag-1.png')){
        displayImage.src = 'images/bags/bag-2.png';
        
    }
    else{
        displayImage.src = 'images/bags/bag-1.png';
    }
    
})

