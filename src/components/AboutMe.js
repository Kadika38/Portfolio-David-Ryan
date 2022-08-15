import React from "react";
import colors from './assets/colors';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: colors.black,
    },
    bigSideWords: {
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: 55,
        fontWeight: 'bold',
        color: colors.frost,
        justifyContent: 'right',
        textAlign: 'right',
        paddingRight: 10,
        borderRightStyle: 'solid',
        width: '15%',
    },
    main: {
      width: '85%',
      padding: '0px 30px',
      color: colors.frost,
    }
}

function AboutMe() {
  return (
    <section id="aboutMe" style={styles.container}>
      <div style={styles.bigSideWords}>
        About Me
      </div>
      <div style={styles.main}>
            <p>
                Hello!  My name is David Ryan.  I'm currently studying at the UCSD Extension Coding Bootcamp to learn coding.  I graduate from that in September 2022.  Welcome to my portfolio page.  I'm a problem solver at heart; whenever I see a problem all I can do is think about ways to solve it.  That's why I got interested in coding.  It's so much fun.  I get to build super interesting and challenging websites and tools.
            </p>
            <br></br>
            <p>
                Here you'll have access to see some of my projects as well as info about how to contact me.  I'm a very responsive person when to comes to contacting me.  I check my email roughly twice a day at minimum and I answer texts as soon as I read them (usually within an hour or two).  I do not answer phone calls from unknown numbers unless I'm expecting a call.  Feel free to reach out to me whenever.
            </p>
        </div>
    </section>
  );
}

export default AboutMe;