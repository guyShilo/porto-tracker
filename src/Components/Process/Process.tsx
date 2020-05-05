import React, { useState } from "react";
import "./style/style.scss";
import { ProgressBar } from "./ProgressBar";
import {
  AiOutlineMail,
  AiOutlineCopy,
  AiFillCheckCircle,
} from "react-icons/ai";
import { animationHelpers } from "src/Utils";
import { motion } from "framer-motion";
import CopyToClipboard from "react-copy-to-clipboard";

export const Process: React.FC = () => {
  document.title = "PortuTrack | תהליך האזרחות";
  const { createVariants } = animationHelpers;
  const [isCopied, setIsCopied] = useState(false);
  return (
    <div className="portoProcess">
      <div className="processHeader">
        <h3 className="text-center p-1">
          אז גם אתם רוצים להגשים את החלום הפורטוגלי?
        </h3>
        <p className="text-center">הכנו לכם הסבר קצר על התהליך הבקשה</p>
      </div>
      <div className="d-flex justify-content-center">
        <ProgressBar />
      </div>
      <hr className="bg-dark w-75" />
      <div
        className="processContent text-light"
        style={{
          background: "rgba(47,47,47,0.8)",
          padding: "0.3rem",
          borderRadius: "1rem",
        }}
      >
        <p className="text-center">
          <b>איך אני מקבל מספר מעקב?</b>
          <br />
          אם עברו לפחות שבועיים מיום שליחת התיק תוכלו לפנות באימייל לקונסרבטוריה
          על מנת לקבל את קוד המעקב בעל 12 הספרות.
          <br />
        </p>
        <p className="text-center ">
          <motion.a
            variants={createVariants("scale", 0.95, 1.05)}
            initial="variantA"
            whileHover="variantB"
            whileTap={{ scale: 0.85 }}
            className="btn btn-light p-2"
            href="mailto: rcentrais.naturalizacao2@irn.mj.pt"
            target="_blank"
          >
            <b className="m-1 text-success">לחצו עליי לשליחת מייל</b>
            {<AiOutlineMail size={25} className="text-success" />}
          </motion.a>
        </p>
        <CopyToClipboard
          onCopy={() => setIsCopied(true)}
          text={`Olá Por favor,\n
            quero obter o meu código pessoal para o novo site.
            Anexado é o recibo pessoal para prova de identidade,
            Muito obrigado.`}
        >
          <section className="text-center">
            צרפו למייל את קבלת התשלום, וכדאי גם צילום דרכון (העמוד עם התמונה).
            <br />
            <b> אנחנו ממליצים על הנוסח הבא:</b>
            <br />
            <motion.button             variants={createVariants("scale", 0.95, 1.05)}
            initial="variantA"
            whileHover="variantB"
            whileTap={{ scale: 0.85 }} className="m-1 btn-light btn-sm text-success">
              <b> {!isCopied ? "העתק את המכתב" : "המכתב הועתק!"}</b>
              {!isCopied ? (
                <AiOutlineCopy className="m-1" size={17} />
              ) : (
                <AiFillCheckCircle className="m-1" size={17} />
              )}
            </motion.button>
            <p
              dir="ltr"
              className="w-75 text-light text-left"
              style={{ borderRadius: "1rem", padding: "0.3rem" }}
            >
              <span>
                Olá Por favor,
                <br />
                quero obter o meu código pessoal para o novo site.
                <br />
                Anexado é o recibo pessoal para prova de identidade,
                <br /> Muito obrigado.
              </span>
            </p>
          </section>
        </CopyToClipboard>
      </div>
    </div>
  );
};
