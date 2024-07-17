// action when submit button clicked
document.getElementById('form-bmi').addEventListener('submit', function(e) {
  e.preventDefault();
  bmiCalculate();
});

// action when reset button clicked
document.getElementById('form-bmi').addEventListener('reset', function() {
  document.getElementById('output').classList.add('hidden');
});

// calculate BMI function
function bmiCalculate() {
  const weight = parseFloat(document.getElementById('input-weight').value);
  const height = parseFloat(document.getElementById('input-height').value) / 100;
  const bmi = weight / (height * height);
  const bmiResult = document.getElementById('result');
  const outputWrapper = document.getElementById('output');
  const articleOutput = document.getElementById('article-output');
  let status = '';
  let articleExplanation = '';

  // BMI requirement condition
  if (bmi < 18.5) {
      status = 'Kekurangan berat badan';
      bmiResult.className = 'result underweight';
      articleExplanation = `
        <p>Hasil BMI kurang dari 18.5</p>
        <p>Anda berada dalam kategori underweight atau kekurangan berat badan.</p>
        <p>Cara terbaik untuk menaikkan berat badan adalah dengan menambahkan porsi makanan bergizi yang dikonsumsi dan berolahraga.</p>
        <p>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menambahkan berat badan hingga batas normal.</p>
        <h5>Disclaimer:</h5>
        <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
      `;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
      status = 'Normal (ideal)';
      bmiResult.className = 'result normal';
      articleExplanation = `
        <p>Hasil BMI diantara 18.5 dan 24.9</p>
        <p>Anda berada dalam kategori ideal atau normal.</p>
        <p>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk tetap konsisten dalam menjaga pola makan & olahraga.</p>
        <h5>Disclaimer:</h5>
        <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
      `;
  } else if (bmi >= 25.0 && bmi <= 29.9) {
      status = 'Kelebihan berat badan';
      bmiResult.className = 'result overweight';
      articleExplanation = `
        <p>Hasil BMI diantara 25 dan 29.9</p>
        <p>Anda berada dalam kategori overweight atau berat badan berlebih.</p>
        <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p>
        <p>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>
        <h5>Disclaimer:</h5>
        <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
      `;
  } else if (bmi >= 30) {
      status = 'Kegemukan (Obesitas)';
      bmiResult.className = 'result obese';
      articleExplanation = `
        <p>Hasil BMI diatas 30</p>
        <p>Anda berada dalam kategori obesitas atau kegemukan.</p>
        <p>Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.</p>
        <p>Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.</p>
        <h5>Disclaimer:</h5>
        <p>BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.</p>
      `;
  }

  // display output
  bmiResult.innerHTML = `
    <table class='user-data-result'>
      <tr>
        <th>Jenis Kelamin</th>
        <th>Umur</th>
      </tr>
      <tr>
        <td>${document.querySelector('input[name="gender"]:checked').nextElementSibling.textContent}</td>
        <td>${document.getElementById('input-age').value} tahun</td>
      </tr>
      <tr>
        <th>Berat Badan</th>
        <th>Tinggi Badan</th>
      </tr>
      <tr>
        <td>${weight} kg</td>
        <td>${document.getElementById('input-height').value} cm</td>
      </tr>
    </table>
    <hr>
    <h3>${status}</h3>
    <p class='big-number'>${bmi.toFixed(2)}</p>
  `;
  articleOutput.innerHTML = articleExplanation;
  outputWrapper.classList.remove('hidden');
}