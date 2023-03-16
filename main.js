document.querySelector('#push').onclick = 
function(){
    let isDone = false;
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }else{
        document.querySelector('#tasks').innerHTML += 
        `<div class='task'>
        <span id='taskname'>${document.querySelector('#newtask input').value}</span>
        <div class='buttons'>
        <div class='done'><span class='material-symbols-outlined md-60'>check_circle</span></div>
        <div class='delete'><span class='material-symbols-outlined'>delete</span></div>
        </div></div>`
        document.querySelector('#newtask input').value = ""
        
        var currentTasks = document.querySelectorAll('.delete')
        var doneTasks = document.querySelectorAll('.done')
        var mark = document.querySelectorAll('.done span')

        for(var i=0; i<currentTasks.length; i++){
            
            currentTasks[i].addEventListener("click",function(){
                this.parentElement.parentElement.remove()
            }) 
            
            doneTasks[i].addEventListener("click", function(){
                this.parentElement.parentElement.id = 'done'
            })
            
            console.log(mark[i])
            
            
        }
    }
}