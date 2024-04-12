<script>
	import { data, title } from '@data/disclaimers';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="disclaimer">
		<p>{data}</p>
	</div>
</CommonPage>

<style lang="scss">
	.disclaimer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
		padding: 20px;
		background-color: #f4f4f4;
		border-radius: 8px;
		font-size: 0.9em;
		line-height: 1.6;
	}
</style>
