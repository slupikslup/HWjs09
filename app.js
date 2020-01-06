// 1 Done
var href = document.getElementById('a')
href.onmousemove = () => document.title += href.href
// 2 Done
var hrefs = document.getElementsByClassName('href')
Array.from(hrefs).forEach((i) =>  i.onclick =  () => i.innerText += `(${this.href})`)
// 3    
var hrefs = document.getElementsByClassName('href')
var onclickCounter = 0
for(var i of hrefs){
 i.onclick =  () => {
     i.innerText += i.href
     onclickCounter += 1 
    } 
}
if(onclickCounter == 3 ){
    for(var i of hrefs){
        i.onclick = null
       }
}
// 4 Done
// Код Emmet p*20{$} Done 50%
var p = document.getElementsByTagName('p')
Array.from(p).forEach((x) => x.onclick = () => x.innerText =  Math.pow(x.innerText, 2))
// 5 Done
var hreff = document.getElementById("hrefBlet")
hreff.onclick =  () => hreff.innerText += hreff.href
// 6 Done
var button = document.getElementById('button')
button.onclick = () => alert("hey")
// 7 Done
var button2 = document.getElementById('button2')
button2.onclick = () => button2.innerText = "Кирпич"
// 8 done
var el = document.getElementById('getText')
if(!isNaN(el.value)){
    el.style.color = 'green'
}else {
    el.style.color = 'red'
}   
// 9 Done
var element = document.getElementById('myunique')
element.onclick = () =>  element.classList.add('www')
// 10 Done
var element = document.getElementById('myunique')
element.onclick = () => element.classList.remove('www')
// 11
var id = document.getElementById('myunique3')
function found () {
    for(var x in id.classList){
            if(id.classList[x] === 'www'){
                id.classList.remove('www')
            }else {
                id.classList.add('www')
            }
        }
}
id.onclick =  found
// 12 Done
var element = document.getElementById('myunique')
element.onclick = () => element.innerText += element.classList.length
// 13 Done
var div = document.getElementById("div")
var arr = div.childNodes
arr.forEach(element => {
   element.onclick = () =>  element.innerText += element.classList[0]
});
// 14 Done
var ol = document.getElementById('ol')
var arr = ol.children
arr[arr.length - 1].id = 'last'
ol.removeChild(document.getElementById('last'))
// 15 Done
var ol = document.getElementById('ol2')
var arr = ol.childNodes
arr.forEach(el => el.onclick = () => { 
    el.id = 'delete'
    ol.removeChild(document.getElementById('delete'))
}
)
// 16
var input = document.getElementById('copy')
input.style.display = 'inline-block'
var input2 = input
input.onclick = () => document.getElementById('div2').appendChild(input2)
// 17 Done
var button3 = document.getElementById("button3")
button3.onclick = () => scrollTo(0,2000)
// 18 
var el = document.getElementById('myunique2')
el.onclick = () => {
    el.height = el.height * 2
    el.width = el.width * 2  
    el.fontSize = el.fontSize * 2
}