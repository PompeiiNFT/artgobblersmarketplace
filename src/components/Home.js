import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function home() {
  return (
    <div>
      <h1>This is the home page</h1>
      <Link to="test">Click to view our test page</Link>
    </div>
  );
}

export default home;
