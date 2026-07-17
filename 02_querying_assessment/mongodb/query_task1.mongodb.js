// Task 1: Budget Meal Deal
// The owner wants to introduce a budget-friendly meal deal promotion and needs to identify
// which menu items could be included. To qualify, an item must be priced under $10.00,
// so they can offer good value without cutting too deep into margins.
//
// Hint: Write a query to find all menu items in the menu_items
// collection that have a price less than 10.00.

// Bonus: The dataset is identical in the PostgreSQL database,
//  meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task1_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//  เลือก database "chrome-burger-db" จากนั้น สร้าง collection ชื่อ menu_items เพื่อเก็บข้อมูล
// จากนั้นก็หา เมนูที่ราคา น้อยกว่า 10
//

use("chrome-burger-db");
//db.createCollection("menu_items");
// db.menu_items.insertMany([
//   {
//     _id: ObjectId("634d00000000000000000031"),
//     name: "The All-American",
//     description:
//       "A classic beef burger with lettuce, tomato, and our special sauce.",
//     price: Decimal128("12.50"),
//     category: "Burger",
//     recipe: [
//       {
//         ingredient_id: ObjectId("634d00000000000000000021"),
//         name: "Beef Patty",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000023"),
//         name: "Burger Bun",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000024"),
//         name: "Lettuce",
//         quantity_needed: Decimal128("0.1"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000025"),
//         name: "Tomato",
//         quantity_needed: Decimal128("0.5"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000028"),
//         name: "Special Sauce",
//         quantity_needed: Decimal128("0.05"),
//       },
//     ],
//   },
//   {
//     _id: ObjectId("634d00000000000000000032"),
//     name: "Bacon Cheeseburger",
//     description:
//       "Our classic burger topped with crispy bacon and melted cheese.",
//     price: Decimal128("14.00"),
//     category: "Burger",
//     recipe: [
//       {
//         ingredient_id: ObjectId("634d00000000000000000021"),
//         name: "Beef Patty",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000023"),
//         name: "Burger Bun",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000026"),
//         name: "Cheese Slice",
//         quantity_needed: Decimal128("2.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000027"),
//         name: "Bacon",
//         quantity_needed: Decimal128("3.0"),
//       },
//     ],
//   },
//   {
//     _id: ObjectId("634d00000000000000000033"),
//     name: "The Aloha Burger",
//     description:
//       "A beef burger with a tropical twist, featuring grilled pineapple.",
//     price: Decimal128("13.50"),
//     category: "Burger",
//     recipe: [],
//   },
//   {
//     _id: ObjectId("634d00000000000000000034"),
//     name: "Veggie Burger",
//     description: "A delicious plant-based patty with all the fixings.",
//     price: Decimal128("11.50"),
//     category: "Burger",
//     recipe: [
//       {
//         ingredient_id: ObjectId("634d00000000000000000022"),
//         name: "Veggie Patty",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000023"),
//         name: "Burger Bun",
//         quantity_needed: Decimal128("1.0"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000024"),
//         name: "Lettuce",
//         quantity_needed: Decimal128("0.1"),
//       },
//       {
//         ingredient_id: ObjectId("634d00000000000000000025"),
//         name: "Tomato",
//         quantity_needed: Decimal128("0.5"),
//       },
//     ],
//   },
//   {
//     _id: ObjectId("634d00000000000000000035"),
//     name: "Classic Fries",
//     description: "Golden and crispy french fries.",
//     price: Decimal128("5.00"),
//     category: "Side",
//     recipe: [],
//   },
//   {
//     _id: ObjectId("634d00000000000000000036"),
//     name: "Onion Rings",
//     description: "Battered and fried to perfection.",
//     price: Decimal128("6.00"),
//     category: "Side",
//     recipe: [],
//   },
//   {
//     _id: ObjectId("634d00000000000000000037"),
//     name: "Soda",
//     description: "Choose from a variety of classic sodas.",
//     price: Decimal128("2.50"),
//     category: "Drink",
//     recipe: [],
//   },
//   {
//     _id: ObjectId("634d00000000000000000038"),
//     name: "Bottled Water",
//     description: "Pure and simple.",
//     price: Decimal128("2.00"),
//     category: "Drink",
//     recipe: [],
//   },
// ]);

// db.menu_items.find();
// db.menu_items.find({ price: { $lt: 10 } });
db.menu_items.find({ price: { $lt: 10 } });
