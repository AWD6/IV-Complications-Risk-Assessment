// Risk factors data
const phlebitisFactors = [
  { label: 'ได้รับยา Cef-3 (Ceftriaxone)', score: 2 },
  { label: 'ได้รับยา Cloxagen (Cloxacillin)', score: 2 },
  { label: 'ได้รับยา Tazocin (Piperacillin/Tazobactam)', score: 1 },
  { label: 'ได้รับยา Nicardipine', score: 1 },
  { label: 'มีการกดทับบริเวณที่ให้สารน้ำ (วัด BP)', score: 1 },
  { label: 'ตำแหน่งที่ให้สารน้ำไม่เหมาะสม', score: 1 },
  { label: 'ไม่ได้ประเมิน IV site ตามแนวปฏิบัติ', score: 1 },
  { label: 'ประสบการณ์ทำงานผู้แทง IV (1-3 ปี)', score: 1 },
  { label: 'ไม่ได้เปลี่ยน IV site ตามแนวปฏิบัติ', score: 1 },
  { label: 'ไม่ได้ให้ข้อมูลผู้ป่วย/ผู้ปกครอง', score: 1 }
];

const extravasationFactors = [
  { label: 'ได้รับยา Cef-3 (Ceftriaxone)', score: 2 },
  { label: 'ได้รับยาแก้ปวด (Analgesic drug)', score: 2 },
  { label: 'ได้รับยา Levophed (Norepinephrine)', score: 2 },
  { label: 'ได้รับสารอาหารทางหลอดเลือดดำ', score: 2 },
  { label: 'อายุ ≤5 ปี หรือ ≥60 ปี', score: 1 },
  { label: 'มีการกดทับบริเวณที่ให้สารน้ำ (วัด BP)', score: 1 },
  { label: 'ตำแหน่งที่ให้สารน้ำไม่เหมาะสม', score: 1 },
  { label: 'ไม่ได้ประเมิน IV site ตามแนวปฏิบัติ', score: 1 },
  { label: 'ไม่ได้เปลี่ยน IV site ตามแนวปฏิบัติ', score: 1 },
  { label: 'ประสบการณ์ทำงานผู้แทง IV (1-3 ปี)', score: 1 }
];

// Guidelines for each risk level
const guidelines = {
  low: [
    'ปฏิบัติตามแนวทางการบริหารยา/สารน้ำ',
    'ให้ข้อมูล การป้องกันและเฝ้าระวังความเสี่ยงแก่ผู้ป่วย/ผู้ปกครอง',
    'เปลี่ยนตำแหน่ง IV site ทุก 96 ชั่วโมง (ยกเว้นผู้ป่วยเด็ก)',
    'เลือกตำแหน่งที่ให้สารน้ำเหมาะสม (งด บริเวณข้อพับแขน ข้อเท้า)',
    'งดวัดความดันโลหิตข้างที่ให้สารน้ำ',
    'ประเมินตำแหน่งที่ให้สารน้ำ อย่างน้อยทุก 4 ชั่วโมง',
    'กรณีได้รับสารน้ำที่มีฤทธิ์ทำลายเนื้อเยื่อ (Cytotoxic drug) ประเมินทุก 1 ชั่วโมง'
  ],
  moderate: [
    'ปฏิบัติตามแนวทางการบริหารยา/สารน้ำ',
    'ให้ข้อมูลการป้องกันและเฝ้าระวังความเสี่ยงแก่ผู้ป่วย/ผู้ปกครอง',
    'เปลี่ยนตำแหน่ง IV site ทุก 96 ชั่วโมง (ยกเว้นผู้ป่วยเด็ก)',
    'เลือกตำแหน่งที่ให้สารน้ำเหมาะสม (งด บริเวณข้อพับแขน ข้อเท้า)',
    'งดวัดความดันโลหิตข้างที่ให้สารน้ำ',
    'ประเมินตำแหน่งที่ให้สารน้ำ อย่างน้อยทุก 2 ชั่วโมง',
    'กรณีได้รับสารน้ำที่มีฤทธิ์ทำลายเนื้อเยื่อ (Cytotoxic drug) ประเมินทุก 30 นาที'
  ],
  high: [
    'ปฏิบัติตามแนวทางการบริหารยา/สารน้ำ',
    'ให้ข้อมูลการป้องกันและเฝ้าระวังความเสี่ยงแก่ผู้ป่วย/ผู้ปกครอง',
    'เปลี่ยนตำแหน่ง IV site ทุก 96 ชั่วโมง (ยกเว้นผู้ป่วยเด็ก)',
    'เลือกตำแหน่งที่ให้สารน้ำเหมาะสม (งด บริเวณข้อพับแขน ข้อเท้า)',
    'งดวัดความดันโลหิตข้างที่ให้สารน้ำ',
    'ประเมินตำแหน่งที่ให้สารน้ำ อย่างน้อยทุก 1 ชั่วโมง',
    'กรณีได้รับสารน้ำที่มีฤทธิ์ทำลายเนื้อเยื่อ (Cytotoxic drug) ประเมินทุก 30 นาที'
  ]
};

// State
let selectedPhlebitis = new Array(phlebitisFactors.length).fill(false);
let selectedExtravasation = new Array(extravasationFactors.length).fill(false);

// Initialize the app
function init() {
  renderFactors('phlebitis-factors', phlebitisFactors, 'phlebitis');
  renderFactors('extravasation-factors', extravasationFactors, 'extravasation');
}

// Render factor buttons
function renderFactors(containerId, factors, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  factors.forEach((factor, index) => {
    const button = document.createElement('button');
    button.className = 'factor-btn';

    const labelSpan = document.createElement('span');
    labelSpan.className = 'factor-label';
    labelSpan.textContent = factor.label;

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'factor-score';
    scoreSpan.textContent = '+' + factor.score;

    button.appendChild(labelSpan);
    button.appendChild(scoreSpan);
    button.onclick = () => toggleFactor(type, index);
    container.appendChild(button);
  });
}

// Toggle factor selection
function toggleFactor(type, index) {
  if (type === 'phlebitis') {
    selectedPhlebitis[index] = !selectedPhlebitis[index];
    updateFactorButtons('phlebitis-factors', selectedPhlebitis);
  } else {
    selectedExtravasation[index] = !selectedExtravasation[index];
    updateFactorButtons('extravasation-factors', selectedExtravasation);
  }

  calculateScores();
}

// Update button active states
function updateFactorButtons(containerId, selectedArray) {
  const container = document.getElementById(containerId);
  const buttons = container.getElementsByClassName('factor-btn');

  Array.from(buttons).forEach((button, index) => {
    if (selectedArray[index]) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// Calculate scores
function calculateScores() {
  // Calculate Phlebitis score
  const phlebitisScore = selectedPhlebitis.reduce((sum, selected, index) => {
    return sum + (selected ? phlebitisFactors[index].score : 0);
  }, 0);

  // Calculate Extravasation score
  const extravasationScore = selectedExtravasation.reduce((sum, selected, index) => {
    return sum + (selected ? extravasationFactors[index].score : 0);
  }, 0);

  // Update score displays
  document.getElementById('phlebitis-score').textContent = phlebitisScore;
  document.getElementById('extravasation-score').textContent = extravasationScore;

  // Update guidelines for each section
  updateGuidelines('phlebitis-guidelines', phlebitisScore);
  updateGuidelines('extravasation-guidelines', extravasationScore);
}

// Update guidelines display
function updateGuidelines(guidelinesId, score) {
  const guidelinesDiv = document.getElementById(guidelinesId);

  if (score === 0) {
    guidelinesDiv.classList.add('hidden');
    return;
  }

  guidelinesDiv.classList.remove('hidden');

  // Remove all risk classes
  guidelinesDiv.classList.remove('low-risk', 'moderate-risk', 'high-risk');

  // Determine risk level
  let riskLevel, riskClass, guidelineSet;

  if (score <= 4) {
    riskLevel = 'Low risk';
    riskClass = 'low-risk';
    guidelineSet = guidelines.low;
  } else if (score <= 7) {
    riskLevel = 'Moderate risk';
    riskClass = 'moderate-risk';
    guidelineSet = guidelines.moderate;
  } else {
    riskLevel = 'High risk';
    riskClass = 'high-risk';
    guidelineSet = guidelines.high;
  }

  guidelinesDiv.classList.add(riskClass);

  // Build guidelines HTML
  let html = `<div class="risk-level-text">${riskLevel}</div>`;
  html += '<div class="guidelines-title">คำแนะนำการปฏิบัติ:</div>';
  html += '<ul>';
  guidelineSet.forEach(guideline => {
    html += `<li>${guideline}</li>`;
  });
  html += '</ul>';

  guidelinesDiv.innerHTML = html;
}

// Reset form
function resetForm() {
  selectedPhlebitis = new Array(phlebitisFactors.length).fill(false);
  selectedExtravasation = new Array(extravasationFactors.length).fill(false);

  updateFactorButtons('phlebitis-factors', selectedPhlebitis);
  updateFactorButtons('extravasation-factors', selectedExtravasation);

  calculateScores();
}

// Initialize app on load
window.onload = init;
