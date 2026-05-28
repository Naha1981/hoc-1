import { Switch, Route, Router as WouterRouter } from "wouter";
import { Toaster } from "sonner";
import { Index } from "@/pages/Index";
import { Services } from "@/pages/Services";
import { CaseStudy } from "@/pages/CaseStudy";
import { Request } from "@/pages/Request";
import { NotFound } from "@/pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Index} />
      <Route path="/services" component={Services} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/request" component={Request} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
      <Toaster />
    </WouterRouter>
  );
}

export default App;
