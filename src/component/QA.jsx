import React from "react";
import FavorBtn from "./addFavor";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles(theme => ({
  root: {
    Width: 400,
    height: 500
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    Width: "100%",
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  contents: {
    height: 255,
    overflow: "hidden",
    display: "block",
    width: "100%"
  }
}));

export default function TextMobileStepper(props) {
  const classes = useStyles();
  const theme = useTheme();
  let tutorialSteps = require(`../json/React.json`);
  if (props.courseName !== "React")
    tutorialSteps = require(`../json/${props.courseName}.json`);

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return (
    <div style={{ Width: 400, height: 200 }}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>
          <FavorBtn
            question={tutorialSteps[activeStep].question}
            answer={tutorialSteps[activeStep].answer}
            fileName="favorate"
            btnName="add to favor"
          />
          {tutorialSteps[activeStep].question}
        </Typography>
      </Paper>
      <div
        className={classes.contents}
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
          Width: 400
        }}
      >
        <input style={{ background: "gray" }}></input>
        <div style={{ width: "300px" }}>
          {tutorialSteps[activeStep].answer.split("<br>").map((item, index) => {
            return (
              <span key={index}>
                {item}
                <br />
              </span>
            );
          })}
        </div>
      </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
