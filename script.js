// Function to remove comments
function removeComments() {
let code = document.getElementById('sqlCode').value
console.log(code)
let myText = document.getElementById('myText')
console.log(myText)
myText.innerText = code.replace(/(\/\*[^*]*\*\/)|(\/\/[^*]*)|(--[^.].*)/gm, '')

}

//Function to copy 
let text = document.getElementById('myText').innerHTML
const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(text)
        alert('Content copied to clipboard')
    } catch (err) {
        alert('Failed to copy: ')
    }
}
