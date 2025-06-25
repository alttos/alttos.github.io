import globalSettings from '../../data/global_settings.json';

const phoneNumber = globalSettings['customer-service-number'];

export function sendWhasappMessage(message: string) {
  if (typeof window !== 'undefined') {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, '_blank');
  }
}
