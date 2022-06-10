import Head from 'next/Head';
import Image from 'next/image';
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import AdvisorList from '../components/AdvisorList';
import AvatarList from '../components/AvatarList';
import utilStyles from '../styles/utils.module.css';
import InvestorList from '../components/InvestorList';
import { useState } from 'react';
import Marquee from "react-fast-marquee";
import { ScrollContainer, HorizontalSection, GellyElement } from 'react-nice-scroll';
import "react-nice-scroll/dist/styles.css";


  export default function Home(){
    const [visible, setVisible] = useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log('closed');
    }

    const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Lend Exactly knowing how much you are gonna pay.", "Borrow Exactly knowing how much you are gonna earn."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 500,
      loop: true
    });
  });

  return (
    <ScrollContainer>
    <div className={utilStyles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/logoExactly2.jpg" />
      </Head>
      <nav className={utilStyles.nav}>
      <Image
        className={utilStyles.logoNavOff}
        src='/logoExactly2.jpg'
        width={30}
        height={30}
        />
        <div className={utilStyles.textDiv}>
          <p className={utilStyles.textnav}>contact</p>
          <p className={utilStyles.textnav}>|</p>
          <p className={utilStyles.textnav}>press</p>
          <p className={utilStyles.textnav}>|</p>
          <p className={utilStyles.textnav}>blog</p>
          <p className={utilStyles.textnav}>|</p>
          <p className={utilStyles.textnav}>contact</p>
        </div>
      <Image
        className={utilStyles.logoNav}
        src='/logoExactly2.jpg'
        width={30}
        height={30}
        />
      </nav>
      <main className={utilStyles.main}>
        <div>
            <Image
              className={utilStyles.imgBigLogo}
              src='/exactlyDef.jpg'
              width={600}
              height={100}
              />
              <p className={utilStyles.mainPhrase}>Looking for a fixed-income solution?  We got EXACTLY what you need.</p>
          </div>
          <div className={utilStyles.arrow}>
            <Image
            src='/arrow.jpg'
            width={20}
            height={10}
            />
          </div>
      </main>
      {/* Page 2 */}
          {visible == false ? 
              <section className={utilStyles.section2}>
                  <div className={utilStyles.div2a}>
                    <p>NO MORE BANK LOANS NEEDED</p>
                </div>
                <div className={utilStyles.div2b}>
                  <p className={utilStyles.h1}>Welcome to Exactly</p>
                  <p className={utilStyles.underText}>A fixed-income solution for lenders and borrowers</p>
                </div>
                <div className={utilStyles.div2c}>
                  <div className={utilStyles.protocol}>open source</div>
                  <div className={utilStyles.protocol}>decentralized</div>
                  <div className={utilStyles.protocol}>non-custodial</div>
                </div>
                <GellyElement>
                <div className={utilStyles.div2d} onClick={handler}>
                  <Image
                  src='/macChart.jpg'
                  width={300}
                  height={200}
                  />
                </div>
                </GellyElement>
      </section>
          : <div className={utilStyles.bigChart} onClick={closeHandler}>
          <button className={utilStyles.buttonModal}>X</button>
          <Image src='/chart.jpg' width={800} height={500}/> 
        </div>}

      {/* Page 3 */}
      <section className={utilStyles.section3}>
        <div className={utilStyles.div3a}>
          <p>Time = Money</p>
        </div>
        <div className={utilStyles.div3b}>
          <p className={utilStyles.h1}>Decentralizing the time value of money</p>
        </div>
        <div className={utilStyles.div3c}>
          <div className={utilStyles.changer}><span ref={el}></span></div>
        </div>
        <div className={utilStyles.div3d}>
          <p>Soon to go live. Subscribe for updates.</p>
          <input className={utilStyles.input} placeholder='type tour e-mail'></input>
          <div className={utilStyles.subscButton}>Subscribe</div>
        </div>
      </section>

      {/* Page 4 */}
      <section className={utilStyles.section4}>
        <div className={utilStyles.div4a}>
          <p>Keeping you updated</p>
        </div>
        <div className={utilStyles.div4b}>
          <p className={utilStyles.h1}>Featured Posts</p>
        </div>
        <GellyElement>
          <div className={utilStyles.div4c}>
              <div className={utilStyles.post}><a className={utilStyles.link} target='_blank' href='https://medium.com/@exactly_finance/what-exactly-are-we-building-391d6db2692c'>What Exactly we are building</a></div>
              <div className={utilStyles.post}><a className={utilStyles.link} target='_blank' href='https://medium.com/@exactly_finance/defixed-income-101-948976c0e2c6'>DeFixed Income 101</a></div>
          </div>
        </GellyElement>
        <div className={utilStyles.div4d}>
          <Image
          src='/defi.jpg'
          width={350}
          height={150}
          />
        </div>
      </section>

    {/* Page 5 */}
      <section className={utilStyles.section5}>
        <div className={utilStyles.div5a}>
          <p>Who we are</p>
        </div>
        <div className={utilStyles.div5b}>
          <p className={utilStyles.h1}>Behind the scenes</p>
        </div>
        <Marquee gradient={true} pauseOnHover={true} speed={50}>
          <div className={utilStyles.div5c}>
            <AvatarList/>
          </div>
        </Marquee>
      </section>

      {/* Page 6 */}
      <section className={utilStyles.section6}>
        <div className={utilStyles.div6a}>
          <p className={utilStyles.h1}>Our 411's</p>
          <p className={utilStyles.underText}>Always counting with our most trusted advisors</p>
        </div>
        <div className={utilStyles.div6b}>
          <AdvisorList/>
        </div>
      </section>

    {/* Page 7 */}
      <section className={utilStyles.section7}>
        <div className={utilStyles.div7a}>
          <p className={utilStyles.h1}>Backed by</p>
        </div>
        <HorizontalSection>
          <div className='ns-horizontal-section__item'>
        {/* <Marquee gradient={true} pauseOnHover={true} speed={50} direction='right'> */}
            <div className={utilStyles.div7b}>
              <InvestorList/>
            </div>
          </div>
        {/* { </Marquee> } */}
        </HorizontalSection>
        <div className={utilStyles.div7c}>
          <div className={utilStyles.divInvestors1}>
          <Image
            className={utilStyles.investorsImg}
            src='/sur.jpg'
            width={120}
            height={50}/>
          <Image
            className={utilStyles.investorsImg}
            src='/kaszek.jpg'
            width={120}
            height={50}/>
            <Image
            className={utilStyles.investorsImg}
            src='/6man.jpg'
            width={100}
            height={50}/>
            <Image
            className={utilStyles.investorsImg}
            src='/1111.jpg'
            width={200}
            height={50}/>
          </div>
          <div className={utilStyles.divInvestors2}>
            <Image
            className={utilStyles.investorsImg}
            src='/nxtp.jpg'
            width={120}
            height={50}/>
            <Image
            className={utilStyles.investorsImg}
            src='/bairesDAO.jpg'
            width={100}
            height={80}/>
            <Image
            className={utilStyles.investorsImg}
            src='/newtopia.jpg'
            width={150}
            height={60}/>
          </div>
        </div>

      </section>

    {/* Page 8 */}
    <section className={utilStyles.section8}>
        <p className={utilStyles.join}>Join us</p>
      <div className={utilStyles.div8a}>
        <p className={utilStyles.h1}>Launching soon. You better know when.</p>
        <div className={utilStyles.div8b}>
          <input placeholder='type your e-mail' className={utilStyles.input2}></input>
          <div className={utilStyles.suscribe}><p className={utilStyles.suscribeText}>Subscribe</p></div>
        </div>
      </div>
      <footer className={utilStyles.footer}>
        <div className={utilStyles.divFooter1}>
          <Image
          className={utilStyles.icons}
          src='/twitter.jpg'
          width={40}
          height={40}
          />
          <Image
          className={utilStyles.icons}
          src='/discord.jpg'
          width={40}
          height={40}
          />
          <Image
          className={utilStyles.icons}
          src='/telegram.jpg'
          width={40}
          height={40}
          />
          <Image
          className={utilStyles.icons}
          src='/github.jpg'
          width={40}
          height={40}
          />
          <Image
          className={utilStyles.icons}
          src='/gitbook.jpg'
          width={40}
          height={40}
          />
          <Image
          className={utilStyles.icons}
          src='/letter.jpg'
          width={40}
          height={40}
          />
        </div>
        <div className={utilStyles.divFooter2}>
          <p>This software is v1.0.01</p>
          <p>© 2022 Exactly</p>
        </div>
      </footer>
    </section>
    </div>
    </ScrollContainer>
  )
}
