// category navigations
export const categoryNavigation = [
  { icon: "Home", title: "Home", href: "/products/search/Dariry & Eggs" },
  { icon: "Products", title: "All Products", href: "/products/search/vegetables" },
  { icon: "Popular", title: "Popular Products", href: "/products/search/Breakfast" },
  { icon: "Trending", title: "Trending Products", href: "/products/search/Frozen" },
  {
    icon: "HealthBeauty",
    title: "Health and beauty",
    href: "/products/search/Fruits & Vegetables",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "Mascara",
    title: "Mascara",
    href: "/products/search/Dariry & Eggs",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "Powder",
    title: "Powder",
    href: "/products/search/Breakfast",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "Lotion",
    title: "Lotion",
    href: "/products/search/Frozen",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "HealthBeauty",
    title: "Makeup",
    href: "/products/search/Organic",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "Lipstick",
    title: "Lipstick",
    href: "/products/search/Canned Food",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  {
    icon: "FaceMask",
    title: "Face Mask",
    href: "/products/search/Coffee & Snacks",
    child: [
      { title: "Beauty Items", href: "/products/search/Onion" },
      { title: "Medicine Items", href: "/products/search/Potato" },
      { title: "Makeup Items", href: "/products/search/Vegetable Pack" }
    ]
  },
  { icon: "Thermometer", title: "Digital Thermometer", href: "/products/search/Sauces & Jems" },
  { icon: "OxygenPump", title: "Oxygen Pump", href: "/products/search/Breakfast" },
  { icon: "LenseCase", title: "Lense Case Kit", href: "/products/search/Frozen" },
  { icon: "AutoMotive", title: "Automotive", href: "/products/search/Organic" }
];

// main carousel data
export const mainCarouselData = [
  {
    id: 1,
    buttonLink: "/",
    buttonText: "Shop",
    imgUrl: "/assets/images/Health Shop/Header 1.png",
    title: "Delivering Medicine to your Doorstep Within 30 Minutes"
  },
  {
    id: 2,
    buttonLink: "/",
    buttonText: "Shop",
    imgUrl: "/assets/images/Health Shop/Header 1.png",
    title: "Delivering Medicine to your Doorstep Within 30 Minutes"
  }
];

// services
export const serviceList = [
  {
    icon: "Truck",
    title: "Fast Delivery",
    id: "ad6a361d-9048-49e5-9fa7-927737892857",
    description: "Product Delivery is a customer centric approach to defining."
  },
  {
    icon: "PickUpBox",
    title: "Pick Up",
    id: "2ba74d7d-dfeb-4337-9397-e849572a1244",
    description: "Product Delivery is a customer centric approach to defining."
  },
  {
    icon: "OnlineService",
    title: "Online Support",
    id: "dcea23c6-e735-429c-ac35-5903a938f2f8",
    description: "Product Delivery is a customer centric approach to defining."
  }
];

// products
export const products = [
  {
    id: "0897bb87-e229-4d39-8639-c451ef57d1cf",
    slug: "vichy-liftactiv-nuit-cream",
    shop: {
      id: "8e28ee3c-7c2c-4e6a-a274-cdf4d1c13243",
      slug: "constant-shoppers",
      user: {
        id: "9c820520-32ee-4683-9925-d0e7e22945d0",
        email: "Minnie_Muller@yahoo.com",
        phone: "572.422.3075",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/598.jpg",
        password: "vUrcT43mZb0pKZB",
        dateOfBirth: "1984-11-13T13:17:09.709Z",
        verified: true,
        name: {
          firstName: "Brayan",
          lastName: "Bahringer"
        }
      },
      email: "Easter_Farrell@hotmail.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Vichy Liftactiv Nuit Cream",
    brand: null,
    price: 189,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/Health Shop/Product (5).png",
    images: [
      "/assets/images/Health Shop/Product (5).png",
      "/assets/images/Health Shop/Product (5).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "health-beauty",
      type: "top-new-products"
    }
  },
  {
    id: "9c34f12c-927a-42df-8b4c-990084c8c1aa",
    slug: "blue-stethoscope",
    shop: {
      id: "7171ab4e-1fbf-45b6-95d9-07cf9ed386be",
      slug: "cybershop",
      user: {
        id: "0f6dbcd1-cbe3-4e4f-a04c-41228ff1b3c9",
        email: "Bertram_OKeefe@yahoo.com",
        phone: "963.267.5451 x31173",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/204.jpg",
        password: "7KyZDbburluaiPK",
        dateOfBirth: "1944-12-20T14:46:49.006Z",
        verified: true,
        name: {
          firstName: "Roger",
          lastName: "Wolff"
        }
      },
      email: "Abel24@yahoo.com",
      name: "Cybershop",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-8.png",
      profilePicture: "/assets/images/faces/propic(7).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Blue Stethoscope",
    brand: null,
    price: 165,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/Health Shop/Product (3).png",
    images: [
      "/assets/images/Health Shop/Product (3).png",
      "/assets/images/Health Shop/Product (3).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "top-new-products"
    }
  },
  {
    id: "55012664-65c3-469c-b079-f309a4d38a32",
    slug: "sphygmomanometer",
    shop: {
      id: "2807d7cb-e6d9-4d0b-8812-1cc4df3f9c21",
      slug: "scroll-through",
      user: {
        id: "b6a3cc46-8c32-4587-b198-28129ee663ca",
        email: "Manuel27@gmail.com",
        phone: "991.950.6385 x327",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/659.jpg",
        password: "HybgISkBPngysfY",
        dateOfBirth: "1951-01-10T16:01:46.055Z",
        verified: true,
        name: {
          firstName: "Karlie",
          lastName: "Lubowitz"
        }
      },
      email: "Marisol86@hotmail.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Sphygmomanometer",
    brand: null,
    price: 72,
    size: null,
    colors: [],
    discount: 12,
    thumbnail: "/assets/images/Health Shop/Product (7).png",
    images: [
      "/assets/images/Health Shop/Product (7).png",
      "/assets/images/Health Shop/Product (7).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "top-new-products"
    }
  },
  {
    id: "fb05df26-d62c-4900-8204-08e972e67bd0",
    slug: "vichy-liftactiv-cream",
    shop: {
      id: "8e28ee3c-7c2c-4e6a-a274-cdf4d1c13243",
      slug: "constant-shoppers",
      user: {
        id: "9c820520-32ee-4683-9925-d0e7e22945d0",
        email: "Minnie_Muller@yahoo.com",
        phone: "572.422.3075",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/598.jpg",
        password: "vUrcT43mZb0pKZB",
        dateOfBirth: "1984-11-13T13:17:09.709Z",
        verified: true,
        name: {
          firstName: "Brayan",
          lastName: "Bahringer"
        }
      },
      email: "Easter_Farrell@hotmail.com",
      name: "Constant Shoppers",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-4.png",
      profilePicture: "/assets/images/faces/propic(3).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Vichy Liftactiv Cream",
    brand: null,
    price: 163,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/Health Shop/Product (8).png",
    images: [
      "/assets/images/Health Shop/Product (8).png",
      "/assets/images/Health Shop/Product (8).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "top-new-products"
    }
  },
  {
    id: "51f780bb-76ae-4220-87ec-f483f19927d1",
    slug: "nivea-cream-soft-milk",
    shop: {
      id: "d007aa7b-4b37-4638-8725-2fbac11c9ba2",
      slug: "scarlett-beauty",
      user: {
        id: "e7f0ca46-bbb6-4f4f-aa53-03314c5cd4ca",
        email: "Trevor.Wiegand@yahoo.com",
        phone: "448-827-4111 x4838",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/501.jpg",
        password: "56HwcpES9tYkRM1",
        dateOfBirth: "1994-02-19T22:26:16.913Z",
        verified: true,
        name: {
          firstName: "Selena",
          lastName: "Bauch"
        }
      },
      email: "Rebeca.Batz@gmail.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Nivea Cream Soft Milk",
    brand: null,
    price: 180,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/Health Shop/Product (9).png",
    images: [
      "/assets/images/Health Shop/Product (9).png",
      "/assets/images/Health Shop/Product (9).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "top-new-products"
    }
  },

  {
    id: "0cf0efe4-5df3-43a8-ab14-03d2c22bc511",
    slug: "vichy-liftactiv-nuit-cream",
    shop: {
      id: "e230d1b7-ce69-464c-a891-4e02ecd7a1c7",
      slug: "anytime-buys",
      user: {
        id: "216acb7f-ba3c-43c2-85c1-97a5128bc6ae",
        email: "Gerry82@hotmail.com",
        phone: "(480) 527-7250 x21254",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg",
        password: "0c200xIHZ_lT69W",
        dateOfBirth: "1983-06-19T09:40:00.964Z",
        verified: true,
        name: {
          firstName: "Ashly",
          lastName: "Jacobs"
        }
      },
      email: "Rodger43@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Vichy Liftactiv Nuit Cream",
    brand: null,
    price: 230,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/Health Shop/Product (9).png",
    images: [
      "/assets/images/Health Shop/Product (9).png",
      "/assets/images/Health Shop/Product (9).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "484341ff-0df8-403d-a96f-55bff4b05f2c",
    slug: "sphygmomanometer",
    shop: {
      id: "f2520e47-8896-453a-974c-68feb7179d82",
      slug: "coveted-clicks",
      user: {
        id: "78714862-d7de-4f3a-b980-d1860e8705b1",
        email: "Luther.Dietrich89@hotmail.com",
        phone: "1-531-939-7384 x886",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
        password: "ja1RIwEewiuvMvw",
        dateOfBirth: "1979-07-03T15:19:12.594Z",
        verified: true,
        name: {
          firstName: "Kamryn",
          lastName: "Quigley"
        }
      },
      email: "Myron_Trantow60@hotmail.com",
      name: "Coveted Clicks",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-3.png",
      profilePicture: "/assets/images/faces/propic(2).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Sphygmomanometer",
    brand: null,
    price: 65,
    size: null,
    colors: [],
    discount: 6,
    thumbnail: "/assets/images/Health Shop/Product (2).png",
    images: [
      "/assets/images/Health Shop/Product (2).png",
      "/assets/images/Health Shop/Product (2).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "d1ecaafe-1311-4ed9-881c-eed23d4666c0",
    slug: "fresh-strawberry",
    shop: {
      id: "820fa522-81ed-43a0-85c9-11d7d7c37739",
      slug: "cybershop",
      user: {
        id: "e4453cb5-00ab-4f21-849e-f889fc55fbea",
        email: "Clair_Hessel95@gmail.com",
        phone: "1-277-251-0731",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1051.jpg",
        password: "lXXPcbS0vW3bAfV",
        dateOfBirth: "1982-07-25T17:38:03.396Z",
        verified: true,
        name: {
          firstName: "Harold",
          lastName: "Ortiz"
        }
      },
      email: "Claud92@hotmail.com",
      name: "Cybershop",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-8.png",
      profilePicture: "/assets/images/faces/propic(7).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Fresh Strawberry",
    brand: null,
    price: 181,
    size: null,
    colors: [],
    discount: 11,
    thumbnail: "/assets/images/Health Shop/Product (4).png",
    images: [
      "/assets/images/Health Shop/Product (4).png",
      "/assets/images/Health Shop/Product (4).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "c4358795-6d87-448e-a88a-3ceccb2a8fa4",
    slug: "nivea-cream",
    shop: {
      id: "01286864-9cc2-4586-b327-3da85658a3dc",
      slug: "scroll-through",
      user: {
        id: "bc47fc7b-6762-4e3d-9ffb-30f1799db6d1",
        email: "Nina_Ledner10@hotmail.com",
        phone: "1-426-360-3744",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1108.jpg",
        password: "yVQy480bQMVnCl2",
        dateOfBirth: "1966-08-17T05:08:58.542Z",
        verified: true,
        name: {
          firstName: "Kirk",
          lastName: "Morissette"
        }
      },
      email: "Jade_Stark@yahoo.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Nivea Cream",
    brand: null,
    price: 211,
    size: null,
    colors: [],
    discount: 11,
    thumbnail: "/assets/images/Health Shop/Product (5).png",
    images: [
      "/assets/images/Health Shop/Product (5).png",
      "/assets/images/Health Shop/Product (5).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 4,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "c2716a69-3972-4f71-8800-ad61898fd0fb",
    slug: "vichy-liftactiv-nuit-cream",
    shop: {
      id: "005e180a-42b2-44ad-a38b-e42bbdde0587",
      slug: "scarlett-beauty",
      user: {
        id: "94d05f5e-696f-43dc-b61d-d6282d00a272",
        email: "Karl2@hotmail.com",
        phone: "281-617-8345 x55859",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/203.jpg",
        password: "WiQlpVUlxSF9Rid",
        dateOfBirth: "1977-03-08T15:12:48.293Z",
        verified: true,
        name: {
          firstName: "Otilia",
          lastName: "Schaefer"
        }
      },
      email: "Lina.Bosco51@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-9.png",
      profilePicture: "/assets/images/faces/propic(8).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Vichy Liftactiv Nuit Cream",
    brand: null,
    price: 189,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/Health Shop/Product (6).png",
    images: [
      "/assets/images/Health Shop/Product (6).png",
      "/assets/images/Health Shop/Product (6).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 5,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "cfb75612-ddb5-4680-9029-c59ffefa2087",
    slug: "blue-stethoscope",
    shop: {
      id: "c97bd8ca-2fe3-4781-b43c-6b441a071499",
      slug: "word-wide-wishes",
      user: {
        id: "d725ba5f-5571-40ba-b8b2-b77547cf7e39",
        email: "Edythe_Sauer37@hotmail.com",
        phone: "(499) 284-4740 x6909",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/660.jpg",
        password: "zjzzl_46e03B3FP",
        dateOfBirth: "1997-06-07T17:14:16.460Z",
        verified: true,
        name: {
          firstName: "Gabriella",
          lastName: "Kreiger"
        }
      },
      email: "Percival_McCullough@gmail.com",
      name: "Word Wide Wishes",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-7.png",
      profilePicture: "/assets/images/faces/propic(6).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Blue Stethoscope",
    brand: null,
    price: 165,
    size: null,
    colors: [],
    discount: 9,
    thumbnail: "/assets/images/Health Shop/Product (3).png",
    images: [
      "/assets/images/Health Shop/Product (3).png",
      "/assets/images/Health Shop/Product (3).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "a36a1242-2479-4bec-96c2-ef69fc362700",
    slug: "sphygmomanometer",
    shop: {
      id: "dbd2a363-1f74-4ac8-bdd0-ea98f64e37ff",
      slug: "keyboard-kiosk",
      user: {
        id: "d953bef5-190c-426f-b832-6ffb7a387f79",
        email: "Nelson.Kovacek50@yahoo.com",
        phone: "1-730-687-4544 x602",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/782.jpg",
        password: "V9sshXtZdlNFWyn",
        dateOfBirth: "1980-09-26T16:19:05.976Z",
        verified: true,
        name: {
          firstName: "Madilyn",
          lastName: "Turcotte"
        }
      },
      email: "Jalon12@hotmail.com",
      name: "Keyboard Kiosk",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-5.png",
      profilePicture: "/assets/images/faces/propic(4).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Sphygmomanometer",
    brand: null,
    price: 72,
    size: null,
    colors: [],
    discount: 12,
    thumbnail: "/assets/images/Health Shop/Product (7).png",
    images: [
      "/assets/images/Health Shop/Product (7).png",
      "/assets/images/Health Shop/Product (7).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "ba2d1796-47d5-4199-a619-10ccab133c88",
    slug: "vichy-liftactiv-cream",
    shop: {
      id: "f2520e47-8896-453a-974c-68feb7179d82",
      slug: "coveted-clicks",
      user: {
        id: "78714862-d7de-4f3a-b980-d1860e8705b1",
        email: "Luther.Dietrich89@hotmail.com",
        phone: "1-531-939-7384 x886",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/557.jpg",
        password: "ja1RIwEewiuvMvw",
        dateOfBirth: "1979-07-03T15:19:12.594Z",
        verified: true,
        name: {
          firstName: "Kamryn",
          lastName: "Quigley"
        }
      },
      email: "Myron_Trantow60@hotmail.com",
      name: "Coveted Clicks",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-3.png",
      profilePicture: "/assets/images/faces/propic(2).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Vichy Liftactiv Cream",
    brand: null,
    price: 163,
    size: null,
    colors: [],
    discount: 7,
    thumbnail: "/assets/images/Health Shop/Product (8).png",
    images: [
      "/assets/images/Health Shop/Product (8).png",
      "/assets/images/Health Shop/Product (8).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  },
  {
    id: "29425487-ac3a-485b-9924-258db2fe0ed0",
    slug: "nivea-cream-soft-milk",
    shop: {
      id: "e230d1b7-ce69-464c-a891-4e02ecd7a1c7",
      slug: "anytime-buys",
      user: {
        id: "216acb7f-ba3c-43c2-85c1-97a5128bc6ae",
        email: "Gerry82@hotmail.com",
        phone: "(480) 527-7250 x21254",
        avatar:
          "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg",
        password: "0c200xIHZ_lT69W",
        dateOfBirth: "1983-06-19T09:40:00.964Z",
        verified: true,
        name: {
          firstName: "Ashly",
          lastName: "Jacobs"
        }
      },
      email: "Rodger43@hotmail.com",
      name: "Anytime Buys",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner-6.png",
      profilePicture: "/assets/images/faces/propic(5).png",
      socialLinks: {
        facebook: null,
        youtube: null,
        twitter: null,
        instagram: null
      }
    },
    title: "Nivea Cream Soft Milk",
    brand: null,
    price: 180,
    size: null,
    colors: [],
    discount: 8,
    thumbnail: "/assets/images/Health Shop/Product (9).png",
    images: [
      "/assets/images/Health Shop/Product (9).png",
      "/assets/images/Health Shop/Product (9).png"
    ],
    categories: ["healthbeauty"],
    status: null,
    reviews: [],
    rating: 3,
    for: {
      demo: "health-beauty",
      type: "all-products"
    }
  }
];
