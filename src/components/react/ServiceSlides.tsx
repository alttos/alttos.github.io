import ServiceSlide from './ServiceSlide';
import type { ServiceItem } from './ServiceSlide';
interface ServiceSlidesProps {
  services: ServiceItem[];
  title: string;
}

const ServiceSlides = ({ services, title }: ServiceSlidesProps) => {
  return (
    <section id='services' className='mt-20 px-25 flex flex-col gap-15'>
      {/* Header */}
      <header className='flex items-center justify-between'>
        {title && <h2 className='bs-h2'>{title}</h2>}
      </header>

      {/* Slides */}
      <div className='flex justify-center flex-wrap gap-5'>
        {services.map((item: ServiceItem, idx) => (
          <ServiceSlide {...item} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSlides;
