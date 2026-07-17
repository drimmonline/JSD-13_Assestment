-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:
    --  ผมลอง เช็คข้อมูน ใน table staff
    --  กับ order แล้ว บางfiled มี staff_id ที่เป็น ค่า null ผมจึงเช็คหาค่า null โดยใช้ group byนอกจากนั้นก็เรียงลำดับจากมากไปน้อย 
    --  ผมจึงเริ่มทำการ join โดยการใช้ left join เพราะเป็นการดึงค่าทั้งหมดมาจากตารางซ้าย
    -- ค่าระหว่าง staff กับ orders จากนั้นทำการย่อชื่อ staff = s Oders = o เพื่อง่ายต่อการเขียน
    -- จากนั้น ทำการ count total_order  จาก order ของ ตาราง order ที่มี ค่า จาก staff id เดียวกันใน order นั้น 
    
--

SELECT s.staff_id , concat(s.first_name, ' ', s.last_name) AS staff_full_name,
Count(o.order_id) as total_orders 
FROM staff s
LEFT JOIN Orders o ON o.staff_id=s.staff_id
GROUP BY  s.staff_id, s.first_name, s.last_name
ORDER BY  CASE WHEN s.staff_id IS NULL THEN 1 ELSE 0 END, 
    total_orders DESC;


