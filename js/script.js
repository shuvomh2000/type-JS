let design = document.querySelectorAll(".design")
let arr = Array.from(design)

arr.map(function (item) {
    let count = -1

    function typejs() {
        count++
        item.innerHTML += item.dataset.text.charAt(count)
        if (count == item.dataset.text.length) {
            item.innerHTML = ""
            count = -1
        }
    }

    setInterval(function(){
        typejs()
    },500)
})








// let design = document.querySelector(".design")
// let count = -1

// function type() {
    
//     count++
//     design.innerHTML += design.dataset.text.charAt(count)
//     if(count ==  design.dataset.text.length){
//         count = -1
//         design.innerHTML = ""
//     }
// }

// setInterval (function(){
//     type()
// },500)




// design.innerHTML = design.innerHTML+design.dataset.text.charAt(count)