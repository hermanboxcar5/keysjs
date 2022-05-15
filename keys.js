let key = {}
let keys = {}
class elem {
  constructor(query) {
    this.query = query
    this.obj = document.querySelector(this.query)
  }
  
  key(c, f) {
    this.obj.addEventListener("keydown", function(e){
      if(e.code==c){f(e)}
    })
  }
  
  letter(c, f){
    let a = "Key"+c.toUpperCase()
    this.obj.addEventListener("keydown", function(e){
      if(e.code==a){f(e)}
    })
  }
  digit(c, f){
    let a = "Digit"+c
    this.obj.addEventListener("keydown", function(e){
      if(e.code==a){f(e)}
    })
  }
  down(f) {
  document.addEventListener("keydown", f)
}
press(f){
  document.addEventListener("keypress", f)
}
up(f){
  document.addEventListener("keyup", f)
}
  
}
window.keysjs = {}
keysjs.agent = elem
