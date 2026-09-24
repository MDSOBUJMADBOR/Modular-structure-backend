import cors from "cors";
import express from "express";
import categoryRoutes from "./routes/category.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ success: true, message: "Category CRUD API is running" });
});

app.use("/api/categories", categoryRoutes);

export default app;
