import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Gui from "./gui";
import FolderIcon from "@material-ui/icons/Folder";
import Favorate from "../component/favorate";
const useStyles = makeStyles({
  root: {
    width: 700
  }
});

function SimpleBottomNavigation(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Recents"
        icon={<RestoreIcon />}
        onClick={() => {
          props.getDetail("Recents");
        }}
      />
      <BottomNavigationAction
        label="Favorites"
        icon={<FavoriteIcon />}
        onClick={() => {
          props.getDetail("Favorites");
        }}
      />
      <BottomNavigationAction
        label="Courses"
        icon={<FolderIcon />}
        onClick={() => {
          props.getDetail("Courses");
        }}
      />
    </BottomNavigation>
  );
}

const courseData = require("../json/course.json");

export default class MainGuide extends React.Component {
  constructor() {
    super();
    this.state = {
      view: ""
    };
  }

  getDetail = text => {
    this.setState({ view: text });
  };

  conditonalRender = () => {
    switch (this.state.view) {
      case "Courses":
        return <Gui name={this.view} data={courseData} />;
      case "Recents":
        return <div>course</div>;
      case "Favorites":
        return <Favorate />;
      default:
        return <div>default</div>;
    }
  };

  render() {
    return (
      <div style={{ display: "inline-block", top: "50%", left: "50%" }}>
        <SimpleBottomNavigation getDetail={this.getDetail} />
        {this.conditonalRender()}
      </div>
    );
  }
}
