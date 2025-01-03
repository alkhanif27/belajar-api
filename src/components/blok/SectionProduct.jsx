import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function SectionProduct() {
  // tempat untuk menampung data product//
  const [products, setProducts] = useState([]);

  //mendapatkan data product
  function getProducts() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }
  //useeffect mouting, hanya dijalankan sekali
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container py-10">
      <h1 className="font-bold text-2xl mb-2 ">SectionProduct</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product_satuan) => (
          <Link key={product_satuan.id} to={`/products/${product_satuan.id}`}>
            <img src={product_satuan.thumbnail} alt="" />
            <p>{product_satuan.title} </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
