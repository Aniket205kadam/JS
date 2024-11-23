// const bottons = document.querySelectorAll('.button')
// const body = document.querySelector('body')

// bottons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target);
//         switch (event.target.id) {
//             case 'grey':
//                 document.body.style.backgroundColor = event.target.id
//                 break;

//             case 'white':
//                 document.body.style.backgroundColor = event.target.id
//                 break;
            
//             case 'blue':
//                 document.body.style.backgroundColor = event.target.id
//                 break;

//             case 'yellow':
//                 document.body.style.backgroundColor = event.target.id
//                 break;
            
//             case 'purple':
//                 document.body.style.backgroundColor = event.target.id
//                 break;
        
//             default:
//                 document.body.style.backgroundColor = 'black'
//                 break;
//         }
//     })
// })

const bottons = document.querySelectorAll('.button')
const body = document.querySelector('body')

bottons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const buttonColor = event.target.id
        body.style.backgroundColor = buttonColor
    })
})