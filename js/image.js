/* const img = document.querySelector('img');
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

btn1.addEventListener('mouseenter', function(){
    img.src = 'images/bags/bag-1.png'
})

btn2.addEventListener('mouseenter', function(){
    img.src = 'images/bags/bag-2.png'
})

btn3.addEventListener('mouseenter', function(){
    img.src = 'images/bags/bag-3.png'
}) */

// function changeImage(){
//     let displayImage = document.getElementById('image-change');
   
//     if (displayImage.src.match('images/bags/bag-1.png')){
//         displayImage.src = 'images/bags/bag-2.png';
//     }
//     else{
//         displayImage.src = 'images/bags/bag-1.png';
//     }
    
// }

document.getElementById('image-change').addEventListener('mouseenter', function(changeImage){
    let displayImage = document.getElementById('image-change');
   
    if (displayImage.src.match('images/bags/bag-1.png')){
        displayImage.src = 'images/bags/bag-2.png';
        
    }
    else{
        displayImage.src = 'images/bags/bag-1.png';
    }
    
})