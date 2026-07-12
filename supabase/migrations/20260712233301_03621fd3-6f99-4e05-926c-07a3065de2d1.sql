create extension if not exists vector;

create table if not exists public.book_chunks (
  id uuid primary key default gen_random_uuid(),
  source text not null default 'fuhrmann_intro_business_economics_2019',
  chunk_index int not null,
  content text not null,
  embedding vector(1536) not null,
  created_at timestamptz not null default now()
);

grant select on public.book_chunks to anon, authenticated;
grant all on public.book_chunks to service_role;

alter table public.book_chunks enable row level security;

create policy "Book chunks are public read"
on public.book_chunks for select
to anon, authenticated
using (true);

create index if not exists book_chunks_embedding_idx
  on public.book_chunks using hnsw (embedding vector_cosine_ops);

create or replace function public.match_book_chunks(
  query_embedding vector(1536),
  match_count int default 6
)
returns table (
  id uuid,
  content text,
  chunk_index int,
  similarity float
)
language sql stable
security definer
set search_path = public
as $$
  select
    d.id,
    d.content,
    d.chunk_index,
    1 - (d.embedding <=> query_embedding) as similarity
  from public.book_chunks d
  order by d.embedding <=> query_embedding
  limit match_count;
$$;

grant execute on function public.match_book_chunks(vector, int) to anon, authenticated, service_role;