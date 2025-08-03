 const generateTask = (event) => {
        event.preventDefault();
        const activity = document.getElementById('input')
        const taskList = document.getElementById('taskList')

        if (activity.value.trim() !== "") {

            const taskDiv = document.createElement('div');
            taskDiv.className = 'bg-light p-2 mb-2 shadow-sm rounded'
            taskDiv.innerHTML = `<div class="d-flex justify-content-between align-items-center">
                    <p class="mb-0">${activity.value}</p>
                    <button onclick="removeElement(this)" class="btn btn-danger rounded text-lighr ">Remove </button>
                    </div>`

            // const removeBtn=taskDiv.querySelector('button')
            // removeBtn.addEventListener('click',()=>{
            //     taskDiv.remove();
            // })

            

            taskList.appendChild(taskDiv);
            activity.value = "";
        }

    }
    
    function removeElement(button) {
  button.parentElement.parentElement.remove();
}