import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            <div className="col col--4">
                <div className="text--center">
                    <img src="/img/landing-01.png" alt="Tracking metrics" title="Tracking metrics" className={styles.featureImg} />
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>Tracking Project Metrics</h3>
                    <p>
                        Check the behavior of your metrics over time.
                    </p>
                </div>
            </div>
            <div className="col col--4">
                <div className="text--center">
                    <img src="/img/landing-02.png" alt="Dependency Analysis" title="Dependency Analysis" className={styles.featureImg} />
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>Dependencies Analysis</h3>
                    <p>
                        Knowing your dependencies and how much your artifacts depend on them is valuable in deciding
                        design changes like refactoring.
                    </p>
                </div>
            </div>
            <div className="col col--4">
                <div className="text--center">
                    <img src="/img/landing-03.png" alt="Tracking metrics" title="Tracking metrics" className={styles.featureImg}  />
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>Improving Quality</h3>
                    <p>
                        Use the collected data to improve the quality of your artifacts, planning fixes,
                        refactorings and adding new features.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
