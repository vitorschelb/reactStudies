import Accordion from "./components/Accordion";

function App() {
  const items = [
    { label: "Can I use React on a project?", content: "You can you React on any project you want.", id: 1 },
    { label: "Can I use JavaScript on a project?", content: "You can you JavaScript on any project you want.", id: 2 },
    { label: "Can I use CSS on a project?", content: "You can you CSS on any project you want.", id:3 },
  ];
  return <Accordion items = {items}/>;
}

export default App;
