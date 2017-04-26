import * as React from 'react';

export default class Profile extends React.Component {
    render() {
        return (
            <div id="contents">
                <article>
                    <section class="pattern-bg-lighter">
                      <img alt="Masaaki Uegaki" title="Masaaki Uegaki" src="/images/profile.png" />
                        <h2>
                            <span>Masaaki Uegaki</span>
                        </h2>
                        <h3>
                            <div>Software Engineer</div>
                        </h3>
                        <h3>
                            <span>Osaka, Japan</span>
                        </h3>

                        <div class="map active">
                           <img src="http://maps.google.com/maps/api/staticmap?center=34.7229084,135.4907251&markers=color:red|label:|37.775,-122.4183&zoom=14&size=278x125&sensor=false" alt="" />
                        </div>          
                    </section>
                </article>
            </div>
        );
    }
}
