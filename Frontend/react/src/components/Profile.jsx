import React, { useState, useContext, useEffect } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import styles from './Profile.module.css';
import { LoginContext } from '../contexts/LoginContext';

const Profile = () => {
    const { token, editUserCredential, logout } = useContext(LoginContext);
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("http://127.0.0.1:5000/get-user", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                
                const userData = await response.json();
                setUser(userData);
                setEditData(userData); // Initialize editData with user data
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        if (token) {
            fetchUser();
        } else {
            setLoading(false);
        }

        return () => {
            setUser(null);
            setEditData({});
        };
    }, [token]);

    const handleEditChange = (e) => {
        setEditData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await editUserCredential(editData);
            setUser(updatedUser);
            setIsEditing(false);
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div className={styles.profileContainer}>Loading...</div>;
    }

    if (error) {
        return <div className={styles.profileContainer}>{error}</div>;
    }

    if (!token || !user) {
        return (
            <div className={styles.profileContainer}>
                <p className={styles.errorMessage}>Please login or signup first!</p>
            </div>
        );
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileBox}>
                <FaEdit 
                    className={styles.editIcon} 
                    onClick={() => setIsEditing(!isEditing)} 
                    title="Edit Profile"
                />
                
                <h2 className={styles.profileTitle}>Profile</h2>
                
                <div className={styles.profileHeader}>
                    <FaUserCircle className={styles.profilePicture} />
                    <div className={styles.profileName}>
                        <h3>{user.fName} {user.lName}</h3>
                        <p className={styles.userType}>{user.userType}</p>
                    </div>
                </div>

                <div className={styles.profileInfo}>
                    {isEditing ? (
                        <form onSubmit={handleEditSubmit} className={styles.editForm}>
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={editData.email || ''}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Username:</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={editData.username || ''}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>First Name:</label>
                                <input
                                    type="text"
                                    name="fName"
                                    value={editData.fName || ''}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            
                            <div className={styles.infoGroup}>
                                <label className={styles.label}>Last Name:</label>
                                <input
                                    type="text"
                                    name="lName"
                                    value={editData.lName || ''}
                                    onChange={handleEditChange}
                                    className={styles.input}
                                    required
                                />
                            </div>
                            
                            <div className={styles.buttonGroup}>
                                <button 
                                    type="button" 
                                    className={styles.cancelButton}
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit" 
                                    className={styles.saveButton}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <div className={styles.infoGroup}>
                                <span className={styles.label}>First Name:</span>
                                <p className={styles.info}>{user.fName}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <span className={styles.label}>Last Name:</span>
                                <p className={styles.info}>{user.lName}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <span className={styles.label}>Email:</span>
                                <p className={styles.info}>{user.email}</p>
                            </div>
                            <div className={styles.infoGroup}>
                                <span className={styles.label}>Username:</span>
                                <p className={styles.info}>{user.username}</p>
                            </div>
                        </>
                    )}
                </div>

                <button 
                    onClick={logout} 
                    className={styles.logoutButton}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Profile;