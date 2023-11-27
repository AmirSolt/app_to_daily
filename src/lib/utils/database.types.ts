export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      advert_click: {
        Row: {
          advert_component_id: string
          advert_content: number
          created_at: string
          id: number
          user_id: string
        }
        Insert: {
          advert_component_id: string
          advert_content: number
          created_at?: string
          id?: number
          user_id: string
        }
        Update: {
          advert_component_id?: string
          advert_content?: number
          created_at?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "advert_click_advert_content_fkey"
            columns: ["advert_content"]
            isOneToOne: false
            referencedRelation: "advert_content"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "advert_click_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      advert_content: {
        Row: {
          body: string | null
          button_text: string | null
          created_at: string
          id: number
          image_src: string | null
          title: string | null
          url: string | null
        }
        Insert: {
          body?: string | null
          button_text?: string | null
          created_at?: string
          id?: number
          image_src?: string | null
          title?: string | null
          url?: string | null
        }
        Update: {
          body?: string | null
          button_text?: string | null
          created_at?: string
          id?: number
          image_src?: string | null
          title?: string | null
          url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          id: string
          report_filters: string[]
        }
        Insert: {
          created_at?: string
          id: string
          report_filters?: string[]
        }
        Update: {
          created_at?: string
          id?: string
          report_filters?: string[]
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reports: {
        Row: {
          created_at: string
          crime_type: string
          id: string
          occur_at: string
          point: unknown
        }
        Insert: {
          created_at?: string
          crime_type: string
          id: string
          occur_at: string
          point: unknown
        }
        Update: {
          created_at?: string
          crime_type?: string
          id?: string
          occur_at?: string
          point?: unknown
        }
        Relationships: []
      }
      zone_reports: {
        Row: {
          created_at: string
          id: number
          report: string
          zone: string
        }
        Insert: {
          created_at?: string
          id?: number
          report: string
          zone: string
        }
        Update: {
          created_at?: string
          id?: number
          report?: string
          zone?: string
        }
        Relationships: [
          {
            foreignKeyName: "zone_reports_report_fkey"
            columns: ["report"]
            isOneToOne: false
            referencedRelation: "reports"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "zone_reports_zone_fkey"
            columns: ["zone"]
            isOneToOne: false
            referencedRelation: "zones"
            referencedColumns: ["id"]
          }
        ]
      }
      zones: {
        Row: {
          address: string
          created_at: string
          id: string
          label: string
          point: unknown
          radius: number
          user: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: string
          label: string
          point: unknown
          radius?: number
          user: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: string
          label?: string
          point?: unknown
          radius?: number
          user?: string
        }
        Relationships: [
          {
            foreignKeyName: "zones_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
