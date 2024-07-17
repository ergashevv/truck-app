import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Android from './play.png'
import Ios from './app.png'
const ModalAnd = ({ open, setOpen }) => {

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>

            <Modal footer={false} style={{
                width: "1200px"
            }} open={open} onOk={handleOk} onCancel={handleCancel}>
                <div style={{
                    display: "flex",
                    width: "800px",
                    alignItems: "center"
                }} className="modal-inner">
                    <a href="#">
                        <img width={"100%"} src={Ios} alt="" />
                    </a>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.premiumeld.mobile">
                        <img width={"100%"} src={Android} alt="" />
                    </a>
                </div>
            </Modal>
        </>
    );
};
export default ModalAnd;