import React, { useState } from "react";
import styles from "./form.module.css"; // Import modular CSS

const FormCareerRequest = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputs, setInputs] = useState([{ id: Date.now(), value: "" }]);
  const [hobbies, setHobbies] = useState([{ id: Date.now(), value: "" }]);

  // for special needs
  const handleRadioChange = (event) => {
    setShowInput(event.target.value === "yes");
  };

  const handleAddInput = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  const handleRemoveInput = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  const handleChange = (id, value) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: value } : input
      )
    );
  };

  // for hobbies
  const handleAddHobby = () => {
    setHobbies([...hobbies, { id: Date.now(), value: "" }]);
  };

  const handleRemoveHobby = (id) => {
    setHobbies(hobbies.filter((hobby) => hobby.id !== id));
  };

  const handleHobbyChange = (id, value) => {
    setHobbies(
      hobbies.map((hobby) =>
        hobby.id === id ? { ...hobby, value: value } : hobby
      )
    );
  };

  return (
    <div className={styles.formCareerRequest}>
      <form>
        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label htmlFor="user-role">Who are you?</label>
            <select id="user-role" name="userRole" className={styles.formSelect}>
              <option value="university-student" className={styles.optionStyle}>
                University Student
              </option>
              <option value="job-seeker" className={styles.optionStyle}>
                Job Seeker
              </option>
              <option value="career-counselor" className={styles.optionStyle}>
                Career Counselor
              </option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="user-age">Age</label>
            <input
              type="text"
              id="user-age"
              placeholder="Enter your age"
              className={styles.formInput}
            />
          </div>

          {/* Hobbies Section */}
          <div className={styles.formGroup}>
            <label htmlFor="user-hobby">Hobby</label>
            {hobbies.map((hobby) => (
              <div key={hobby.id} className={`${styles.formGroup} ${styles.inputContainer}`}>
                <input
                  type="text"
                  placeholder="Please specify..."
                  value={hobby.value}
                  onChange={(e) => handleHobbyChange(hobby.id, e.target.value)}
                  className={styles.formInput}
                />
                <button
                  type="button"
                  className={styles.buttonAdd}
                  onClick={handleAddHobby}
                >
                  +
                </button>
                <button
                  type="button"
                  className={styles.buttonRemove}
                  onClick={() => handleRemoveHobby(hobby.id)}
                >
                  x
                </button>
              </div>
            ))}
          </div>

          {/* Special Needs Section */}
          <div className={styles.formGroup}>
            <label>Do you have special needs?</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="special-needs"
                  value="yes"
                  onChange={handleRadioChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="special-needs"
                  value="no"
                  onChange={handleRadioChange}
                />
                No
              </label>
            </div>
          </div>

          {showInput &&
            inputs.map((input) => (
              <div key={input.id} className={`${styles.formGroup} ${styles.inputContainer}`}>
                <input
                  type="text"
                  placeholder="Please specify..."
                  value={input.value}
                  onChange={(e) => handleChange(input.id, e.target.value)}
                  className={styles.formInput}
                />
                <button
                  type="button"
                  className={styles.buttonAdd}
                  onClick={handleAddInput}
                >
                  +
                </button>
                <button
                  type="button"
                  className={styles.buttonRemove}
                  onClick={() => handleRemoveInput(input.id)}
                >
                  x
                </button>
              </div>
            ))}
        </div>

        <div className={styles.formSection}>
          <div className={styles.formGroup}>
            <label>Interested Job Types</label>
            <div className={styles.radioGroup}>
              <label>
                <input type="radio" name="job-type" value="on-site" />
                On-site
              </label>
              <label>
                <input type="radio" name="job-type" value="remote" />
                Remote
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="field-of-interest">Field of interest</label>
            <input
              type="text"
              id="field-of-interest"
              placeholder="Your interests here"
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label>Salary Range</label>
            <div className={styles.inputInline}>
              <div>
                <label htmlFor="salary-min">Min</label>
                <input
                  type="text"
                  id="salary-min"
                  className={`${styles.formInput} ${styles.salaryInput}`}
                  placeholder="Minimum salary"
                />
              </div>
              <div>
                <label htmlFor="salary-max">Max</label>
                <input
                  type="text"
                  id="salary-max"
                  className={`${styles.formInput} ${styles.salaryInput}`}
                  placeholder="Maximum salary"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormCareerRequest;
