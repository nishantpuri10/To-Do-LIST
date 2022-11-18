const inp = document.getElementById('type');
const btn = document.getElementById('addbtn');
const ul = document.getElementById('elelist');


let arr = []
var i =0;



btn.addEventListener('click' , function(){
    
    arr.push(inp.value)
    console.log(arr + " " + i)
////////////////CREATING BUTTON DIV////////////////////////////
    var l = document.createElement('li')
    const btndiv = document.createElement('div');
    const del = document.createElement('button');
    const up = document.createElement('button');
    const down = document.createElement('button');

    btndiv.classList.add("btndiv")
    del.classList.add("delete")
    up.classList.add("up")
    down.classList.add("down")

    del.innerHTML = "X";
    up.innerHTML = "⬆";
    down.innerHTML = "⬇";

    btndiv.appendChild(del);
    btndiv.appendChild(up);
    btndiv.appendChild(down);
///////////////////////////////////////////////////////////

$(function() {
    $(up).on('click', function(e) {
      var wrapper = $(this).closest('li')
      wrapper.insertBefore(wrapper.prev())
      console.log(10)
    })
    $(down).on('click', function(e) {
      var wrapper = $(this).closest('li')
      wrapper.insertAfter(wrapper.next())
    })
  })
    
    l.innerText = arr[i]
    i++;
    del.addEventListener('click' , function(){
        l.remove();
    })
    ul.appendChild(l)
    
    
    
    
    l.appendChild(btndiv)

    
    
    inp.value = ' '
    
    

    
    
})







 //////////TO CLICK THE 'ADD TASK' BUTTON BY PRESSING 'ENTER' KEY/////////////////////////

inp.addEventListener('keypress' , function(){
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        btn.click()
      }
})
