import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ArtGobblerPage from "./artGobblerPage";

function test() {
  return (
    <div>
      <h1> my listings</h1>
      <ArtGobblerPage
        title="test"
        description="test description"
        image=""
        biddable={true}
      ></ArtGobblerPage>
      <h1> my art I own</h1>
      <ArtGobblerPage
        title="hello world"
        description="this is a description"
        image=""
        biddable={false}
      ></ArtGobblerPage>
    </div>
  );
}

export default test;
