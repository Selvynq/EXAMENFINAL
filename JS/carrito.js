const addToShoppingCartButtons = document.querySelectorAll('.agregar-carrito');
addToShoppingCartButtons.forEach(addToCarButton =>{
	addToCarButton.addEventListener('click',(addToCartClicked) {;

	})
function addToCartClicked(event) {
	const button = event.target;
	console.log('ver: addToCarClicked => button', button);
}