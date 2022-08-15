import React from "react";
import colors from './assets/colors';

const styles = {
  container: {
    backgroundColor: colors.lavender,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  title: {
    backgroundColor: colors.black,
    color: '#F5F5F5',
    fontSize: 60,
    fontWeight: 'bold',
    padding: 5,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10
  },
  linksHolder: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  link: {
    color: colors.black,
    fontSize: 25,
    margin: '10px 5px',
    padding: '45px 10px 0px 10px',
  }
}

function Top() {
  return (
    <section style={styles.container}>
      <div style={styles.title}>
        Portfolio: David Ryan
      </div>
      <div style={styles.linksHolder}>
        <a style={styles.link} href="#aboutMe">About Me</a>
        <a style={styles.link} href="#work">Work</a>
        <a style={styles.link} href="#contactMe">Contact Me</a>
        <a style={styles.link} href="kadikaResume.pdf" target="_blank" download>Resume</a>
      </div>
    </section>
  );
}

export default Top;