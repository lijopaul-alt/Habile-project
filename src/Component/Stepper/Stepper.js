import React, { Component } from "react";
import classes from "./Body.module.css";

class Stepper extends Component {
  state = {
    model: [
      {
        pageName: "Borrower company Info",
        fields: [
          {
            fieldId: "1",
            fieldName: "Property Name",
            type: "string",
          },
          {
            fieldId: "2",
            fieldName: "Property Type",
            type: "dropdown",
            selectableValues: ["Own House", "Rented"],
          },
          {
            fieldId: "3",
            fieldName: "Number of Units",
            type: "dropdown",
            selectableValues: ["1", "2"],
          },
          {
            fieldId: "4",
            fieldName: "Property Address",
            type: "textarea",
          },
          {
            fieldId: "5",
            fieldName: "File Attachement",
            type: "file",
          },
        ],
      },
      {
        pageName: "DirectorInfo",
      },
    ],
  };
  render() {
    return (
      <div className={classes.Body}>
        <div className={classes.Container}>
          <div className={classes.Child}>
            <p className={classes.num}>1</p>
            <p className={classes.para}>Browser company info</p>
          </div>
          <div className={classes.Dots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.Child}>
            <p className={classes.num}>2</p>
            <p className={classes.para}>Director info</p>
          </div>
          <div className={classes.Child}>
            <p className={classes.num}>3</p>
            <p className={classes.para}>financial info</p>
          </div>
          <div className={classes.Child}>
            <p className={classes.num}>4</p>
            <p className={classes.para}>Past performance Details</p>
          </div>
          <div className={classes.Child}>
            <p className={classes.num}>5</p>
            <p className={classes.para}>Document Upload</p>
          </div>
        </div>

        <div className={classes.forms}>
          <div className={classes.content}>
            <h2>{this.state.model[0].pageName}</h2>
            <form>
              <div className={classes.first}>
                {this.state.model[0].fields.slice(0, 3).map((element) => {
                  return (
                    <label key={element.fieldId} className={classes.label}>
                      <p className={classes.para1}>{element.fieldName}</p>
                      <input
                        type={element.type}
                        className={classes.input}
                        placeholder={element.fieldName}
                      ></input>
                    </label>
                  );
                })}
              </div>
              {this.state.model[0].fields.slice(3, 4).map((element) => {
                return (
                  <label key={element.fieldId}>
                    <p className={classes.para2}>{element.fieldName}</p>
                    <input
                      placeholder={element.fieldName}
                      type={element.type}
                      className={classes.input1}
                    ></input>
                  </label>
                );
              })}
              {this.state.model[0].fields.slice(4, 5).map((element) => {
                return (
                  <label key={element.fieldId}>
                    <p className={classes.para2}>{element.fieldName}</p>
                    <div className={classes.input2}>
                      <p>
                        <span>Browse</span> or Drag and Drop to attach a file
                      </p>
                    </div>
                  </label>
                );
              })}
            </form>
          </div>
        </div>
        <div className={classes.footer}>
          <div>
            <button type="submit" className={classes.btn1}>
              Back
            </button>
          </div>
          <div>
            <button type="submit" className={classes.btn2}>
              continue
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stepper;
