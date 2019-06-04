<script>
	import Greet from './Greet_ref.svelte'

	let name = 'Twinkle Cats'
	let greet = 'Welcome'

	// function nameChangedHandler(e) {
	// 	name = e.detail
	// }
</script>

<style>
	div {
		width: 900px;
		min-height: 700px;
		margin: 0 auto;
		background: #ddd;
		font-family: Arial, Helvetica, sans-serif;
		box-sizing: border-box;
		padding: 10px;
	}
	h1 {
		font-size: 46px;
		text-align: center;
	}

	p {
		font-size: 18px;
		line-height: 1.2;
	}
</style>

<div>
	<h1>Hello Svelte, You are Beauty</h1>
	<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, veniam minus cumque nam vel commodi provident quaerat fugit officiis, ut ipsum soluta voluptas animi expedita. Asperiores ipsam nesciunt quaerat hic?</p>

	<!-- <Greet greet='Welcome' name='Twinkle Cats' on:nameChanged={nameChangedHandler}/> -->
	<Greet greet='Welcome' name='Twinkle Cats' bind:name={name}/>
	<h1>Name: {name}</h1>
</div>