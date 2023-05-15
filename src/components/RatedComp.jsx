/* eslint-disable react/prop-types */
import img from "../assets/img/Onlin.png"
export default function RatedComp (props) {

  return (
    <div style={stylesList.container}>
      <div >
        <img style={stylesList.img} src={img} alt="img" />
      </div>
      <div style={stylesList.selectedPharagraphContainer}>
        <p style={stylesList.selectedPharagraph}>You selected {props.rating} out of 5</p>
      </div>
      {/* component footer part */}
      <h1 style={stylesList.mainHeader}>Thank you!</h1>
      <p style={stylesList.appreciateLetterParagraph}>We appreciate you taking the time to give a rating. 
        If you ever need more support, 
        don’t hesitate to get in touch!
      </p> 
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
    margin: "auto",
  },
  img: {
    width: "162px",
    height: "108px",
    marginLeft: "121px",
    marginTop: "45px",
    marginRight: "129px",
  },
  selectedPharagraphContainer: {
    width: "193px",
    height: "32px",
    borderRadius: "22.5px",
    background: "#262E38",
    marginLeft: "110px",
    marginTop: "32px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedPharagraph: { 
    color: "#FC7614",
    lineHeight: "24px",
    fontSize: "15px",
    fontWeight: "400",
    width: "154px",
    height: "24px",
  },
  mainHeader: {
    width: "145px",
    height: "43px",
    marginLeft: "135px",
    marginTop: "32px",
    marginBottom: "7px",
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "35.45px",
    fontStyle: "normal",
    display: "flex",
    alignItems: "center",

  },
  appreciateLetterParagraph: {
    color: "#969FAD",
    width: "340px",
    height: "72px",
    marginLeft: "32px",
    marginTop: "0px",
    fontWeight: "400",
    fontSize: "15px",
    lineHeight: "24px",
    textAlign: "center",
    fontStyle: "normal",
    paddingTop: "0px"

  }
}