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

class ElementAttribute {
	constructor(attrName, attrValue) {
		this.name = attrName;
		this.value = attrValue;
	}
}

class Component {
	constructor(renderHookId) {
		this.hookId = renderHookId;
	}

	createRootElement(tag, cssClasses, attributes) {
		const rootElement = document.createElement(tag);
		if (cssClasses) {
			rootElement.className = cssClasses;
		}
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				rootElement.setAttribute(attr.name, attr.value);
			}
		}
		document.getElementById(this.hookId).append(rootElement);
		return rootElement;
	}
}

class ShoppingCart extends Component {
	items = [];

	set cartItems(value) {
		this.items = value;
		this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(
			2
		)}</h2>`;
	}

	get totalAmount() {
		const sum = this.items.reduce(
			(prevValue, curItem) => prevValue + curItem.price,
			0
		);
		return sum;
	}

	constructor(renderHookId) {
		super(renderHookId); //calls constructor from parent class
	}

	addProduct(product) {
		const updatedItems = [...this.items];
		updatedItems.push(product);
		this.cartItems = updatedItems;
	}

	render() {
		const cartEl = this.createRootElement("section", "cart");
		cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
		this.totalOutput = cartEl.querySelector("h2");
	}
}

// renders a product on the screen
class ProductItem {
	constructor(product) {
		this.product = product;
	}

	addToCart() {
		console.log("Adding product to cart...");
		App.addProductToCart(this.product);
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

		this.cart = new ShoppingCart("app");
		this.cart.render();
		const productList = new ProductList();
		const prodListEl = productList.render();

		renderHook.append(prodListEl);
	}
}

class App {
	static cart; //not technically needed, but provides clarity

	static init() {
		const shop = new Shop();
		shop.render();
		this.cart = shop.cart;
	}
	static addProductToCart(product) {
		this.cart.addProduct(product);
	}
}

App.init();

const shop = new Shop();
shop.render();
