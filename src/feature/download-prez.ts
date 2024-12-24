export const handleDownload = () => {
    const fileUrl = '/presentation.pptx'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'presentation.pptx';  
    link.click();
};