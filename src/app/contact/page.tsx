"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="container py-5"
    >
      <motion.h1 
        className="text-center mb-5 fw-bold text-primary display-4"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        ติดต่อเรา
      </motion.h1>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <motion.div 
            className="card border-0 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="card-body p-5">
              <form>
                <div className="mb-4">
                  <label className="form-label fw-semibold">ชื่อของคุณ</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg shadow-sm" 
                    placeholder="กรุณากรอกชื่อ"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">อีเมล</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg shadow-sm" 
                    placeholder="example@email.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label fw-semibold">ข้อความ</label>
                  <textarea 
                    className="form-control form-control-lg shadow-sm" 
                    rows={5} 
                    placeholder="กรุณากรอกข้อความ..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg px-5 py-3 shadow"
                  >
                    ส่งข้อความ
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}