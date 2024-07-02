const users = [
  {
    isAdmin: false,
    name: {
      first: "Regular",
      middle: "",
      last: "User",
    },
    phone: "0507123012",
    email: "reg@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Tel aviv",
      street: "Shoham",
      houseNumber: 5,
      zip: "8920435",
    },
    isBusiness: false,
  },
  {
    isAdmin: false,
    name: {
      first: "Business",
      middle: "",
      last: "User",
    },
    phone: "050-8123012",
    email: "business@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
    isBusiness: true,
  },
  {
    isAdmin: true,
    name: {
      first: "Admin",
      middle: "",
      last: "User",
    },
    phone: "050-8123012",
    email: "admin@gmail.com",
    password: "Abc!123Abc",
    address: {
      state: "IL",
      country: "Israel",
      city: "Haifa",
      street: "HaNevim",
      houseNumber: 5,
      zip: "8920435",
    },
    isBusiness: true,
  },
];
const cards = [
  {
    userId : "5f7b6f5f9b6f5f9b6f5f9b6f",
    title: "a wonderful new card",
    subtitle: "a test value for this card",
    description: "a test value for new card\na test value for new card\n",
    phone: "050-3211234",
    email: "qwe@gmail.com",
    web: "https://www.bing.com",
    image: {
      url: "https://img.izismile.com/img/img13/20201030/640/you_have_never_seen_something_like_this_640_36.jpg",
      alt: "image of something",
    },
    address: {
      state: "IL",
      country: "Israel",
      city: "Tel aviv",
      street: "Shoham",
      houseNumber: 5,
      zip: "8920435",
    },
  },
];
export { users , cards};
