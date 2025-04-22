import * as motion from "motion/react-client"

export default function EnterAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={textStyle}
        >
            Hello, world!
        </motion.div>
    )
}

/**
 * ==============   Styles   ================
 */

const textStyle = {
    display: "inline-block",
    padding: "20px 40px",
    backgroundColor: "#dd00ee",
    color: "#ffffff",
    
    borderRadius: "12px",
    textAlign: "center",
   
}
