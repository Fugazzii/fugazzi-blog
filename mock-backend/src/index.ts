const express = require("express");
const cors = require("cors");
const { readFileSync } = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const data = [
    {
        title: "Lorem Ipsum",
        date: "2024-03-10",
        readDuration: 5,
        imgUrl: "https://nakamoto.com/content/images/size/w960/2020/01/introduction-to-cryptocurrency.png",
        author: "John Doe",
        description: "A brief description of the first preview.",
        content: `# Content 1\nThis is the content of the first preview.`,
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

app.get("/api/previews", (req, res) => {
    res.json(data.map((item, index) => ({
        id: index + 1,
        title: item.title,
        date: item.date,
        readDuration: item.readDuration,
        imgUrl: item.imgUrl,
    })));
});

app.get("/api/previews/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 1 || id > data.length) {
        return res.status(404).json({ error: "Preview not found" });
    }
    res.json({ data: data[id - 1] });
});

app.get("/api/previews/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 1 || id > data.length) {
      return res.status(404).json({ error: "Preview not found" });
    }
    res.json({ data: data[id - 1] });
  });
  
app.post("/api/previews", (req, res) => {
    const form = formidable({ multiples: false });
  
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: "Error parsing form data" });
        }
    
        const { title, date, readDuration, imgUrl, author, description, links } = fields;
        const content = readFileSync(files.content.path, "utf8").trim();
    
        const newArticle = {
            title,
            date,
            readDuration: parseInt(readDuration),
            imgUrl,
            author,
            description,
            content,
            links: JSON.parse(links)
        };
    
        data.push(newArticle);
        res.json({ message: "Article added successfully", data: newArticle });
    });
});
  
app.delete("/api/previews/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 1 || id > data.length) {
      return res.status(404).json({ error: "Preview not found" });
    }
    data.splice(id - 1, 1);
    res.json({ message: "Article deleted successfully" });
});

app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
