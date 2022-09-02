'use strict';

function About() {
    return (
        <React.Fragment>
            <h2>About the Coders</h2>
            <a href="https://github.com/algavrich" target="_blank">
                Lucy's Github
            </a>
            <br/>
            <a href="https://github.com/CovenantHuman" target="_blank">
                Michaela's Github
            </a>
            <br/>
            <br/>
            <a href="/">Homepage</a>
        </React.Fragment>
    );
}

ReactDOM.render(<About />, document.querySelector('#about'));