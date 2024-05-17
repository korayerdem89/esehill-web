import React from "react";
import Marquee from "react-fast-marquee";
import { useTranslation } from "next-i18next";
const ClientSection = () => {
  const { t } = useTranslation("client");
  return (
    <div className="client-section mb-50 mb-md-130">
      <div className="container-fluid one">
        <h2>{t("references")}</h2>
        <div className="col-lg-12">
          <div className="client-logo-wrap">
            <div className="marque-wrap">
              <Marquee>
                <div className="marquee_text2">
                  <a href="#">
                    <img src="assets/img/home2/refs/1.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/2.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/3.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/4.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/5.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/6.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/7.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/8.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/9.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/10.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/11.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/12.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/13.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/14.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/15.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/16.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/17.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/18.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/19.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/20.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/21.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/22.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/23.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/24.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/25.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/26.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/3.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/img/home2/refs/4.png" alt="" />
                  </a>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
