import { Fragment } from "react/cjs/react.production.min";
import styles from '../../styles/profile/mood.module.css';
import BasicButton from '../../components/Utility/buttons/BasicButton';

function Mood(){
  return(
    <Fragment>
      <main className={styles.container}>
        <div className={styles.mood_left}>
          <h2>Select a Mode</h2>
          <div className={styles.mood_container}>
            <div className={styles.mood_control}>
              <img className="img-fluid image_circle" src="https://media.istockphoto.com/photos/beautiful-fine-art-painter-drawing-in-studio-picture-id1134484969?s=2048x2048" alt="jdlll"/>
              <div>
                <input id="check2" name="mood" type="radio" className={styles.checkbox}/>
                <label for="check2">Real Checkbox2</label>
              </div>
              {/* <div> */}
                <h3>Artisan </h3>
                <p>For those unfamiliar over img's is the vector based rendering inherent to fonts. </p>
              {/* </div> */}
            </div>
            <div className={styles.mood_control}>
              <img className="img-fluid image_circle " src="https://media.istockphoto.com/photos/beautiful-fine-art-painter-drawing-in-studio-picture-id1134484969?s=2048x2048" alt="jdlll"/>
              <div>
                <input id="check2" name="mood" type="radio" className={styles.checkbox}/>
                <label htmlFor="check2">Real Checkbox2</label>
              </div>
              {/* <div> */}
                <h3>Artisan </h3>
                <p>For those unfamiliar over img's is the vector based rendering inherent to fonts. </p>
              {/* </div> */}
            </div>

          </div>
          <BasicButton>Continue</BasicButton>
        </div>
        <div className={styles.mood_right}>
          <img className="img-fluid w-100" src="https://media.istockphoto.com/photos/female-fashion-designer-standing-with-hands-on-hip-in-design-studio-picture-id1161358262?s=2048x2048" alt="djkdl"/>
        </div>
      </main>
    </Fragment>
  );
}

export default Mood;