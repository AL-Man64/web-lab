const data = {
  website: "The Fog Man",
  categories: [
    {
      name: "Premium Fog",
      image: "category/premium.jpg",
      products: [
        {
          name: "Blood of Christ Fog",
          image: "product/premium/blood-of-christ.jpg",
        },
        // Used to contain postdiplomski, but I have no idea how to present that
        {
          // The 25th fog I defined
          name: "Fog no. 25",
          image: "product/premium/25.jpg",
          // Most generic fog image I could generate :)
        },
        {
          name: "AI Fog",
          image: "product/premium/ai.jpg",
          // AI generated because of course it is
        },
        {
          name: "Glitter Fog",
          image: "product/premium/glitter.jpg",
        },
        {
          name: "Tinfoil hat Fog",
          image: "product/premium/tinfoil.jpg",
        },
        {
          name: "Clear Fog",
          image: "product/premium/clear.jpg",
        },
      ],
    },
    {
      name: "Pride Fog",
      image: "category/pride.jpeg",
      products: [
        {
          name: "Lesbian Fog",
          image: "product/pride/lesbian.jpg",
        },
        {
          name: "Gay Fog",
          image: "product/pride/gay.jpg",
        },
        {
          name: "Bi Fog",
          image: "product/pride/bi.jpg",
        },
        {
          name: "Trans Fog",
          image: "product/pride/trans.jpg",
        },
        {
          // Still a kind of pride 🤷
          name: "Patriotic Fog",
          image: "product/pride/patriotic.jpg",
        },
      ],
    },
    {
      // No idea how to make images for this one, so I chose the lazy method of
      // doing different shades of pink
      name: "Bathwater Fog",
      image: "category/bathwater.jpeg",
      products: [
        {
          name: "Gamer girl Bathwater Fog",
          image: "product/bathwater/gamer.jpg",
        },
        {
          name: "Femboy Bathwater Fog",
          image: "product/bathwater/femboy.jpg",
        },
        {
          name: "Plus size model Bathwater Fog",
          image: "product/bathwater/plussize.jpg",
        },
        {
          name: "Granny Bathwater Fog",
          image: "product/bathwater/granny.jpg",
        },
        {
          name: "Ferovac Bathwater Fog",
          image: "product/bathwater/ferovac.jpg",
        },
      ],
    },
    {
      name: "Meta Fog",
      image: "category/meta.jpg",
      products: [
        {
          name: "Fog Fog",
          image: "product/meta/fog.jpg",
          // Pretty subtle, this picture
        },
        {
          name: "Absurdity Fog",
          image: "product/meta/absurdity.jpg",
        },
        {
          name: "Duality Fog",
          image: "product/meta/duality.jpg",
        },
        {
          name: "Null Fog",
          image: "product/meta/null.jpg",
        },
        {
          name: "Imagination Fog",
          image: "product/meta/imagination.jpg",
        },
      ],
    },
    {
      name: "Food Fog",
      image: "category/food.jpg",
      products: [
        {
          name: "Pizza Fog",
          image: "product/food/pizza.jpg",
        },
        {
          name: "Onion Fog",
          image: "product/food/onion.jpg",
        },
        {
          name: "Avocado Fog",
          image: "product/food/avocado.jpg",
        },
        {
          name: "Vegan Food Fog",
          image: "product/food/vegan.jpg",
        },
        {
          name: "Pasta Bolognese Fog",
          image: "product/food/bolognese.jpg",
        },
      ],
    },
    {
      name: "Corrupt Fog",
      image: "category/corrupt.jpg",
      products: [
        // Terraria references :)
        {
          name: "Crimson Fog",
          image: "product/corrupt/crimson.jpg",
        },
        {
          name: "Corruption Fog",
          image: "product/corrupt/corruption.jpg",
        },
        {
          name: "Hallow Fog",
          image: "product/corrupt/hallow.jpg",
        },
        {
          // I grew up here, so I should know
          name: "Bosnia Fog",
          image: "product/corrupt/bosnia.jpg",
        },
        {
          // Croatia too, don't worry
          name: "Croatia Fog",
          image: "product/corrupt/croatia.jpg",
        },
      ],
    },
    {
      name: "Mathematical Fog",
      image: "category/math.jpeg",
      products: [
        {
          name: "Four Dimensional Fog",
          image: "product/math/4d.jpg",
        },
        {
          // The image was an attempt okay!
          name: "Hyperbolic Fog",
          image: "product/math/hyperbolic.jpg",
        },
        {
          name: "Division by Zero Fog",
          image: "product/math/div0.png",
        },
        {
          name: "Gauss Fog",
          image: "product/math/gauss.jpg",
        },
        {
          name: "XY Fog",
          image: "product/math/xy.jpg",
        },
      ],
    },
    {
      // Last category I am doing images for, I'm just gonna do lazy
      // monochromatic fogs without any points of interest
      name: "Fashion Fog",
      image: "category/fashion.jpeg",
      products: [
        {
          name: "Ripped Jeans Fog",
          image: "product/fashion/ripped-jeans.jpg",
        },
        {
          name: "Crop Top Fog",
          image: "product/fashion/crop-top.jpg",
        },
        {
          name: "Mini Bag Fog",
          image: "product/fashion/mini-bag.jpg",
        },
        {
          name: "No Pockets Fog",
          image: "product/fashion/no-pockets.jpg",
        },
        {
          name: "Pantoufle Fog",
          image: "product/fashion/pantoufle.jpg",
        },
      ],
    },
    {
      name: "Metal Fog",
      image: "category/metal.jpeg",
      products: [
        {
          name: "Aluminium Fog",
          image: "product/metal/aluminium.jpg",
        },
        {
          name: "Gold Fog",
          image: "product/metal/gold.jpg",
        },
        {
          name: "Bronze Fog",
          image: "product/metal/bronze.jpg",
        },
        {
          name: "Zinc Fog",
          image: "product/metal/zinc.jpg",
        },
        {
          name: "Rusty steel Fog",
          image: "product/metal/rusty-steel.jpg",
        },
      ],
    },
    {
      name: "Beverage Fog",
      image: "category/beverage.jpg",
      products: [
        {
          // Wait, isn't this, like, ordinary fog?
          name: "Water Fog",
          image: "product/beverage/water.jpg",
        },
        {
          name: "Croatian Beer Fog",
          image: "product/beverage/crobeer.jpg",
        },
        {
          name: "Coffee Fog",
          image: "product/beverage/coffee.jpg",
        },
        {
          name: "Coke Fog",
          image: "product/beverage/coke.jpg",
        },
        {
          name: "Orange Juice Fog",
          image: "product/beverage/orange.jpg",
        },
      ],
    },
  ],
};

export default data;
