import react from 'react';
import Image from 'next/image';
import { Label, Input, Button } from '@/components'
import Link from 'next/link';

const Signup = () => {
  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <Label>
                Email address
              </Label>
              <div className="mt-2">
                <Input
                  type="email"
                />
              </div>
            </div>

            <div>
              <Label>
                Phone Number
              </Label>
              <div className="mt-2">
                <Input
                  type="number"
                />
              </div>
            </div>
            <div>
              <Label>
                password
              </Label>
              <div className="mt-2">
                <Input
                  type="password"
                />
              </div>
            </div>

            <div>
                <Label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Passowrd
                </Label>
                <Input
                  type="password"
                />
            </div>

            <div className='flex justify-center items-center'>
              <Button
              size={'xl'}
              >
                Sign up
              </Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup;
