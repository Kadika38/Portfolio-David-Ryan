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
    }
}

function AboutMe() {
  return (
    <section id="aboutMe" style={styles.container}>
      <div style={styles.bigSideWords}>
        About Me
      </div>
    </section>
  );
}

export default AboutMe;