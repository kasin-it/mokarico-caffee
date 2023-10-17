import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { Database } from '@/lib/database';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get('email'));
  const password = String(formData.get('password'));
  const cookieStore = cookies();
  const supabase = createRouteHandlerClient<Database>({
    cookies: () => cookieStore,
  });

  try {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
  } catch (error) {
    return new NextResponse('Wrong credentials.', { status: 403 });
  }

  return NextResponse.redirect(requestUrl.origin, {
    status: 301,
  });
}
