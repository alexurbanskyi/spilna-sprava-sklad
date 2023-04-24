import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useDeleteUserMutation } from "../../redux/usersApi";
import { toast } from 'react-toastify';
import { useUpdateMonitorMasterMutation } from "../../redux/devicesApi";
import { useUpdateChairMasterMutation } from "../../redux/chairApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteUserModal({ open, setOpen, userData, monitorsData, chairsData }) {

  const [deleteUser, {isError}] = useDeleteUserMutation();
  const [updateMonitorMaster] =useUpdateMonitorMasterMutation();
  const [updateChairMaster] = useUpdateChairMasterMutation();

  const handleClose = () => {
    setOpen(false);
  };

  async function deleteUserHandler() {

    if (userData?.monitors?.length !== 0) {
      for (const item of userData.monitors) {
        const [monitor] = monitorsData.filter((i) => i.monitorNo === item);
        await updateMonitorMaster({ ...monitor, master: null });
      }
    }

    if (chairsData?.chairs?.length !== 0) {
      for (const item of userData.chairs) {
        const [chair] = chairsData.filter((i) => i.chairNo === item);
        await updateChairMaster({ ...chair, master: null });
      }
    }

      await deleteUser(userData.id);
      toast.success("Працівника успішно видалено!")
      setOpen(false);
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Видалити працівника  - ${userData?.userName}`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Усі данні про працівника буде втрачено!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Відмінити</Button>
          <Button onClick={deleteUserHandler} color="error">
            Видалити
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteUserModal;