/* eslint-disable react/prop-types */
import  {AiFillStar} from "react-icons/all"
import SubmitAndRate from "./SubmitAndRate"

export default function RateCard ({setRating, setShowThankYouPage}) {
  return (
    <div style={stylesList.container}>
      <div style={stylesList.starIconContainer}>
        <AiFillStar style={stylesList.starIcon}/>
      </div>
      {/* question and rules */} 
      <div>
        <h2 style={stylesList.mainQuestion}>How did we do?</h2>
        <p style={stylesList.yourRateRuls}>
          Please let us know how we did with your support request. 
          All feedback is appreciated to help us improve our offering!
        </p>
      </div>  
      <SubmitAndRate setRate={setRating} setShowThankYouPage={setShowThankYouPage}/>   
    </div>
  )
}


const stylesList = {
  container: {
    width: "412px",
    height: "416px",
    borderRadius: "30px",
    background: "radial-gradient(#232A34 0%, #181E27 100%)",
    position: "absolute",
    left: "0%",
    top: "0%",
    bottom: "0%",
    right: "0%",
    margin: "auto"
  },
  starIconContainer: {
    width: "48px",
    height: "48px",
    background: "#262E38",
    marginTop: "32px",
    marginLeft: "32px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",   
  },
  starIcon: {
    color: "#FC7614",
    width: "16.75px",
    height: "16px"
  },
  mainQuestion: {
    width: "201px",
    height: "43px",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "35.45px",
    color: "#FFFFFF",
    marginLeft: "32px",
    marginBottom: "7px",
    marginTop: "0px",
    paddingTop: "7.5px",
    boxSizing: "border-box"
  },
  yourRateRuls: {
    width: "340px",
    height: "72px",
    color: "#969FAD",
    marginLeft: "32px",
    marginBottom: "24px",
    marginTop: "0px",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "24px",
  }
}