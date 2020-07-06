import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import AppleIcon from "@material-ui/icons/Apple";
import "../../../../../src/App.css";
import Button from "@material-ui/core/Button";

const ButtonApple = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      id="transition"
      style={{
        zIndex: "400",
        background: "rgb(31, 42, 75)",
        fontSize: "14px",
        fontWeight: "600",
        height: "85px",
        width: "230px",
        borderRadius: "20px",
      }}
    >
      <AppleIcon style={{ fontSize: "50px" }} />
      <Typography
        style={{
          color: "white",
          fontWeight: "bold",
          width: "130px",
          lineHeight: "25px",
          textAlign: "left",
          textTransform: "none",
          marginLeft:'2vh'
        }}
      >
        Download on the
        <br />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            textTransform: "none",
          }}
        >
          App Store
        </span>
      </Typography>
      <br />
    </Button>
  );
};
export default ButtonApple;
