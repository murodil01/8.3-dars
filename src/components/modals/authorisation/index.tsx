import { Modal } from "antd";
import { useReduxSelector } from "../../../hooks/useRedux";
import { useDispatch } from "react-redux";
import { setOpenAuthoritastionModalVisiblity } from "../../../redux/modal-slice";
import Login from "./login";
import Register from "./register";
import { useState } from "react";

const AuthorisationModal = () => {
  const { openAuthorisationModalVisiblty } = useReduxSelector(
    (state) => state.modalSlice
  );
    
  const dispatch = useDispatch();
  const [editPage, setEditPage] = useState("login");

  return (
    <Modal
      open={openAuthorisationModalVisiblty}
      footer={false}
      width={500}
      onCancel={() => dispatch(setOpenAuthoritastionModalVisiblity())}
    >
      <div className="p-5">
        <div className="flex items-center justify-center gap-5 mb-6">
          <h3
            onClick={() => setEditPage("login")}
            className={`cursor-pointer text-lg font-semibold ${
              editPage === "login" ? "text-green-600" : "text-gray-600"
            }`}
          >
            Login
          </h3>
          <h3>|</h3>
          <h3
            onClick={() => setEditPage("register")}
            className={`cursor-pointer text-lg font-semibold ${
              editPage === "register" ? "text-green-600" : "text-gray-600"
            }`}
          >
            Register
          </h3>
        </div>

        {editPage === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default AuthorisationModal;
