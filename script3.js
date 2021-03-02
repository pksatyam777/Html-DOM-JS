var div1ref = document.getElementById('root')
div1ref.addEventListener("mouseover", function() {
  div1ref.style.color = "red"
})

div1ref.addEventListener("mouseout", function() {
  div1ref.style.color = "black"
})
var div2ref = document.getElementsByClassName('blue-white')
for (let i = 0; i < div2ref.length; i++) {
  div2ref[i].addEventListener("mouseover", function() {
    div2ref[i].style.backgroundColor = "blue"
    div2ref[i].style.color = "white"
  })

  div2ref[i].addEventListener("mouseout", function() {
    div2ref[i].style.backgroundColor = "white"
    div2ref[i].style.color = "black"
  })

}
var p1 = document.getElementsByTagName('p')
p1[0].addEventListener("mouseover", function() {
  p1[0].style.fontSize = "50px"
})

var p1 = document.getElementsByTagName('p')
p1[0].addEventListener("mouseout", function() {
  p1[0].style.fontSize = "16px"
})
