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

          <div className={styles.homeBackgroundImage}>
            {/* <Image src={HomeBackgroundImage} alt="Home Background Image" /> */}

            <div>

              <h1 style={{ color: 'orange' }} className={`text-ivory text-center text-[5rem] lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxxs:text-2xl ${robotoFont.className}`}>OT Drivers</h1>

              <br />

              <h2 className={`!font-thin text-white    text-center text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg xxxs:text-base ${robotoFontThin.className}`}>Serving TAMILNADU Since 2021</h2>

              <br /><br />

              <div className='flex flex-row justify-center items-center'>
                <Link href='/services' target='_self'>
                  <input type='button' value='Our Services' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50 lg:text-lg lg:w-[160px] md:text-base md:w-[140px] md:h-[45px] sm:text-sm sm:w-[130px] sm:h-[40px] xs:text-xs xs:w-[110px] xxxs:h-[35px]' />
                </Link>

                <Link href='/contact' target='_self'>
                  <input type='button' value='Free Estimate' className='w-[180px] h-[50px] border-solid border-ivory border-2 outline-none text-ivory text-xl cursor-pointer uppercase mx-5 transition-all duration-500 ease-in-out hover:bg-black-opacity-50 lg:text-lg lg:w-[160px] md:text-base md:w-[140px] md:h-[45px] sm:text-sm sm:w-[130px] sm:h-[40px] xs:text-xs xs:w-[110px] xxxs:h-[35px]' />
                </Link>
              </div>


            </div>

          </div>

        </section>


        {/* General Contractor SECTION */}
        <section className='py-20 bg-customWhite xs:py-10'>

          <div className='text-center text-black'>

            <h1 className={`pb-10 text-black text-4xl sm:text-left md:text-3xl sm:text-2xl xs:text-xl xxs:text-lg xxxs:text-base xs:pb-6 ${styles.center_text_title}`}></h1>

            {/* <br /><br /> */}

            <p className={`${styles.center_text_description} text-xl lg:text-lg md:text-base xs:text-sm xxs:text-xs`}>
              Welcome to RoRe Constructions – Building Dreams, Crafting Excellence! <br /><br />
              Established in 2021, <em>RoRe Constructions</em> is a trusted name in the construction industry, delivering exceptional residential, commercial, and industrial projects across Tamil Nadu. With our headquarters in <em>Coimbatore</em> and branches in <em>Chennai</em> and <em>Tuticorin</em>, we bring innovation, quality, and reliability to every project we undertake.<br /><br />

              Our company is founded on a strong legacy of expertise: <br /><br />
              🔹 <em>Sathiamoorthy</em> – Retired Chief Manager of New Neyveli Thermal Power Station and Chief Civil Engineer of &quot;RoRe Constructions&quot;, bringing four decades of engineering excellence.<br /><br />
              🔹 <em>Iruthayaraja</em> – A visionary leader and Head of <em>Vanigar Association, Coimbatore</em>, with over <em>three decades of experience in real estate development.</em><br /><br />

              At <em>RoRe Constructions</em>, we specialize in:<br /><br />
              🏡 <em>Residential Projects</em> – Villas, Apartments &amp; Luxury Homes<br />
              🏢 <em>Commercial Spaces</em> – Office Buildings, Showrooms &amp; Retail Outlets<br />
              🏭 <em>Industrial Infrastructure</em> – Warehouses, Factories &amp; Specialized Structures<br /><br />

              We take pride in our <em>uncompromising quality, timely project delivery, and customer-centric approach.</em> Whether you are looking to build your dream home or a commercial masterpiece, <em>RoRe Constructions</em> is your trusted partner in turning visions into reality.<br /><br />

              📍 Serving all over Tamil Nadu with commitment and excellence! and expanding our reach to serve across all of India.<br /><br />

              📞 Contact us today to build with confidence!
              {/* <Link href='/services' className='pb-[0.4rem] inline border-solid border-black border-b-[2px] hover:text-customOrange hover:border-customOrange'>Learn More</Link> */}
            </p>

            <br /><br />

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
