<script lang="ts">

	export let item: ShopItem;
	export let addItemToCart: (i:ShopItem) => void;

</script>

<button class="big-link" on:click={() => addItemToCart(item)}>
	Add To Cart
</button>

