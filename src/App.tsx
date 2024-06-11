import { useState } from "react";

function App() {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="first_name"
        value={state.first_name}
        onChange={(e) =>
          setState((pre) => ({ ...pre, first_name: e.target.value }))
        }
      />
      <button className="font-semibold" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
