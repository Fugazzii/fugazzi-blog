import http from "http";
import cors from "cors";

const data = [
  {
    title: "Lorem Ipsum",
    date: "2024-03-10",
    readDuration: 5,
    imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
    author: "John Doe",
    description: "A brief description of the first preview.",
  },
  {
    title: "Dolor Sit Amet",
    date: "2024-03-11",
    readDuration: 8,
    imgUrl: "https://nakamoto.com/content/images/size/w750/2020/01/what-are-the-key-properties-of-bitcoin.png",
    author: "Jane Smith",
    description: "A brief description of the second preview.",
  }
];

const server = http.createServer((req, res) => {
  cors()(req, res, () => {});

  if (req.url === "/api/previews") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ data }));
  }
});

server.listen(3000, () => console.log("Server is listening on 3000"));
