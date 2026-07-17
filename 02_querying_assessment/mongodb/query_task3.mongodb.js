// Task 3: Stock Replenishment Check
// Before placing the weekly supply order, the manager wants to avoid over-ordering ingredients
// that are already well-stocked. They need a list of every ingredient with a stock level
// of 100 or more so those can be deprioritised in this week's order.
//
// Hint: Write a query to find all ingredients in the ingredients
// collection that have a stock_level of 100.00 or more.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task3_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
//find หาค่า stock ที่มากกว่า 100
//

use("chrome-burger-db");

// db.createCollection("ingredients");
// db.getCollection("ingredients").insertMany([
//   {
//     _id: ObjectId("634d00000000000000000021"),
//     name: "Beef Patty",
//     stock_level: Decimal128("200.00"),
//     unit: "units",
//     supplier_id: ObjectId("634d00000000000000000001"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000022"),
//     name: "Veggie Patty",
//     stock_level: Decimal128("100.00"),
//     unit: "units",
//     supplier_id: ObjectId("634d00000000000000000001"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000023"),
//     name: "Burger Bun",
//     stock_level: Decimal128("300.00"),
//     unit: "units",
//     supplier_id: ObjectId("634d00000000000000000002"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000024"),
//     name: "Lettuce",
//     stock_level: Decimal128("20.00"),
//     unit: "heads",
//     supplier_id: ObjectId("634d00000000000000000003"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000025"),
//     name: "Tomato",
//     stock_level: Decimal128("50.00"),
//     unit: "units",
//     supplier_id: ObjectId("634d00000000000000000003"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000026"),
//     name: "Cheese Slice",
//     stock_level: Decimal128("400.00"),
//     unit: "slices",
//     supplier_id: ObjectId("634d00000000000000000001"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000027"),
//     name: "Bacon",
//     stock_level: Decimal128("150.00"),
//     unit: "strips",
//     supplier_id: ObjectId("634d00000000000000000001"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000028"),
//     name: "Special Sauce",
//     stock_level: Decimal128("10.00"),
//     unit: "liters",
//     supplier_id: ObjectId("634d00000000000000000003"),
//   },
//   {
//     _id: ObjectId("634d00000000000000000029"),
//     name: "Potatoes",
//     stock_level: Decimal128("100.00"),
//     unit: "kg",
//     supplier_id: ObjectId("634d00000000000000000003"),
//   },
//   {
//     _id: ObjectId("634d0000000000000000002a"),
//     name: "Onions",
//     stock_level: Decimal128("25.00"),
//     unit: "kg",
//     supplier_id: ObjectId("634d00000000000000000003"),
//   },
// ]);

db.ingredients.find({ stock_level: { $gte: 100 } });
