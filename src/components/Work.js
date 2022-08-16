import React from "react";
import colors from './assets/colors';

const styles = {
    sec: {
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
        display: 'flex',
        flexWrap: 'wrap',
        width: '85%',
        padding: '0px 30px',
        color: colors.black,
    },
    work1: {
        width: '100%',
        display: 'flex',
        position: 'relative',
        borderStyle: 'solid',
        borderColor: colors.lavender,
        margin: '1% 0.5% 0 0.5%',
        /* backgroundImage:  */
        height: 600,
    },
    cover: {
        position: 'absolute',
        backgroundColor: 'gray',
        opacity: '0.5',
        height: '100%',
        width: '100%',
    },
    workContainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: colors.lavender,
        marginBottom: 20,
    },
    workTitle: {
        fontSize: 25,
        textAlign: 'left',
        padding: 5,
    },
    workSubtitle: {
        fontSize: 15,
        textAlign: 'left',
        padding: 5,
    }
}

function Work() {
  return (
    <section id="work" style={styles.sec}>
        <div style={styles.bigSideWords}>
            Work
        </div>
        <div style={styles.main}>
            <div style={styles.work1}>
                <div style={styles.cover}></div>
                <div style={styles.workContainer}>
                    <div style={styles.workTitle}>
                        Pet Connect
                    </div>
                    <div style={styles.workSubtitle}>
                        A prototype dog marketplace - Bootcamp Team Project 2
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Work;