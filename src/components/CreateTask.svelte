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
            <label for="title">Enter A Task Title</label>
            <input type="text" placeholder="Task Title" id="title" class="form-control" bind:value={title}>
        </div>
        <div class="form-group">
            <label for="desc">Enter A Short Description</label>
            <textarea id="desc" class="form-control" bind:value={description}></textarea>
        </div>
        <Color bind:selectedColor={color} />
        <input type="submit" class="btn btn-primary my-4" value="Create Task">
    </form>
</div>

<!-- store -->