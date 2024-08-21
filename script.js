const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const language = this.dataset.language;

        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));

        this.classList.add('active');
        document.getElementById(language).classList.add('active');
    });
});

function setupGauge(inputId, gaugeId, countId, previewId, maxLength, minYellow, maxYellow, minGreen, maxGreen) {
    const input = document.getElementById(inputId);
    const gauge = document.getElementById(gaugeId);
    const count = document.getElementById(countId);
    const preview = document.getElementById(previewId);

    input.addEventListener('input', function() {
        const length = input.value.length;
        const fillPercentage = (length / maxLength) * 100;

        gauge.style.width = fillPercentage + '%';
        count.textContent = `${length}/${maxLength}`;
        preview.textContent = input.value || preview.dataset.placeholder;

        if (length < minYellow) {
            gauge.style.backgroundColor = '#ffcc00';
        } else if (length <= maxYellow) {
            gauge.style.backgroundColor = '#28a745';
        } else if (length <= minGreen) {
            gauge.style.backgroundColor = '#28a745';
        } else {
            gauge.style.backgroundColor = '#dc3545';
        }
    });
}

setupGauge('title', 'title-gauge', 'title-count', 'preview-title', 70, 50, 60);
setupGauge('description', 'description-gauge', 'description-count', 'preview-description', 180, 155, 165);
setupGauge('title-en', 'title-gauge-en', 'title-count-en', 'preview-title-en', 70, 50, 60);
setupGauge('description-en', 'description-gauge-en', 'description-count-en', 'preview-description-en', 180, 155, 165);

document.getElementById('slug').addEventListener('input', function() {
    document.getElementById('preview-link').textContent = `example.co.il/${this.value}` || 'example.co.il/slug';
});

document.getElementById('slug-en').addEventListener('input', function() {
    document.getElementById('preview-link-en').textContent = `example.com/${this.value}` || 'example.com/slug';
});
