export function sendWhasappMessage(phoneNumber: string, message: string) {
  if (typeof window !== 'undefined') {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  }
}
