<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { MealCardFull } from './MealCardFull';
import './Meal.css'
=======
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { MealCardFull } from "./MealCardFull";
import "./Meal.css";
>>>>>>> develop
import Paper from "material-ui/Paper";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "10px",
    
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById("root"));

export class MealModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <Paper zDepth={3}>
<<<<<<< HEAD
        <button className={"moreInfoButton"} onClick={this.openModal}>More Info</button>
=======
        <button className={"moreInfoButton"} onClick={this.openModal}>
          More Info
        </button>
>>>>>>> develop
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <MealCardFull
            meal={this.props.meal}
            onAdd={this.props.onAdd}
            onMealClose={this.closeModal}
          />
        </Modal>
      </Paper>
    );
  }
}
