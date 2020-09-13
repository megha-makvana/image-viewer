import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import "./AvatarHeader.css";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const changeToDate = (created_time) => {
  var date = new Date(parseInt(created_time));
  return date.toDateString();
};

const AvatarHeader = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} direction="row" alignItems="center">
      {props.data &&
        props.data.map((person) => (
          <Grid justify="center" item xs={6} key={person.id}>
            <Card className={classes.card} variant="outlined">
              <CardHeader
                avatar={
                  <Avatar
                    alt={person.user.full_name}
                    src={person.user.profile_picture}
                  />
                }
                title={person.user.username}
                subheader={changeToDate(person.caption.created_time)}
              />
              <CardMedia
                className={classes.media}
                image={person.images.standard_resolution.url}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {person.caption.text}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <span>{person.likes.count} likes</span>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default AvatarHeader;
