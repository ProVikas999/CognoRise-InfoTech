document.addEventListener("DOMContentLoaded", function() {
    const resumeButton = document.querySelector('.resume-download-btn');

    resumeButton.addEventListener('click', function() {
        const fileUrl = 'VikasChourasiya_InternshalaResume.pdf'; // Replace this with your actual file path
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'Vikas_Chourasiya_Resume.pdf');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
