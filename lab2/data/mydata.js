const data = {
  website: "The Fog Man",
  categories: [
    {
      id: 0,
      name: "Premium Fog",
      image: "category/premium.jpg",
      products: [
        {
          id: 0,
          name: "Blood of Christ Fog",
          image: "product/premium/blood-of-christ.jpg",
        },
        // Used to contain postdiplomski, but I have no idea how to present that
        {
          id: 1,
          // The 25th fog I defined
          name: "Fog no. 25",
          image: "product/premium/25.jpg",
          // Most generic fog image I could generate :)
        },
        {
          id: 2,
          name: "AI Fog",
          image: "product/premium/ai.jpg",
          // AI generated because of course it is
        },
        {
          id: 3,
          name: "Glitter Fog",
          image: "product/premium/glitter.jpg",
        },
        {
          id: 4,
          name: "Tinfoil hat Fog",
          image: "product/premium/tinfoil.jpg",
        },
        {
          id: 5,
          name: "Clear Fog",
          image: "product/premium/clear.jpg",
        },
      ],
    },
    {
      id: 1,
      name: "Pride Fog",
      image: "category/pride.jpeg",
      products: [
        {
          id: 6,
          name: "Lesbian Fog",
          image: "product/pride/lesbian.jpg",
        },
        {
          id: 7,
          name: "Gay Fog",
          image: "product/pride/gay.jpg",
        },
        {
          id: 8,
          name: "Bi Fog",
          image: "product/pride/bi.jpg",
        },
        {
          id: 9,
          name: "Trans Fog",
          image: "product/pride/trans.jpg",
        },
        {
          id: 10,
          // Still a kind of pride 🤷
          name: "Patriotic Fog",
          image: "product/pride/patriotic.jpg",
        },
      ],
    },
    {
      id: 2,
      // No idea how to make images for this one, so I chose the lazy method of
      // doing different shades of pink
      name: "Bathwater Fog",
      image: "category/bathwater.jpeg",
      products: [
        {
          id: 11,
          name: "Gamer girl Bathwater Fog",
          image: "product/bathwater/gamer.jpg",
        },
        {
          id: 12,
          name: "Femboy Bathwater Fog",
          image: "product/bathwater/femboy.jpg",
        },
        {
          id: 13,
          name: "Plus size model Bathwater Fog",
          image: "product/bathwater/plussize.jpg",
        },
        {
          id: 14,
          name: "Granny Bathwater Fog",
          image: "product/bathwater/granny.jpg",
        },
        {
          id: 15,
          name: "Ferovac Bathwater Fog",
          image: "product/bathwater/ferovac.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Meta Fog",
      image: "category/meta.jpg",
      products: [
        {
          id: 16,
          name: "Fog Fog",
          image: "product/meta/fog.jpg",
          // Pretty subtle, this picture
        },
        {
          id: 17,
          name: "Absurdity Fog",
          image: "product/meta/absurdity.jpg",
        },
        {
          id: 18,
          name: "Duality Fog",
          image: "product/meta/duality.jpg",
        },
        {
          id: 19,
          name: "Null Fog",
          image: "product/meta/null.jpg",
        },
        {
          id: 20,
          name: "Imagination Fog",
          image: "product/meta/imagination.jpg",
        },
      ],
    },
    {
      id: 4,
      name: "Food Fog",
      image: "category/food.jpg",
      products: [
        {
          id: 21,
          name: "Pizza Fog",
          image: "product/food/pizza.jpg",
        },
        {
          id: 22,
          name: "Onion Fog",
          image: "product/food/onion.jpg",
        },
        {
          id: 23,
          name: "Avocado Fog",
          image: "product/food/avocado.jpg",
        },
        {
          id: 24,
          name: "Vegan Food Fog",
          image: "product/food/vegan.jpg",
        },
        {
          id: 25,
          name: "Pasta Bolognese Fog",
          image: "product/food/bolognese.jpg",
        },
      ],
    },
    {
      id: 5,
      name: "Corrupt Fog",
      image: "category/corrupt.jpg",
      products: [
        // Terraria references :)
        {
          id: 26,
          name: "Crimson Fog",
          image: "product/corrupt/crimson.jpg",
        },
        {
          id: 27,
          name: "Corruption Fog",
          image: "product/corrupt/corruption.jpg",
        },
        {
          id: 28,
          name: "Hallow Fog",
          image: "product/corrupt/hallow.jpg",
        },
        {
          id: 29,
          // I grew up here, so I should know
          name: "Bosnia Fog",
          image: "product/corrupt/bosnia.jpg",
        },
        {
          id: 30,
          // Croatia too, don't worry
          name: "Croatia Fog",
          image: "product/corrupt/croatia.jpg",
        },
      ],
    },
    {
      id: 6,
      name: "Mathematical Fog",
      image: "category/math.jpeg",
      products: [
        {
          id: 31,
          name: "Four Dimensional Fog",
          image: "product/math/4d.jpg",
        },
        {
          id: 32,
          // The image was an attempt okay!
          name: "Hyperbolic Fog",
          image: "product/math/hyperbolic.jpg",
        },
        {
          id: 33,
          name: "Division by Zero Fog",
          image: "product/math/div0.png",
        },
        {
          id: 34,
          name: "Gauss Fog",
          image: "product/math/gauss.jpg",
        },
        {
          id: 35,
          name: "XY Fog",
          image: "product/math/xy.jpg",
        },
      ],
    },
    {
      id: 7,
      // Last category I am doing images for, I'm just gonna do lazy
      // monochromatic fogs without any points of interest
      name: "Fashion Fog",
      image: "category/fashion.jpeg",
      products: [
        {
          id: 36,
          name: "Ripped Jeans Fog",
          image: "product/fashion/ripped-jeans.jpg",
        },
        {
          id: 37,
          name: "Crop Top Fog",
          image: "product/fashion/crop-top.jpg",
        },
        {
          id: 38,
          name: "Mini Bag Fog",
          image: "product/fashion/mini-bag.jpg",
        },
        {
          id: 39,
          name: "No Pockets Fog",
          image: "product/fashion/no-pockets.jpg",
        },
        {
          id: 40,
          name: "Pantoufle Fog",
          image: "product/fashion/pantoufle.jpg",
        },
      ],
    },
    {
      id: 8,
      name: "Metal Fog",
      image: "category/metal.jpeg",
      products: [
        {
          id: 41,
          name: "Aluminium Fog",
          image: "product/metal/aluminium.jpg",
        },
        {
          id: 42,
          name: "Gold Fog",
          image: "product/metal/gold.jpg",
        },
        {
          id: 43,
          name: "Bronze Fog",
          image: "product/metal/bronze.jpg",
        },
        {
          id: 44,
          name: "Zinc Fog",
          image: "product/metal/zinc.jpg",
        },
        {
          id: 45,
          name: "Rusty steel Fog",
          image: "product/metal/rusty-steel.jpg",
        },
      ],
    },
    {
      id: 9,
      name: "Beverage Fog",
      image: "category/beverage.jpg",
      products: [
        {
          id: 46,
          // Wait, isn't this, like, ordinary fog?
          name: "Water Fog",
          image: "product/beverage/water.jpg",
        },
        {
          id: 47,
          name: "Croatian Beer Fog",
          image: "product/beverage/crobeer.jpg",
        },
        {
          id: 48,
          name: "Coffee Fog",
          image: "product/beverage/coffee.jpg",
        },
        {
          id: 49,
          name: "Coke Fog",
          image: "product/beverage/coke.jpg",
        },
        {
          id: 50,
          name: "Orange Juice Fog",
          image: "product/beverage/orange.jpg",
        },
      ],
    },
  ],
};

export default data;
