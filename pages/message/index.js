import { Fragment } from "react";
import Header from "../../components/UI/Header";
import Horizontal from "../../components/Utility/lines/Horizontal";
//import styles from '../../styles/chat/Chat.module.css';
import styles from '../../styles/pages/chat_page/chat.module.css';
import MessageBox from '../../components/UI/MessageBox';
import MessageBox2 from "../../components/UI/MessageBox2";


function message(props){
  return(
    <Fragment>
      <main className="background_primary">
        <Header/>
        {/* <Horizontal/> */}
        <div className="container message_container">
          <div className={styles.message_list}>

          </div>
          <div className={styles.main_chat}>
            <div className="container">
              <MessageBox/>
              <MessageBox2/>
              <div className={styles.chat_input_div}>
                <textarea className={styles.chat_input}>
                </textarea>
                <span>
                  <span>Send</span>
                  <i className="fas fa-arrow-circle-up"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default message;