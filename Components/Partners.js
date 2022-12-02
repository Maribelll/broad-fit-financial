import Image from "next/image";
import style from "../styles/banner.module.scss";
import img1 from "../public/partners/partners/partner-1.jpg";
import img2 from "../public/partners/partners/partner-2.jpg";
import img3 from "../public/partners/partners/partner-3.jpg";
import img4 from "../public/partners/partners/partner-4.jpg";
import img5 from "../public/partners/partners/partner-5.jpg";
import img6 from "../public/partners/partners/partner-6.jpg";
import img7 from "../public/partners/partners/partner-7.jpg";
import img8 from "../public/partners/partners/partner-8.jpg";
import img9 from "../public/partners/partners/partner-9.jpg";
import img10 from "../public/partners/partners/partner-10.jpg";
import img11 from "../public/partners/partners/partner-11.jpg";
import img12 from "../public/partners/partners/partner-12.jpg";
import img13 from "../public/partners/partners/partner-13.jpg";
import img14 from "../public/partners/partners/partner-14.jpg";
import img15 from "../public/partners/partners/partner-15.jpg";
import img16 from "../public/partners/partners/partner-16.jpg";
import img17 from "../public/partners/partners/partner-17.jpg";
import img18 from "../public/partners/partners/partner-18.jpg";
import img19 from "../public/partners/partners/partner-19.jpg";
import img20 from "../public/partners/partners/partner-20.jpg";
import img21 from "../public/partners/partners/partner-21.jpg";
import img22 from "../public/partners/partners/partner-22.jpg";
import img23 from "../public/partners/partners/partner-23.jpg";
import img24 from "../public/partners/partners/partner-24.jpg";
import img25 from "../public/partners/partners/partner-25.jpg";
import img26 from "../public/partners/partners/partner-26.jpg";
import img27 from "../public/partners/partners/partner-27.jpg";
import img271 from "../public/partners/partners/partner-27-1.jpg";
import img28 from "../public/partners/partners/partner-28.jpg";
import img29 from "../public/partners/partners/partner-29.jpg";
import img30 from "../public/partners/partners/partner-30.jpg";
import img31 from "../public/partners/partners/partner-31.jpg";
import img32 from "../public/partners/partners/partner-32.jpg";
import img33 from "../public/partners/partners/partner-33.jpg";
import img34 from "../public/partners/partners/partner-34.jpg";
import img35 from "../public/partners/partners/partner-35.jpg";
import img36 from "../public/partners/partners/partner-36.jpg";
import img37 from "../public/partners/partners/partner-37.jpg";
import img38 from "../public/partners/partners/partner-38.jpg";
import img39 from "../public/partners/partners/partner-39.jpg";
import img40 from "../public/partners/partners/partner-40.jpg";
import img41 from "../public/partners/partners/partner-41.jpg";
import img42 from "../public/partners/partners/partner-42.jpg";
import img43 from "../public/partners/partners/partner-43.jpg";
import img44 from "../public/partners/partners/partner-44.jpg";

import img45 from "../public/partners/partners/partner-45.jpg";
import img46 from "../public/partners/partners/partner-46.jpg";
import img47 from "../public/partners/partners/partner-47.jpg";
import img48 from "../public/partners/partners/partner-48.jpg";
import img49 from "../public/partners/partners/partner-49.jpg";
import img50 from "../public/partners/partners/partner-50.jpg";
import img51 from "../public/partners/partners/partner-51.jpg";
import img52 from "../public/partners/partners/partner-52.jpg";
import img53 from "../public/partners/partners/partner-53.jpg";
import img54 from "../public/partners/partners/partner-54.jpg";
import img55 from "../public/partners/partners/partner-55.jpg";
import img56 from "../public/partners/partners/partner-56.jpg";
import img57 from "../public/partners/partners/partner-57.jpg";
import img58 from "../public/partners/partners/partner-58.jpg";
import img59 from "../public/partners/partners/partner-59.jpg";
import img60 from "../public/partners/partners/partner-60.jpg";
import img61 from "../public/partners/partners/partner-61.jpg";
import img62 from "../public/partners/partners/partner-62.jpg";
import img63 from "../public/partners/partners/partner-63.jpg";
import img64 from "../public/partners/partners/partner-64.jpg";
import img65 from "../public/partners/partners/partner-65.jpg";
import img66 from "../public/partners/partners/partner-66.jpg";
import img67 from "../public/partners/members/member-1.jpg";
import img68 from "../public/partners/members/member-2.jpg";
import img69 from "../public/partners/members/member-3.jpg";
import img70 from "../public/partners/members/member-4.jpg";
import img71 from "../public/partners/members/member-5.jpg";

import styles from "../styles/partners.module.scss";

export function Allpartners() {
  return (
    <main>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        id={styles.clients}
        className={styles.container_partners}
      >
        <div className={styles.part1}>
          <div className={styles.img}>
            <a
              href={"https://www.ymcaspbc.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={img1} width={99} height={82} alt="YMCA" />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://jcca.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img2}
                height={82}
                width={108}
                alt="JCC"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.kroccenter.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img3}
                height={82}
                width={377}
                alt="KROC Centers"
              />
            </a>
          </div>
        </div>

        <div className={styles.part2}>
          <div className={styles.img}>
            <a
              href={"https://www.advantagefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img4}
                height={82}
                width={216}
                alt="Advantage Sport &amp; Fitness "
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://aktivsolutions.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img5}
                height={82}
                width={190}
                alt="Aktiv"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://americanbarbell.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img6}
                height={82}
                width={82}
                alt="American Barbell"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.myarsenalstrength.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img7}
                height={82}
                width={222}
                alt="Arsenal Strength"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://www.assaultfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img8}
                width={191}
                height={82}
                alt="Assault Fitness"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.builtbygrid.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img9}
                width={191}
                height={82}
                alt="Grid"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"http://www.commercialfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img10}
                width={191}
                height={82}
                alt="Commercial Fitness Solutions"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.concept2.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img11}
                width={191}
                height={82}
                alt="Concept 2"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://corehandf.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img12}
                width={150}
                height={82}
                alt="CORE Health &amp; Fitness"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://design2wellness.com//"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img13}
                width={113}
                height={82}
                alt="D2W"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.mydynamicfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img14}
                width={232}
                height={82}
                alt="Dynamic Fitness &amp; Strength"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://echelonfit.com/ "}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img15}
                width={192}
                height={82}
                alt="Echelon Fit"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://www.ecoreintl.com/ "}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img16}
                width={160}
                height={82}
                alt="Ecore"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://egym.com/us "}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img17}
                width={198}
                height={82}
                alt="EGym"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.eleiko.com/ "}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img18}
                width={192}
                height={82}
                alt="Eleiko"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://fitbench.com "}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img19}
                width={320}
                height={82}
                alt="Fit Bench"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://fitsupply.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img20}
                width={83}
                height={82}
                alt="Fit Supply"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.fitnessexpostores.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img21}
                width={155}
                height={82}
                alt="Fitness Expo"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.fodvirtual.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img22}
                width={172}
                height={82}
                alt="Fitness on Demand"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://gymrepair.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img23}
                width={121}
                height={82}
                alt="Fitness Services of Florida, Inc"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://fitnessmith.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img24}
                width={203}
                height={82}
                alt="FitnessSmith"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://fitrev.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img25}
                width={249}
                height={82}
                alt="FitRev"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.fitspacedesign.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img26}
                width={227}
                height={82}
                alt="FitSpace Design"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://freemotionfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img27}
                width={248}
                height={82}
                alt="FreeMotion"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.gantner.com/industry/fitness/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img271}
                width={270}
                height={82}
                alt="Gantner"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://gymsource.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img28}
                width={178}
                height={82}
                alt="Gym Source"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://hoistfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img29}
                width={178}
                height={82}
                alt="Hoist Fitness"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.hydromassage.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img30}
                width={323}
                height={82}
                alt="Hydro Massage"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.inbody.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img31}
                width={185}
                height={82}
                alt="InBody"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://irongrip.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img32}
                width={172}
                height={82}
                alt="Iron Grip"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.johnsonfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img33}
                width={250}
                height={82}
                alt="Johnson Fitness &amp; Wellness"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.keiser.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img34}
                width={211}
                height={82}
                alt="Keiser"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.lifefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img35}
                width={291}
                height={82}
                alt="Life Fitness"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"http://www.marathonfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img36}
                width={278.65}
                height={82}
                alt="Marathon Fitness"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://matrixfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img37}
                width={196}
                height={82}
                alt="Matrix"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://momentumfitnesssolutions.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img38}
                width={320}
                height={82}
                alt="Momentum Fitness Solutions"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://myzone.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img39}
                width={170}
                height={82}
                alt="My Zone"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://myefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img40}
                width={156}
                height={82}
                alt="MYE Fitness"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.nustep.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img41}
                width={168}
                height={82}
                alt="Nu Step"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.panattasport.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img42}
                width={202}
                height={82}
                alt="Panatta Sport"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.onepeloton.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img43}
                width={187}
                height={82}
                alt="Peloton"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.performbetter.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img44}
                width={180}
                height={82}
                alt="Perform Better!"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://plae.co/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img45}
                width={186}
                height={82}
                alt="PLAE"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.powerplate.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img46}
                width={211.83}
                height={82}
                alt="Power Plate"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"http://www.powersystems.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img47}
                width={220}
                height={82}
                alt="Power Systems"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.precor.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img48}
                width={270}
                height={82}
                alt="Precor"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://premierfitnesssource.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img49}
                width={230}
                height={82}
                alt="Premier Fitness Source"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.roguefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img50}
                width={137.38}
                height={82}
                alt="Rogue"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.spiritfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img51}
                width={157}
                height={82}
                alt="Spirit Fitness"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.gosportsart.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img52}
                width={222}
                height={82}
                alt="Sports Art"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://stagescycling.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img53}
                width={263}
                height={82}
                alt="Stages"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.technogym.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img54}
                width={242}
                height={82}
                alt="Techno Gym"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.torquefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img55}
                width={233}
                height={82}
                alt="Torque"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.totalfitnessequipment.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img56}
                width={318}
                height={82}
                alt="Total Fitness Equipment"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.totalgym.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img57}
                width={230}
                height={82}
                alt="Total Gym"
              />
            </a>
          </div>

          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.troyfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img58}
                width={189}
                height={82}
                alt="Troy Fitness"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://truefitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img59}
                width={184}
                height={82}
                alt="True Fitness"
              />
            </a>
          </div>
          <div id={styles.img_margin} className={styles.img}>
            <a
              href={"https://www.trxtraining.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img60}
                width={176}
                height={82}
                alt="TRX Training"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.umaxstrength.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img61}
                width={180}
                height={82}
                alt="UMax"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://versaclimber.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img62}
                width={178}
                height={82}
                alt="Versa Climber"
              />
            </a>
          </div>

          <div className={styles.img}>
            <a
              href={"https://www.waterrower.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img63}
                width={123}
                height={82}
                alt="Water Rower"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.woodway.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img64}
                width={120}
                height={82}
                alt="Woodway"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://ybellfitness.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img65}
                width={124}
                height={82}
                alt="YBell Fitness"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.younix.world/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img66}
                width={270}
                height={82}
                alt="Younix"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={style.blocktopfaq}>
        <h2 style={{ marginTop: "0px" }}>
          Member of the following organizations
        </h2>
      </div>
      <div className={styles.container_partners}>
        <div className={styles.part3}>
          <div className={styles.img}>
            <a
              href={"https://www.ihrsa.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img67}
                width={184}
                height={82}
                alt="IHRSA"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.aacfb.org/home"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img68}
                width={116}
                height={82}
                alt="AACFB"
              />
            </a>
          </div>
        </div>
        <div className={styles.part4}>
          <div className={styles.img}>
            <a
              href={"https://www.elfaonline.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img69}
                width={184}
                height={82}
                alt="ELFA"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.nefassociation.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img70}
                width={230}
                height={82}
                alt="NEFA"
              />
            </a>
          </div>
          <div className={styles.img}>
            <a
              href={"https://www.equipmentfa.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.img}
                src={img71}
                width={219}
                height={82}
                alt="Equipment Finance Advisor"
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
