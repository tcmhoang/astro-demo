import { computed, map } from "nanostores";

export const cartStore = map<Record<number, CartStore | undefined>>({});

export function addItemToCart(item: ShopItem) {
	const cartItem = cartStore.get()[item.id];
	const quantity = cartItem ? cartItem.quantity : 0;

	cartStore.setKey(item.id, {
		item,
		quantity: quantity + 1,
	});
}

export function removeItemFromCart(itemId: number) {
	cartStore.setKey(itemId, undefined);
}

export const subtotal = computed(cartStore, (entries) => {
	let subtotal = 0;
	Object.values(entries).forEach((entry) => {
		if (!entry) {
			return subtotal;
		}

		subtotal += entry.quantity * entry.item.price;
	});

	return subtotal;
});
