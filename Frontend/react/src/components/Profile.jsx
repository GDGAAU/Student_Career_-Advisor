import React, { useState, useContext } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import styles from './Profile.module.css';
import { LoginContext } from '../contexts/LoginContext';

const Profile = () => {
    const {user, editUserCredential, logout} = useContext(LoginContext)

    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(user);


    const handleEditChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editUserCredential(editData);
        setIsEditing(false);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileBox}>
                <FaEdit className={styles.editIcon} onClick={() => setIsEditing(true)} />
                <h2 className={styles.profileTitle}>Profile</h2>
                {user && <><div className={styles.profileHeader}>
                    <FaUserCircle className={styles.profilePicture} />
                    <div className={styles.profileName}>
                        <h3>{user.fName} {user.lName}</h3>
                        <p className={styles.userType}>{user.userType}</p>
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
                                    name="fName"
                                    value={editData.fName}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Last Name:</label>
                                <input
                                    type="text"
                                    name="lName"
                                    value={editData.lName}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                />
                            </div>
                            <button type="submit" className={styles.saveButton}>Save</button>
                        </form>
                    ) : (
                        <>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>First Name:</label>
                                <p className={styles.info}>{user.firstName}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Last Name:</label>
                                <p className={styles.info}>{user.lastName}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Email:</label>
                                <p className={styles.info}>{user.email}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Username:</label>
                                <p className={styles.info}>{user.username}</p>
                            </div>
                        </>
                    )}
                </div>
                </>}
                {!user && <p style={{ color:'red', fontSize:"2rem" }}>Please login or signup first!</p>}
                <button onClick={logout}>Logout</button>
            </div>
        </div>
    );
};

export default Profile;