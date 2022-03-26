import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ImgSection from '../Components/ImgSection'

import child from "../Assets/images/child.jpg"

const Ramadan = () => {
    return (
        <>

            <NavBar />

            <div className="Imgcontainer">
                <ImgSection headLine="RAMADAN 2021" />
            </div>
            <div className="MainTitlediv">
                <h1 className="Maintitle center">THE PROPHET & MESSENGER OF </h1> <h1 className="Maintitle center">GOD (PBUH) ONCE SAID</h1>
            </div>
            <Container className="textCon">

                <div className="videoDiv">
                    <video className="videoBox" controls >
                        <source src="#" type="video/mp4" />
                    </video>
                </div>
                <div className="videoDiscDiv">
                    <p className="videoDiscHead">RAMADAN HAS COME TO YOU. (IT IS) A MONTH OF BLESSING, IN WHICH GOD COVERS YOU WITH
                        BLESSING, FOR HE SENDS DOWN MERCY, DECREASES SINS AND ANSWERS PRAYERS… IN IT, GOD
                        LOOKS AT YOUR COMPETITION (IN GOOD DEEDS), AND BOASTS ABOUT YOU TO HIS ANGELS. SO
                        SHOW GOD GOODNESS FROM YOURSELVES.</p>
                </div>

                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles"><span >RAMADAN</span> MUBARAK FROM
                        RAHMA WORLDWIDE</h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa">SIX CONSECUTIVE RAMADAN SEASONS HAVE PASSED AND WE ARE WITNESSING THE SEVENTH
                        ONE. YET, THE SITUATION OF THE SYRIAN PEOPLE HASN’T BEEN IMPROVED. IT IS GETTING EVEN
                        WORSE</p>
                    <p className="discriptionPa"> RAMADAN IS AN OPPORTUNITY TO GIVE AND PROVIDE FOR INDIVIDUALS WHO ARE LESS
                        FORTUNATE. AS OUR WORK CONTINUES TO EXPAND, IT’S VITAL TO REFLECT ON WHAT WE’VE
                        ACCOMPLISHED, AND SET OUT NEW CHALLENGES FOR US TO GROW. WE WOULD LIKE TO TAKE A
                        MOMENT TO THANK ALL OF OUR GENEROUS DONORS AND ALL INDIVIDUALS WHO BELIEVE IN
                        OUR MISSION. THIS RAMADAN YOU HAVE AN OPPORTUNITY TO HELP IN DIFFERENT WAYS</p>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles">OUR <span>CHALLENGE</span></h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >OVER THE COURSE OF THESE 30 DAYS, WITH YOUR CONTINUED SUPPORT, WE ARE AIMING TO
                        FEED:</p>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle"><span className="bluefont">1.5 MILLION</span> REFUGEE BENEFICIARIES.</h1>
                </div>
                <div className="MainTitlediv">
                    <h1 className="Maintitle h1-styles">DELIVER  RAMADAN<span >FOOD BASKETS</span></h1>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >ANOTHER WAY TO PROVIDE MEALS DURING RAMADAN IS THROUGH OUR FOOD BASKETS
                        PROGRAM. EACH BASKET IS ACCOMMODATED TO FAMILY SIZE. OUR CHALLENGE THIS MONTH IS
                        TO DISTRIBUTE 30,000 BASKETS</p>
                </div>

                <div className="smallTitleDiv">
                    <p className="smallTitlePa">SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS: <span className="bluefont">$120.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS: <span className="bluefont">$60.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS: <span className="bluefont">$30.00</span></p>
                </div>
                <div className="discriptionPaDiv">
                    <p className="discriptionPa" >ANOTHER WAY TO PROVIDE MEALS DURING RAMADAN IS THROUGH OUR FOOD BASKETS
                        PROGRAM. EACH BASKET IS ACCOMMODATED TO FAMILY SIZE. OUR CHALLENGE THIS MONTH IS
                        TO DISTRIBUTE 30,000 BASKETS</p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">SPONSORING THIS CAMPAIGN FOR THE MONTH OF RAMADAN IS: <span className="bluefont">$120.00 USD</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 4 WEEKS: <span className="bluefont">$120.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 2 WEEKS: <span className="bluefont">$60.00</span></p>
                </div>
                <div className="smallTitleDiv">
                    <p className="smallTitlePa">1 RAMADAN FOOD BASKET FOR 1 FAMILY OF FIVE FOR 1 WEEKS: <span className="bluefont">$30.00</span></p>
                </div>
            </Container>
            <Footer />




        </>
    )
}

export default Ramadan