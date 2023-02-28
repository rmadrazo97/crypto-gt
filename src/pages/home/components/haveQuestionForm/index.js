import React from 'react';
import UserInfoForm from './components/userInfoForm';
import socialIcon1 from '../../../../assets/images/socialIcon1.svg';
import socialIcon2 from '../../../../assets/images/socialIcon2.svg';
import socialIcon3 from '../../../../assets/images/socialIcon3.svg';
import socialIcon4 from '../../../../assets/images/socialIcon4.svg';
import socialIcon5 from '../../../../assets/images/socialIcon5.svg';
import './haveQuestionForm.css';

const HaveQuestionForm = () => {
  return (
    <div className="haveQuestionForm">
      <div className="haveQuestionForm-pc">
        <div>
          <p className="haveQuestionForm-text1">¿Tienes preguntas?</p>
          <p className="haveQuestionForm-text2">Estamos aquí para ayudarte.</p>
          <div className="socialIcons">
            <div className="socialIcon">
              <img src={socialIcon1} alt="socialIcon1" />
            </div>
            <div className="socialIcon">
              <img src={socialIcon2} alt="socialIcon2" />
            </div>
            <img src={socialIcon3} alt="socialIcon3" />
            <div className="socialIcon">
              <img src={socialIcon4} alt="socialIcon4" />
            </div>
            <div className="socialIcon">
              <img src={socialIcon5} alt="socialIcon5" />
            </div>
          </div>
        </div>
        <UserInfoForm />
      </div>
      <div className="haveQuestionForm-mobile">
        <p className="haveQuestionForm-text1">¿Tienes preguntas?</p>
        <p className="haveQuestionForm-text2">Estamos aquí para ayudarte.</p>
        <UserInfoForm />
        <div className="socialIcons">
          <div className="socialIcon">
            <img src={socialIcon1} alt="socialIcon1" />
          </div>
          <div className="socialIcon">
            <img src={socialIcon2} alt="socialIcon2" />
          </div>
          <img src={socialIcon3} alt="socialIcon3" />
          <div className="socialIcon">
            <img src={socialIcon4} alt="socialIcon4" />
          </div>
          <div className="socialIcon">
            <img src={socialIcon5} alt="socialIcon5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaveQuestionForm;
