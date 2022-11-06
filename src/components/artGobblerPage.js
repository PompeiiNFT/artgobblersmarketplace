import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function ArtGobblerPage(props) {
  let bidButton;

  if (props.biddable) {
    bidButton = (
      <Button size="small">
        <Link to={props.title}>Click to Bid</Link>
      </Button>
    );
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="350" image={props.image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>{bidButton}</CardActions>
    </Card>
  );
}

export default ArtGobblerPage;
