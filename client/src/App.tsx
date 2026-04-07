import BlogDetail from "@/pages/BlogDetail";
import Blog from "@/pages/Blog";
import { Switch, Route } from "wouter";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import GroupCompanies from "@/pages/GroupCompanies";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import Cotton from "@/pages/Cotton";
import NotFound from "@/pages/not-found";

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

          {/* ✅ FIXED ORDER */}
          <Route path="/blog/:slug" component={BlogDetail} />
          <Route path="/blog" component={Blog} />

          <Route path="/cotton-fabric" component={Cotton} />
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp */}
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