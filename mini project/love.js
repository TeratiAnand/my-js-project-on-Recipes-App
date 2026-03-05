function generateLetter() {
    var senderName = document.getElementById('senderName').value;
    var recipientName = document.getElementById('recipientName').value;

    var letterContent = `
        <h2>My Dearest ${recipientName},</h2>
        <p>From the moment our eyes met, my heart knew it had found its home.</p>
        <p>Every day with you feels like a beautiful dream.</p>
        <p>Yours forever and always,<br>${senderName}</p>
    `;

    var letterDiv = document.getElementById('letter');
    letterDiv.innerHTML = letterContent;
    letterDiv.style.display = 'block';
}
