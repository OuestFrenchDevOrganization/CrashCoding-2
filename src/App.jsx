import styled from "styled-components";
import Header from "./components/Header/Header";

function App() {
  return <Header />;
}

const CounterButton = styled.button`
  color: ${(p) => p.color ?? "red"};
`;

export default App;
