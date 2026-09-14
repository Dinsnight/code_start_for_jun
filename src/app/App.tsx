import { Footer } from "../widgets/footer/Footer";
import { Header } from "../widgets/header/Header";
import { AppRoutes } from "./providers/AppRoutes";


export default function App() {
  return (
    <div className="app">
      <Header/>

      <main>
        <AppRoutes />
      </main>

      <Footer />
    </div>
  )
}