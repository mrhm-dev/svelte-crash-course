<script context='module'>
    import CreateTask from './components/CreateTask.svelte'
    import Tasks from './components/Tasks.svelte'
    import TopButtons from './components/TopButtons.svelte'
    import {tasks} from './store.js'
</script>

<script>
    let toggleCreateTaskForm = false
    let toggleTaskList = true
    let filter = 'all'

    $: activeTasks = $tasks.filter(t => !t.completed)
    $: completedTasks = $tasks.filter(t => t.completed)


</script>

<svelte:head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Svelte Crash Course By Twinkle Cats</title>
</svelte:head>

<div class="container">
    <div class="row">
        <div class="col-md-6 offset-md-3 my-4">
            <h1 class="diaplay-4">Hello Catians</h1>
            <TopButtons 
                bind:showForm={toggleCreateTaskForm} 
                bind:showList={toggleTaskList}
                bind:filter={filter}/>
            {#if toggleCreateTaskForm}
                <CreateTask />
            {/if} 

            {#if toggleTaskList}
                {#if filter === 'all'} 
                    <Tasks taskList={$tasks} label="ALL"/>
                {:else if filter === 'active'}
                    <Tasks taskList={activeTasks} label="Active" />
                {:else if filter === 'completed'}
                    <Tasks taskList={completedTasks}  label="Completed"/>
                {/if}
            {/if}
            
        </div>
    </div>
</div>