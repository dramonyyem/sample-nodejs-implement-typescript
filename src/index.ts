import express , { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


app.get("/api/test", (req: Request, res: Response) => {
    res.send({testing:"helloworld"});
});

app.get("/api/users", (req: Request, res: Response) => {
    res.send({user:"yem-daramony"});
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});