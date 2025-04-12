import styles from "./MenuPage.module.css";
const MenuPage = () => {
  return (
    <div className={`${styles.menuBanner}`}>
      <div className="row justify-content-center align-items-center  h-100 w-100">
        <div className="col-lg-5 col-12 text-white d-flex flex-column justify-content-center align-items-start pe-0 ps-lg-5 px-4 mb-4 mb-lg-0">
          <h2 className="pb-4 text-center ps-5  ">МЕНИ</h2>
          <p className="w-50 ps-5 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            nesciunt omnis deleniti odit ducimus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Voluptas, id.
          </p>
        </div>
        <div className="col-lg-7  col-12 d-flex justify-content-around align-items-center  ">
          <a
            href="https://www.instagram.com/koturkafeifilm/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card}`}
          >
            <img src="./images/menu-page/img1.jpg" alt="Menu item 1" />
            <i className={`${styles.iconLink} bi bi-instagram`}></i>
          </a>
          <a
            href="https://www.instagram.com/koturkafeifilm/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card}`}
          >
            <img src="./images/menu-page/img2.jpg" alt="Menu item 2" />
            <i className={`${styles.iconLink} bi bi-instagram`}></i>
          </a>
          <a
            href="https://www.instagram.com/koturkafeifilm/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card}`}
          >
            <img src="./images/menu-page/img3.jpg" alt="Menu item 3" />
            <i className={`${styles.iconLink} bi bi-instagram`}></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
