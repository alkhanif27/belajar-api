import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function DetailProducts() {
  const [product, setProduct] = useState({});

  const { id } = useParams();

  //function get product detail
  function getProductDetail() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }

  useEffect(() => {
    //jalanin get product detail
    getProductDetail();
  }, []);

  return (
    <div className="container py-10">
      <h3 className="font-bold text-5xl">{product.title}</h3>

      {product.images
        ? product.images.map((image, index) => <img key={index} src={image} />)
        : `kosong`}
    </div>
  );
}
