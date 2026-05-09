export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      colleges: {
        Row: {
          approved_by: string | null
          average_package: number | null
          branch: string | null
          city: string | null
          college_name: string
          college_type: string | null
          course_name: string | null
          cutoff_max: number | null
          cutoff_min: number | null
          entrance_exam: string | null
          fees_per_year: number | null
          id: string
          placement_rate: number | null
          rating: number | null
          scholarships_available: string | null
          state: string | null
        }
        Insert: {
          approved_by?: string | null
          average_package?: number | null
          branch?: string | null
          city?: string | null
          college_name: string
          college_type?: string | null
          course_name?: string | null
          cutoff_max?: number | null
          cutoff_min?: number | null
          entrance_exam?: string | null
          fees_per_year?: number | null
          id?: string
          placement_rate?: number | null
          rating?: number | null
          scholarships_available?: string | null
          state?: string | null
        }
        Update: {
          approved_by?: string | null
          average_package?: number | null
          branch?: string | null
          city?: string | null
          college_name?: string
          college_type?: string | null
          course_name?: string | null
          cutoff_max?: number | null
          cutoff_min?: number | null
          entrance_exam?: string | null
          fees_per_year?: number | null
          id?: string
          placement_rate?: number | null
          rating?: number | null
          scholarships_available?: string | null
          state?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          district: string | null
          full_name: string | null
          id: string
          state: string | null
          updated_at: string
          user_type: string | null
          wizard_completed: boolean
        }
        Insert: {
          created_at?: string
          district?: string | null
          full_name?: string | null
          id: string
          state?: string | null
          updated_at?: string
          user_type?: string | null
          wizard_completed?: boolean
        }
        Update: {
          created_at?: string
          district?: string | null
          full_name?: string | null
          id?: string
          state?: string | null
          updated_at?: string
          user_type?: string | null
          wizard_completed?: boolean
        }
        Relationships: []
      }
      user_academic_details: {
        Row: {
          board: string | null
          cgpa: number | null
          college_name: string | null
          created_at: string
          cutoff_marks: number | null
          degree: string | null
          id: string
          updated_at: string
          user_id: string
          year: number | null
        }
        Insert: {
          board?: string | null
          cgpa?: number | null
          college_name?: string | null
          created_at?: string
          cutoff_marks?: number | null
          degree?: string | null
          id?: string
          updated_at?: string
          user_id: string
          year?: number | null
        }
        Update: {
          board?: string | null
          cgpa?: number | null
          college_name?: string | null
          created_at?: string
          cutoff_marks?: number | null
          degree?: string | null
          id?: string
          updated_at?: string
          user_id?: string
          year?: number | null
        }
        Relationships: []
      }
      user_goals: {
        Row: {
          career_goal_text: string | null
          created_at: string
          id: string
          relocation_preference: string | null
          salary_expectation: number | null
          updated_at: string
          user_id: string
          work_style: string | null
        }
        Insert: {
          career_goal_text?: string | null
          created_at?: string
          id?: string
          relocation_preference?: string | null
          salary_expectation?: number | null
          updated_at?: string
          user_id: string
          work_style?: string | null
        }
        Update: {
          career_goal_text?: string | null
          created_at?: string
          id?: string
          relocation_preference?: string | null
          salary_expectation?: number | null
          updated_at?: string
          user_id?: string
          work_style?: string | null
        }
        Relationships: []
      }
      user_interests: {
        Row: {
          created_at: string
          id: string
          interest_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interest_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interest_name?: string
          user_id?: string
        }
        Relationships: []
      }
      user_skills: {
        Row: {
          created_at: string
          id: string
          skill_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          skill_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          skill_name?: string
          user_id?: string
        }
        Relationships: []
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

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
