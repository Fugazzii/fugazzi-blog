const http = require("http");
const cors = require("cors");
const { readFileSync } = require("fs");

const data = [
  {
    title: "Lorem Ipsum",
    date: "2024-03-10",
    readDuration: 5,
    imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
    author: "John Doe",
    description: "A brief description of the first preview.",
    content: `# Content 1
This is the content of the first preview.`,
    links: ["https://example.com/1", "https://example.com/2"]
  },
  {
    title: "Dolor Sit Amet",
    date: "2024-03-11",
    readDuration: 8,
    imgUrl: "https://nakamoto.com/content/images/size/w750/2020/01/what-are-the-key-properties-of-bitcoin.png",
    author: "Jane Smith",
    description: "A brief description of the second preview.",
    content: readFileSync("README.md", "utf8").trim(),
    links: ["https://example.com/3", "https://example.com/4"]
  }
];

const server = http.createServer((req, res) => {
    cors()(req, res, () => {});
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    const urlParts = req.url.split("/");
    const endpoint = urlParts[1];

    if(endpoint !== "api") {
        res.statusCode = 404;
        return res.end(JSON.stringify({ error: "Endpoint not found" }));
    }
    const resource = urlParts[2];
    
    if (resource === "previews") {
        if (urlParts.length === 4) {
            const id = Number(urlParts[3]);
            if (!isNaN(id) && id >= 1 && id <= data.length) {
                return res.end(JSON.stringify({ data: data[id - 1] }));
            } else {
                res.statusCode = 404;
                return res.end(JSON.stringify({ error: "Preview not found" }));
            }
        } else {
            return res.end(JSON.stringify({
                data: data.map((item, index) => ({
                    id: index + 1,
                    title: item.title,
                    date: item.date,
                    readDuration: item.readDuration,
                    imgUrl: item.imgUrl,
                }))
            }));
        }
    }

    res.statusCode = 404;
    return res.end(JSON.stringify({ error: "Resource not found" }));
});

server.listen(8080, () => console.log("Server is listening on 8080"));
