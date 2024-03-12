import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import Container from "./components/Container";
// import { ArticlePreview } from "./components/Preview";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Container><Page /></Container>} />
        {/* Page ID */}
        <Route path="/page/:id" element={<Container><Page /></Container>} />
        {/* Article title */}
        {/* <Route path="/:title" element={<Container><ArticlePreview /></Container>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
