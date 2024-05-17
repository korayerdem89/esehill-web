import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
const Brands = () => {
  const { t } = useTranslation("brands");
  return (
    <div className="blog-section2 mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-30">
            <div className="section-title1 two">
              <span>{t("key-title-top")}</span>
              <h2>{t("description")}</h2>
            </div>
            <Link legacyBehavior href="/blog-standard">
              <a className="explore-btn two">
                {t("explore-more")}
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  />
                </svg>
                <span />
              </a>
            </Link>
          </div>
          <div className="col-lg-12">
            <div className="divider" />
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <img src="assets/img/home2/blog-img-01.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>Consulting Industry Adapts to the Changing Business Landscape.</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <img src="assets/img/home2/blog-img-03.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>
                          Tech-Driven Disruption: How Consulting Firms Are Embracing Innovation.
                        </a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <img src="assets/img/home2/blog-img-02.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>The Future of Strategy Consulting: Insights from Industry Leaders.</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 blog-wrap">
                <div className="blog-card2">
                  <div className="blog-img magnetic-item">
                    <img src="assets/img/home2/blog-img-04.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>The Role of AI and Data Analytics in Modern Consulting.</a>
                      </Link>
                    </h4>
                    <Link legacyBehavior href="/blog-details">
                      <a className="explore-btn">
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                          />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
