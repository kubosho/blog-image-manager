'use client';

import { handleSignIn } from '../../server-actions';

type Props = {
  className?: string;
}

export function SignInButton({ className }: Props): React.JSX.Element {
  return (
    <form action={handleSignIn} className={className}>
      <button className="bg-primary-main border border-primary-sub px-4 pt-1 pb-2 rounded-1 text-monotone-100" type="submit">Sign in</button>
    </form>
  );
}
