<script>
    import {slide} from 'svelte/transition'
    import {tasks} from '../store.js'
    import Color from './Color.svelte'

    let title = ''
    let description = ''
    let color = ''

    function submitHandler(e) {
        if (!title) {
            alert('Please Provide a Title')
            return
        }

        let id = (Math.random() * new Date().getTime()).toString()

        let task = {
            id, 
            title,
            description,
            color, 
            completed: false,
            editable: false
        }

        let newTasks = [task, ...$tasks]
        tasks.set(newTasks)
        
        e.target.reset()
        color = ''
    }

</script>


<div class="card card-body my-4" transition:slide>
    <form on:submit|preventDefault={submitHandler}>
        <div class="form-group">
            <label for="title" data-cy="task-title-form">Enter A Task Title</label>
            <input type="text" placeholder="Task Title" id="title" class="form-control" bind:value={title} data-cy="task-title-input">
        </div>
        <div class="form-group">
            <label for="desc" data-cy="task-desc-title-form">Enter A Short Description</label>
            <textarea id="desc" class="form-control" bind:value={description} data-cy="task-desc-textarea"></textarea>
        </div>
        <Color bind:selectedColor={color} />
        <input type="submit" class="btn btn-primary my-4" value="Create Task" data-cy="create-task-btn">
    </form>
</div>

<!-- store -->