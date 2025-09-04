export interface IsidebarItems {
  title: string;
  url: string;
  icon: React.ElementType;
  onClick: () => void;
};

export interface IOrder {
  id: string;
  customer: { name: string; email: string };
  date: string;
  items: { image: string; }[];
  total: number;
  fulfillmentStatus: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
};