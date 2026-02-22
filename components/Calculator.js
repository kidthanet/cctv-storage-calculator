"use client";
import { useState, useEffect } from 'react';

export default function Calculator() {
  const [cameras, setCameras] = useState(4);
  const [days, setDays] = useState(30);
  const [resolution, setResolution] = useState(2048);
  const [compression, setCompression] = useState(1);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const bitrateInBps = resolution * 1024; 
    const totalBytes = (bitrateInBps * 3600 * 24 * days * cameras * compression) / 8;
    const totalTB = totalBytes / Math.pow(1024, 4);
    const finalResult = totalTB * 1.1; // เผื่อพื้นที่ 10%
    setResult(finalResult.toFixed(2));
  }, [cameras, days, resolution, compression]);

  return (
    <div className="main-container">
      {/* ฝั่งกรอกข้อมูล */}
      <div className="input-section">
        <h2 className="section-title">
          ตั้งค่าการคำนวณ <br/>(เผื่อพื้นที่ 10%)
        </h2>

        <div className="form-group">
          <label>จำนวนกล้อง (ตัว)</label>
          <input type="number" value={cameras} onChange={(e) => setCameras(Number(e.target.value))} />
        </div>

        <div className="form-group">
          <label>ความละเอียดภาพ</label>
          <select value={resolution} onChange={(e) => setResolution(Number(e.target.value))}>
            <option value={1024}>1MP (720P)</option>
            <option value={2048}>2MP (1080P)</option>
            <option value={4096}>4MP (2K)</option>
            <option value={8192}>8MP (4K)</option>
          </select>
        </div>

        <div className="form-group">
          <label>เทคโนโลยีการบีบอัด</label>
          <div className="btn-group">
            <button onClick={() => setCompression(1)} className={compression === 1 ? 'active' : ''}>H.265</button>
            <button onClick={() => setCompression(2)} className={compression === 2 ? 'active' : ''}>H.264</button>
          </div>
        </div>

        <div className="form-group">
          <label>ระยะเวลาจัดเก็บ (วัน)</label>
          <input type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} />
        </div>
      </div>

      {/* ฝั่งแสดงผล (ปรับปรุงให้ไม่ขาด) */}
      <div className="result-section">
        <div className="result-content">
          <p className="label-top">TOTAL CAPACITY</p>
          <div className="result-number">{result}</div>
          <p className="unit">Terabytes (TB)</p>
          
          <div className="divider"></div>
          
          <div className="recommendation-box">
            <p className="rec-label">ขนาด HDD ที่แนะนำให้ซื้อ</p>
            <div className="hdd-size">{Math.ceil(result)} TB</div>
          </div>

          <a href="https://lin.ee/MbzD6Wr" target="_blank" rel="noopener noreferrer" className="line-btn">
            ติดต่อสอบถาม
          </a>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          max-width: 1000px;
          width: 95%;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }

        @media (min-width: 768px) {
          .main-container {
            flex-direction: row;
            margin: 40px auto;
          }
        }

        .input-section {
          flex: 1;
          padding: 40px 30px;
          color: #1e293b;
        }

        .section-title {
          font-size: 24px;
          font-weight: 900;
          border-left: 8px solid #003366;
          padding-left: 15px;
          margin-bottom: 30px;
          color: #003366;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 800;
          margin-bottom: 8px;
          font-size: 14px;
          color: #475569;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 2px solid #e2e8f0;
          font-size: 18px;
          font-weight: bold;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus {
          border-color: #003366;
        }

        .btn-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .btn-group button {
          padding: 14px;
          border-radius: 12px;
          border: none;
          font-weight: 800;
          cursor: pointer;
          background-color: #f1f5f9;
          color: #64748b;
          transition: all 0.2s;
        }

        .btn-group button.active {
          background-color: #003366;
          color: #fff;
        }

        .result-section {
          width: 100%;
          background-color: #003366;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 50px 30px; /* เพิ่มพื้นที่ว่างด้านบนและล่าง */
        }

        @media (min-width: 768px) {
          .result-section {
            width: 420px;
          }
        }

        .result-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .label-top {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          opacity: 0.7;
          margin-bottom: 10px;
        }

        .result-number {
          font-size: clamp(80px, 20vw, 110px);
          font-weight: 900;
          line-height: 0.9;
          margin-bottom: 10px;
        }

        .unit {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .divider {
          width: 80%;
          height: 1px;
          background-color: rgba(255,255,255,0.2);
          margin-bottom: 30px;
        }

        .recommendation-box {
          background-color: rgba(255,255,255,0.1);
          padding: 25px;
          border-radius: 24px;
          width: 100%;
          margin-bottom: 35px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .rec-label {
          font-size: 15px;
          font-weight: 600;
          opacity: 0.8;
          margin-bottom: 5px;
        }

        .hdd-size {
          font-size: 45px;
          font-weight: 900;
        }

        .line-btn {
          width: 100%;
          padding: 20px;
          border-radius: 16px;
          background-color: #ffffff;
          color: #003366;
          font-weight: 900;
          font-size: 20px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4);
          transition: transform 0.2s;
        }

        .line-btn:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}