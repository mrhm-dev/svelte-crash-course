<script>
    // import {createEventDispatcher} from 'svelte'
    // const dispatch = createEventDispatcher()

    export let greet = 'Hello'
    export let name = 'HM Nayem'

    // function nameChangeHadnler(e) {
    //     if (e.key === 'Enter') {
    //         dispatch('nameChanged', name)
    //     }
    // }

</script>

<h1>{greet}, {name} </h1>
<!-- <input type="text" bind:value={name} on:keypress={nameChangeHadnler}> -->
<input type="text" bind:value={name}>
