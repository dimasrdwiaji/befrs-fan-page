import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaPatreon } from "react-icons/fa";

function SiteFooter() {
  const youtubePage = `https://www.youtube.com/c/BestEverFoodReviewShow`;
  const fbPage = `https://www.facebook.com/BestEverFoodReviewShow`;
  const igPage = `https://www.instagram.com/besteverfoodreviewshow/?hl=en`;
  const twitterPage = `https://twitter.com/sonnysided?lang=en`;
  const patreonPage = `https://www.patreon.com/BestEverFoodReviewShow`;

  return (
    <Footer container={true}>
      <main className="w-full text-center">
        <nav className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            name="Flowbite"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">Home</Footer.Link>
            <Footer.Link href="#">Videos</Footer.Link>
            <Footer.Link href="#">Discover Foods</Footer.Link>
            <Footer.Link href="#">About</Footer.Link>
          </Footer.LinkGroup>
        </nav>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <nav className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href={youtubePage} icon={BsYoutube} />
            <Footer.Icon href={fbPage} icon={BsFacebook} />
            <Footer.Icon href={igPage} icon={BsInstagram} />
            <Footer.Icon href={twitterPage} icon={BsTwitter} />
            <Footer.Icon href={patreonPage} icon={FaPatreon} />
          </nav>
        </div>
      </main>
    </Footer>
  );
}

export default SiteFooter;
