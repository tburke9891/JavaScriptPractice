const productList = {
  products: [
    {
    title: 'A Pillow',
    imageUrl: 'https://i.pinimg.com/736x/85/89/11/858911606f36337f38310e5478c8c9fb.jpg',
    price: 19.99,
    description: 'A very soft pillow.'
    },
    {
    title: 'A Carpet',
    imageUrl: '	https://i.pinimg.com/236x/ae/dc/62/aedc620031aa9f40b37c2bcf25d24135.jpg',
    price: 386.01,
    description: 'A very plush carpet, the best carpet.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
      <img src="${prod.imageUrl}" alt"${prod.title}">
        <div class="product-item__content">
          <h2${this.title}</h2>
          <h3>\$${prod.price}</h3>
          <p>${prod.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render()