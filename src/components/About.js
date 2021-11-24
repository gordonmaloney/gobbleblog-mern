import React, {useState} from 'react'

export const About = () => {

    const [open, setOpen] = useState(false)

    return (
        <div style={{color: "white"}}>
            
            <span style={{cursor: "pointer"}} onClick={() => setOpen(!open)}>
            <h3><u>What's this all about?</u></h3>
            </span>

            {open && <div style={{textAlign: "left", width: "40%", minWidth: "400px"}}>
            Gobbleblog is the answer to never getting a bad takeaway twice.
            <br /><br />
            Just log-in using your Google account, and get gobblin'.
            <br /><br />
            You can add a <i>gobble</i>, rate it, review it, and say what you got - then, when you order from that restaurant again, you can update its entry.
            <br /><br />
            It has a number of features to make it as user-friendly as possible, including voice-to-text so you can still record a review if your fingers are sticky, and the ability to scan in a picture of your receipt and have Gobbleblog transcribe it for you.
            <br /><br />
            If you are filling it out from your computer, you can scan a QR code to upload a picture of your receipt directly from your mobile.
            </div>}

        </div>
    )
}
