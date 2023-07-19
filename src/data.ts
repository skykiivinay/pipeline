import { Food } from "./app/shared/models/Food";

export const sample_foods:Food[] = [
        {
          id: 1,
          name: "Chocolate Cake",
          price: 15.99,
          cooktime: 60,
          favourite: true,
          origins: ["France"],
          stars: 4.5,
          imageurl: "https://media.bakingo.com/sq-round-rosey-brown-chocolate-cake-cake2570choc-A_1.jpg",
          tags: ["dessert", "chocolate", "baking"]
        },
        {
          id: 2,
          name: "Pasta Carbonara",
          price: 12.5,
          cooktime: 30,
          favourite: false,
          origins: ["Italy"],
          stars: 1.0,
          imageurl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/masala-pasta.jpg",
          tags: ["pasta", "Italian", "quick"]
        },
        {
          id: 3,
          name: "Chicken Curry",
          price: 9.99,
          cooktime: 45,
          favourite: true,
          origins: ["India"],
          stars: 4.8,
          imageurl: "https://kitchenofdebjani.com/wp-content/uploads/2023/04/easy-indian-chicken-curry-Recipe-for-beginners-Debjanir-rannaghar.jpg",
          tags: ["curry", "spicy", "Indian"]
        },
        {
          id: 4,
          name: "Caesar Salad",
          price: 8.5,
          cooktime: 15,
          favourite: true,
          origins: ["Mexico"],
          stars: 4.0,
          imageurl: "https://www.seriouseats.com/thmb/Fi_FEyVa3_-_uzfXh6OdLrzal2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-caesar-salad-recipe-06-40e70f549ba2489db09355abd62f79a9.jpg",
          tags: ["salad", "healthy", "easy"]
        },
        {
          id: 5,
          name: "Sushi Rolls",
          price: 22.99,
          cooktime: 40,
          favourite: false,
          origins: ["Japan"],
          stars: 4.6,
          imageurl: "https://www.allrecipes.com/thmb/PujANugNXQW7ugnivQt8b4_-13k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/RM-169856-CreamCheeseandCrabSushiRolls-ddmfs-3x4-6421-8d233e210db3458f8574bafad1c69e70.jpg",
          tags: ["sushi", "Japanese", "seafood"]
        }
      ];
      