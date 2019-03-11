import Head from 'next/head';

function Footer() {
  return (
    <div>
      © d'souza labs・<a href="static/privacy-policy.txt">privacy</a>・<a href="mailto:preetamjdsouza+apps@gmail.com">contact</a>

      <style jsx>{`
        div {
          color: rgba(255, 255, 255, 0.87);
          padding: 8px;
          margin: auto;
        }
      `}</style>
    </div>
  );
}

export default () =>
  <div className="root">

    <Head>
      <title>Express Saver</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <img className="logo" src="/static/logo.png" alt="Express Saver Logo" />
    </header>

    <div className="container">
      <div className="call-to-action">
        <h1>Estimate your I-495 / I-95 / I-66 express lane rates ahead of time.</h1>
        <div className="buttonContainer">
          <a href="https://itunes.apple.com/us/app/express-saver/id1356633588" className="btn">iOS</a>
          <a href="https://play.google.com/store/apps/details?id=io.mirailabs.fastlane" className="btn" style={{marginLeft: "16px"}}>Android</a>
        </div>
      </div>
      <img className="mock" src="/static/ios.png" alt="Express Saver running on iOS" />
    </div>

    <Footer />

    <style jsx>{`
      .root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        width: 90%;
        margin: auto;
      }
      .logo {
        width: 72px;
        height: auto;
      }
      .container {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1 {
        max-width: 540px;
      }
      .btn {
        padding-top: 8px;
        padding-bottom: 8px;
        padding-left: 16px;
        padding-right: 16px;
        color: white;
        background: none;
        border: 1.5px solid white;
        font-size: 12px;
        text-align: center;
      }
      .call-to-action {
      }
      .mock {
        max-width: 40%;
        height: auto;
      }

      @media (max-width: 600px) {
        .container {
          display: block;
        }
        .mock {
          max-width: 100%;
          margin: auto;
        }
        h1 {
          font-size: 24px;
          max-width: 100%;
        }
        .buttonContainer {
          display: flex;
        }
        .btn {
          flex: 1;
        }
      }
    `}</style>
    <style jsx global>{`
      body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        background: #5472D3;
        color: white;
      }
      a:link {
        color: rgba(255, 255, 255, 0.87);
        text-decoration: none;
      }
      a:visited {
        color: rgba(255, 255, 255, 0.87);
        text-decoration: none;
      }
      a:hover {
        color: white;
      }
    `}</style>
  </div>
