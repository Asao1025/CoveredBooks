'use client'

import Modal from './modal'
import React, {useState} from 'react'

const PopContent = (props)=>{
    const [showModal, setShowModal] = useState(false);
    const ShowModal = () => {
        setShowModal(true);
        }

    if(props.paddingLeft == true){
        return(
                <div className="leftContent">
                    <img src={props.img}
                    onClick={ShowModal}
                    alt="Sample Imageだよ" />
                    <Modal showFlg={showModal} setShowModal={setShowModal} />
                </div>
                )
        } else {
            return (
                <div className="rightContent">
                    <a href={props.link}>
                        <img src={props.img}
                        alt="Sample Imageだよ" />
                    </a>
                </div>
                )
            }
    }

export default PopContent
