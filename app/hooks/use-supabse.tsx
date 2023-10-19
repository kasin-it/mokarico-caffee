import { create } from 'zustand';
import type { createClientComponentClient as createClientComponentClientType } from '@supabase/auth-helpers-nextjs';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

interface useSupabseStore {
  supabse: ReturnType<typeof createClientComponentClientType>;
}

export const useSupabse = create<useSupabseStore>((set) => ({
  supabse: createClientComponentClient(),
}));
