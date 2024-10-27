import Image from 'next/image'

const PopContent = (props)=>{
    if(props.paddingLeft == true){
        return(
                <div className="leftContent">
                    <img src={props.link}
                    alt="Sample Imageだよ" />
                </div>
                )
        } else {
            return (
                <div className="rightContent">
                    <img src={props.link}
                    alt="Sample Imageだよ" />
                </div>
                )
            }

    }

export default PopContent
