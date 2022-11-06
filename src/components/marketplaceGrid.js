import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import ArtGobblerPage from "./artGobblerPage";
import mockdata from "../assets/mockdata";
function MarketplaceGrid() {
  return (
    <Container>
      <Grid container spacing={2}>
        {mockdata.map((data, index) => {
          return (
            <Grid item key={index} xs={4}>
              <ArtGobblerPage
                title={data.title}
                description={data.description}
                image={data.baseURI}
                biddable={true}
              ></ArtGobblerPage>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MarketplaceGrid;
