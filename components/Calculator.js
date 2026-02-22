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
      {/* ส่วนกรอกข้อมูล */}
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

      {/* ส่วนแสดงผล */}
      <div className="result-section">
        <p className="label-top">TOTAL CAPACITY</p>
        <div className="result-number">{result}</div>
        <p className="unit">Terabytes (TB)</p>
        
        <div className="divider"></div>
        
        <div className="recommendation-box">
          <p>ขนาด HDD ที่แนะนำให้ซื้อ</p>
          <div className="hdd-size">{Math.ceil(result)} TB</div>
        </div>

        <a href="https://lin.ee/MbzD6Wr" target="_blank" rel="noopener noreferrer" className="line-btn">
          ติดต่อสอบถาม
        </a>
      </div>

      <style jsx>{`
        .main-container {
          max-width: 1000px;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column; /* มือถือ: บนลงล่าง */
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
        }

        @media (min-width: 768px) {
          .main-container {
            flex-direction: row; /* คอมพิวเตอร์: ซ้ายไปขวา */
            margin: 40px auto;
          }
        }

        .input-section {
          flex: 1;
          padding: 30px;
          color: #1e293b;
        }

        .section-title {
          font-size: 22px;
          font-weight: 900;
          border-left: 8px solid #003366;
          padding-left: 15px;
          margin-bottom: 25px;
          line-height: 1.2;
        }

        .form-group {
          margin-bottom: 18px;
        }

        .form-group label {
          display: block;
          font-weight: bold;
          margin-bottom: 6px;
          font-size: 14px;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          border: 2px solid #cbd5e1;
          font-size: 16px;
          font-weight: bold;
        }

        .btn-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .btn-group button {
          padding: 12px;
          border-radius: 10px;
          border: none;
          font-weight: bold;
          cursor: pointer;
          background-color: #f1f5f9;
          color: #64748b;
        }

        .btn-group button.active {
          background-color: #003366;
          color: #fff;
        }

        .result-section {
          width: 100%;
          background-color: #003366;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          color: #ffffff;
        }

        @media (min-width: 768px) {
          .result-section {
            width: 400px;
          }
        }

        .label-top {
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
          opacity: 0.8;
          margin-bottom: 15px;
        }

        .result-number {
          font-size: clamp(60px, 15vw, 100px); /* ย่อขนาดตามจอ */
          font-weight: 900;
          line-height: 1;
        }

        .unit {
          font-size: 20px;
          font-weight: bold;
          margin: 10px 0 30px 0;
        }

        .divider {
          width: 100%;
          height: 2px;
          background-color: rgba(255,255,255,0.1);
          margin-bottom: 30px;
        }

        .recommendation-box {
          background-color: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 20px;
          width: 100%;
          margin-bottom: 25px;
        }

        .hdd-size {
          font-size: 36px;
          font-weight: 900;
          margin-top: 5px;
        }

        .line-btn {
          width: 100%;
          padding: 18px;
          border-radius: 15px;
          background-color: #ffffff;
          color: #003366;
          font-weight: 900;
          font-size: 18px;
          text-decoration: none;
          box-shadow: 0 10px 15px -3px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}