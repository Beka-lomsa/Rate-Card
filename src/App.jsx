import { useState } from "react"
import RateCard from "./components/RateCard"
import  "./index.css"
import RatedComp from "./components/RatedComp"


export default function App() {
  const [showThankYouPage, setShowThankYouPage] = useState(false); 
  const [rating, setRating] = useState(null);

  return (
    <div>
      {showThankYouPage ? <RatedComp rating={rating}/> : <RateCard rating={rating} setRating={setRating}
        setShowThankYouPage={setShowThankYouPage}
      />}

      {/* <RateCard/> */}
      {/* <RatedComp/> */}
    </div>
  )
}

 