/* eslint-disable react/prop-types */
import { useState } from "react"
import "./App.css"

export default function SubmitAndRate ({setRate, setShowThankYouPage}) {

  const [isHovering, setIsHovering] = useState(false);
  const [activeRate, setActiveRate] = useState({
    oneStars: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  })
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false)
  };
  const handleSubmit = () => {
    // if (!rate) return;
    setShowThankYouPage(true)
  }

  return (
    <div>
      <div style={styleSubmit.rateCircule}> 
        <div className={activeRate.oneStars ? "circule active" : "circule" }
        onClick={() => {setActiveRate({
          oneStars: true,
          twoStars: false,
          threeStars: false,
          fourStars: false,
          fiveStars: false,
        })
        setRate(1)
      }}
        >1</div>
        <div className={activeRate.twoStars ? "circule active" : "circule" }
        onClick={() => {setActiveRate({
          oneStars: false,
          twoStars: true,
          threeStars: false,
          fourStars: false,
          fiveStars: false,
        })
        setRate(2)
      }}
        >2</div>
        <div className={activeRate.threeStars ? "circule active" : "circule" }
        onClick={() => {setActiveRate({
          oneStars: false,
          twoStars: false,
          threeStars: true,
          fourStars: false,
          fiveStars: false,
        })
        setRate(3)
      }}
        >3</div>
        <div className={activeRate.fourStars ? "circule active" : "circule" }
        onClick={() => {setActiveRate({
          oneStars: false,
          twoStars: false,
          threeStars: false,
          fourStars: true,
          fiveStars: false,
        })
        setRate(4)
      }}
        >4</div>
        <div className={activeRate.fiveStars ? "circule active" : "circule" }
        onClick={() => {setActiveRate({
          oneStars: false,
          twoStars: false,
          threeStars: false,
          fourStars: false,
          fiveStars: true,
        })
        setRate(5)
      }}
        >5</div>
      </div>
      <div style={styleSubmit.submitContainer}>
        <button
          onClick={handleSubmit}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
          style={
          isHovering ? styleSubmit.submitBtnHover :
          styleSubmit.submitBtn}>
          submit</button>
      </div>
    </div>
  )
}

const styleSubmit = {
  rateCircule: {
    display: "flex",
    paddingLeft: "32px",
    marginBottom: "32px"
  },
  submitContainer: {
    display: "flex",
    justifyContent: "center"
  },
  submitBtn: {
    width: "341px",
    height: "45px",
    borderRadius: "22.5px",
    background: "#FC7614",
    color: "#FFFFFF",
    fontWeight: "700",
    textTransform: "upperCase",
    letterSpacing: "2px",
    fontSize: "15px",
    border: "none",
    marginBottom: "32px",
    cursor: "pointer",
  },
  submitBtnHover:{
    width: "341px",
    height: "45px",
    borderRadius: "22.5px",
    color: "#FC7614",
    background: "#FFFFFF",
    fontWeight: "700",
    textTransform: "upperCase",
    letterSpacing: "2px",
    fontSize: "15px",
    border: "none",
    marginBottom: "32px",
    cursor: "pointer",
  }
} 

