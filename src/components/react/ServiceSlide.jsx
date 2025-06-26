import { sendWhasappMessage } from '../../utils/functions/whatasapp';

/**
 * @typedef {Object} ServiceItem
 * @property {string} title
 * @property {string} content
 * @property {string} image
 * @property {string} image_alt
 */

/**
 * @param {ServiceItem} props
 */
function ServiceSlide({ title, content, image, image_alt }) {
  return (
    <div className='bg-bs-surface-0 border border-bs-surface-3 rounded-xl flex-1 relative overflow-hidden min-w-[400px]'>
      <img
        src={image}
        alt={image_alt}
        loading='lazy'
        className='grayscale blur-sm w-full h-full object-cover object-left absolute'
        width={768}
      />
      <div className='hidden md:block absolute rounded-xl overflow-hidden w-full object-cover object-left inset-0 bg-gradient-to-r from-bs-surface-0/90 via-bs-surface-0/60' />
      <figcaption className='relative flex flex-col gap-2 h-full justify-between p-10'>
        <div className='flex gap-6 w-full'>
          <div className='flex flex-col max-w-2xl gap-6'>
            <h2
              className='bs-h2 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 text-center bg-clip-text text-transparent'
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <div
              className='bs-body-text text-justify lg:text-left flex-1 text-bs-foreground-dark'
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </figcaption>
    </div>
  );
}

export default ServiceSlide;
