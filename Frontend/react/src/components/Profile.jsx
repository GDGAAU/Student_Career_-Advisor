import React, { useState, useEffect } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import styles from './Profile.module.css';

const Profile = () => {
    const [userData, setUserData] = useState({
        email: 'user@example.com',
        username: 'user123',
        firstName: 'John',
        lastName: 'Doe',
        userType: 'student',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(userData);

    useEffect(() => {
        // Fetch user data from the backend or local storage
        // Example: setUserData(fetchedUserData);
    }, []);

    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        setUserData(editData);
        setIsEditing(false);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileBox}>
                <FaEdit className={styles.editIcon} onClick={() => setIsEditing(true)} />
                <h2 className={styles.profileTitle}>Profile</h2>
                <div className={styles.profileHeader}>
                    <FaUserCircle className={styles.profilePicture} />
                    <div className={styles.profileName}>
                        <h3>{userData.firstName} {userData.lastName}</h3>
                        <p className={styles.userType}>{userData.userType}</p>
                    </div>
                </div>
                <div className={styles.profileInfo}>
                    {isEditing ? (
                        <form onSubmit={handleEditSubmit}>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={editData.username}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>First Name:</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={editData.firstName}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Last Name:</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={editData.lastName}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Bio:</label>
                                <textarea
                                    name="bio"
                                    value={editData.bio}
                                    onChange={handleEditChange}
                                    className={styles.textarea}
                                />
                            </div>
                            <button type="submit" className={styles.saveButton}>Save</button>
                        </form>
                    ) : (
                        <>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Email:</label>
                                <p className={styles.info}>{userData.email}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Username:</label>
                                <p className={styles.info}>{userData.username}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>First Name:</label>
                                <p className={styles.info}>{userData.firstName}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Last Name:</label>
                                <p className={styles.info}>{userData.lastName}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;