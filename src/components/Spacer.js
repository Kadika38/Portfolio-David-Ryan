import React from "react";
import colors from './assets/colors';

const styles = {
    space: {
        backgroundColor: colors.black,
        height: 40,
    }
}

function Spacer() {
  return (
    <section style={styles.space}></section>
  );
}

export default Spacer;