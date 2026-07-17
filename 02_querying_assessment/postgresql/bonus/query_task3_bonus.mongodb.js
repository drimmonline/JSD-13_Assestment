// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:
// lookup หาค่า จาก FK ใน orders collection จะได้ staff_full_detail จากนั้น unwind ข้อมูลจาก array เป็น object แล้ว
//จากนั้น sumtotal order แล้วเอาค่าไปจัดใน project
use("chrome-burger-db");
db.orders.find();

db.orders.aggregate([
  {
    $lookup: {
      from: "staff",
      localField: "staff.staff_id",
      foreignField: "_id",
      as: "staff_full_details",
    },
  },
  {
    $unwind: "$staff_full_details",
  },
  {
    $group: {
      _id: {
        first_name: "$staff_full_details.first_name",
        last_name: "$staff_full_details.last_name",
      },
      total_orders: { $sum: 1 },
    },
  },
  {
    $sort: {
      total_orders: -1,
    },
  },
  {
    $project: {
      _id: 0,
      first_name: "$_id.first_name",
      last_name: "$_id.last_name",
      total_orders: { $toInt: "$total_orders" },
    },
  },
]);
