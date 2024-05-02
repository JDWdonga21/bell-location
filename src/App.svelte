<script lang="ts">
	export let name: string;
	let message = 'Hello';
	function updateMessage() {
		message = 'Hello, World!';
	}
	

	let locaArr = [[],[],[],[],[]]
	function generateRandomPairs() {
		const people = ['사람1', '사람2', '사람3', '사람4', '사람5', '사람6', '사람7', '사람8', '사람9', '사람10'];
		const places = ['달맞이길', '부산시민공원', '민락수변공원', '구목정공원', '돌고래분수광장'];
		
		const pairs = [[],[],[],[],[]];
		
		while (people.length > 0) {
			const person1 = people[Math.floor(Math.random() * people.length)];
			const person2 = people[Math.floor(Math.random() * people.length)];
			
			if (person1 !== person2) {
				const num = Math.floor(Math.random() * places.length)
				const place = places[num];
				pairs[num].push(`${person1}와 ${person2}`);
			
				people.splice(people.indexOf(person1), 1);
				people.splice(people.indexOf(person2), 1);
			}
		}
		
		locaArr = pairs
	}	
</script>

<main>
	<h1>Hello {name}!</h1>
	<button on:click={generateRandomPairs}>위치</button>

	{#if locaArr[0].length >0}
		<div>
			<h2>달맞이길<h2>
			<p>{locaArr[0]}</p>
		</div>	
	{/if}
	{#if locaArr[1].length >0}
		<div>
			<h2>부산시민공원<h2>
			<p>{locaArr[1]}</p>
		</div>
	{/if}
	{#if locaArr[2].length >0}
		<div>
			<h2>민락수변공원<h2>
			<p>{locaArr[2]}</p>
		</div>
	{/if}
	{#if locaArr[3].length >0}
		<div>
			<h2>구목정공원<h2>
			<p>{locaArr[3]}</p>
		</div>
	{/if}
	{#if locaArr[4].length >0}
		<div>
			<h2>돌고래분수광장<h2>
			<p>{locaArr[4]}</p>
		</div>
	{/if}	
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		width: 100%;
		height: 100%;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	h2 {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 30px;
		font-weight: 900;
	}

	p {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 20px;
		font-weight: 200;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
			background-color: #000000;
		}
	}
</style>