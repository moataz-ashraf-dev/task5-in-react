import { createContext, useState } from "react";

export const globalStore = createContext();

const MainStore = ({ children }) => {
  const [num, setNum] = useState(1);

  const sayHi = () => {
    return <h1>SAY HI</h1>;
  };
  const products = [
    {
      id: 1,
      title: "Wireless Noise-Canceling Headphones",
      price: 199.99,
      category: "Electronics",
      rating: 4.8,
      stock: 25,
      description:
        "High-fidelity audio with active noise cancellation and 30-hour battery life.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Classic Minimalist Watch",
      price: 129.5,
      category: "Accessories",
      rating: 4.6,
      stock: 14,
      description:
        "Sleek analog wristwatch with genuine leather strap and scratch-resistant glass.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Ergonomic Mechanical Keyboard",
      price: 89.99,
      category: "Electronics",
      rating: 4.9,
      stock: 40,
      description:
        "Customizable RGB backlighting with tactile mechanical switches for fast typing.",
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Smart Fitness Tracker Band",
      price: 49.99,
      category: "Wearables",
      rating: 4.3,
      stock: 50,
      description:
        "Track your daily steps, heart rate, sleep cycles, and outdoor workouts.",
      image:
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "Insulated Stainless Steel Water Bottle",
      price: 24.95,
      category: "Fitness & Outdoor",
      rating: 4.7,
      stock: 65,
      description:
        "Keeps drinks ice-cold for 24 hours or piping hot for up to 12 hours.",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Premium Running Shoes",
      price: 119.0,
      category: "Footwear",
      rating: 4.5,
      stock: 18,
      description:
        "Lightweight and breathable running sneakers engineered for maximum comfort.",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 7,
      title: "Modern Desk Lamp with Wireless Charger",
      price: 39.99,
      category: "Home & Office",
      rating: 4.4,
      stock: 32,
      description:
        "Dimmable LED desk lamp featuring built-in fast wireless charging pad for smartphones.",
      image:
        "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 8,
      title: "Canvas Travel Backpack",
      price: 64.99,
      category: "Bags",
      rating: 4.7,
      stock: 22,
      description:
        "Durable water-resistant canvas backpack with padded laptop compartment.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const values = {
    num,
    setNum,
    sayHi,
    products
  };

  return <globalStore.Provider value={values}>{children}</globalStore.Provider>;
};

export default MainStore;
