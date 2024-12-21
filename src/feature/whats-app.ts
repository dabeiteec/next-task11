const handleWhatsAppRedirect= () => {
  const whatsAppPhone = "8001234567";
    // const encodedMessage = encodeURIComponent(message || ""); 
    const encodedMessage=''
    const whatsappUrl = `https://wa.me/${whatsAppPhone}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank"); 
};  

export default handleWhatsAppRedirect