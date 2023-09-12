<script lang="ts">
	import { addItemToCart } from '../stores/cart';

	export let item: ShopItem;
</script>

<button class="big-link" on:click={() => addItemToCart(item)}>
	Add To Cart
</button>

