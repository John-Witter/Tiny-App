let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let appName = document.getElementById('app-name')
let carrots = document.querySelectorAll('.carrot')
appName.innerText = apps[0]


// toggle theme for grave
const toggleDark = () => {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#FFFFFF'
    appName.style.color = 'red'    
    carrots.forEach(carrot => carrot.style.color = 'white')
}

const toggleLight = () => {
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#000000'
    appName.style.color = 'rgb(0, 209, 231)'
    carrots.forEach(carrot => carrot.style.color = 'black')
}



// assign button functionality
const rotateRight = () => {
    // if rotating right
    // move first element to the last element
    // this allows us to only care about apps[0]
    apps.push(apps.shift()) 
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : toggleLight()
    return apps
}

const rotateLeft = () => {
    apps.unshift(apps.pop())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : toggleLight()
    return apps
}

document.getElementById('right-button').onclick  = rotateRight
document.getElementById('left-button').onclick = rotateLeft

