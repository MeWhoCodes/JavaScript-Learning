# Project on DOM

## Project links
[Click for link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


### Project 1
Script for colour selector:
```javascript
const butt = document.querySelectorAll(".button")
console.log(butt) // nodelist type

const body = document.querySelector("body")

for(clr of butt){
  console.log(clr.id)
  clr.addEventListener('click',function(e){
    console.log(e.target) //e.target has id

    if(e.target.id == 'grey'){

      console.log("Grey was clicked")
      body.style.backgroundColor = '#808080'

    }else if(e.target.id == 'blue'){

      console.log("Blue was clicked")
      body.style.backgroundColor = '#0000ff'

    }else if(e.target.id == 'yellow'){

      console.log('Yellow was clicked')
      body.style.backgroundColor = '#ffff00'

    }else if(e.target.id == 'white'){

      console.log("white was clicked")
      body.style.backgroundColor = '#ffffff'
    }
  })
}

```

## Project 2
Scritp for BMI finder
* BMI(kg/m^2) = Weight/Height^2
```javascript
const form = document.querySelector("form")
form.addEventListener("submit",function(e){
  e.preventDefault() // prevents any shinanigans of form buttons
  const h = Number(document.querySelector("#height").value)
  const w = Number(document.querySelector("#weight").value)
  let bmi = w/h**2
  if(h !== 0 || w != 0){
    document.querySelector("#results").innerHTML = bmi
    document.querySelector("#results").style.color = "#0f0"
    if(bmi>24.9){
      document.querySelector("#results").style.color = "#f00"
    }
    if(bmi<18.6){
      document.querySelector("#results").style.color = "#f00"
    }
    
  }else{
    document.querySelector("#results").innerHTML = "Please enter a valid Height or Weight"
  }
  
})
```