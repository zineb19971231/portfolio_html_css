function hamburg(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform='translateY(0px)';

}

function cancel(){
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform='translateY(-500px)';

}


const texts=
    ['PROFESSIONAL WEB DEVELOPPER',
    'FULL STACK DEVELOPPER',
    ]

    let speed = 100;
    const textElement = document.querySelector('.typewriter-txt');
    let txtindex=0
    let characterindex=0;

     function typeWriter(){
        if (characterindex < texts[txtindex].length){
            textElement.innerHTML+= texts[txtindex].charAt(characterindex);
            characterindex++;
            setTimeout(typeWriter,speed);}
        else{
            setTimeout(eraseText,1000)}}


    function eraseText(){
        if (textElement.innerHTML.length > 0){
            textElement.innerHTML =  textElement.innerHTML.slice(0,-1);
            setTimeout(eraseText,100);}
        else{
            txtindex=(txtindex+1) % texts.length;
            characterindex=0;
            setTimeout(typeWriter,500);
            }
            }
 window.onload = typeWriter;
