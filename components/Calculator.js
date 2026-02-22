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
      {/* ฝั่งซ้าย: ข้อมูลนำเข้า */}
      <div className="input-section">
        <h2 className="section-title">ตั้งค่าการคำนวณ</h2>
        <p className="subtitle">มาตรฐาน H.265 เผื่อพื้นที่ 10%</p>

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
          <label>การบีบอัดข้อมูล</label>
          <div className="btn-group">
            <button onClick={() => setCompression(1)} className={compression === 1 ? 'active' : ''}>H.265</button>
            <button onClick={() => setCompression(2)} className={compression === 2 ? 'active' : ''}>H.264</button>
          </div>
        </div>

        <div className="form-group">
          <label>ระยะเวลาบันทึก (วัน)</label>
          <input type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} />
        </div>
      </div>

      {/* ฝั่งขวา: ผลลัพธ์ (ปรับปรุงให้ยืดเต็มพื้นที่) */}
      <div className="result-section">
        <div className="result-header">
          <p className="label-top">TOTAL CAPACITY</p>
          <div className="result-number">{result}</div>
          <p className="unit">Terabytes (TB)</p>
        </div>
        
        <div className="result-footer">
          <div className="divider"></div>
          <div className="recommendation-box">
            <p className="rec-label">ขนาด HDD ที่แนะนำ</p>
            <div className="hdd-size">{Math.ceil(result)} TB</div>
          </div>

          <a href="https://lin.ee/MbzD6Wr" target="_blank" rel="noopener noreferrer" className="line-btn">
            ปรึกษาช่างเทคนิค
          </a>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          max-width: 1000px;
          width: 92%;
          margin: 20px auto;
          background-color: #ffffff;
          border-radius: 30px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 85vh; /* บังคับให้สูงเกือบเต็มจอเข็มไมล์บนมือถือ */
          border: 1px solid #e2e8f0;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2);
        }

        @media (min-width: 768px) {
          .main-container {
            flex-direction: row;
            min-height: 600px;
          }
        }

        .input-section {
          flex: 1;
          padding: 35px 25px;
          background-color: #ffffff;
        }

        .section-title {
          font-size: 26px;
          font-weight: 900;
          color: #003366;
          margin-bottom: 5px;
        }

        .subtitle {
          color: #64748b;
          font-weight: 600;
          margin-bottom: 25px;
          font-size: 14px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          font-weight: 800;
          margin-bottom: 8px;
          font-size: 14px;
          color: #1e293b;
        }

        .form-group input, .form-group select {
          width: 100%;
          padding: 15px;
          border-radius: 15px;
          border: 2px solid #f1f5f9;
          background-color: #f8fafc;
          font-size: 18px;
          font-weight: bold;
        }

        .btn-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .btn-group button {
          padding: 15px;
          border-radius: 12px;
          border: none;
          font-weight: 800;
          background-color: #f1f5f9;
          color: #64748b;
          cursor: pointer;
        }

        .btn-group button.active {
          background-color: #003366;
          color: #ffffff;
        }

        .result-section {
          flex: 1; /* บังคับให้ขยายตัวเท่ากับฝั่งซ้าย */
          background-color: #003366;
          color: #ffffff;
          padding: 50px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between; /* ดันเนื้อหาบนลงล่างให้เต็มพื้นที่ */
          align-items: center;
        }

        @media (min-width: 768px) {
          .result-section {
            max-width: 420px;
          }
        }

        .result-header {
          text-align: center;
        }

        .label-top {
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 3px;
          opacity: 0.6;
        }

        .result-number {
          font-size: clamp(90px, 25vw, 120px);
          font-weight: 900;
          line-height: 1;
        }

        .unit {
          font-size: 24px;
          font-weight: 700;
          margin-top: 10px;
        }

        .result-footer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .divider {
          width: 100%;
          height: 1px;
          background-color: rgba(255,255,255,0.15);
          margin-bottom: 30px;
        }

        .recommendation-box {
          background-color: rgba(255,255,255,0.08);
          padding: 25px;
          border-radius: 25px;
          width: 100%;
          margin-bottom: 30px;
          text-align: center;
        }

        .rec-label {
          font-size: 16px;
          opacity: 0.8;
          margin-bottom: 5px;
        }

        .hdd-size {
          font-size: 50px;
          font-weight: 900;
        }

        .line-btn {
          width: 100%;
          padding: 22px;
          border-radius: 20px;
          background-color: #ffffff;
          color: #003366;
          font-weight: 900;
          font-size: 20px;
          text-decoration: none;
          text-align: center;
          box-shadow: 0 15px 30px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}