class Product {
	//Fields
	// title = "DEFAULT";
	// imageUrl;
	// description;
	// price;

	constructor(title, image, desc, price) {
		this.title = title;
		this.imageUrl = image;
		this.description = desc;
		this.price = price;
	}
}

class ShoppingCart {
	items = [];

	addProduct(product) {
		this.items.push(product);
		this.totalOutput = `<h2>Total: \$${1}</h2>`;
	}

	render() {
		const cartEl = document.createElement("section");
		cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
		cartEl.className = "cart";
		this.totalOutput = cartEl.querySelector("h2");
		return cartEl;
	}
}

// renders a product on the screen
class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("Adding product to cart...");
		console.log(this.product);
	}

	render() {
		const prodEl = document.createElement("li");
		prodEl.className = "product-item";
		prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt"${this.product.title}">
        <div class="product-item__content">
          <h2${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
		const addCartButton = prodEl.querySelector("button");
		//bind the add to cart button to the product referenced with .bind(this)
		addCartButton.addEventListener("click", this.addToCart.bind(this));
		return prodEl;
	}
}

class ProductList {
	products = [
		new Product(
			"A Pillow",
			"https://i.pinimg.com/736x/85/89/11/858911606f36337f38310e5478c8c9fb.jpg",
			"A very soft pillow.",
			19.99
		),
		new Product(
			"A Carpet",
			"https://i.pinimg.com/236x/ae/dc/62/aedc620031aa9f40b37c2bcf25d24135.jpg",
			"A very plush carpet, the best carpet.",
			386.01
		),
	];

	constructor() {}

	render() {
		const prodList = document.createElement("ul");
		prodList.className = "product-list";
		for (const prod of this.products) {
			const productItem = new ProductItem(prod);
			const prodEl = productItem.render();
			prodList.append(prodEl);
		}
		return prodList;
	}
}

class Shop {
	render() {
		const renderHook = document.getElementById("app");

		const cart = new ShoppingCart();
		const cartEl = cart.render();
		const productList = new ProductList();
		const prodListEl = productList.render();

		renderHook.append(cartEl);
		renderHook.append(prodListEl);
	}
}

const shop = new Shop();
shop.render();
