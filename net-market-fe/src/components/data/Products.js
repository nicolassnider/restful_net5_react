let productsArray = [];
let key = 0;

export const addProduct = (product) => {
  let productJson = product;
  key++;
  productJson.key = key;
  productsArray.push(productJson);
};

export const listProducts = () => {
  return productsArray;
};

export const getProductKey = (key) => {
  const objProduct = productsArray.find((p) => {
    return p.key === key;
  });
  return objProduct;
};

export const editProduct = (dataProduct) => {
	console.log(dataProduct)
  productsArray.forEach((product) => {
    if (dataProduct.key === product.key) {
      product.name = dataProduct.nameEdit;
      product.stock = dataProduct.stockEdit;
      product.brandId = dataProduct.brandIdEdit;
      product.categoryId = dataProduct.categoryIdEdit;
      product.price = dataProduct.priceEdit;
      product.image = dataProduct.imageEdit;
    }
  });
  return productsArray;
};

export const deleteProduct = (dataProduct) => {
	productsArray=productsArray.filter(objProduct=>{
		return objProduct.key!==dataProduct.key
	});
	const newDataProducts = listProducts();
	return newDataProducts;
};
