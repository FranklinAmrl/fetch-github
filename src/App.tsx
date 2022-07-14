import { 
  Route, 
  Routes,
} from "react-router-dom";
import { Commits } from "./pages/Commits";
import { Branches } from "./pages/Branches";
import { Repos } from "./pages/Repos";
// import { SearchUser } from "./pages/SearchUser";


export function App() {
  return (
    <>
    <Routes>
      {/* <Route path="/" element={<SearchUser />} /> */}
      <Route path="/" element={<Repos />} />
      <Route path="/branch/*" element={<Branches />} />
      <Route path="/branch/commit/*" element={<Commits />} />
    </Routes>
    </>
  )
}