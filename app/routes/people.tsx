import styles from "./people.module.css";
import PartnerInfo from "../components/PartnerInfo";
import Header from "../components/header";
import Footer from "~/components/footer";
import UncLogo from "../assets/icons/unc-chapel-hill.svg";
import TownOfChapel from "../assets/icons/town-of-chapel-hill.svg";
import OrangeCountyLogo from "../assets/icons/orange-county.svg";
import AdditionalPartnersLogo from "../assets/icons/additional-partners.svg";
import samanthaPfp from "../assets/samantha.png";

export function meta() {
    return [{ title: "CCC | People" }];
}

function PartnerLink({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#499ED7] hover:underline"
        >
            {children}
        </a>
    );
}

export default function People() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 pb-16">
                <Header />
                <header
                    className="mt-20 mb-8 text-center"
                    style={{ backgroundColor: "#96d47c", padding: "2rem 0" }}
                >
                    <h1 className="text-5xl tracking-tight">Who We Are</h1>
                </header>
                <div className={styles.directorInfo}>
                    <img
                        src={samanthaPfp}
                        className={styles.directorPhoto}
                    ></img>
                    <div className={styles.directorInfoText}>
                        <h2
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "600",
                                fontStyle: "SemiBold",
                                fontSize: "36px",
                            }}
                        >
                            Samantha Luu, MPH
                        </h2>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "400px",
                                fontStyle: "Regular",
                                fontSize: "24px",
                            }}
                        >
                            Campus & Community Coalition Director
                        </p>
                        <a
                            href="mailto:samantha@campusandcommunitycoalition.org"
                            className="font-figtree italic text-[20px] text-[#499ED7] hover:text-blue-500 font-medium underline mb-2"
                        >
                            samantha@campusandcommunitycoalition.org
                        </a>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "400px",
                                fontStyle: "Regular",
                                fontSize: "20px",
                            }}
                        >
                            Samantha first worked with the CCC in 2018 and was
                            tickled to find her graduate team's evaluation
                            deliverables in her new desk when she returned as
                            Director in 2022. As a two-time Tar Heel (BA 2014,
                            MPH 2019), she is energized to serve the Chapel Hill
                            community in this role. She has previously worked on
                            mental and social well-being, sexual health, and
                            youth leadership development in domestic and global
                            settings, often wearing many different hats in those
                            roles. When she's not facilitating CCC meetings or
                            supporting CCC partners, you can find her sipping
                            coffee, gardening, checking out local events, and
                            traveling with her husband and dog.
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "1093px",
                    }}
                >
                    <div className={styles.boardOfDirectorsContainer}>
                        <h1
                            style={{
                                fontSize: "40px",
                                marginBottom: "24px",
                                textAlign: "center",
                            }}
                        >
                            Board of Directors
                        </h1>
                        <div className={styles.directorsGrid}>
                            <PartnerInfo
                                title="Aaron Bachenheimer, Ed. D"
                                text="Associate Vice Chancellor for Student Engagement"
                                role="UNC-Chapel Hill"
                            />
                            <PartnerInfo
                                title="Shay Stevens, MBA"
                                text="Community Relations Manager"
                                role="Town of Chapel Hill"
                            />
                            <PartnerInfo
                                title="Marcy Williams, M.P.H"
                                text="Health Promotion and Education Services Director"
                                role="Orange County Health Department"
                            />
                            <PartnerInfo
                                title="Fran Muse, J.D."
                                text="Director"
                                role="Carolina Student Legal Services"
                            />
                            <PartnerInfo
                                title="Melissa Cox, Ph.D."
                                text="Faculty"
                                role="UNC Gillings School of Global Public Health"
                            />
                        </div>
                    </div>
                </div>

                <h1
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "500px",
                        fontStyle: "Medium",
                        fontSize: "40px",
                        lineHeight: "100%",
                        textAlign: "center",
                        marginTop: "48px",
                        marginBottom: "48px",
                    }}
                >
                    Coalition Partners
                </h1>

                <div className={styles.coalitionPartners}>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={UncLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#499ED7" }}>
                                UNC-Chapel Hill
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <h2
                                    style={{
                                        fontFamily: "Figtree",
                                        fontWeight: "700px",
                                        fontStyle: "Bold",
                                        fontSize: "20px",
                                        lineHeight: "24px",
                                        letterSpacing: "0px",
                                    }}
                                >
                                    <PartnerLink href="https://students.unc.edu/">
                                        Student Success
                                    </PartnerLink>
                                </h2>
                                <ul className={styles.studentAffairsList}>
                                    <li>
                                        <PartnerLink href="https://offcampus.unc.edu">
                                            Off-Campus Student Life
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://studentwellness.unc.edu/">
                                            Student Wellness
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://fsl.unc.edu/">
                                            Office of Fraternity & Sorority Life
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://vpas.unc.edu/">
                                            Violence Prevention and Advocacy
                                            Services
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://studentconduct.unc.edu/">
                                            Office of Student Conduct
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://carolinaunion.unc.edu/departments/student-life-leadership/">
                                            Student Life & Leadership
                                        </PartnerLink>
                                    </li>
                                    <li>
                                        <PartnerLink href="https://campusrec.unc.edu/">
                                            Campus Recreation
                                        </PartnerLink>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.unc.edu/life/housing/">
                                        Carolina Housing
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://ccps.unc.edu/">
                                        Carolina Center for Public Service
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.unc.edu/athletics/">
                                        Athletics
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://sph.unc.edu/">
                                        UNC Gillings School of Global Public
                                        Health
                                    </PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://executivebranch.unc.edu/">
                                        Student Government
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.med.unc.edu/alcohol/about/center-overview-and-welcome/">
                                        Bowles Center for Alcohol Studies
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://police.unc.edu/">
                                        Police
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://heellife.unc.edu/organization/gpsg">
                                        Graduate & Professional Student
                                        Government
                                    </PartnerLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={TownOfChapel}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#6A9F26" }}>
                                Town of Chapel Hill
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Town-Manager">
                                        Manager's Office
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Housing-and-Community-Development">
                                        Housing & Community Development
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Economic-Development">
                                        Economic Development
                                    </PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Police">
                                        Police Department
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Services/Emergency-Updates">
                                        Emergency Management
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillarts.org/">
                                        Community Arts & Culture
                                    </PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Communications-and-Engagement">
                                        Communications & Engagement
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Business-and-Development/Code-Enforcement">
                                        Code Enforcement
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chapelhillnc.gov/Town-Government/Departments-and-Offices/Fire">
                                        Fire Department
                                    </PartnerLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={OrangeCountyLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#FFC60B" }}>
                                Orange County
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.orangecountync.gov/204/Health-Department">
                                        Health Department
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.orangecountync.gov/432/Criminal-Justice-Resource-Department">
                                        Criminal Justice Resource Department
                                    </PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.orangecountync.gov/640/Emergency-Services">
                                        Emergency Services
                                    </PartnerLink>
                                </p>
                            </div>
                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.ocsonc.com/">
                                        Sheriff's Office
                                    </PartnerLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.coalitionPartnersContainers}>
                        <div className={styles.partnersHeaders}>
                            <img
                                src={AdditionalPartnersLogo}
                                style={{ marginRight: "10px" }}
                            ></img>
                            <h1 style={{ fontSize: "32px", color: "#05325C" }}>
                                Additional Partners
                            </h1>
                        </div>
                        <div className={styles.grid}>
                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.uncstudentlegal.unc.edu/">
                                        Carolina Student Legal Services
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://orangeabc.com/">
                                        Orange County ABC Stores & Board
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.chccs.org/">
                                        Chapel Hill-Carrboro City Schools
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.carpediemnc.org/">
                                        Carpe Diem & Mini Diem
                                    <PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://jacksoncenter.info/">
                                        Marian Cheek Jackson Center for Making
                                        and Saving History
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="http://www.downtownchapelhill.com/">
                                        Chapel Hill Downtown Partnership
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://chccsptacouncil.blogspot.com/">
                                        Chapel Hill-Carrboro City Schools PTA
                                        Council
                                    </PartnerLink>
                                </p>
                            </div>

                            <div>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.orangepartnership.org/">
                                        Orange Partnership
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    <PartnerLink href="https://www.townofcarrboro.org/225/Police">
                                        Town of Carrboro Police Department
                                    </PartnerLink>
                                </p>
                                <p className={styles.itemSize}>
                                    Local Businesses
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.formerContributors}>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "400px",
                            fontStyle: "Regular",
                            fontSize: "36px",
                            lineHeight: "100%",
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        Founding Contributors
                    </p>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "300px",
                            fontStyle: "Italic",
                            fontSize: "20px",
                            lineHeight: "100%",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        Thank you to past partners and supporters of the CCC! We
                        couldn't have gotten here without you.
                    </p>
                    <div className={styles.formerStaffBox}>
                        <p
                            style={{
                                fontFamily: "Figtree",
                                fontWeight: "600px",
                                fontStyle: "SemiBold",
                                fontSize: "20px",
                                lineHeight: "100%",
                                color: "#499ED7",
                                marginBottom: "32px",
                            }}
                        >
                            Previous Staff and Leadership
                        </p>
                        <ul className={styles.formerStaffList}>
                            <li>
                                Former UNC-CH Chancellor Holden Thorp, Ph.D.
                            </li>
                            <li>Former Chapel Hill Major Kleinschmidt, J.D.</li>
                            <li>
                                Former Orange County Health Director Collen
                                Bridger, Ph.D, M.P.H.
                            </li>
                            <li>Barb Alvarez Martin, Ph.D., M.P.H.</li>
                            <li>Elinor Landess, M.A.</li>
                        </ul>
                    </div>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "400px",
                            fontStyle: "Regular",
                            fontSize: "36px",
                            lineHeight: "100%",
                            textAlign: "center",
                            marginBottom: "32px",
                        }}
                    >
                        Former Interns
                    </p>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "600px",
                            fontStyle: "SemiBold",
                            fontSize: "20px",
                            lineHeight: "100%",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        Thank you to all former interns and graduate capstone
                        teams who have dedicated numerous hours and skills to
                        further the CCC's work and promote a healthy community!
                    </p>
                    <p
                        style={{
                            fontFamily: "Figtree",
                            fontWeight: "600px",
                            fontStyle: "SemiBold",
                            fontSize: "20px",
                            lineHeight: "100%",
                            marginTop: "64px",
                            marginBottom: "32px",
                            textAlign: "center",
                        }}
                    >
                        An additional thank you to
                        <a
                            href="https://www.cssgunc.org/"
                            target="_blank"
                            className="text-[#499ED7]  hover:text-blue-500 font-medium underline"
                        >
                            {" "}
                            UNC CS+Social Good{" "}
                        </a>
                        for building this website in support of our mission.
                    </p>
                </div>
                <p
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "400px",
                        fontStyle: "Regular",
                        fontSize: "36px",
                        textAlign: "center",
                        marginBottom: "48px",
                    }}
                >
                    Funding Partners
                </p>
                <p
                    style={{
                        fontFamily: "Figtree",
                        fontWeight: "300px",
                        fontStyle: "Italic",
                        fontSize: "24px",
                        lineHeight: "34px",
                        textAlign: "center",
                        width: "969px",
                        maxWidth: "90%",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
                    Our work can't be done without the support of funding
                    partners. Thank you to Orange County Government, UNC-Chapel
                    Hill, the Town of Chapel Hill, and the Orange County ABC
                    Board for their continuous support.
                </p>
            </main>
            <Footer />
        </div>
    );
}
