import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import ArtGobblerPage from "./artGobblerPage";

function MarketplaceGrid() {
    // array is a state that we update when button is clicked from user to auction off another art page
    // 
  let artGobblerPagesInAuction = [
    <ArtGobblerPage
      title="test"
      description="test description"
      image=""
      biddable={true}
    ></ArtGobblerPage>,
    <ArtGobblerPage
      title="hello world"
      description="this is a description"
      image=""
      biddable={false}
    ></ArtGobblerPage>,
    <ArtGobblerPage
      title="hello world"
      description="this is a description"
      image=""
      biddable={false}
    ></ArtGobblerPage>,
    <ArtGobblerPage
      title="hello world"
      description="this is a description"
      image=""
      biddable={false}
    ></ArtGobblerPage>,
    <ArtGobblerPage
      title="hello world"
      description="this is a description"
      image=""
      biddable={false}
    ></ArtGobblerPage>,
  ];

  return (
    <Container>
      <Grid container spacing={2}>
        {artGobblerPagesInAuction.map((page, index) => {
          return (
            <Grid item key={index} xs={4}>
              {page}
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default MarketplaceGrid;
