document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('signatureCanvas');
    const clearButton = document.getElementById('clearButton');
    const downloadButton = document.getElementById('downloadButton');
    const blackColorRadio = document.getElementById('blackColor');
    const whiteColorRadio = document.getElementById('whiteColor');
    const togglePenButton = document.getElementById('togglePenButton'); // Add button element
    const ctx = canvas.getContext('2d');
  
    let painting = false;
    let strokeColor = 'black';
    let penEnabled = true; // Variable to track pen state

    function startPosition(e) {
        if (!penEnabled) return; // Check if pen is enabled
        painting = true;
        draw(e);
    }

    function endPosition() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = strokeColor;

        ctx.lineTo(e.clienX- canvas.offsetLeft, e.clientY - canvas.offsetTop);


CTX.stroke();

        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function downloadCanvas() {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = 'signature.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function togglePen() {
        penEnabled = !penEnabled; // Toggle pen state
        togglePenButton.textContent = penEnabled ? 'Disable Pen' : 'Enable Pen';
    
    
    }

    blackColorRadio.addEventListener('change', function() {
        strokeColor = 'black';
        
    });

    whiteColorRadio.addEventListener('change', function() {
        strokeColor = 'white';
    });

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
    clearButton.addEventListener('click', clearCanvas);
    downloadButton.addEventListener('click', downloadCanvas);
    togglePenButton.addEventListener('click', togglePen); // Add event listener for toggle button
});
