export const ROUTE = {
  NOT_FOUND: "*",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  PRODUCTS: "/products",
  ADD_PRODUCT: "/products/add_product",
  EDIT_PRODUCT: (product_id: string) => `/products/${product_id}/edit_product`,
  ACCOUNTS: "/accounts",
  ORDERS: "/orders",
  ORDER_DETAILS: (orderId: string) => `/orders/${orderId}`,
};