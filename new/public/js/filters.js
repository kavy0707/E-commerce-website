document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('product-list');
  const sortDropdown = document.getElementById('sort-options');

  let products = [];

  const fetchAndRender = async () => {
    const response = await fetch('/products');
    products = await response.json();
    renderProducts(products);
  };

  const renderProducts = (productList) => {
    container.innerHTML = productList.map(p => `
      <div class="product">
        <img src="${p.image}" alt="${p.name}" width="150" />
        <h4>${p.name}</h4>
        <p>$${p.price}</p>
      </div>
    `).join('');
  };

  sortDropdown.addEventListener('change', () => {
    const value = sortDropdown.value;
    let sorted = [...products];

    if (value === 'az') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === 'lowhigh') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (value === 'highlow') {
      sorted.sort((a, b) => b.price - a.price);
    }

    renderProducts(sorted);
  });

  // Initial load
  fetchAndRender();
});
