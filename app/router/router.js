import express from "express";
export const router = express.Router();

// TODO vos routes
router.get("/", (req, res) => {
    res.send("Hello World!");
});

router.use((req, res) => {
    res.status(404).send("Sorry can't find that!");
});
