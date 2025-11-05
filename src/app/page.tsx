"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container text-center py-5"
    >
      <h1 className="display-4 mb-3">การสร้างเว็บเท็มเพลดครั้งแรก</h1>
      <p className="lead mb-4">
        ตัวอย่างนี้สร้างด้วย Next.js + Bootstrap 5 + Framer Motion เพื่อการเรียนรู้การทำเว็บสมัยใหม่
      </p>
      <div className="d-flex justify-content-center gap-3">
        <Link href="/about" className="btn btn-primary btn-lg">About</Link>
        <Link href="/contact" className="btn btn-outline-primary btn-lg">Contact</Link>
      </div>
    </motion.div>
  );
}
