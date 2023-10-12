export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      'coffee-grains': {
        Row: {
          gallery: string[] | null;
          grammage: number | null;
          id: string;
          label: string | null;
          price: number | null;
        };
        Insert: {
          gallery?: string[] | null;
          grammage?: number | null;
          id?: string;
          label?: string | null;
          price?: number | null;
        };
        Update: {
          gallery?: string[] | null;
          grammage?: number | null;
          id?: string;
          label?: string | null;
          price?: number | null;
        };
        Relationships: [];
      };
      'ground-coffee': {
        Row: {
          gallery: string[] | null;
          grammge: number | null;
          id: string;
          label: string | null;
          price: number | null;
        };
        Insert: {
          gallery?: string[] | null;
          grammge?: number | null;
          id?: string;
          label?: string | null;
          price?: number | null;
        };
        Update: {
          gallery?: string[] | null;
          grammge?: number | null;
          id?: string;
          label?: string | null;
          price?: number | null;
        };
        Relationships: [];
      };
      'pods-and-capsules': {
        Row: {
          gallery: string[] | null;
          id: string;
          label: string | null;
          price: number | null;
          quantity: number | null;
        };
        Insert: {
          gallery?: string[] | null;
          id?: string;
          label?: string | null;
          price?: number | null;
          quantity?: number | null;
        };
        Update: {
          gallery?: string[] | null;
          id?: string;
          label?: string | null;
          price?: number | null;
          quantity?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
