import React, { useState } from 'react';
import { ScanLine, Database, Check, Camera, ArrowRight } from 'lucide-react';
import './SystemPreview.css';

const stages = {
  en: [
    { name: 'Capture', title: 'A frame becomes an input.', detail: 'The camera supplies a vehicle frame for plate detection.', code: 'camera → frame.capture()' },
    { name: 'Recognize', title: 'Pixels become characters.', detail: 'OCR extracts the plate text from the detected region.', code: 'ocr → extract(plate_region)' },
    { name: 'Verify', title: 'Text becomes a record.', detail: 'A database lookup connects the plate to a vehicle record.', code: 'database → find(plate_text)' },
  ],
  fil: [
    { name: 'Kunan', title: 'Nagiging input ang isang frame.', detail: 'Nagbibigay ang camera ng frame para makilala ang plate.', code: 'camera → frame.capture()' },
    { name: 'Kilalanin', title: 'Nagiging teksto ang mga pixel.', detail: 'Kinukuha ng OCR ang mga karakter sa plate region.', code: 'ocr → extract(plate_region)' },
    { name: 'I-verify', title: 'Nagiging rekord ang teksto.', detail: 'Iniuugnay ng database lookup ang plate sa vehicle record.', code: 'database → find(plate_text)' },
  ],
};
const icons = [Camera, ScanLine, Database];

export default function SystemPreview({ language = 'en' }) {
  const [stage, setStage] = useState(0);
  const items = stages[language] || stages.en;
  return <div className="system-preview">
    <div className="preview-top"><div className="preview-brand"><span className="preview-logo"><ScanLine size={17}/></span>autotrace<span className="version">/ pipeline</span></div><span className="demo-label">INTERACTIVE CONCEPT</span></div>
    <div className={`camera-scene stage-${stage}`}>
      <div className="camera-grid"/>
      <div className="camera-label"><span className="status-dot"/> CAMERA INPUT <span>FRAME 001</span></div>
      <div className="road-line left"/><div className="road-line right"/>
      <div className="vehicle"><div className="windshield"/><div className="car-light light-left"/><div className="car-light light-right"/><div className="car-grille"/><div className="license-plate">ABC 1234</div></div>
      <div className="plate-bracket"><span className="detection-label">{['PLATE REGION', 'TEXT EXTRACTED', 'RECORD MATCHED'][stage]}</span><i/><i/><i/><i/></div>
      <div className="scene-bottom"><span>ILLUSTRATIVE FRAME</span><span>{stage === 2 ? <><Check size={12}/> MATCH FOUND</> : 'OCR / VEHICLE ACCESS'}</span></div>
    </div>
    <div className="pipeline-controls" aria-label="Explore the recognition pipeline">{items.map((item, i) => {
      const Icon = icons[i];
      return <button key={i} aria-pressed={stage === i} onClick={() => setStage(i)}><Icon size={15}/><span>{item.name}</span>{i < 2 && <ArrowRight size={12}/>}</button>;
    })}</div>
    <div className="pipeline-description" aria-live="polite"><div><h3>{items[stage].title}</h3><p>{items[stage].detail}</p></div><span className="mono">0{stage + 1} / 03</span></div>
    <div className="code-line"><span>↳</span>{items[stage].code}<span className="code-cursor"/></div>
  </div>;
}
