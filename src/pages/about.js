import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/Logo.js';
import Github from '../components/Github.js';
import Footer from '../components/Footer.js';

const AboutPage = () => (
  <Layout>
    <SEO title="Who is Mark @ Full Stack Development?" />
    <div className="container-page">
      <div className="uk-container-medium uk-text-center">
        <Logo page="about" />

        <h1 className="uk-text-bolder">
          Who am I{' '}
          <span role="img" aria-label="Who am I?">
            🧐🧐🧐
          </span>
        </h1>
        <div className="uk-card uk-card-default uk-card-body card">
          <h3 className="uk-card-title fancy-font">Mark Fernandez</h3>
          <p>
            I am just an older kid really, with a passion for things like{' '}
            <span role="img" aria-label="rock on">
              🤘
            </span>
            Metallica{' '}
            <span role="img" aria-label="rock on">
              🤘
            </span>{' '}
            <span role="img" aria-label="Fly away">
              ✈️
            </span>{' '}
            Flying{' '}
            <span role="img" aria-label="Fly away">
              ✈️
            </span>{' '}
            <span role="img" aria-label="racing">
              🏁
            </span>{' '}
            Racing{' '}
            <span role="img" aria-label="racing">
              🏁
            </span>{' '}
            and oh boy have I really got into plant based foods recently! <br />
            So now I can also add part time{' '}
            <span role="img" aria-label="chef">
              👨‍🍳 Chef 👨‍🍳
            </span>
          </p>
          <h3 className="uk-card-title fancy-font">What can I do for you?</h3>
          <p>
            If you are looking for a website or a web application, you are in
            the right place. <br />
            <span role="img" aria-label="You're in the right place">
              🤙🤙🤙🤙
            </span>
          </p>
          <h3 className="uk-card-title fancy-font">
            Boring Stuff{' '}
            <span role="img" aria-label="Boring">
              😴
            </span>
          </h3>
          <p>
            <strong>Technologies</strong> I work with: <br />
            Javascript, PHP, NodeJS, Express, Mongo, MySQL, React, Vue, Gatsby,
            HTML, CSS, Progressive Web Apps, Ionic, Photoshop, Figma,
            Illustrator plus some more that are not worth listing... I did tell
            you this was boring... right?
            <br />
            <br />
            So maybe its time for you to see
            <a href="/portfolio"> some of the things</a> I have made. <br />
            <br />I also made this website that you are reading now{' '}
            <span role="img" aria-label="Happy">
              😀
            </span>
          </p>
          <h3 className="uk-card-title fancy-font">Professional Bits</h3>
          <p>
            <strong>Career</strong> (I do work you know)
            <br />
            So I started out in the UK in a small town called Watford.
          </p>
          <h3>Did I mention I was born in the 80s</h3>
          <img
            src="https://media.giphy.com/media/26AHCgWcYM1xSqMaA/giphy.gif"
            alt="80s were the best"
            className="topgun"
          />
          <p>
            So moving on... I studied and got my basic school grades. Everything
            I achieved is by working hard learning everyday. On top of a full
            time career. So after school came college, I am a qualified
            electronics engineer and worked in a mobile phone repair shop. Then
            worked as a mechanic in a popular bowling alley! At least I got free
            10 pin bowling eh{' '}
            <span role="img" aria-label="Cool">
              🤙
            </span>
            <br />
            <br />
            Then I moved to Spain. I have a partnership in a company
            specializing in Air Conditioning and Audio Visual and
            Telecommunications. However my passion has always been web
            technologies. Which I have been doing in my part time as a side gig
            for over 10 years. Mainly in the front end, html &amp; css. I was
            never professionally accredited but I was determined to do the best
            I could as I was so disturbed by the so called professionals I had
            doing work for me in the past, charging me extortionate prices. So
            now I have been working hard learning intensively for the last few
            years in full stack design and programming. Now I'm ready to move
            into my passion full time{' '}
            <span role="img" aria-label="Wink">
              😉
            </span>
            <br />
            <br />
            Everything I do pushes my skills to the test in some form, whether
            it's in the design or the programming, security items or new
            technology stacks.
            <br />
            <br />
            Hopefully you are looking for the
            <a href="/contact"> contact</a> form to get you project going
            <span role="img" aria-label="Get in touch...">
              🤙🤙🤙
            </span>
          </p>
        </div>
        <a
          href="https://github.com/81mark/"
          title="See mark's GitHub page 🤙🤙"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
        </a>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default AboutPage;
