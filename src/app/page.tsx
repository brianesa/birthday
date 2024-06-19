"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Delayed from "./delayed";
import { TypeAnimation } from "react-type-animation";
import Modal from "./modal";
import { useEffect, useState } from "react";
import { setTimeout } from "timers";
import { scroller, Element, animateScroll } from "react-scroll";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: -20,
    opacity: 1,
  },
};

export default function Home() {
  const data = [
    {
      nama: "Si Paling Engineer, Brian Esa Chrisnando, S.T.",
      quotes: "Mbo dak ado mago",
      delay: 0,
      gambar: "/boy.jpg",
    },
    {
      nama: "Si Paling Chef, Olivia Suci Candela, S.Tr",
      quotes: "Oyi punyo kawan, namonyo Ani Sida. Rumahnyo di pinggir jalan",
      delay: 2000,
      gambar: "/oyi.jpg",
    },
    {
      nama: "Si Calon Mahasiswi, Tiara Suci Clarissa, (Gelar nyusul, hehe semangat)",
      quotes: "Yuk main dokten doktenan",
      delay: 4000,
      gambar: "/sasa.jpg",
    },
    {
      nama: "Si Paling Santri, Vionalita Suci Brilianti, (Gelar nyusul, hehe semangat)",
      quotes: "Aaaappoooo mbaaaa'....",
      delay: 6000,
      gambar: "/tanti.jpg",
    },
    {
      nama: "Si Paling Seniman, Fiftha Suci Dianisa, (Gelar nyusul, hehe semangat)",
      quotes: "Adek mau jadi anak - anak terus biak dak disuruh suruh",
      delay: 8000,
      gambar: "/uci.jpg",
    },
  ];
  const [isOpen, toggle] = useState(true);

  function handlOpenModal(open: boolean) {
    toggle(open);
  }
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    setAudio(new Audio("/hbd.mp3"));
    setTimeout(() => {
      animateScroll.scrollToBottom();
    }, 4000);
    setTimeout(() => {
      animateScroll.scrollToBottom();
    }, 9000);

    setTimeout(() => {
      animateScroll.scrollToTop();
    }, 12000);
    setTimeout(() => {
      animateScroll.scrollToBottom();
    }, 16500);
    setTimeout(() => {
      animateScroll.scrollToBottom();
    }, 21000);
  }, []);
  const [play, setPlay] = useState(false);
  return (
    <main className={styles.main}>
      {!play ? (
        <img
          src="/play.png"
          style={{ width: "50%", height: "50%" }}
          onClick={() => {
            audio?.play();
            setPlay(true);
          }}
          alt="play"
        />
      ) : (
        <>
          <span style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            <Delayed waitBeforeShow={11000}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  // stiffness: 260,
                  // damping: 150,
                }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/ayah.jpg"
                    alt="Ayah"
                    style={{
                      width: 150,
                      height: 200,
                      backgroundColor: "blue",
                      objectFit: "cover",
                    }}
                  />
                  <i>{`"Yo maleh mbo" ~ `}</i>
                  <div>Kanjeng Papi, Suhartono</div>
                </div>
              </motion.div>
            </Delayed>
            <Delayed waitBeforeShow={13000}>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  bounce: 0.9,
                  // stiffness: 260,
                  // damping: 150,
                }}
                style={{ textAlign: "center" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/ibu.jpg"
                    alt="Ibu"
                    style={{
                      width: 150,
                      height: 200,
                      backgroundColor: "blue",
                      objectFit: "cover",
                    }}
                  />
                  <i>{`"Kuliah tu yang gampang cari kerjo" ~ `}</i>
                  <div>Kanjeng Mami, Cik Ilun Nelly, S.Pd</div>
                </div>
              </motion.div>
            </Delayed>
          </span>
          <br />
          <br />
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {data.map((x, i) => {
              return (
                <Delayed waitBeforeShow={x.delay}>
                  <motion.div
                    // key={index}
                    className="item"
                    variants={item}
                    transition={{
                      damping: 150,
                      repeatDelay: 600,
                      duration: 1.5,
                    }}
                    style={{ float: "left", textAlign: "center" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingRight: 20,
                      }}
                    >
                      <img
                        src={x.gambar}
                        alt={x.gambar}
                        style={{
                          width: 150,
                          height: 200,
                          backgroundColor: "blue",
                          objectFit: "cover",
                        }}
                      />
                      <i>{`"${x.quotes}" ~ `}</i>
                      <div>{x.nama}</div>
                    </div>
                  </motion.div>
                </Delayed>
              );
            })}
          </motion.ul>
          <Element name="elem" id="elem">
            <Delayed waitBeforeShow={15000}>
              <TypeAnimation
                sequence={[
                  "Selamat ulang tahun bu, semoga panjang umur, sehat selalu, dan dimurahkan rezekinya. Aamiin 🤲🎂",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{
                  fontSize: "2em",
                  display: "inline-block",
                  textAlign: "center",
                }}
                // repeat={Infinity}
              />
            </Delayed>
          </Element>
          <Delayed waitBeforeShow={22000}>
            <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "blue",
                }}
              >
                <img
                  src="/kami.jpg"
                  alt="kami"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "blue",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Modal>
          </Delayed>
        </>
      )}
    </main>
  );
}
