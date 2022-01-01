import Head from 'next/head';

function Signup(){

  return (
    <Fragment>
      <Head>
        
      </Head>
     <main>
       
       <div className='signup-right'>
        <form>
          <h1>Signup</h1>
          <div>
            <lable for='name'>Name</lable>
            <input id='name' className='' />
          </div>
          <div>
            <label>Email Address</label>
            <input id='email' className=''/>
          </div>
          <div>
            <label>Password</label>
            <input id='password' className=''/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input id='confirm' className=''/>
          </div>
          <div>
            {/* Submission button goes here */}
          </div>
          <div>
            {/* Login with facebook goes here */}
          </div>
        </form>
        <p>Do you have account alread? <Link href='/login'>Login here.</Link></p>
       </div>
       <div className='signup-left'>
        {/* Image goes here. */}
       </div>
     </main>
    </Fragment>
  );
}
export default Signup;