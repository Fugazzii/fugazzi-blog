const http = require("http");
const cors = require("cors");

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
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    const urlParts = req.url.split("/");
    const endpoint = urlParts[1]; // Get the endpoint (e.g., "api")

    if (endpoint === "api") {
        const resource = urlParts[2]; // Get the resource (e.g., "previews" or "preview")
        
        if (resource === "previews") {
            if (urlParts.length === 4) { // Check if URL has the correct format "/api/previews/:id"
                const id = Number(urlParts[3]); // Get the ID from the URL
                if (!isNaN(id) && id >= 1 && id <= data.length) {
                    return res.end(JSON.stringify({ data: data[id - 1] }));
                } else {
                    res.statusCode = 404; // Not Found
                    return res.end(JSON.stringify({ error: "Preview not found" }));
                }
            } else {
                return res.end(JSON.stringify({ data }));
            }
        }
    }

    // If URL doesn't match any of the above cases
    res.statusCode = 404; // Not Found
    return res.end(JSON.stringify({ error: "Endpoint not found" }));
});

server.listen(8080, () => console.log("Server is listening on 8080"));
