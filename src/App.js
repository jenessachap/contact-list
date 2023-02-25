import React from "react";
import { Navbar, Container, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import CreateContact from "./Components/createContact";
import ContactList from "./Components/contactList"

const App = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [listRefresh, setListRefresh] = React.useState(false);

  function AddNewContact(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CreateContact onHide={() => { setModalShow(false); setListRefresh(true) }} />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container className="navbar">
              Contact List
          </Container>
        </Navbar>
      </header>
      <div className="contact-list-body ">
        <div className="contact-list-container">
          <Button variant="outline-dark" size="lg" onClick={() => setModalShow(true)}>
            +
          </Button>
          <ContactList
            listRefresh={listRefresh}
            setListRefresh={setListRefresh}
          />
        </div>
      </div>
      <AddNewContact
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default App;
