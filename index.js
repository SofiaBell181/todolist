const tl = new TimelineMax();

tl.from('#main', 1, {
    x: '100%',
    opacity:0,
    delay:.5
})

tl.from('.container', 2, {
    y: -100,
    opacity:0
})

tl.to('h1', 2.5, {
        text: 'DAILY TO DO LIST',
        repeatDelay:.7,
        ease: 'power1.in',
        opacity:1
})

gsap.from('img', 3, {
    delay: 2.5,
    x:-100,
    opacity: 0,
})


const inputField = document.querySelector('.inputField');
const btn = document.querySelector('.btn');
const containerList = document.querySelector('.containerList');

inputField.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        createList();
        }
})

btn.addEventListener('click', createList);

function createList() {
    const item = document.createElement('li');

    item.innerText = inputField.value;
    if (inputField.value.length === 0) {
    return false;
    }

    containerList.appendChild(item);
    item.classList.add('itemStyle');
    
    inputField.value ='';
    item.addEventListener('click', () => {
    item.classList.add('itemStyleCompled');
    })
    item.addEventListener('dblclick', () => {
    containerList.removeChild(item);
    })

}

