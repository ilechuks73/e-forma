import { Fragment } from 'react';
import styles from './MessageBox.module.css';


function MessageBox2(props){
  return (
    <Fragment>
      <div className={styles.MessageBox}>
        <p>Lorem Ipsom</p>
        <div className={styles.message_profile_pic2}>
          <img className={styles.messagePic} src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='lkfdalal'/>
          <div>
            <div className={styles.chat_writeup}>Eloquent also provides methods to make working with many-to-many relationships more convenient.</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default MessageBox2;