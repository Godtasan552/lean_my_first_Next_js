"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container py-5 text-center"
    >
      <h1 className="mb-3">About This Template</h1>
      <p className="lead">
        ตัวอย่างนี้ถูกสร้างขึ้นเพื่อเรียนรู้การสร้างเว็บเท็มเพลดครั้งแรก
        โดยใช้ Next.js + Bootstrap 5 + Framer Motion
        เพื่อทำความเข้าใจ layout, component, navbar, footer และ animation
      </p>
    </motion.div>
  );
}
