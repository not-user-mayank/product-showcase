import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <h1>My Product Store</h1>

      <Greeting name="Shopper" />

      <div className="cards">
        <ProductCard title="Studio Headphones" price={89} inStock={true} />
        <ProductCard title="Wireless Keyboard" price={49} inStock={false} />
      </div>
    </main>
  );
}
