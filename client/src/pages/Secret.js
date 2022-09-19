import React from 'react';
import { useState } from 'react';

export default function Secret({ handlePageChange }) {
    const [the, setThe] = useState(false);
    const [mandalorians, setMandalorians] = useState(false);
    const [heart, setHeart] = useState(false);
    const [burns, setBurns] = useState(false);
    const [brighter, setBrighter] = useState(false);
    const [still, setStill] = useState(false);

    const IsSolved = () => {
        console.log(`${the} ${mandalorians} ${heart} ${burns} ${brighter} ${still}`)
        if (the && mandalorians && heart && burns && brighter && still) {
            setThe(false);
            setMandalorians(false);
            setHeart(false);
            setBurns(false);
            setBrighter(false);
            setStill(false);

            handlePageChange('View');
        };
    }

    return (
        <section className="flexy bodySec">
            <div className="flexy mainStuff">
                If you don't know what you clicked on, this is supposed to be a secret page.  Something on this page is the key to another page that is currently under construction.  You can leave now if you aren't me.
            </div>
            <div className="flexy mainStuff">
                <p className='secretp'><span onClick={() => setThe(true)}>The</span>&nbsp; ash of the Taung beats strong within the&nbsp;<span onClick={() => setMandalorians(true)}>Mandalorians'</span>&nbsp; <span onClick={() => setHeart(true)}>heart</span>s.</p>
                <p className='secretp'>We are the rage of The Warriors of the Shadow,</p>
                <p className='secretp'>The first noble sons of Mandalore.</p>
                <p className='secretp'>Let all those who stand before us light the night sky in flame.</p>
                <p className='secretp'>Our vengeance <span onClick={() => setBurns(true)}>burns</span>&nbsp;<span onClick={() => setBrighter(true)}>brighter</span>&nbsp; <span onClick={() => setStill(true)}>still</span>&nbsp;.</p>

                <p className='secretp'>The gauntlet of Mandalore strikes without mercy.</p>
                <p className='secretp'>We are the rage of The Warriors of the Shadow,</p>
                <p className='secretp'>The first noble sons of Mandalore.</p>
                <p className='secretp'>Let all those who stand before us light the night sky in flame.</p>
                <p className='secretp'>Our <span onClick={() => IsSolved()}>vengeance</span>&nbsp; burns brighter still.</p>
            </div>
        </section>
    );
};