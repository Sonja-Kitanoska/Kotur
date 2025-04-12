import styles from "./MenuPage.module.css";
const MenuPage = () => {
  return (
    <>
      <div className={`${styles.menuBanner}`}>
        <div className="row justify-content-center align-items-center  h-100 w-100">
          <div className="col-lg-5 col-12 text-white d-flex flex-column justify-content-center align-items-start pe-0 ps-lg-5 px-4 mb-4 mb-lg-0">
            <h2 className="pb-4 text-center ps-5  ">МЕНИ</h2>
            <p className="w-50 ps-5 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Provident nesciunt omnis deleniti odit ducimus. Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Voluptas, id.
            </p>
          </div>
          <div className="col-lg-7  col-12 d-flex justify-content-around align-items-center  ">
            <a
              href="https://www.instagram.com/koturkafeifilm/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bannerCard}`}
            >
              <img src="./images/menu-page/img1.jpg" alt="Menu item 1" />
              <i className={`${styles.iconLink} bi bi-instagram`}></i>
            </a>
            <a
              href="https://www.instagram.com/koturkafeifilm/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bannerCard}`}
            >
              <img src="./images/menu-page/img2.jpg" alt="Menu item 2" />
              <i className={`${styles.iconLink} bi bi-instagram`}></i>
            </a>
            <a
              href="https://www.instagram.com/koturkafeifilm/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.bannerCard}`}
            >
              <img src="./images/menu-page/img3.jpg" alt="Menu item 3" />
              <i className={`${styles.iconLink} bi bi-instagram`}></i>
            </a>
          </div>
        </div>
      </div>
      <main className={`${styles.menuMain} `}>
        <div className="container">
          <div className="row py-5 ">
            <div className="col-12 gap-3  d-flex justify-content-center align-items-center">
              <button className={`${styles.customBtn}`}>Коктели</button>
              <button className={`${styles.customBtn}`}>Кафе</button>
              <button className={`${styles.customBtn}`}>Мезе</button>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row  ">
            <h2 className="text-center pb-5">Коктели</h2>
            <div className="col-8 d-flex flex-wrap gap-3  justify-content-center align-items-center">
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/1.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/2.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/3.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/4.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/5.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/6.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/7.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/8.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/9.png" alt="Cocktail 1" />
              </div>
              <div className={`${styles.listedDrinks}`}>
                <img src="./images/menu-page/10.png" alt="Cocktail 1" />
              </div>
            </div>
            <div className="col-4">
              <div className="col-12">
                <div className={`${styles.popularCard}`}>
                  <h5 className="text-center pb-3 pt-5">Популарно</h5>
                  <div className={`${styles.popularCardImg}`}>
                    <img src="./images/menu-page/1.png" alt="Popular 1" />
                  </div>
                  <h6 className="text-center pt-4">Септември</h6>
                  <p
                    className={`${styles.popularCardText}  text-center pt-4 pb-2 fs-5`}
                  >
                    Summer Cocktails And Mocktails
                  </p>
                  <p className="lead text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quo cumque deserunt nesciunt amet laborum fugiat
                    perspiciatis porro! Molestiae, pariatur.
                  </p>
                </div>
              </div>
              <div className="col-12">
                <div className={`${styles.popularCard}`}>
                  <h5 className="text-center pb-3 pt-5">Препорачуваме</h5>
                  <div className={`${styles.popularCardImg}`}>
                    <img src="./images/menu-page/5.png" alt="Popular 1" />
                  </div>
                  <h6 className="text-center pt-4">Септември</h6>
                  <p
                    className={`${styles.popularCardText}  text-center pt-4 pb-2 fs-5`}
                  >
                    Summer Cocktails And Mocktails
                  </p>
                  <p className="lead text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Autem quo cumque deserunt nesciunt amet laborum fugiat
                    perspiciatis porro! Molestiae, pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MenuPage;
