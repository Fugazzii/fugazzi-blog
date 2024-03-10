import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page } from "./components/Page";
import { Article } from "./components/Article";
import Container from "./components/Container";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Page */}
        <Route path="/" element={<Container><Page /></Container>} />
        {/* Page ID */}
        <Route path="/page/:id" element={<Container><Page /></Container>} />
        {/* Article title */}
        <Route path="/:title" element={<Container><Article /></Container>} />
      </Routes>
    </BrowserRouter>
  );
}
