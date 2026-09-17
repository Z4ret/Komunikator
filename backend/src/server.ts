import express from "express";

const app = express()
const PORT = 3000;

app.use(express.json());

app.get("/api/test", (req, res) =>{
    res.json({
        message: "Chodzi to ?"
    });
});

app.listen(PORT, () => {
    console.log(`Backend działa na http://localhost:${PORT}`);
})