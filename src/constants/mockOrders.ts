import { IOrder } from "@/types/general";

const mockOrders: IOrder[] = [
  {
    id: "ORD-1024",
    customer: { name: "John Doe", email: "testuser@gmail.com" },
    date: "2023-05-15",
    items: [
      { image: "https://images.unsplash.com/photo-1520975926218-849c2ed4a83c" },
      { image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070" },
      { image: "https://images.unsplash.com/photo-1621624666561-7e5c32709b4c" }
    ],
    total: 149.99,
    fulfillmentStatus: "Shipped"
  },
  {
    id: "ORD-1025",
    customer: { name: "Jane Smith", email: "testuser@gmail.com" },
    date: "2023-05-16",
    items: [
      { image: "https://images.unsplash.com/photo-1618354691233-fc93b6e5d63b" }
    ],
    total: 49.99,
    fulfillmentStatus: "Delivered"
  },
  {
    id: "ORD-1026",
    customer: { name: "Robert Johnson", email: "testuser@gmail.com" },
    date: "2023-05-17",
    items: [
      { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
      { image: "https://images.pexels.com/photos/12893528/pexels-photo-12893528.jpeg" },
      { image: "https://images.unsplash.com/photo-1619983081563-430f63602704" },
      { image: "https://images.unsplash.com/photo-1603252109303-2751441f0752" },
      { image: "https://images.pexels.com/photos/12893529/pexels-photo-12893529.jpeg" }
    ],
    total: 299.99,
    fulfillmentStatus: "Pending"
  }
];

export default mockOrders