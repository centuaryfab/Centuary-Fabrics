import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Products from "@/pages/Products";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}