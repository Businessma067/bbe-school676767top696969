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
      activity_events: {
        Row: {
          created_at: string
          duration_ms: number | null
          entity_id: string | null
          entity_type: string | null
          event_type: Database["public"]["Enums"]["activity_event_type"]
          id: string
          metadata: Json
          subject: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          duration_ms?: number | null
          entity_id?: string | null
          entity_type?: string | null
          event_type: Database["public"]["Enums"]["activity_event_type"]
          id?: string
          metadata?: Json
          subject?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          duration_ms?: number | null
          entity_id?: string | null
          entity_type?: string | null
          event_type?: Database["public"]["Enums"]["activity_event_type"]
          id?: string
          metadata?: Json
          subject?: string | null
          user_id?: string
        }
        Relationships: []
      }
      book_chunks: {
        Row: {
          chunk_index: number
          content: string
          created_at: string
          embedding: string
          id: string
          source: string
        }
        Insert: {
          chunk_index: number
          content: string
          created_at?: string
          embedding: string
          id?: string
          source?: string
        }
        Update: {
          chunk_index?: number
          content?: string
          created_at?: string
          embedding?: string
          id?: string
          source?: string
        }
        Relationships: []
      }
      custom_mocks: {
        Row: {
          chapters: string[]
          created_at: string
          duration_minutes: number
          id: string
          points_total: number
          question_count: number
          questions: Json
          subject: string
          title: string
          user_id: string
        }
        Insert: {
          chapters: string[]
          created_at?: string
          duration_minutes: number
          id?: string
          points_total?: number
          question_count: number
          questions?: Json
          subject?: string
          title: string
          user_id: string
        }
        Update: {
          chapters?: string[]
          created_at?: string
          duration_minutes?: number
          id?: string
          points_total?: number
          question_count?: number
          questions?: Json
          subject?: string
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      economics_cases: {
        Row: {
          answer_key: boolean[]
          case_id: string
          context: string
          created_at: string
          difficulty_level: string
          id: string
          sort_order: number
          statements: string[]
          subject: string
          subsection: string
          tactical_explanations: string[]
          tier: string
          title: string
          updated_at: string
        }
        Insert: {
          answer_key: boolean[]
          case_id: string
          context: string
          created_at?: string
          difficulty_level?: string
          id?: string
          sort_order?: number
          statements: string[]
          subject?: string
          subsection: string
          tactical_explanations: string[]
          tier?: string
          title: string
          updated_at?: string
        }
        Update: {
          answer_key?: boolean[]
          case_id?: string
          context?: string
          created_at?: string
          difficulty_level?: string
          id?: string
          sort_order?: number
          statements?: string[]
          subject?: string
          subsection?: string
          tactical_explanations?: string[]
          tier?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      enrollments: {
        Row: {
          created_at: string
          id: string
          product_name: string
          product_slug: string
          tier: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          product_name: string
          product_slug: string
          tier?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          product_name?: string
          product_slug?: string
          tier?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      flashcard_progress: {
        Row: {
          card_id: string
          id: string
          knowledge: Database["public"]["Enums"]["flashcard_knowledge"]
          subject_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          card_id: string
          id?: string
          knowledge?: Database["public"]["Enums"]["flashcard_knowledge"]
          subject_id: string
          updated_at?: string
          user_id: string
        }
        Update: {
          card_id?: string
          id?: string
          knowledge?: Database["public"]["Enums"]["flashcard_knowledge"]
          subject_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mock_attempts: {
        Row: {
          annotations: Json
          answers: Json
          completed_at: string | null
          current_index: number
          exam_id: string
          exam_title: string
          flags: Json
          id: string
          notes: Json
          per_subject: Json
          points_earned: number
          points_total: number
          progress: Json
          seconds_taken: number | null
          started_at: string
          status: string
          timed: boolean
          user_id: string
        }
        Insert: {
          annotations?: Json
          answers?: Json
          completed_at?: string | null
          current_index?: number
          exam_id: string
          exam_title: string
          flags?: Json
          id?: string
          notes?: Json
          per_subject?: Json
          points_earned?: number
          points_total?: number
          progress?: Json
          seconds_taken?: number | null
          started_at?: string
          status?: string
          timed?: boolean
          user_id: string
        }
        Update: {
          annotations?: Json
          answers?: Json
          completed_at?: string | null
          current_index?: number
          exam_id?: string
          exam_title?: string
          flags?: Json
          id?: string
          notes?: Json
          per_subject?: Json
          points_earned?: number
          points_total?: number
          progress?: Json
          seconds_taken?: number | null
          started_at?: string
          status?: string
          timed?: boolean
          user_id?: string
        }
        Relationships: []
      }
      practice_sessions: {
        Row: {
          completed_at: string | null
          correct_answers: number
          created_at: string
          id: string
          mode: string
          started_at: string
          subject_id: string | null
          topic_id: string | null
          total_questions: number
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          correct_answers?: number
          created_at?: string
          id?: string
          mode: string
          started_at?: string
          subject_id?: string | null
          topic_id?: string | null
          total_questions?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          correct_answers?: number
          created_at?: string
          id?: string
          mode?: string
          started_at?: string
          subject_id?: string | null
          topic_id?: string | null
          total_questions?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "practice_sessions_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "practice_sessions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string
          display_name: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_name?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      promo_redeem_attempts: {
        Row: {
          code_attempted: string
          created_at: string
          id: string
          ip_address: string
          success: boolean
          user_id: string | null
        }
        Insert: {
          code_attempted?: string
          created_at?: string
          id?: string
          ip_address: string
          success?: boolean
          user_id?: string | null
        }
        Update: {
          code_attempted?: string
          created_at?: string
          id?: string
          ip_address?: string
          success?: boolean
          user_id?: string | null
        }
        Relationships: []
      }
      promocodes: {
        Row: {
          code: string
          created_at: string
          id: string
          product_slug: string
          used_at: string | null
          used_by: string | null
          used_by_email: string | null
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          product_slug?: string
          used_at?: string | null
          used_by?: string | null
          used_by_email?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          product_slug?: string
          used_at?: string | null
          used_by?: string | null
          used_by_email?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          created_at: string
          difficulty: string | null
          id: string
          image_url: string | null
          is_active: boolean
          stem_text: string
          subject_id: string
          topic_id: string | null
        }
        Insert: {
          created_at?: string
          difficulty?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          stem_text: string
          subject_id: string
          topic_id?: string | null
        }
        Update: {
          created_at?: string
          difficulty?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean
          stem_text?: string
          subject_id?: string
          topic_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "questions_topic_id_fkey"
            columns: ["topic_id"]
            isOneToOne: false
            referencedRelation: "topics"
            referencedColumns: ["id"]
          },
        ]
      }
      session_answers: {
        Row: {
          created_at: string
          id: string
          is_correct: boolean
          question_id: string
          selected_answer: boolean
          session_id: string
          statement_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_correct: boolean
          question_id: string
          selected_answer: boolean
          session_id: string
          statement_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_correct?: boolean
          question_id?: string
          selected_answer?: boolean
          session_id?: string
          statement_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_answers_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "practice_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_answers_statement_id_fkey"
            columns: ["statement_id"]
            isOneToOne: false
            referencedRelation: "statements"
            referencedColumns: ["id"]
          },
        ]
      }
      statements: {
        Row: {
          correct_answer: boolean
          explanation: string | null
          id: string
          question_id: string | null
          statement_order: number
          statement_text: string
        }
        Insert: {
          correct_answer: boolean
          explanation?: string | null
          id?: string
          question_id?: string | null
          statement_order: number
          statement_text: string
        }
        Update: {
          correct_answer?: boolean
          explanation?: string | null
          id?: string
          question_id?: string | null
          statement_order?: number
          statement_text?: string
        }
        Relationships: [
          {
            foreignKeyName: "statements_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      task_attempts: {
        Row: {
          attempt_number: number | null
          chapter: string
          correct_count: number
          created_at: string
          duration_seconds: number | null
          id: string
          is_passed: boolean
          source: string
          statement_count: number
          statement_results: Json | null
          subject: string
          task_key: string
          task_title: string | null
          user_id: string
        }
        Insert: {
          attempt_number?: number | null
          chapter: string
          correct_count?: number
          created_at?: string
          duration_seconds?: number | null
          id?: string
          is_passed?: boolean
          source?: string
          statement_count?: number
          statement_results?: Json | null
          subject: string
          task_key: string
          task_title?: string | null
          user_id: string
        }
        Update: {
          attempt_number?: number | null
          chapter?: string
          correct_count?: number
          created_at?: string
          duration_seconds?: number | null
          id?: string
          is_passed?: boolean
          source?: string
          statement_count?: number
          statement_results?: Json | null
          subject?: string
          task_key?: string
          task_title?: string | null
          user_id?: string
        }
        Relationships: []
      }
      theory_progress: {
        Row: {
          chapter_id: string
          completed: boolean
          id: string
          scroll_pct: number
          section_id: string
          subject: string
          time_seconds: number
          updated_at: string
          user_id: string
        }
        Insert: {
          chapter_id: string
          completed?: boolean
          id?: string
          scroll_pct?: number
          section_id?: string
          subject: string
          time_seconds?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          chapter_id?: string
          completed?: boolean
          id?: string
          scroll_pct?: number
          section_id?: string
          subject?: string
          time_seconds?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      topics: {
        Row: {
          created_at: string
          id: string
          name: string
          slug: string
          subject_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          slug: string
          subject_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          slug?: string
          subject_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "topics_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
        ]
      }
      user_presence: {
        Row: {
          last_path: string | null
          last_seen_at: string
          updated_at: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          last_path?: string | null
          last_seen_at?: string
          updated_at?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          last_path?: string | null
          last_seen_at?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      admin_list_users: {
        Args: never
        Returns: {
          display_name: string
          email: string
          registered_at: string
          user_id: string
        }[]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin_caller: { Args: never; Returns: boolean }
      match_book_chunks: {
        Args: { match_count?: number; query_embedding: string }
        Returns: {
          chunk_index: number
          content: string
          id: string
          similarity: number
        }[]
      }
    }
    Enums: {
      activity_event_type:
        | "page_view"
        | "task_start"
        | "task_submit"
        | "mock_start"
        | "mock_submit"
        | "mock_abandon"
        | "practice_start"
        | "practice_complete"
        | "theory_open"
        | "theory_complete"
        | "flashcard_rate"
        | "login"
      app_role: "admin" | "user" | "student"
      flashcard_knowledge: "known" | "unknown" | "new"
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
    Enums: {
      activity_event_type: [
        "page_view",
        "task_start",
        "task_submit",
        "mock_start",
        "mock_submit",
        "mock_abandon",
        "practice_start",
        "practice_complete",
        "theory_open",
        "theory_complete",
        "flashcard_rate",
        "login",
      ],
      app_role: ["admin", "user", "student"],
      flashcard_knowledge: ["known", "unknown", "new"],
    },
  },
} as const
