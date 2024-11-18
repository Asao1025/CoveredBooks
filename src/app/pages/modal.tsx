import React from "react";

const Modal = (Props) =>　{
    const closeModal = () => {
        Props.setShowModal(false);
        }
    if (!Props.showFlg) return null;

    return (
        <div className="modalBack">
            <div className="modalContent">
                <div className="introductionImg">
                    <img
                    src="./image/pops/testPop1.jpg"
                    onClick={closeModal}
                    alt="Sample Imageだよ" />
                </div>
                <div className="introductionText">
                    ここに説明文を記載する<br/>
                </div>
            </div>
        </div>
      );
    };

export default Modal;
