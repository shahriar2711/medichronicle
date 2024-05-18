import React from "react";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import {Link} from 'react-router-dom'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import signup1 from './animation/signup1.json'
import signup2 from './animation/signup2.json'
import signup3 from './animation/signup3.json'
import signup4 from './animation/signup4.json'
import signup5 from './animation/signup5.json'
import signup6 from './animation/signup6.json'
import Lottie from "lottie-react";

function SignUp() {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [visible, setVisible] = useState(true);
  const [isSmoker, setIsSmoker] = useState(false);
  const [text] = useTypewriter({
    words: [ 'Welcome to Our Platform!', 'Please sign up to get started.'],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  const navigate = useNavigate();

  const notify = () => {
    toast.success('Account created successfully!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "dark",
      })

      setTimeout(() => {
        // Replace "/login" with your actual login page URL
        window.location.href = "/login";
      }, 3000);
  };

  
  

  const handleSmokerChange = (event) => {
    setIsSmoker(event.target.checked);
  };

  const handleNext = () => {
    setCurrentDiv((prevDiv) => prevDiv + 1);
  };

  const handlePrev = () => {
    setCurrentDiv((prevDiv) => prevDiv - 1);
  };

  

  return (
    <div className=" bg-bgcolor bg-cover h-screen">
      {currentDiv === 1 && (
        <div className="flex">
          <div className=" w-3/4 mx-52 py-28">
          {/* Content of div 1 */}
          <motion.h2
           initial={{opacity:0 , y:-500}}
           animate={{opacity:1 , y:0}}
           transition={{
            duration:2,
           }}
           className="font-sans font-extrabold text-3xl text-brandPrimary mb-4">
            &#8796; <span className="text-white">Medi</span>
            <span className="text-brandPrimary">Chronicle</span>
          </motion.h2>
          <h2 className="font-mono font-extrabold  text-xl text-neutralGrey mx- mb-4">
          {text}
          <Cursor/>
          </h2>
          <form action="submit.php" method="POST" className="w-[350px] max-w-sm">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full mb-4 p-2 rounded-sm drop-shadow-sm"
            />
            <br />
            <div className=" flex  ">
              <input
                className=" mb-4 p-2 w-[350px] rounded-sm drop-shadow-sm "
                type={visible ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                required
              />
              <div
                className=" absolute mx-80 my-2  cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
            <div className=" flex  ">
              <input
                className=" mb-4 p-2 w-[350px] rounded-sm drop-shadow-sm "
                type={visible ? "text" : "password"}
                placeholder="Confirm Password"
                name="password"
                required
              />
              <div
                className=" absolute mx-80 my-2  cursor-pointer"
                onClick={() => setVisible(!visible)}
              >
                {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
          </form>
          <button className="btn-primary my-5" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="my-20 w-3/4 h-96">
            <Lottie animationData={signup1}/>
          </div>
        </div>
      )}

      {currentDiv === 2 && (
        <div className="flex">
          <div className="  flex  ">
          <div className=" mx-52 py-10  font-semibold text-white" >
          {/* Content of div 2 */}
          <h1 className="text-2xl text-brandPrimary font-mono font-bold">Personal Info</h1>
          <div className=" mb-2">
            <label for="name" className="">Name:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className=" text-black w-[350px]"
            />
          </div>

          <div className="mb-2">
            <label for="age">Age:</label>
            <br />
            <input
              type="number"
              id="age"
              name="age"
              placeholder="Enter your age"
              className="text-black w-[350px]"
            />
          </div>

          <div className="mb-2">
            <label for="sex">Sex:</label>
            <br />
            <select id="sex" name="sex" className="text-black w-[350px]">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-2">
            <label for="address">Address:</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your current address"
              className="text-black w-[350px]"
            />
          </div>

          <div className="mb-2">
            <label for="religion">Religion:</label>
            <br />
            <input
              type="text"
              id="religion"
              name="religion"
              placeholder="Enter your religious affiliation"
              className="text-black w-[350px]"
            />
          </div>

          <div className="mb-2">
            <label for="marital_status">Marital Status:</label>
            <br />
            <select id="marital_status" name="marital_status" className="text-black w-[350px]">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          <div className="mb-2">
            <label for="occupation">Occupation:</label>
            <br />
            <input
              type="text"
              id="occupation"
              name="occupation"
              placeholder="Enter your current occupation"
              className="text-black w-[350px]"
            />
          </div>
          <button className="btn-primary my-2" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn-primary mx-10" onClick={handleNext}>
            Next
          </button>
        </div>
        </div>
        <div className=" w-5/12">
          <Lottie animationData={signup2}/>
        </div>
        </div>
      )}

      {currentDiv === 3 && (
        <div className="flex">
          <div className=" mx-48 py-16 text-white text-lg ">
          {/* Content of div 3 */}
          <div className="question-section mb-4">
          <label for="smoker" className="mb-3">Are you a smoker?</label><br/>
          <label htmlFor="smoker_yes">
          <input
            type="radio"
            id="smoker_yes"
            name="smoker"
            value="yes"
            checked={isSmoker}
            onChange={handleSmokerChange}
          />
          Yes
          </label>
          <label htmlFor="smoker_no">
            <input
              type="radio"
              id="smoker_no"
              name="smoker"
              value="no"
              checked={!isSmoker}
              onChange={() => setIsSmoker(false)}
            />
             No
          </label>
          </div>

          {isSmoker && (
        <div className="question-section flex flex-col" id="smoking_questions">
          <label htmlFor="cigarettes_per_day" className="mb-2">
            How many cigarettes do you smoke per day?
          </label>
          <input
            type="number"
            id="cigarettes_per_day"
            name="cigarettes_per_day"
            placeholder="Enter number of cigarettes"
            className="text-black mb-2 w-[350px]"
          />

          <label htmlFor="smoking_duration" className="mb-2">
            How long have you been smoking?
          </label>
          <input
            type="text"
            id="smoking_duration"
            name="smoking_duration"
            placeholder="Enter duration of smoking"
            className="text-black mb-2 w-[350px]"
          />

          <label htmlFor="quit_attempt" className="mb-2">
            Have you tried to quit smoking?
          </label>
          <select id="quit_attempt" name="quit_attempt" className="text-black mb-2 w-[350px]">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <label htmlFor="cessation_aids" className="mb-2">
            Are you using smoking cessation aids?
          </label>
          <input
            type="text"
            id="cessation_aids"
            name="cessation_aids"
            placeholder="Enter cessation aids being used"
            className="text-black mb-2 w-[350px]"
          />

          <label htmlFor="respiratory_symptoms" className="mb-2">
            Do you experience respiratory symptoms?
          </label>
          <div>
          <input
            type="radio"
            id="respiratory_symptoms_yes"
            name="respiratory_symptoms"
            value="yes"
            
          />
          <label htmlFor="respiratory_symptoms_yes">Yes</label>
          <input
            type="radio"
            id="respiratory_symptoms_no"
            name="respiratory_symptoms"
            value="no"
          />
          <label htmlFor="respiratory_symptoms_no">No</label>
          </div>
        </div>
      )}

          <button className="btn-primary my-2" onClick={handlePrev}>
            Previous
          </button>
          <button className="btn-primary mx-10" onClick={handleNext}>
            Next
          </button>
        </div>
        <div className="w-5/12">
          <Lottie animationData={signup3}/>
        </div>
        </div>
      )}

      {/* {currentDiv === 4 && (
        <div className=" mx-48 py-16 text-white">
          
          <h2 >Travelling History</h2>
          <div className="question-section">
              <label for="traveling">Have you traveled internationally in the past 30 days?</label><br/>
              <input type="radio" id="traveling_yes" name="traveling" value="yes"/>
              <label for="traveling_yes">Yes</label>
              <input type="radio" id="traveling_no" name="traveling" value="no"/>
              <label for="traveling_no">No</label>
              <br/>
              <label for="travel_details">If yes, please list the countries you have visited:</label><br/>
              <textarea id="travel_details" name="travel_details" placeholder="Enter countries visited"></textarea>
          </div>

          <h2>Occupational History</h2>
          <div className="question-section">
              <label for="occupation">What is your current occupation?</label><br/>
              <input type="text" id="occupation" name="occupation" placeholder="Enter your occupation"/>
          </div>

          <div className="question-section">
              <label for="job_change">Have you recently changed jobs or been exposed to new occupational hazards?</label><br/>
              <input type="radio" id="job_change_yes" name="job_change" value="yes"/>
              <label for="job_change_yes">Yes</label>
              <input type="radio" id="job_change_no" name="job_change" value="no"/>
              <label for="job_change_no">No</label>
              <br/>
              <label for="job_change_details">If yes, please provide details:</label><br/>
              <textarea id="job_change_details" name="job_change_details" placeholder="Enter details"></textarea>
          </div>

          <div className="question-section">
              <label for="occupational_hazards">Are you frequently exposed to chemicals, dust, or other occupational hazards?</label><br/>
              <input type="radio" id="occupational_hazards_yes" name="occupational_hazards" value="yes"/>
              <label for="occupational_hazards_yes">Yes</label>
              <input type="radio" id="occupational_hazards_no" name="occupational_hazards" value="no"/>
              <label for="occupational_hazards_no">No</label>
              <br/>
              <label for="occupational_hazards_details">If yes, please specify:</label><br/>
              <textarea id="occupational_hazards_details" name="occupational_hazards_details" placeholder="Enter details"></textarea>
          </div>
          <button className="btn-primary" onClick={handlePrev}>Previous</button>
          <button className="btn-primary" onClick={handleNext}>Next</button>
        </div>
      )} */}

      {currentDiv === 4 && (
        <div className="flex">
          <div className=" mx-48 py-16 text-white">
          {/* Content of div 5 */}
          <h2 className="text-xl font-bold text-brandPrimary mb-2">Vaccination History</h2>
          <div className="question-section text-lg mb-2">
              <label for="vaccinated">Are you up-to-date with your vaccinations?</label><br/>
              <input type="radio" id="vaccinated_yes" name="vaccinated" value="yes"/>
              <label for="vaccinated_yes">Yes</label>
              <input type="radio" id="vaccinated_no" name="vaccinated" value="no"/>
              <label for="vaccinated_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="last_vaccination">When did you receive your last vaccination?</label><br/>
              <input type="date" id="last_vaccination" name="last_vaccination"/>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="recent_vaccination">Have you received any vaccinations recently? If yes, please provide details:</label><br/>
              <textarea id="recent_vaccination" name="recent_vaccination" placeholder="Enter vaccination details"></textarea>
          </div>

          <h2 className="text-xl font-bold text-brandPrimary mb-2">Allergy History</h2>
          <div className="question-section text-lg mb-2">
              <label for="allergies">Do you have any known allergies?</label><br/>
              <input type="radio" id="allergies_yes" name="allergies" value="yes"/>
              <label for="allergies_yes">Yes</label>
              <input type="radio" id="allergies_no" name="allergies" value="no"/>
              <label for="allergies_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="allergy_details">If yes, please list the allergens and the type of reaction you experience:</label><br/>
              <textarea id="allergy_details" name="allergy_details" placeholder="Enter allergy details"></textarea>
          </div>
          <button className="btn-primary my-2" onClick={handlePrev}>Previous</button>
          <button className="btn-primary mx-10" onClick={handleNext}>Next</button>
        </div>
        <div>
          <Lottie animationData={signup4}/>
        </div>
        </div>
      )}

      {currentDiv === 5 && (
        <div className="flex">
          <div className=" mx-48 py-16 text-white">
          {/* Content of div 6 */}
          <h2 className="text-xl font-bold text-brandPrimary mb-2">Psychiatric History</h2>
          <div className="question-section text-lg mb-2">
              <label for="psychiatric_diagnosis">Have you ever been diagnosed with any psychiatric disorders (e.g., depression, anxiety)?</label><br/>
              <input type="radio" id="psychiatric_diagnosis_yes" name="psychiatric_diagnosis" value="yes"/>
              <label for="psychiatric_diagnosis_yes">Yes</label>
              <input type="radio" id="psychiatric_diagnosis_no" name="psychiatric_diagnosis" value="no"/>
              <label for="psychiatric_diagnosis_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="psychiatric_treatment">Have you received any psychiatric treatment in the past?</label><br/>
              <input type="radio" id="psychiatric_treatment_yes" name="psychiatric_treatment" value="yes"/>
              <label for="psychiatric_treatment_yes">Yes</label>
              <input type="radio" id="psychiatric_treatment_no" name="psychiatric_treatment" value="no"/>
              <label for="psychiatric_treatment_no">No</label>
          </div>

          <h2 className="text-xl font-bold text-brandPrimary mb-2">Diabetic History</h2>
          <div className="question-section text-lg mb-2">
              <label for="diabetes_diagnosis">Have you been diagnosed with diabetes?</label><br/>
              <input type="radio" id="diabetes_diagnosis_yes" name="diabetes_diagnosis" value="yes"/>
              <label for="diabetes_diagnosis_yes">Yes</label>
              <input type="radio" id="diabetes_diagnosis_no" name="diabetes_diagnosis" value="no"/>
              <label for="diabetes_diagnosis_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="diabetes_type">If yes, what type of diabetes do you have?</label><br/>
              <input type="text" id="diabetes_type" name="diabetes_type" placeholder="Enter diabetes type"/>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="diabetes_management">How do you manage your diabetes?</label><br/>
              <textarea id="diabetes_management" name="diabetes_management" placeholder="Enter diabetes management"></textarea>
          </div>
          <button className="btn-primary my-4" onClick={handlePrev}>Previous</button>
          <button className="btn-primary mx-10" onClick={handleNext}>Next</button>
        </div>
        <div className=" w-2/6">
          <Lottie animationData={signup5}/>
        </div>
        </div>
      )}

      {currentDiv === 6 && (
        <div className="flex">
          <div className=" mx-48 py-16 text-white">
          {/* Content of div 7 */}
          <h2 className="text-xl font-bold text-brandPrimary mb-2">Blood Pressure History</h2>
          <div className="question-section text-lg mb-2">
              <label for="blood_pressure_diagnosis">Have you been diagnosed with high blood pressure (hypertension)?</label><br/>
              <input type="radio" id="blood_pressure_diagnosis_yes" name="blood_pressure_diagnosis" value="yes"/>
              <label for="blood_pressure_diagnosis_yes">Yes</label>
              <input type="radio" id="blood_pressure_diagnosis_no" name="blood_pressure_diagnosis" value="no"/>
              <label for="blood_pressure_diagnosis_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="blood_pressure_medication">If yes, are you currently taking medications to control your blood pressure?</label><br/>
              <input type="radio" id="blood_pressure_medication_yes" name="blood_pressure_medication" value="yes"/>
              <label for="blood_pressure_medication_yes">Yes</label>
              <input type="radio" id="blood_pressure_medication_no" name="blood_pressure_medication" value="no"/>
              <label for="blood_pressure_medication_no">No</label>
          </div>

          <div className="question-section text-lg mb-2">
              <label for="blood_pressure_reading">What is your average blood pressure reading (if known)?</label><br/>
              <input type="text" id="blood_pressure_reading" name="blood_pressure_reading" placeholder="Enter average blood pressure reading"/>
          </div>
          <button className="btn-primary my-4" onClick={handlePrev}>Previous</button>
          <button className="btn-primary mx-10"   onClick={notify}>Create Account</button>
          <ToastContainer/>
        </div>
        <div className="my-20">
          <Lottie animationData={signup6}/>
        </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
