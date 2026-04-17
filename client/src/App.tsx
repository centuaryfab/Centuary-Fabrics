import { Switch, Route } from "wouter";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import GroupCompanies from "./pages/GroupCompanies";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Cotton from "./pages/Cotton";
import NotFound from "./pages/not-found";
import ErodePage from "./pages/ErodePage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Switch>

          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/group-companies" component={GroupCompanies} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />

          {/* BLOG ROUTES */}
          <Route path="/blog/:slug" component={BlogDetail} />
          <Route path="/blog" component={Blog} />

          {/* SEO PAGE */}
          <Route path="/erode-fabric-manufacturer" component={ErodePage} />

          {/* OTHER */}
          <Route path="/cotton-fabric" component={Cotton} />

          {/* 404 */}
          <Route component={NotFound} />

        </Switch>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918148008588?text=Hi%20I%20am%20interested%20in%20your%20fabric%20collection"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>

    </div>
  );
}