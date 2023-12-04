interface MenuItem {
    name: string;
    number: number;
    category: string;
    description: string;
    price: number;
    path: string;
}

const menuItems: MenuItem[] = [
    {
        name: 'Salmon Teriyaki Box',
        number: 0,
        category: 'Specials',
        description:
            'Salmon teriyaki, California roll, rice, salad, tempura, spring roll.',
        price: 14.95,
        path: '/300_b1d5b684c59658b95d4f187df6aca8b6.jpg',
    },
    {
        name: 'Veggie Gyoza',
        number: 1,
        category: 'Appetizers',
        description: '6 pcs, pan-fried dumpling with vegetables.',
        price: 6.5,
        path: '/533_4dfab2e060ae5a63b04a9314359f7bfd.jpg',
    },
    {
        name: 'Beef Tataki',
        number: 2,
        category: 'Appetizers',
        description:
            '5 pcs, thin slices of raw beef, served in ponzu sauce & spicy.',
        price: 8.5,
        path: '/300_bcfac6e64ba3694c1248fb1f4d0162dc.jpeg',
    },
    {
        name: 'Takoyaki',
        number: 3,
        category: 'Appetizers',
        description: '8pcs',
        price: 8.25,
        path: '/300_235ce3a97a67a79a4d428011300b44a7.jpg',
    },
    {
        name: 'Edamame',
        number: 4,
        category: 'Appetizers',
        description: 'Soy bean with seasoning',
        price: 5.95,
        path: '/300_b38b142fa8003595de9748c37a96606c.jpg',
    },
    {
        name: 'Agedashi Tofu',
        number: 5,
        category: 'Appetizers',
        description: 'Deep-fried tofu with or without spicy sauce.',
        price: 5.95,
        path: '/300_2b220de9ef99c6db726caab0ead67cf2.jpg',
    },
    {
        name: 'Yakitoro',
        number: 6,
        category: 'Appetizers',
        description: 'Chicken Skewer',
        price: 7.7,
        path: '/300_645ad3011a70615d60e4e62557fe0e64.jpg',
    },

    {
        name: 'Katsu Don',
        number: 7,
        category: 'Bowls',
        description: 'Pork, egg, and veggie over rice.',
        price: 12.95,
        path: '/360_F_29549846_5mZC8X68p1owv6aev4zSSsduoXmzo5Lk.jpg',
    },
    {
        name: 'Oyako Don',
        number: 8,
        category: 'Bowls',
        description: 'Chicken, egg, and veggie over rice',
        price: 12.95,
        path: '/300_7021ba76a7c747bec7dd7b5baf7452e4.jpg',
    },
    {
        name: 'Poke Bowl',
        number: 9,
        category: 'Bowls',
        description:
            'Tempura, avocado, masago, cucumber, lettuce, green onion, ponzu sauce, spicy light mayo, Japanese mayo, teriyaki sauce, Japanese spicy, sesame, salmon/tuna/salmon & tuna/chicken mango or spicy shrimp.',
        price: 15.95,
        path: '/360_F_223077708_lzOmEc3ICUkGyvNeAJoxZO2d132tfirH.jpg',
    },
    {
        name: 'Chirashi Don',
        number: 10,
        category: 'Bowls',
        description: '10pcs sashimi on sushi rice',
        price: 12.95,
        path: '/istockphoto-988652464-612x612.jpg',
    },
    {
        name: 'Salmon Don',
        number: 11,
        category: 'Bowls',
        description: 'Salmon on sushi rice',
        price: 12.95,
        path: '/300_9790028b51327f16e94b485c6643f4c3.jpg',
    },
    {
        name: 'Tuna & Salmon Don',
        number: 12,
        category: 'Bowls',
        description: 'Salmon and tuna on sushi rice',
        price: 12.95,
        path: '/300_b88e8e79326d7c89a8fb8d15d80bf7c7.jpg',
    },

    {
        name: 'Kappa Roll',
        number: 13,
        category: 'Sushi',
        description: 'Cucumber',
        price: 2.95,
        path: '/300_e3a059522f87f9cc67083fd9d5387f8c.jpg',
    },
    {
        name: 'Negitoro Roll',
        number: 14,
        category: 'Sushi',
        description: 'Tuna belly, green onion',
        price: 4.35,
        path: '/300_631cfe8b36eec63fb3466f629911931a.jpg',
    },
    {
        name: 'Alaska Roll',
        number: 15,
        category: 'Sushi',
        description: 'Salmon, crab, avocado',
        price: 5.95,
        path: '/300_cdc1ae65d7831c7a5ac4720f519a586d.jpg',
    },
    {
        name: 'Salmon Avocado Roll',
        number: 16,
        category: 'Sushi',
        description: 'Salmon, avocado',
        price: 5.35,
        path: '/300_8785176bc1bc2f22973df589ea56fb91.jpg',
    },
    {
        name: 'Unagi Roll',
        number: 17,
        category: 'Sushi',
        description: 'BBQ eel',
        price: 6.95,
        path: '/300_bb66e851493b2982ffe6beb68acb01d1.jpeg',
    },
    {
        name: 'Beef Teriyaki Roll',
        number: 18,
        category: 'Sushi',
        description: '',
        price: 4.95,
        path: '/300_2ee3776dabb1031695adc73744c07543.jpg',
    },

    {
        name: 'Miso Ramen',
        number: 19,
        category: 'Noodles',
        description: '',
        price: 15.35,
        path: '/300_535e97f9841b6772481fc291e9eb7faa.jpg',
    },
    {
        name: 'Shoyu Ramen',
        number: 20,
        category: 'Noodles',
        description: '',
        price: 15.35,
        path: '/300_9dd8de90743b6529c498f8846ed47bc4.jpeg',
    },
    {
        name: 'Tonkotsu Ramen',
        number: 21,
        category: 'Noodles',
        description: '',
        price: 12.35,
        path: '/300_ec4f08d9750c045032fe35cb5fbea9bb.jpeg',
    },
    {
        name: 'Chicken Yakiudon',
        number: 22,
        category: 'Noodles',
        description: '',
        price: 12.95,
        path: '/300_022ad74e0282fd19e9dc7870777157dd.jpeg',
    },
    {
        name: 'Vegetable Yakisoba',
        number: 23,
        category: 'Noodles',
        description: '',
        price: 11.95,
        path: '/300_c06a6d463e6f011988fd135dc7719b96.jpg',
    },
    {
        name: 'Vegetable Udon',
        number: 24,
        category: 'Noodles',
        description: '',
        price: 10.95,
        path: '/300_33aaab48ced3dce6f81daffc2792bd47.jpg',
    },

    {
        name: 'Sushi Special',
        number: 25,
        category: 'Combos',
        description:
            '22pcs California roll, yam roll, tuna roll with miso soup.',
        price: 10.45,
        path: '/533_a6d4dadf10cc9c956674e690b90e548e.jpg',
    },
    {
        name: 'Spicy Sushi Combo',
        number: 26,
        category: 'Combos',
        description:
            'Spicy dynamite roll, spicy tuna roll, spicy scallop roll with miso soup.',
        price: 14.45,
        path: '/533_5bcf15defde79317b8af27abe56fb390.jpg',
    },
    {
        name: 'California Sashimi Combo',
        number: 27,
        category: 'Combos',
        description:
            'California roll, tuna roll, 4 pcs tuna & salmon sashimi with miso soup.',
        price: 13.45,
        path: '/533_62a068cce00dbfdf36442f5dc6e74873.jpg',
    },
    {
        name: 'Veggie Sushi Combo',
        number: 28,
        category: 'Combos',
        description: 'Vegetable roll, yam roll, 2 pcs inari with miso soup.',
        price: 13.45,
        path: '/533_70a6f2476b585e0f0e73e9afcc5c6d2c.jpg',
    },

    {
        name: 'Chicken Teriyaki Box',
        number: 29,
        category: 'Specials',
        description:
            'Chicken teriyaki, California roll, rice, salad, tempura, spring roll.',
        price: 12.95,
        path: '/533_3ac94392c0552124f34d1dd8a8585d02.jpg',
    },
    {
        name: 'Beef Teriyaki Box',
        number: 30,
        category: 'Specials',
        description:
            'Beef teriyaki, California roll, rice, salad, tempura, spring roll.',
        price: 12.95,
        path: '/300_8e6c7aaba75e398ebf2ea669161a26b9.jpg',
    },
    {
        name: 'Tofu Teriyaki Box',
        number: 31,
        category: 'Specials',
        description:
            'Veggie teriyaki, yam roll, rice, salad, tempura, spring roll.',
        price: 12.15,
        path: '/300_8e9447608db5a648f5e76f0f63cb34ce.jpg',
    },
];

export default menuItems;
