// function ontap(){
//     var button = document.querySelector('#next-button');
//     button.addEventListener('click', alert('cliquei'))
// }

let toggle = document.querySelector('.ball');
function animatedToggle(){
    toggle.classList.toggle('active')
}

if (content1.style.display == 'block'){
    step1.classList.toggle('activate')
}
if (content2.style.display == 'block'){
    step1.classList.toggle('activate')
}

document.querySelector('#step2').classList.add('activated')

function navigation(tab1 , tab2){
    document.querySelector(tab1).style.display = 'none';
    document.querySelector(tab2).style.display = 'block';
}

