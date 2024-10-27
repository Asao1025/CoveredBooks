import PopContent from './popContent'

export default function PopContents() {
    return(
        <div className="popContents">
            <PopContent link={"./image/pops/testPop1.jpg"}
            paddingLeft={true}/>
            <PopContent link={"./image/pops/testPop1.jpg"}
                        paddingLeft={false}/>
        </div>
        )
 }

