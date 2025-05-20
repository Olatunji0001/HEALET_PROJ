import Hero from "./hero";
import Product from "./product";
import About from "./about";
import Discount from "./discount";
import Blog from "./blog";
import Test from "./testimonial"

export default function Home() {
  return (
    <>
      <Hero />
    <div className="biggest">
      <Product />
      <About />
      <Discount />
      <Blog />
      <Test />
    </div>
    </>
  );
}
