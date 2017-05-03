import * as React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div id="contents">
                <article>
                    <section class="pattern-bg-lighter">
                      <figure><img alt="Masaaki Uegaki" title="Masaaki Uegaki" src="/images/profile.png" /></figure>
                        <h2>
                            <span>Masaaki Uegaki</span>
                        </h2>
                        <h3>
                            <div>Software Engineer</div>
                        </h3>
                        <h3>
                            <span>Osaka, Japan</span>
                        </h3>
                      </section>
                </article>
            </div>
        );
    }
}
