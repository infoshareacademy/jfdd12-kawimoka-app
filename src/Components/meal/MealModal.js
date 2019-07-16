import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { MealCardFull } from './MealCardFull';
import styles from './Meal.module.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border: "none",
    borderRadius: "10px",
    backgroundColor: "rgb(128, 238, 210)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement(document.getElementById('root'))

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
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className={styles.moreInfoButton} onClick={this.openModal}>More Info</button>
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
            onMealClose={this.closeModal}/>

        </Modal>
      </div>
    );
  }
}

