import { Children, createContext } from "react";

const cartContext = createContext();

export function CartProvider({ Children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (quantity, options, id) => {
    setCart([...cart, { quantity, options, id }]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((el) => id !== el.id));
  };

  return (
    <cartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {Children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}
