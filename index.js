let apps = [
    'app',
    'blog',
    'shop',
    'note',
    'game',
    'grave'
]

let appName = document.getElementById('app-name')
appName.innerText = apps[0]


// toggle theme for grave
const toggleDark = () => {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#FFFFFF'
    appName.style.color = 'red'    
}

const toggleLight = () => {
    document.body.style.color = '#000000'
    document.body.style.backgroundColor = '#FFFFFF'
    appName.style.color = 'red'    
}



// assign button functionality
const rotateRight = () => {
    // if rotating right
    // move first element to the last element
    // this allows us to only care about apps[0]
    apps.push(apps.shift()) 
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : null
    return apps
}

const rotateLeft = () => {
    apps.unshift(apps.pop())
    appName.innerText = apps[0]
    apps[0] === 'grave' ? toggleDark() : null
    return apps
}

document.getElementById('right-button').onclick  = rotateRight
document.getElementById('left-button').onclick = rotateLeft

