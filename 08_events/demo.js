const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
    const imageDiv = event.target.parentNode;

    // clear all content inside the main tag
    const main = document.querySelector('main')

    console.log(main.children)

    // copy main 
    const mainCopy = document.createElement('main')
    const mainChildrens = Array.from(main.children)
    mainChildrens.forEach((c) => {
        mainCopy.appendChild(c)
    })

    main.innerHTML = ''
    
    const newDiv = document.createElement('div')

    // heading
    const imageHeader = document.createElement('p');
    imageHeader.innerText = imageDiv.childNodes[3].innerText
    imageHeader.style.padding = '10px';
    imageHeader.style.color = 'white';
    imageHeader.style.backgroundColor = 'blue';
    imageHeader.style.fontSize = '18px';
    imageHeader.style.fontWeight = 'bold';
    imageHeader.style.borderRadius = '5px';
    imageHeader.style.textAlign = 'center';
    imageHeader.style.margin = '10px 0';

    newDiv.appendChild(imageHeader)

    // image
    const imageSrc = document.createElement('img')
    imageSrc.src = imageDiv.childNodes[1].src
    // Apply styles
    imageSrc.style.width = '50%'; 
    imageSrc.style.height = '50%'; 
    imageSrc.style.border = '2px solid black';
    imageSrc.style.borderRadius = '10px';
    imageSrc.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    imageSrc.style.margin = '10px';
    imageSrc.style.objectFit = 'cover';

    newDiv.appendChild(imageSrc)

    main.appendChild(newDiv)

    // add the back button
    const backButton = document.createElement('button')
    backButton.textContent = 'Go Back';
    backButton.style.padding = '10px 20px';
    backButton.style.fontSize = '16px';
    backButton.style.fontWeight = 'bold';
    backButton.style.color = 'white';
    backButton.style.backgroundColor = 'blue';
    backButton.style.border = 'none';
    backButton.style.borderRadius = '5px';
    backButton.style.cursor = 'pointer';
    backButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    backButton.style.margin = '20px auto';
    backButton.style.display = 'block';
    backButton.style.textAlign = 'center';

    main.appendChild(backButton)

    backButton.addEventListener('click', (event) => {
        main.innerHTML = ''
        document.body.replaceChild(mainCopy, main)
    })
    

})