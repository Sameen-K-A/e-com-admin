export interface IsidebarItems {
  title: string;
  url: string;
  icon: React.ElementType;
  onClick: () => void;
};

export interface IOrder {
  id: string;
  customer: ICustomer;
  products: IOrderItem[];
  dateOfOrder: string;
  fulfillmentStatus: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentStatus: 'pending' | 'complete';
  shippingAddress: IOrderAddress;
  total: number;
};

export interface IOrderItem {
  product: IProduct;
  quantity: number;
};

export interface IOrderAddress {
  name: string;
  houseName: string;
  district: string;
  state: string;
  country: string;
  pincode: string;
  phoneNumber: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  originalPrice: number;
  offerPercentage: number;
  stocks: number;
  images: string[];
  isPublished: boolean;
};

export interface ICustomer {
  customerId: string;
  name: string;
  email: string
}

export interface ICustomerTableList extends ICustomer {
  numberOfOrders: number;
}

export interface IAdminMember {
  id: string,
  name: string,
  email: string,
  role: "Super Admin" | "Admin" | "Member",
  avatar: string,
  status: "active" | "inactive",
};

export interface ICategory {
  id: string;
  name: string;
  productCount: number;
};