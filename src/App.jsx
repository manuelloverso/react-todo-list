import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  return (
    <div className="container mx-auto">
      <AppHeader />
      <main>
        <Form />

        <List />
      </main>

      <AppFooter />
    </div>
  );
}
