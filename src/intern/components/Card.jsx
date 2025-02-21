import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardWrap = ({ title, url }) => (
    <Card  elevation={7} height="20" sx={{ m:"15px"}}>
    <CardContent sx={{ p:"10px", '&:last-child': { pb: 0, pt:0 }}}>
    <Typography variant="h7" component="div">
      <h3>{title}</h3>
      </Typography>
      </CardContent>
    </Card>

);

export default CardWrap;
