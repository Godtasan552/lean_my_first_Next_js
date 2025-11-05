"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container py-5"
    >
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <motion.div 
            className="text-center bg-light p-5 rounded-4 shadow-sm"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h1 className="display-4 mb-4 text-primary fw-bold">About This Template</h1>
            <p className="lead text-secondary mb-4 fs-4">
              ตัวอย่างนี้ถูกสร้างขึ้นเพื่อเรียนรู้การสร้างเว็บเท็มเพลดครั้งแรก
            </p>
            <hr className="my-4" />
            <p className="fs-5">
              โดยใช้ Next.js + Bootstrap 5 + Framer Motion
              เพื่อทำความเข้าใจ layout, component, navbar, footer และ animation
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}