import { Switch, Route } from "wouter";

import Products from "@/pages/Products";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Switch>
        <Route path="/" component={Products} />
        <Route path="/products" component={Products} />
      </Switch>
    </div>
  );
}