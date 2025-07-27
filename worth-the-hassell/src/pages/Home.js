import { Typography } from '@mui/material';
import React from 'react';
import phone from '../static/phone.jpg';
import phoneSmall from '../static/phoneSmall.jpeg';
import phoneMedium from '../static/phoneMedium.jpeg';
import s from '../static/s.jpg';
import sSmall from '../static/sSmall.jpeg';
import sMedium from '../static/sMedium.jpeg';
import n from '../static/n.jpg';
import nSmall from '../static/nSmall.jpeg';
import nMedium from '../static/nMedium.jpeg';

const phoneSrcSet = `${phoneSmall} 213w, ${phoneMedium} 427w`
const sSrcSet = `${sSmall} 213w, ${sMedium} 427w`
const nSrcSet = `${nSmall} 213w, ${nMedium} 427w`

function Home() {
  return (
    <div>
      <h6>Our Origin Story</h6>
      <Typography>
On that fateful night June 19, 2010, our friends Lindsey and Kate laid the groundwork for our
great love story. They were bored and decided to try a new game called Icing. They texted
everyone in their phone contacts and if they responded, drove to their location and proceeded to
Ice them.
</Typography>
<img 
  srcSet={phoneSrcSet}
  sizes="(max-width 600px) 213px, 427px"
  src={phone} 
  alt="Lindsey's cell phone with her text to Suzanne open." />
  <Typography>
Nick was first and got got at Kate’s Pub. He decided to join in the fun and jumped in the
backseat of the Saab and they eventually got Suzanne at The Redwood (RIP). Suzanne was
with friends and she told Lindsey and Kate to come into the bar. “We can't, we've been banned, you must
come outside.” And actually, if you know them, it was a plausible story. So she went outside.
</Typography>
<img 
  srcSet={nSrcSet}
  sizes="(max-width 600px) 213px, 427px"
  src={n} 
  alt="Nick drinking a Smirnoff Ice." />
<img 
  srcSet={sSrcSet}
  sizes="(max-width 600px) 213px, 427px"
  src={s} 
  alt="Suzanne drinking a Smirnoff Ice." />
<Typography>
They got a text from their next victim and invited Suzanne along. She hesitated, thinking of her
friend Claire inside the bar. But when she saw Nick, it was decided. She fell under his spell. She
sent Claire an apologetic text (sorry, Claire!), ditched her, and Nick and Suzanne ended up in
the backseat getting to know each other all night long…the beginning of forever!</Typography>
    </div>
  );
}

export default Home;