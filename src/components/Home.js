import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import MarketplaceGrid from "./marketplaceGrid";
function home() {
  return (
    <div>
      <Link to="test">Click to view our test page</Link>
      <MarketplaceGrid></MarketplaceGrid>
    </div>
  );
}

export default home;
