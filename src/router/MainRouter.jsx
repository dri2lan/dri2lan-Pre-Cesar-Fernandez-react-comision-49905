import { BrowserRouter, Routes, Route } from "react-router-dom" 

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}
