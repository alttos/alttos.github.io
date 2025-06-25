import { sendWhasappMessage } from '../../utils/functions/whatasapp';

/**
 * @typedef {Object} ServiceItem
 * @property {string} title
 * @property {string} content
 * @property {string} image
 * @property {string} image_alt
 * @property {string} image_content
 * @property {string} cta
 * @property {string} message
 */

/**
 * @param {ServiceItem} props
 */
function ServiceSlide({
  title,
  content,
  image,
  image_alt,
  image_content,
  cta,
  message,
}) {
  return (
    <div className='swiper-slide bg-bs-surface-0 border border-bs-surface-3 rounded-xl overflow-hidden !h-auto'>
      <figure className='flex flex-col gap-5 isolate min-h-[50svh] md:min-h-[40rem] h-full'>
        {/* BG image */}
        <img
          src={image}
          alt={image_alt}
          loading='lazy'
          className='opacity-20 md:opacity-80 grayscale rounded-xl blur-sm overflow-hidden w-full h-full object-cover object-left absolute inset-0'
          height={1024}
          width={768}
        />
        {/* Gradient mask */}
        <div className='hidden md:block absolute rounded-xl overflow-hidden w-full h-full object-cover object-left inset-0 bg-gradient-to-r from-bs-surface-0/90 via-bs-surface-0/60' />
        {/* Content */}
        <figcaption className='z-10 p-10 sm:p-10 md:p-20 flex flex-col gap-2 h-full'>
          <div className='flex gap-6 w-full'>
            <div className='flex flex-col max-w-2xl gap-6'>
              <h2
                className='bs-h2 bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 bg-clip-text text-transparent'
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <div
                className='bs-body-text text-justify lg:text-left flex-1 text-bs-foreground-dark'
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <img
              src={image_content}
              alt={image_alt}
              loading='lazy'
              className='hidden xl:block rounded-xl w-full h-full object-fit object-center min-w-md translate-y-10'
            />
          </div>
          <div />
          <button
            type='button'
            className='bs-btn bs-btn-cta inline-block self-start bs-mt-sm'
            onClick={() => sendWhasappMessage(message)}
          >
            {cta}
          </button>
        </figcaption>
      </figure>
    </div>
  );
}

export default ServiceSlide;
