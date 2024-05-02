<script lang="ts">
	export let name: string;
	import { generateRandomPairs } from './randomPairs';
	let message = 'Hello';
	function updateMessage() {
		message = 'Hello, World!';
	}
	

	let locaArr = [[],[],[],[],[]]
	function updateLocaArr() {
		locaArr = generateRandomPairs();
	}
</script>

<main>
	<div class="contents">
		<h1>Hello {name}!</h1>
		<button on:click={updateLocaArr}>위치</button>

		{#if locaArr[0].length >0}
			<div class="loca">
				<h2>달맞이길<h2>
				{#each locaArr[0] as senior, i}
					<li>{i + 1} : {senior}</li>
				{/each}			
			</div>	
		{/if}
		{#if locaArr[1].length >0}
			<div class="loca">
				<h2>부산시민공원<h2>
				{#each locaArr[1] as senior, i}
					<li>{i + 1} : {senior}</li>
				{/each}	
			</div>
		{/if}
		{#if locaArr[2].length >0}
			<div class="loca">
				<h2>민락수변공원<h2>
				{#each locaArr[2] as senior, i}
					<li>{i + 1} : {senior}</li>
				{/each}	
			</div>
		{/if}
		{#if locaArr[3].length >0}
			<div class="loca">
				<h2>구목정공원<h2>
				{#each locaArr[3] as senior, i}
					<li>{i + 1} : {senior}</li>
				{/each}	
			</div>
		{/if}
		{#if locaArr[4].length >0}
			<div class="loca">
				<h2>돌고래분수광장<h2>
				{#each locaArr[4] as senior, i}
					<li>{i + 1} : {senior}</li>
				{/each}	
			</div>
		{/if}
	</div>	
</main>

<style>
	main {
		width: 100%;
		min-height: 100%;
		background-color: #000000;
	}
	.contents {
		text-align: center;
		padding: 2em;
		width: 100%;
		min-height: 100%;
		height: auto;
		margin: 0 auto;
		background-color: #283593; /* 짙은 청색 배경 */
	}

	.loca {
		border: 3px solid #E0E0E0; /* 경계선 적용 */
		padding: 1em;
		margin-top: 1em;
		background-color: #3F51B5; /* 약간 밝은 청색으로 배경 설정 */
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 박스 그림자 추가 */
		border-radius: 10px; /* 모서리 둥글게 처리 */
	}

	h1 {
		color: #FFD700; /* 금색 */
		font-size: 2.5em; /* 글자 크기 줄임 */
		font-weight: 400; /* 덜 굵은 폰트 */
		margin-bottom: 0.5em; /* 하단 여백 추가 */
	}

	h2 {
		color: #ffffff;
		font-size: 1.6em; /* 글자 크기 줄임 */
		font-weight: 700;
		margin-bottom: 0.3em;
	}

	button {
		background-color: #FFD700; /* 금색 배경 */
		color: #283593; /* 버튼 텍스트 색상 */
		border: none;
		padding: 0.5em 1em;
		font-size: 1em; /* 버튼 글자 크기 줄임 */
		border-radius: 5px;
		cursor: pointer;
		margin-top: 1em;
		transition: background-color 0.3s, color 0.3s; /* 부드러운 색상 전환 */
	}

	button:hover {
		background-color: #ffffff; /* 호버 시 배경 색상 변경 */
		color: #FFD700;
	}

	li {
		color: #E0E0E0; /* 밝은 회색 */
		font-size: 0.5em; /* li 글자 크기 현저하게 줄임 */
		margin-top: 0.1em;
		list-style-type: none; /* 리스트 마커 제거 */
	}

	@media (min-width: 640px) {
		.contents {
			max-width: 640px; /* 최대 너비 설정 */
			padding: 2em 4em; /* 좌우 패딩 추가 */
		}

		.loca {
			margin: 1em auto; /* 자동 마진으로 중앙 정렬 */
			width: 90%; /* 너비 조정 */
		}
	}
</style>