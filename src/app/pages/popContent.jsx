const PopContent = (props)=>{
    if(props.paddingLeft == true){
        return(
                <div className="leftContent">
                    <a href={props.link}>
                        <img src={props.img}
                        alt="Sample Imageだよ" />
                    </a>
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
