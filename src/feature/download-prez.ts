export const handleDownload = () => {
    const fileUrl = '/presentation.pptx'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'presentation.pptx';  
    link.click();
};
export const handleDownloadDoc = () => {
    const fileUrl = '/licence.doc'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'licence.doc';  
    link.click();
};
