const button = document.getElementById('b')
async function ok(){
let [fileHandle] = await window.showOpenFilePicker();
let fileData = await fileHandle.getFile();
let text = await fileData.text();
// document.write(text)
textarea.innerText = text;

button.addEventListener('click',function(){
    save(fileHandle)
    console.log(fileHandle)
})
window.addEventListener('keydown',function(e){
    if (e.keyCode == 13){
        save(fileHandle)
    }
})

}

async function save(fileHandle){
    let stream = await fileHandle.createWritable()
    await stream.write(textarea.innerText)
    await stream.close()

}