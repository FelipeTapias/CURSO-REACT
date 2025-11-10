import { ItemCounter } from './shopping-cart/ItemCounter';

interface ItemsInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemsInCart[] = [
  { productName: 'Nintendo Switch 2', quantity: 1 },
  { productName: 'Pro Controller', quantity: 2 },
  { productName: 'Super Smash', quantity: 5 },
];

export function FirstStrepsApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsInCart.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantiy={quantity} />
      ))}
      {/* <ItemCounter name="Nintendo Switch 2" quantiy={3} />
      <ItemCounter name="Pro Controller" quantiy={2} />
      <ItemCounter name="Super Smash" quantiy={1} /> */}
    </>
  );
}
