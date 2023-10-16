
var elTitle = document.querySelector('.title')
var elInp__1 = document.querySelector('.inp__1')
var elInp = document.querySelector('.inp')


var arr = ['olma', 'anor', 'banan', 'saftoli',]
function addMn() {

    var a = 'boshi'
    var b = 'ohiri'
    if (elInp__1.value == a) {
        arr.unshift(elInp.value);
        console.log(arr);



    } else if (elInp__1.value == b) {
        arr.push(elInp.value);
        console.log(arr);

    }
    console.log(arr);
    elTitle.classList.add('text')
    elTitle.textContent = arr
}

var elInp__1 = document.querySelector('.inp__1')
var elInp = document.querySelector('.inp')


var arr = ['olma', 'anor', 'banan', 'saftoli']
function salom() {

    var a = 'boshi'
    var b = 'ohiri'
    if (elInp__1.value == a) {
        arr.shift(elInp.value);
        console.log(arr);



    } else if (elInp__1.value == b) {
        arr.pop(elInp.value);
    }
    console.log(arr);
    elTitle.classList.add('text')
    elTitle.textContent = arr

}









































