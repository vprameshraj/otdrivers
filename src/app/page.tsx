import PageLayout from '@/components/PageLayout';
import Head from 'next/head'
import Image from 'next/image'
import HomeBackgroundImage from '../../public/images/home_hero_img.jpg'
import styles from '../styles/Home.module.css'
import { Monda, Righteous, Roboto } from 'next/font/google'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CustomLink from '@/components/CustomLink';

const robotoFont = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '700'
})

const robotoFontThin = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: '400'
})

const righteousFont = Righteous({
  subsets: ['latin'],
  variable: '--font-righteous',
  weight: '400'
})

/* Represent Index or Home Page */
export default function Home() {
  return (
    <>
      <main className='overflow-x-hidden mt-24'>


        {/* HOME Image Section */}
        <section>
        <div>

          <h1 style={{ color: 'black' }} className={`text-ivory text-center text-[5rem] lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxxs:text-2xl ${robotoFont.className}`}>OT Drivers</h1>

          <br />

          </div>


          <div className={styles.homeBackgroundImage}>
            {/* <Image src={HomeBackgroundImage} alt="Home Background Image" /> */}
          </div>

        </section>


        {/* General Contractor SECTION */}
        <section className='py-20 bg-customWhite xs:py-10'>

          <div className='text-center text-black'>

            <h1 className={`pb-10 text-black text-4xl sm:text-left md:text-3xl sm:text-2xl xs:text-xl xxs:text-lg xxxs:text-base xs:pb-6 ${styles.center_text_title}`}></h1>

            {/* <br /><br /> */}

            <p className={`${styles.center_text_description} text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs`}>
               OT Drivers is a professional driver service company offering on-demand drivers for temporary journeys. Whether it's for business or personal travel, OT Drivers provides experienced, licensed, and reliable drivers ready to transport clients wherever needed. With a focus on flexibility and customer satisfaction, OT Drivers caters to short-term or one-time driving needs, ensuring a smooth and comfortable ride. From airport transfers and event transportation to casual outings, clients can book drivers for any occasion, all with a focus on safety, punctuality, and top-tier service.
            </p>

            <br /><br />

            <p className={`${styles.center_text_description} text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs`}>
                <b>Qualified Drivers:</b> All drivers are carefully selected, trained, and licensed to ensure top-level service and safety.<br /><br />
                <b>Flexible Booking:</b> Easy-to-use booking system allowing clients to schedule drivers at their convenience, even on short notice.<br /><br />
                <b>Comfort & Reliability:</b> Well-maintained vehicles and experienced drivers ensure a smooth, stress-free travel experience.<br /><br />
                <b>Affordable Rates:</b> Competitive pricing with no hidden fees, offering cost-effective solutions for temporary transportation needs.<br /><br />
                <b>24/7 Availability:</b> Services available around the clock to meet diverse client schedules, whether for daytime errands or late-night travel.<br /><br />
                <b>Diverse Vehicle Options:</b> From luxury sedans to larger vehicles for group travel, OT Drivers offers a variety of options to suit different preferences.
            </p>
            <Link href='/contact' target='_self'>
              <input type='button' value='Contact Us Today' className={`w-[300px] h-[50px] border-none outline-4 outline-none outline-black bg-black text-ivory cursor-pointer relative z-0 rounded-xl text-2xl uppercase transition-all duration-500 ease-in-out hover:bg-ivory hover:text-black hover:outline-matteblack md:text-xl md:w-[250px] md:h-[50px] sm:text-lg sm:w-[220px] sm:h-[40px] xs:text-base xs:w-[200px] xxs:text-sm xxs:w-[170px] xxs:h-[35px] ${righteousFont.className}`} />
            </Link>
          
          </div>

        </section>

        {/* General Contractor SECTION */}
        <section className='py-16 bg-white xs:py-8'>

          <div className='text-center text-black'>

            <h1 className={`pb-10 uppercase text-black text-4xl md:text-3xl sm:text-2xl xs:text-xl xxs:text-lg xxxs:text-base xs:pb-6 sm:text-left ${styles.center_text_title} ${robotoFontThin.className}`}>We Offer a Wide Range of Services</h1>

            {/* <br /><br /> */}

            <p className={`${styles.center_text_description} text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs`}>
              From conception to completion, our entire team of estimators, designers, project managers and experienced
              executives make our clients&apos; needs a priority. We have experience in a wide variety of projects and delivery
              methods, and use both time-proven practices and cutting-edge techniques to make sure our customers&apos; projects meet
              their maximum potential.
              
              <br /><br />

              {/* <Link href='/services'>
                <input type={'button'} value={'Learn More'} />
              </Link> */}

              <CustomLink href='/services' title='Learn More' className='text-black font-bold transition-all duration-500 ease-out hover:text-customMustardYellow' /> 

            </p>

          </div>

        </section>

      </main>
    </>
  );
};
