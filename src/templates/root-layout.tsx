import type { ReactNode } from "react";

import { Header } from "../components/header.js";
import { Footer } from "../components/footer.js";

type RootLayoutProps = { children: ReactNode };

export const RootLayout = async ({ children }: RootLayoutProps) => {
  const data = await getData();

  return (
    <div id="__waku">
      <meta property="description" content={data.description} />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const getData = async () => {
  const data = {
    description: "An internet website!",
  };

  return data;
};
