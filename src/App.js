import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <>
            <>
                {/* Header */}
                <header id="top-header" className="header-home">
                    <div className="grid">
                        <div className="col-1-1">
                            <div className="content">
                                <div className="logo-wrap">
                                    <a
                                        href="https://www.google.com/maps/place/%D8%AD%D9%81%D9%84%D8%A7%D8%AA+%D8%A7%D9%84%D8%B7%D8%A7%D9%87%D9%8A%E2%80%AD/@25.8604945,43.5069765,21z/data=!4m7!3m6!1s0x1583cb004b889313:0xe96b7110dbeb8ad1!4b1!8m2!3d25.8603583!4d43.5068927!16s%2Fg%2F11vz2z26q9?entry=ttu"
                                        className="logo"
                                    >
                                        {"حفلات الطاهي بالرس "}

                                    </a>
                                </div>
                                <nav className="navigation">
                                    <input type="checkbox" id="nav-button"/>
                                    <label htmlFor="nav-button" />
                                    <ul className="nav-container">
                                        <li>
                                            <a href="#home" className="current">
                                                Home
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#services">خدماتنا</a>
                                        </li>
                                        <li>
                                            <a href="#work">الاعمال</a>
                                        </li>
                                        <li>
                                            <a href="#team">فريق العمل</a>
                                        </li>
                                        <li>
                                            <a href="#contact">التصال</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header */}
                <div className="iconwha">
                    <a
                        href="https://wa.me/966551889158"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-whatsapp xx"/>
                    </a>
                </div>
                <div className="iconin">
                    <a
                        href="https://www.instagram.com/altahi_hafalt_0532538000/?hl=ar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="icon-instagram xxi"/>
                    </a>
                </div>
                {/* Parallax Section */}
                <div className="parallax-section parallax1">
                    <div className="grid grid-pad">
                        <div className="col-1-1">
                            <div className="content content-header">
                                <h1> مرحبا بكم في حفلات الطاهي بالرس</h1>
                                {/* <p class="Sub-address">نحن فرييق متكامل الهدف الاول والاساسي هوا راحه العميل ورضائه </p> */}
                                <p className="Sub-address"/>
                                {/* <a target="_blank" class="btn btn-ghost" href="#">Find Out More</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Parallax Section */}
                {/* CurveUp */}
                <svg
                    className="curveUpColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z"/>
                </svg>
                {/* Services Section */}
                <div className="wrap services-wrap" id="services">
                    <section className="grid grid-pad services">
                        <h2>خدماتنا</h2>
                        <div className="ser">
                            <div className="col-1-4 service-box service-1">
                                <div className="content">
                                    <div className="service-icon">
                                        <i className="circle-icon icon-heart4"/>
                                    </div>
                                    <div className="service-entry">
                                        <h3>بوفيه مفتوح</h3>
                                        <p>
                                            يتكون من سخانات علي حسب عدد الاشخاص + المقبلات + حلى + عصائر +
                                            فواكه + ببسي + ماء
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-4 service-box service-2">
                                <div className="content">
                                    <div className="service-icon">
                                        <i className="circle-icon icon-star4"/>
                                    </div>
                                    <div className="service-entry">
                                        <h3> طولات عرض </h3>
                                        <p>يوجد لدينا اشكال متعدده</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-4 service-box service-2">
                                <div className="content">
                                    <div className="service-icon">
                                        <i className="circle-icon icon-star4"/>
                                    </div>
                                    <div className="service-entry">
                                        <h3> كوش </h3>
                                        <p>يوجد لدينا اشكال متعدده</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                {/* End Services Section */}
                {/* CurveDown */}
                <svg
                    className="curveDownColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0 C 50 100 80 100 100 0 Z"/>
                </svg>
                {/* Work Section */}
                <div className="wrap grey recent-wrap" id="work">
                    <section className="grid grid-pad">
                        <h2>الصور</h2>
                        {/* Start of Filter section */}
                        <div className="col-1-1 mix">
                            <ul className="filters">
                                <li className="filter active" data-filter="all">
                                    All
                                </li>
                                <li className="filter" data-filter=".illustration">
                                    بوفيه
                                </li>
                                <li className="filter" data-filter=".web-design">
                                    طولات عرض
                                </li>
                                <li className="filter" data-filter=".photography">
                                    كوش
                                </li>
                            </ul>
                        </div>
                        {/* End of Filter section */}
                        <div className="portfolio-items">
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet8.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix web-design">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/arde.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>طولات عرض</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix web-design">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/arde1.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>طولات عرض</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix web-design">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/arde2.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>طولات عرض</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet3.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet5.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet6.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet7.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet1.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet9.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet0.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet11.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-1  illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet12.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix photography">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/cosh2.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>كوشه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1-3 mix illustration">
                                <div className="content">
                                    <div className="recent-work">
                                        <img src="images/work/buffet4.jpg" alt=""/>
                                        <div className="overlay">
                                            <span>بوفيه</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-1-1"><a class="btn" href="#0">View More</a></div> */}
                    </section>
                </div>
                {/* End Work Section */}
                {/* CurveUp */}
                <svg
                    className="curveUpColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z"/>
                </svg>
                {/* CurveUp */}
                <svg
                    className="curveUpColor curveGrey"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z"/>
                </svg>
                {/* Team Section */}
                <div className="wrap team-wrap grey" id="team">
                    <div className="grid grid-pad">
                        <div className="content">
                            <h2>الفريق</h2>
                            <div className="ser">
                                <div className="col-1-4">
                                    <div className="content staff-content">
                                        <div className="recent-work staff-img">
                                            <div className="img-wrap staff-img">
                                                <img src="images/team/menem.jpg" alt=""/>
                                                <div className="team-social">
                                                    <a className="sl-ln" href="https://wa.me/966532538000">
                                                        <i className="fa-brands fa-whatsapp"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="work-info staff-info">
                                                <h5>عبد المنعم</h5>
                                                <span/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-4">
                                    <div className="content staff-content">
                                        <div className="recent-work staff-img">
                                            <div className="img-wrap staff-img">
                                                <img src="images/team/reda.jpg" alt=""/>
                                            </div>
                                            <div className="work-info staff-info">
                                                <h5>رضا</h5>
                                                <span/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-1-4">
                                    <div className="content staff-content">
                                        <div className="recent-work staff-img">
                                            <div className="img-wrap staff-img">
                                                <img src="images/team/Alaa.jpg" alt=""/>
                                                <div className="team-social">
                                                    <a className="sl-ln" href="https://wa.me/966551889158">
                                                        <i className="fa-brands fa-whatsapp"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="work-info staff-info">
                                                <h5>علاء</h5>
                                                <span/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Team Section */}
                {/* CurveUp */}
                <svg
                    className="curveUpColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z"/>
                </svg>
                {/* Clients Logos Section */}
                <div className="wrap">
                    <div className="grid grid-pad">
                        <div className="col-1-1">
                            <div className="content">
                                {/* Start of Carousel Container */}
                                <div className="cl-logo-carousel col-sm-12">
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/1.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/2.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/3.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/4.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/5.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/1.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/2.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                    <div className="item">
                                        {/* Start of item */}
                                        <a href="#">
                                            <figure>
                                                <img src="images/clients/3.png" alt=""/>
                                            </figure>
                                        </a>
                                    </div>
                                    {/* End of item */}
                                </div>
                                {/* End of Carousel Container */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Clients Logos Section */}
                {/* CurveDown */}
                <svg
                    className="curveDownColor curveMapUp"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0 C 50 100 80 100 100 0 Z"/>
                </svg>
                {/* Parallax Section */}
                <div className="map">
                    <div className="wrap">
                        <section id="cd-google-map">
                            <div id="google-container"/>
                            <div id="cd-zoom-in"/>
                            <div id="cd-zoom-out"/>
                        </section>
                    </div>
                </div>
                {/* End Parallax Section */}
                {/* CurveUp */}
                <svg
                    className="curveUpColor curveMapDown"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 100 C 20 0 50 0 100 100 Z"/>
                </svg>
                {/* Contact Section */}
                <div className="wrap contact" id="contact">
                    <div className="grid grid-pad">
                        <h2>الاتصال</h2>
                        <div className="con">
                            <div className="col-1-2">
                                <div className="content address">
                                    <address>
                                        <div>
                                            <div className="box-icon">
                                                <i className="icon-location"/>
                                            </div>
                                            <span>العنوان:</span>
                                            <p>
                                                <a
                                                    href="https://www.google.com/maps/place/%D8%AD%D9%81%D9%84%D8%A7%D8%AA+%D8%A7%D9%84%D8%B7%D8%A7%D9%87%D9%8A%E2%80%AD/@25.8604945,43.5069765,21z/data=!4m7!3m6!1s0x1583cb004b889313:0xe96b7110dbeb8ad1!4b1!8m2!3d25.8603583!4d43.5068927!16s%2Fg%2F11vz2z26q9?entry=ttu"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    حفلات الطاهي
                                                </a>{" "}
                                            </p>
                                        </div>
                                        <div>
                                            <div className="box-icon">
                                                <i className="icon-clock"/>
                                            </div>
                                            <span>اوقات العمل:</span>
                                            <p>كل يوم من 10ص الي 10م</p>
                                        </div>
                                        <div>
                                            <div className="box-icon">
                                                <i className="icon-phone"/>
                                            </div>
                                            <span>Phone:</span>
                                            <a href="tel:+966 55 188 9158">0 55 188 9158</a>
                                        </div>
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Contact Section */}
                {/* CurveDown */}
                <svg
                    className="curveDownColor"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    width="100%"
                    height={100}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0 0 C 50 100 80 100 100 0 Z"/>
                </svg>
                {/* Footer */}
                <footer className="wrap">
                    <div className="social-footer">
                        <div className="grid grid-pad">
                            <div className="col-1-1">
                                <div className="content">
                                    <div className="social-set">
                                        {/* <a href="#0"><i class="icon-facebook"></i></a>
                      <a href="#0"><i class="icon-twitter"></i></a>
                      <a href="#0"><i class="icon-linkedin2"></i></a>
                      <a href="#0"><i class="icon-dribbble4"></i></a> */}
                                        <a href="https://www.instagram.com/altahi_hafalt_0532538000/">
                                            <i className="icon-instagram"/>
                                        </a>
                                    </div>
                                    <p className="source-org copyright">
                                        © 2024 | All Rights Reserved Created By :{" "}
                                        <a href="https://www.linkedin.com/in/ahmed-alaa-a6b1771b6/">
                                            Ahmed Alaa
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}

            </>

        </>

    );
}

export default App;
