import Image from "next/image";
import p1 from "@/public/p1.png";
import p2 from "@/public/p2.png";
import p3 from "@/public/p3.png";
import p4 from "@/public/p4.png";
import p5 from "@/public/p5.png";
import p6 from "@/public/p6.png";
import p7 from "@/public/p7.png";
import p8 from "@/public/p8.png";
// import { url } from "inspector";
type product = {
  id: Number;
  name: String;
  price: String;
  image: typeof p1;
};

const products: product[] = [
  {
    id: 1,
    name: "Necklace",
    price: "200",
    image: p1,
  },
  {
    id: 2,
    name: "Necklace",
    price: "300",
    image: p2,
  },
  {
    id: 3,
    name: "Necklace",
    price: "110",
    image: p3,
  },
  {
    id: 4,
    name: "Ring",
    price: "45",
    image: p4,
  },
  {
    id: 5,
    name: "Ring",
    price: "95",
    image: p5,
  },
  {
    id: 6,
    name: "Earrings",
    price: "70",
    image: p6,
  },
  {
    id: 7,
    name: "Earrings",
    price: "400",
    image: p7,
  },
  {
    id: 8,
    name: "Necklace",
    price: "450",
    image: p8,
  },
];
export default function Product() {
  return (
    <>
      <div className="hold">
        <h1 className="text">Latest Products</h1>

        <div className="products">
          {products.map((product) => (
            <div key={product.id.toString()} className="product-card">
              <button className="rounded-full">New</button>
              <Image
                className="product-img"
                src={product.image}
                alt={`${product.name} - ${product.price}`}
              />
              <div className="flex justify-between mt-5">
                <h3 className="font-bold">{product.name}</h3>
                <div className="flex">
                  <span className="mr-2 font-bold">Price</span>
                  <span>$</span>
                  <p className="font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="gee">
          <button className="rounded-sm mt-12">View All Products</button>
        </div>
      </div>
    </>
  );
}
