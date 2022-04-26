<script>
    import {tasks} from '../store.js'
    export let showForm = false
    export let showList = true
    export let filter = 'all'

    function changeFiler(filterName) {
        filter = filterName
    }

    function clearTask() {
        let tempTasks = $tasks.filter(t => !t.completed)
        tasks.set(tempTasks)
    }
</script>

<div>
    <button 
        class="btn btn-success btn-sm" 
        on:click="{() => showForm = !showForm}"
        data-cy="create-btn"
    >
        Create
    </button>
    <button 
        class="btn btn-warning btn-sm"
        on:click="{() => showList = !showList}"
        data-cy="hide-btn"
    >
        {showList ? "Hide" : "Show"}
    </button>
    <button 
        class="btn btn-secondary btn-sm"
        on:click="{() => changeFiler('all')}"
        data-cy="all-btn"
    >ALL</button>
    <button 
        class="btn btn-secondary btn-sm"
        on:click="{() => changeFiler('active')}"
        data-cy="active-btn"
    >Active</button>
    <button 
        class="btn btn-secondary btn-sm"
        on:click="{() => changeFiler('completed')}"
        data-cy="completed-btn"
    >Completed</button>
    <button class="btn btn-danger btn-sm" on:click={clearTask}
    data-cy="clear-btn"
    >Clear</button>
</div>