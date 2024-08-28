export const mockFetchBookings = async () => {
  return [
    {
      id: 1,
      userName: "John Doe",
      date: "2024-07-01",
      review: "Great experience!",
    },
    {
      id: 2,
      userName: "Jane Smith",
      date: "2024-07-02",
      review: "Lovely place!",
    },
  ];
};

export const mockFetchActiveBookings = async () => {
  return [
    { id: 1, userName: "Alice Johnson", date: "2024-08-01", deal: "2+1 drink" },
    { id: 2, userName: "Bob Brown", date: "2024-08-02", deal: "2+1 Pizza" },
  ];
};

export const mockFetchDeals = async () => {
  return [
    {
      id: 1,
      title: "2+1 drink",
      description: "Buy 2 drinks, get 1 free",
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      title: "2+1 Pizza",
      description: "Buy 2 pizzas, get 1 free",
      image: "https://via.placeholder.com/80",
    },
  ];
};
