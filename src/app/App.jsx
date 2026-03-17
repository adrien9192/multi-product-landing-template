import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { products } from '../data/products/index.js'
import HomePage from '../pages/HomePage.jsx'
import ProductPage from '../pages/ProductPage.jsx'
import NotFoundPage from '../pages/NotFoundPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/products/:slug" element={<ProductPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
