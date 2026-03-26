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
      <main className="flex-grow p-4">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/group-companies" component={GroupCompanies} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/cotton-fabric" component={Cotton} />
          <Route component={NotFound} />
        </Switch>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}