let heading= document.querySelector('.heading');
//  console.log(heading);

 let btn = document.querySelector('.btn');
//  console.log(btn);

 let box= document.querySelector('.container');
//  console.log(box)

btn.addEventListener("click",()=>{
    console.log("clickin button");
    let colorValue= genrateRandomColor();
    heading.innerText=colorValue;
    box.style.backgroundColor=colorValue;
})



let genrateRandomColor = ()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}