import React, { useState } from "react";
import styles from "./Response.module.css";

const JobList = () => {
    const [selectedJob, setSelectedJob] = useState(null); // Track selected job
    const [seeMore, setSeeMore] = useState(false); // Track 'See More' button state

    const jobs = [
        { id: 1, title: "Software Engineer", description: "Develop and maintain software applications." },
        { id: 2, title: "Product Manager", description: "Oversee product development lifecycle and strategy." },
        { id: 3, title: "UX Designer", description: "Design intuitive and user-friendly interfaces." },
    ];

    const handleJobClick = (job) => {
        setSelectedJob(job);
        setSeeMore(false); // Reset 'See More' state when switching jobs
    };

    return (
        <div className={styles.container}>
            <div className={styles.jobList}>
                <h2 className={styles.title}>Available Jobs</h2>
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className={`${styles.jobItem} ${
                            selectedJob?.id === job.id ? styles.activeJob : ""
                        }`}
                        onClick={() => handleJobClick(job)}
                    >
                        {job.title}
                    </div>
                ))}
            </div>
            <div className={styles.jobDescription}>
                {selectedJob ? (
                    <div>
                        <h3 className={styles.descriptionTitle}>{selectedJob.title}</h3>
                        <p className={styles.descriptionText}>
                            {seeMore
                                ? selectedJob.description + " Explore the full role responsibilities and perks."
                                : selectedJob.description}
                        </p>
                        <button
                            className={styles.seeMoreButton}
                            onClick={() => setSeeMore((prev) => !prev)}
                        >
                            {seeMore ? "See Less" : "See More"}
                        </button>
                    </div>
                ) : (
                    <p className={styles.placeholder}>Select a job to see the description.</p>
                )}
            </div>
        </div>
    );
};

export default JobList;
