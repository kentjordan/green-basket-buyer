import Link from "next/link";

const SignupPage = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='bg-green-700 md:flex-[0.5] md:flex hidden items-center justify-center'>
        <h1 className='text-4xl text-white font-bold'>Signup</h1>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='w-full max-w-[600px] p-2 rounded'>
          <Link href='/' className='mx-4 my-8 font-bold text-2xl'>
            Green Basket
          </Link>
          <div className='flex flex-col m-4 gap-y-4'>
            <input
              type='text'
              placeholder='Email'
              className='p-3 border rounded text-sm'
            />
            <input
              type='text'
              placeholder='First name'
              className='p-3 border rounded text-sm'
            />
            <input
              type='text'
              placeholder='Last name'
              className='p-3 border rounded text-sm'
            />
            <input
              type='text'
              placeholder='Password'
              className='p-3 border rounded text-sm'
            />
            <input
              type='text'
              placeholder='Verify Password'
              className='p-3 border rounded text-sm'
            />
            <button className='bg-green-800 text-white p-2 rounded font-bold mt-4'>
              Signup
            </button>
            <div className='flex gap-x-2 flex-wrap'>
              <p>Have got an account?</p>
              <Link href='/login' className='font-bold'>
                Login here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
