<script>
    import {slide} from 'svelte/transition'
    import {tasks} from '../store.js'

    export let taskList = []
    export let label = 'ALL'

    $: totalComplete = $tasks.filter(t => t.completed).length

    function toggleCheck(e, id) {
        let tempTasks = [...$tasks]
        let index = tempTasks.findIndex(t => t.id === id)
        tempTasks[index].completed = e.target.checked
        tasks.set(tempTasks)
    }

    function dblHandler(id) {
        let tempTasks = [...$tasks]
        let index = tempTasks.findIndex(t => t.id === id)
        tempTasks[index].editable = true
        tasks.set(tempTasks)
    }

    function updateTask(e, id) {
        if (e.key === 'Enter' && e.target.value) {
            let tempTasks = [...$tasks]
            let index = tempTasks.findIndex(t => t.id === id)
            tempTasks[index].title = e.target.value
            tempTasks[index].editable = false
            tasks.set(tempTasks)
        }
    }
</script>

<style>
    .complete {
        text-decoration: line-through;
    }
    .color {
        height: 5px;
    }
</style>

<div class="my-3" transition:slide>
    <h4 data-cy="tasks-title">{label} Tasks</h4>
    {#if taskList.length === 0}
        <p>There is No Task</p>
    {:else}
        <p daya-cy="total-tasks-title">Total Task: {$tasks.length} Active: {$tasks.length - totalComplete} Completed: {totalComplete}</p>
        <ul class="list-group" data-cy="tasks-list">
            {#each taskList as task}
                <li class="list-group-item" transition:slide on:dblclick="{e => dblHandler(task.id)}">
                    <div class="pl-3">
                        <input type="checkbox" class="form-check-input" checked={task.completed} on:change="{e => toggleCheck(e, task.id)}"
                            data-cy="mark-done-checkbox"
                        >
                        <label data-cy="task-item-label">
                            {task.completed ? 'Done!!!' : 'Not Yet Done!'}
                        </label>
                    </div>
                    <input type="text" 
                        bind:value={task.title}
                        disabled={!task.editable}
                        class="{task.completed ? 'form-control complete' : 'form-control'}"
                        on:keypress="{e => updateTask(e, task.id)}"
                        data-cy="saved-task-title"
                    >
                    <div class="color mx-3" title={task.description} style="background: {task.color}"></div>
                </li>
            {/each}
        </ul>
    {/if}
</div>