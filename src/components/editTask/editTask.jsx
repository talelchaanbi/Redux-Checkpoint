import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { updateTask } from "../../JS/actions/toDoActions.js";

const EditTask = ({ show, onClose, task }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setText(task?.description || "");
  }, [task]);

  const handleSave = () => {
    if (!task) return onClose();
    if (!text.trim()) return; // don't save empty
    dispatch(updateTask({ ...task, description: text.trim() }));
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  return (
    <Modal show={!!show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modifier la tâche</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="mb-2">
            <label className="form-label">Description</label>
            <input
              autoFocus
              className="form-control"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Modifier la description"
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={onClose}>
            Annuler
          </Button>
          <Button variant="primary" type="submit" disabled={!text.trim()}>
            Sauvegarder
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default EditTask;
