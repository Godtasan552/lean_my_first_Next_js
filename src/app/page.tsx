"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container text-center py-5"
    >
      <motion.h1 
        className="display-3 mb-4 fw-bold text-primary"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        การสร้างเว็บเท็มเพลดครั้งแรก
      </motion.h1>
      <motion.p 
        className="lead mb-5 text-secondary fs-4 mx-auto"
        style={{ maxWidth: '800px' }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        ตัวอย่างนี้สร้างด้วย Next.js + Bootstrap 5 + Framer Motion เพื่อการเรียนรู้การทำเว็บสมัยใหม่
      </motion.p>
      <motion.div 
        className="d-flex justify-content-center gap-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link href="/about" className="btn btn-primary btn-lg px-5 shadow-sm">
          About
        </Link>
        <Link href="/contact" className="btn btn-outline-primary btn-lg px-5 shadow-sm">
          Contact
        </Link>
      </motion.div>
    </motion.div>
  );
}