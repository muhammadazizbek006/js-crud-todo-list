const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')



let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')): [] 
console.log(todos);


formCreate.addEventListener('submit', (e)=>{
        e.preventDefault()
        const todoText = formCreate['input-create'].value

console.log(todoText);
    if(todoText.length){
        console.log(todoText);
        
    }else{
        messageCreate.textContent = 'plase enter sume text...'
    }
})