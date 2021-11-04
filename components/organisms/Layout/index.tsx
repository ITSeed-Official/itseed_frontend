import { FC } from "react";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./index.module.scss";

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
