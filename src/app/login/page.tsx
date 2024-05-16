import Link from "next/link";

const LoginPage = () => {
  return (
    <div className='h-screen w-full flex'>
      <div className='md:flex-[0.5] md:flex items-center justify-center hidden'>
        <h1 className='text-4xl text-green-700 font-bold mx-4'>
          Login to Green Basket
        </h1>
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
              placeholder='Password'
              className='p-3 border rounded text-sm'
            />
            <Link
              href={"/"}
              className='bg-green-700 text-white p-2 rounded font-bold mt-4 text-center'>
              Login
            </Link>
            <div className='flex gap-x-2 flex-wrap'>
              <p>Don&apos;t have an account? </p>
              <Link href='/signup' className='font-bold'>
                Register here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
