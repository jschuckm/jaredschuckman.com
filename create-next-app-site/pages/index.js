import Header from "../components/Header"; 
import Body from "../components/Body";
import HeadSEO from "../components/HeadSEO";

export default function Home() {
  return (
    <div class="App">
      <HeadSEO />
      <Header></Header>
      <Body></Body>
    </div>
  );
}