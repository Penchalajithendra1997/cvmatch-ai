-- Database Initialization Script for SkillMatch India

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT CHECK (role IN ('seeker', 'recruiter')) NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Resumes Table
CREATE TABLE IF NOT EXISTS resumes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT,
  skills TEXT[],
  experience_years INT,
  education TEXT,
  embedding vector(1536), -- Dimension for standard embeddings (e.g. OpenAI)
  created_at TIMESTAMP DEFAULT NOW()
);

-- Jobs Table
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recruiter_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  company_name TEXT NOT NULL,
  skills_required TEXT[],
  experience_required INT,
  location TEXT, -- Indian Cities
  salary_range TEXT,
  is_remote BOOLEAN DEFAULT FALSE,
  embedding vector(1536),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Applications Table
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
  seeker_id UUID REFERENCES users(id) ON DELETE CASCADE,
  match_score DECIMAL(5,2),
  status TEXT DEFAULT 'applied' CHECK (status IN ('applied', 'shortlisted', 'rejected', 'interview')),
  created_at TIMESTAMP DEFAULT NOW()
);
