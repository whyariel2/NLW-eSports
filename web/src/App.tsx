// JSX: JavaScript + XML (HTML)

//React: A group of functions that return JS + CSS + HTML (components)

//This tis a property
interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>;
}

//This is a component
function App() {
  return (
    <div>
      <Button title='Send 1' />
      <Button title='Send 2' />
      <Button title='Send 3' />
      <Button title='Hello World' />
    </div>
  );
}

export default App;
