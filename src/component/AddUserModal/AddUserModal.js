import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAddNewUserMutation } from "../../redux/usersApi";
import { toast } from "react-toastify";

function AddUserModal({ open, setOpen, users }) {
  const [cardId, setCardId] = useState("");
  const [userName, setUserName] = useState("");
  const [addNewUser] = useAddNewUserMutation();

  let isValid = Boolean(cardId) && Boolean(userName);

  const handleClose = () => {
    setOpen(false);
    setCardId("");
    setUserName("");
  };

  async function handleAddUser() {
    const data = { cardId: cardId, userName: userName, monitors:[], chairs:[]};
    const isUserAdded = users.filter(
      (user) => Number(user.cardId) === Number(cardId)
    );
    if (isUserAdded.length) {
      toast.error("Працівник з таким номером Сard Id вже існує!");
    } else {
      await addNewUser(data);
      toast.success("Працівника успішно додано!");
      setOpen(false);
      setCardId("");
      setUserName("");
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Додати працівника</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Щоб додати працівника, будь ласка введіть номер ID карти та прізвище
            працівника
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="cardId"
            label="Card ID"
            type="number"
            fullWidth
            variant="standard"
            value={cardId}
            onChange={(e) => setCardId(e.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            label="Прізвище та ім'я працівника"
            type="email"
            fullWidth
            variant="standard"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відмінити</Button>
          <Button disabled={!isValid} onClick={handleAddUser}>
            Додати
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddUserModal;
