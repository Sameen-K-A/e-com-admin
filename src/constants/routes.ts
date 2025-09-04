export const ROUTE = {
  NOT_FOUND: "*",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
  ACCOUNTS: "/accounts",
  ORDERS: "/orders",
  ORDER_DETAILS: (orderId: string) => `/orders/${orderId}`,
};