const arrConrtols = Array.from(document.querySelectorAll('.product__quantity-control'));
const arrButtonAdd = Array.from(document.querySelectorAll('.product__add'));
const cart = document.querySelector('.cart');
cart.style.visibility = 'hidden';

arrConrtols.forEach(item => item.addEventListener('click', changeQuantity));
arrButtonAdd.forEach(item => item.addEventListener('click', addProductCart));

function changeQuantity(event) {
	const elem = event.target;
	if (elem.classList.contains('product__quantity-control_dec')) {
		const quantity = elem.nextElementSibling;
		Number(quantity.textContent) === 1 ? quantity.textContent = 1 : quantity.textContent--;
	} else {
		const quantity = elem.previousElementSibling;
		quantity.textContent++;
	}
}

function addProductCart(event) {
	cart.style.visibility = 'visible';
	const button = event.target;
	const product = button.closest('.product');
	const cartProducts = document.querySelector('.cart__products');
	const arrId = Array.from(document.querySelectorAll('.cart__product'));
	let isIdIndex = arrId.findIndex(item => item.dataset.id === product.dataset.id);
	console.log(isIdIndex);

	if (isIdIndex >= 0) {
		const countOld = Number(arrId[isIdIndex].querySelector('.cart__product-count').textContent);
		const countNew = Number(product.querySelector('.product__quantity-value').textContent);
		arrId[isIdIndex].querySelector('.cart__product-count').textContent = countOld + countNew;
	} else {
		const cartProduct = document.createElement('div');
		cartProduct.classList.add('cart__product');
		cartProduct.dataset.id = product.dataset.id;
		const cartProductImage = document.createElement('img');
		cartProductImage.classList.add('cart__product-image');
		cartProductImage.src = product.querySelector('img').src;
		const cartProductCount = document.createElement('div');
		cartProductCount.classList.add('cart__product-count');
		cartProductCount.textContent = product.querySelector('.product__quantity-value').textContent;
		cartProductCount.style.right = 'auto';
		cartProductCount.style.left = '0';
		const cartProductClose = document.createElement('div');
		cartProductClose.classList.add('cart__product-close');
		cartProductClose.textContent = "X";
		
		cartProducts.appendChild(cartProduct);
		cartProduct.appendChild(cartProductImage);
		cartProduct.appendChild(cartProductCount);
		cartProduct.appendChild(cartProductClose);
		cartProductClose.addEventListener('click', removeProductCart);
	}
}

function removeProductCart(e) {
	const cartProduct = e.target.closest('.cart__product');
	cartProduct.remove();
	const arrProducts = Array.from(cart.querySelectorAll('.cart__product'));
	arrProducts.length === 0 ? cart.style.visibility = 'hidden' : cart.style.visibility = 'visible';
}