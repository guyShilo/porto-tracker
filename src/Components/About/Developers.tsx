import React from "react";
import { motion } from "framer-motion";
import { animationHelpers } from "src/Utils";
import { AiFillLinkedin } from "react-icons/ai";

const NadavsLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C5603AQH_HYYqC_kRuA/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=qXLJY4ig3Yf1hqCcH1rchBl6KNvw80q61Wg5wCAKhus";
const GuysLinkedIn =
  "https://media-exp1.licdn.com/dms/image/C4E03AQGFX8l9rHPNCg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=29CJcwhKzIrpdWvUv4h4UPMPzliwm0mTdutXfJz_4Io";


export const Developers: React.FC = () => {
  // Extracting the fade in animation from the utils file.
  const { FadeInAnimation } = animationHelpers;

  const profileImgStyle = {
    borderRadius: "50%",
    border: "3px solid white",
    width: "45%",
    margin: "auto",
  };
  return (
    <motion.section
      initial={FadeInAnimation.initialDefs}
      animate={FadeInAnimation.animationDefs}
      transition={FadeInAnimation.transitionDefs}
      className="developers"
    >
      <div className="aboutDeveloper">
        <p>
          <b>נדב טרגן</b>
        </p>
        <motion.div
          className="linkedInPic row p-1"
          variants={animationHelpers.createVariants("scale", 1, 1.15)}
          initial="variantA"
          whileHover="variantB"
        >
          <img
            style={profileImgStyle}
            src={NadavsLinkedIn}
            alt="NadavsLinkedIn"
          />
        </motion.div>
        <div className="row">
          <p className="flex-fill text-center">
            מקים השירות - <br />
            מתכנת העוסק בפיתוח תוכנה ובפרט בשירותי אוטומציה, <br /> סטודנט
            מצטיין למדעי המחשב וצאצא למגורשי ספרד.
          </p>
        </div>
        <motion.div
          className="linkedInIcon"
          variants={animationHelpers.createVariants("scale", 1, 1.35)}
          initial="variantA"
          whileHover="variantB"
        >
          <a
            className="text-light"
            href="https://www.linkedin.com/in/nadavtaragan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={40} />
          </a>
        </motion.div>
      </div>
      <div className="aboutDeveloper">
        <p>
          <b>גיא שילה</b>
        </p>
        <motion.div
          className="linkedInPic row p-1"
          variants={animationHelpers.createVariants("scale", 1, 1.15)}
          initial="variantA"
          whileHover="variantB"
        >
          <img
            id="guyPic"
            style={profileImgStyle}
            src={GuysLinkedIn}
            alt="GuysLinkedIn"
          />
        </motion.div>
        <div className="row">
          <p className="flex-fill text-center">
            מפתח צד לקוח - <br />
            מתכנת FullStack.
            <br />
            בוגר NetCraft Academy.
          </p>
        </div>
        <motion.div
          className="linkedInIcon"
          variants={animationHelpers.createVariants("scale", 1, 1.35)}
          initial="variantA"
          whileHover="variantB"
        >
          <a
            className="linkedInLinks text-light"
            href="https://www.linkedin.com/in/guyshilo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin size={40} />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
