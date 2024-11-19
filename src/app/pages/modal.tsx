import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import { FloatButton} from 'antd';

const Modal = (Props) =>　{
    const closeModal = () => {
        Props.setShowModal(false);
        }
    if (!Props.showFlg) return null;

    return (
        <div className="modalBack">
            <div className="modalContent">

                <div className="ModalImg">
                    <img
                    src="./image/pops/testPop1.jpg"
                    alt="Sample Imageだよ" />
                    <FloatButton className="closeButton"
                        icon={<CloseOutlined />}
                        onClick={closeModal}
                        style={{
                           position: 'absolute',
                           top: -10,
                           right: -10 ,
                           zIndex: 10}}/>
                </div>
                <div className="modalText">
                    ここに説明文を記載する<br/>
                </div>
            </div>
        </div>
      );
    };

export default Modal;
